import{g as s,j as e,o as N,k as b,X as I,P as Z,T as U,V as W}from"./index-COKCq0j_.js";import{T as q,A as K,D as X}from"./TableFilters-B7OyBQsj.js";import{a as O}from"./index-CzApALvg.js";import{n as A}from"./index-WQ0BBVcu.js";import{C as _}from"./chevron-down-mHlVq1gQ.js";import{E as J}from"./eye-BBU3f_Ws.js";import{P as Q}from"./pencil-C8hZ3Ed1.js";import"./triangle-alert-Ds7oFk7O.js";import"./input-OpAqBaMR.js";import"./search-CH-4sS3a.js";function Y({reservation:m,formData:n,setFormData:l,closeModal:u,onReservationUpdated:C,requiresDuration:P,bookingOptions:w,durationOptions:h,peopleCountOptions:S,hourOptions:g,statusOptions:T,isSessionOpen:p,setIsSessionOpen:i,isTimeOpen:k,setIsTimeOpen:d,isPeopleCountOpen:j,setIsPeopleCountOpen:x,isHourOpen:y,setIsHourOpen:o,isStatusOpen:D,setIsStatusOpen:c}){const[v,G]=s.useState({fullName:"",email:"",phone:"",reservationDate:"",reservationTime:"",duration:"",peopleCount:"",notes:"",status:""}),[z,R]=s.useState(""),$=r=>{const t={fullName:"",email:"",phone:"",reservationDate:"",reservationTime:"",duration:"",peopleCount:"",notes:"",status:""},f=/^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]+(?:[-'][A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]+)?(?:\s[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]+(?:[-'][A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]+)?)+$/,E=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,L=/^\+?\d{9,15}$/,M=r.phone.replace(/\s/g,"");return f.test(r.fullName)||(t.fullName="Podaj poprawne imię i nazwisko"),E.test(r.email)||(t.email="Niepoprawny email"),M&&!L.test(M)&&(t.phone="Niepoprawny numer telefonu"),r.reservationDate||(t.reservationDate="Wybierz datę rezerwacji"),r.reservationTime||(t.reservationTime="Wybierz godzinę rezerwacji"),r.duration!==null?r.duration!==3&&r.duration!==5&&r.duration!==0&&(t.duration="Niepoprawna długość sesji"):(r.peopleCount===null||r.peopleCount<1||r.peopleCount>4)&&(t.peopleCount="Wybierz liczbę osób"),r.status!=="Oczekująca"&&r.status!=="Potwierdzona"&&r.status!=="Anulowana"&&(t.status="Niepoprawny status"),G(t),Object.values(t).every(V=>V==="")};async function a(r){var t,f;if(r.preventDefault(),R(""),!!$(n))try{await O.put(`http://localhost:3000/reservations/${m.id}`,n),C(),u()}catch(E){console.error(E),O.isAxiosError(E)?R(((f=(t=E.response)==null?void 0:t.data)==null?void 0:f.message)||"Nie udało się zaktualizować rezerwacji"):R("Nie udało się zaktualizować rezerwacji")}}return e.jsxs("form",{onSubmit:a,className:"flex flex-col space-y-4",children:[e.jsxs("div",{className:"flex gap-5",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Imię i nazwisko"}),e.jsx("input",{type:"text",value:n.fullName,onChange:r=>l({...n,fullName:r.target.value}),className:`\r
              w-full\r
              bg-background/50\r
              border border-primary/20\r
              rounded-lg\r
              p-2\r
              outline-none\r
              focus:border-primary\r
              focus:ring-2\r
              focus:ring-primary/50\r
              transition-all\r
              duration-300\r
              text-primary\r
            `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:v.fullName})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Email"}),e.jsx("input",{type:"email",value:n.email,onChange:r=>l({...n,email:r.target.value}),className:`\r
              w-full\r
              bg-background/50\r
              border border-primary/20\r
              rounded-lg\r
              p-2\r
              outline-none\r
              focus:border-primary\r
              focus:ring-2\r
              focus:ring-primary/50\r
              transition-all\r
              duration-300\r
              text-primary\r
            `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:v.email})]})]}),e.jsxs("div",{className:"flex gap-5",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Telefon"}),e.jsx("input",{type:"text",value:n.phone,onChange:r=>l({...n,phone:r.target.value}),className:`\r
            w-full\r
            bg-background/50\r
            border border-primary/20\r
            rounded-lg\r
            p-2\r
            outline-none\r
            focus:border-primary\r
            focus:ring-2\r
            focus:ring-primary/50\r
            transition-all\r
            duration-300\r
            text-primary\r
          `}),e.jsx("p",{className:"text-red-500 text-xs min-h-4",children:v.phone})]}),e.jsxs("div",{className:"space-y-1 w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Status"}),e.jsxs("div",{className:"relative",children:[e.jsxs("button",{type:"button",onClick:r=>{r.stopPropagation(),o(!1),d(!1),x(!1),i(!1),c(t=>!t)},className:`\r
              text-left\r
              px-3\r
              flex\r
              items-center\r
              justify-between\r
              text-sm\r
              h-11\r
              w-full\r
              bg-background/50\r
              border border-primary/20\r
              rounded-lg\r
              p-2\r
              outline-none\r
              focus:border-primary\r
              focus:ring-2\r
              focus:ring-primary/50\r
              transition-all\r
              duration-300\r
              text-primary\r
              `,children:[e.jsxs("span",{children:[" ",n.status," "]}),e.jsx(_,{size:14,className:"text-foreground/30"})]}),e.jsx(N,{children:D&&e.jsx(b.div,{onClick:r=>r.stopPropagation(),initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
                  absolute\r
                  top-full\r
                  mt-1\r
                  z-50\r
                  left-0\r
                  text-sm\r
                  flex\r
                  flex-col\r
                  items-start\r
                  w-full\r
                  bg-background\r
                  border border-primary/20\r
                  rounded-lg\r
                  p-2\r
                  outline-none\r
                  focus:border-primary\r
                  focus:ring-2\r
                  focus:ring-primary/50\r
                  transition-colors\r
                  duration-300\r
                  text-primary`,children:T.filter(r=>r!==n.status).map(r=>e.jsx("button",{type:"button",className:"bg-transparent hover:bg-primary w-full text-left rounded-md p-2 hover:text-black",onClick:()=>{l({...n,status:r}),c(!1)},children:r},r))})})]})]})]}),e.jsxs("div",{className:"flex gap-5",children:[e.jsxs("div",{className:"space-y-1 w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Data"}),e.jsx("input",{value:n.reservationDate,onChange:r=>l({...n,reservationDate:r.target.value}),type:"date",className:`\r
          p-2\r
          outline-none\r
          focus:border-primary\r
          focus:ring-2\r
          focus:ring-primary/50\r
          transition-all\r
          duration-300\r
          text-primary\r
          bg-background/50\r
          border\r
          border-border\r
          rounded-lg\r
          h-11\r
          w-full\r
          px-3\r
          `})]}),e.jsxs("div",{className:"space-y-1 w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Godzina"}),e.jsxs("div",{className:"relative",children:[e.jsxs("button",{type:"button",onClick:r=>{r.stopPropagation(),c(!1),i(!1),d(!1),x(!1),o(t=>!t)},className:`\r
              text-left\r
              px-3\r
              flex\r
              items-center\r
              justify-between\r
              text-sm\r
              h-11\r
              w-full\r
              bg-background/50\r
              border border-primary/20\r
              rounded-lg\r
              p-2\r
              outline-none\r
              focus:border-primary\r
              focus:ring-2\r
              focus:ring-primary/50\r
              transition-all\r
              duration-300\r
              text-primary\r
              `,children:[e.jsxs("span",{children:[" ",n.reservationTime.slice(0,5)," "]}),e.jsx(_,{size:14,className:"text-foreground/30"})]}),e.jsx(N,{children:y&&e.jsx(b.div,{onClick:r=>r.stopPropagation(),initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
                  absolute\r
                  top-full\r
                  mt-1\r
                  z-50\r
                  left-0\r
                  text-sm\r
                  flex\r
                  flex-col\r
                  items-start\r
                  w-full\r
                  bg-background\r
                  border border-primary/20\r
                  rounded-lg\r
                  p-2\r
                  outline-none\r
                  focus:border-primary\r
                  focus:ring-2\r
                  focus:ring-primary/50\r
                  transition-colors\r
                  duration-300\r
                  text-primary`,children:g.map(r=>e.jsx("button",{type:"button",className:"bg-transparent hover:bg-primary w-full text-left rounded-md p-2 hover:text-black",onClick:()=>{l({...n,reservationTime:r}),o(!1)},children:r},r))})})]})]})]}),e.jsxs("div",{className:"flex gap-5",children:[e.jsxs("div",{className:"space-y-1 w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Rodzaj rezerwacji"}),e.jsxs("div",{className:"relative",children:[e.jsxs("button",{type:"button",onClick:r=>{r.stopPropagation(),c(!1),o(!1),d(!1),x(!1),i(t=>!t)},className:`\r
              text-left\r
              px-3\r
              flex\r
              items-center\r
              justify-between\r
              text-sm\r
              h-11\r
              w-full\r
              bg-background/50\r
              border border-primary/20\r
              rounded-lg\r
              p-2\r
              outline-none\r
              focus:border-primary\r
              focus:ring-2\r
              focus:ring-primary/50\r
              transition-all\r
              duration-300\r
              text-primary\r
              `,children:[e.jsxs("span",{children:[" ",n.duration===null?"Gralnia":"Sesja RPG"," "]}),e.jsx(_,{size:14,className:"text-foreground/30"})]}),e.jsx(N,{children:p&&e.jsx(b.div,{onClick:r=>r.stopPropagation(),initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
                  absolute\r
                  top-full\r
                  mt-1\r
                  z-50\r
                  left-0\r
                  text-sm\r
                  flex\r
                  flex-col\r
                  items-start\r
                  w-full\r
                  bg-background\r
                  border border-primary/20\r
                  rounded-lg\r
                  p-2\r
                  outline-none\r
                  focus:border-primary\r
                  focus:ring-2\r
                  focus:ring-primary/50\r
                  transition-colors\r
                  duration-300\r
                  text-primary`,children:w.map(r=>e.jsx("button",{type:"button",className:"bg-transparent hover:bg-primary w-full text-left rounded-md p-2 hover:text-black",onClick:()=>{l(r==="Gralnia"?{...n,duration:null,peopleCount:4}:{...n,duration:3,peopleCount:null}),i(!1)},children:r},r))})})]})]}),P?e.jsxs("div",{className:"space-y-1 w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Ilość godzin"}),e.jsxs("div",{className:"relative",children:[e.jsxs("button",{type:"button",onClick:r=>{r.stopPropagation(),c(!1),o(!1),i(!1),d(t=>!t)},className:`\r
                text-left\r
                px-3\r
                flex\r
                items-center\r
                justify-between\r
                text-sm\r
                h-11\r
                w-full\r
                bg-background/50\r
                border border-primary/20\r
                rounded-lg\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                focus:ring-2\r
                focus:ring-primary/50\r
                transition-all\r
                duration-300\r
                text-primary\r
                `,children:[e.jsx("span",{children:n.duration===0?"Bez limitu":n.duration===3?"3 godziny":"5 godzin"}),e.jsx(_,{size:14,className:"text-foreground/30"})]}),e.jsx(N,{children:k&&e.jsx(b.div,{onClick:r=>r.stopPropagation(),initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
                    absolute\r
                    top-full\r
                    mt-1\r
                    z-50\r
                    left-0\r
                    text-sm\r
                    flex\r
                    flex-col\r
                    items-start\r
                    w-full\r
                    bg-background\r
                    border border-primary/20\r
                    rounded-lg\r
                    p-2\r
                    outline-none\r
                    focus:border-primary\r
                    focus:ring-2\r
                    focus:ring-primary/50\r
                    transition-colors\r
                    duration-300\r
                    text-primary`,children:h.map(r=>e.jsx("button",{type:"button",className:"bg-transparent hover:bg-primary w-full text-left rounded-md p-2 hover:text-black",onClick:()=>{l({...n,duration:r.value}),d(!1)},children:r.label},r.value))})})]})]}):e.jsxs("div",{className:"space-y-1 w-full",children:[e.jsx("label",{className:"mb-1 block",children:"Ilość osób"}),e.jsxs("div",{className:"relative",children:[e.jsxs("button",{type:"button",onClick:r=>{r.stopPropagation(),c(!1),i(!1),o(!1),d(!1),x(t=>!t)},className:`\r
                text-left\r
                px-3\r
                flex\r
                items-center\r
                justify-between\r
                text-sm\r
                h-11\r
                w-full\r
                bg-background/50\r
                border border-primary/20\r
                rounded-lg\r
                p-2\r
                outline-none\r
                focus:border-primary\r
                focus:ring-2\r
                focus:ring-primary/50\r
                transition-all\r
                duration-300\r
                text-primary\r
                `,children:[e.jsxs("span",{children:[n.peopleCount," ",n.peopleCount===1?"osoba":"osoby"]}),e.jsx(_,{size:14,className:"text-foreground/30"})]}),e.jsx(N,{children:j&&e.jsx(b.div,{onClick:r=>r.stopPropagation(),initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:`\r
                    absolute\r
                    top-full\r
                    mt-1\r
                    z-50\r
                    left-0\r
                    text-sm\r
                    flex\r
                    flex-col\r
                    items-start\r
                    w-full\r
                    bg-background\r
                    border border-primary/20\r
                    rounded-lg\r
                    p-2\r
                    outline-none\r
                    focus:border-primary\r
                    focus:ring-2\r
                    focus:ring-primary/50\r
                    transition-colors\r
                    duration-300\r
                    text-primary`,children:S.map(r=>e.jsx("button",{type:"button",className:"bg-transparent hover:bg-primary w-full text-left rounded-md p-2 hover:text-black",onClick:()=>{l({...n,peopleCount:r}),x(!1)},children:r},r))})})]})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block",children:"Notatki"}),e.jsx("textarea",{value:n.notes,onChange:r=>l({...n,notes:r.target.value}),rows:2,className:`\r
            w-full\r
            bg-background/50\r
            border border-primary/20\r
            rounded-lg\r
            p-2\r
            outline-none\r
            resize-none\r
            focus:border-primary\r
            focus:ring-2\r
            focus:ring-primary/50\r
            transition-colors\r
            duration-300\r
            text-primary\r
          `})]}),e.jsx(N,{children:z&&e.jsx(b.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"text-sm text-red-400 text-center",children:z})}),e.jsxs("div",{className:"flex gap-3 pt-2",children:[e.jsx("button",{type:"button",onClick:u,className:`\r
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
          `,children:"Zapisz zmiany"})]})]})}const F=["Gralnia","Sesja RPG"],H=[1,2,3,4],ee=["Potwierdzona","Anulowana"],re=[{value:3,label:"3 godziny"},{value:5,label:"5 godzin"},{value:0,label:"Bez limitu"}],ne=["09:00","10:00","11:00","12:00","13:00","14:00","15:00"],B={fullName:"",email:"",phone:"",reservationDate:"",reservationTime:"",duration:null,peopleCount:null,notes:"",status:""};function ae({isOpen:m,reservation:n,onClose:l,onReservationUpdated:u}){const[C,P]=s.useState(!1),[w,h]=s.useState(!1),[S,g]=s.useState(!1),[T,p]=s.useState(!1),[i,k]=s.useState(!1),[d,j]=s.useState(B),x=d.duration!==null;s.useEffect(()=>{n&&j({fullName:n.fullName,email:n.email,phone:n.phone,reservationDate:n.reservationDate,reservationTime:n.reservationTime,duration:n.duration,peopleCount:n.peopleCount,notes:n.notes,status:n.status})},[n]),s.useEffect(()=>(document.body.style.overflow=m?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[m]);function y(){j(B),P(!1),h(!1),g(!1),p(!1),l()}return e.jsx(N,{children:m&&e.jsx(b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:y,className:`\r
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
          `,children:e.jsxs(b.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:o=>o.stopPropagation(),onMouseDown:o=>o.stopPropagation(),className:`\r
              w-full\r
              max-w-xl\r
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
            `,children:[e.jsx("button",{type:"button",onClick:y,className:`\r
                absolute\r
                top-3\r
                right-3\r
                p-2\r
                rounded-lg\r
                hover:bg-muted/30\r
              `,children:e.jsx(I,{size:18})}),e.jsx("div",{children:e.jsx("h2",{className:"font-heading text-center text-2xl mb-2 font-semibold",children:"Edytuj Rezerwacje"})}),e.jsx(Y,{reservation:n,formData:d,setFormData:j,closeModal:y,onReservationUpdated:u,requiresDuration:x,bookingOptions:F,durationOptions:re,peopleCountOptions:H,hourOptions:ne,statusOptions:ee,isSessionOpen:C,setIsSessionOpen:P,isTimeOpen:w,setIsTimeOpen:h,isPeopleCountOpen:S,setIsPeopleCountOpen:g,isHourOpen:T,setIsHourOpen:p,isStatusOpen:i,setIsStatusOpen:k})]})})})}function te({isOpen:m,reservation:n,onClose:l}){return s.useEffect(()=>(document.body.style.overflow=m?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[m]),e.jsx(N,{children:m&&e.jsx(b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:l,className:`\r
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
          `,children:e.jsxs(b.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.2},onClick:u=>u.stopPropagation(),onMouseDown:u=>u.stopPropagation(),className:`\r
              w-full\r
              max-w-xl\r
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
              `,children:e.jsx(I,{size:18})}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("h2",{className:"font-heading text-center text-2xl mb-2 font-semibold",children:["Rezerwacja numer ",n.id]}),e.jsxs("div",{className:"space-y-4 text-lg text-primary",children:[e.jsxs("div",{className:"flex gap-8 border-b pb-4",children:[e.jsx("h1",{children:"Rodzaj rezerwacji:"}),e.jsx("span",{className:"text-white",children:n.duration===null?"Gralnia":"Sesja RPG"})]}),e.jsxs("div",{className:"flex gap-8 border-b pb-4",children:[e.jsx("h1",{children:"Imię i nazwisko:"}),e.jsx("span",{className:"text-white",children:n.fullName})]}),e.jsxs("div",{className:"flex gap-8 border-b pb-4",children:[e.jsx("h1",{children:"Email:"}),e.jsx("span",{className:"text-white",children:n.email})]}),e.jsxs("div",{className:"flex gap-8 border-b pb-4",children:[e.jsx("h1",{children:"Numer telefonu:"}),e.jsx("span",{className:"text-white",children:n.phone})]}),e.jsxs("div",{className:"flex gap-8 border-b pb-4",children:[e.jsx("h1",{children:"Data:"}),e.jsx("span",{className:"text-white",children:new Date(n.reservationDate).toLocaleDateString("pl-PL",{day:"numeric",month:"long",year:"numeric"})})]}),e.jsxs("div",{className:"flex gap-8 border-b pb-4",children:[e.jsx("h1",{children:"Godzina:"}),e.jsx("span",{className:"text-white",children:n.reservationTime})]}),e.jsx("div",{className:"flex gap-8 border-b pb-4",children:n.duration!==null?e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Ilość godzin:"}),e.jsx("span",{className:"text-white",children:n.duration})]}):e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Ilość osób:"}),e.jsx("span",{className:"text-white",children:n.peopleCount})]})}),e.jsxs("div",{className:"flex gap-8 border-b pb-4",children:[e.jsx("h1",{children:"Status:"}),e.jsx("span",{className:"text-white",children:n.status})]}),e.jsxs("div",{className:"flex gap-8 pb-4",children:[e.jsx("h1",{children:"Notatki:"}),e.jsx("span",{className:"text-white",children:n.notes})]})]})]})]})})})}const se=[{value:"default",label:"Domyślnie"},{value:"name-asc",label:"Imię i nazwisko A-Z"},{value:"email-asc",label:"Email A-Z"},{value:"type",label:"Typ rezerwacji"},{value:"date-asc",label:"Data rosnąco"},{value:"date-desc",label:"Data malejąco"}];function he(){const[n,l]=s.useState(1),[u,C]=s.useState([]),[P,w]=s.useState(!1),[h,S]=s.useState(""),[g,T]=s.useState("default"),[p,i]=s.useState(null),[k,d]=s.useState(!1),[j,x]=s.useState(!1),[y,o]=s.useState(!1),c=[...u.filter(a=>A(a.fullName).includes(A(h))||A(a.email).includes(A(h)))];switch(g){case"name-asc":c.sort((a,r)=>a.fullName.localeCompare(r.fullName,"pl"));break;case"email-asc":c.sort((a,r)=>a.email.localeCompare(r.email));break;case"type":c.sort((a,r)=>{const t=a.duration===null?"Gralnia":"Sesja RPG",f=r.duration===null?"Gralnia":"Sesja RPG";return t.localeCompare(f,"pl")});break;case"date-asc":c.sort((a,r)=>{const t=new Date(`${a.reservationDate}T${a.reservationTime}`).getTime(),f=new Date(`${r.reservationDate}T${r.reservationTime}`).getTime();return t-f});break;case"date-desc":c.sort((a,r)=>{const t=new Date(`${a.reservationDate}T${a.reservationTime}`).getTime();return new Date(`${r.reservationDate}T${r.reservationTime}`).getTime()-t});break}const v=Math.ceil(c.length/6),G=c.slice((n-1)*6,n*6);s.useEffect(()=>{l(1)},[h,g]),s.useEffect(()=>{z()},[]);async function z(){try{w(!0);const a=await O.get("http://localhost:3000/reservations");C(a.data)}catch(a){console.error(a)}finally{w(!1)}}function R(a){switch(a){case"Oczekująca":return"bg-yellow-500/10 text-yellow-400";case"Potwierdzona":return"bg-green-500/10 text-green-400";case"Anulowana":return"bg-red-500/10 text-red-400";default:return""}}async function $(){if(p)try{await O.delete(`http://localhost:3000/reservations/${p.id}`),o(!1),i(null),z()}catch(a){console.error(a)}}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-6 min-h-[45rem] relative",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"font-heading text-3xl",children:"Rezerwacje"}),e.jsx("p",{className:"text-muted-foreground mt-2",children:"Zarządzaj rezerwacjami."})]}),e.jsx(q,{label:"Wyszukaj rezerwację",search:h,setSearch:S,sortBy:g,setSortBy:T,sortOptions:se,button:e.jsxs("button",{className:`\r
            flex\r
            items-center\r
            gap-2\r
            px-4\r
            py-3\r
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
            `,children:[e.jsx(Z,{size:16})," Dodaj rezerwację"]})}),e.jsxs("div",{className:"h-[33rem] flex flex-col justify-between",children:[e.jsxs(K,{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border text-primary text-center",children:[e.jsx("th",{className:"p-4 w-8",children:"ID"}),e.jsx("th",{className:"p-4 w-[15%]",children:"Imię i nazwisko"}),e.jsx("th",{className:"p-4 w-[20%]",children:"Email"}),e.jsx("th",{className:"p-4 w-32",children:"Typ"}),e.jsx("th",{className:"p-4 w-32",children:"Data"}),e.jsx("th",{className:"p-4 w-32",children:"Godzina"}),e.jsx("th",{className:"p-4 w-32",children:"Status"}),e.jsx("th",{className:"p-4 w-32",children:"Akcje"})]})}),e.jsx("tbody",{children:G.map(a=>e.jsxs("tr",{className:`\r
                    border-b\r
                    border-border/50\r
                    hover:bg-muted/20\r
                    text-center\r
                  `,children:[e.jsx("td",{className:"p-4",children:a.id}),e.jsx("td",{className:"p-4",children:a.fullName}),e.jsx("td",{className:"p-4",children:a.email}),e.jsx("td",{className:"p-4",children:a.duration===null?"Gralnia":`Sesja RPG ${a.duration===0?"Bez limitu":`${a.duration}h`}`}),e.jsx("td",{className:"p-4",children:new Date(a.reservationDate).toLocaleDateString("pl-PL")}),e.jsx("td",{className:"p-4",children:a.reservationTime.slice(0,5)}),e.jsx("td",{className:"p-4",children:e.jsx("span",{className:`
                        px-2 py-1 rounded-md text-xs font-medium
                        ${R(a.status)}
                      `,children:a.status})}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{onClick:()=>{i(a),d(!0)},className:`\r
                            p-2\r
                            rounded-lg\r
                            hover:bg-muted\r
                            border border-transparent\r
                            hover:border-muted-foreground/30\r
                          `,children:e.jsx(J,{size:16})}),e.jsx("button",{onClick:()=>{i(a),x(!0)},className:`\r
                            p-2\r
                            rounded-lg\r
                            hover:bg-muted\r
                            border border-transparent\r
                            hover:border-muted-foreground/30\r
                          `,children:e.jsx(Q,{size:16})}),e.jsx("button",{onClick:()=>{i(a),o(!0)},className:`\r
                            p-2\r
                            rounded-lg\r
                            hover:bg-destructive/10\r
                            hover:text-destructive\r
                            border border-transparent\r
                            hover:border-destructive/30\r
                          `,children:e.jsx(U,{size:16})})]})})]},a.id))})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-sm text-muted-foreground",children:["Strona ",n," z ",v]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>l(a=>Math.max(a-1,1)),disabled:n===1,className:`\r
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
                `,children:"Poprzednia"}),e.jsx("button",{onClick:()=>l(a=>Math.min(a+1,v)),disabled:n===v,className:`\r
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
                `,children:"Następna"})]})]})]}),u.length===0&&e.jsx("div",{className:"absolute -top-12 left-0 right-0 bottom-0",children:e.jsx(W,{})})]}),p&&e.jsxs(e.Fragment,{children:[j&&e.jsx(ae,{isOpen:j,reservation:p,onClose:()=>{x(!1),i(null)},onReservationUpdated:z}),y&&e.jsx(X,{isOpen:y,title:"Usunąć rezerwację?",description:`Czy na pewno chcesz usunąć rezerwację ${p.id}?
Tej operacji nie można cofnąć.`,onClose:()=>{o(!1),i(null)},onConfirm:$}),k&&e.jsx(te,{isOpen:k,reservation:p,onClose:()=>{d(!1),i(null)}})]})]})}export{he as default};
