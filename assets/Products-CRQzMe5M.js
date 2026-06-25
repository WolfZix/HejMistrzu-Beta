import{j as e,g as u,q as v,k as f,X as P,P as F,U as Z,V as B}from"./index-DXiJPbas.js";import{A as R,P as U}from"./AdminTable-BKyIlA65.js";import{C as W}from"./chevron-down-CJKom_Bq.js";import{n as E}from"./index-Bc4rgiU6.js";import{I as K}from"./input-BjWkJKFQ.js";import{S as G}from"./search-D6Jd0yPq.js";import{T as _}from"./triangle-alert-DAolmwCC.js";function y({label:n,value:a,onChange:s,className:t="",placeholder:o="",type:l="text",required:c=!1}){return e.jsxs("div",{className:`flex flex-col gap-2 w-full ${t}`,children:[e.jsxs("label",{className:"text-sm",children:[n,c&&e.jsx("span",{className:"text-red-500",children:" *"})]}),e.jsx("input",{type:l,value:a,placeholder:o,onChange:i=>s(i.target.value),className:`\r
          w-full\r
          p-3\r
          rounded-lg\r
          bg-background/50\r
          border border-primary/20\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          outline-none\r
        `})]})}function V({label:n,value:a,onChange:s,placeholder:t="",rows:o=4,required:l=!1,className:c=""}){return e.jsxs("div",{className:`flex flex-col gap-2 w-full ${c}`,children:[e.jsxs("label",{className:"text-sm",children:[n,l&&e.jsx("span",{className:"text-red-500",children:" *"})]}),e.jsx("textarea",{value:a,rows:o,placeholder:t,onChange:i=>s(i.target.value),className:`\r
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
        `})]})}function w({label:n,value:a,onChange:s,className:t=""}){return e.jsxs("div",{className:`w-full ${t}`,children:[e.jsx("label",{className:"block mb-2",children:n}),e.jsx("button",{type:"button",onClick:()=>s(!a),className:`
            w-full
            h-10
            rounded-lg
            border
            transition-all
            ${a?"bg-primary text-black border-primary":"border-primary/20 bg-background/50"}
          `,children:a?"Tak":"Nie"})]})}function k({label:n,value:a,options:s,onChange:t,className:o="",containerClassname:l=""}){const[c,i]=u.useState(!1);return e.jsxs("div",{className:`relative flex flex-col gap-2 ${l||"w-52"}`,children:[e.jsx("p",{className:"text-sm",children:n}),e.jsxs("button",{type:"button",onClick:()=>i(!c),className:`
          w-full
          border border-primary/20
          rounded-lg
          p-3
          flex
          items-center
          justify-between
          hover:border-primary/50
          transition-all
          ${o||"bg-background/50"}
        `,children:[e.jsx("span",{children:a||"Wybierz..."}),e.jsx(W,{size:18,className:`transition-transform ${c?"rotate-180":""}`})]}),e.jsx(v,{children:c&&e.jsx(f.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
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
            `,children:s.map(x=>e.jsx("button",{type:"button",onClick:()=>{t(x.value),i(!1)},className:`\r
                  w-full\r
                  text-left\r
                  px-3\r
                  py-2\r
                  hover:bg-primary\r
                  hover:text-black\r
                  transition-colors\r
                `,children:x.label},x.label))})})]})}function L({label:n,required:a=!1,className:s="",onChange:t}){return e.jsxs("div",{className:`flex flex-col gap-2 w-full ${s}`,children:[e.jsxs("label",{className:"text-sm",children:[n,a&&e.jsx("span",{className:"text-red-500",children:" *"})]}),e.jsx("input",{type:"file",onChange:o=>{var l;return t==null?void 0:t(((l=o.target.files)==null?void 0:l[0])??null)},className:`\r
          w-full\r
          p-3\r
          rounded-lg\r
          bg-background/50\r
          border border-primary/20\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          outline-none\r
        `})]})}const X=["Pokemon","Magic","Warhammer","RPG","Planszówki","Akcesoria"],H=["Booster","ETB","Deck","Sleeves","Dice"];function T({formData:n,setFormData:a,handleSubmit:s,closeModal:t}){const[o,l]=u.useState(""),[c,i]=u.useState(!1),[x,p]=u.useState(!1),[b,g]=u.useState(!0);return e.jsxs("form",{onSubmit:s,className:"flex flex-col gap-4",children:[e.jsx("div",{className:"grid grid-cols-3 gap-4",children:e.jsxs("div",{className:"col-span-3 flex gap-4 items-end justify-between",children:[e.jsx(y,{label:"Nazwa produktu",value:n.name,onChange:d=>a(m=>({...m,name:d})),placeholder:"Figurki Warhammer 40K",required:!0}),e.jsx(k,{label:"Kategoria",containerClassname:"w-full",value:n.category,onChange:d=>a(m=>({...m,category:d})),options:X.map(d=>({value:d,label:d}))}),e.jsx(k,{label:"Podkategoria",containerClassname:"w-full",value:o,onChange:l,options:H.map(d=>({value:d,label:d}))})]})}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx(V,{className:"col-span-2",label:"Opis",value:n.description,onChange:d=>a(m=>({...m,description:d})),placeholder:"Ładnie się świeci...",rows:6,required:!0}),e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsx("div",{className:"col-span-3",children:e.jsx(L,{label:"Zdjęcie",required:!0})}),e.jsxs("div",{className:"col-span-3 flex justify-between gap-4",children:[e.jsx(w,{label:"Preorder",value:c,onChange:i}),e.jsx(w,{label:"Promocja",value:x,onChange:p}),e.jsx(w,{label:"Widoczny",value:b,onChange:g})]})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx(y,{label:"Cena",value:n.price,onChange:d=>a(m=>({...m,price:d})),type:"number",placeholder:"9999,99",required:!0}),e.jsx(y,{label:"Cena promocyjna",value:n.salePrice,onChange:d=>a(m=>({...m,salePrice:d})),type:"number",placeholder:"9999,99"}),e.jsx(y,{label:"Stan magazynowy",value:n.stock,onChange:d=>a(m=>({...m,stock:d})),type:"number",placeholder:"9999",required:!0})]}),e.jsxs("div",{className:"flex gap-3 pt-2",children:[e.jsx("button",{type:"button",onClick:t,className:`\r
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
          `,children:"Dodaj"})]})]})}function J({isOpen:n,onClose:a,formData:s,setFormData:t}){u.useEffect(()=>(document.body.style.overflow=n?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[n]);function o(){t({...s,name:"",category:"",stock:"",description:"",price:"",salePrice:""}),a()}function l(c){c.preventDefault(),o()}return e.jsx(v,{children:n&&e.jsx(f.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:o,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:e.jsxs(f.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:c=>c.stopPropagation(),onMouseDown:c=>c.stopPropagation(),className:`\r
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
            `,children:[e.jsx("button",{type:"button",onClick:o,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:e.jsx(P,{size:18})}),e.jsx("div",{className:"mb-4",children:e.jsx("h2",{className:`\r
                  font-heading\r
                  text-center\r
                  text-2xl\r
                  font-semibold\r
                `,children:"Dodaj produkt"})}),e.jsx(T,{formData:s,setFormData:t,handleSubmit:l,closeModal:o})]})})})}function Q({isOpen:n,onClose:a,product:s,formData:t,setFormData:o}){u.useEffect(()=>(document.body.style.overflow=n?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[n]),u.useEffect(()=>{s&&o(i=>{var x,p,b;return{...i,name:s.name,description:s.description,price:(x=s.price)==null?void 0:x.toString(),salePrice:((p=s.salePrice)==null?void 0:p.toString())??"",stock:s.stock.toString(),category:((b=s.categories.at(-1))==null?void 0:b.name)??""}})},[s]);function l(){o(i=>({...i,name:"",category:"",stock:"",description:"",price:"",salePrice:""})),a()}function c(i){i.preventDefault(),l()}return e.jsx(v,{children:n&&e.jsx(f.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:l,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:e.jsxs(f.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:i=>i.stopPropagation(),onMouseDown:i=>i.stopPropagation(),className:`\r
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
              `,children:e.jsx(P,{size:18})}),e.jsx("div",{className:"mb-4",children:e.jsx("h2",{className:`\r
                  font-heading\r
                  text-center\r
                  text-2xl\r
                  font-semibold\r
                `,children:"Edytuj produkt"})}),e.jsx(T,{formData:t,setFormData:o,handleSubmit:c,closeModal:l})]})})})}function Y({search:n,setSearch:a,sortBy:s,setSortBy:t,sortOptions:o,button:l}){var c;return e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-end justify-between",children:[e.jsxs("div",{className:"flex-1 flex-col gap-2",children:[e.jsx("p",{className:"text-sm mb-2",children:"Szukaj produktów"}),e.jsxs("div",{className:"relative",children:[e.jsx(K,{placeholder:"Szukaj...",value:n,onChange:i=>a(i.target.value),className:"pl-10 glass border-border focus:border-primary/50 py-6 rounded-xl"}),e.jsx(G,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"})]})]}),e.jsx(k,{label:"Sortuj",className:"glass",value:(c=o.find(i=>i.value===s))==null?void 0:c.label,onChange:t,options:o}),l]})}function ee({isOpen:n,title:a,description:s,onClose:t,onConfirm:o}){return e.jsx(v,{children:n&&e.jsx(f.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:t,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:e.jsxs(f.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.2},onMouseDown:l=>l.stopPropagation(),onClick:l=>l.stopPropagation(),className:`\r
              relative\r
              w-full\r
              max-w-md\r
              rounded-xl\r
              border\r
              border-red-500/20\r
              bg-card\r
              p-6\r
            `,children:[e.jsx("button",{onClick:t,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted\r
              `,children:e.jsx(P,{size:18})}),e.jsx("div",{className:"flex justify-center mb-5",children:e.jsx("div",{className:`\r
                  p-4\r
                  rounded-full\r
                  bg-red-500/10\r
                `,children:e.jsx(_,{size:36,className:"text-red-500"})})}),e.jsx("h2",{className:"font-heading text-2xl text-center",children:a}),e.jsx("p",{className:"text-center text-muted-foreground mt-3 whitespace-pre-line",children:s}),e.jsxs("div",{className:"flex gap-3 mt-8",children:[e.jsx("button",{onClick:t,className:`\r
                  flex-1\r
                  py-2\r
                  rounded-lg\r
                  border\r
                  border-border\r
                  hover:bg-muted\r
                `,children:"Anuluj"}),e.jsx("button",{onClick:o,className:`\r
                  flex-1\r
                  py-2\r
                  rounded-lg\r
                  bg-red-600\r
                  hover:bg-red-700\r
                  text-white\r
                `,children:"Usuń"})]})]})})})}function ce(){const[n,a]=u.useState([]),s=6,[t,o]=u.useState(!1),[l,c]=u.useState(!1),[i,x]=u.useState(!1),[p,b]=u.useState(null),[g,d]=u.useState(1),[m,O]=u.useState(""),[C,$]=u.useState("default"),j=[...n.filter(r=>E(r.name).includes(E(m)))];switch(C){case"name-asc":j.sort((r,h)=>r.name.localeCompare(h.name));break;case"name-desc":j.sort((r,h)=>h.name.localeCompare(r.name));break;case"price-asc":j.sort((r,h)=>r.price-h.price);break;case"price-desc":j.sort((r,h)=>h.price-r.price);break}const N=Math.ceil(j.length/s),I=j.slice((g-1)*s,g*s),D=[{value:"default",label:"Domyślnie"},{value:"name-asc",label:"Nazwa A-Z"},{value:"name-desc",label:"Nazwa Z-A"},{value:"price-asc",label:"Cena rosnąco"},{value:"price-desc",label:"Cena malejąco"}],[S,z]=u.useState({name:"",category:"",stock:"",description:"",price:"",salePrice:""});u.useEffect(()=>{fetch("http://localhost:3000/products").then(r=>r.json()).then(r=>{a(r)}).catch(r=>{console.error(r)})},[]),u.useEffect(()=>{d(1)},[m]);function q(r){return r>=25?"text-green-400":r<25&&r>15?"text-yellow-400":"text-red-400"}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-6 min-h-[45rem] relative",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"font-heading text-3xl",children:"Produkty"}),e.jsx("p",{className:"text-muted-foreground",children:"Zarządzaj produktami sklepu."})]}),e.jsx(Y,{search:m,setSearch:O,sortBy:C,setSortBy:$,sortOptions:D,button:e.jsxs("button",{onClick:()=>o(!0),className:`\r
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
          `,children:[e.jsx(F,{size:18})," Dodaj Produkt"]})}),e.jsxs("div",{className:"h-[34rem] flex flex-col justify-between",children:[e.jsxs(R,{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[e.jsx("th",{className:"p-4 w-20",children:"ID"}),e.jsx("th",{className:"p-4 w-[45%]",children:"Produkt"}),e.jsx("th",{className:"p-4 w-[20%]",children:"Kategoria"}),e.jsx("th",{className:"p-4 w-32",children:"Cena"}),e.jsx("th",{className:"p-4 w-40",children:"Magazyn: szt."}),e.jsx("th",{className:"p-4 w-20",children:"Status"}),e.jsx("th",{className:"p-4 w-28",children:"Akcje"})]})}),e.jsx("tbody",{children:I.map(r=>{var h,M,A;return e.jsxs("tr",{className:`\r
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
                      `,children:r.name})]})}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"relative group",children:[e.jsx("div",{className:"truncate",children:((h=r.categories.at(-1))==null?void 0:h.name)||"-"}),e.jsx("div",{className:`\r
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
                      `,children:((M=r.categories.at(-1))==null?void 0:M.name)||"-"})]})}),e.jsxs("td",{className:"p-4 text-nowrap",children:[r.price.toFixed(2)," zł "," ",e.jsx("span",{className:"text-muted-foreground line-through text-sm",children:r.onSale?((A=r.regularPrice)==null?void 0:A.toFixed(2))+" zł":""})]}),e.jsx("td",{className:"p-4",children:e.jsx("div",{className:"flex justify-center gap-1",children:e.jsxs("span",{className:`flex gap-1 items-center ${q(r.stock)}`,children:[r.stock<25?e.jsx(_,{size:14}):"",r.stock]})})}),e.jsx("td",{className:"p-4",children:e.jsx("div",{className:"flex justify-center gap-1",children:e.jsx("span",{className:`px-2 py-1 rounded-md text-xs font-medium
                      ${r.onSale?"bg-red-500/50 text-white":"bg-muted text-white"}`,children:r.onSale?"Promocja":"Zwykły"})})}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{onClick:()=>{b(r),c(!l)},className:`\r
                          p-2\r
                          rounded-lg\r
                          hover:bg-muted\r
                          border border-transparent\r
                          hover:border-muted-foreground/30\r
                        `,children:e.jsx(U,{size:16})}),e.jsx("button",{onClick:()=>{b(r),x(!0)},className:`\r
                          p-2\r
                          rounded-lg\r
                          hover:bg-destructive/10\r
                          hover:text-destructive\r
                          border border-transparent\r
                          hover:border-destructive/30\r
                        `,children:e.jsx(Z,{size:16})})]})})]},r.id)})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-sm text-muted-foreground",children:["Strona ",g," z ",N]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>d(r=>Math.max(r-1,1)),disabled:g===1,className:`\r
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
              `,children:"Poprzednia"}),e.jsx("button",{onClick:()=>d(r=>Math.min(r+1,N)),disabled:g===N,className:`\r
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
              `,children:"Następna"})]})]})]}),n.length===0&&e.jsx("div",{className:"absolute top-0 left-0 right-0 bottom-0",children:e.jsx(B,{})})]}),t&&e.jsx(J,{formData:S,setFormData:z,isOpen:t,onClose:()=>o(!1)}),l&&e.jsx(Q,{product:p,formData:S,setFormData:z,isOpen:l,onClose:()=>{b(null),c(!1)}}),i&&e.jsx(ee,{isOpen:i,title:"Usuń produkt",description:e.jsxs(e.Fragment,{children:["Czy na pewno chcesz usunąć produkt:",e.jsx("br",{}),e.jsxs("span",{className:"font-medium text-foreground",children:[p==null?void 0:p.name," ?"]})]}),onClose:()=>{b(null),x(!1)},onConfirm:()=>{console.log("delete",p),b(null),x(!1)}})]})}export{ce as default};
