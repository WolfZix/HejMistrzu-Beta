import{j as r,q as d,k as l,X as x}from"./index-DvtLbF0E.js";import{T as u}from"./triangle-alert-ToqgJYkU.js";function b({isOpen:s,title:t,description:a,onClose:n,onConfirm:i}){return r.jsx(d,{children:s&&r.jsx(l.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:n,className:`\r
            fixed\r
            inset-0\r
            z-50\r
            flex\r
            items-center\r
            justify-center\r
            bg-black/60\r
            backdrop-blur-sm\r
            p-4\r
          `,children:r.jsxs(l.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.2},onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),className:`\r
              relative\r
              w-full\r
              max-w-md\r
              rounded-xl\r
              border\r
              border-red-500/20\r
              bg-card\r
              p-6\r
            `,children:[r.jsx("button",{onClick:n,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted\r
              `,children:r.jsx(x,{size:18})}),r.jsx("div",{className:"flex justify-center mb-5",children:r.jsx("div",{className:`\r
                  p-4\r
                  rounded-full\r
                  bg-red-500/10\r
                `,children:r.jsx(u,{size:36,className:"text-red-500"})})}),r.jsx("h2",{className:"font-heading text-2xl text-center",children:t}),r.jsx("p",{className:"text-center text-muted-foreground mt-3 whitespace-pre-line",children:a}),r.jsxs("div",{className:"flex gap-3 mt-8",children:[r.jsx("button",{onClick:n,className:`\r
                  flex-1\r
                  py-2\r
                  rounded-lg\r
                  border\r
                  border-border\r
                  hover:bg-muted\r
                `,children:"Anuluj"}),r.jsx("button",{onClick:i,className:`\r
                  flex-1\r
                  py-2\r
                  rounded-lg\r
                  bg-red-600\r
                  hover:bg-red-700\r
                  text-white\r
                `,children:"Usuń"})]})]})})})}function g({label:s,value:t,onChange:a,className:n="",placeholder:i="",type:e="text",required:o=!1}){return r.jsxs("div",{className:`flex flex-col gap-2 w-full ${n}`,children:[r.jsxs("label",{className:"text-sm",children:[s,o&&r.jsx("span",{className:"text-red-500",children:" *"})]}),r.jsx("input",{type:e,value:t,placeholder:i,onChange:c=>a(c.target.value),className:`\r
          w-full\r
          p-3\r
          rounded-lg\r
          bg-background/50\r
          border border-primary/20\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          outline-none\r
        `})]})}export{b as D,g as F};
