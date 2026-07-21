import{g as d,j as e,q as m,k as x}from"./index-COQmWUGb.js";import{C as p}from"./chevron-down-aSDM3cQs.js";import{I as u}from"./input-BJNe8EbJ.js";import{S as f}from"./search-BiivkFNn.js";function b({label:n,value:t,options:o,onChange:i,className:c="",containerClassname:l=""}){const[a,s]=d.useState(!1);return e.jsxs("div",{className:`relative flex flex-col gap-2 ${l||"w-52"}`,children:[e.jsx("p",{className:"text-sm",children:n}),e.jsxs("button",{type:"button",onClick:()=>s(!a),className:`
          w-full
          border border-primary/20
          rounded-lg
          p-3
          flex
          items-center
          justify-between
          hover:border-primary/50
          transition-all
          ${c||"bg-background/50"}
        `,children:[e.jsx("span",{children:t||"Wybierz..."}),e.jsx(p,{size:18,className:`transition-transform ${a?"rotate-180":""}`})]}),e.jsx(m,{children:a&&e.jsx(x.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
              absolute\r
              top-full\r
              left-0\r
              mt-1\r
              w-full\r
              z-50\r
              rounded-lg\r
              border\r
              border-primary/20\r
              bg-card\r
              shadow-lg\r
              overflow-hidden\r
            `,children:o.map(r=>e.jsx("button",{type:"button",onClick:()=>{i(r.value),s(!1)},className:`\r
                  w-full\r
                  text-left\r
                  px-3\r
                  py-2\r
                  hover:bg-primary\r
                  hover:text-black\r
                  transition-colors\r
                `,children:r.label},r.label))})})]})}function g({label:n,search:t,setSearch:o,sortBy:i,setSortBy:c,sortOptions:l,button:a}){var s;return e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-end justify-between",children:[e.jsxs("div",{className:"flex-1 flex-col gap-2",children:[e.jsx("p",{className:"text-sm mb-2",children:n}),e.jsxs("div",{className:"relative",children:[e.jsx(u,{placeholder:"Szukaj...",value:t,onChange:r=>o(r.target.value),className:"pl-10 glass border-border focus:border-primary/50 py-6 rounded-xl"}),e.jsx(f,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"})]})]}),e.jsx(b,{label:"Sortuj",className:"glass",value:(s=l.find(r=>r.value===i))==null?void 0:s.label,onChange:c,options:l}),a]})}export{b as F,g as T};
