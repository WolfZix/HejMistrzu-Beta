import{g as p,j as r,q as N,k as g,X as k,P as w,T as z,Q as S}from"./index-Qu3RAtsP.js";import{A as C}from"./AdminTable-BNlYaGlC.js";import{a as P}from"./index-CzApALvg.js";import{C as E}from"./chevron-down-7pA-XoE7.js";import{e as y}from"./events-C7o-X2FH.js";import{n as f}from"./index-WQ0BBVcu.js";import{T}from"./TableFilters-7cLgEGCL.js";import{E as _}from"./eye-DOkaTMM_.js";import{P as A}from"./pencil-CWPW3iqW.js";import"./BoardGames-YYkGj3Z5.js";import"./input-9jI6TTjw.js";import"./search-CqeTqzB0.js";const v=["Magic","Pokemon","Warhammer","RPG","Inne"];function M({formData:e,setFormData:a,closeModal:m}){const u=p.useRef(null),[i,d]=p.useState(!1),b=new Date;b.setHours(0,0,0,0);const[l,j]=p.useState({title:"",description:"",image:"",category:"",date:"",time:"",price:"",totalSlots:"",link:"",location:""}),c=n=>{const s={title:"",description:"",image:"",category:"",date:"",time:"",price:"",totalSlots:"",link:"",location:""};if(n.title.trim()===""&&(s.title="Podaj tytuł wydarzenia"),n.description.trim()===""&&(s.description="Podaj opis wydarzenia"),n.image||(s.image="Dodaj zdjęcie wydarzenia"),v.includes(n.category)||(s.category="Wybierz kategorię"),n.date.trim()==="")s.date="Wybierz datę";else{const t=new Date(n.date);t.setHours(0,0,0,0),t<b&&(s.date="Data nie może być z przeszłości")}return n.time.trim()===""&&(s.time="Wybierz godzinę"),n.price.trim()===""?s.price="Podaj cenę":Number(n.price)<=0&&(s.price="Cena musi być większa od 0"),n.totalSlots.trim()===""?s.totalSlots="Podaj liczbę miejsc":Number(n.totalSlots)<=0&&(s.totalSlots="Liczba miejsc musi być większa od 0"),n.link.trim()!==""&&!/^https?:\/\/.+/i.test(n.link.trim())&&(s.link="Podaj poprawny adres URL"),location||(s.location="Podaj lokalizację"),j(s),Object.values(s).every(t=>t==="")};async function x(n){if(n.preventDefault(),!!c(e))try{const s=new FormData;s.append("title",e.title),s.append("description",e.description),e.image&&s.append("image",e.image),s.append("category",e.category),s.append("eventDate",e.date),s.append("eventTime",e.time),s.append("maxSlots",e.totalSlots),s.append("price",e.price),s.append("link",e.link),s.append("location",e.location),await P.post("http://localhost:3000/events",s),m()}catch(s){console.error(s)}}return r.jsxs("form",{onSubmit:x,className:"flex flex-col space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Tytuł"}),r.jsx("input",{type:"text",value:e.title,onChange:n=>a({...e,title:n.target.value}),className:`\r
        w-full\r
        bg-background/50\r
        border border-primary/20\r
        rounded-lg\r
        p-2\r
        outline-none\r
        focus:border-primary\r
        focus:ring-2\r
        focus:ring-primary/50\r
        transition-all\r
        duration-300\r
        text-primary\r
      `}),r.jsx("p",{className:"text-red-500 text-xs min-h-4",children:l.title})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Opis"}),r.jsx("textarea",{value:e.description,onChange:n=>a({...e,description:n.target.value}),rows:2,className:`\r
        w-full\r
        bg-background/50\r
        border border-primary/20\r
        rounded-lg\r
        p-2\r
        outline-none\r
        resize-none\r
        focus:border-primary\r
        focus:ring-2\r
        focus:ring-primary/50\r
        transition-all\r
        duration-300\r
        text-primary\r
      `}),r.jsx("p",{className:"text-red-500 text-xs min-h-4",children:l.description})]}),r.jsxs("div",{className:"grid grid-cols-4 gap-x-4 items-end",children:[r.jsxs("div",{className:"col-span-3",children:[r.jsx("label",{className:"mb-1 block",children:"Zdjęcie"}),r.jsx("input",{ref:u,type:"file",name:"image",onChange:n=>{var s;return a({...e,image:((s=n.target.files)==null?void 0:s[0])??null})},className:`\r
          w-full\r
          bg-background/50\r
          border border-primary/20\r
          rounded-lg\r
          p-2\r
          outline-none\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          transition-all\r
          duration-300\r
          text-primary\r
        `})]}),r.jsx("button",{type:"button",onClick:()=>{u.current&&(u.current.value=""),a({...e,image:null})},className:`\r
    border\r
    p-3\r
    w-full h-fit\r
    rounded-lg\r
    border-red-500/30 text-red-500/50 bg-transparent\r
    hover:border-red-500 hover:text-red-500 hover:bg-red-500/5\r
    transition-all duration-200\r
    `,children:"Usuń zdjęcie"}),r.jsx("p",{className:"text-red-500 text-xs min-h-4 col-span-4",children:l.image})]}),r.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[r.jsxs("div",{className:"w-full",children:[r.jsx("label",{className:"mb-1 block",children:"Cena"}),r.jsx("input",{type:"number",value:e.price,onChange:n=>a({...e,price:n.target.value}),className:`\r
          w-full\r
          bg-background/50\r
          border border-primary/20\r
          rounded-lg\r
          p-2\r
          outline-none\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          transition-all\r
          duration-300\r
          text-primary\r
        `}),r.jsx("p",{className:"text-red-500 text-xs min-h-4",children:l.price})]}),r.jsxs("div",{className:"w-full",children:[r.jsx("label",{className:"mb-1 block",children:"Ilość miejsc"}),r.jsx("input",{type:"number",value:e.totalSlots,onChange:n=>a({...e,totalSlots:n.target.value}),className:`\r
          w-full\r
          bg-background/50\r
          border border-primary/20\r
          rounded-lg\r
          p-2\r
          outline-none\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          transition-all\r
          duration-300\r
          text-primary\r
        `}),r.jsx("p",{className:"text-red-500 text-xs min-h-4",children:l.totalSlots})]}),r.jsxs("div",{className:"relative w-full",children:[r.jsx("label",{className:"mb-1 block",children:"Kategoria"}),r.jsxs("button",{type:"button",onClick:()=>d(!i),className:`\r
          bg-background/50\r
          border border-primary/20\r
          rounded-lg\r
          p-2\r
          flex\r
          w-full\r
          items-center\r
          justify-between\r
          transition-all\r
          duration-300\r
          hover:border-primary/40\r
        `,children:[r.jsx("span",{children:e.category||"Wybierz kategorię"}),r.jsx(E,{size:18,className:`transition-transform ${i?"rotate-180":""}`})]}),r.jsx(N,{children:i&&r.jsx(g.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
              absolute\r
              z-50\r
              mt-1\r
              w-full\r
              rounded-xl\r
              overflow-hidden\r
              border\r
              border-primary/20\r
              bg-card\r
              p-1\r
            `,children:v.map(n=>r.jsx("button",{type:"button",onClick:()=>{a({...e,category:n}),d(!1)},className:`\r
                  w-full\r
                  text-left\r
                  p-2\r
                  rounded-md\r
                  hover:bg-primary\r
                  hover:text-black\r
                `,children:n},n))})}),r.jsx("p",{className:"text-red-500 text-xs min-h-4",children:l.category})]})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Data"}),r.jsx("input",{type:"date",value:e.date,onChange:n=>a({...e,date:n.target.value}),className:`\r
          w-full\r
          bg-background/50\r
          border border-primary/20\r
          rounded-lg\r
          p-2\r
          outline-none\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          transition-all\r
          duration-300\r
          text-primary\r
        `}),r.jsx("p",{className:"text-red-500 text-xs min-h-4",children:l.date})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Godzina"}),r.jsx("input",{type:"time",value:e.time,onChange:n=>a({...e,time:n.target.value}),className:`\r
          w-full\r
          bg-background/50\r
          border border-primary/20\r
          rounded-lg\r
          p-2\r
          outline-none\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          transition-all\r
          duration-300\r
          text-primary\r
        `}),r.jsx("p",{className:"text-red-500 text-xs min-h-4",children:l.time})]})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsxs("label",{className:"mb-1 block",children:["Link do zapisów ",r.jsx("span",{className:"text-muted-foreground text-sm",children:"(opcjonalnie)"})]}),r.jsx("input",{type:"text",value:e.link,onChange:n=>a({...e,link:n.target.value}),className:`\r
          w-full\r
          bg-background/50\r
          border border-primary/20\r
          rounded-lg\r
          p-2\r
          outline-none\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          transition-all\r
          duration-300\r
          text-primary\r
        `}),r.jsx("p",{className:"text-red-500 text-xs min-h-4",children:l.link})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Lokalizacja"}),r.jsx("input",{type:"text",value:e.location,onChange:n=>a({...e,location:n.target.value}),className:`\r
          w-full\r
          bg-background/50\r
          border border-primary/20\r
          rounded-lg\r
          p-2\r
          outline-none\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          transition-all\r
          duration-300\r
          text-primary\r
        `}),r.jsx("p",{className:"text-red-500 text-xs min-h-4",children:l.location})]})]}),r.jsxs("div",{className:"flex gap-3 pt-2",children:[r.jsx("button",{type:"button",onClick:m,className:`\r
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
      `,children:"Dodaj"})]})]})}function L({isOpen:e,onClose:a}){const[m,u]=p.useState({title:"",description:"",category:"",date:"",time:"",image:null,price:"",totalSlots:"",link:""});p.useEffect(()=>(document.body.style.overflow=e?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[e]);function i(){u({title:"",description:"",category:"",date:"",time:"",image:null,price:"",totalSlots:"",link:""}),a()}return r.jsx(N,{children:e&&r.jsx(g.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:i,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:r.jsxs(g.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:d=>d.stopPropagation(),onMouseDown:d=>d.stopPropagation(),className:`\r
              w-full\r
              max-w-2xl\r
              relative\r
              rounded-xl\r
              border\r
              border-primary/30\r
              bg-card\r
              px-6\r
              pb-6\r
              pt-6\r
              shadow-[0_0_15px_1px_hsl(43,50%,10%)]\r
            `,children:[r.jsx("button",{type:"button",onClick:i,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:r.jsx(k,{size:18})}),r.jsx("div",{className:"",children:r.jsx("h2",{className:"font-heading text-center text-2xl mb-2 font-semibold",children:"Dodaj Event"})}),r.jsx(M,{formData:m,setFormData:u,closeModal:i})]})})})}const h=6;function V(){const[e,a]=p.useState(""),[m,u]=p.useState("default"),[i,d]=p.useState(1),[b,l]=p.useState(!1),c=[...y.filter(t=>f(t.title).includes(f(e)))];switch(m){case"title-asc":c.sort((t,o)=>t.title.localeCompare(o.title));break;case"title-desc":c.sort((t,o)=>o.title.localeCompare(t.title));break;case"date-asc":c.sort((t,o)=>new Date(t.date).getTime()-new Date(o.date).getTime());break;case"date-desc":c.sort((t,o)=>new Date(o.date).getTime()-new Date(t.date).getTime());break;case"slots-asc":c.sort((t,o)=>t.bookedSlots-o.bookedSlots);break;case"slots-desc":c.sort((t,o)=>o.bookedSlots-t.bookedSlots);break}const x=Math.ceil(c.length/h),n=c.slice((i-1)*h,i*h),s=[{value:"default",label:"Domyślnie"},{value:"title-asc",label:"Tytuł A-Z"},{value:"title-desc",label:"Tytuł Z-A"},{value:"date-asc",label:"Najbliższe"},{value:"date-desc",label:"Najdalsze"},{value:"slots-asc",label:"Miejsca-asc"},{value:"slots-desc",label:"Miejsca-desc"}];return p.useEffect(()=>{d(1)},[e]),r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"space-y-6 min-h-[45rem] relative",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"font-heading text-3xl",children:"Eventy"}),r.jsx("p",{className:"text-muted-foreground mt-2",children:"Zarządzaj eventami."})]}),r.jsx(T,{label:"Szukaj eventów",search:e,setSearch:a,sortBy:m,setSortBy:u,sortOptions:s,button:r.jsxs("button",{onClick:()=>l(!0),className:`\r
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
            `,children:[r.jsx(w,{size:18})," Dodaj event"]})}),r.jsxs("div",{className:"h-[33rem] flex flex-col justify-between",children:[r.jsxs(C,{children:[r.jsx("thead",{children:r.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[r.jsx("th",{className:"p-4 w-20",children:"ID"}),r.jsx("th",{className:"p-4 w-[25%]",children:"Tytuł"}),r.jsx("th",{className:"p-4 w-[25%]",children:"Kategoria"}),r.jsx("th",{className:"p-4",children:"Data"}),r.jsx("th",{className:"p-4",children:"Miejsca"}),r.jsx("th",{className:"p-4",children:"Cena"}),r.jsx("th",{className:"p-4",children:"Akcje"})]})}),r.jsx("tbody",{children:n.map(t=>r.jsxs("tr",{className:`\r
                  border-b\r
                  border-border/50\r
                  hover:bg-muted/20\r
                  text-center\r
                `,children:[r.jsxs("td",{className:"p-4",children:[" ",t.id," "]}),r.jsx("td",{className:"p-4",children:r.jsxs("div",{className:"relative group",children:[r.jsx("div",{className:"truncate",children:t.title}),r.jsx("div",{className:`\r
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
                      `,children:t.title})]})}),r.jsxs("td",{className:"p-4",children:[" ",t.category," "]}),r.jsxs("td",{className:"p-4",children:[" ",new Date(t.date).toLocaleDateString("pl-PL")," "]}),r.jsx("td",{className:"p-4",children:r.jsxs("span",{className:t.bookedSlots/t.totalSlots>.8?"text-red-400":t.bookedSlots/t.totalSlots>.5?"text-yellow-400":"text-green-400",children:[t.bookedSlots,"/",t.totalSlots]})}),r.jsxs("td",{className:"p-4",children:[" ",t.price," zł "]}),r.jsx("td",{className:"p-4",children:r.jsxs("div",{className:"flex justify-center gap-2",children:[r.jsx("button",{className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-muted\r
                        border border-transparent\r
                        hover:border-muted-foreground/30\r
                      `,children:r.jsx(_,{size:16})}),r.jsx("button",{className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-muted\r
                        border border-transparent\r
                        hover:border-muted-foreground/30\r
                      `,children:r.jsx(A,{size:16})}),r.jsx("button",{className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-destructive/10\r
                        hover:text-destructive\r
                        border border-transparent\r
                        hover:border-destructive/30\r
                      `,children:r.jsx(z,{size:16})})]})})]},t.id))})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("span",{className:"text-sm text-muted-foreground",children:["Strona ",i," z ",x]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{onClick:()=>d(t=>Math.max(t-1,1)),disabled:i===1,className:`\r
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
              `,children:"Poprzednia"}),r.jsx("button",{onClick:()=>d(t=>Math.min(t+1,x)),disabled:i===x,className:`\r
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
              `,children:"Następna"})]})]})]}),y.length===0&&r.jsx("div",{className:"absolute -top-12 left-0 right-0 bottom-0",children:r.jsx(S,{})})]}),b&&r.jsx(L,{isOpen:b,onClose:()=>l(!1)})]})}export{V as default};
