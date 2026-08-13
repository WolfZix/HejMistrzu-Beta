import{l as D,g as p,j as e,k as j,D as N,J as E,A as T}from"./index-COKCq0j_.js";import{C as _}from"./circle-check-CmFaZR0A.js";import{C as k}from"./calendar-DPll7bfy.js";import{U as P}from"./users-Cq3bfgeP.js";import{T as R}from"./tag-DhkY4_cI.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],M=D("CircleAlert",A);function L({event:r,freeSlots:l,onClose:b,preview:m=!1,onRegistrationSuccess:y}){const[o,a]=p.useState(1),[n,c]=p.useState(!1),[u,h]=p.useState("idle"),[z,w]=p.useState(""),[s,C]=p.useState({name:"",surname:"",pokemonId:"",email:"",nickname:"",slots:""}),[i,v]=p.useState({name:"",surname:"",pokemonId:"",email:"",nickname:"",slots:""}),g=(t,f)=>{h("idle"),C(d=>({...d,[t]:f})),v(d=>({...d,[t]:""}))};function I(){const t={name:"",surname:"",pokemonId:"",email:"",nickname:"",slots:""},f=/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+(?:-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$/,d=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,x=/^\d*$/;return f.test(s.name)||(t.name="Imię powinno zaczynać się z wielkiej litery!"),f.test(s.surname)||(t.surname="Nazwisko powinno zaczynać się z wielkiej litery!"),x.test(s.pokemonId)||(t.pokemonId="Pokemon ID może zawierać tylko cyfry"),d.test(s.email)||(t.email="Niepoprawny adres email"),o<1&&(t.slots="Niepoprawna ilość wykupionych miejsc"),v(t),t.name||t.surname||t.pokemonId||t.email||t.slots?t:null}async function S(t){if(t.preventDefault(),h("idle"),w(""),I())return;c(!0);const d={eventId:r.id,name:s.name,surname:s.surname,pokemonId:s.pokemonId,nickname:s.nickname,email:s.email,slots:o};try{const x=await fetch("http://localhost:3000/eventRegistrations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}),$=await x.json();if(!x.ok){w($.message||"Przepraszamy, coś poszło nie tak!"),h("error");return}h("success"),y()}catch(x){console.error(x),h("error")}finally{c(!1)}}return e.jsx(e.Fragment,{children:u==="success"?e.jsxs(j.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center z-50 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center bg-card h-[24rem]",children:[e.jsx("div",{className:"p-6 rounded-full bg-green-500/10 w-fit mx-auto mb-5 border border-green-500/20",children:e.jsx(_,{className:"w-20 h-20 text-green-400"})}),e.jsx("h5",{className:"font-heading text-2xl font-semibold mb-2",children:"Zapis udany!"}),e.jsx("p",{className:"text-muted-foreground text-base max-w-xs mx-auto",children:"Miłej zabawy na wydarzeniu!"})]}):u==="error"?e.jsxs(j.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center z-50 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center bg-card",children:[e.jsx("div",{className:"p-6 rounded-full bg-red-500/10 w-fit mx-auto mb-5 border border-red-500/20",children:e.jsx(M,{className:"w-20 h-20 text-red-400"})}),e.jsx("h5",{className:"font-heading text-2xl font-semibold mb-2",children:"Zapis nieudany"}),e.jsx("p",{className:"text-muted-foreground text-base max-w-xs mx-auto",children:z||"Przepraszamy, coś poszło nie tak!"})]}):e.jsxs("form",{onSubmit:S,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 relative",children:[e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:s.name,onChange:t=>g("name",t.target.value),placeholder:"Imię",className:`\r
                  w-full md:w-fit\r
                  bg-background\r
                  border\r
                  rounded\r
                  p-2\r
                  outline-none\r
                  focus:border-primary\r
                  transition-all duration-300\r
                  text-primary\r
              `}),i.name&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:i.name})]}),e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:s.surname,onChange:t=>g("surname",t.target.value),placeholder:"Nazwisko",className:`\r
                  w-full md:w-fit\r
                  bg-background\r
                  border\r
                  rounded\r
                  p-2\r
                  outline-none\r
                  focus:border-primary\r
                  transition-all duration-300\r
                  text-primary\r
              `}),i.surname&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:i.surname})]}),e.jsxs("div",{children:[e.jsx("input",{required:!0,type:"text",value:s.email,onChange:t=>g("email",t.target.value),placeholder:"Email",className:`\r
                  w-full md:w-fit\r
                  bg-background\r
                  border\r
                  rounded\r
                  p-2\r
                  outline-none\r
                  focus:border-primary\r
                  transition-all duration-300\r
                  text-primary\r
              `}),i.email&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:i.email})]}),r.category==="Pokémon TCG"?e.jsxs("div",{children:[e.jsx("input",{type:"text",value:s.pokemonId,onChange:t=>g("pokemonId",t.target.value),placeholder:"Pokémon ID (opcjonalnie)",className:`\r
                    w-full md:w-fit\r
                    bg-background\r
                    border\r
                    rounded\r
                    p-2\r
                    outline-none\r
                    focus:border-primary\r
                    transition-all duration-300\r
                    text-primary\r
                `}),i.pokemonId&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:i.pokemonId})]}):e.jsx("div",{children:e.jsx("input",{type:"text",value:s.nickname,onChange:t=>g("nickname",t.target.value),placeholder:"Nickname (Opcjonalnie)",className:`\r
                    w-full md:w-fit\r
                    bg-background\r
                    border\r
                    rounded\r
                    p-2\r
                    outline-none\r
                    focus:border-primary\r
                    transition-all duration-300\r
                    text-primary\r
                `})})]}),e.jsx("div",{className:"flex flex-col md:flex-row gap-2 justify-between",children:e.jsxs("div",{className:"rounded w-fit gap-3 text-lg flex items-center justify-center",children:[e.jsx("p",{className:"flex items-center",children:"Liczba miejsc: "}),e.jsx("button",{type:"button",disabled:n||o===1,onClick:()=>a(o-1),className:`\r
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
                  `,children:"-"}),e.jsx("span",{className:"text-primary",children:o}),e.jsx("button",{type:"button",disabled:n||o===l,onClick:()=>a(o+1),className:`\r
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
                  `,children:"+"})]})}),e.jsxs("div",{className:`\r
                flex\r
                flex-col\r
                md:flex-row\r
                md:items-center\r
                md:justify-between\r
                gap-4\r
                mt-4\r
            `,children:[e.jsxs("p",{className:"text-xl font-semibold",children:["Razem:",e.jsxs("span",{className:"text-primary text-2xl ml-2",children:[r.price*o,"zł"]})]}),e.jsxs("div",{className:"flex w-full md:w-auto gap-2",children:[e.jsx("button",{type:"button",disabled:m,onClick:b,className:"px-4 py-2 w-full border rounded hover:bg-muted-foreground/20 transition-all duration-300 cursor-pointer",children:"Anuluj"}),e.jsx("button",{type:"submit",disabled:n||m,className:`\r
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
                `,children:n?"Wysyłanie...":"Zarezerwuj"})]})]})]})})}function J({event:r,months:l,onClose:b,preview:m=!1,onRegistrationSuccess:y}){const o=new Date(r.date),a=o.getDate(),n=l[o.getMonth()+1].name,c=o.getFullYear(),u=r.image?`http://localhost:3000/uploads/${r.image}`:"http://localhost:3000/uploads/EventPlaceholder.webp";return e.jsxs("div",{className:`\r
      bg-card\r
      w-full\r
      max-w-3xl\r
      h-[24rem]\r
      max-h-[90vh]\r
      overflow-y-hidden\r
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
    `,children:[e.jsxs("div",{className:"z-20",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-heading text-lg md:text-2xl font-bold tracking-wide line-clamp-2",children:r.title}),e.jsx("p",{className:"text-muted-foreground text-sm md:text-base mb-4 max-h-[150px] overflow-y-auto",children:r.description})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-y-1 mb-4 text-sm",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(k,{size:18,className:"text-primary"}),"Data: ",a," ",n," ",c]}),e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(P,{size:18,className:"text-primary"}),"Wolne miejsca: ",r.freeSlots]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(N,{size:18,className:"text-primary"}),"Godzina: ",r.startTime.slice(0,5)]}),e.jsxs("p",{className:"flex gap-2 w-fit",children:[e.jsx(R,{size:18,className:"text-primary"}),"Cena: ",r.price,"zł"]})]})]}),e.jsx(L,{event:r,freeSlots:r.freeSlots,onClose:b,preview:m,onRegistrationSuccess:y})]}),e.jsx("img",{src:u,className:`\r
      absolute top-0 bottom-0 left-0 right-0\r
      w-full h-full\r
      object-cover\r
      opacity-20\r
      [mask-image:linear-gradient(to_bottom,black_0%,transparent_60%,transparent_100%)]\r
      `})]})}const Z=(r,l)=>({"Pokémon TCG":`${r||l?"bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground":"bg-yellow-950/80 text-yellow-200 border-yellow-500/50 shadow-yellow-500/30 hover:bg-yellow-800/30 hover:text-yellow-300"}`,Riftbound:`${r||l?"bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground":"bg-purple-950/80 text-purple-200 border-purple-500/50 shadow-purple-500/30 hover:bg-purple-800/30 hover:text-purple-300"}`,"Warhammer 40K":`${r||l?"bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground":"bg-red-950/80 text-red-200 border-red-500/50 shadow-red-500/30 hover:bg-red-800/30 hover:text-red-300"}`,Inne:`${r||l?"bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground":"bg-blue-950/80 text-blue-200 border-blue-500/50 shadow-blue-500/30 hover:bg-blue-800/30 hover:text-blue-300"}`}),K=()=>["Pokémon TCG","Riftbound","Warhammer 40K","Inne"];function U({event:r,onClick:l,isPreview:b=!1,imageSrc:m,onRegistrationSuccess:y}){const a=new Date(`${r.date}T${r.startTime}`)<new Date,n=r.freeSlots<=0,c=Z(a,n);return e.jsxs(j.div,{layout:!0,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.3},className:`group glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 flex flex-col min-h-[460px] w-full max-w-[400px] ${a||n?"text-muted-foreground":"glass-hover"}`,children:[e.jsxs("div",{className:"aspect-[16/9] overflow-hidden relative shrink-0",children:[e.jsx("img",{src:m??`http://localhost:3000/uploads/${r.image||"EventPlaceholder.webp"}`,onError:u=>{u.currentTarget.src="http://localhost:3000/uploads/EventPlaceholder.webp"},alt:r.title,loading:"lazy",className:`w-full h-full object-cover transition-transform duration-700
          ${a||n?"saturate-0 group-hover:scale-100 ":"saturate-100 group-hover:scale-105 "}`}),e.jsx("div",{className:"absolute -inset-1 bg-gradient-to-t from-card/80 to-transparent"}),e.jsx("div",{className:`absolute top-4 left-4 px-2 py-0.5 rounded-full select-none ${c[r.category]} border text-xs font-medium`,children:r.category})]}),e.jsxs("div",{className:"p-6 flex flex-col flex-1",children:[e.jsx("h3",{className:`font-heading text-lg font-semibold tracking-wide mb-3 transition-colors ${a||n?"":"group-hover:text-primary"}`,children:r.title}),e.jsxs("div",{className:"space-y-1.5 mb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-muted-foreground text-xs",children:[e.jsx(k,{className:`w-3.5 h-3.5 shrink-0 ${a||n?"text-muted-foreground":"text-primary/70"}`}),e.jsx("span",{children:new Date(r.date).toLocaleDateString("pl-PL",{day:"numeric",month:"long",year:"numeric"})})]}),e.jsxs("div",{className:"flex items-center gap-2 text-muted-foreground text-xs",children:[e.jsx(N,{className:`w-3.5 h-3.5 shrink-0 ${a||n?"text-muted-foreground":"text-primary/70"}`}),e.jsx("span",{children:r.startTime.slice(0,5)})]}),e.jsxs("div",{className:"flex items-center gap-2 text-muted-foreground text-xs",children:[e.jsx(E,{className:`w-3.5 h-3.5 shrink-0 ${a||n?"text-muted-foreground":"text-primary/70"}`}),e.jsx("span",{children:r.location})]})]}),e.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed mb-5 flex-1 line-clamp-2 whitespace-pre-line",children:r.description}),e.jsxs("button",{disabled:a||n,onClick:l,className:`w-full border py-2.5 flex justify-center rounded-lg font-heading tracking-wider text-xs transition-all duration-300
          ${a||n?"bg-muted-foreground/30 text-muted-foreground hover:bg-muted-foreground/30 border border-foreground/20 cursor-not-allowed":"bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 cursor-pointer"}`,children:[a?"Wydarzenie dobiegło końca":n?"Brak dostępnych miejsc":"Zapisz się",!a&&e.jsx(T,{className:"w-3.5 h-3.5 ml-1.5"})]})]})]})}export{U as E,J as a,K as g};
