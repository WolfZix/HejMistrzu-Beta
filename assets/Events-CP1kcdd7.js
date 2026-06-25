import{g as t,j as r,q as C,k as S,X as P,P as z,U as E,V as D}from"./index-DXiJPbas.js";import{A as _,P as M}from"./AdminTable-BKyIlA65.js";import{C as T}from"./chevron-down-CJKom_Bq.js";import{S as A}from"./search-D6Jd0yPq.js";import{E as q}from"./eye-Bvlm7OHn.js";const G=["Magic","Pokemon","Warhammer","RPG","Planszówki"];function I({title:a,setTitle:l,description:s,setDescription:o,category:i,setCategory:d,date:e,setDate:p,time:h,setTime:g,price:y,setPrice:f,totalSlots:k,setTotalSlots:w,handleSubmit:j,closeModal:b}){const[c,u]=t.useState(!1);return r.jsxs("form",{onSubmit:j,className:"flex flex-col space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Tytuł"}),r.jsx("input",{required:!0,type:"text",value:a,onChange:n=>l(n.target.value),className:`\r
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
      `})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Opis"}),r.jsx("textarea",{value:s,onChange:n=>o(n.target.value),rows:2,className:`\r
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
      `})]}),r.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[r.jsxs("div",{className:"w-full",children:[r.jsx("label",{className:"mb-1 block",children:"Cena"}),r.jsx("input",{required:!0,type:"number",value:y,onChange:n=>f(n.target.value),className:`\r
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
        `})]}),r.jsxs("div",{className:"w-full",children:[r.jsx("label",{className:"mb-1 block",children:"Ilość miejsc"}),r.jsx("input",{required:!0,type:"number",value:k,onChange:n=>w(n.target.value),className:`\r
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
        `})]}),r.jsxs("div",{className:"relative w-full",children:[r.jsx("label",{className:"mb-1 block",children:"Kategoria"}),r.jsxs("button",{type:"button",onClick:()=>u(!c),className:`\r
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
        `,children:[r.jsx("span",{children:i||"Wybierz kategorię"}),r.jsx(T,{size:18,className:`transition-transform ${c?"rotate-180":""}`})]}),r.jsx(C,{children:c&&r.jsx(S.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
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
            `,children:G.map(n=>r.jsx("button",{type:"button",onClick:()=>{d(n),u(!1)},className:`\r
                  w-full\r
                  text-left\r
                  p-2\r
                  rounded-md\r
                  hover:bg-primary\r
                  hover:text-black\r
                `,children:n},n))})})]})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Data"}),r.jsx("input",{required:!0,type:"date",value:e,onChange:n=>p(n.target.value),className:`\r
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
        `})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Godzina"}),r.jsx("input",{required:!0,type:"time",value:h,onChange:n=>g(n.target.value),className:`\r
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
        `})]})]}),r.jsxs("div",{className:"flex gap-3 pt-2",children:[r.jsx("button",{type:"button",onClick:b,className:`\r
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
      `,children:"Dodaj"})]})]})}function L({isOpen:a,onClose:l}){const[s,o]=t.useState(""),[i,d]=t.useState(""),[e,p]=t.useState(""),[h,g]=t.useState(""),[y,f]=t.useState(""),[k,w]=t.useState(""),[j,b]=t.useState(""),[c,u]=t.useState("");t.useEffect(()=>(document.body.style.overflow=a?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[a]);function n(m){m.preventDefault(),x()}function x(){o(""),d(""),p(""),b("0"),u("0"),l()}return r.jsx(C,{children:a&&r.jsx(S.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:x,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:r.jsxs(S.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:m=>m.stopPropagation(),onMouseDown:m=>m.stopPropagation(),className:`\r
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
            `,children:[r.jsx("button",{type:"button",onClick:x,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:r.jsx(P,{size:18})}),r.jsx("div",{className:"",children:r.jsx("h2",{className:"font-heading text-center text-2xl mb-4 font-semibold",children:"Dodaj Event"})}),r.jsx(I,{title:s,setTitle:o,description:i,setDescription:d,category:e,setCategory:p,date:h,setDate:g,time:y,setTime:f,price:j,setPrice:b,totalSlots:c,setTotalSlots:u,handleSubmit:n,closeModal:x})]})})})}const v=[{id:1,title:"Friday Night Magic",category:"MTG",date:"27.06.2026",occupiedSlots:18,maxSlots:24,price:25},{id:2,title:"Pokemon League",category:"Pokemon",date:"28.06.2026",occupiedSlots:12,maxSlots:20,price:20},{id:3,title:"Warhammer 40k",category:"Warhammer",date:"29.06.2026",occupiedSlots:10,maxSlots:16,price:30},{id:4,title:"D&D One Shot",category:"RPG",date:"01.07.2026",occupiedSlots:5,maxSlots:8,price:15},{id:5,title:"Lorcana Tournament",category:"Lorcana",date:"02.07.2026",occupiedSlots:14,maxSlots:20,price:20},{id:6,title:"Pokemon Challenge",category:"Pokemon",date:"03.07.2026",occupiedSlots:7,maxSlots:16,price:10},{id:7,title:"Commander Night",category:"MTG",date:"04.07.2026",occupiedSlots:22,maxSlots:24,price:25}],N=6;function V(){const[a,l]=t.useState(1),[s,o]=t.useState(!1),i=Math.ceil(v.length/N),d=v.slice((a-1)*N,a*N);return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"space-y-6 min-h-[45rem] relative",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"font-heading text-3xl",children:"Eventy"}),r.jsx("p",{className:"text-muted-foreground mt-2",children:"Zarządzaj eventami."})]}),r.jsxs("div",{className:"flex flex-col md:flex-row gap-4 justify-between",children:[r.jsxs("div",{className:"relative flex-1",children:[r.jsx(A,{size:18,className:`\r
              absolute\r
              left-3\r
              top-1/2\r
              -translate-y-1/2\r
              text-muted-foreground\r
              z-10\r
            `}),r.jsx("input",{placeholder:"Szukaj wydarzenia...",className:`\r
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
            `})]}),r.jsxs("button",{onClick:()=>o(!s),className:`\r
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
          `,children:[r.jsx(z,{size:16}),"Dodaj event"]})]}),r.jsxs("div",{className:"h-[33rem] flex flex-col justify-between",children:[r.jsxs(_,{children:[r.jsx("thead",{children:r.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[r.jsx("th",{className:"p-4",children:"ID"}),r.jsx("th",{className:"p-4",children:"Tytuł"}),r.jsx("th",{className:"p-4",children:"Kategoria"}),r.jsx("th",{className:"p-4",children:"Data"}),r.jsx("th",{className:"p-4",children:"Miejsca"}),r.jsx("th",{className:"p-4",children:"Cena"}),r.jsx("th",{className:"p-4",children:"Akcje"})]})}),r.jsx("tbody",{children:d.map(e=>r.jsxs("tr",{className:`\r
                  border-b\r
                  border-border/50\r
                  hover:bg-muted/20\r
                  text-center\r
                `,children:[r.jsx("td",{className:"p-4",children:e.id}),r.jsx("td",{className:"p-4",children:e.title}),r.jsx("td",{className:"p-4",children:e.category}),r.jsx("td",{className:"p-4",children:e.date}),r.jsx("td",{className:"p-4",children:r.jsxs("span",{className:e.occupiedSlots/e.maxSlots>.8?"text-red-400":e.occupiedSlots/e.maxSlots>.5?"text-yellow-400":"text-green-400",children:[e.occupiedSlots,"/",e.maxSlots]})}),r.jsxs("td",{className:"p-4",children:[e.price," zł"]}),r.jsx("td",{className:"p-4",children:r.jsxs("div",{className:"flex justify-center gap-2",children:[r.jsx("button",{className:`\r
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
                      `,children:r.jsx(M,{size:16})}),r.jsx("button",{className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-destructive/10\r
                        hover:text-destructive\r
                        border border-transparent\r
                        hover:border-destructive/30\r
                      `,children:r.jsx(E,{size:16})})]})})]},e.id))})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("span",{className:"text-sm text-muted-foreground",children:["Strona ",a," z ",i]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{onClick:()=>l(e=>Math.max(e-1,1)),disabled:a===1,className:`\r
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
              `,children:"Poprzednia"}),r.jsx("button",{onClick:()=>l(e=>Math.min(e+1,i)),disabled:a===i,className:`\r
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
              `,children:"Następna"})]})]})]}),v.length===0&&r.jsx("div",{className:"absolute -top-12 left-0 right-0 bottom-0",children:r.jsx(D,{})})]}),s&&r.jsx(L,{isOpen:s,onClose:()=>o(!1)})]})}export{V as default};
