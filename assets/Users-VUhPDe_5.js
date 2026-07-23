import{j as r,q as w,k as g,g as n,X as E,P as D,T as M,Q as F}from"./index-XQaRl8-6.js";import{A as O}from"./AdminTable-C8Vpkt5X.js";import{C as Z}from"./chevron-down-CRQNae39.js";import{F as q,T as I}from"./TableFilters-B6qLNWLr.js";import{n as v}from"./index-WQ0BBVcu.js";import{F as S,D as R}from"./FormInput-Cf0z29sl.js";import{E as T}from"./eye-B6do1vJ3.js";import{P as L}from"./pencil-CIpSfIvL.js";import"./input-BZfMsokZ.js";import"./search-Bb-CkudI.js";import"./triangle-alert-D-h5oLXM.js";const z=[{value:"user",label:"Użytkownik"},{value:"admin",label:"Administrator"}];function B({username:a,setUsername:s,email:c,setEmail:d,password:l,setPassword:t,role:u,setRole:i,isRoleOpen:f,setIsRoleOpen:j,handleSubmit:y,closeModal:x}){var m;return r.jsxs("form",{onSubmit:y,className:"flex flex-col gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Nazwa użytkownika"}),r.jsx("input",{required:!0,type:"text",value:a,onChange:o=>s(o.target.value),className:`\r
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
          `})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Email"}),r.jsx("input",{required:!0,type:"email",value:c,onChange:o=>d(o.target.value),className:`\r
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
          `})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-1 block",children:"Hasło"}),r.jsx("input",{required:!0,type:"password",value:l,onChange:o=>t(o.target.value),className:`\r
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
          `})]}),r.jsxs("div",{className:"relative",children:[r.jsx("label",{className:"mb-1 block",children:"Rola"}),r.jsxs("button",{type:"button",onClick:()=>j(!f),className:`\r
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
          `,children:[r.jsx("span",{children:(m=z.find(o=>o.value===u))==null?void 0:m.label}),r.jsx(Z,{size:18,className:`transition-transform ${f?"rotate-180":""}`})]}),r.jsx(w,{children:f&&r.jsx(g.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
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
              `,children:z.map(o=>r.jsx("button",{type:"button",onClick:()=>{i(o.value),j(!1)},className:`\r
                      w-full\r
                      text-left\r
                      p-2\r
                      rounded-md\r
                      hover:bg-primary\r
                      hover:text-black\r
                    `,children:o.label},o.value))})})]}),r.jsxs("div",{className:"flex gap-3 mt-2",children:[r.jsx("button",{type:"button",onClick:x,className:`\r
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
            `,children:"Dodaj"})]})]})}function V({isOpen:a,onClose:s}){const[c,d]=n.useState(""),[l,t]=n.useState(""),[u,i]=n.useState(""),[f,j]=n.useState("user"),[y,x]=n.useState(!1);n.useEffect(()=>(document.body.style.overflow=a?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[a]);function m(){d(""),t(""),i(""),j("user"),x(!1),s()}function o(b){b.preventDefault(),m()}return r.jsx(w,{children:a&&r.jsx(g.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:m,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:r.jsxs(g.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:b=>b.stopPropagation(),onMouseDown:b=>b.stopPropagation(),className:`\r
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
            `,children:[r.jsx("button",{type:"button",onClick:m,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:r.jsx(E,{size:18})}),r.jsx("div",{className:"mb-6",children:r.jsx("h2",{className:"font-heading text-center text-2xl font-semibold",children:"Dodaj użytkownika"})}),r.jsx(B,{username:c,setUsername:d,email:l,setEmail:t,password:u,setPassword:i,role:f,setRole:j,isRoleOpen:y,setIsRoleOpen:x,handleSubmit:o,closeModal:m})]})})})}function W({formData:a,setFormData:s,handleSubmit:c,closeModal:d}){return r.jsxs("form",{onSubmit:c,className:"flex flex-col gap-4",children:[r.jsx("div",{className:"flex gap-4 items-end justify-between",children:r.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[r.jsx(S,{label:"Nazwa użytkownika",value:a.username,onChange:l=>s(t=>({...t,username:l})),placeholder:"WolfZix",required:!0}),r.jsx(S,{label:"Email",value:a.email,onChange:l=>s(t=>({...t,email:l})),placeholder:"user@example.com",type:"email",required:!0}),r.jsx(q,{label:"Rola",value:a.role,onChange:l=>s(t=>({...t,role:l})),options:[{value:"admin",label:"Administrator"},{value:"user",label:"Użytkownik"}]})]})}),r.jsxs("div",{className:"flex gap-3 pt-2",children:[r.jsx("button",{type:"button",onClick:d,className:`\r
            flex-1\r
            py-2\r
            rounded-md\r
            border\r
            border-muted-foreground/20\r
            hover:bg-foreground/10\r
            transition-all duration-200\r
          `,children:"Anuluj"}),r.jsx("button",{type:"submit",className:`\r
            flex-1\r
            py-2\r
            rounded-md\r
            font-heading\r
            font-semibold\r
            bg-primary/70\r
            text-primary-foreground\r
            hover:bg-primary\r
            transition-all\r
            duration-200\r
          `,children:"Zapisz"})]})]})}function $({isOpen:a,user:s,onClose:c}){const[d,l]=n.useState({username:"",email:"",role:"user"});n.useEffect(()=>{s&&l({username:s.username,email:s.email,role:s.role})},[s]),n.useEffect(()=>(document.body.style.overflow=a?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[a]);function t(){l({username:"",email:"",role:"user"}),c()}function u(i){i.preventDefault(),t()}return r.jsx(w,{children:a&&r.jsx(g.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:t,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:r.jsxs(g.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:i=>i.stopPropagation(),onMouseDown:i=>i.stopPropagation(),className:`\r
              relative\r
              w-full\r
              max-w-md\r
              rounded-xl\r
              border\r
              border-primary/30\r
              bg-card\r
              px-6\r
              pb-6\r
              pt-10\r
              shadow-[0_0_15px_1px_hsl(43,50%,10%)]\r
            `,children:[r.jsx("button",{type:"button",onClick:t,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:r.jsx(E,{size:18})}),r.jsx("div",{className:"mb-6",children:r.jsx("h2",{className:"font-heading text-center text-2xl font-semibold",children:"Edytuj użytkownika"})}),r.jsx(W,{formData:d,setFormData:l,handleSubmit:u,closeModal:t})]})})})}const k=6;function tr(){const[a,s]=n.useState(1),[c,d]=n.useState(!1),[l,t]=n.useState([]),[u,i]=n.useState(null),[f,j]=n.useState(!1),[y,x]=n.useState(!1),[m,o]=n.useState(!1),[b,P]=n.useState(""),[C,_]=n.useState("default"),h=[...l.filter(e=>v(e.username).includes(v(b))||v(e.email).includes(v(b)))];switch(C){case"username-asc":h.sort((e,p)=>e.username.localeCompare(p.username));break;case"username-desc":h.sort((e,p)=>p.username.localeCompare(e.username));break;case"email-asc":h.sort((e,p)=>e.email.localeCompare(p.email));break;case"email-desc":h.sort((e,p)=>p.email.localeCompare(e.email));break;case"admin":h.sort((e,p)=>e.role===p.role?0:e.role==="admin"?-1:1);break}const U=[{value:"default",label:"Domyślnie"},{value:"username-asc",label:"Nazwa A-Z"},{value:"username-desc",label:"Nazwa Z-A"},{value:"email-asc",label:"Email A-Z"},{value:"email-desc",label:"Email Z-A"},{value:"admin",label:"Według roli"}],N=Math.ceil(h.length/k),A=h.slice((a-1)*k,a*k);return n.useEffect(()=>{s(1)},[b]),n.useEffect(()=>{fetch("http://localhost:3000/users").then(e=>e.json()).then(e=>{t(e)}).catch(console.error)},[]),r.jsxs("div",{className:"space-y-6 min-h-[45rem] relative",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"font-heading text-3xl",children:"Użytkownicy"}),r.jsx("p",{className:"text-muted-foreground mt-2",children:"Zarządzaj użytkownikami systemu."})]}),r.jsx(I,{label:"Szukaj użytkownika",search:b,setSearch:P,sortBy:C,setSortBy:_,sortOptions:U,button:r.jsxs("button",{onClick:()=>d(!0),className:`\r
              flex\r
              items-center\r
              gap-2\r
              px-4\r
              py-3\r
              rounded-lg\r
              bg-primary/90\r
              w-fit\r
              text-black/90\r
              hover:shadow-[0_0_10px_1px_hsl(43,50%,26%)]\r
              hover:bg-primary\r
              hover:text-black\r
              transition-all duration-200\r
            `,children:[r.jsx(D,{size:18}),"Dodaj użytkownika"]})}),r.jsxs("div",{className:"h-[33rem] flex flex-col justify-between",children:[r.jsxs(O,{children:[r.jsx("thead",{children:r.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[r.jsx("th",{className:"p-4 w-20",children:"ID"}),r.jsx("th",{className:"p-4 w-[30%]",children:"Nazwa"}),r.jsx("th",{className:"p-4 w-[30%]",children:"Email"}),r.jsx("th",{className:"p-4",children:"Rola"}),r.jsx("th",{className:"p-4",children:"Utworzono"}),r.jsx("th",{className:"p-4",children:"Akcje"})]})}),r.jsx("tbody",{children:A.map(e=>r.jsxs("tr",{className:`\r
                  border-b\r
                  border-border/50\r
                  hover:bg-muted/20\r
                  text-center\r
                `,children:[r.jsx("td",{className:"p-4",children:e.id}),r.jsxs("td",{className:"p-4",children:[" ",e.username," "]}),r.jsxs("td",{className:"p-4",children:[" ",e.email," "]}),r.jsxs("td",{className:"p-4",children:[" ",e.role," "]}),r.jsxs("td",{className:"p-4",children:[" ",new Date(e.createdAt).toLocaleDateString("pl-PL")," "]}),r.jsx("td",{className:"p-4",children:r.jsxs("div",{className:"flex justify-center gap-2",children:[r.jsx("button",{className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-muted\r
                        border border-transparent\r
                        hover:border-muted-foreground/30\r
                      `,children:r.jsx(T,{size:16})}),r.jsx("button",{onClick:()=>{i(e),x(!0)},className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-muted\r
                        border border-transparent\r
                        hover:border-muted-foreground/30\r
                      `,children:r.jsx(L,{size:16})}),r.jsx("button",{onClick:()=>{i(e),o(!0)},className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-destructive/10\r
                        hover:text-destructive\r
                        border border-transparent\r
                        hover:border-destructive/30\r
                      `,children:r.jsx(M,{size:16})})]})})]},e.id))})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("span",{className:"text-sm text-muted-foreground",children:["Strona ",a," z ",N]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{onClick:()=>s(e=>Math.max(e-1,1)),disabled:a===1,className:`\r
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
              `,children:"Poprzednia"}),r.jsx("button",{onClick:()=>s(e=>Math.min(e+1,N)),disabled:a===N,className:`\r
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
              `,children:"Następna"})]})]})]}),l.length===0&&r.jsx("div",{className:"absolute -top-12 left-0 right-0 bottom-0",children:r.jsx(F,{})}),c&&r.jsx(V,{isOpen:c,onClose:()=>d(!1)}),m&&r.jsx(R,{isOpen:m,title:"Usuń użytkownika",description:r.jsxs(r.Fragment,{children:["Czy na pewno chcesz usunąć użytkownika?",r.jsx("br",{}),r.jsx("strong",{children:u==null?void 0:u.username})]}),onClose:()=>{i(null),o(!1)},onConfirm:()=>{i(null),o(!1)}}),y&&r.jsx($,{isOpen:y,onClose:()=>x(!1),user:u})]})}export{tr as default};
