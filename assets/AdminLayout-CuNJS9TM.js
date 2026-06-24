import{o as t,j as e,O as a,Q as d}from"./index-BcFWxCOT.js";import{U as s}from"./users-CArOvnd3.js";import{C as i}from"./calendar-days-YfhUsFVm.js";import{P as c}from"./package-WbBDveHD.js";import{A as m}from"./arrow-left-B74QDJE3.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],x=t("LayoutDashboard",h);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],p=t("Ticket",l),y=[{name:"Dashboard",path:"/admin",icon:x},{name:"Użytkownicy",path:"/admin/uzytkownicy",icon:s},{name:"Rezerwacje",path:"/admin/rezerwacje",icon:i},{name:"Eventy",path:"/admin/eventy",icon:p},{name:"Produkty",path:"/admin/produkty",icon:c}];function u(){return e.jsxs("aside",{className:"w-64 border-r border-border bg-card/40 backdrop-blur-xl",children:[e.jsxs("div",{className:"p-6 border-b border-border",children:[e.jsx("h1",{className:"font-heading text-2xl text-gold-gradient",children:"Hej Mistrzu"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Panel administracyjny"})]}),e.jsx("nav",{className:"flex-1 p-4",children:e.jsx("ul",{className:"space-y-2",children:y.map(r=>{const n=r.icon;return e.jsx("li",{children:e.jsxs(a,{to:r.path,end:r.path==="/admin",className:({isActive:o})=>`
                    flex items-center gap-3
                    rounded-xl px-4 py-3
                    transition-all duration-200
                    border
                    ${o?"bg-primary/10 text-primary border border-primary/20":"text-muted-foreground hover:text-foreground hover:bg-muted/30 border-transparent"}
                  `,children:[e.jsx(n,{size:18}),e.jsx("span",{children:r.name})]})},r.path)})})}),e.jsx("div",{className:"border-t border-border p-4",children:e.jsxs(a,{to:"/",className:`\r
            flex items-center gap-3\r
            rounded-xl px-4 py-3\r
            text-muted-foreground\r
            hover:bg-muted/30\r
            hover:text-foreground\r
            border\r
            border-transparent\r
            transition-all\r
          `,children:[e.jsx(m,{size:18}),"Powrót na stronę"]})})]})}function v(){return e.jsxs("div",{className:"min-h-screen flex",children:[e.jsx(u,{}),e.jsx("main",{className:"flex-1 p-6",children:e.jsx(d,{})})]})}export{v as default};
