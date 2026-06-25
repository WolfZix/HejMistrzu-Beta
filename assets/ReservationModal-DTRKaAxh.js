import{o as y,g as x,j as e,X as v,C as z}from"./index-DXiJPbas.js";import{C}from"./circle-check-B2PYIYn6.js";import{U as I}from"./users-Jpe_BAHI.js";import{T as _}from"./tag-DLTFI8wL.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],D=y("Calendar",S);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],E=y("CircleAlert",R);function T({event:n,freeSlots:l,onClose:f}){const[t,p]=x.useState(1),[o,u]=x.useState(!1),[d,h]=x.useState("idle"),[a,N]=x.useState({firstName:"",lastName:"",pokemonId:"",email:"",nickname:""}),[s,b]=x.useState({firstName:"",lastName:"",pokemonId:"",email:"",nickname:""}),c=(r,m)=>{h("idle"),N(i=>({...i,[r]:m})),b(i=>({...i,[r]:""}))};function j(){const r={firstName:"",lastName:"",pokemonId:"",email:"",nickname:""},m=/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+(?:-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$/,i=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,g=/^\d+$/;return m.test(a.firstName)||(r.firstName="Imię powinno zaczynać się z wielkiej litery!"),m.test(a.lastName)||(r.lastName="Nazwisko powinno zaczynać się z wielkiej litery!"),g.test(a.pokemonId)||(r.pokemonId="Pokemon ID może zawierać tylko cyfry"),i.test(a.email)||(r.email="Niepoprawny adres email"),b(r),r.firstName||r.lastName||r.pokemonId||r.email?r:null}async function k(r){if(r.preventDefault(),h("idle"),j())return;u(!0),await new Promise(w=>setTimeout(w,2e3)),u(!1);const i={eventId:n.id,firstName:a.firstName,lastName:a.lastName,pokemonId:a.pokemonId,email:a.email,slots:t};await(await fetch("http://localhost:3000/reservations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()}return e.jsxs("form",{onSubmit:k,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:a.firstName,onChange:r=>c("firstName",r.target.value),placeholder:"Imię",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `}),s.firstName&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.firstName})]}),e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:a.lastName,onChange:r=>c("lastName",r.target.value),placeholder:"Nazwisko",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `}),s.lastName&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.lastName})]}),e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:a.email,onChange:r=>c("email",r.target.value),placeholder:"Email",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `}),s.email&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.email})]}),n.category==="Pokémon TCG"?e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:a.pokemonId,onChange:r=>c("pokemonId",r.target.value),placeholder:"Pokémon ID",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `}),s.pokemonId&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.pokemonId})]}):e.jsx("div",{children:e.jsx("input",{required:!0,type:"text",value:a.nickname,onChange:r=>c("nickname",r.target.value),placeholder:"Nickname (Opcjonalnie)",className:`\r
                w-full md:w-fit\r
                bg-background\r
                border\r
                rounded\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                transition-all duration-300\r
                text-primary\r
            `})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-2 justify-between",children:[e.jsxs("div",{className:"rounded w-fit gap-3 text-lg flex items-center justify-center",children:[e.jsx("p",{className:"flex items-center",children:"Liczba miejsc: "}),e.jsx("button",{type:"button",disabled:o||t===1,onClick:()=>p(t-1),className:`\r
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
              `,children:"-"}),e.jsx("span",{className:"text-primary",children:t}),e.jsx("button",{type:"button",disabled:o||t===l,onClick:()=>p(t+1),className:`\r
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
              `,children:"+"})]}),d==="success"&&e.jsxs("div",{className:"flex items-center gap-2 text-green-500",children:[e.jsx(C,{size:12}),e.jsx("p",{children:"Rezerwacja została wysłana."})]}),d==="error"&&e.jsxs("div",{className:"flex items-center gap-2 text-red-500",children:[e.jsx(E,{size:12}),e.jsx("p",{children:"Nie udało się wysłać rezerwacji."})]})]}),e.jsxs("div",{className:`\r
            flex\r
            flex-col\r
            md:flex-row\r
            md:items-center\r
            md:justify-between\r
            gap-4\r
            mt-4\r
        `,children:[e.jsxs("p",{className:"text-xl font-semibold",children:["Razem:",e.jsxs("span",{className:"text-primary text-2xl ml-2",children:[n.price*t,"zł"]})]}),e.jsxs("div",{className:"flex w-full md:w-auto gap-2",children:[e.jsx("button",{type:"button",onClick:f,className:"px-4 py-2 w-full border rounded hover:bg-muted-foreground/20 transition-all duration-300",children:"Anuluj"}),e.jsx("button",{type:"submit",disabled:o,className:`\r
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
            `,children:o?"Wysyłanie...":"Zarezerwuj"})]})]})]})}function F({event:n,onClose:l,months:f}){const t=new Date(n.date),p=t.getDate(),o=f[t.getMonth()+1].name,u=t.getFullYear(),d=n.totalSlots-n.bookedSlots;return e.jsx("div",{onClick:l,className:"fixed inset-0 bg-black/70 flex items-center justify-center z-50",children:e.jsxs("div",{onClick:h=>h.stopPropagation(),className:`\r
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
    `,children:[e.jsx("button",{onClick:l,className:"absolute top-2 right-2 z-50 p-2 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-background transition-colors",children:e.jsx(v,{className:"w-4 h-4"})}),e.jsxs("div",{className:"z-20",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-heading text-lg md:text-2xl font-bold tracking-wide line-clamp-2",children:n.title}),e.jsx("p",{className:"text-muted-foreground text-sm md:text-base mb-4",children:n.description})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 mb-4 text-sm",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(D,{size:18,className:"text-primary"}),"Data: ",p," ",o," ",u]}),e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(I,{size:18,className:"text-primary"}),"Wolne miejsca: ",d]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(z,{size:18,className:"text-primary"}),"Godzina: ",n.startTime]}),e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(_,{size:18,className:"text-primary"}),"Cena: ",n.price,"zł"]})]})]}),e.jsx(T,{event:n,freeSlots:d,onClose:l})]}),e.jsx("img",{src:n.image,className:`\r
      absolute top-0 bottom-0 left-0 right-0\r
      w-full h-full\r
      object-cover\r
      opacity-20\r
      [mask-image:linear-gradient(to_bottom,black_0%,transparent_60%,transparent_100%)]\r
      `})]})})}export{D as C,F as R};
