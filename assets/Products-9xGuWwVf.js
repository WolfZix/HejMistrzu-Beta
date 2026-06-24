import{g as s,j as r,q as w,k as f,X as M,P as E,U as O,V as T}from"./index-BcFWxCOT.js";import{A as R,P as W}from"./AdminTable-CNGPVHwl.js";import{C as P}from"./chevron-down-Dvt1zD80.js";import{S as I}from"./search-Bz2sA2Xt.js";const $=["Pokemon","Magic","Warhammer","RPG","Planszówki","Akcesoria"],B=["Booster","ETB","Deck","Sleeves","Dice"];function F({name:t,setName:h,description:l,setDescription:o,regularPrice:c,setRegularPrice:a,salePrice:b,setSalePrice:d,stock:p,setStock:x,category:e,setCategory:u,handleSubmit:g,closeModal:j}){const[m,y]=s.useState(!1),[i,S]=s.useState(!1),[C,z]=s.useState(""),[N,D]=s.useState(!1),[v,_]=s.useState(!1),[k,A]=s.useState(!0);return r.jsxs("form",{onSubmit:g,className:"flex flex-col gap-4",children:[r.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block mb-1",children:"Nazwa produktu"}),r.jsx("input",{required:!0,value:t,onChange:n=>h(n.target.value),className:`\r
              w-full\r
              p-3\r
              rounded-lg\r
              bg-background/50\r
              border border-primary/20\r
              focus:border-primary\r
              focus:ring-2\r
              focus:ring-primary/50\r
              outline-none\r
            `})]}),r.jsxs("div",{className:"relative",children:[r.jsx("label",{className:"block mb-1",children:"Kategoria"}),r.jsxs("button",{type:"button",onClick:()=>y(!m),className:`\r
              w-full\r
              p-3\r
              rounded-lg\r
              bg-background/50\r
              border border-primary/20\r
              flex\r
              items-center\r
              justify-between\r
            `,children:[r.jsx("span",{children:e||"Wybierz kategorię"}),r.jsx(P,{size:18})]}),r.jsx(w,{children:m&&r.jsx(f.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:`\r
                  absolute\r
                  top-full\r
                  mt-1\r
                  z-50\r
                  w-full\r
                  rounded-xl\r
                  border\r
                  border-primary/20\r
                  bg-card\r
                  p-1\r
                `,children:$.map(n=>r.jsx("button",{type:"button",onClick:()=>{u(n),y(!1)},className:`\r
                        w-full\r
                        text-left\r
                        p-2\r
                        rounded-md\r
                        hover:bg-primary\r
                        hover:text-black\r
                      `,children:n},n))})})]}),r.jsxs("div",{className:"relative",children:[r.jsx("label",{className:"block mb-1",children:"Podkategoria"}),r.jsxs("button",{type:"button",onClick:()=>S(!i),className:`\r
              w-full\r
              p-3\r
              rounded-lg\r
              bg-background/50\r
              border border-primary/20\r
              flex\r
              items-center\r
              justify-between\r
            `,children:[r.jsx("span",{children:C||"Wybierz podkategorię"}),r.jsx(P,{size:18})]}),r.jsx(w,{children:i&&r.jsx(f.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:`\r
                  absolute\r
                  top-full\r
                  mt-1\r
                  z-50\r
                  w-full\r
                  rounded-xl\r
                  border\r
                  border-primary/20\r
                  bg-card\r
                  p-1\r
                `,children:B.map(n=>r.jsx("button",{type:"button",onClick:()=>{z(n),S(!1)},className:`\r
                        w-full\r
                        text-left\r
                        p-2\r
                        rounded-md\r
                        hover:bg-primary\r
                        hover:text-black\r
                      `,children:n},n))})})]})]}),r.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[r.jsxs("div",{className:"col-span-2",children:[r.jsx("label",{className:"block mb-1",children:"Opis"}),r.jsx("textarea",{rows:4,value:l,onChange:n=>o(n.target.value),className:`\r
              w-full\r
              p-3\r
              rounded-lg\r
              bg-background/50\r
              border border-primary/20\r
              resize-none\r
              focus:border-primary\r
              focus:ring-2\r
              focus:ring-primary/50\r
              outline-none\r
            `})]}),r.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[r.jsxs("div",{className:"col-span-3",children:[r.jsx("label",{className:"block mb-1",children:"Zdjęcie"}),r.jsx("input",{type:"file",className:`\r
              w-full\r
              p-3\r
              rounded-lg\r
              bg-background/50\r
              border border-primary/20\r
            `})]}),r.jsxs("div",{className:"border",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block mb-2",children:"Preorder"}),r.jsx("button",{type:"button",onClick:()=>D(!N),className:`
                w-full
                h-12
                rounded-lg
                border
                transition-all
                ${N?"bg-primary text-black border-primary":"border-primary/20 bg-background/50"}
              `,children:N?"Tak":"Nie"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block mb-2",children:"W promocji"}),r.jsx("button",{type:"button",onClick:()=>_(!v),className:`
                w-full
                h-12
                rounded-lg
                border
                transition-all
                ${v?"bg-primary text-black border-primary":"border-primary/20 bg-background/50"}
              `,children:v?"Tak":"Nie"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block mb-2",children:"Widoczny"}),r.jsx("button",{type:"button",onClick:()=>A(!k),className:`
                w-full
                h-12
                rounded-lg
                border
                transition-all
                ${k?"bg-primary text-black border-primary":"border-primary/20 bg-background/50"}
              `,children:k?"Tak":"Nie"})]})]})]})]}),r.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block mb-1",children:"Cena"}),r.jsx("input",{type:"number",value:c,onChange:n=>a(n.target.value),className:`\r
              w-full\r
              p-3\r
              rounded-lg\r
              bg-background/50\r
              border border-primary/20\r
            `})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block mb-1",children:"Cena promocyjna"}),r.jsx("input",{type:"number",value:b,onChange:n=>d(n.target.value),className:`\r
              w-full\r
              p-3\r
              rounded-lg\r
              bg-background/50\r
              border border-primary/20\r
            `})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block mb-1",children:"Cena przed promocją"}),r.jsx("input",{type:"number",className:`\r
              w-full\r
              p-3\r
              rounded-lg\r
              bg-background/50\r
              border border-primary/20\r
            `})]})]}),r.jsx("div",{className:"grid grid-cols-3 gap-4",children:r.jsxs("div",{children:[r.jsx("label",{className:"block mb-1",children:"Stan magazynowy"}),r.jsx("input",{type:"number",value:p,onChange:n=>x(n.target.value),className:`\r
              w-full\r
              p-3\r
              rounded-lg\r
              bg-background/50\r
              border border-primary/20\r
            `})]})}),r.jsxs("div",{className:"flex gap-3 pt-2",children:[r.jsx("button",{type:"button",onClick:j,className:`\r
            flex-1\r
            py-2\r
            rounded-md\r
            border\r
            border-muted-foreground/20\r
            hover:bg-foreground/10\r
          `,children:"Anuluj"}),r.jsx("button",{type:"submit",className:`\r
            flex-1\r
            py-2\r
            rounded-md\r
            font-heading\r
            font-semibold\r
            bg-primary/70\r
            text-primary-foreground\r
            hover:bg-primary\r
            transition-all\r
          `,children:"Dodaj"})]})]})}function q({isOpen:t,onClose:h}){const[l,o]=s.useState(""),[c,a]=s.useState(""),[b,d]=s.useState(""),[p,x]=s.useState(""),[e,u]=s.useState(""),[g,j]=s.useState("");s.useEffect(()=>(document.body.style.overflow=t?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[t]);function m(){o(""),a(""),d(""),x(""),u(""),j(""),h()}function y(i){i.preventDefault(),console.log({name:l,regularPrice:c,salePrice:b,stock:p,category:e,description:g}),m()}return r.jsx(w,{children:t&&r.jsx(f.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:m,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:r.jsxs(f.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:i=>i.stopPropagation(),onMouseDown:i=>i.stopPropagation(),className:`\r
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
            `,children:[r.jsx("button",{type:"button",onClick:m,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:r.jsx(M,{size:18})}),r.jsx("div",{className:"mb-4",children:r.jsx("h2",{className:`\r
                  font-heading\r
                  text-center\r
                  text-2xl\r
                  font-semibold\r
                `,children:"Dodaj produkt"})}),r.jsx(F,{name:l,setName:o,regularPrice:c,setRegularPrice:a,salePrice:b,setSalePrice:d,stock:p,setStock:x,category:e,setCategory:u,description:g,setDescription:j,handleSubmit:y,closeModal:m})]})})})}function Z(){const[t,h]=s.useState([]),l=6,[o,c]=s.useState(!1),[a,b]=s.useState(1),d=Math.ceil(t.length/l),p=t.slice((a-1)*l,a*l);s.useEffect(()=>{fetch("http://localhost:3000/products").then(e=>e.json()).then(e=>{h(e)}).catch(e=>{console.error(e)})},[]);function x(e){return e?"bg-green-500/10 text-green-400":"bg-red-500/10 text-red-400"}return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"space-y-6 min-h-[45rem] relative",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"font-heading text-3xl",children:"Produkty"}),r.jsx("p",{className:"text-muted-foreground mt-1",children:"Zarządzaj produktami sklepu."})]}),r.jsxs("div",{className:"flex flex-col md:flex-row gap-4 justify-between",children:[r.jsxs("div",{className:"relative flex-1",children:[r.jsx(I,{size:18,className:`\r
              absolute\r
              left-3\r
              top-1/2\r
              -translate-y-1/2\r
              text-muted-foreground\r
              z-10\r
            `}),r.jsx("input",{placeholder:"Szukaj produktu...",className:`\r
            w-full\r
            glass\r
            border\r
            border-border\r
            rounded-lg\r
            py-2\r
            pl-10\r
            pr-4\r
            outline-none\r
            focus:border-primary/50\r
            text-primary\r
            `})]}),r.jsxs("button",{onClick:()=>c(!o),className:`\r
            flex\r
            items-center\r
            gap-2\r
            px-4\r
            py-2\r
            rounded-lg\r
            bg-primary/90\r
            w-fit\r
            text-black/90\r
            font-heading\r
            font-medium\r
            hover:shadow-[0_0_10px_1px_hsl(43,50%,26%)]\r
            hover:bg-primary\r
            hover:text-black\r
            transition-all duration-200\r
          `,children:[r.jsx(E,{size:16}),"Dodaj produkt"]})]}),r.jsxs("div",{className:"h-[34rem] flex flex-col justify-between",children:[r.jsxs(R,{children:[r.jsx("thead",{children:r.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[r.jsx("th",{className:"p-4",children:"ID"}),r.jsx("th",{className:"p-4",children:"Produkt"}),r.jsx("th",{className:"p-4",children:"Kategoria"}),r.jsx("th",{className:"p-4",children:"Cena"}),r.jsx("th",{className:"p-4",children:"Status"}),r.jsx("th",{className:"p-4",children:"Akcje"})]})}),r.jsx("tbody",{children:p.map(e=>{var u;return r.jsxs("tr",{className:`\r
                  border-b\r
                  border-border/50\r
                  hover:bg-muted/20\r
                  text-center\r
                `,children:[r.jsx("td",{className:"p-4",children:e.id}),r.jsx("td",{className:"p-4",children:e.name}),r.jsx("td",{className:"p-4",children:((u=e.categories.at(-1))==null?void 0:u.name)||"-"}),r.jsxs("td",{className:"p-4 text-nowrap",children:[e.price.toFixed(2)," zł"]}),r.jsxs("td",{className:"p-4 flex gap-1 justify-center",children:[r.jsx("span",{className:`
                      px-2 py-1 rounded-md text-xs font-medium
                      ${x(e.inStock)}
                    `,children:e.inStock?"Dostępny":"Brak"}),e.onSale&&r.jsx("span",{className:"px-2 py-1 rounded-md text-xs font-medium bg-yellow-500/10 text-yellow-400",children:"Promocja"})]}),r.jsx("td",{className:"p-4",children:r.jsxs("div",{className:"flex justify-center gap-2",children:[r.jsx("button",{className:`\r
                          p-2\r
                          rounded-lg\r
                          hover:bg-muted\r
                          border border-transparent\r
                          hover:border-muted-foreground/30\r
                        `,children:r.jsx(W,{size:16})}),r.jsx("button",{className:`\r
                          p-2\r
                          rounded-lg\r
                          hover:bg-destructive/10\r
                          hover:text-destructive\r
                          border border-transparent\r
                          hover:border-destructive/30\r
                        `,children:r.jsx(O,{size:16})})]})})]},e.id)})})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("span",{className:"text-sm text-muted-foreground",children:["Strona ",a," z ",d]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{onClick:()=>b(e=>Math.max(e-1,1)),disabled:a===1,className:`\r
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
              `,children:"Poprzednia"}),r.jsx("button",{onClick:()=>b(e=>Math.min(e+1,d)),disabled:a===d,className:`\r
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
              `,children:"Następna"})]})]})]}),t.length===0&&r.jsx("div",{className:"absolute top-0 left-0 right-0 bottom-0",children:r.jsx(T,{})})]}),o&&r.jsx(q,{isOpen:o,onClose:()=>c(!1)})]})}export{Z as default};
