import{q as j,g as p,j as e,X as C,C as R}from"./index-3adae1ep.js";import{C as T}from"./circle-check-92Q57Q6F.js";import{U as P}from"./users-CPKmRXxt.js";import{T as I}from"./tag-BlOQuO7O.js";import{B as M,W as k}from"./Warhammer-DIIjKBg2.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],_=j("Calendar",W);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],H=j("CircleAlert",D),G="/HejMistrzu-Beta/assets/WarhammerOpenBattle-D_LQVEL2.webp",b="/HejMistrzu-Beta/assets/Pokemon-G4hRmZ24.webp";function B({event:a,freeSlots:l,onClose:y}){const[n,u]=p.useState(1),[o,x]=p.useState(!1),[d,g]=p.useState("idle"),[t,N]=p.useState({firstName:"",lastName:"",pokemonId:"",email:"",nickname:""}),[s,f]=p.useState({firstName:"",lastName:"",pokemonId:"",email:"",nickname:""}),c=(r,m)=>{g("idle"),N(i=>({...i,[r]:m})),f(i=>({...i,[r]:""}))};function w(){const r={firstName:"",lastName:"",pokemonId:"",email:"",nickname:""},m=/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+(?:-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$/,i=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,h=/^\d+$/;return m.test(t.firstName)||(r.firstName="Imię powinno zaczynać się z wielkiej litery!"),m.test(t.lastName)||(r.lastName="Nazwisko powinno zaczynać się z wielkiej litery!"),h.test(t.pokemonId)||(r.pokemonId="Pokemon ID może zawierać tylko cyfry"),i.test(t.email)||(r.email="Niepoprawny adres email"),f(r),r.firstName||r.lastName||r.pokemonId||r.email?r:null}async function z(r){if(r.preventDefault(),g("idle"),w())return;x(!0),await new Promise(S=>setTimeout(S,2e3)),x(!1);const i={eventId:a.id,firstName:t.firstName,lastName:t.lastName,pokemonId:t.pokemonId,email:t.email,slots:n},h=await fetch("http://localhost:3000/reservations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),v=await h.json();console.log("STATUS REACT:",h.status),console.log("Data:",v)}return e.jsxs("form",{onSubmit:z,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:t.firstName,onChange:r=>c("firstName",r.target.value),placeholder:"Imię",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `}),s.firstName&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.firstName})]}),e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:t.lastName,onChange:r=>c("lastName",r.target.value),placeholder:"Nazwisko",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `}),s.lastName&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.lastName})]}),e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:t.email,onChange:r=>c("email",r.target.value),placeholder:"Email",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `}),s.email&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.email})]}),a.category==="Pokémon TCG"?e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:t.pokemonId,onChange:r=>c("pokemonId",r.target.value),placeholder:"Pokémon ID",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `}),s.pokemonId&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.pokemonId})]}):e.jsx("div",{children:e.jsx("input",{required:!0,type:"text",value:t.nickname,onChange:r=>c("nickname",r.target.value),placeholder:"Nickname (Opcjonalnie)",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-2 justify-between",children:[e.jsxs("div",{className:"rounded w-fit gap-3 text-lg flex items-center justify-center",children:[e.jsx("p",{className:"flex items-center",children:"Liczba miejsc: "}),e.jsx("button",{type:"button",disabled:o||n===1,onClick:()=>u(n-1),className:`\r
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
              `,children:"-"}),e.jsx("span",{className:"text-primary",children:n}),e.jsx("button",{type:"button",disabled:o||n===l,onClick:()=>u(n+1),className:`\r
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
              `,children:"+"})]}),d==="success"&&e.jsxs("div",{className:"flex items-center gap-2 text-green-500",children:[e.jsx(T,{size:12}),e.jsx("p",{children:"Rezerwacja została wysłana."})]}),d==="error"&&e.jsxs("div",{className:"flex items-center gap-2 text-red-500",children:[e.jsx(H,{size:12}),e.jsx("p",{children:"Nie udało się wysłać rezerwacji."})]})]}),e.jsxs("div",{className:`\r
            flex\r
            flex-col\r
            md:flex-row\r
            md:items-center\r
            md:justify-between\r
            gap-4\r
            mt-4\r
        `,children:[e.jsxs("p",{className:"text-xl font-semibold",children:["Razem:",e.jsxs("span",{className:"text-primary text-2xl ml-2",children:[a.price*n,"zł"]})]}),e.jsxs("div",{className:"flex w-full md:w-auto gap-2",children:[e.jsx("button",{type:"button",onClick:y,className:"px-4 py-2 w-full border rounded hover:bg-muted-foreground/20 transition-all duration-300",children:"Anuluj"}),e.jsx("button",{type:"submit",disabled:o,className:`\r
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
            `,children:o?"Wysyłanie...":"Zarezerwuj"})]})]})]})}function F({event:a,onClose:l,months:y}){const n=new Date(a.date),u=n.getDate(),o=y[n.getMonth()+1].name,x=n.getFullYear(),d=a.totalSlots-a.bookedSlots;return e.jsx("div",{onClick:l,className:"fixed inset-0 bg-black/70 flex items-center justify-center z-50",children:e.jsxs("div",{onClick:g=>g.stopPropagation(),className:`\r
      bg-card\r
      w-[95vw] max-w-2xl\r
      max-h-[90vh]\r
      overflow-y-auto\r
      rounded-xl\r
      relative\r
      flex flex-col gap-2\r
      p-4 md:p-6\r
      border-2 border-primary/30\r
      shadow-[0_0_10px_1px_hsl(43,50%,15%)]\r
    `,children:[e.jsx("button",{onClick:l,className:"absolute top-2 right-2 z-50 p-2 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-background transition-colors",children:e.jsx(C,{className:"w-4 h-4"})}),e.jsxs("div",{className:"z-20",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-heading text-lg md:text-2xl font-bold tracking-wide line-clamp-2",children:a.title}),e.jsx("p",{className:"text-muted-foreground text-sm md:text-base mb-4",children:a.description})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 mb-4 text-sm",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(_,{size:18,className:"text-primary"}),"Data: ",u," ",o," ",x]}),e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(P,{size:18,className:"text-primary"}),"Wolne miejsca: ",d]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(R,{size:18,className:"text-primary"}),"Godzina: ",a.startTime]}),e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(I,{size:18,className:"text-primary"}),"Cena: ",a.price,"zł"]})]})]}),e.jsx(B,{event:a,freeSlots:d,onClose:l})]}),e.jsx("img",{src:a.image,className:`\r
      absolute top-0 bottom-0 left-0 right-0\r
      w-full h-full\r
      object-cover\r
      opacity-20\r
      [mask-image:linear-gradient(to_bottom,black_0%,transparent_60%,transparent_100%)]\r
      `})]})})}const E="/HejMistrzu-Beta/assets/RiftboundDraft-Fw_ul6Zg.webp",Z=[{id:1,title:"Pokémon TCG League Night",date:"2026-07-15",startTime:"17:00",description:"Cotygodniowy turniej Pokémon TCG. Przyjdź z własnym deckiem i walcz o nagrody!",category:"Pokémon TCG",image:b,location:"Hej Mistrzu, Rumia",totalSlots:20,bookedSlots:12,price:35,link:""},{id:2,title:"Warhammer 40K: Open Battle",date:"2026-06-20",startTime:"12:00",description:"Dzień otwarty Warhammer 40K — rozgrywki, malowanie figurek i porady dla nowych graczy.",category:"Warhammer 40K",image:G,location:"Hej Mistrzu, Rumia",totalSlots:20,bookedSlots:12,price:35,link:""},{id:3,title:"Riftbound: Nexus Night - 1v1",date:"2026-07-03",startTime:"17:00",description:"Nagrody: Na wejściu każdy otrzyma Booster :) Dla każdego gracza przewidziany jest Nexus Night Pack",category:"Riftbound",image:E,location:"Hej Mistrzu, Rumia",totalSlots:20,bookedSlots:0,price:25,link:"https://locator.riftbound.uvsgames.com/events/703330"},{id:4,title:"Pokémon TCG: Puchar Hej Mistrzu",date:"2026-06-24",startTime:"10:00",description:"Wielki turniej Pokémon TCG z nagrodami i atmosferą rywalizacji na najwyższym poziomie.",category:"Pokémon TCG",image:b,location:"Hej Mistrzu, Rumia",totalSlots:20,bookedSlots:12,price:35,link:""},{id:5,title:"Noc Planszówek",date:"2026-07-15",startTime:"18:00",description:"Maratońska noc planszówek — graj do rana! Specjalne promocje na napoje i przekąski.",category:"Planszówki",image:M,location:"Hej Mistrzu, Rumia",totalSlots:20,bookedSlots:12,price:35,link:""},{id:6,title:"Warhammer 40K: Painting Workshop",date:"2026-07-22",startTime:"14:00",description:"Warsztaty malowania figurek dla początkujących i zaawansowanych. Materiały w cenie!",category:"Warhammer 40K",image:k,location:"Hej Mistrzu, Rumia",totalSlots:20,bookedSlots:12,price:35,link:""},{id:7,title:"Warhammer 40K: Painting Workshop",date:"2026-06-15",startTime:"14:00",description:"Warsztaty malowania figurek dla początkujących i zaawansowanych. Materiały w cenie!",category:"Warhammer 40K",image:k,location:"Hej Mistrzu, Rumia",totalSlots:20,bookedSlots:12,price:35,link:""}];export{_ as C,b as P,F as R,G as W,Z as e};
