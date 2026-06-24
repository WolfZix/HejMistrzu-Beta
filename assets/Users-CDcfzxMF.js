import{j as r,q as v,k as y,g as s,X as N,P as k,U as w,V as U}from"./index-BcFWxCOT.js";import{A as z,P as C}from"./AdminTable-CNGPVHwl.js";import{C as P}from"./chevron-down-Dvt1zD80.js";import{S}from"./search-Bz2sA2Xt.js";const g=[{value:"user",label:"Użytkownik"},{value:"admin",label:"Administrator"}];function _({username:a,setUsername:m,email:t,setEmail:l,password:o,setPassword:i,role:c,setRole:e,isRoleOpen:p,setIsRoleOpen:u,handleSubmit:h,closeModal:b}){var d;return r.jsxs("form",{onSubmit:h,className:"flex flex-col gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Nazwa użytkownika"}),r.jsx("input",{required:!0,type:"text",value:a,onChange:n=>m(n.target.value),className:`\r
            w-full\r
            bg-background/50\r
            border border-primary/20\r
            rounded-lg\r
            p-3\r
            outline-none\r
            focus:border-primary\r
            focus:ring-2\r
            focus:ring-primary/50\r
            transition-all\r
            duration-300\r
            text-primary\r
          `})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Email"}),r.jsx("input",{required:!0,type:"email",value:t,onChange:n=>l(n.target.value),className:`\r
            w-full\r
            bg-background/50\r
            border border-primary/20\r
            rounded-lg\r
            p-3\r
            outline-none\r
            focus:border-primary\r
            focus:ring-2\r
            focus:ring-primary/50\r
            transition-all\r
            duration-300\r
            text-primary\r
          `})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Hasło"}),r.jsx("input",{required:!0,type:"password",value:o,onChange:n=>i(n.target.value),className:`\r
            w-full\r
            bg-background/50\r
            border border-primary/20\r
            rounded-lg\r
            p-3\r
            outline-none\r
            focus:border-primary\r
            focus:ring-2\r
            focus:ring-primary/50\r
            transition-all\r
            duration-300\r
            text-primary\r
          `})]}),r.jsxs("div",{className:"relative",children:[r.jsx("label",{className:"mb-1 block",children:"Rola"}),r.jsxs("button",{type:"button",onClick:()=>u(!p),className:`\r
            w-full\r
            bg-background/50\r
            border border-primary/20\r
            rounded-lg\r
            p-3\r
            flex\r
            items-center\r
            justify-between\r
            transition-all\r
            duration-300\r
            hover:border-primary/40\r
          `,children:[r.jsx("span",{children:(d=g.find(n=>n.value===c))==null?void 0:d.label}),r.jsx(P,{size:18,className:`transition-transform ${p?"rotate-180":""}`})]}),r.jsx(v,{children:p&&r.jsx(y.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
                absolute\r
                top-full\r
                mt-1\r
                z-50\r
                w-full\r
                rounded-xl\r
                border\r
                border-primary/20\r
                bg-card\r
                p-1\r
              `,children:g.map(n=>r.jsx("button",{type:"button",onClick:()=>{e(n.value),u(!1)},className:`\r
                      w-full\r
                      text-left\r
                      p-2\r
                      rounded-md\r
                      hover:bg-primary\r
                      hover:text-black\r
                    `,children:n.label},n.value))})})]}),r.jsxs("div",{className:"flex gap-3 mt-2",children:[r.jsx("button",{type:"button",onClick:b,className:`\r
            flex-1\r
            py-2\r
            rounded-md\r
            border\r
            border-muted-foreground/20\r
            hover:bg-foreground/10\r
            hover:border-foreground/20\r
            hover:text-white\r
            transition-all\r
          `,children:"Anuluj"}),r.jsx("button",{type:"submit",className:`\r
            flex-1\r
            py-2\r
            rounded-md\r
            font-heading\r
            font-semibold\r
            bg-primary/70\r
            text-primary-foreground\r
            transition-all\r
            duration-300\r
            hover:bg-primary\r
            hover:shadow-[0_0_8px_4px_hsl(43,50%,30%)]\r
            `,children:"Dodaj"})]})]})}function A({isOpen:a,onClose:m}){const[t,l]=s.useState(""),[o,i]=s.useState(""),[c,e]=s.useState(""),[p,u]=s.useState("user"),[h,b]=s.useState(!1);s.useEffect(()=>(document.body.style.overflow=a?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[a]);function d(){l(""),i(""),e(""),u("user"),b(!1),m()}function n(x){x.preventDefault(),d()}return r.jsx(v,{children:a&&r.jsx(y.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:d,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:r.jsxs(y.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:x=>x.stopPropagation(),onMouseDown:x=>x.stopPropagation(),className:`\r
              w-full\r
              max-w-md\r
              relative\r
              rounded-xl\r
              border\r
              border-primary/30\r
              bg-card\r
              px-6\r
              pb-6\r
              pt-12\r
              shadow-[0_0_15px_1px_hsl(43,50%,10%)]\r
            `,children:[r.jsx("button",{type:"button",onClick:d,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:r.jsx(N,{size:18})}),r.jsx("div",{className:"mb-6",children:r.jsx("h2",{className:"font-heading text-center text-2xl font-semibold",children:"Dodaj użytkownika"})}),r.jsx(_,{username:t,setUsername:l,email:o,setEmail:i,password:c,setPassword:e,role:p,setRole:u,isRoleOpen:h,setIsRoleOpen:b,handleSubmit:n,closeModal:d})]})})})}const f=[{id:1,username:"example",email:"example@example.com",battlepass:12,role:"Admin"},{id:2,username:"example",email:"example@example.com",battlepass:76,role:"User"},{id:3,username:"example",email:"example@example.com",battlepass:23,role:"User"},{id:4,username:"example",email:"example@example.com",battlepass:34,role:"User"},{id:5,username:"example",email:"example@example.com",battlepass:24,role:"User"},{id:6,username:"example",email:"example@example.com",battlepass:7,role:"User"},{id:7,username:"example",email:"example@example.com",battlepass:98,role:"User"},{id:8,username:"example",email:"example@example.com",battlepass:34,role:"User"},{id:9,username:"example",email:"example@example.com",battlepass:56,role:"User"},{id:10,username:"example",email:"example@example.com",battlepass:23,role:"User"}],j=6;function q(){const[a,m]=s.useState(1),[t,l]=s.useState(!1),o=Math.ceil(f.length/j),i=(a-1)*j,c=f.slice(i,i+j);return r.jsxs("div",{className:"space-y-6 min-h-[45rem] relative",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"font-heading text-3xl",children:"Użytkownicy"}),r.jsx("p",{className:"text-muted-foreground mt-2",children:"Zarządzaj użytkownikami systemu."})]}),r.jsxs("div",{className:"flex flex-col md:flex-row gap-4 justify-between",children:[r.jsxs("div",{className:"relative flex-1",children:[r.jsx(S,{size:18,className:`\r
              absolute\r
              left-3\r
              top-1/2\r
              -translate-y-1/2\r
              text-muted-foreground\r
              z-10\r
            `}),r.jsx("input",{placeholder:"Szukaj użytkownika...",className:`\r
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
            `})]}),r.jsxs("button",{onClick:()=>l(!t),className:`\r
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
          `,children:[r.jsx(k,{size:16}),"Dodaj użytkownika"]})]}),r.jsxs("div",{className:"h-[33rem] flex flex-col justify-between",children:[r.jsxs(z,{children:[r.jsx("thead",{children:r.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[r.jsx("th",{className:"p-4",children:"ID"}),r.jsx("th",{className:"p-4",children:"Nazwa"}),r.jsx("th",{className:"p-4",children:"Email"}),r.jsx("th",{className:"p-4",children:"Battlepass"}),r.jsx("th",{className:"p-4",children:"Rola"}),r.jsx("th",{className:"p-4",children:"Akcje"})]})}),r.jsx("tbody",{children:c.map(e=>r.jsxs("tr",{className:`\r
                  border-b\r
                  border-border/50\r
                  hover:bg-muted/20\r
                  text-center\r
                `,children:[r.jsx("td",{className:"p-4",children:e.id}),r.jsx("td",{className:"p-4",children:e.username}),r.jsx("td",{className:"p-4",children:e.email}),r.jsx("td",{className:"p-4",children:e.battlepass}),r.jsx("td",{className:"p-4",children:e.role}),r.jsx("td",{className:"p-4",children:r.jsxs("div",{className:"flex justify-center gap-2",children:[r.jsx("button",{className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-muted\r
                        border border-transparent\r
                        hover:border-muted-foreground/30\r
                      `,children:r.jsx(C,{size:16})}),r.jsx("button",{className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-destructive/10\r
                        hover:text-destructive\r
                        border border-transparent\r
                        hover:border-destructive/30\r
                      `,children:r.jsx(w,{size:16})})]})})]},e.id))})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("span",{className:"text-sm text-muted-foreground",children:["Strona ",a," z ",o]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{onClick:()=>m(e=>Math.max(e-1,1)),disabled:a===1,className:`\r
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
              `,children:"Poprzednia"}),r.jsx("button",{onClick:()=>m(e=>Math.min(e+1,o)),disabled:a===o,className:`\r
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
              `,children:"Następna"})]})]})]}),f.length===0&&r.jsx("div",{className:"absolute -top-12 left-0 right-0 bottom-0",children:r.jsx(U,{})}),t&&r.jsx(A,{isOpen:t,onClose:()=>l(!1)})]})}export{q as default};
