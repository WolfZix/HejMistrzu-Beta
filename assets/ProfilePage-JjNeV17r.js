import{o as h,j as e,L as x,U as b,g as f}from"./index-CsxOrmNg.js";import{S as u}from"./shield-hE1yFQfN.js";import{P as g}from"./pencil-DBiMEIzP.js";import{T as c}from"./ticket-x1sA2OKH.js";import{C as y}from"./calendar-BeATYOIa.js";import{C as v}from"./calendar-days-DEgwa4B-.js";import{S as N}from"./star-DgPN9oAF.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],j=h("Download",w);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],m=h("ShoppingBag",k),z=[{icon:c,title:"Złóż rezerwacje",to:"/rezerwacje"},{icon:m,title:"Przejdź do sklepu",to:"/sklep"},{icon:y,title:"Zobacz wydarzenia",to:"/wydarzenia"}],p=`
      text-left
      border
      border-border
      hover:border-primary/30
      px-4
      py-2
      rounded-lg
      items-center
      bg-transparent
      shadow-sm
      hover:bg-primary/5 
      flex gap-4
      transition-all
      duration-300`;function P({role:s}){return e.jsxs("div",{className:"flex flex-col gap-2 space-y-4",children:[s==="admin"&&e.jsxs(x,{to:"/admin",className:`\r
            text-left\r
            border\r
            border-red-500/20\r
            hover:border-red-500\r
            px-4\r
            py-2\r
            rounded-lg\r
            items-center\r
            bg-red-500/10\r
            text-foreground\r
            hover:text-white\r
            shadow-sm\r
            hover:bg-red-500/20 \r
            flex gap-4\r
            transition-all\r
            duration-300\r
          `,children:[e.jsx(u,{size:16,className:"text-red-500"}),e.jsx("span",{children:"Panel administratora"})]}),e.jsxs("button",{className:p,onClick:()=>{var r;(r=document.getElementById("edit-profile"))==null||r.scrollIntoView({behavior:"smooth",block:"center"})},children:[e.jsx(g,{size:16,className:"text-primary"}),e.jsx("span",{children:"Edytuj profil"})]}),e.jsx("hr",{}),z.map(r=>{const t=r.icon;return e.jsxs(x,{to:r.to,className:p,children:[e.jsx(t,{size:16,className:"text-primary"}),e.jsx("span",{children:r.title})]},r.title)}),e.jsx("hr",{})]})}function E({username:s,role:r}){var t;return e.jsxs("div",{className:"col-span-1",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:`\r
            w-28\r
            h-28\r
            rounded-full\r
            bg-primary/10\r
            border-2\r
            border-primary/20\r
            flex\r
            items-center\r
            justify-center\r
            text-5xl\r
            font-heading\r
            text-primary\r
            select-none\r
            transition-all duration-200\r
            hover:bg-primary/20\r
            hover:shadow-[0_0_8px_2px_hsl(43,40%,20%)]\r
          `,children:((t=s==null?void 0:s[0])==null?void 0:t.toUpperCase())??"G"}),e.jsx("h1",{className:"font-heading text-2xl mt-5",children:s}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["@",s==null?void 0:s.toLowerCase()]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["dołączył: ",new Date().toLocaleDateString("pl-PL",{year:"numeric",month:"long",day:"numeric"})]}),e.jsx("span",{className:`\r
              mt-4\r
              px-3\r
              py-1\r
              rounded-full\r
              bg-primary/15\r
              border\r
              border-primary/20\r
              text-primary\r
              text-sm\r
              flex\r
              items-center\r
              gap-2\r
            `,children:r==="admin"?e.jsxs(e.Fragment,{children:[e.jsx(u,{size:14}),"Administrator"]}):e.jsxs(e.Fragment,{children:[e.jsx(b,{size:14}),"Użytkownik"]})})]}),e.jsx("div",{className:"border-t border-border my-6"})]})}function C({events:s,reservations:r,orders:t,battlepassLevel:n}){const i=[{label:"Odwiedzone wydarzenia",value:s,icon:v},{label:"Zamówienia",value:t,icon:m},{label:"Złożone rezerwacje",value:r,icon:c},{label:"Poziom Battlepass",value:n,icon:N}];return e.jsx("div",{className:"space-y-5 text-sm",children:i.map(a=>{const o=a.icon;return e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{className:"flex gap-2",children:[e.jsx(o,{size:18,className:"text-primary/80"}),e.jsxs("p",{className:"text-muted-foreground",children:[" ",a.label]})]}),e.jsxs("p",{className:"font-medium",children:[" ",a.value," "]})]},a.label)})})}function S({state:s,size:r=20}){const n={locked:{top:"hsl(var(--muted-foreground))",bottom:"hsl(var(--card))",glow:"none"},claimed:{top:"#d78cff",bottom:"#7d2cff",glow:"drop-shadow(0px 0px 10px rgba(185, 92, 255, .9))"}}[s];return e.jsxs("svg",{width:r,height:r*1.4,viewBox:"0 0 40 56",style:{overflow:"visible",filter:n.glow},className:s==="claimed"?"animate-battlepass-glow":"",children:[e.jsx("polygon",{points:"20,2 34,20 20,54 6,20",fill:n.bottom,stroke:n.top,strokeWidth:"2"}),e.jsx("polyline",{points:"20,2 20,54",stroke:n.top,strokeWidth:"1",opacity:".45"}),e.jsx("polyline",{points:"6,20 20,28 34,20",stroke:n.top,strokeWidth:"1",opacity:".45"}),e.jsx("polygon",{points:"20,4 30,20 20,28 10,20",fill:n.top,opacity:".7"})]})}const l=[{events:1,title:"Start",claimed:!0},{events:10,title:"10% rabatu",claimed:!0},{events:20,title:"Koszulka Hej Mistrzu",claimed:!1},{events:30,title:"Koszulka Hej Mistrzu",claimed:!1},{events:40,title:"Ekskluzywna figurka",claimed:!1}];function B(){const t=l[l.length-1].events-1;l.find(a=>a.events>15);const[n,i]=f.useState(l[0]);return e.jsxs("div",{className:"bg-transparent border glass rounded-2xl p-6 col-span-3",children:[e.jsx("h2",{className:"font-heading text-xl mb-2",children:"Battlepass"}),e.jsxs("p",{className:"text-sm text-muted-foreground mb-5",children:[15," / ",l[l.length-1].events," odwiedzonych wydarzeń"]}),e.jsxs("div",{className:"relative mt-10 mb-10",children:[e.jsx("div",{className:"h-2 rounded-full bg-muted overflow-hidden",children:e.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 transition-all duration-700",style:{width:`${14/t*100}%`}})}),l.map(a=>{const o=(a.events-1)/t*100;let d="locked";return a.claimed?d="claimed":15<a.events&&(d="locked"),e.jsxs("div",{className:"absolute -translate-x-1/2",style:{left:`${o}%`,top:"-12px"},children:[e.jsx("button",{onClick:()=>i(a),className:"transition-transform hover:scale-110",children:e.jsx(S,{state:d})}),e.jsx("p",{className:"mt-1 text-center text-xs text-muted-foreground",children:a.events})]},a.events)})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx("h3",{className:"font-heading text-lg",children:n.title}),e.jsxs("p",{className:"text-sm text-muted-foreground mt-2",children:["Odblokowanie po ",n.events," wydarzeniach"]})]})]})}function L({orders:s,buttonClass:r}){return e.jsxs("div",{className:"flex flex-col h-[350px] rounded-lg glass py-4 mr-5",children:[e.jsxs("div",{className:"border-b",children:[e.jsxs("div",{className:"flex items-center gap-4 border-b px-4 pb-4",children:[e.jsx(m,{size:24,className:"text-primary"}),e.jsx("h1",{className:"font-heading text-2xl",children:"Zamówienia"})]}),e.jsx("div",{className:"grid grid-rows-5 gap-2",children:s.map(t=>e.jsxs("div",{className:"grid grid-cols-[20%_45%_35%] px-4 py-2",children:[e.jsx("span",{className:"text-left",children:t.date}),e.jsx("span",{className:"text-center",children:t.title}),e.jsx("span",{className:"text-right",children:t.status})]},t.id))})]}),e.jsxs("button",{className:r,children:[e.jsx(j,{size:16,className:"text-primary"}),"Pobierz pełną historię"]})]})}function _({reservations:s,buttonClass:r}){return e.jsxs("div",{className:"flex flex-col h-[350px] rounded-lg glass py-4",children:[e.jsxs("div",{className:"border-b",children:[e.jsxs("div",{className:"flex items-center gap-4 border-b px-4 pb-4",children:[e.jsx(c,{size:24,className:"text-primary"}),e.jsx("h1",{className:"font-heading text-2xl",children:"Rezerwacje"})]}),e.jsx("div",{className:"grid grid-rows-5 gap-2",children:s.map(t=>e.jsxs("div",{className:"grid grid-cols-3 px-4 py-2",children:[e.jsx("span",{className:"text-left",children:t.date}),e.jsx("span",{className:"text-center",children:t.title}),e.jsx("span",{className:"text-right",children:t.time})]},t.id))})]}),e.jsxs("button",{className:r,children:[e.jsx(j,{size:16,className:"text-primary"}),"Pobierz pełną historię"]})]})}function R(){const s=`
    mt-auto
    mx-4
    w-fit
    rounded-lg
    border
    border-transparent
    px-2
    py-2
    transition-all
    duration-300
    hover:border-primary/30
    hover:bg-primary/5
    flex
    items-center
    gap-3`,r=[{id:1532,title:"Pokemon Booster",status:"Dostarczone",date:"12.07.2026"},{id:1632,title:"Pokemon Mousepad",status:"W trakcie realizacji",date:"08.09.2026"},{id:1563,title:"Pokemon Card Pack",status:"Anulowane",date:"05.12.2025"}],t=[{id:1,title:"Gralnia",time:"2h",date:"12.07.2026"},{id:2,title:"Sesja RPG",time:"5h",date:"08.9.2026"},{id:3,title:"Gralnia",time:"2h",date:"05.12.2025"},{id:4,title:"Gralnia",time:"Bez limitu",date:"05.12.2025"},{id:5,title:"Sesja RPG",time:"Bez limitu",date:"15.06.2025"}];return e.jsx("div",{className:"py-8",children:e.jsxs("div",{className:"grid md:grid-cols-[55%_45%]",children:[e.jsx(L,{orders:r,buttonClass:s}),e.jsx(_,{reservations:t,buttonClass:s})]})})}function T(){const s=`
    w-full
    rounded-lg
    border
    border-border
    bg-background
    px-4
    py-3
    outline-none
    transition-all
    focus:border-primary
    focus:ring-2
    focus:ring-primary/20
  `;return e.jsx("section",{id:"edit-profile",className:"rounded-2xl border border-border glass p-6 shadow-sm",children:e.jsxs("form",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-heading text-2xl mb-4",children:"Konto"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"username",className:"mb-2 block text-sm font-medium",children:"Nazwa użytkownika"}),e.jsx("input",{id:"username",name:"username",type:"text",autoComplete:"name",className:s}),e.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Będzie wyświetlana w tabelach wyników."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"mb-2 block text-sm font-medium",children:"Email"}),e.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"username",className:s}),e.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Służy do logowania i kontaktu."})]})]})]}),e.jsxs("div",{className:"border-t border-border pt-8",children:[e.jsx("h3",{className:"font-heading text-2xl mb-4",children:"Bezpieczeństwo"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"currentPassword",className:"mb-2 block text-sm font-medium",children:"Aktualne hasło"}),e.jsx("input",{id:"currentPassword",name:"currentPassword",type:"password",autoComplete:"current-password",className:s})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"newPassword",className:"mb-2 block text-sm font-medium",children:"Nowe hasło"}),e.jsx("input",{id:"newPassword",name:"newPassword",type:"password",autoComplete:"new-password",className:s})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"confirmPassword",className:"mb-2 block text-sm font-medium",children:"Powtórz nowe hasło"}),e.jsx("input",{id:"confirmPassword",name:"confirmPassword",type:"password",autoComplete:"new-password",className:s})]})]})]}),e.jsxs("div",{className:"flex justify-between border-t border-border pt-6",children:[e.jsx("button",{type:"button",className:`\r
              rounded-lg\r
              border\r
              border-red-500/30\r
              text-red-500/50\r
              px-5\r
              py-2.5\r
              transition-colors\r
              hover:bg-red-500/10\r
              hover:text-red-500\r
              hover:border-red-500\r
              duration-200\r
            `,children:"Usuń konto"}),e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsx("button",{type:"button",className:`\r
                rounded-lg\r
                border\r
                border-border\r
                px-5\r
                py-2.5\r
                transition-colors\r
                hover:bg-muted\r
              `,children:"Anuluj"}),e.jsx("button",{type:"submit",className:`\r
                rounded-lg\r
                bg-primary\r
                px-5\r
                py-2.5\r
                font-medium\r
                text-primary-foreground\r
                transition-opacity\r
                hover:opacity-90\r
              `,children:"Zapisz zmiany"})]})]})]})})}function H(){const s="admin";return e.jsx("section",{className:"container mx-auto max-w-7xl px-4 py-28",children:e.jsxs("div",{className:"grid grid-cols-4 gap-8",children:[e.jsxs("aside",{className:"bg-card/40 backdrop-blur-md border border-border-40 rounded-3xl p-6 sticky -top-28 h-fit space-y-8",children:[e.jsx(E,{username:"Admin",role:s}),e.jsx(P,{role:s}),e.jsx(C,{events:17,reservations:2,orders:3,battlepassLevel:15})]}),e.jsxs("div",{className:"col-span-3",children:[e.jsx(B,{}),e.jsx(R,{}),e.jsx(T,{})]})]})})}export{H as default};
