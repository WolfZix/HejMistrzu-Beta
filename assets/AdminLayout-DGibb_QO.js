import{o,j as r,N as a,O as s}from"./index-CsxOrmNg.js";import{U as d}from"./users-CfI3hpOo.js";import{C as i}from"./calendar-days-DEgwa4B-.js";import{T as c}from"./ticket-x1sA2OKH.js";import{P as m}from"./package-BFpz4qry.js";import{A as l}from"./arrow-left-DXjDlz2u.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],h=o("LayoutDashboard",x),p=[{name:"Dashboard",path:"/admin",icon:h},{name:"Użytkownicy",path:"/admin/uzytkownicy",icon:d},{name:"Rezerwacje",path:"/admin/rezerwacje",icon:i},{name:"Eventy",path:"/admin/eventy",icon:c},{name:"Produkty",path:"/admin/produkty",icon:m}];function u(){return r.jsxs("aside",{className:"w-64 border-r border-border bg-card/40 backdrop-blur-xl",children:[r.jsxs("div",{className:"p-6 border-b border-border",children:[r.jsx("h1",{className:"font-heading text-2xl text-gold-gradient",children:"Hej Mistrzu"}),r.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Panel administracyjny"})]}),r.jsx("nav",{className:"flex-1 p-4",children:r.jsx("ul",{className:"space-y-2",children:p.map(e=>{const n=e.icon;return r.jsx("li",{children:r.jsxs(a,{to:e.path,end:e.path==="/admin",className:({isActive:t})=>`
                    flex items-center gap-3
                    rounded-xl px-4 py-3
                    transition-all duration-200
                    border
                    ${t?"bg-primary/10 text-primary border border-primary/20":"text-muted-foreground hover:text-foreground hover:bg-muted/30 border-transparent"}
                  `,children:[r.jsx(n,{size:18}),r.jsx("span",{children:e.name})]})},e.path)})})}),r.jsx("div",{className:"border-t border-border p-4",children:r.jsxs(a,{to:"/profil/Admin",className:`\r
            flex items-center gap-3\r
            rounded-xl px-4 py-3\r
            text-muted-foreground\r
            hover:bg-muted/30\r
            hover:text-foreground\r
            border\r
            border-transparent\r
            transition-all\r
          `,children:[r.jsx(l,{size:18}),"Wróć do profilu"]})})]})}function k(){return r.jsxs("div",{className:"min-h-screen flex",children:[r.jsx(u,{}),r.jsx("main",{className:"flex-1 p-6",children:r.jsx(s,{})})]})}export{k as default};
