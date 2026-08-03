import{o as v,g as c,j as e,C as z}from"./index-CVC6aYCP.js";import{C}from"./circle-check-Dkxi10yo.js";import{C as S}from"./calendar-CnZlFlAq.js";import{U as I}from"./users-CBSs0YCB.js";import{T}from"./tag-nSwNkVF0.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],P=v("CircleAlert",R);function W({event:t,freeSlots:h,onClose:f,preview:u=!1}){const[n,p]=c.useState(1),[s,x]=c.useState(!1),[l,g]=c.useState("idle"),[a,w]=c.useState({firstName:"",lastName:"",pokemonId:"",email:"",nickname:""}),[o,y]=c.useState({firstName:"",lastName:"",pokemonId:"",email:"",nickname:""}),d=(r,m)=>{g("idle"),w(i=>({...i,[r]:m})),y(i=>({...i,[r]:""}))};function j(){const r={firstName:"",lastName:"",pokemonId:"",email:"",nickname:""},m=/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+(?:-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$/,i=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,b=/^\d+$/;return m.test(a.firstName)||(r.firstName="Imię powinno zaczynać się z wielkiej litery!"),m.test(a.lastName)||(r.lastName="Nazwisko powinno zaczynać się z wielkiej litery!"),b.test(a.pokemonId)||(r.pokemonId="Pokemon ID może zawierać tylko cyfry"),i.test(a.email)||(r.email="Niepoprawny adres email"),y(r),r.firstName||r.lastName||r.pokemonId||r.email?r:null}async function k(r){if(r.preventDefault(),g("idle"),j())return;x(!0),await new Promise(N=>setTimeout(N,2e3)),x(!1);const i={eventId:t.id,firstName:a.firstName,lastName:a.lastName,pokemonId:a.pokemonId,email:a.email,slots:n};await(await fetch("http://localhost:3000/reservations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()}return e.jsxs("form",{onSubmit:k,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:a.firstName,onChange:r=>d("firstName",r.target.value),placeholder:"Imię",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `}),o.firstName&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:o.firstName})]}),e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:a.lastName,onChange:r=>d("lastName",r.target.value),placeholder:"Nazwisko",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `}),o.lastName&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:o.lastName})]}),e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:a.email,onChange:r=>d("email",r.target.value),placeholder:"Email",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `}),o.email&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:o.email})]}),t.category==="Pokémon TCG"?e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:a.pokemonId,onChange:r=>d("pokemonId",r.target.value),placeholder:"Pokémon ID",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `}),o.pokemonId&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:o.pokemonId})]}):e.jsx("div",{children:e.jsx("input",{required:!0,type:"text",value:a.nickname,onChange:r=>d("nickname",r.target.value),placeholder:"Nickname (Opcjonalnie)",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-2 justify-between",children:[e.jsxs("div",{className:"rounded w-fit gap-3 text-lg flex items-center justify-center",children:[e.jsx("p",{className:"flex items-center",children:"Liczba miejsc: "}),e.jsx("button",{type:"button",disabled:s||n===1,onClick:()=>p(n-1),className:`\r
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
              `,children:"-"}),e.jsx("span",{className:"text-primary",children:n}),e.jsx("button",{type:"button",disabled:s||n===h,onClick:()=>p(n+1),className:`\r
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
              `,children:"+"})]}),l==="success"&&e.jsxs("div",{className:"flex items-center gap-2 text-green-500",children:[e.jsx(C,{size:12}),e.jsx("p",{children:"Rezerwacja została wysłana."})]}),l==="error"&&e.jsxs("div",{className:"flex items-center gap-2 text-red-500",children:[e.jsx(P,{size:12}),e.jsx("p",{children:"Nie udało się wysłać rezerwacji."})]})]}),e.jsxs("div",{className:`\r
            flex\r
            flex-col\r
            md:flex-row\r
            md:items-center\r
            md:justify-between\r
            gap-4\r
            mt-4\r
        `,children:[e.jsxs("p",{className:"text-xl font-semibold",children:["Razem:",e.jsxs("span",{className:"text-primary text-2xl ml-2",children:[t.price*n,"zł"]})]}),e.jsxs("div",{className:"flex w-full md:w-auto gap-2",children:[e.jsx("button",{type:"button",disabled:u,onClick:f,className:"px-4 py-2 w-full border rounded hover:bg-muted-foreground/20 transition-all duration-300 cursor-pointer",children:"Anuluj"}),e.jsx("button",{type:"submit",disabled:s||u,className:`\r
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
            `,children:s?"Wysyłanie...":"Zarezerwuj"})]})]})]})}function E({event:t,months:h,onClose:f,preview:u=!1}){const n=new Date(t.date),p=n.getDate(),s=h[n.getMonth()+1].name,x=n.getFullYear(),l=t.maxSlots,g=t.image?`http://localhost:3000/uploads/${t.image}`:"http://localhost:3000/uploads/EventPlaceholder.webp";return e.jsxs("div",{className:`\r
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
    `,children:[e.jsxs("div",{className:"z-20",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-heading text-lg md:text-2xl font-bold tracking-wide line-clamp-2",children:t.title}),e.jsx("p",{className:"text-muted-foreground text-sm md:text-base mb-4 max-h-[150px] overflow-y-auto",children:t.description})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 mb-4 text-sm",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(S,{size:18,className:"text-primary"}),"Data: ",p," ",s," ",x]}),e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(I,{size:18,className:"text-primary"}),"Wolne miejsca: ",l]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(z,{size:18,className:"text-primary"}),"Godzina: ",t.startTime.slice(0,5)]}),e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(T,{size:18,className:"text-primary"}),"Cena: ",t.price,"zł"]})]})]}),e.jsx(W,{event:t,freeSlots:l,onClose:f,preview:u})]}),e.jsx("img",{src:g,className:`\r
      absolute top-0 bottom-0 left-0 right-0\r
      w-full h-full\r
      object-cover\r
      opacity-20\r
      [mask-image:linear-gradient(to_bottom,black_0%,transparent_60%,transparent_100%)]\r
      `})]})}const H=t=>({"Pokémon TCG":`${t?"bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground":"bg-yellow-950/80 text-yellow-200 border-yellow-500/50 shadow-yellow-500/30 hover:bg-yellow-800/30 hover:text-yellow-300"}`,Riftbound:`${t?"bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground":"bg-purple-950/80 text-purple-200 border-purple-500/50 shadow-purple-500/30 hover:bg-purple-800/30 hover:text-purple-300"}`,"Warhammer 40K":`${t?"bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground":"bg-red-950/80 text-red-200 border-red-500/50 shadow-red-500/30 hover:bg-red-800/30 hover:text-red-300"}`,Inne:`${t?"bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground":"bg-blue-950/80 text-blue-200 border-blue-500/50 shadow-blue-500/30 hover:bg-blue-800/30 hover:text-blue-300"}`}),K=[{id:1,title:"Pokémon TCG League Night",date:"2026-07-31",startTime:"17:00",description:"Cotygodniowy turniej Pokémon TCG. Przyjdź z własnym deckiem i walcz o nagrody!",category:"Pokémon TCG",image:"",location:"Hej Mistrzu, Rumia",maxSlots:20,price:35,link:""},{id:2,title:"Warhammer 40K: Open Battle",date:"2026-08-01",startTime:"12:00",description:"Dzień otwarty Warhammer 40K — rozgrywki, malowanie figurek i porady dla nowych graczy.",category:"Warhammer 40K",image:"",location:"Hej Mistrzu, Rumia",maxSlots:20,price:35,link:"https://www.facebook.com/p/hej-mistrzu-centrum-gier-rpg-61567368993724/"},{id:3,title:"Riftbound: Nexus Night - 1v1",date:"2026-08-02",startTime:"17:00",description:"Nagrody: Na wejściu każdy otrzyma Booster :) Dla każdego gracza przewidziany jest Nexus Night Pack",category:"Riftbound",image:"",location:"Hej Mistrzu, Rumia",maxSlots:20,price:25,link:"https://locator.riftbound.uvsgames.com/events/703330"},{id:4,title:"Pokémon TCG: Puchar Hej Mistrzu",date:"2026-08-03",startTime:"10:00",description:"Wielki turniej Pokémon TCG z nagrodami i atmosferą rywalizacji na najwyższym poziomie.",category:"Pokémon TCG",image:"",location:"Hej Mistrzu, Rumia",maxSlots:20,price:35,link:""},{id:5,title:"Noc Planszówek",date:"2026-08-04",startTime:"18:00",description:"Maratońska noc planszówek — graj do rana! Specjalne promocje na napoje i przekąski.",category:"Inne",image:"",location:"Hej Mistrzu, Rumia",maxSlots:20,price:35,link:""},{id:6,title:"Warhammer 40K: Painting Workshop",date:"2026-08-04",startTime:"14:00",description:"Warsztaty malowania figurek dla początkujących i zaawansowanych. Materiały w cenie!",category:"Warhammer 40K",image:"",location:"Hej Mistrzu, Rumia",maxSlots:20,price:35,link:"https://www.facebook.com/p/hej-mistrzu-centrum-gier-rpg-61567368993724/"},{id:7,title:"Warhammer 40K: Painting Workshop",date:"2026-08-05",startTime:"14:00",description:"Warsztaty malowania figurek dla początkujących i zaawansowanych. Materiały w cenie!",category:"Warhammer 40K",image:"",location:"Hej Mistrzu, Rumia",maxSlots:20,price:35,link:"https://www.facebook.com/p/hej-mistrzu-centrum-gier-rpg-61567368993724/"}];export{E,K as e,H as g};
