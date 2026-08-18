import{j as e,o as p,k as o,g as s,X as S,P as E,W as P}from"./index-OOAlZSw9.js";import{C}from"./check-Bm1KxNY5.js";import{I}from"./input-4pD29YQI.js";import{n as D}from"./index-WQ0BBVcu.js";import{F as _}from"./FormInput-esQiuh4O.js";import{S as W}from"./search-G-8tX4SS.js";function L({checked:a,onChange:i}){return e.jsx("div",{onClick:i,className:"w-8 h-8 border-2 bg-foreground/25 border-primary rounded cursor-pointer",children:e.jsx(p,{children:a&&e.jsx(o.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.1},children:e.jsx(C,{className:"w-full h-full bg-primary text-black"})})})})}function U({isAddOpen:a,onClose:i,onParticipantAdded:d}){const[c,x]=s.useState({name:"",surname:"",email:"",pokemonId:"",nickname:""});s.useEffect(()=>(document.body.style.overflow=a?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[a]);function l(){x({name:"",surname:"",email:"",pokemonId:"",nickname:""}),i()}return e.jsx(p,{children:a&&e.jsx(o.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:l,className:`\r
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
          `,children:e.jsxs(o.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:n=>n.stopPropagation(),onMouseDown:n=>n.stopPropagation(),className:`\r
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
            `,children:[e.jsx("button",{type:"button",onClick:l,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:e.jsx(S,{size:18})}),e.jsx("div",{children:e.jsx("h2",{className:"font-heading text-center text-2xl mb-2 font-semibold",children:"Dodaj Wydarzenie"})}),e.jsx("div",{children:e.jsx(_,{label:"Imię",value:c.name,onChange:()=>""})})]})})})}function X(){const[a,i]=s.useState(null),[d,c]=s.useState([]),[x,l]=s.useState(!0),[n,g]=s.useState(""),[j,f]=s.useState([]),[A,b]=s.useState(!1),[m,w]=s.useState([]),[y,N]=s.useState(!1),v=`
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
    disabled:opacity-50
    disabled:cursor-not-allowed
  `,k=`
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
  `,h=d.find(r=>r.id===a);s.useEffect(()=>{async function r(){try{l(!0);const t=await fetch("http://localhost:3000/events");if(!t.ok)throw new Error("Nie udało się pobrać wydarzeń");const u=await t.json();c(u)}catch(t){console.error(t)}finally{l(!1)}}r()},[]),s.useEffect(()=>{async function r(){if(!n.trim()){f([]);return}b(!0);try{const t=await fetch(`http://localhost:3000/users?email=${encodeURIComponent(D(n))}`);if(!t.ok)throw new Error("Nie udało się wyszukać użytkownika");const u=await t.json();f(u)}catch(t){console.error(t)}finally{b(!1)}}r()},[n]);function z(r){m.some(t=>t.id===r.id)||w(t=>[...t,r])}function F(){}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-heading font-semibold",children:"Uczestnicy wydarzeń"}),e.jsx("p",{className:"text-muted-foreground mt-2",children:"Wybierz wydarzenie i zarządzaj jego uczestnikami."})]}),e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"glass rounded-2xl overflow-hidden w-full",children:[e.jsxs("div",{className:"p-5 border-b border-border",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Wydarzenia"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Wybierz wydarzenie, którym chcesz zarządzać."})]}),e.jsx("div",{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[e.jsx("th",{className:"p-4 w-[50px]"}),e.jsx("th",{className:"p-4 text-left w-[350px]",children:"Tytuł"}),e.jsx("th",{className:"p-4 w-[50px]",children:"Data"}),e.jsx("th",{className:"p-4 w-[50px]",children:"Godzina"})]})}),e.jsx("tbody",{children:d.map(r=>e.jsxs("tr",{className:`
                      text-foreground text-center
                      border-b border-border/50
                      hover:bg-foreground/5
                      transition-colors
                      ${a===r.id?"bg-primary/10":""}
                    `,children:[e.jsx("td",{className:"p-4",children:e.jsx("div",{className:"flex justify-center",children:e.jsx(L,{checked:a===r.id,onChange:()=>i(!a||a!==r.id?r.id:null)})})}),e.jsx("td",{className:"p-4 text-left max-w-[350px] truncate",children:r.title}),e.jsx("td",{className:"p-4",children:new Date(r.date).toLocaleDateString("pl-PL")}),e.jsx("td",{className:"p-4",children:r.startTime.slice(0,5)})]},r.id))})]})})]}),e.jsxs("div",{className:"glass rounded-2xl overflow-auto h-[26rem] w-full",children:[e.jsxs("div",{className:"p-5 border-b border-border flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Dodaj uczestnika"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Wyszukaj użytkownika po adresie email."})]}),e.jsx("div",{children:e.jsxs("button",{onClick:()=>N(!0),className:`\r
                bg-primary\r
                text-black\r
                py-2 px-4\r
                rounded-lg\r
                flex gap-2\r
                items-center\r
                transition-all duration-200\r
                hover:shadow-[0_0_8px_2px_hsl(43,50%,30%)]`,children:[e.jsx(E,{size:16})," Dodaj ręcznie"]})})]}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx(I,{value:n,onChange:r=>g(r.target.value),placeholder:"Wyszukaj użytkownika...",className:`\r
                    pl-10\r
                    glass\r
                    border-border\r
                    focus:border-primary/50\r
                    py-6\r
                    rounded-xl\r
                  `}),e.jsx(W,{className:`\r
                    absolute\r
                    left-3\r
                    top-1/2\r
                    -translate-y-1/2\r
                    w-4\r
                    h-4\r
                    text-muted-foreground\r
                    pointer-events-none\r
                  `})]}),e.jsx("div",{className:"mt-4 overflow-x-auto",children:j.length===0?e.jsx("div",{className:"p-6 text-center text-muted-foreground",children:n?"Nie znaleziono użytkownika":""}):e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-primary border-b border-border text-center h-12",children:[e.jsx("th",{className:"p-2 text-left",children:"Użytkownik"}),e.jsx("th",{className:"p-2",children:"Email"}),e.jsx("th",{className:"p-2 w-16"})]})}),e.jsx("tbody",{children:j.map(r=>e.jsxs("tr",{className:"text-foreground text-center border-b border-border/50 hover:bg-foreground/5 transition-colors",children:[e.jsx("td",{className:"p-3 text-left",children:e.jsx("div",{className:"font-medium",children:r.username})}),e.jsx("td",{className:"p-3 text-sm text-muted-foreground",children:r.email}),e.jsx("td",{className:"p-3",children:e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{type:"button",className:v,onClick:()=>z(r),children:"+"})})})]},r.id))})]})})]})]})]}),e.jsxs("div",{className:"mt-8 min-h-[20rem]",children:[e.jsxs("div",{className:"flex flex-col justify-center mb-5",children:[e.jsx("h2",{className:"text-2xl font-heading font-semibold",children:"Uczestnicy wydarzenia"}),e.jsx("p",{className:"text-muted-foreground mt-1",children:h?h.title:"Nie wybrano wydarzenia"})]}),e.jsx(p,{children:h&&e.jsx(o.div,{initial:{height:0},animate:{height:"auto"},exit:{height:0},transition:{duration:.2},className:"glass rounded-2xl overflow-hidden w-full",children:e.jsx("div",{className:"overflow-x-auto",children:m.length===0?e.jsx("div",{className:"p-6 text-center text-muted-foreground",children:"Nie znaleziono uczestników dla tego wydarzenia"}):e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-primary border-b border-border text-center h-12",children:[e.jsx("th",{className:"p-3",children:"Nazwa użytkownika"}),e.jsx("th",{className:"p-3",children:"Imię i nazwisko"}),e.jsx("th",{className:"p-3",children:"Email"}),e.jsx("th",{className:"p-3 w-20"})]})}),e.jsx("tbody",{children:m.map(r=>e.jsxs("tr",{className:"text-foreground text-center border-b border-border/50 hover:bg-foreground/5 transition-colors",children:[e.jsx("td",{className:"p-3",children:r.username}),e.jsx("td",{className:"p-3",children:"-"}),e.jsx("td",{className:"p-3 text-muted-foreground",children:r.email}),e.jsx("td",{className:"p-3",children:e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{type:"button",className:k,children:"-"})})})]}))})]})})})})]})]}),y&&e.jsx(U,{isAddOpen:y,onClose:()=>N(!1),onParticipantAdded:()=>void 0}),x&&e.jsx("div",{className:"absolute top-0 left-56 right-0 bottom-0",children:e.jsx(P,{})})]})}export{X as default};
