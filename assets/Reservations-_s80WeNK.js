import{g as s,j as e,P as b,T as j,V as f}from"./index-BS5mKwd6.js";import{A as g}from"./AdminTable-D2nyXYIp.js";import{a as N}from"./index-CzApALvg.js";import{n as t}from"./index-WQ0BBVcu.js";import{S as v}from"./search-DhEY0KiN.js";import{P as y}from"./pencil-BnRb8EVn.js";function T(){const[n,l]=s.useState(1),[o,m]=s.useState([]),[E,i]=s.useState(!1),[a,h]=s.useState(""),c=o.filter(r=>t(r.fullName).includes(t(a))||t(r.email).includes(t(a))),d=Math.ceil(c.length/6),x=c.slice((n-1)*6,n*6);s.useEffect(()=>{l(1)},[a]),s.useEffect(()=>{u()});async function u(){try{i(!0);const r=await N.get("http://localhost:3000/reservations");m(r.data)}catch(r){console.error(r)}finally{i(!1)}}function p(r){switch(r){case"Oczekująca":return"bg-yellow-500/10 text-yellow-400";case"Potwierdzona":return"bg-green-500/10 text-green-400";case"Anulowana":return"bg-red-500/10 text-red-400";default:return""}}return e.jsxs("div",{className:"space-y-6 min-h-[45rem] relative",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"font-heading text-3xl",children:"Rezerwacje"}),e.jsx("p",{className:"text-muted-foreground mt-2",children:"Zarządzaj rezerwacjami."})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 justify-between",children:[e.jsxs("div",{className:"relative flex-1",children:[e.jsx(v,{size:18,className:`\r
              absolute\r
              left-3\r
              top-1/2\r
              -translate-y-1/2\r
              text-muted-foreground\r
              z-10\r
            `}),e.jsx("input",{value:a,onChange:r=>h(r.target.value),placeholder:"Szukaj rezerwacji...",className:`\r
            w-full\r
            glass\r
            border\r
            border-border\r
            rounded-lg\r
            py-2\r
            pl-10\r
            pr-4\r
            outline-none\r
            focus:border-primary/50\r
            text-primary\r
            `})]}),e.jsxs("button",{className:`\r
            flex\r
            items-center\r
            gap-2\r
            px-4\r
            py-2\r
            rounded-lg\r
            bg-primary/90\r
            w-fit\r
            text-black/90\r
            font-heading\r
            font-medium\r
            hover:shadow-[0_0_10px_1px_hsl(43,50%,26%)]\r
            hover:bg-primary\r
            hover:text-black\r
            transition-all duration-200\r
          `,children:[e.jsx(b,{size:16}),"Dodaj rezerwację"]})]}),e.jsxs("div",{className:"h-[33rem] flex flex-col justify-between",children:[e.jsxs(g,{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[e.jsx("th",{className:"p-4 w-12",children:"ID"}),e.jsx("th",{className:"p-4 w-[20%]",children:"Imię i nazwisko"}),e.jsx("th",{className:"p-4 w-[20%]",children:"Email"}),e.jsx("th",{className:"p-4",children:"Typ"}),e.jsx("th",{className:"p-4 w-36",children:"Data"}),e.jsx("th",{className:"p-4 w-36",children:"Status"}),e.jsx("th",{className:"p-4 w-36",children:"Akcje"})]})}),e.jsx("tbody",{children:x.map(r=>e.jsxs("tr",{className:`\r
                  border-b\r
                  border-border/50\r
                  hover:bg-muted/20\r
                  text-center\r
                `,children:[e.jsx("td",{className:"p-4",children:r.id}),e.jsx("td",{className:"p-4",children:r.fullName}),e.jsx("td",{className:"p-4",children:r.email}),e.jsx("td",{className:"p-4",children:r.duration===null?"Gralnia":`Sesja RPG ${r.duration===0?"Bez limitu":`${r.duration}h`}`}),e.jsx("td",{className:"p-4",children:new Date(r.reservationDate).toLocaleDateString("pl-PL")}),e.jsx("td",{className:"p-4",children:e.jsx("span",{className:`
                      px-2 py-1 rounded-md text-xs font-medium
                      ${p(r.status)}
                    `,children:r.status})}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{className:`\r
                          p-2\r
                          rounded-lg\r
                          hover:bg-muted\r
                          border border-transparent\r
                          hover:border-muted-foreground/30\r
                        `,children:e.jsx(y,{size:16})}),e.jsx("button",{className:`\r
                          p-2\r
                          rounded-lg\r
                          hover:bg-destructive/10\r
                          hover:text-destructive\r
                          border border-transparent\r
                          hover:border-destructive/30\r
                        `,children:e.jsx(j,{size:16})})]})})]},r.id))})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-sm text-muted-foreground",children:["Strona ",n," z ",d]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>l(r=>Math.max(r-1,1)),disabled:n===1,className:`\r
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
              `,children:"Poprzednia"}),e.jsx("button",{onClick:()=>l(r=>Math.min(r+1,d)),disabled:n===d,className:`\r
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
              `,children:"Następna"})]})]})]}),o.length===0&&e.jsx("div",{className:"absolute -top-12 left-0 right-0 bottom-0",children:e.jsx(f,{})})]})}export{T as default};
