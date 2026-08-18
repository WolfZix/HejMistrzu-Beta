import{g as d,j as e,o as k,k as N,X as E,P as H,V as Z,W as V}from"./index-OOAlZSw9.js";import{T as $,A as G,D as K}from"./TableFilters-DrlIrDG4.js";import{a as P}from"./index-CzApALvg.js";import{g as _,E as I,a as B}from"./EventCard-B6Zw9o1D.js";import{C as L}from"./chevron-down-Cm-Bpr4E.js";import{n as R}from"./index-WQ0BBVcu.js";import{M as X}from"./months-CBoTsXHR.js";import{E as q}from"./eye-Dc8XNwRg.js";import{P as J}from"./pencil-csvOtJkt.js";import"./triangle-alert-BU_UCa2f.js";import"./input-4pD29YQI.js";import"./search-G-8tX4SS.js";import"./circle-check-C0HN3t6E.js";import"./calendar-SXBVPshD.js";import"./users-C6US0JyR.js";import"./tag-DzMlsKYN.js";const T=_();function Q({formData:n,setFormData:r,closeModal:c,onEventCreated:u}){const l=d.useRef(null),[g,h]=d.useState(!1),m=new Date;m.setHours(0,0,0,0);const[p,x]=d.useState({title:"",description:"",image:"",category:"",date:"",time:"",price:"",totalSlots:"",link:"",location:""}),j=i=>{const t={title:"",description:"",image:"",category:"",date:"",time:"",price:"",totalSlots:"",link:"",location:""};if(i.title.trim()===""&&(t.title="Podaj tytuł wydarzenia"),i.description.trim()===""&&(t.description="Podaj opis wydarzenia"),i.image||(t.image="Dodaj zdjęcie wydarzenia"),T.includes(i.category)||(t.category="Wybierz kategorię"),i.date.trim()==="")t.date="Wybierz datę";else{const y=new Date(i.date);y.setHours(0,0,0,0),y<m&&(t.date="Data nie może być z przeszłości")}return i.time.trim()===""&&(t.time="Wybierz godzinę"),i.price.trim()===""?t.price="Podaj cenę":Number(i.price)<=0&&(t.price="Cena musi być większa od 0"),i.totalSlots.trim()===""?t.totalSlots="Podaj liczbę miejsc":Number(i.totalSlots)<=0&&(t.totalSlots="Liczba miejsc musi być większa od 0"),i.link.trim()!==""&&!/^https?:\/\/.+/i.test(i.link.trim())&&(t.link="Podaj poprawny adres URL"),location||(t.location="Podaj lokalizację"),x(t),Object.values(t).every(y=>y==="")};async function b(i){if(i.preventDefault(),!!j(n))try{const t=new FormData;t.append("title",n.title),t.append("description",n.description),n.image&&t.append("image",n.image),t.append("category",n.category),t.append("eventDate",n.date),t.append("eventTime",n.time),t.append("maxSlots",n.totalSlots),t.append("price",n.price),t.append("link",n.link),t.append("location",n.location||"Hej Mistrzu, Rumia"),await P.post("http://localhost:3000/events",t),u(),c()}catch(t){console.error(t)}}return e.jsxs("form",{onSubmit:b,className:"flex flex-col space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Tytuł"}),e.jsx("input",{type:"text",value:n.title,onChange:i=>r({...n,title:i.target.value}),className:`\r
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
      `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:p.title})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Opis"}),e.jsx("textarea",{value:n.description,onChange:i=>r({...n,description:i.target.value}),rows:2,className:`\r
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
      `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:p.description})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-x-4 items-end",children:[e.jsxs("div",{className:"col-span-3",children:[e.jsx("label",{className:"mb-1 block",children:"Zdjęcie"}),e.jsx("input",{ref:l,type:"file",accept:".webp,image/webp",name:"image",onChange:i=>{var t;return r({...n,image:((t=i.target.files)==null?void 0:t[0])??null})},className:`\r
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
        `})]}),e.jsx("button",{type:"button",onClick:()=>{l.current&&(l.current.value=""),r({...n,image:null})},className:`\r
    border\r
    p-3\r
    w-full h-fit\r
    rounded-lg\r
    border-red-500/30 text-red-500/50 bg-transparent\r
    hover:border-red-500 hover:text-red-500 hover:bg-red-500/5\r
    transition-all duration-200\r
    `,children:"Usuń zdjęcie"}),e.jsx("p",{className:"text-red-500 text-xs min-h-4 col-span-4",children:p.image})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Cena"}),e.jsx("input",{type:"number",value:n.price,onChange:i=>r({...n,price:i.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:p.price})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Ilość miejsc"}),e.jsx("input",{type:"number",value:n.totalSlots,onChange:i=>r({...n,totalSlots:i.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:p.totalSlots})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Kategoria"}),e.jsxs("button",{type:"button",onClick:()=>h(!g),className:`\r
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
        `,children:[e.jsx("span",{children:n.category||"Wybierz kategorię"}),e.jsx(L,{size:18,className:`transition-transform ${g?"rotate-180":""}`})]}),e.jsx(k,{children:g&&e.jsx(N.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
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
            `,children:T.map(i=>e.jsx("button",{type:"button",onClick:()=>{r({...n,category:i}),h(!1)},className:`\r
                  w-full\r
                  text-left\r
                  p-2\r
                  rounded-md\r
                  hover:bg-primary\r
                  hover:text-black\r
                `,children:i},i))})}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:p.category})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Data"}),e.jsx("input",{type:"date",value:n.date,onChange:i=>r({...n,date:i.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:p.date})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Godzina"}),e.jsx("input",{type:"time",value:n.time,onChange:i=>r({...n,time:i.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:p.time})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"mb-1 block",children:["Link do zapisów ",e.jsx("span",{className:"text-muted-foreground text-sm",children:"(opcjonalnie)"})]}),e.jsx("input",{type:"text",value:n.link,onChange:i=>r({...n,link:i.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:p.link})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"mb-1 block",children:["Lokalizacja ",e.jsx("span",{className:"text-muted-foreground text-sm",children:"(Opcjonalnie)"})]}),e.jsx("input",{type:"text",value:n.location,placeholder:"Hej Mistrzu, Rumia",onChange:i=>r({...n,location:i.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:p.location})]})]}),e.jsxs("div",{className:"flex gap-3 pt-2",children:[e.jsx("button",{type:"button",onClick:c,className:`\r
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
      `,children:"Dodaj"})]})]})}function Y({isAddOpen:n,onClose:r,onEventCreated:c}){const[u,l]=d.useState({title:"",description:"",category:"",date:"",time:"",image:null,price:"",totalSlots:"",freeSlots:"",link:"",location:""}),[g,h]=d.useState();d.useEffect(()=>{if(!u.image){h(void 0);return}const x=URL.createObjectURL(u.image);return h(x),()=>{URL.revokeObjectURL(x)}},[u.image]),d.useEffect(()=>(document.body.style.overflow=n?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[n]);function m(){l({title:"",description:"",category:"",date:"",time:"",image:null,price:"",totalSlots:"",freeSlots:"",link:"",location:""}),r()}const p={id:0,title:u.title||"Nowe wydarzenie",description:u.description||"Tutaj pojawi się opis wydarzenia",category:u.category||"Inne",date:u.date||new Date().toISOString().split("T")[0],startTime:u.time||"12:00",image:"",location:u.location||"Hej Mistrzu, Rumia",maxSlots:Number(u.totalSlots)||20,freeSlots:Number(u.totalSlots)||20,price:Number(u.price)||0,link:u.link};return e.jsx(k,{children:n&&e.jsxs(N.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:m,className:`\r
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
          `,children:[e.jsxs(N.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:x=>x.stopPropagation(),onMouseDown:x=>x.stopPropagation(),className:`\r
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
            `,children:[e.jsx("button",{type:"button",onClick:m,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:e.jsx(E,{size:18})}),e.jsx("div",{className:"",children:e.jsx("h2",{className:"font-heading text-center text-2xl mb-2 font-semibold",children:"Dodaj Wydarzenie"})}),e.jsx(Q,{formData:u,setFormData:l,closeModal:m,onEventCreated:c})]}),e.jsx(I,{event:p,isPreview:!0,imageSrc:g})]})})}function F({isOpen:n,onClose:r,event:c,months:u}){return d.useEffect(()=>(document.body.style.overflow=n?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[n]),c?e.jsx(k,{children:n&&e.jsx(N.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:r,className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50",children:e.jsxs(N.div,{initial:{scale:.9},animate:{scale:1},exit:{scale:.9},onMouseDown:l=>l.stopPropagation(),onClick:l=>l.stopPropagation(),className:`\r
              relative\r
              w-full\r
              max-w-7xl\r
              rounded-xl\r
              border\r
              border-primary/30\r
              bg-background\r
              p-6\r
            `,children:[e.jsx("button",{onClick:r,className:"absolute top-4 right-4",children:e.jsx(E,{})}),e.jsxs("div",{className:"flex justify-center gap-16 items-center mt-8",children:[e.jsx("div",{children:e.jsx(I,{event:c,isPreview:!0})}),!c.link&&e.jsx(B,{event:c,months:u,onClose:r,preview:!0}),c.link&&e.jsxs("div",{className:"flex flex-col w-full max-w-2xl mb-auto",children:[e.jsx("p",{children:"Rezerwacja na to wydarzenie odbywa się po kliknięciu w poniższy link:"}),e.jsx("a",{href:c.link,target:"_blank",className:"text-primary underline mt-2",children:c.link})]})]})]})})}):null}const O=_();function D({event:n,formData:r,setFormData:c,closeModal:u,onEventUpdated:l,onRemoveImage:g,removeImage:h}){const m=d.useRef(null),[p,x]=d.useState(!1),j=new Date;j.setHours(0,0,0,0);const[b,i]=d.useState({title:"",description:"",image:"",category:"",date:"",time:"",price:"",totalSlots:"",link:"",location:""}),t=s=>{const o={title:"",description:"",image:"",category:"",date:"",time:"",price:"",totalSlots:"",link:"",location:""};if(s.title.trim()===""&&(o.title="Podaj tytuł wydarzenia"),s.description.trim()===""&&(o.description="Podaj opis wydarzenia"),O.includes(s.category)||(o.category="Wybierz kategorię"),s.date.trim()==="")o.date="Wybierz datę";else{const w=new Date(s.date);w.setHours(0,0,0,0),w<j&&(o.date="Data nie może być z przeszłości")}return s.time.trim()===""&&(o.time="Wybierz godzinę"),s.price.trim()===""?o.price="Podaj cenę":Number(s.price)<=0&&(o.price="Cena musi być większa od 0"),s.totalSlots.trim()===""?o.totalSlots="Podaj liczbę miejsc":Number(s.totalSlots)<=0&&(o.totalSlots="Liczba miejsc musi być większa od 0"),s.link.trim()!==""&&!/^https?:\/\/.+/i.test(s.link.trim())&&(o.link="Podaj poprawny adres URL"),i(o),Object.values(o).every(w=>w==="")};async function y(s){if(s.preventDefault(),!!t(r))try{const o=new FormData;o.append("title",r.title),o.append("description",r.description),r.image&&o.append("image",r.image),o.append("category",r.category),o.append("eventDate",r.date),o.append("eventTime",r.time),o.append("maxSlots",r.totalSlots),o.append("price",r.price),o.append("link",r.link),o.append("location",r.location.trim()||"Hej Mistrzu, Rumia"),o.append("removeImage",String(h)),await P.put(`http://localhost:3000/events/${n.id}`,o),l(),u()}catch(o){console.error(o)}}return e.jsxs("form",{onSubmit:y,className:"flex flex-col space-y-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Tytuł"}),e.jsx("input",{type:"text",value:r.title,onChange:s=>c({...r,title:s.target.value}),className:`\r
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
      `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:b.title})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Opis"}),e.jsx("textarea",{value:r.description,onChange:s=>c({...r,description:s.target.value}),rows:2,className:`\r
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
      `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:b.description})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-x-4 items-end",children:[e.jsxs("div",{className:"col-span-3",children:[e.jsx("label",{className:"mb-1 block",children:"Zdjęcie"}),e.jsx("input",{ref:m,type:"file",accept:".webp,image/webp",name:"image",onChange:s=>{var o;return c({...r,image:((o=s.target.files)==null?void 0:o[0])??null})},className:`\r
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
        `})]}),e.jsx("button",{type:"button",onClick:()=>{m.current&&(m.current.value=""),g()},className:`\r
    border\r
    p-3\r
    w-full h-fit\r
    rounded-lg\r
    border-red-500/30 text-red-500/50 bg-transparent\r
    hover:border-red-500 hover:text-red-500 hover:bg-red-500/5\r
    transition-all duration-200\r
    `,children:"Usuń zdjęcie"}),e.jsx("p",{className:"text-red-500 text-xs min-h-4 col-span-4",children:b.image})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Cena"}),e.jsx("input",{type:"number",value:r.price,onChange:s=>c({...r,price:s.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:b.price})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Ilość miejsc"}),e.jsx("input",{type:"number",value:r.totalSlots,onChange:s=>c({...r,totalSlots:s.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:b.totalSlots})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Kategoria"}),e.jsxs("button",{type:"button",onClick:()=>x(!p),className:`\r
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
        `,children:[e.jsx("span",{children:r.category||"Wybierz kategorię"}),e.jsx(L,{size:18,className:`transition-transform ${p?"rotate-180":""}`})]}),e.jsx(k,{children:p&&e.jsx(N.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
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
            `,children:O.map(s=>e.jsx("button",{type:"button",onClick:()=>{c({...r,category:s}),x(!1)},className:`\r
                  w-full\r
                  text-left\r
                  p-2\r
                  rounded-md\r
                  hover:bg-primary\r
                  hover:text-black\r
                `,children:s},s))})}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:b.category})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Data"}),e.jsx("input",{type:"date",value:r.date,onChange:s=>c({...r,date:s.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:b.date})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Godzina"}),e.jsx("input",{type:"time",value:r.time,onChange:s=>c({...r,time:s.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:b.time})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"mb-1 block",children:["Link do zapisów ",e.jsx("span",{className:"text-muted-foreground text-sm",children:"(opcjonalnie)"})]}),e.jsx("input",{type:"text",value:r.link,onChange:s=>c({...r,link:s.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:b.link})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"mb-1 block",children:["Lokalizacja ",e.jsx("span",{className:"text-muted-foreground text-sm",children:"(Opcjonalnie)"})]}),e.jsx("input",{type:"text",value:r.location,placeholder:"Hej Mistrzu, Rumia",onChange:s=>c({...r,location:s.target.value}),className:`\r
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
        `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:b.location})]})]}),e.jsxs("div",{className:"flex gap-3 pt-2",children:[e.jsx("button",{type:"button",onClick:u,className:`\r
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
      `,children:"Zapisz zmiany"})]})]})}function ee({isOpen:n,event:r,onClose:c,onEventUpdated:u}){const[l,g]=d.useState({title:"",description:"",category:"",date:"",time:"",image:null,price:"",totalSlots:"",freeSlots:"",link:"",location:""}),[h,m]=d.useState(),[p,x]=d.useState(!1);d.useEffect(()=>{if(!l.image){m(void 0);return}const t=URL.createObjectURL(l.image);return x(!1),m(t),()=>{URL.revokeObjectURL(t)}},[l.image]),d.useEffect(()=>{r&&g({title:r.title,description:r.description,category:r.category,date:r.date,time:r.startTime.slice(0,5),image:null,price:r.price.toString(),totalSlots:r.maxSlots.toString(),freeSlots:r.freeSlots.toString(),link:r.link,location:r.location})},[r]),d.useEffect(()=>(document.body.style.overflow=n?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[n]);function j(){g({title:"",description:"",category:"",date:"",time:"",image:null,price:"",totalSlots:"",freeSlots:"",link:"",location:""}),c()}function b(){x(!0),m(void 0),g(t=>({...t,image:null}))}const i={id:0,title:l.title||"Nowe wydarzenia",description:l.description||"Tutaj pojawi się opis wydarzenia",category:l.category||"Inne",date:l.date||new Date().toISOString().split("T")[0],startTime:l.time||"12:00",image:p?"":h||r.image,location:l.location||"Hej Mistrzu, Rumia",maxSlots:Number(l.totalSlots)||20,freeSlots:Number(l.freeSlots)||20,price:Number(l.price)||0,link:l.link};return e.jsx(k,{children:n&&e.jsxs(N.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:j,className:`\r
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
          `,children:[e.jsxs(N.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:t=>t.stopPropagation(),onMouseDown:t=>t.stopPropagation(),className:`\r
              w-full\r
              max-w-2xl\r
              relative\r
              rounded-xl\r
              border\r
              border-primary/30\r
              bg-card\r
              px-6\r
              pb-4\r
              pt-4\r
              shadow-[0_0_15px_1px_hsl(43,50%,10%)]\r
              col-span-2\r
            `,children:[e.jsx("button",{type:"button",onClick:j,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:e.jsx(E,{size:18})}),e.jsx("div",{className:"",children:e.jsx("h2",{className:"font-heading text-center text-2xl mb-1 font-semibold",children:"Edytuj Wydarzenie"})}),e.jsx(D,{event:r,formData:l,setFormData:g,closeModal:j,onEventUpdated:u,onRemoveImage:b,removeImage:p})]}),e.jsx(I,{event:i,isPreview:!0,imageSrc:h})]})})}const C=6;function ye(){const[n,r]=d.useState(""),[c,u]=d.useState("default"),[l,g]=d.useState(1),[h,m]=d.useState(!1),[p,x]=d.useState(!1),[j,b]=d.useState(!1),[i,t]=d.useState(!1),[y,s]=d.useState(null),[o,w]=d.useState([]),[U,M]=d.useState(!0),v=[...o.filter(a=>R(a.title).includes(R(n)))];switch(c){case"title-asc":v.sort((a,f)=>a.title.localeCompare(f.title));break;case"title-desc":v.sort((a,f)=>f.title.localeCompare(a.title));break;case"date-asc":v.sort((a,f)=>new Date(a.date).getTime()-new Date(f.date).getTime());break;case"date-desc":v.sort((a,f)=>new Date(f.date).getTime()-new Date(a.date).getTime());break;case"slots-asc":v.sort((a,f)=>a.maxSlots-f.maxSlots);break;case"slots-desc":v.sort((a,f)=>f.maxSlots-a.maxSlots);break}const z=Math.ceil(v.length/C),W=v.slice((l-1)*C,l*C),A=[{value:"default",label:"Domyślnie"},{value:"title-asc",label:"Tytuł A-Z"},{value:"title-desc",label:"Tytuł Z-A"},{value:"date-asc",label:"Najbliższe"},{value:"date-desc",label:"Najdalsze"},{value:"slots-asc",label:"Miejsca-asc"},{value:"slots-desc",label:"Miejsca-desc"}];async function S(){try{M(!0);const a=await P.get("http://localhost:3000/events");w(a.data)}catch(a){console.error(a)}finally{M(!1)}}return d.useEffect(()=>{S()},[]),d.useEffect(()=>{g(1)},[n]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-6 min-h-[45rem] relative",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"font-heading text-3xl",children:"Wydarzenia"}),e.jsx("p",{className:"text-muted-foreground mt-2",children:"Zarządzaj wydarzeniami."})]}),e.jsx($,{label:"Szukaj wydarzeń",search:n,setSearch:r,sortBy:c,setSortBy:u,sortOptions:A,button:e.jsxs("button",{onClick:()=>m(!0),className:`\r
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
            `,children:[e.jsx(H,{size:18})," Dodaj wydarzenie"]})}),e.jsxs("div",{className:"h-[33rem] flex flex-col justify-between",children:[e.jsxs(G,{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[e.jsx("th",{className:"p-4 w-20",children:"ID"}),e.jsx("th",{className:"p-4 w-[25%]",children:"Tytuł"}),e.jsx("th",{className:"p-4 w-[25%]",children:"Kategoria"}),e.jsx("th",{className:"p-4",children:"Data"}),e.jsx("th",{className:"p-4",children:"Miejsca"}),e.jsx("th",{className:"p-4",children:"Cena"}),e.jsx("th",{className:"p-4",children:"Akcje"})]})}),e.jsx("tbody",{children:W.map(a=>e.jsxs("tr",{className:`\r
                  border-b\r
                  border-border/50\r
                  hover:bg-muted/20\r
                  text-center\r
                `,children:[e.jsxs("td",{className:"p-4",children:[" ",a.id," "]}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"relative group",children:[e.jsx("div",{className:"truncate",children:a.title}),e.jsx("div",{className:`\r
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
                      `,children:a.title})]})}),e.jsxs("td",{className:"p-4",children:[" ",a.category," "]}),e.jsxs("td",{className:"p-4",children:[" ",new Date(a.date).toLocaleDateString("pl-PL")," "]}),e.jsx("td",{className:"p-4",children:e.jsx("span",{className:a.maxSlots>.8?"text-red-400":a.maxSlots>.5?"text-yellow-400":"text-green-400",children:a.maxSlots})}),e.jsxs("td",{className:"p-4",children:[" ",a.price," zł "]}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{onClick:()=>{s(a),x(!0)},className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-muted\r
                        border border-transparent\r
                        hover:border-muted-foreground/30\r
                      `,children:e.jsx(q,{size:16})}),e.jsx("button",{onClick:()=>{s(a),b(!0)},className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-muted\r
                        border border-transparent\r
                        hover:border-muted-foreground/30\r
                      `,children:e.jsx(J,{size:16})}),e.jsx("button",{onClick:()=>{s(a),t(!0)},className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-destructive/10\r
                        hover:text-destructive\r
                        border border-transparent\r
                        hover:border-destructive/30\r
                      `,children:e.jsx(Z,{size:16})})]})})]},a.id))})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-sm text-muted-foreground",children:["Strona ",l," z ",z]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>g(a=>Math.max(a-1,1)),disabled:l===1,className:`\r
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
              `,children:"Poprzednia"}),e.jsx("button",{onClick:()=>g(a=>Math.min(a+1,z)),disabled:l===z,className:`\r
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
              `,children:"Następna"})]})]})]}),U&&e.jsx("div",{className:"absolute -top-12 left-0 right-0 bottom-0",children:e.jsx(V,{})})]}),h&&e.jsx(Y,{isAddOpen:h,onClose:()=>m(!1),onEventCreated:S}),y&&e.jsxs(e.Fragment,{children:[j&&e.jsx(ee,{isOpen:j,event:y,onClose:()=>{b(!1),s(null)},onEventUpdated:S}),p&&e.jsx(F,{isOpen:p,onClose:()=>{x(!1),s(null)},event:y,months:X}),i&&e.jsx(K,{isOpen:i,title:"Usuń wydarzenie",description:e.jsxs(e.Fragment,{children:["Czy na pewno chcesz usunąć wydarzenie:",e.jsx("br",{}),e.jsxs("span",{className:"font-medium text-foreground",children:[y==null?void 0:y.title," ?"]})]}),onClose:()=>{s(null),t(!1)},onConfirm:()=>{s(null),t(!1)}})]})]})}export{ye as default};
