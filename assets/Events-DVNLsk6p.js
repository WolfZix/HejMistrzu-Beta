import{g as a,j as r,q as z,k as w,X as D,P as E,T as P,Q as T}from"./index-CXQIVBmT.js";import{A as _}from"./AdminTable-CnzCIg8r.js";import{C as M}from"./chevron-down-0KHA9J--.js";import{e as S}from"./events-Dlv7-aJY.js";import{n as C}from"./index-WQ0BBVcu.js";import{T as A}from"./TableFilters-DBmQVPYk.js";import{E as q}from"./eye-DZSAIBW3.js";import{P as I}from"./pencil-CvNPxlE2.js";import"./BoardGames-YYkGj3Z5.js";import"./input-Dz7wE7uE.js";import"./search-Cwo2JfDr.js";const O=["Magic","Pokemon","Warhammer","RPG","Inne"];function Z({title:o,setTitle:p,description:u,setDescription:m,category:l,setCategory:i,date:b,setDate:d,time:f,setTime:s,price:c,setPrice:x,totalSlots:y,setTotalSlots:e,handleSubmit:t,closeModal:v}){const[h,g]=a.useState(!1);return r.jsxs("form",{onSubmit:t,className:"flex flex-col space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Tytuł"}),r.jsx("input",{required:!0,type:"text",value:o,onChange:n=>p(n.target.value),className:`\r
        w-full\r
        bg-background/50\r
        border border-primary/20\r
        rounded-lg\r
        p-3\r
        outline-none\r
        focus:border-primary\r
        focus:ring-2\r
        focus:ring-primary/50\r
        transition-all\r
        duration-300\r
        text-primary\r
      `})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Opis"}),r.jsx("textarea",{value:u,onChange:n=>m(n.target.value),rows:2,className:`\r
        w-full\r
        bg-background/50\r
        border border-primary/20\r
        rounded-lg\r
        p-3\r
        outline-none\r
        resize-none\r
        focus:border-primary\r
        focus:ring-2\r
        focus:ring-primary/50\r
        transition-all\r
        duration-300\r
        text-primary\r
      `})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Zdjęcie"}),r.jsx("input",{required:!0,type:"file",className:`\r
        w-full\r
        bg-background/50\r
        border border-primary/20\r
        rounded-lg\r
        p-3\r
        outline-none\r
        focus:border-primary\r
        focus:ring-2\r
        focus:ring-primary/50\r
        transition-all\r
        duration-300\r
        text-primary\r
      `})]}),r.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[r.jsxs("div",{className:"w-full",children:[r.jsx("label",{className:"mb-1 block",children:"Cena"}),r.jsx("input",{required:!0,type:"number",value:c,onChange:n=>x(n.target.value),className:`\r
          w-full\r
          bg-background/50\r
          border border-primary/20\r
          rounded-lg\r
          p-3\r
          outline-none\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          transition-all\r
          duration-300\r
          text-primary\r
        `})]}),r.jsxs("div",{className:"w-full",children:[r.jsx("label",{className:"mb-1 block",children:"Ilość miejsc"}),r.jsx("input",{required:!0,type:"number",value:y,onChange:n=>e(n.target.value),className:`\r
          w-full\r
          bg-background/50\r
          border border-primary/20\r
          rounded-lg\r
          p-3\r
          outline-none\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          transition-all\r
          duration-300\r
          text-primary\r
        `})]}),r.jsxs("div",{className:"relative w-full",children:[r.jsx("label",{className:"mb-1 block",children:"Kategoria"}),r.jsxs("button",{type:"button",onClick:()=>g(!h),className:`\r
          bg-background/50\r
          border border-primary/20\r
          rounded-lg\r
          p-3\r
          flex\r
          w-full\r
          items-center\r
          justify-between\r
          transition-all\r
          duration-300\r
          hover:border-primary/40\r
        `,children:[r.jsx("span",{children:l||"Wybierz kategorię"}),r.jsx(M,{size:18,className:`transition-transform ${h?"rotate-180":""}`})]}),r.jsx(z,{children:h&&r.jsx(w.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
              absolute\r
              top-full\r
              mt-1\r
              z-50\r
              w-full\r
              rounded-xl\r
              overflow-hidden\r
              border\r
              border-primary/20\r
              bg-card\r
              p-1\r
            `,children:O.map(n=>r.jsx("button",{type:"button",onClick:()=>{i(n),g(!1)},className:`\r
                  w-full\r
                  text-left\r
                  p-2\r
                  rounded-md\r
                  hover:bg-primary\r
                  hover:text-black\r
                `,children:n},n))})})]})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Data"}),r.jsx("input",{required:!0,type:"date",value:b,onChange:n=>d(n.target.value),className:`\r
          w-full\r
          bg-background/50\r
          border border-primary/20\r
          rounded-lg\r
          p-3\r
          outline-none\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          transition-all\r
          duration-300\r
          text-primary\r
        `})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Godzina"}),r.jsx("input",{required:!0,type:"time",value:f,onChange:n=>s(n.target.value),className:`\r
          w-full\r
          bg-background/50\r
          border border-primary/20\r
          rounded-lg\r
          p-3\r
          outline-none\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          transition-all\r
          duration-300\r
          text-primary\r
        `})]})]}),r.jsxs("div",{className:"flex gap-3 pt-2",children:[r.jsx("button",{type:"button",onClick:v,className:`\r
        flex-1\r
        py-2\r
        rounded-md\r
        border\r
        border-muted-foreground/20\r
        hover:bg-foreground/10\r
        hover:border-foreground/20\r
        hover:text-white\r
        transition-all\r
      `,children:"Anuluj"}),r.jsx("button",{type:"submit",className:`\r
        flex-1\r
        py-2\r
        rounded-md\r
        font-heading\r
        font-semibold\r
        bg-primary/70\r
        text-primary-foreground\r
        transition-all\r
        duration-300\r
        hover:bg-primary\r
        hover:shadow-[0_0_8px_4px_hsl(43,50%,30%)]\r
      `,children:"Dodaj"})]})]})}function F({isOpen:o,onClose:p}){const[u,m]=a.useState(""),[l,i]=a.useState(""),[b,d]=a.useState(""),[f,s]=a.useState(""),[c,x]=a.useState(""),[y,e]=a.useState(""),[t,v]=a.useState(""),[h,g]=a.useState("");a.useEffect(()=>(document.body.style.overflow=o?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[o]);function n(j){j.preventDefault(),N()}function N(){m(""),i(""),d(""),v("0"),g("0"),p()}return r.jsx(z,{children:o&&r.jsx(w.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:N,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:r.jsxs(w.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:j=>j.stopPropagation(),onMouseDown:j=>j.stopPropagation(),className:`\r
              w-full\r
              max-w-2xl\r
              relative\r
              rounded-xl\r
              border\r
              border-primary/30\r
              bg-card\r
              px-6\r
              pb-6\r
              pt-12\r
              shadow-[0_0_15px_1px_hsl(43,50%,10%)]\r
            `,children:[r.jsx("button",{type:"button",onClick:N,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:r.jsx(D,{size:18})}),r.jsx("div",{className:"",children:r.jsx("h2",{className:"font-heading text-center text-2xl mb-4 font-semibold",children:"Dodaj Event"})}),r.jsx(Z,{title:u,setTitle:m,description:l,setDescription:i,category:b,setCategory:d,date:f,setDate:s,time:c,setTime:x,price:t,setPrice:v,totalSlots:h,setTotalSlots:g,handleSubmit:n,closeModal:N})]})})})}const k=6;function J(){const[o,p]=a.useState(""),[u,m]=a.useState("default"),[l,i]=a.useState(1),[b,d]=a.useState(!1),s=[...S.filter(e=>C(e.title).includes(C(o)))];switch(u){case"title-asc":s.sort((e,t)=>e.title.localeCompare(t.title));break;case"title-desc":s.sort((e,t)=>t.title.localeCompare(e.title));break;case"date-asc":s.sort((e,t)=>new Date(e.date).getTime()-new Date(t.date).getTime());break;case"date-desc":s.sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime());break;case"slots-asc":s.sort((e,t)=>e.bookedSlots-t.bookedSlots);break;case"slots-desc":s.sort((e,t)=>t.bookedSlots-e.bookedSlots);break}const c=Math.ceil(s.length/k),x=s.slice((l-1)*k,l*k),y=[{value:"default",label:"Domyślnie"},{value:"title-asc",label:"Tytuł A-Z"},{value:"title-desc",label:"Tytuł Z-A"},{value:"date-asc",label:"Najbliższe"},{value:"date-desc",label:"Najdalsze"},{value:"slots-asc",label:"Miejsca-asc"},{value:"slots-desc",label:"Miejsca-desc"}];return a.useEffect(()=>{i(1)},[o]),r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"space-y-6 min-h-[45rem] relative",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"font-heading text-3xl",children:"Eventy"}),r.jsx("p",{className:"text-muted-foreground mt-2",children:"Zarządzaj eventami."})]}),r.jsx(A,{label:"Szukaj eventów",search:o,setSearch:p,sortBy:u,setSortBy:m,sortOptions:y,button:r.jsxs("button",{onClick:()=>d(!0),className:`\r
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
            `,children:[r.jsx(E,{size:18})," Dodaj event"]})}),r.jsxs("div",{className:"h-[33rem] flex flex-col justify-between",children:[r.jsxs(_,{children:[r.jsx("thead",{children:r.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[r.jsx("th",{className:"p-4 w-20",children:"ID"}),r.jsx("th",{className:"p-4 w-[25%]",children:"Tytuł"}),r.jsx("th",{className:"p-4 w-[25%]",children:"Kategoria"}),r.jsx("th",{className:"p-4",children:"Data"}),r.jsx("th",{className:"p-4",children:"Miejsca"}),r.jsx("th",{className:"p-4",children:"Cena"}),r.jsx("th",{className:"p-4",children:"Akcje"})]})}),r.jsx("tbody",{children:x.map(e=>r.jsxs("tr",{className:`\r
                  border-b\r
                  border-border/50\r
                  hover:bg-muted/20\r
                  text-center\r
                `,children:[r.jsxs("td",{className:"p-4",children:[" ",e.id," "]}),r.jsx("td",{className:"p-4",children:r.jsxs("div",{className:"relative group",children:[r.jsx("div",{className:"truncate",children:e.title}),r.jsx("div",{className:`\r
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
                      `,children:e.title})]})}),r.jsxs("td",{className:"p-4",children:[" ",e.category," "]}),r.jsxs("td",{className:"p-4",children:[" ",new Date(e.date).toLocaleDateString("pl-PL")," "]}),r.jsx("td",{className:"p-4",children:r.jsxs("span",{className:e.bookedSlots/e.totalSlots>.8?"text-red-400":e.bookedSlots/e.totalSlots>.5?"text-yellow-400":"text-green-400",children:[e.bookedSlots,"/",e.totalSlots]})}),r.jsxs("td",{className:"p-4",children:[" ",e.price," zł "]}),r.jsx("td",{className:"p-4",children:r.jsxs("div",{className:"flex justify-center gap-2",children:[r.jsx("button",{className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-muted\r
                        border border-transparent\r
                        hover:border-muted-foreground/30\r
                      `,children:r.jsx(q,{size:16})}),r.jsx("button",{className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-muted\r
                        border border-transparent\r
                        hover:border-muted-foreground/30\r
                      `,children:r.jsx(I,{size:16})}),r.jsx("button",{className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-destructive/10\r
                        hover:text-destructive\r
                        border border-transparent\r
                        hover:border-destructive/30\r
                      `,children:r.jsx(P,{size:16})})]})})]},e.id))})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("span",{className:"text-sm text-muted-foreground",children:["Strona ",l," z ",c]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{onClick:()=>i(e=>Math.max(e-1,1)),disabled:l===1,className:`\r
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
              `,children:"Poprzednia"}),r.jsx("button",{onClick:()=>i(e=>Math.min(e+1,c)),disabled:l===c,className:`\r
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
              `,children:"Następna"})]})]})]}),S.length===0&&r.jsx("div",{className:"absolute -top-12 left-0 right-0 bottom-0",children:r.jsx(T,{})})]}),b&&r.jsx(F,{isOpen:b,onClose:()=>d(!1)})]})}export{J as default};
