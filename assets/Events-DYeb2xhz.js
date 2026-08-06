import{g as c,j as e,o as k,k as v,X as P,E as W,P as Z,T as V,V as $}from"./index-BS5mKwd6.js";import{A as G}from"./AdminTable-D2nyXYIp.js";import{a as S}from"./index-CzApALvg.js";import{g as _,E as T,a as K}from"./EventCard-Ba9nPcCe.js";import{C as L}from"./chevron-down-C-Re-DoV.js";import{n as I}from"./index-WQ0BBVcu.js";import{T as B}from"./TableFilters-BbvKA7rD.js";import{M as X}from"./months-CBoTsXHR.js";import{T as q}from"./triangle-alert-DDpUHBWg.js";import{E as J}from"./eye-uM1RlFK7.js";import{P as Q}from"./pencil-BnRb8EVn.js";import"./circle-check-D_k4ueZD.js";import"./calendar-CBDjej2W.js";import"./users-BSs5ihe_.js";import"./tag-BzcIz7mH.js";import"./input-BfmlkSe-.js";import"./search-DhEY0KiN.js";const R=_();function Y({formData:n,setFormData:r,closeModal:d,onEventCreated:u}){const a=c.useRef(null),[x,h]=c.useState(!1),p=new Date;p.setHours(0,0,0,0);const[m,b]=c.useState({title:"",description:"",image:"",category:"",date:"",time:"",price:"",totalSlots:"",link:"",location:""}),y=i=>{const t={title:"",description:"",image:"",category:"",date:"",time:"",price:"",totalSlots:"",link:"",location:""};if(i.title.trim()===""&&(t.title="Podaj tytuł wydarzenia"),i.description.trim()===""&&(t.description="Podaj opis wydarzenia"),i.image||(t.image="Dodaj zdjęcie wydarzenia"),R.includes(i.category)||(t.category="Wybierz kategorię"),i.date.trim()==="")t.date="Wybierz datę";else{const j=new Date(i.date);j.setHours(0,0,0,0),j<p&&(t.date="Data nie może być z przeszłości")}return i.time.trim()===""&&(t.time="Wybierz godzinę"),i.price.trim()===""?t.price="Podaj cenę":Number(i.price)<=0&&(t.price="Cena musi być większa od 0"),i.totalSlots.trim()===""?t.totalSlots="Podaj liczbę miejsc":Number(i.totalSlots)<=0&&(t.totalSlots="Liczba miejsc musi być większa od 0"),i.link.trim()!==""&&!/^https?:\/\/.+/i.test(i.link.trim())&&(t.link="Podaj poprawny adres URL"),location||(t.location="Podaj lokalizację"),b(t),Object.values(t).every(j=>j==="")};async function g(i){if(i.preventDefault(),!!y(n))try{const t=new FormData;t.append("title",n.title),t.append("description",n.description),n.image&&t.append("image",n.image),t.append("category",n.category),t.append("eventDate",n.date),t.append("eventTime",n.time),t.append("maxSlots",n.totalSlots),t.append("price",n.price),t.append("link",n.link),t.append("location",n.location||"Hej Mistrzu, Rumia"),await S.post("http://localhost:3000/events",t),u(),d()}catch(t){console.error(t)}}return e.jsxs("form",{onSubmit:g,className:"flex flex-col space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Tytuł"}),e.jsx("input",{type:"text",value:n.title,onChange:i=>r({...n,title:i.target.value}),className:`\r
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
      `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:m.title})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Opis"}),e.jsx("textarea",{value:n.description,onChange:i=>r({...n,description:i.target.value}),rows:2,className:`\r
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
      `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:m.description})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-x-4 items-end",children:[e.jsxs("div",{className:"col-span-3",children:[e.jsx("label",{className:"mb-1 block",children:"Zdjęcie"}),e.jsx("input",{ref:a,type:"file",accept:".webp,image/webp",name:"image",onChange:i=>{var t;return r({...n,image:((t=i.target.files)==null?void 0:t[0])??null})},className:`\r
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
        `})]}),e.jsx("button",{type:"button",onClick:()=>{a.current&&(a.current.value=""),r({...n,image:null})},className:`\r
    border\r
    p-3\r
    w-full h-fit\r
    rounded-lg\r
    border-red-500/30 text-red-500/50 bg-transparent\r
    hover:border-red-500 hover:text-red-500 hover:bg-red-500/5\r
    transition-all duration-200\r
    `,children:"Usuń zdjęcie"}),e.jsx("p",{className:"text-red-500 text-xs min-h-4 col-span-4",children:m.image})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Cena"}),e.jsx("input",{type:"number",value:n.price,onChange:i=>r({...n,price:i.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:m.price})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Ilość miejsc"}),e.jsx("input",{type:"number",value:n.totalSlots,onChange:i=>r({...n,totalSlots:i.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:m.totalSlots})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Kategoria"}),e.jsxs("button",{type:"button",onClick:()=>h(!x),className:`\r
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
        `,children:[e.jsx("span",{children:n.category||"Wybierz kategorię"}),e.jsx(L,{size:18,className:`transition-transform ${x?"rotate-180":""}`})]}),e.jsx(k,{children:x&&e.jsx(v.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
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
            `,children:R.map(i=>e.jsx("button",{type:"button",onClick:()=>{r({...n,category:i}),h(!1)},className:`\r
                  w-full\r
                  text-left\r
                  p-2\r
                  rounded-md\r
                  hover:bg-primary\r
                  hover:text-black\r
                `,children:i},i))})}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:m.category})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Data"}),e.jsx("input",{type:"date",value:n.date,onChange:i=>r({...n,date:i.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:m.date})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Godzina"}),e.jsx("input",{type:"time",value:n.time,onChange:i=>r({...n,time:i.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:m.time})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"mb-1 block",children:["Link do zapisów ",e.jsx("span",{className:"text-muted-foreground text-sm",children:"(opcjonalnie)"})]}),e.jsx("input",{type:"text",value:n.link,onChange:i=>r({...n,link:i.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:m.link})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"mb-1 block",children:["Lokalizacja ",e.jsx("span",{className:"text-muted-foreground text-sm",children:"(Opcjonalnie)"})]}),e.jsx("input",{type:"text",value:n.location,placeholder:"Hej Mistrzu, Rumia",onChange:i=>r({...n,location:i.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:m.location})]})]}),e.jsxs("div",{className:"flex gap-3 pt-2",children:[e.jsx("button",{type:"button",onClick:d,className:`\r
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
      `,children:"Dodaj"})]})]})}function F({isAddOpen:n,onClose:r,onEventCreated:d}){const[u,a]=c.useState({title:"",description:"",category:"",date:"",time:"",image:null,price:"",totalSlots:"",link:"",location:""}),[x,h]=c.useState();c.useEffect(()=>{if(!u.image){h(void 0);return}const b=URL.createObjectURL(u.image);return h(b),()=>{URL.revokeObjectURL(b)}},[u.image]),c.useEffect(()=>(document.body.style.overflow=n?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[n]);function p(){a({title:"",description:"",category:"",date:"",time:"",image:null,price:"",totalSlots:"",link:"",location:""}),r()}const m={id:0,title:u.title||"Nowe wydarzenia",description:u.description||"Tutaj pojawi się opis wydarzenia",category:u.category||"Inne",date:u.date||new Date().toISOString().split("T")[0],startTime:u.time||"12:00",image:"",location:u.location||"Hej Mistrzu, Rumia",maxSlots:Number(u.totalSlots)||20,price:Number(u.price)||0,link:u.link};return e.jsx(k,{children:n&&e.jsxs(v.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:p,className:`\r
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
          `,children:[e.jsxs(v.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:b=>b.stopPropagation(),onMouseDown:b=>b.stopPropagation(),className:`\r
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
            `,children:[e.jsx("button",{type:"button",onClick:p,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:e.jsx(P,{size:18})}),e.jsx("div",{className:"",children:e.jsx("h2",{className:"font-heading text-center text-2xl mb-2 font-semibold",children:"Dodaj Event"})}),e.jsx(Y,{formData:u,setFormData:a,closeModal:p,onEventCreated:d})]}),e.jsx(T,{event:m,isPreview:!0,imageSrc:x})]})})}function D({isOpen:n,onClose:r,event:d,months:u}){return c.useEffect(()=>(document.body.style.overflow=n?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[n]),d?e.jsx(k,{children:n&&e.jsx(v.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:r,className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50",children:e.jsxs(v.div,{initial:{scale:.9},animate:{scale:1},exit:{scale:.9},onMouseDown:a=>a.stopPropagation(),onClick:a=>a.stopPropagation(),className:`\r
              relative\r
              w-full\r
              max-w-7xl\r
              rounded-xl\r
              border\r
              border-primary/30\r
              bg-background\r
              p-6\r
            `,children:[e.jsx("button",{onClick:r,className:"absolute top-4 right-4",children:e.jsx(P,{})}),e.jsxs("div",{className:"flex justify-center gap-16 items-center mt-8",children:[e.jsx("div",{children:e.jsx(T,{event:d,isPreview:!0})}),!d.link&&e.jsx(K,{event:d,months:u,onClose:r,preview:!0}),d.link&&e.jsxs("div",{className:"flex flex-col w-full max-w-2xl mb-auto",children:[e.jsx("p",{children:"Rezerwacja na to wydarzenie odbywa się po kliknięciu w poniższy link:"}),e.jsx("a",{href:d.link,target:"_blank",className:"text-primary underline mt-2",children:d.link})]})]})]})})}):null}const O=_();function ee({event:n,formData:r,setFormData:d,closeModal:u,onEventUpdated:a,onRemoveImage:x,removeImage:h}){const p=c.useRef(null),[m,b]=c.useState(!1),y=new Date;y.setHours(0,0,0,0);const[g,i]=c.useState({title:"",description:"",image:"",category:"",date:"",time:"",price:"",totalSlots:"",link:"",location:""}),t=s=>{const o={title:"",description:"",image:"",category:"",date:"",time:"",price:"",totalSlots:"",link:"",location:""};if(s.title.trim()===""&&(o.title="Podaj tytuł wydarzenia"),s.description.trim()===""&&(o.description="Podaj opis wydarzenia"),O.includes(s.category)||(o.category="Wybierz kategorię"),s.date.trim()==="")o.date="Wybierz datę";else{const w=new Date(s.date);w.setHours(0,0,0,0),w<y&&(o.date="Data nie może być z przeszłości")}return s.time.trim()===""&&(o.time="Wybierz godzinę"),s.price.trim()===""?o.price="Podaj cenę":Number(s.price)<=0&&(o.price="Cena musi być większa od 0"),s.totalSlots.trim()===""?o.totalSlots="Podaj liczbę miejsc":Number(s.totalSlots)<=0&&(o.totalSlots="Liczba miejsc musi być większa od 0"),s.link.trim()!==""&&!/^https?:\/\/.+/i.test(s.link.trim())&&(o.link="Podaj poprawny adres URL"),i(o),Object.values(o).every(w=>w==="")};async function j(s){if(s.preventDefault(),!!t(r))try{const o=new FormData;o.append("title",r.title),o.append("description",r.description),r.image&&o.append("image",r.image),o.append("category",r.category),o.append("eventDate",r.date),o.append("eventTime",r.time),o.append("maxSlots",r.totalSlots),o.append("price",r.price),o.append("link",r.link),o.append("location",r.location.trim()||"Hej Mistrzu, Rumia"),o.append("removeImage",String(h)),await S.put(`http://localhost:3000/events/${n.id}`,o),a(),u()}catch(o){console.error(o)}}return e.jsxs("form",{onSubmit:j,className:"flex flex-col space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Tytuł"}),e.jsx("input",{type:"text",value:r.title,onChange:s=>d({...r,title:s.target.value}),className:`\r
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
      `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:g.title})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Opis"}),e.jsx("textarea",{value:r.description,onChange:s=>d({...r,description:s.target.value}),rows:2,className:`\r
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
      `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:g.description})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-x-4 items-end",children:[e.jsxs("div",{className:"col-span-3",children:[e.jsx("label",{className:"mb-1 block",children:"Zdjęcie"}),e.jsx("input",{ref:p,type:"file",accept:".webp,image/webp",name:"image",onChange:s=>{var o;return d({...r,image:((o=s.target.files)==null?void 0:o[0])??null})},className:`\r
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
        `})]}),e.jsx("button",{type:"button",onClick:()=>{p.current&&(p.current.value=""),x()},className:`\r
    border\r
    p-3\r
    w-full h-fit\r
    rounded-lg\r
    border-red-500/30 text-red-500/50 bg-transparent\r
    hover:border-red-500 hover:text-red-500 hover:bg-red-500/5\r
    transition-all duration-200\r
    `,children:"Usuń zdjęcie"}),e.jsx("p",{className:"text-red-500 text-xs min-h-4 col-span-4",children:g.image})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Cena"}),e.jsx("input",{type:"number",value:r.price,onChange:s=>d({...r,price:s.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:g.price})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Ilość miejsc"}),e.jsx("input",{type:"number",value:r.totalSlots,onChange:s=>d({...r,totalSlots:s.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:g.totalSlots})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Kategoria"}),e.jsxs("button",{type:"button",onClick:()=>b(!m),className:`\r
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
        `,children:[e.jsx("span",{children:r.category||"Wybierz kategorię"}),e.jsx(L,{size:18,className:`transition-transform ${m?"rotate-180":""}`})]}),e.jsx(k,{children:m&&e.jsx(v.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
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
            `,children:O.map(s=>e.jsx("button",{type:"button",onClick:()=>{d({...r,category:s}),b(!1)},className:`\r
                  w-full\r
                  text-left\r
                  p-2\r
                  rounded-md\r
                  hover:bg-primary\r
                  hover:text-black\r
                `,children:s},s))})}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:g.category})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Data"}),e.jsx("input",{type:"date",value:r.date,onChange:s=>d({...r,date:s.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:g.date})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Godzina"}),e.jsx("input",{type:"time",value:r.time,onChange:s=>d({...r,time:s.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:g.time})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"mb-1 block",children:["Link do zapisów ",e.jsx("span",{className:"text-muted-foreground text-sm",children:"(opcjonalnie)"})]}),e.jsx("input",{type:"text",value:r.link,onChange:s=>d({...r,link:s.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:g.link})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"mb-1 block",children:["Lokalizacja ",e.jsx("span",{className:"text-muted-foreground text-sm",children:"(Opcjonalnie)"})]}),e.jsx("input",{type:"text",value:r.location,placeholder:"Hej Mistrzu, Rumia",onChange:s=>d({...r,location:s.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:g.location})]})]}),e.jsxs("div",{className:"flex gap-3 pt-2",children:[e.jsx("button",{type:"button",onClick:u,className:`\r
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
      `,children:"Zapisz zmiany"})]})]})}function re({isOpen:n,event:r,onClose:d,onEventUpdated:u}){const[a,x]=c.useState({title:"",description:"",category:"",date:"",time:"",image:null,price:"",totalSlots:"",link:"",location:""}),[h,p]=c.useState(),[m,b]=c.useState(!1);c.useEffect(()=>{if(!a.image){p(void 0);return}const t=URL.createObjectURL(a.image);return b(!1),p(t),()=>{URL.revokeObjectURL(t)}},[a.image]),c.useEffect(()=>{r&&x({title:r.title,description:r.description,category:r.category,date:r.date,time:r.startTime.slice(0,5),image:null,price:r.price.toString(),totalSlots:r.maxSlots.toString(),link:r.link,location:r.location})},[r]),c.useEffect(()=>(document.body.style.overflow=n?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[n]);function y(){x({title:"",description:"",category:"",date:"",time:"",image:null,price:"",totalSlots:"",link:"",location:""}),d()}function g(){b(!0),p(void 0),x(t=>({...t,image:null}))}const i={id:0,title:a.title||"Nowe wydarzenia",description:a.description||"Tutaj pojawi się opis wydarzenia",category:a.category||"Inne",date:a.date||new Date().toISOString().split("T")[0],startTime:a.time||"12:00",image:m?"":h||r.image,location:a.location||"Hej Mistrzu, Rumia",maxSlots:Number(a.totalSlots)||20,price:Number(a.price)||0,link:a.link};return e.jsx(k,{children:n&&e.jsxs(v.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:y,className:`\r
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
          `,children:[e.jsxs(v.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:t=>t.stopPropagation(),onMouseDown:t=>t.stopPropagation(),className:`\r
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
            `,children:[e.jsx("button",{type:"button",onClick:y,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:e.jsx(P,{size:18})}),e.jsx("div",{className:"",children:e.jsx("h2",{className:"font-heading text-center text-2xl mb-2 font-semibold",children:"Edytuj Event"})}),e.jsx(ee,{event:r,formData:a,setFormData:x,closeModal:y,onEventUpdated:u,onRemoveImage:g,removeImage:m})]}),e.jsx(T,{event:i,isPreview:!0,imageSrc:h})]})})}function ne({isOpen:n,event:r,onClose:d,onEventDeleted:u}){const[a,x]=c.useState(!1);async function h(){try{x(!0),await S.delete(`http://localhost:3000/events/${r.id}`),u(),d()}catch(p){console.error(p)}finally{x(!1)}}return e.jsx(k,{children:n&&e.jsx(v.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:d,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:e.jsxs(v.div,{initial:{scale:.9},animate:{scale:1},exit:{scale:.9},onMouseDown:p=>p.stopPropagation(),onClick:p=>p.stopPropagation(),className:`\r
              w-full\r
              max-w-lg\r
              rounded-xl\r
              border\r
              border-red-500/30\r
              bg-card\r
              p-6\r
            `,children:[e.jsx("div",{className:"flex justify-center mb-5",children:e.jsx(q,{size:64,className:"text-red-500"})}),e.jsx("h2",{className:"text-center font-heading text-2xl font-semibold",children:"Usuń wydarzenie"}),e.jsx("p",{className:"text-center text-muted-foreground mt-3",children:"Czy na pewno chcesz usunąć wydarzenie:"}),e.jsx("p",{className:"text-center font-semibold text-primary mt-2",children:r.title}),e.jsx("p",{className:"text-center text-sm text-muted-foreground mt-4",children:"Operacji nie będzie można cofnąć."}),e.jsxs("div",{className:"flex justify-end gap-3 mt-8",children:[e.jsx("button",{onClick:d,disabled:a,className:`\r
                  px-4\r
                  py-2\r
                  rounded-lg\r
                  border\r
                  hover:bg-muted\r
                  disabled:opacity-50\r
                  disabled:cursor-not-allowed\r
                  transition-all duration-200\r
                `,children:"Anuluj"}),e.jsx("button",{onClick:h,disabled:a,className:`\r
                  px-4\r
                  py-2\r
                  rounded-lg\r
                  bg-red-600\r
                  text-white\r
                  hover:bg-red-700/60\r
                  min-w-[12rem]\r
                  flex\r
                  justify-center\r
                  items-center\r
                  disabled:opacity-50\r
                  disabled:cursor-not-allowed\r
                  transition-all duration-200\r
                `,children:a?e.jsxs("span",{className:"flex gap-2 items-center text-nowrap",children:["Usuwanie",e.jsx(W,{size:16,className:"animate-spin"})]}):"Usuń Wydarzenie"})]})]})})})}const E=6;function ve(){const[n,r]=c.useState(""),[d,u]=c.useState("default"),[a,x]=c.useState(1),[h,p]=c.useState(!1),[m,b]=c.useState(!1),[y,g]=c.useState(!1),[i,t]=c.useState(!1),[j,s]=c.useState(null),[o,w]=c.useState([]),[U,M]=c.useState(!0),N=[...o.filter(l=>I(l.title).includes(I(n)))];switch(d){case"title-asc":N.sort((l,f)=>l.title.localeCompare(f.title));break;case"title-desc":N.sort((l,f)=>f.title.localeCompare(l.title));break;case"date-asc":N.sort((l,f)=>new Date(l.date).getTime()-new Date(f.date).getTime());break;case"date-desc":N.sort((l,f)=>new Date(f.date).getTime()-new Date(l.date).getTime());break;case"slots-asc":N.sort((l,f)=>l.maxSlots-f.maxSlots);break;case"slots-desc":N.sort((l,f)=>f.maxSlots-l.maxSlots);break}const C=Math.ceil(N.length/E),A=N.slice((a-1)*E,a*E),H=[{value:"default",label:"Domyślnie"},{value:"title-asc",label:"Tytuł A-Z"},{value:"title-desc",label:"Tytuł Z-A"},{value:"date-asc",label:"Najbliższe"},{value:"date-desc",label:"Najdalsze"},{value:"slots-asc",label:"Miejsca-asc"},{value:"slots-desc",label:"Miejsca-desc"}];async function z(){try{M(!0);const l=await S.get("http://localhost:3000/events");w(l.data)}catch(l){console.error(l)}finally{M(!1)}}return c.useEffect(()=>{z()},[]),c.useEffect(()=>{x(1)},[n]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-6 min-h-[45rem] relative",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"font-heading text-3xl",children:"Eventy"}),e.jsx("p",{className:"text-muted-foreground mt-2",children:"Zarządzaj eventami."})]}),e.jsx(B,{label:"Szukaj eventów",search:n,setSearch:r,sortBy:d,setSortBy:u,sortOptions:H,button:e.jsxs("button",{onClick:()=>p(!0),className:`\r
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
            `,children:[e.jsx(Z,{size:18})," Dodaj event"]})}),e.jsxs("div",{className:"h-[33rem] flex flex-col justify-between",children:[e.jsxs(G,{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[e.jsx("th",{className:"p-4 w-20",children:"ID"}),e.jsx("th",{className:"p-4 w-[25%]",children:"Tytuł"}),e.jsx("th",{className:"p-4 w-[25%]",children:"Kategoria"}),e.jsx("th",{className:"p-4",children:"Data"}),e.jsx("th",{className:"p-4",children:"Miejsca"}),e.jsx("th",{className:"p-4",children:"Cena"}),e.jsx("th",{className:"p-4",children:"Akcje"})]})}),e.jsx("tbody",{children:A.map(l=>e.jsxs("tr",{className:`\r
                  border-b\r
                  border-border/50\r
                  hover:bg-muted/20\r
                  text-center\r
                `,children:[e.jsxs("td",{className:"p-4",children:[" ",l.id," "]}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"relative group",children:[e.jsx("div",{className:"truncate",children:l.title}),e.jsx("div",{className:`\r
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
                      `,children:l.title})]})}),e.jsxs("td",{className:"p-4",children:[" ",l.category," "]}),e.jsxs("td",{className:"p-4",children:[" ",new Date(l.date).toLocaleDateString("pl-PL")," "]}),e.jsx("td",{className:"p-4",children:e.jsx("span",{className:l.maxSlots>.8?"text-red-400":l.maxSlots>.5?"text-yellow-400":"text-green-400",children:l.maxSlots})}),e.jsxs("td",{className:"p-4",children:[" ",l.price," zł "]}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{onClick:()=>{s(l),b(!0)},className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-muted\r
                        border border-transparent\r
                        hover:border-muted-foreground/30\r
                      `,children:e.jsx(J,{size:16})}),e.jsx("button",{onClick:()=>{s(l),g(!0)},className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-muted\r
                        border border-transparent\r
                        hover:border-muted-foreground/30\r
                      `,children:e.jsx(Q,{size:16})}),e.jsx("button",{onClick:()=>{s(l),t(!0)},className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-destructive/10\r
                        hover:text-destructive\r
                        border border-transparent\r
                        hover:border-destructive/30\r
                      `,children:e.jsx(V,{size:16})})]})})]},l.id))})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-sm text-muted-foreground",children:["Strona ",a," z ",C]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>x(l=>Math.max(l-1,1)),disabled:a===1,className:`\r
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
              `,children:"Poprzednia"}),e.jsx("button",{onClick:()=>x(l=>Math.min(l+1,C)),disabled:a===C,className:`\r
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
              `,children:"Następna"})]})]})]}),U&&e.jsx("div",{className:"absolute -top-12 left-0 right-0 bottom-0",children:e.jsx($,{})})]}),h&&e.jsx(F,{isAddOpen:h,onClose:()=>p(!1),onEventCreated:z}),j&&e.jsxs(e.Fragment,{children:[y&&e.jsx(re,{isOpen:y,event:j,onClose:()=>{g(!1),s(null)},onEventUpdated:z}),m&&e.jsx(D,{isOpen:m,onClose:()=>{b(!1),s(null)},event:j,months:X}),i&&e.jsx(ne,{isOpen:i,onClose:()=>{t(!1),s(null)},event:j,onEventDeleted:z})]})]})}export{ve as default};
