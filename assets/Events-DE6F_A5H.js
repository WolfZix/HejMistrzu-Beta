import{g as d,j as e,q as v,k as h,X as z,P,T,Q as M}from"./index-CVC6aYCP.js";import{A as _}from"./AdminTable-D98Ucc_T.js";import{a as R,E as S}from"./EventCard-C8iGFjjT.js";import{C as I}from"./chevron-down-4HvzhmSS.js";import{E as L,e as N}from"./events-D0RWZjHD.js";import{n as w}from"./index-WQ0BBVcu.js";import{T as A}from"./TableFilters-DOmxPRAL.js";import{M as O}from"./months-CBoTsXHR.js";import{E as U}from"./eye-BcmpNpIl.js";import{P as W}from"./pencil-DpZ5gZLf.js";import"./calendar-CnZlFlAq.js";import"./circle-check-Dkxi10yo.js";import"./users-CBSs0YCB.js";import"./tag-nSwNkVF0.js";import"./input-IUXUfpfv.js";import"./search-DVVcTjPd.js";const k=["Magic","Pokemon","Warhammer","RPG","Inne"];function H({formData:r,setFormData:a,closeModal:i}){const u=d.useRef(null),[l,x]=d.useState(!1),b=new Date;b.setHours(0,0,0,0);const[o,p]=d.useState({title:"",description:"",image:"",category:"",date:"",time:"",price:"",totalSlots:"",link:"",location:""}),g=n=>{const t={title:"",description:"",image:"",category:"",date:"",time:"",price:"",totalSlots:"",link:"",location:""};if(n.title.trim()===""&&(t.title="Podaj tytuł wydarzenia"),n.description.trim()===""&&(t.description="Podaj opis wydarzenia"),n.image||(t.image="Dodaj zdjęcie wydarzenia"),k.includes(n.category)||(t.category="Wybierz kategorię"),n.date.trim()==="")t.date="Wybierz datę";else{const c=new Date(n.date);c.setHours(0,0,0,0),c<b&&(t.date="Data nie może być z przeszłości")}return n.time.trim()===""&&(t.time="Wybierz godzinę"),n.price.trim()===""?t.price="Podaj cenę":Number(n.price)<=0&&(t.price="Cena musi być większa od 0"),n.totalSlots.trim()===""?t.totalSlots="Podaj liczbę miejsc":Number(n.totalSlots)<=0&&(t.totalSlots="Liczba miejsc musi być większa od 0"),n.link.trim()!==""&&!/^https?:\/\/.+/i.test(n.link.trim())&&(t.link="Podaj poprawny adres URL"),location||(t.location="Podaj lokalizację"),p(t),Object.values(t).every(c=>c==="")};async function j(n){if(n.preventDefault(),!!g(r))try{const t=new FormData;t.append("title",r.title),t.append("description",r.description),r.image&&t.append("image",r.image),t.append("category",r.category),t.append("eventDate",r.date),t.append("eventTime",r.time),t.append("maxSlots",r.totalSlots),t.append("price",r.price),t.append("link",r.link),t.append("location",r.location),await R.post("http://localhost:3000/events",t),i()}catch(t){console.error(t)}}return e.jsxs("form",{onSubmit:j,className:"flex flex-col space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Tytuł"}),e.jsx("input",{type:"text",value:r.title,onChange:n=>a({...r,title:n.target.value}),className:`\r
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
      `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:o.title})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Opis"}),e.jsx("textarea",{value:r.description,onChange:n=>a({...r,description:n.target.value}),rows:2,className:`\r
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
        transition-colors\r
        duration-300\r
        text-primary\r
      `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:o.description})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-x-4 items-end",children:[e.jsxs("div",{className:"col-span-3",children:[e.jsx("label",{className:"mb-1 block",children:"Zdjęcie"}),e.jsx("input",{ref:u,type:"file",accept:".webp,image/webp",name:"image",onChange:n=>{var t;return a({...r,image:((t=n.target.files)==null?void 0:t[0])??null})},className:`\r
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
        `})]}),e.jsx("button",{type:"button",onClick:()=>{u.current&&(u.current.value=""),a({...r,image:null})},className:`\r
    border\r
    p-3\r
    w-full h-fit\r
    rounded-lg\r
    border-red-500/30 text-red-500/50 bg-transparent\r
    hover:border-red-500 hover:text-red-500 hover:bg-red-500/5\r
    transition-all duration-200\r
    `,children:"Usuń zdjęcie"}),e.jsx("p",{className:"text-red-500 text-xs min-h-4 col-span-4",children:o.image})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Cena"}),e.jsx("input",{type:"number",value:r.price,onChange:n=>a({...r,price:n.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:o.price})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Ilość miejsc"}),e.jsx("input",{type:"number",value:r.totalSlots,onChange:n=>a({...r,totalSlots:n.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:o.totalSlots})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Kategoria"}),e.jsxs("button",{type:"button",onClick:()=>x(!l),className:`\r
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
        `,children:[e.jsx("span",{children:r.category||"Wybierz kategorię"}),e.jsx(I,{size:18,className:`transition-transform ${l?"rotate-180":""}`})]}),e.jsx(v,{children:l&&e.jsx(h.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
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
            `,children:k.map(n=>e.jsx("button",{type:"button",onClick:()=>{a({...r,category:n}),x(!1)},className:`\r
                  w-full\r
                  text-left\r
                  p-2\r
                  rounded-md\r
                  hover:bg-primary\r
                  hover:text-black\r
                `,children:n},n))})}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:o.category})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Data"}),e.jsx("input",{type:"date",value:r.date,onChange:n=>a({...r,date:n.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:o.date})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Godzina"}),e.jsx("input",{type:"time",value:r.time,onChange:n=>a({...r,time:n.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:o.time})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"mb-1 block",children:["Link do zapisów ",e.jsx("span",{className:"text-muted-foreground text-sm",children:"(opcjonalnie)"})]}),e.jsx("input",{type:"text",value:r.link,onChange:n=>a({...r,link:n.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:o.link})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Lokalizacja"}),e.jsx("input",{type:"text",value:r.location,onChange:n=>a({...r,location:n.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:o.location})]})]}),e.jsxs("div",{className:"flex gap-3 pt-2",children:[e.jsx("button",{type:"button",onClick:i,className:`\r
        flex-1\r
        py-2\r
        rounded-md\r
        border\r
        border-muted-foreground/20\r
        hover:bg-foreground/10\r
        hover:border-foreground/20\r
        hover:text-white\r
        transition-all\r
      `,children:"Anuluj"}),e.jsx("button",{type:"submit",className:`\r
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
      `,children:"Dodaj"})]})]})}function V({isOpen:r,onClose:a}){const[i,u]=d.useState({title:"",description:"",category:"",date:"",time:"",image:null,price:"",totalSlots:"",link:"",location:""}),[l,x]=d.useState();d.useEffect(()=>{if(!i.image){x(void 0);return}const p=URL.createObjectURL(i.image);return x(p),()=>{URL.revokeObjectURL(p)}},[i.image]),d.useEffect(()=>(document.body.style.overflow=r?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[r]);function b(){u({title:"",description:"",category:"",date:"",time:"",image:null,price:"",totalSlots:"",link:"",location:""}),a()}const o={id:0,title:i.title||"Nowe wydarzenia",description:i.description||"Tutaj pojawi się opis wydarzenia",category:i.category||"Inne",date:i.date||new Date().toISOString().split("T")[0],startTime:i.time||"12:00",image:"",location:i.location||"Hej Mistrzu, Rumia",maxSlots:Number(i.totalSlots)||20,price:Number(i.price)||0,link:i.link};return e.jsx(v,{children:r&&e.jsxs(h.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:b,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            items-center\r
            justify-center\r
            gap-40\r
            flex\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:[e.jsxs(h.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:p=>p.stopPropagation(),onMouseDown:p=>p.stopPropagation(),className:`\r
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
              col-span-2\r
            `,children:[e.jsx("button",{type:"button",onClick:b,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:e.jsx(z,{size:18})}),e.jsx("div",{className:"",children:e.jsx("h2",{className:"font-heading text-center text-2xl mb-2 font-semibold",children:"Dodaj Event"})}),e.jsx(H,{formData:i,setFormData:u,closeModal:b})]}),e.jsx(S,{event:o,isPreview:!0,imageSrc:l})]})})}function Z({isOpen:r,onClose:a,event:i,months:u}){return d.useEffect(()=>(document.body.style.overflow=r?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[r]),i?e.jsx(v,{children:r&&e.jsx(h.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:a,className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50",children:e.jsxs(h.div,{initial:{scale:.9},animate:{scale:1},exit:{scale:.9},onMouseDown:l=>l.stopPropagation(),onClick:l=>l.stopPropagation(),className:`\r
              relative\r
              w-full\r
              max-w-7xl\r
              rounded-xl\r
              border\r
              border-primary/30\r
              bg-background\r
              p-6\r
            `,children:[e.jsx("button",{onClick:a,className:"absolute top-4 right-4",children:e.jsx(z,{})}),e.jsxs("div",{className:"flex justify-center gap-16 items-center mt-8",children:[e.jsx("div",{children:e.jsx(S,{event:i,isPreview:!0})}),!i.link&&e.jsx(L,{event:i,months:u,onClose:a,preview:!0}),i.link&&e.jsxs("div",{className:"flex flex-col w-full max-w-2xl mb-auto",children:[e.jsx("p",{children:"Rezerwacja na to wydarzenie odbywa się po kliknięciu w poniższy link:"}),e.jsx("a",{href:i.link,target:"_blank",className:"text-primary underline mt-2",children:i.link})]})]})]})})}):null}const f=6;function ie(){const[r,a]=d.useState(""),[i,u]=d.useState("default"),[l,x]=d.useState(1),[b,o]=d.useState(!1),[p,g]=d.useState(!1),[j,n]=d.useState(null),c=[...N.filter(s=>w(s.title).includes(w(r)))];switch(i){case"title-asc":c.sort((s,m)=>s.title.localeCompare(m.title));break;case"title-desc":c.sort((s,m)=>m.title.localeCompare(s.title));break;case"date-asc":c.sort((s,m)=>new Date(s.date).getTime()-new Date(m.date).getTime());break;case"date-desc":c.sort((s,m)=>new Date(m.date).getTime()-new Date(s.date).getTime());break;case"slots-asc":c.sort((s,m)=>s.maxSlots-m.maxSlots);break;case"slots-desc":c.sort((s,m)=>m.maxSlots-s.maxSlots);break}const y=Math.ceil(c.length/f),C=c.slice((l-1)*f,l*f),E=[{value:"default",label:"Domyślnie"},{value:"title-asc",label:"Tytuł A-Z"},{value:"title-desc",label:"Tytuł Z-A"},{value:"date-asc",label:"Najbliższe"},{value:"date-desc",label:"Najdalsze"},{value:"slots-asc",label:"Miejsca-asc"},{value:"slots-desc",label:"Miejsca-desc"}];return d.useEffect(()=>{x(1)},[r]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-6 min-h-[45rem] relative",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"font-heading text-3xl",children:"Eventy"}),e.jsx("p",{className:"text-muted-foreground mt-2",children:"Zarządzaj eventami."})]}),e.jsx(A,{label:"Szukaj eventów",search:r,setSearch:a,sortBy:i,setSortBy:u,sortOptions:E,button:e.jsxs("button",{onClick:()=>o(!0),className:`\r
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
            `,children:[e.jsx(P,{size:18})," Dodaj event"]})}),e.jsxs("div",{className:"h-[33rem] flex flex-col justify-between",children:[e.jsxs(_,{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[e.jsx("th",{className:"p-4 w-20",children:"ID"}),e.jsx("th",{className:"p-4 w-[25%]",children:"Tytuł"}),e.jsx("th",{className:"p-4 w-[25%]",children:"Kategoria"}),e.jsx("th",{className:"p-4",children:"Data"}),e.jsx("th",{className:"p-4",children:"Miejsca"}),e.jsx("th",{className:"p-4",children:"Cena"}),e.jsx("th",{className:"p-4",children:"Akcje"})]})}),e.jsx("tbody",{children:C.map(s=>e.jsxs("tr",{className:`\r
                  border-b\r
                  border-border/50\r
                  hover:bg-muted/20\r
                  text-center\r
                `,children:[e.jsxs("td",{className:"p-4",children:[" ",s.id," "]}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"relative group",children:[e.jsx("div",{className:"truncate",children:s.title}),e.jsx("div",{className:`\r
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
                      `,children:s.title})]})}),e.jsxs("td",{className:"p-4",children:[" ",s.category," "]}),e.jsxs("td",{className:"p-4",children:[" ",new Date(s.date).toLocaleDateString("pl-PL")," "]}),e.jsx("td",{className:"p-4",children:e.jsx("span",{className:s.maxSlots>.8?"text-red-400":s.maxSlots>.5?"text-yellow-400":"text-green-400",children:s.maxSlots})}),e.jsxs("td",{className:"p-4",children:[" ",s.price," zł "]}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{onClick:()=>{n(s),g(!0)},className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-muted\r
                        border border-transparent\r
                        hover:border-muted-foreground/30\r
                      `,children:e.jsx(U,{size:16})}),e.jsx("button",{className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-muted\r
                        border border-transparent\r
                        hover:border-muted-foreground/30\r
                      `,children:e.jsx(W,{size:16})}),e.jsx("button",{className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-destructive/10\r
                        hover:text-destructive\r
                        border border-transparent\r
                        hover:border-destructive/30\r
                      `,children:e.jsx(T,{size:16})})]})})]},s.id))})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-sm text-muted-foreground",children:["Strona ",l," z ",y]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>x(s=>Math.max(s-1,1)),disabled:l===1,className:`\r
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
              `,children:"Poprzednia"}),e.jsx("button",{onClick:()=>x(s=>Math.min(s+1,y)),disabled:l===y,className:`\r
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
              `,children:"Następna"})]})]})]}),N.length===0&&e.jsx("div",{className:"absolute -top-12 left-0 right-0 bottom-0",children:e.jsx(M,{})})]}),b&&e.jsx(V,{isOpen:b,onClose:()=>o(!1)}),j&&e.jsx(Z,{isOpen:p,onClose:()=>{g(!1),n(null)},event:j,months:O})]})}export{ie as default};
