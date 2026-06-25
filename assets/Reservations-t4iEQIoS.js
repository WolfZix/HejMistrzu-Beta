import{g as c,j as e,P as m,U as h,V as x}from"./index-B8C75r4p.js";import{A as u,P as p}from"./AdminTable-C8b5sRLb.js";import{e as b}from"./events-D2GIhWbm.js";import{S as j}from"./search-B_aMiBJA.js";import"./BoardGames-DR1MmYjU.js";const s=[{id:1,fullName:"Jan Kowalski",email:"jan@gmail.com",eventId:1,date:"26.06.2026",status:"Potwierdzona"},{id:2,fullName:"Anna Nowak",email:"anna@gmail.com",eventId:2,date:"27.06.2026",status:"Anulowana"},{id:3,fullName:"Michał Wiśniewski",email:"michal@gmail.com",eventId:3,date:"28.06.2026",status:"Anulowana"},{id:4,fullName:"Kacper Kowalczyk",email:"kacper@gmail.com",eventId:4,date:"29.06.2026",status:"Potwierdzona"},{id:5,fullName:"Piotr Nowak",email:"piotr@gmail.com",eventId:5,date:"30.06.2026",status:"Potwierdzona"},{id:6,fullName:"Adam Lis",email:"adam@gmail.com",eventId:6,date:"01.07.2026",status:"Potwierdzona"},{id:7,fullName:"Tomasz Mazur",email:"tomek@gmail.com",eventId:7,date:"02.07.2026",status:"Potwierdzona"}];function z(){const[a,t]=c.useState(1),n=Math.ceil(s.length/6),l=s.slice((a-1)*6,a*6);function i(r){switch(r){case"Potwierdzona":return"bg-green-500/10 text-green-400";case"Anulowana":return"bg-red-500/10 text-red-400";default:return""}}return e.jsxs("div",{className:"space-y-6 min-h-[45rem] relative",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"font-heading text-3xl",children:"Rezerwacje"}),e.jsx("p",{className:"text-muted-foreground mt-2",children:"Zarządzaj rezerwacjami."})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 justify-between",children:[e.jsxs("div",{className:"relative flex-1",children:[e.jsx(j,{size:18,className:`\r
              absolute\r
              left-3\r
              top-1/2\r
              -translate-y-1/2\r
              text-muted-foreground\r
              z-10\r
            `}),e.jsx("input",{placeholder:"Szukaj rezerwacji...",className:`\r
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
          `,children:[e.jsx(m,{size:16}),"Dodaj rezerwację"]})]}),e.jsxs("div",{className:"h-[33rem] flex flex-col justify-between",children:[e.jsxs(u,{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[e.jsx("th",{className:"p-4",children:"ID"}),e.jsx("th",{className:"p-4",children:"Imię i nazwisko"}),e.jsx("th",{className:"p-4",children:"Email"}),e.jsx("th",{className:"p-4",children:"Event"}),e.jsx("th",{className:"p-4",children:"Data"}),e.jsx("th",{className:"p-4",children:"Status"}),e.jsx("th",{className:"p-4",children:"Akcje"})]})}),e.jsx("tbody",{children:l.map(r=>{var d;return e.jsxs("tr",{className:`\r
                  border-b\r
                  border-border/50\r
                  hover:bg-muted/20\r
                  text-center\r
                `,children:[e.jsx("td",{className:"p-4",children:r.id}),e.jsx("td",{className:"p-4",children:r.fullName}),e.jsx("td",{className:"p-4",children:r.email}),e.jsx("td",{className:"p-4",children:(d=b.find(o=>o.id===r.eventId))==null?void 0:d.title}),e.jsx("td",{className:"p-4",children:r.date}),e.jsx("td",{className:"p-4",children:e.jsx("span",{className:`
                      px-2 py-1 rounded-md text-xs font-medium
                      ${i(r.status)}
                    `,children:r.status})}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{className:`\r
                          p-2\r
                          rounded-lg\r
                          hover:bg-muted\r
                          border border-transparent\r
                          hover:border-muted-foreground/30\r
                        `,children:e.jsx(p,{size:16})}),e.jsx("button",{className:`\r
                          p-2\r
                          rounded-lg\r
                          hover:bg-destructive/10\r
                          hover:text-destructive\r
                          border border-transparent\r
                          hover:border-destructive/30\r
                        `,children:e.jsx(h,{size:16})})]})})]},r.id)})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-sm text-muted-foreground",children:["Strona ",a," z ",n]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>t(r=>Math.max(r-1,1)),disabled:a===1,className:`\r
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
              `,children:"Poprzednia"}),e.jsx("button",{onClick:()=>t(r=>Math.min(r+1,n)),disabled:a===n,className:`\r
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
              `,children:"Następna"})]})]})]}),s.length===0&&e.jsx("div",{className:"absolute -top-12 left-0 right-0 bottom-0",children:e.jsx(x,{})})]})}export{z as default};
