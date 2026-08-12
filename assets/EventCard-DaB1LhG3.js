import{l as C,g as h,j as e,D as j,k as I,J as $,A as D}from"./index-CF_Lhbm_.js";import{C as S}from"./circle-check-CFhqtrh-.js";import{C as N}from"./calendar-BwAyoOVd.js";import{U as T}from"./users-Bd90xEHv.js";import{T as _}from"./tag-DISVNBHx.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],P=C("CircleAlert",E);function R({event:r,freeSlots:c,onClose:g,preview:d=!1}){const[s,a]=h.useState(1),[o,m]=h.useState(!1),[u,f]=h.useState("idle"),[n,w]=h.useState({firstName:"",lastName:"",pokemonId:"",email:"",nickname:""}),[l,b]=h.useState({firstName:"",lastName:"",pokemonId:"",email:"",nickname:""}),x=(t,p)=>{f("idle"),w(i=>({...i,[t]:p})),b(i=>({...i,[t]:""}))};function v(){const t={firstName:"",lastName:"",pokemonId:"",email:"",nickname:""},p=/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+(?:-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$/,i=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,y=/^\d+$/;return p.test(n.firstName)||(t.firstName="Imię powinno zaczynać się z wielkiej litery!"),p.test(n.lastName)||(t.lastName="Nazwisko powinno zaczynać się z wielkiej litery!"),y.test(n.pokemonId)||(t.pokemonId="Pokemon ID może zawierać tylko cyfry"),i.test(n.email)||(t.email="Niepoprawny adres email"),b(t),t.firstName||t.lastName||t.pokemonId||t.email?t:null}async function k(t){if(t.preventDefault(),f("idle"),v())return;m(!0),await new Promise(z=>setTimeout(z,2e3)),m(!1);const i={eventId:r.id,firstName:n.firstName,lastName:n.lastName,pokemonId:n.pokemonId,email:n.email,slots:s};await(await fetch("http://localhost:3000/reservations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()}return e.jsxs("form",{onSubmit:k,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:n.firstName,onChange:t=>x("firstName",t.target.value),placeholder:"Imię",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `}),l.firstName&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:l.firstName})]}),e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:n.lastName,onChange:t=>x("lastName",t.target.value),placeholder:"Nazwisko",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `}),l.lastName&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:l.lastName})]}),e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:n.email,onChange:t=>x("email",t.target.value),placeholder:"Email",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `}),l.email&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:l.email})]}),r.category==="Pokémon TCG"?e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:n.pokemonId,onChange:t=>x("pokemonId",t.target.value),placeholder:"Pokémon ID",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `}),l.pokemonId&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:l.pokemonId})]}):e.jsx("div",{children:e.jsx("input",{required:!0,type:"text",value:n.nickname,onChange:t=>x("nickname",t.target.value),placeholder:"Nickname (Opcjonalnie)",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-2 justify-between",children:[e.jsxs("div",{className:"rounded w-fit gap-3 text-lg flex items-center justify-center",children:[e.jsx("p",{className:"flex items-center",children:"Liczba miejsc: "}),e.jsx("button",{type:"button",disabled:o||s===1,onClick:()=>a(s-1),className:`\r
                w-8 h-8\r
                bg-background\r
                rounded\r
                flex items-center justify-center\r
                hover:border hover:border-primary\r
                hover:text-primary\r
                transition-all duration-300\r
                select-none\r
                disabled:opacity-50\r
                disabled:cursor-not-allowed\r
              `,children:"-"}),e.jsx("span",{className:"text-primary",children:s}),e.jsx("button",{type:"button",disabled:o||s===c,onClick:()=>a(s+1),className:`\r
                w-8 h-8\r
                bg-background\r
                rounded\r
                flex items-center justify-center\r
                hover:border hover:border-primary\r
                hover:text-primary\r
                transition-all duration-300\r
                select-none\r
                disabled:opacity-50\r
                disabled:cursor-not-allowed\r
              `,children:"+"})]}),u==="success"&&e.jsxs("div",{className:"flex items-center gap-2 text-green-500",children:[e.jsx(S,{size:12}),e.jsx("p",{children:"Rezerwacja została wysłana."})]}),u==="error"&&e.jsxs("div",{className:"flex items-center gap-2 text-red-500",children:[e.jsx(P,{size:12}),e.jsx("p",{children:"Nie udało się wysłać rezerwacji."})]})]}),e.jsxs("div",{className:`\r
            flex\r
            flex-col\r
            md:flex-row\r
            md:items-center\r
            md:justify-between\r
            gap-4\r
            mt-4\r
        `,children:[e.jsxs("p",{className:"text-xl font-semibold",children:["Razem:",e.jsxs("span",{className:"text-primary text-2xl ml-2",children:[r.price*s,"zł"]})]}),e.jsxs("div",{className:"flex w-full md:w-auto gap-2",children:[e.jsx("button",{type:"button",disabled:d,onClick:g,className:"px-4 py-2 w-full border rounded hover:bg-muted-foreground/20 transition-all duration-300 cursor-pointer",children:"Anuluj"}),e.jsx("button",{type:"submit",disabled:o||d,className:`\r
              w-full\r
              tracking-tighter\r
              font-heading font-semibold\r
              px-5\r
              rounded\r
              transition-all\r
              duration-300\r
              z-10\r
              bg-primary/80\r
              text-black/80\r
              cursor-pointer\r
              hover:bg-primary\r
              hover:text-black\r
              hover:scale-[102%]\r
              hover:shadow-[0_0_10px_1px_hsl(43,50%,26%)]\r
            `,children:o?"Wysyłanie...":"Zarezerwuj"})]})]})]})}function M({event:r,months:c,onClose:g,preview:d=!1}){const s=new Date(r.date),a=s.getDate(),o=c[s.getMonth()+1].name,m=s.getFullYear(),u=r.maxSlots,f=r.image?`http://localhost:3000/uploads/${r.image}`:"http://localhost:3000/uploads/EventPlaceholder.webp";return e.jsxs("div",{className:`\r
      bg-card\r
      w-full\r
      max-w-2xl\r
      max-h-[90vh]\r
      overflow-y-auto\r
      rounded-xl\r
      relative\r
      flex\r
      flex-col\r
      gap-2\r
      p-4\r
      md:p-6\r
      border-2\r
      border-primary/30\r
      shadow-[0_0_10px_1px_hsl(43,50%,15%)]\r
    `,children:[e.jsxs("div",{className:"z-20",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-heading text-lg md:text-2xl font-bold tracking-wide line-clamp-2",children:r.title}),e.jsx("p",{className:"text-muted-foreground text-sm md:text-base mb-4 max-h-[150px] overflow-y-auto",children:r.description})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 mb-4 text-sm",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(N,{size:18,className:"text-primary"}),"Data: ",a," ",o," ",m]}),e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(T,{size:18,className:"text-primary"}),"Wolne miejsca: ",u]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(j,{size:18,className:"text-primary"}),"Godzina: ",r.startTime.slice(0,5)]}),e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(_,{size:18,className:"text-primary"}),"Cena: ",r.price,"zł"]})]})]}),e.jsx(R,{event:r,freeSlots:u,onClose:g,preview:d})]}),e.jsx("img",{src:f,className:`\r
      absolute top-0 bottom-0 left-0 right-0\r
      w-full h-full\r
      object-cover\r
      opacity-20\r
      [mask-image:linear-gradient(to_bottom,black_0%,transparent_60%,transparent_100%)]\r
      `})]})}const A=r=>({"Pokémon TCG":`${r?"bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground":"bg-yellow-950/80 text-yellow-200 border-yellow-500/50 shadow-yellow-500/30 hover:bg-yellow-800/30 hover:text-yellow-300"}`,Riftbound:`${r?"bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground":"bg-purple-950/80 text-purple-200 border-purple-500/50 shadow-purple-500/30 hover:bg-purple-800/30 hover:text-purple-300"}`,"Warhammer 40K":`${r?"bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground":"bg-red-950/80 text-red-200 border-red-500/50 shadow-red-500/30 hover:bg-red-800/30 hover:text-red-300"}`,Inne:`${r?"bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground":"bg-blue-950/80 text-blue-200 border-blue-500/50 shadow-blue-500/30 hover:bg-blue-800/30 hover:text-blue-300"}`}),Z=()=>["Pokémon TCG","Riftbound","Warhammer 40K","Inne"];function O({event:r,onClick:c,isPreview:g=!1,imageSrc:d}){const a=new Date(`${r.date}T${r.startTime}`)<new Date,o=A(a);return e.jsxs(I.div,{layout:!0,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.3},className:`group glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 flex flex-col min-h-[460px] w-full max-w-[400px] ${a?"text-muted-foreground":"glass-hover"}`,children:[e.jsxs("div",{className:"aspect-[16/9] overflow-hidden relative shrink-0",children:[e.jsx("img",{src:d??`http://localhost:3000/uploads/${r.image||"EventPlaceholder.webp"}`,onError:m=>{m.currentTarget.src="http://localhost:3000/uploads/EventPlaceholder.webp"},alt:r.title,loading:"lazy",className:`w-full h-full object-cover transition-transform duration-700
          ${a?"saturate-0 group-hover:scale-100 ":"saturate-100 group-hover:scale-105 "}`}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"}),e.jsx("div",{className:`absolute top-4 left-4 px-2 py-0.5 rounded-full select-none ${o[r.category]} border text-xs font-medium`,children:r.category})]}),e.jsxs("div",{className:"p-6 flex flex-col flex-1",children:[e.jsx("h3",{className:`font-heading text-lg font-semibold tracking-wide mb-3 transition-colors ${a?"":"group-hover:text-primary"}`,children:r.title}),e.jsxs("div",{className:"space-y-1.5 mb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-muted-foreground text-xs",children:[e.jsx(N,{className:`w-3.5 h-3.5 shrink-0 ${a?"text-muted-foreground":"text-primary/70"}`}),e.jsx("span",{children:new Date(r.date).toLocaleDateString("pl-PL",{day:"numeric",month:"long",year:"numeric"})})]}),e.jsxs("div",{className:"flex items-center gap-2 text-muted-foreground text-xs",children:[e.jsx(j,{className:`w-3.5 h-3.5 shrink-0 ${a?"text-muted-foreground":"text-primary/70"}`}),e.jsx("span",{children:r.startTime.slice(0,5)})]}),e.jsxs("div",{className:"flex items-center gap-2 text-muted-foreground text-xs",children:[e.jsx($,{className:`w-3.5 h-3.5 shrink-0 ${a?"text-muted-foreground":"text-primary/70"}`}),e.jsx("span",{children:r.location})]})]}),e.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed mb-5 flex-1 line-clamp-2 whitespace-pre-line",children:r.description}),e.jsxs("button",{disabled:a,onClick:c,className:`w-full border py-2.5 flex justify-center rounded-lg font-heading tracking-wider text-xs transition-all duration-300
          ${a?"bg-muted-foreground/30 text-muted-foreground hover:bg-muted-foreground/30 border border-foreground/20 cursor-not-allowed":"bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 cursor-pointer"}`,children:[a?"Wydarzenie dobiegło końca":"Zapisz się",!a&&e.jsx(D,{className:"w-3.5 h-3.5 ml-1.5"})]})]})]})}export{O as E,M as a,Z as g};
