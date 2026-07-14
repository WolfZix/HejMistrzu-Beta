import{o as p,j as e,L as c,U as j,g}from"./index-DvtLbF0E.js";import{S as h}from"./shield-D8C-Yqd1.js";import{P as v}from"./pencil-DGkqGgTW.js";import{T as i}from"./ticket-CF3ZojpR.js";import{C as b}from"./calendar-ChL2zaZ_.js";import{C as y}from"./calendar-days-RLDfiY_1.js";import{S as N}from"./star-SKbQVil-.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],m=p("Download",w);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],d=p("ShoppingBag",z),k=[{icon:i,title:"Złóż rezerwacje",to:"/rezerwacje"},{icon:d,title:"Przejdź do sklepu",to:"/sklep"},{icon:b,title:"Zobacz wydarzenia",to:"/wydarzenia"}],x=`
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
      duration-300`;function E({role:r}){return e.jsxs("div",{className:"flex flex-col gap-2 space-y-4",children:[r==="admin"&&e.jsxs(c,{to:"/admin",className:`\r
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
          `,children:[e.jsx(h,{size:16,className:"text-red-500"}),e.jsx("span",{children:"Panel administratora"})]}),e.jsxs("button",{className:x,onClick:()=>{var t;(t=document.getElementById("edit-profile"))==null||t.scrollIntoView({behavior:"smooth"})},children:[e.jsx(v,{size:16,className:"text-primary"}),e.jsx("span",{children:"Edytuj profil"})]}),e.jsx("hr",{}),k.map(t=>{const s=t.icon;return e.jsxs(c,{to:t.to,className:x,children:[e.jsx(s,{size:16,className:"text-primary"}),e.jsx("span",{children:t.title})]},t.title)}),e.jsx("hr",{})]})}function P({username:r,role:t}){var s;return e.jsxs("div",{className:"col-span-1",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:`\r
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
          `,children:((s=r==null?void 0:r[0])==null?void 0:s.toUpperCase())??"G"}),e.jsx("h1",{className:"font-heading text-2xl mt-5",children:r}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["@",r==null?void 0:r.toLowerCase()]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["dołączył: ",new Date().toLocaleDateString("pl-PL",{year:"numeric",month:"long",day:"numeric"})]}),e.jsx("span",{className:`\r
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
            `,children:t==="admin"?e.jsxs(e.Fragment,{children:[e.jsx(h,{size:14}),"Administrator"]}):e.jsxs(e.Fragment,{children:[e.jsx(j,{size:14}),"Użytkownik"]})})]}),e.jsx("div",{className:"border-t border-border my-6"})]})}function L({battlepassLevel:r}){const t=[{label:"Ukończone wydarzenia",value:17,icon:y},{label:"Zamówienia",value:3,icon:d},{label:"Złożone ezerwacje",value:2,icon:i},{label:"Poziom Battlepass",value:r,icon:N}];return e.jsx("div",{className:"space-y-5 text-sm",children:t.map(s=>{const n=s.icon;return e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{className:"flex gap-2",children:[e.jsx(n,{size:18,className:"text-primary/80"}),e.jsxs("p",{className:"text-muted-foreground",children:[" ",s.label]})]}),e.jsxs("p",{className:"font-medium",children:[" ",s.value," "]})]},s.label)})})}function S({state:r,size:t=20}){const n={locked:{top:"hsl(var(--muted-foreground))",bottom:"hsl(var(--card))",glow:"none"},claimed:{top:"#d78cff",bottom:"#7d2cff",glow:"drop-shadow(0px 0px 10px rgba(185, 92, 255, .9))"}}[r];return e.jsxs("svg",{width:t,height:t*1.4,viewBox:"0 0 40 56",style:{overflow:"visible",filter:n.glow},className:r==="claimed"?"animate-battlepass-glow":"",children:[e.jsx("polygon",{points:"20,2 34,20 20,54 6,20",fill:n.bottom,stroke:n.top,strokeWidth:"2"}),e.jsx("polyline",{points:"20,2 20,54",stroke:n.top,strokeWidth:"1",opacity:".45"}),e.jsx("polyline",{points:"6,20 20,28 34,20",stroke:n.top,strokeWidth:"1",opacity:".45"}),e.jsx("polygon",{points:"20,4 30,20 20,28 10,20",fill:n.top,opacity:".7"})]})}const o=[{events:1,title:"Start",claimed:!0},{events:10,title:"10% rabatu",claimed:!0},{events:20,title:"Koszulka Hej Mistrzu",claimed:!1},{events:30,title:"Koszulka Hej Mistrzu",claimed:!1},{events:40,title:"Ekskluzywna figurka",claimed:!1}];function T(){const s=o[o.length-1].events-1;o.find(a=>a.events>15);const[n,u]=g.useState(o[0]);return e.jsxs("div",{className:"glass rounded-2xl p-6 col-span-3",children:[e.jsx("h2",{className:"font-heading text-xl mb-2",children:"Battlepass"}),e.jsxs("p",{className:"text-sm text-muted-foreground mb-5",children:[15," / ",o[o.length-1].events," odwiedzonych wydarzeń"]}),e.jsxs("div",{className:"relative mt-10 mb-10",children:[e.jsx("div",{className:"h-2 rounded-full bg-muted overflow-hidden",children:e.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 transition-all duration-700",style:{width:`${14/s*100}%`}})}),o.map(a=>{const f=(a.events-1)/s*100;let l="locked";return a.claimed?l="claimed":15<a.events&&(l="locked"),e.jsxs("div",{className:"absolute -translate-x-1/2",style:{left:`${f}%`,top:"-12px"},children:[e.jsx("button",{onClick:()=>u(a),className:"transition-transform hover:scale-110",children:e.jsx(S,{state:l})}),e.jsx("p",{className:"mt-1 text-center text-xs text-muted-foreground",children:a.events})]},a.events)})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx("h3",{className:"font-heading text-lg",children:n.title}),e.jsxs("p",{className:"text-sm text-muted-foreground mt-2",children:["Odblokowanie po ",n.events," wydarzeniach"]})]})]})}function _(){return e.jsxs("div",{className:"py-8",children:[e.jsxs("h2",{className:"font-heading text-2xl mb-6",children:["Historia ",e.jsx("span",{className:"text-sm text-muted-foreground",children:"ostatnie 30 dni"})]}),e.jsxs("div",{className:"grid gap-5 md:grid-cols-2",children:[e.jsxs("button",{className:`\r
            text-left\r
            rounded-2xl\r
            border\r
            border-border\r
            p-6\r
            transition-all\r
            hover:border-primary/30\r
            hover:bg-primary/5\r
            group\r
          `,children:[e.jsx(d,{className:"text-primary mb-4",size:26}),e.jsx("h3",{className:"font-heading text-lg",children:"Zamówienia"}),e.jsx("p",{className:"mt-2 text-sm text-muted-foreground leading-relaxed",children:"Pobierz pełną historię swoich zamówień w formacie TXT."}),e.jsxs("div",{className:"mt-6 flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all",children:[e.jsx(m,{size:16}),"Pobierz"]})]}),e.jsxs("button",{className:`\r
            text-left\r
            rounded-2xl\r
            border\r
            border-border\r
            p-6\r
            transition-all\r
            hover:border-primary/30\r
            hover:bg-primary/5\r
            group\r
          `,children:[e.jsx(i,{className:"text-primary mb-4",size:26}),e.jsx("h3",{className:"font-heading text-lg",children:"Rezerwacje"}),e.jsx("p",{className:"mt-2 text-sm text-muted-foreground leading-relaxed",children:"Pobierz pełną historię swoich rezerwacji w formacie TXT."}),e.jsxs("div",{className:"mt-6 flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all",children:[e.jsx(m,{size:16}),"Pobierz"]})]})]})]})}function Z(){const r="admin";return e.jsx("section",{className:"container mx-auto max-w-7xl px-4 py-28",children:e.jsxs("div",{className:"grid grid-cols-4 gap-8",children:[e.jsxs("aside",{className:"bg-card/40 backdrop-blur-md border border-border-40 rounded-3xl p-6 sticky top-28 space-y-8",children:[e.jsx(P,{username:"Admin",role:r}),e.jsx(E,{role:r}),e.jsx(L,{battlepassLevel:15})]}),e.jsxs("div",{className:"col-span-3",children:[e.jsx(T,{}),e.jsx(_,{})]})]})})}export{Z as default};
