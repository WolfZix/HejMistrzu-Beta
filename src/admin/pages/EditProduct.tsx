import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "@/admin/components/Products/ProductForm/ProductForm";
import ProductPreview from "@/admin/components/Products/ProductPreview";
import AddVariationModal from "@/admin/components/Products/AddVariationModal";
import type {
  ProductFormData,
  ProductVariationFormData,
  Category,
  ExistingProductImage,
} from "@/types/store";
import { initialProductFormData } from "@/data/store";
import PageLoader from "@/pages/PageLoader";

export default function EditProduct() {
  const { id } = useParams();

  const [formData, setFormData] = useState<ProductFormData>(initialProductFormData);
  const [categories, setCategories] = useState<Category[]>([]);
  const [existingImages, setExistingImages] = useState<ExistingProductImage[]>([]);
  const [previewImage, setPreviewImage] = useState<string>();
  const [isVariationOpen, setIsVariationOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editingVariationIndex, setEditingVariationIndex] = useState<number | null>(null);
  const editingVariation = editingVariationIndex === null ? null : formData.variations[editingVariationIndex] ?? null;

  const hasVariations = formData.variations.length > 0;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/categories`)
      .then((res) => res.json())
      .then(setCategories)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!id) return;

    async function loadProduct() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}/edit`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!response.ok) { throw new Error("Nie udało się pobrać produktu") }

        const data = await response.json();
        const product = data.product;

        //TEMP
        console.log(
          "[EditProduct] InPost metadata:",
          product.meta_data?.filter(
            (meta: any) =>
              meta.key === "woo_inpost_shipping_methods_allowed"
          )
        );
        //

        const variations: ProductVariationFormData[] = data.variations.map((variation: any) => ({
          id: variation.woocommerce_id,
            name: variation.name,
            price: String(variation.regular_price ?? variation.price ?? ""),
            salePrice: String(variation.sale_price ?? ""),
            stock: String(variation.stock_quantity ?? ""),
            image: null,
            imageUrl: variation.image_url ?? undefined,
          }));

        setExistingImages(
          data.images.map((image: ExistingProductImage) => ({
            woocommerce_id: image.woocommerce_id,
            url: image.url,
            position: image.position,
          }))
        );

        const inpostMeta = product.meta_data?.find((meta: any) => meta.key === "woo_inpost_shipping_methods_allowed");
        const inpostMethods = inpostMeta?.value ?? initialProductFormData.inpostMethods;
        const normalizedInpostMethods = typeof inpostMethods === "string" ? JSON.parse(inpostMethods || "[]") : inpostMethods;

        //TEMP
        console.log("[InPost] wartości z API:",normalizedInpostMethods);
        //

        setFormData({
          ...initialProductFormData,
          name: product.name ?? "",
          description: product.description ?? "",
          price: String(product.regular_price ?? ""),
          salePrice: String(product.sale_price ?? ""),
          onSale: Boolean(product.sale_price || variations.some((variation) => variation.salePrice.trim() !== "")),
          stock: String(product.stock_quantity ?? ""),
          preorder: Boolean(product.meta_data?.find((meta: any) => meta.key === "_hejmistrzu_preorder")?.value),
          visible: product.status === "publish",
          categoryIds: data.categories.map((category: Category) => category.id),
          sku: product.sku ?? "",
          gtin: product.gtin ?? "",
          manageStock: Boolean(product.manage_stock),
          soldIndividually: Boolean(product.sold_individually),
          lowStockThreshold: String(product.low_stock_amount ?? 5),
          backorders:
            product.backorders === "notify" ? "Zezwalaj + poinformuj"
              : product.backorders === "yes" ? "Zezwalaj"
                : "Nie zezwalaj",
          weight: String(product.weight ?? ""),
          length: String(product.length ?? ""),
          width: String(product.width ?? ""),
          height: String(product.height ?? ""),
          purchaseNote: product.purchase_note ?? "",
          menuOrder: String(product.menu_order ?? 0),
          variations,
          inpostMethods: normalizedInpostMethods,
        });
      } catch (error) {
        console.error(error);
        alert("Nie udało się wczytać produktu do edycji.");
      } finally { setLoading(false) }
    }

    loadProduct();
  }, [id]);

  useEffect(() => {
    const firstImage = existingImages[0]?.url;

    if (firstImage) {
      setPreviewImage(firstImage);
    } else if (formData.images[0]) {
      const objectUrl = URL.createObjectURL(formData.images[0]);
      setPreviewImage(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreviewImage(undefined);
    }
  }, [existingImages, formData.images]);

  function handleSaveVariation(variation: ProductVariationFormData) {
    if (editingVariationIndex === null) return;

    setFormData((prev) => ({
      ...prev,
      variations: prev.variations.map((item, index) =>
        index === editingVariationIndex
          ? {
            ...variation,
            id: item.id,
            imageUrl: variation.image ? undefined : item.imageUrl,
          }
          : item
      ),
    }));

    setEditingVariationIndex(null);
    setIsVariationOpen(false);
  }

  function handleAddVariation(variation: ProductVariationFormData) {
    setFormData((prev) => ({
      ...prev,
      variations: [...prev.variations, variation],
      ...(prev.variations.length === 0 && {
        price: "",
        salePrice: "",
        stock: "",
        manageStock: false,
      }),
    }));

    setIsVariationOpen(false);
  }

  
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!id) return;

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("categoryIds", JSON.stringify(formData.categoryIds));
    data.append("price", formData.price);
    data.append("salePrice", formData.salePrice);
    data.append("preorder", String(formData.preorder));
    data.append("visible", String(formData.visible));
    data.append("sku", formData.sku);
    data.append("gtin", formData.gtin);
    data.append("manageStock", String(formData.manageStock));
    data.append("stock", formData.stock);
    data.append("soldIndividually", String(formData.soldIndividually));
    data.append("lowStockThreshold", formData.lowStockThreshold);
    data.append("backorders", formData.backorders);
    data.append("weight", formData.weight);
    data.append("length", formData.length);
    data.append("width", formData.width);
    data.append("height", formData.height);
    data.append("purchaseNote", formData.purchaseNote);
    data.append("menuOrder", formData.menuOrder);
    data.append("inpostMethods", JSON.stringify(formData.inpostMethods));
    data.append("posAvailable", String(formData.posAvailable));

    
    const variationsWithImages = formData.variations.map(
      ({ image, ...variation }) => ({
        ...variation,
        hasNewImage: Boolean(image),
      })
    );

    data.append("variations", JSON.stringify(variationsWithImages));

    formData.variations.forEach((variation, index) => {
      if (variation.image) {
        data.append("variationImages", variation.image);
        data.append("variationImageIndexes", String(index));
      }
    });


    formData.images.forEach((image) => { data.append("images", image) });
    formData.variations.forEach((variation) => {
      if (variation.image) { data.append("variationImages", variation.image) }
    });

    data.append("existingImages", JSON.stringify(existingImages));

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/products/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: data,
      }
    );

    const result = await response.json();
    if (!response.ok) { throw new Error(result.message || "Nie udało się zapisać produktu") }
    alert("Produkt został zaktualizowany.");
  }


  function closePage() { window.history.back() }

  if (loading) { return <PageLoader /> }

  return (
    <div className="min-h-screen p-6">
      <div className="mb-6">
        <h2 className="font-heading text-2xl font-semibold">
          Edytuj produkt
        </h2>
      </div>

      <div className="flex flex-col-reverse items-start gap-10 xl:mb-0 mb-[20rem]">
        <div className="w-full">
          <ProductForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            closeModal={closePage}
            onAddVariation={() => setIsVariationOpen(true)}
            categories={categories}
            hasVariations={hasVariations}
            isEditing
            existingImages={existingImages}
            setExistingImages={setExistingImages}
            onEditVariation={(index) => {
              setEditingVariationIndex(index);
              setIsVariationOpen(true);
            }}
          />
        </div>

        <ProductPreview
          formData={formData}
          imageSrc={previewImage}
          categories={categories}
          hasVariations={hasVariations}
        />
      </div>

      <AddVariationModal
        isOpen={isVariationOpen}
        onClose={() => {
          setIsVariationOpen(false);
          setEditingVariationIndex(null);
        }}
        onAdd={handleAddVariation}
        variationToEdit={editingVariation}
        onSave={handleSaveVariation}
      />
    </div>
  );
}
