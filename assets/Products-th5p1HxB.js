import{j as e,g as o,q as _,k as v,X as A,P as D,U as $,V as Z}from"./index-C_QLmIC9.js";import{A as B,P as R}from"./AdminTable-CXh4nhTF.js";import{F as f,D as K}from"./FormInput-74BFKpDI.js";import{F as E,T as U}from"./TableFilters-DlYaRLmk.js";import{n as M}from"./index-Bc4rgiU6.js";import{T as W}from"./triangle-alert-DRfEZMVD.js";import"./chevron-down-CRIsPdY7.js";import"./input-u3QqF4L6.js";import"./search-Ch7CNiob.js";function G({label:n,value:t,onChange:s,placeholder:i="",rows:l=4,required:d=!1,className:u=""}){return e.jsxs("div",{className:`flex flex-col gap-2 w-full ${u}`,children:[e.jsxs("label",{className:"text-sm",children:[n,d&&e.jsx("span",{className:"text-red-500",children:" *"})]}),e.jsx("textarea",{value:t,rows:l,placeholder:i,onChange:c=>s(c.target.value),className:`\r
          w-full\r
          p-3\r
          rounded-lg\r
          bg-background/50\r
          border border-primary/20\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          outline-none\r
          resize-none\r
        `})]})}function N({label:n,value:t,onChange:s,className:i=""}){return e.jsxs("div",{className:`w-full ${i}`,children:[e.jsx("label",{className:"block mb-2",children:n}),e.jsx("button",{type:"button",onClick:()=>s(!t),className:`
            w-full
            h-10
            rounded-lg
            border
            transition-all
            ${t?"bg-primary text-black border-primary":"border-primary/20 bg-background/50"}
          `,children:t?"Tak":"Nie"})]})}function V({label:n,required:t=!1,className:s="",onChange:i}){return e.jsxs("div",{className:`flex flex-col gap-2 w-full ${s}`,children:[e.jsxs("label",{className:"text-sm",children:[n,t&&e.jsx("span",{className:"text-red-500",children:" *"})]}),e.jsx("input",{type:"file",onChange:l=>{var d;return i==null?void 0:i(((d=l.target.files)==null?void 0:d[0])??null)},className:`\r
          w-full\r
          p-3\r
          rounded-lg\r
          bg-background/50\r
          border border-primary/20\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          outline-none\r
        `})]})}const L=["Pokemon","Magic","Warhammer","RPG","Planszówki","Akcesoria"],X=["Booster","ETB","Deck","Sleeves","Dice"];function T({formData:n,setFormData:t,handleSubmit:s,closeModal:i}){const[l,d]=o.useState(""),[u,c]=o.useState(!1),[p,h]=o.useState(!1),[b,j]=o.useState(!0);return e.jsxs("form",{onSubmit:s,className:"flex flex-col gap-4",children:[e.jsx("div",{className:"grid grid-cols-3 gap-4",children:e.jsxs("div",{className:"col-span-3 flex gap-4 items-end justify-between",children:[e.jsx(f,{label:"Nazwa produktu",value:n.name,onChange:a=>t(x=>({...x,name:a})),placeholder:"Figurki Warhammer 40K",required:!0}),e.jsx(E,{label:"Kategoria",containerClassname:"w-full",value:n.category,onChange:a=>t(x=>({...x,category:a})),options:L.map(a=>({value:a,label:a}))}),e.jsx(E,{label:"Podkategoria",containerClassname:"w-full",value:l,onChange:d,options:X.map(a=>({value:a,label:a}))})]})}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx(G,{className:"col-span-2",label:"Opis",value:n.description,onChange:a=>t(x=>({...x,description:a})),placeholder:"Ładnie się świeci...",rows:6,required:!0}),e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsx("div",{className:"col-span-3",children:e.jsx(V,{label:"Zdjęcie",required:!0})}),e.jsxs("div",{className:"col-span-3 flex justify-between gap-4",children:[e.jsx(N,{label:"Preorder",value:u,onChange:c}),e.jsx(N,{label:"Promocja",value:p,onChange:h}),e.jsx(N,{label:"Widoczny",value:b,onChange:j})]})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx(f,{label:"Cena",value:n.price,onChange:a=>t(x=>({...x,price:a})),type:"number",placeholder:"9999,99",required:!0}),e.jsx(f,{label:"Cena promocyjna",value:n.salePrice,onChange:a=>t(x=>({...x,salePrice:a})),type:"number",placeholder:"9999,99"}),e.jsx(f,{label:"Stan magazynowy",value:n.stock,onChange:a=>t(x=>({...x,stock:a})),type:"number",placeholder:"9999",required:!0})]}),e.jsxs("div",{className:"flex gap-3 pt-2",children:[e.jsx("button",{type:"button",onClick:i,className:`\r
            flex-1\r
            py-2\r
            rounded-md\r
            border\r
            border-muted-foreground/20\r
            hover:bg-foreground/10\r
            transition-all duration-200\r
          `,children:"Anuluj"}),e.jsx("button",{type:"submit",className:`\r
            flex-1\r
            py-2\r
            rounded-md\r
            font-heading\r
            font-semibold\r
            bg-primary/70\r
            text-primary-foreground\r
            hover:bg-primary\r
            transition-all\r
            duration-200\r
          `,children:"Dodaj"})]})]})}function H({isOpen:n,onClose:t,formData:s,setFormData:i}){o.useEffect(()=>(document.body.style.overflow=n?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[n]);function l(){i({...s,name:"",category:"",stock:"",description:"",price:"",salePrice:""}),t()}function d(u){u.preventDefault(),l()}return e.jsx(_,{children:n&&e.jsx(v.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:l,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:e.jsxs(v.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:u=>u.stopPropagation(),onMouseDown:u=>u.stopPropagation(),className:`\r
              w-full\r
              max-w-7xl\r
              relative\r
              rounded-xl\r
              border\r
              border-primary/30\r
              bg-card\r
              px-6\r
              pb-6\r
              pt-10\r
              shadow-[0_0_15px_1px_hsl(43,50%,10%)]\r
            `,children:[e.jsx("button",{type:"button",onClick:l,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:e.jsx(A,{size:18})}),e.jsx("div",{className:"mb-4",children:e.jsx("h2",{className:`\r
                  font-heading\r
                  text-center\r
                  text-2xl\r
                  font-semibold\r
                `,children:"Dodaj produkt"})}),e.jsx(T,{formData:s,setFormData:i,handleSubmit:d,closeModal:l})]})})})}function J({isOpen:n,onClose:t,product:s,formData:i,setFormData:l}){o.useEffect(()=>(document.body.style.overflow=n?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[n]),o.useEffect(()=>{s&&l(c=>{var p,h,b;return{...c,name:s.name,description:s.description,price:(p=s.price)==null?void 0:p.toString(),salePrice:((h=s.salePrice)==null?void 0:h.toString())??"",stock:s.stock.toString(),category:((b=s.categories.at(-1))==null?void 0:b.name)??""}})},[s]);function d(){l(c=>({...c,name:"",category:"",stock:"",description:"",price:"",salePrice:""})),t()}function u(c){c.preventDefault(),d()}return e.jsx(_,{children:n&&e.jsx(v.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:d,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:e.jsxs(v.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:c=>c.stopPropagation(),onMouseDown:c=>c.stopPropagation(),className:`\r
              w-full\r
              max-w-7xl\r
              relative\r
              rounded-xl\r
              border\r
              border-primary/30\r
              bg-card\r
              px-6\r
              pb-6\r
              pt-10\r
              shadow-[0_0_15px_1px_hsl(43,50%,10%)]\r
            `,children:[e.jsx("button",{type:"button",onClick:d,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:e.jsx(A,{size:18})}),e.jsx("div",{className:"mb-4",children:e.jsx("h2",{className:`\r
                  font-heading\r
                  text-center\r
                  text-2xl\r
                  font-semibold\r
                `,children:"Edytuj produkt"})}),e.jsx(T,{formData:i,setFormData:l,handleSubmit:u,closeModal:d})]})})})}const k=6;function ie(){const[n,t]=o.useState([]),[s,i]=o.useState(!1),[l,d]=o.useState(!1),[u,c]=o.useState(!1),[p,h]=o.useState(null),[b,j]=o.useState(1),[a,x]=o.useState(""),[w,O]=o.useState("default"),g=[...n.filter(r=>M(r.name).includes(M(a)))];switch(w){case"name-asc":g.sort((r,m)=>r.name.localeCompare(m.name));break;case"name-desc":g.sort((r,m)=>m.name.localeCompare(r.name));break;case"stock-asc":g.sort((r,m)=>r.stock-m.stock);break;case"stock-desc":g.sort((r,m)=>m.stock-r.stock);break;case"price-asc":g.sort((r,m)=>r.price-m.price);break;case"price-desc":g.sort((r,m)=>m.price-r.price);break}const y=Math.ceil(g.length/k),F=g.slice((b-1)*k,b*k),I=[{value:"default",label:"Domyślnie"},{value:"name-asc",label:"Nazwa A-Z"},{value:"name-desc",label:"Nazwa Z-A"},{value:"stock-asc",label:"Ilość rosnąco"},{value:"stock-desc",label:"Ilość malejąco"},{value:"price-asc",label:"Cena rosnąco"},{value:"price-desc",label:"Cena malejąco"}],[P,C]=o.useState({name:"",category:"",stock:"",description:"",price:"",salePrice:""});o.useEffect(()=>{fetch("http://localhost:3000/products").then(r=>r.json()).then(r=>{t(r)}).catch(r=>{console.error(r)})},[]),o.useEffect(()=>{j(1)},[a]);function q(r){return r>=5?"text-green-400":r<5&&r>1?"text-yellow-400":"text-red-400"}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-6 min-h-[45rem] relative",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"font-heading text-3xl",children:"Produkty"}),e.jsx("p",{className:"text-muted-foreground",children:"Zarządzaj produktami sklepu."})]}),e.jsx(U,{label:"Szukaj produktów",search:a,setSearch:x,sortBy:w,setSortBy:O,sortOptions:I,button:e.jsxs("button",{onClick:()=>i(!0),className:`\r
            flex\r
            items-center\r
            gap-2\r
            px-4\r
            py-3\r
            rounded-lg\r
            bg-primary/90\r
            w-fit\r
            text-black/90\r
            hover:shadow-[0_0_10px_1px_hsl(43,50%,26%)]\r
            hover:bg-primary\r
            hover:text-black\r
            transition-all duration-200\r
          `,children:[e.jsx(D,{size:18})," Dodaj Produkt"]})}),e.jsxs("div",{className:"h-[34rem] flex flex-col justify-between",children:[e.jsxs(B,{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[e.jsx("th",{className:"p-4 w-20",children:"ID"}),e.jsx("th",{className:"p-4 w-[45%]",children:"Produkt"}),e.jsx("th",{className:"p-4 w-[20%]",children:"Kategoria"}),e.jsx("th",{className:"p-4 w-32",children:"Cena"}),e.jsx("th",{className:"p-4 w-40",children:"Magazyn: szt."}),e.jsx("th",{className:"p-4 w-20",children:"Status"}),e.jsx("th",{className:"p-4 w-28",children:"Akcje"})]})}),e.jsx("tbody",{children:F.map(r=>{var m,S,z;return e.jsxs("tr",{className:`\r
                  border-b\r
                  border-border/50\r
                  hover:bg-muted/20\r
                  text-center\r
                `,children:[e.jsx("td",{className:"p-4",children:r.id}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"relative group",children:[e.jsx("div",{className:"truncate",children:r.name}),e.jsx("div",{className:`\r
                        hidden\r
                        group-hover:block\r
                        absolute\r
                        left-0\r
                        right-0\r
                        w-fit\r
                        mx-auto\r
                        bottom-full\r
                        mb-1\r
                        z-50\r
                        rounded-md\r
                        bg-zinc-900\r
                        px-2\r
                        py-1\r
                        text-sm\r
                        whitespace-nowrap\r
                        shadow-lg\r
                      `,children:r.name})]})}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"relative group",children:[e.jsx("div",{className:"truncate",children:((m=r.categories.at(-1))==null?void 0:m.name)||"-"}),e.jsx("div",{className:`\r
                        hidden\r
                        group-hover:block\r
                        absolute\r
                        left-0\r
                        right-0\r
                        w-fit\r
                        mx-auto\r
                        bottom-full\r
                        mb-1\r
                        z-50\r
                        rounded-md\r
                        bg-zinc-900\r
                        px-2\r
                        py-1\r
                        text-sm\r
                        whitespace-nowrap\r
                        shadow-lg\r
                      `,children:((S=r.categories.at(-1))==null?void 0:S.name)||"-"})]})}),e.jsxs("td",{className:"p-4 text-nowrap",children:[r.price.toFixed(2)," zł "," ",e.jsx("span",{className:"text-muted-foreground line-through text-sm",children:r.onSale?((z=r.regularPrice)==null?void 0:z.toFixed(2))+" zł":""})]}),e.jsx("td",{className:"p-4",children:e.jsx("div",{className:"flex justify-center gap-1",children:e.jsxs("span",{className:`flex gap-1 items-center ${q(r.stock)}`,children:[r.stock<5?e.jsx(W,{size:14}):"",r.stock]})})}),e.jsx("td",{className:"p-4",children:e.jsx("div",{className:"flex justify-center gap-1",children:e.jsx("span",{className:`px-2 py-1 rounded-md text-xs font-medium
                      ${r.onSale?"bg-red-500/50 text-white":"bg-muted text-white"}`,children:r.onSale?"Promocja":"Zwykły"})})}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{onClick:()=>{h(r),d(!l)},className:`\r
                          p-2\r
                          rounded-lg\r
                          hover:bg-muted\r
                          border border-transparent\r
                          hover:border-muted-foreground/30\r
                        `,children:e.jsx(R,{size:16})}),e.jsx("button",{onClick:()=>{h(r),c(!0)},className:`\r
                          p-2\r
                          rounded-lg\r
                          hover:bg-destructive/10\r
                          hover:text-destructive\r
                          border border-transparent\r
                          hover:border-destructive/30\r
                        `,children:e.jsx($,{size:16})})]})})]},r.id)})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-sm text-muted-foreground",children:["Strona ",b," z ",y]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>j(r=>Math.max(r-1,1)),disabled:b===1,className:`\r
                px-3 py-2\r
                rounded-lg\r
                border border-border\r
                hover:bg-primary/10\r
                hover:border-primary/30\r
                hover:text-primary\r
                disabled:opacity-50\r
                disabled:hover:bg-transparent\r
                disabled:hover:border-border\r
                disabled:hover:text-foreground\r
                transition-all duration-200\r
              `,children:"Poprzednia"}),e.jsx("button",{onClick:()=>j(r=>Math.min(r+1,y)),disabled:b===y,className:`\r
                px-3 py-2\r
                rounded-lg\r
                border border-border\r
                hover:bg-primary/10\r
                hover:border-primary/30\r
                hover:text-primary\r
                disabled:opacity-50\r
                disabled:hover:bg-transparent\r
                disabled:hover:border-border\r
                disabled:hover:text-foreground\r
                transition-all duration-200\r
              `,children:"Następna"})]})]})]}),n.length===0&&e.jsx("div",{className:"absolute top-0 left-0 right-0 bottom-0",children:e.jsx(Z,{})})]}),s&&e.jsx(H,{formData:P,setFormData:C,isOpen:s,onClose:()=>i(!1)}),l&&e.jsx(J,{product:p,formData:P,setFormData:C,isOpen:l,onClose:()=>{h(null),d(!1)}}),u&&e.jsx(K,{isOpen:u,title:"Usuń produkt",description:e.jsxs(e.Fragment,{children:["Czy na pewno chcesz usunąć produkt:",e.jsx("br",{}),e.jsxs("span",{className:"font-medium text-foreground",children:[p==null?void 0:p.name," ?"]})]}),onClose:()=>{h(null),c(!1)},onConfirm:()=>{console.log("delete",p),h(null),c(!1)}})]})}export{ie as default};
