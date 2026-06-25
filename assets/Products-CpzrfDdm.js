import{j as e,g as u,q as k,k as j,X as _,P as I,U as O,V as q}from"./index-B8C75r4p.js";import{A as B,P as R}from"./AdminTable-C8b5sRLb.js";import{C as W}from"./chevron-down-CcnKKfY7.js";import{n as z}from"./index-Bc4rgiU6.js";import{I as Z}from"./input-Cb_EUZ2j.js";import{S as F}from"./search-B_aMiBJA.js";function f({label:n,value:s,onChange:a,className:o="",placeholder:t="",type:i="text",required:c=!1}){return e.jsxs("div",{className:`flex flex-col gap-2 w-full ${o}`,children:[e.jsxs("label",{className:"text-sm",children:[n,c&&e.jsx("span",{className:"text-red-500",children:" *"})]}),e.jsx("input",{type:i,value:s,placeholder:t,onChange:l=>a(l.target.value),className:`\r
          w-full\r
          p-3\r
          rounded-lg\r
          bg-background/50\r
          border border-primary/20\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          outline-none\r
        `})]})}function K({label:n,value:s,onChange:a,placeholder:o="",rows:t=4,required:i=!1,className:c=""}){return e.jsxs("div",{className:`flex flex-col gap-2 w-full ${c}`,children:[e.jsxs("label",{className:"text-sm",children:[n,i&&e.jsx("span",{className:"text-red-500",children:" *"})]}),e.jsx("textarea",{value:s,rows:t,placeholder:o,onChange:l=>a(l.target.value),className:`\r
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
        `})]})}function N({label:n,value:s,onChange:a,className:o=""}){return e.jsxs("div",{className:`w-full ${o}`,children:[e.jsx("label",{className:"block mb-2",children:n}),e.jsx("button",{type:"button",onClick:()=>a(!s),className:`
            w-full
            h-10
            rounded-lg
            border
            transition-all
            ${s?"bg-primary text-black border-primary":"border-primary/20 bg-background/50"}
          `,children:s?"Tak":"Nie"})]})}function w({label:n,value:s,options:a,onChange:o,className:t="",containerClassname:i=""}){const[c,l]=u.useState(!1);return e.jsxs("div",{className:`relative flex flex-col gap-2 ${i||"w-52"}`,children:[e.jsx("p",{className:"text-sm",children:n}),e.jsxs("button",{type:"button",onClick:()=>l(!c),className:`
          w-full
          border border-primary/20
          rounded-lg
          p-3
          flex
          items-center
          justify-between
          hover:border-primary/50
          transition-all
          ${t||"bg-background/50"}
        `,children:[e.jsx("span",{children:s||"Wybierz..."}),e.jsx(W,{size:18,className:`transition-transform ${c?"rotate-180":""}`})]}),e.jsx(k,{children:c&&e.jsx(j.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
              absolute\r
              top-full\r
              left-0\r
              mt-1\r
              w-full\r
              z-50\r
              rounded-lg\r
              border\r
              border-primary/20\r
              bg-card\r
              shadow-lg\r
              overflow-hidden\r
            `,children:a.map(x=>e.jsx("button",{type:"button",onClick:()=>{o(x.value),l(!1)},className:`\r
                  w-full\r
                  text-left\r
                  px-3\r
                  py-2\r
                  hover:bg-primary\r
                  hover:text-black\r
                  transition-colors\r
                `,children:x.label},x.label))})})]})}function G({label:n,required:s=!1,className:a="",onChange:o}){return e.jsxs("div",{className:`flex flex-col gap-2 w-full ${a}`,children:[e.jsxs("label",{className:"text-sm",children:[n,s&&e.jsx("span",{className:"text-red-500",children:" *"})]}),e.jsx("input",{type:"file",onChange:t=>{var i;return o==null?void 0:o(((i=t.target.files)==null?void 0:i[0])??null)},className:`\r
          w-full\r
          p-3\r
          rounded-lg\r
          bg-background/50\r
          border border-primary/20\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          outline-none\r
        `})]})}const U=["Pokemon","Magic","Warhammer","RPG","Planszówki","Akcesoria"],V=["Booster","ETB","Deck","Sleeves","Dice"];function E({formData:n,setFormData:s,handleSubmit:a,closeModal:o}){const[t,i]=u.useState(""),[c,l]=u.useState(!1),[x,p]=u.useState(!1),[h,y]=u.useState(!0);return e.jsxs("form",{onSubmit:a,className:"flex flex-col gap-4",children:[e.jsx("div",{className:"grid grid-cols-3 gap-4",children:e.jsxs("div",{className:"col-span-3 flex gap-4 items-end justify-between",children:[e.jsx(f,{label:"Nazwa produktu",value:n.name,onChange:d=>s(m=>({...m,name:d})),placeholder:"Figurki Warhammer 40K",required:!0}),e.jsx(w,{label:"Kategoria",containerClassname:"w-full",value:n.category,onChange:d=>s(m=>({...m,category:d})),options:U.map(d=>({value:d,label:d}))}),e.jsx(w,{label:"Podkategoria",containerClassname:"w-full",value:t,onChange:i,options:V.map(d=>({value:d,label:d}))}),e.jsx(f,{label:"Stan magazynowy",value:n.stock,onChange:d=>s(m=>({...m,stock:d})),type:"number",placeholder:"9999",required:!0})]})}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx(K,{className:"col-span-2",label:"Opis",value:n.description,onChange:d=>s(m=>({...m,description:d})),placeholder:"Ładnie się świeci...",rows:6,required:!0}),e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsx("div",{className:"col-span-3",children:e.jsx(G,{label:"Zdjęcie",required:!0})}),e.jsxs("div",{className:"col-span-3 flex justify-between gap-4",children:[e.jsx(N,{label:"Preorder",value:c,onChange:l}),e.jsx(N,{label:"Promocja",value:x,onChange:p}),e.jsx(N,{label:"Widoczny",value:h,onChange:y})]})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx(f,{label:"Cena",value:n.regularPrice,onChange:d=>s(m=>({...m,regularPrice:d})),type:"number",placeholder:"9999,99",required:!0}),e.jsx(f,{label:"Cena promocyjna",value:n.salePrice,onChange:d=>s(m=>({...m,salePrice:d})),type:"number",placeholder:"9999,99"}),e.jsx(f,{label:"Cena przed promocją",value:n.regularPrice,onChange:d=>s(m=>({...m,regularPrice:d})),type:"number",placeholder:"9999,99"})]}),e.jsxs("div",{className:"flex gap-3 pt-2",children:[e.jsx("button",{type:"button",onClick:o,className:`\r
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
          `,children:"Dodaj"})]})]})}function D({isOpen:n,onClose:s,formData:a,setFormData:o}){u.useEffect(()=>(document.body.style.overflow=n?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[n]);function t(){o({...a,name:"",category:"",stock:"",description:"",regularPrice:"",salePrice:""}),s()}function i(c){c.preventDefault(),t()}return e.jsx(k,{children:n&&e.jsx(j.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:t,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:e.jsxs(j.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:c=>c.stopPropagation(),onMouseDown:c=>c.stopPropagation(),className:`\r
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
            `,children:[e.jsx("button",{type:"button",onClick:t,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:e.jsx(_,{size:18})}),e.jsx("div",{className:"mb-4",children:e.jsx("h2",{className:`\r
                  font-heading\r
                  text-center\r
                  text-2xl\r
                  font-semibold\r
                `,children:"Dodaj produkt"})}),e.jsx(E,{formData:a,setFormData:o,handleSubmit:i,closeModal:t})]})})})}function L({isOpen:n,onClose:s,product:a,formData:o,setFormData:t}){u.useEffect(()=>(document.body.style.overflow=n?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[n]),u.useEffect(()=>{a&&t(l=>{var x,p,h;return{...l,name:a.name,description:a.description,regularPrice:((x=a.regularPrice)==null?void 0:x.toString())??"",salePrice:((p=a.salePrice)==null?void 0:p.toString())??"",stock:a.stock.toString(),category:((h=a.categories.at(-1))==null?void 0:h.name)??""}})},[a]);function i(){t(l=>({...l,name:"",category:"",stock:"",description:"",regularPrice:"",salePrice:""})),s()}function c(l){l.preventDefault(),i()}return e.jsx(k,{children:n&&e.jsx(j.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:i,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:e.jsxs(j.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:l=>l.stopPropagation(),onMouseDown:l=>l.stopPropagation(),className:`\r
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
            `,children:[e.jsx("button",{type:"button",onClick:i,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:e.jsx(_,{size:18})}),e.jsx("div",{className:"mb-4",children:e.jsx("h2",{className:`\r
                  font-heading\r
                  text-center\r
                  text-2xl\r
                  font-semibold\r
                `,children:"Edytuj produkt"})}),e.jsx(E,{formData:o,setFormData:t,handleSubmit:c,closeModal:i})]})})})}function X({search:n,setSearch:s,sortBy:a,setSortBy:o,sortOptions:t,button:i}){var c;return e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-end justify-between",children:[e.jsxs("div",{className:"flex-1 flex-col gap-2",children:[e.jsx("p",{className:"text-sm mb-2",children:"Szukaj produktów"}),e.jsxs("div",{className:"relative",children:[e.jsx(Z,{placeholder:"Szukaj...",value:n,onChange:l=>s(l.target.value),className:"pl-10 glass border-border focus:border-primary/50 py-6 rounded-xl"}),e.jsx(F,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"})]})]}),e.jsx(w,{label:"Sortuj",className:"glass",value:(c=t.find(l=>l.value===a))==null?void 0:c.label,onChange:o,options:t}),i]})}function ae(){const[n,s]=u.useState([]),a=6,[o,t]=u.useState(!1),[i,c]=u.useState(!1),[l,x]=u.useState(null),[p,h]=u.useState(1),[y,d]=u.useState(""),[m,M]=u.useState("default"),g=[...n.filter(r=>z(r.name).includes(z(y)))];switch(m){case"name-asc":g.sort((r,b)=>r.name.localeCompare(b.name));break;case"name-desc":g.sort((r,b)=>b.name.localeCompare(r.name));break;case"price-asc":g.sort((r,b)=>r.price-b.price);break;case"price-desc":g.sort((r,b)=>b.price-r.price);break}const v=Math.ceil(g.length/a),A=g.slice((p-1)*a,p*a),T=[{value:"default",label:"Domyślnie"},{value:"name-asc",label:"Nazwa A-Z"},{value:"name-desc",label:"Nazwa Z-A"},{value:"price-asc",label:"Cena rosnąco"},{value:"price-desc",label:"Cena malejąco"}],[P,C]=u.useState({name:"",category:"",stock:"",description:"",regularPrice:"",salePrice:""});u.useEffect(()=>{fetch("http://localhost:3000/products").then(r=>r.json()).then(r=>{s(r)}).catch(r=>{console.error(r)})},[]);function $(r){return r>15?"text-green-400":r<=10&&r>5?"text-yellow-400":"text-red-400"}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-6 min-h-[45rem] relative",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"font-heading text-3xl",children:"Produkty"}),e.jsx("p",{className:"text-muted-foreground mt-1",children:"Zarządzaj produktami sklepu."})]}),e.jsx(X,{search:y,setSearch:d,sortBy:m,setSortBy:M,sortOptions:T,button:e.jsxs("button",{onClick:()=>t(!0),className:`\r
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
          `,children:[e.jsx(I,{size:18})," Dodaj Produkt"]})}),e.jsxs("div",{className:"h-[34rem] flex flex-col justify-between",children:[e.jsxs(B,{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[e.jsx("th",{className:"p-4 w-20",children:"ID"}),e.jsx("th",{className:"p-4 w-[45%]",children:"Produkt"}),e.jsx("th",{className:"p-4 w-[20%]",children:"Kategoria"}),e.jsx("th",{className:"p-4 w-32",children:"Cena"}),e.jsx("th",{className:"p-4 w-40",children:"Magazyn: szt."}),e.jsx("th",{className:"p-4 w-28",children:"Akcje"})]})}),e.jsx("tbody",{children:A.map(r=>{var b,S;return e.jsxs("tr",{className:`\r
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
                      `,children:r.name})]})}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"relative group",children:[e.jsx("div",{className:"truncate",children:((b=r.categories.at(-1))==null?void 0:b.name)||"-"}),e.jsx("div",{className:`\r
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
                      `,children:((S=r.categories.at(-1))==null?void 0:S.name)||"-"})]})}),e.jsxs("td",{className:"p-4 text-nowrap",children:[r.price.toFixed(2)," zł"]}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"flex justify-center gap-1",children:[e.jsx("span",{className:`${$(r.stock)}`,children:r.stock}),r.onSale&&e.jsx("span",{className:"px-2 py-1 rounded-md text-xs font-medium bg-red-500/50 text-white",children:"Promocja"})]})}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{onClick:()=>{x(r),c(!i)},className:`\r
                          p-2\r
                          rounded-lg\r
                          hover:bg-muted\r
                          border border-transparent\r
                          hover:border-muted-foreground/30\r
                        `,children:e.jsx(R,{size:16})}),e.jsx("button",{className:`\r
                          p-2\r
                          rounded-lg\r
                          hover:bg-destructive/10\r
                          hover:text-destructive\r
                          border border-transparent\r
                          hover:border-destructive/30\r
                        `,children:e.jsx(O,{size:16})})]})})]},r.id)})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-sm text-muted-foreground",children:["Strona ",p," z ",v]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>h(r=>Math.max(r-1,1)),disabled:p===1,className:`\r
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
              `,children:"Poprzednia"}),e.jsx("button",{onClick:()=>h(r=>Math.min(r+1,v)),disabled:p===v,className:`\r
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
              `,children:"Następna"})]})]})]}),n.length===0&&e.jsx("div",{className:"absolute top-0 left-0 right-0 bottom-0",children:e.jsx(q,{})})]}),o&&e.jsx(D,{formData:P,setFormData:C,isOpen:o,onClose:()=>t(!1)}),i&&e.jsx(L,{product:l,formData:P,setFormData:C,isOpen:i,onClose:()=>{x(null),c(!1)}})]})}export{ae as default};
