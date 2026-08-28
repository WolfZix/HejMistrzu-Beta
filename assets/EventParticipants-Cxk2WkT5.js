import{j as e,o as j,k as x,g as o,X as q,P,W as A}from"./index-D80TAC32.js";import{C as F}from"./check-BHatDjMV.js";import{I as R}from"./input-BXjwQCEJ.js";import{n as G}from"./index-WQ0BBVcu.js";import{F as p}from"./FormInput-DAWMsb3K.js";import{S as J}from"./search-D90LdhXw.js";function X({checked:r,onChange:u}){return e.jsx("div",{onClick:u,className:"w-8 h-8 border-2 bg-foreground/25 border-primary rounded cursor-pointer",children:e.jsx(j,{children:r&&e.jsx(x.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.1},children:e.jsx(F,{className:"w-full h-full bg-primary text-black"})})})})}function H({isAddOpen:r,eventId:u,onClose:b,onParticipantAdded:y}){const[l,d]=o.useState({name:"",surname:"",email:"",pokemonId:"",nickname:""});o.useEffect(()=>(document.body.style.overflow=r?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[r]);function c(){d({name:"",surname:"",email:"",pokemonId:"",nickname:""}),b()}async function w(a){if(a.preventDefault(),u===null)return;const i={eventId:u,userId:null,name:l.name,surname:l.surname,email:l.email,pokemonId:l.pokemonId||null,nickname:l.nickname||null};try{const m=await fetch("https://serwer.hejmistrzu.pl/eventParticipants",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),h=await m.json();if(!m.ok){console.error(h.message);return}y(),c()}catch(m){console.error(m)}}return e.jsx(j,{children:r&&e.jsx(x.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:c,className:`\r
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
          `,children:e.jsxs(x.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:a=>a.stopPropagation(),onMouseDown:a=>a.stopPropagation(),className:`\r
              w-full\r
              max-w-lg\r
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
            `,children:[e.jsx("button",{type:"button",onClick:c,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:e.jsx(q,{size:18})}),e.jsx("div",{children:e.jsx("h2",{className:"font-heading text-center text-2xl mb-2 font-semibold",children:"Dodaj uczestnika"})}),e.jsxs("form",{onSubmit:w,className:"space-y-4",children:[e.jsx(p,{label:"Imię",required:!0,value:l.name,onChange:a=>d(i=>({...i,name:a}))}),e.jsx(p,{label:"Nazwisko",required:!0,value:l.surname,onChange:a=>d(i=>({...i,surname:a}))}),e.jsx(p,{label:"Email",value:l.email,required:!0,onChange:a=>d(i=>({...i,email:a}))}),e.jsx(p,{label:"Pokemon ID",value:l.pokemonId,required:!1,placeholder:"opcjonalnie",onChange:a=>d(i=>({...i,pokemonId:a}))}),e.jsx(p,{label:"Nickname",value:l.nickname,required:!1,placeholder:"opcjonalnie",onChange:a=>d(i=>({...i,nickname:a}))}),e.jsx("div",{className:"w-full flex justify-end mt-4",children:e.jsxs("button",{className:"px-4 py-2 bg-primary text-black rounded-lg flex gap-2 items-center hover:bg-primary/80 transition-all duration-200",children:[e.jsx(P,{size:18}),"Dodaj"]})})]})]})})})}function te(){const[r,u]=o.useState(null),[b,y]=o.useState([]),[l,d]=o.useState(!0),[c,w]=o.useState(""),[a,i]=o.useState([]),[m,h]=o.useState([]),[z,E]=o.useState(!1),[C,S]=o.useState(!1),[T,f]=o.useState(null),[D,N]=o.useState(null),U=`
    w-8 h-8
    bg-primary
    text-black
    text-xl
    border-2 border-primary
    rounded-lg
    flex items-center justify-center
    hover:bg-primary/80
    hover:scale-105
    active:scale-95
    transition-all duration-200
    select-none
    disabled:duration-0
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:hover:scale-100
    disabled:active:scale-100
    disabled:hover:bg-primary
  `,$=`
    w-8 h-8
    bg-red-500
    text-black
    text-xl
    border-2 border-red-600
    rounded-lg
    flex items-center justify-center
    hover:bg-red-700
    hover:scale-105
    active:scale-95
    transition-all duration-200
    select-none
    disabled:opacity-50
    disabled:cursor-not-allowed
  `,g=b.find(t=>t.id===r);o.useEffect(()=>{async function t(){try{d(!0);const s=await fetch("https://serwer.hejmistrzu.pl/events");if(!s.ok)throw new Error("Nie udało się pobrać wydarzeń");const n=await s.json();y(n)}catch(s){console.error(s)}finally{d(!1)}}t()},[]),o.useEffect(()=>{async function t(){if(!c.trim()){i([]);return}try{const s=await fetch(`https://serwer.hejmistrzu.pl/users?email=${encodeURIComponent(G(c))}`);if(!s.ok)throw new Error("Nie udało się wyszukać użytkownika");const n=await s.json();i(n)}catch(s){console.error(s)}}t()},[c]);async function L(t){if(r===null){f(t.id),N("noEvent");return}if(m.some(n=>n.userId===t.id)){f(t.id),N("aleadyAdded");return}const s={eventId:r,userId:t.id,name:t.name,surname:t.surname,email:t.email,pokemonId:null,nickname:null};try{const n=await fetch("https://serwer.hejmistrzu.pl/eventParticipants",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!n.ok){const k=await n.json();throw new Error(k.message||"Nie udało się dodać uczestnika")}const v=await n.json();h(k=>[...k,{...v,username:t.username,email:t.email}])}catch(n){console.error(n)}}async function M(t){try{if(!(await fetch(`https://serwer.hejmistrzu.pl/eventParticipants/${t}`,{method:"DELETE"})).ok)throw new Error("Nie udało się usunąć uczestnika");h(n=>n.filter(v=>v.id!==t))}catch(s){console.error(s)}}async function I(t){try{if(t===null){h([]);return}const s=await fetch(`https://serwer.hejmistrzu.pl/eventParticipants?eventId=${t}`);if(!s.ok)throw new Error("Nie udało się pobrać uczestników");const n=await s.json();h(n)}catch(s){console.error(s)}}function _(){r===null&&S(!0)}function B(){S(!1)}function O(t){r===null&&f(t)}function W(){f(null),N(null)}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-heading font-semibold",children:"Uczestnicy wydarzeń"}),e.jsx("p",{className:"text-muted-foreground mt-2",children:"Wybierz wydarzenie i zarządzaj jego uczestnikami."})]}),e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"glass rounded-2xl overflow-hidden w-full",children:[e.jsxs("div",{className:"p-5 border-b border-border",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Wydarzenia"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Wybierz wydarzenie, którym chcesz zarządzać."})]}),e.jsx("div",{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[e.jsx("th",{className:"p-4 w-[50px]"}),e.jsx("th",{className:"p-4 text-left w-full",children:"Tytuł"}),e.jsx("th",{className:"p-4 w-[50px]",children:"Data"}),e.jsx("th",{className:"p-4 w-[50px]",children:"Godzina"})]})}),e.jsx("tbody",{children:b.map(t=>e.jsxs("tr",{className:`
                      text-foreground text-center
                      border-b border-border/50
                      hover:bg-foreground/5
                      transition-colors
                      ${r===t.id?"bg-primary/10":""}
                    `,children:[e.jsx("td",{className:"p-4",children:e.jsx("div",{className:"flex justify-center",children:e.jsx(X,{checked:r===t.id,onChange:()=>{u(!r||r!==t.id?t.id:null),I(t.id)}})})}),e.jsx("td",{className:"p-4 text-left max-w-[350px] truncate",children:t.title}),e.jsx("td",{className:"p-4",children:new Date(t.date).toLocaleDateString("pl-PL")}),e.jsx("td",{className:"p-4",children:t.startTime.slice(0,5)})]},t.id))})]})})]}),e.jsxs("div",{className:"glass rounded-2xl h-[26rem] w-full",children:[e.jsxs("div",{className:"p-5 border-b border-border flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Dodaj uczestnika"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Wyszukaj konta użytkowników lub dodaj ręcznie osoby bez konta."})]}),e.jsxs("div",{className:"relative",onMouseEnter:_,onMouseLeave:B,children:[e.jsxs("button",{onClick:()=>E(!0),disabled:r===null,className:`\r
                bg-primary\r
                text-black\r
                py-2 px-4\r
                rounded-lg\r
                flex gap-2\r
                items-center\r
                transition-all duration-200\r
                hover:shadow-[0_0_8px_2px_hsl(43,50%,30%)]\r
                disabled:opacity-50\r
                disabled:cursor-not-allowed\r
                disabled:shadow-none`,children:[e.jsx(P,{size:16})," Dodaj ręcznie"]}),e.jsx(j,{children:C&&e.jsx(x.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"absolute bottom-full right-0 mb-2 bg-red-500 text-white px-3 py-1.5 rounded-lg whitespace-nowrap",children:"Najpierw wybierz wydarzenie"})})]})]}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx(R,{value:c,onChange:t=>w(t.target.value),placeholder:"Wyszukaj użytkownika...",className:`\r
                    pl-10\r
                    glass\r
                    border-border\r
                    focus:border-primary/50\r
                    py-6\r
                    rounded-xl\r
                  `}),e.jsx(J,{className:`\r
                    absolute\r
                    left-3\r
                    top-1/2\r
                    -translate-y-1/2\r
                    w-4\r
                    h-4\r
                    text-muted-foreground\r
                    pointer-events-none\r
                  `})]}),e.jsx("div",{className:"mt-4 overflow-x-auto",children:a.length===0?e.jsx("div",{className:"p-6 text-center text-muted-foreground",children:c?"Nie znaleziono użytkownika":""}):e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-primary border-b border-border text-center h-12",children:[e.jsx("th",{className:"p-2 text-left",children:"Użytkownik"}),e.jsx("th",{className:"p-2",children:"Email"}),e.jsx("th",{className:"p-2 w-16"})]})}),e.jsx("tbody",{children:a.map(t=>e.jsxs("tr",{className:"text-foreground text-center border-b border-border/50 hover:bg-foreground/5 transition-colors",children:[e.jsx("td",{className:"p-3 text-left",children:e.jsx("div",{className:"font-medium",children:t.username})}),e.jsx("td",{className:"p-3 text-sm text-muted-foreground",children:t.email}),e.jsx("td",{className:"p-3",children:e.jsxs("div",{onMouseEnter:()=>O(t.id),onMouseLeave:W,className:"relative flex justify-center",children:[e.jsx("button",{type:"button",disabled:r===null,className:U,onClick:()=>L(t),children:"+"}),e.jsx(j,{children:T===t.id&&e.jsx(x.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"absolute bottom-full right-0 mb-2 bg-red-500 text-white px-3 py-1.5 rounded-lg whitespace-nowrap",children:D==="noEvent"?"Najpierw wybierz wydarzenie":"Użytkownik jest już zapisany na to wydarzenie"})})]})})]},t.id))})]})})]})]})]}),e.jsxs("div",{className:"mt-8 min-h-[20rem]",children:[e.jsxs("div",{className:"flex flex-col justify-center mb-5",children:[e.jsx("h2",{className:"text-2xl font-heading font-semibold",children:"Uczestnicy wydarzenia"}),e.jsx("p",{className:"text-muted-foreground mt-1",children:g?g.title:"Nie wybrano wydarzenia"})]}),e.jsx(j,{children:g&&e.jsx(x.div,{initial:{height:0},animate:{height:"auto"},exit:{height:0},transition:{duration:.2},className:"glass rounded-2xl overflow-hidden w-full",children:e.jsx("div",{className:"overflow-x-auto",children:m.length===0?e.jsx("div",{className:"p-6 text-center text-muted-foreground",children:"Nie znaleziono uczestników dla tego wydarzenia"}):e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-primary border-b border-border text-center h-12",children:[e.jsx("th",{className:"p-3",children:"Nazwa użytkownika"}),e.jsx("th",{className:"p-3",children:"Imię i nazwisko"}),e.jsx("th",{className:"p-3",children:"Email"}),e.jsx("th",{className:"p-3 w-20"})]})}),e.jsx("tbody",{children:m.map(t=>e.jsxs("tr",{className:"text-foreground text-center border-b border-border/50 hover:bg-foreground/5 transition-colors",children:[e.jsx("td",{className:"p-3",children:t.username??"Gość"}),e.jsxs("td",{className:"p-3",children:[t.name," ",t.surname]}),e.jsx("td",{className:"p-3 text-muted-foreground",children:t.email}),e.jsx("td",{className:"p-3",children:e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{type:"button",disabled:r===null,className:$,onClick:()=>M(t.id),children:"-"})})})]},t.id))})]})})})})]})]}),z&&e.jsx(H,{isAddOpen:z,eventId:r,onClose:()=>E(!1),onParticipantAdded:()=>I(r)}),l&&e.jsx("div",{className:"absolute top-0 left-56 right-0 bottom-0",children:e.jsx(A,{})})]})}export{te as default};
