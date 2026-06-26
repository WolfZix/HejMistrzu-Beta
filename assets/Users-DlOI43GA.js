import{j as e,q as w,k as g,g as n,X as E,P as D,U as M,V as F}from"./index-epBis1f4.js";import{A as O,P as Z}from"./AdminTable-BDBuOqcl.js";import{C as q}from"./chevron-down-CGBKQSIk.js";import{F as I,T as R}from"./TableFilters-CYCFxsXJ.js";import{n as v}from"./index-Bc4rgiU6.js";import{F as S,D as T}from"./FormInput-Bj1xNYlf.js";import{E as L}from"./eye-Dp3Duvtp.js";import"./input-DZBS2U-0.js";import"./search-CSZikc-c.js";import"./triangle-alert-835fiUNd.js";const z=[{value:"user",label:"Użytkownik"},{value:"admin",label:"Administrator"}];function V({username:a,setUsername:s,email:u,setEmail:d,password:l,setPassword:t,role:c,setRole:i,isRoleOpen:f,setIsRoleOpen:j,handleSubmit:y,closeModal:x}){var m;return e.jsxs("form",{onSubmit:y,className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Nazwa użytkownika"}),e.jsx("input",{required:!0,type:"text",value:a,onChange:o=>s(o.target.value),className:`\r
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
          `})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Email"}),e.jsx("input",{required:!0,type:"email",value:u,onChange:o=>d(o.target.value),className:`\r
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
          `})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Hasło"}),e.jsx("input",{required:!0,type:"password",value:l,onChange:o=>t(o.target.value),className:`\r
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
          `})]}),e.jsxs("div",{className:"relative",children:[e.jsx("label",{className:"mb-1 block",children:"Rola"}),e.jsxs("button",{type:"button",onClick:()=>j(!f),className:`\r
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
          `,children:[e.jsx("span",{children:(m=z.find(o=>o.value===c))==null?void 0:m.label}),e.jsx(q,{size:18,className:`transition-transform ${f?"rotate-180":""}`})]}),e.jsx(w,{children:f&&e.jsx(g.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
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
              `,children:z.map(o=>e.jsx("button",{type:"button",onClick:()=>{i(o.value),j(!1)},className:`\r
                      w-full\r
                      text-left\r
                      p-2\r
                      rounded-md\r
                      hover:bg-primary\r
                      hover:text-black\r
                    `,children:o.label},o.value))})})]}),e.jsxs("div",{className:"flex gap-3 mt-2",children:[e.jsx("button",{type:"button",onClick:x,className:`\r
            flex-1\r
            py-2\r
            rounded-md\r
            border\r
            border-muted-foreground/20\r
            hover:bg-foreground/10\r
            hover:border-foreground/20\r
            hover:text-white\r
            transition-all\r
          `,children:"Anuluj"}),e.jsx("button",{type:"submit",className:`\r
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
            `,children:"Dodaj"})]})]})}function B({isOpen:a,onClose:s}){const[u,d]=n.useState(""),[l,t]=n.useState(""),[c,i]=n.useState(""),[f,j]=n.useState("user"),[y,x]=n.useState(!1);n.useEffect(()=>(document.body.style.overflow=a?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[a]);function m(){d(""),t(""),i(""),j("user"),x(!1),s()}function o(b){b.preventDefault(),m()}return e.jsx(w,{children:a&&e.jsx(g.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:m,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:e.jsxs(g.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:b=>b.stopPropagation(),onMouseDown:b=>b.stopPropagation(),className:`\r
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
            `,children:[e.jsx("button",{type:"button",onClick:m,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:e.jsx(E,{size:18})}),e.jsx("div",{className:"mb-6",children:e.jsx("h2",{className:"font-heading text-center text-2xl font-semibold",children:"Dodaj użytkownika"})}),e.jsx(V,{username:u,setUsername:d,email:l,setEmail:t,password:c,setPassword:i,role:f,setRole:j,isRoleOpen:y,setIsRoleOpen:x,handleSubmit:o,closeModal:m})]})})})}function W({formData:a,setFormData:s,handleSubmit:u,closeModal:d}){return e.jsxs("form",{onSubmit:u,className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex gap-4 items-end justify-between",children:e.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[e.jsx(S,{label:"Nazwa użytkownika",value:a.username,onChange:l=>s(t=>({...t,username:l})),placeholder:"WolfZix",required:!0}),e.jsx(S,{label:"Email",value:a.email,onChange:l=>s(t=>({...t,email:l})),placeholder:"user@example.com",type:"email",required:!0}),e.jsx(I,{label:"Rola",value:a.role,onChange:l=>s(t=>({...t,role:l})),options:[{value:"admin",label:"Administrator"},{value:"user",label:"Użytkownik"}]})]})}),e.jsxs("div",{className:"flex gap-3 pt-2",children:[e.jsx("button",{type:"button",onClick:d,className:`\r
            flex-1\r
            py-2\r
            rounded-md\r
            border\r
            border-muted-foreground/20\r
            hover:bg-foreground/10\r
            transition-all duration-200\r
          `,children:"Anuluj"}),e.jsx("button",{type:"submit",className:`\r
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
          `,children:"Zapisz"})]})]})}function $({isOpen:a,user:s,onClose:u}){const[d,l]=n.useState({username:"",email:"",role:"user"});n.useEffect(()=>{s&&l({username:s.username,email:s.email,role:s.role})},[s]),n.useEffect(()=>(document.body.style.overflow=a?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[a]);function t(){l({username:"",email:"",role:"user"}),u()}function c(i){i.preventDefault(),console.log(d),t()}return e.jsx(w,{children:a&&e.jsx(g.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:t,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:e.jsxs(g.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:i=>i.stopPropagation(),onMouseDown:i=>i.stopPropagation(),className:`\r
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
            `,children:[e.jsx("button",{type:"button",onClick:t,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:e.jsx(E,{size:18})}),e.jsx("div",{className:"mb-6",children:e.jsx("h2",{className:"font-heading text-center text-2xl font-semibold",children:"Edytuj użytkownika"})}),e.jsx(W,{formData:d,setFormData:l,handleSubmit:c,closeModal:t})]})})})}const k=6;function se(){const[a,s]=n.useState(1),[u,d]=n.useState(!1),[l,t]=n.useState([]),[c,i]=n.useState(null),[f,j]=n.useState(!1),[y,x]=n.useState(!1),[m,o]=n.useState(!1),[b,P]=n.useState(""),[C,U]=n.useState("default"),h=[...l.filter(r=>v(r.username).includes(v(b))||v(r.email).includes(v(b)))];switch(C){case"username-asc":h.sort((r,p)=>r.username.localeCompare(p.username));break;case"username-desc":h.sort((r,p)=>p.username.localeCompare(r.username));break;case"email-asc":h.sort((r,p)=>r.email.localeCompare(p.email));break;case"email-desc":h.sort((r,p)=>p.email.localeCompare(r.email));break;case"admin":h.sort((r,p)=>r.role===p.role?0:r.role==="admin"?-1:1);break}const _=[{value:"default",label:"Domyślnie"},{value:"username-asc",label:"Nazwa A-Z"},{value:"username-desc",label:"Nazwa Z-A"},{value:"email-asc",label:"Email A-Z"},{value:"email-desc",label:"Email Z-A"},{value:"admin",label:"Według roli"}],N=Math.ceil(h.length/k),A=h.slice((a-1)*k,a*k);return n.useEffect(()=>{s(1)},[b]),n.useEffect(()=>{fetch("http://localhost:3000/users").then(r=>r.json()).then(r=>{t(r)}).catch(console.error)},[]),e.jsxs("div",{className:"space-y-6 min-h-[45rem] relative",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"font-heading text-3xl",children:"Użytkownicy"}),e.jsx("p",{className:"text-muted-foreground mt-2",children:"Zarządzaj użytkownikami systemu."})]}),e.jsx(R,{label:"Szukaj użytkownika",search:b,setSearch:P,sortBy:C,setSortBy:U,sortOptions:_,button:e.jsxs("button",{onClick:()=>d(!0),className:`\r
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
            `,children:[e.jsx(D,{size:18}),"Dodaj użytkownika"]})}),e.jsxs("div",{className:"h-[33rem] flex flex-col justify-between",children:[e.jsxs(O,{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[e.jsx("th",{className:"p-4 w-20",children:"ID"}),e.jsx("th",{className:"p-4 w-[30%]",children:"Nazwa"}),e.jsx("th",{className:"p-4 w-[30%]",children:"Email"}),e.jsx("th",{className:"p-4",children:"Rola"}),e.jsx("th",{className:"p-4",children:"Utworzono"}),e.jsx("th",{className:"p-4",children:"Akcje"})]})}),e.jsx("tbody",{children:A.map(r=>e.jsxs("tr",{className:`\r
                  border-b\r
                  border-border/50\r
                  hover:bg-muted/20\r
                  text-center\r
                `,children:[e.jsx("td",{className:"p-4",children:r.id}),e.jsxs("td",{className:"p-4",children:[" ",r.username," "]}),e.jsxs("td",{className:"p-4",children:[" ",r.email," "]}),e.jsxs("td",{className:"p-4",children:[" ",r.role," "]}),e.jsxs("td",{className:"p-4",children:[" ",new Date(r.createdAt).toLocaleDateString("pl-PL")," "]}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-muted\r
                        border border-transparent\r
                        hover:border-muted-foreground/30\r
                      `,children:e.jsx(L,{size:16})}),e.jsx("button",{onClick:()=>{i(r),x(!0)},className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-muted\r
                        border border-transparent\r
                        hover:border-muted-foreground/30\r
                      `,children:e.jsx(Z,{size:16})}),e.jsx("button",{onClick:()=>{i(r),o(!0)},className:`\r
                        p-2\r
                        rounded-lg\r
                        hover:bg-destructive/10\r
                        hover:text-destructive\r
                        border border-transparent\r
                        hover:border-destructive/30\r
                      `,children:e.jsx(M,{size:16})})]})})]},r.id))})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-sm text-muted-foreground",children:["Strona ",a," z ",N]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>s(r=>Math.max(r-1,1)),disabled:a===1,className:`\r
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
              `,children:"Poprzednia"}),e.jsx("button",{onClick:()=>s(r=>Math.min(r+1,N)),disabled:a===N,className:`\r
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
              `,children:"Następna"})]})]})]}),l.length===0&&e.jsx("div",{className:"absolute -top-12 left-0 right-0 bottom-0",children:e.jsx(F,{})}),u&&e.jsx(B,{isOpen:u,onClose:()=>d(!1)}),m&&e.jsx(T,{isOpen:m,title:"Usuń użytkownika",description:e.jsxs(e.Fragment,{children:["Czy na pewno chcesz usunąć użytkownika?",e.jsx("br",{}),e.jsx("strong",{children:c==null?void 0:c.username})]}),onClose:()=>{i(null),o(!1)},onConfirm:()=>{console.log(c),i(null),o(!1)}}),y&&e.jsx($,{isOpen:y,onClose:()=>x(!1),user:c})]})}export{se as default};
