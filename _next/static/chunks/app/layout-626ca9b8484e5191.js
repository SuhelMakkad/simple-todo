(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9905:function(e,t,r){Promise.resolve().then(r.t.bind(r,45,23)),Promise.resolve().then(r.t.bind(r,2276,23)),Promise.resolve().then(r.bind(r,1615)),Promise.resolve().then(r.bind(r,9141)),Promise.resolve().then(r.bind(r,6536)),Promise.resolve().then(r.bind(r,7325)),Promise.resolve().then(r.bind(r,5123)),Promise.resolve().then(r.bind(r,6091)),Promise.resolve().then(r.t.bind(r,6162,23))},1615:function(e,t,r){"use strict";r.d(t,{AuthProvider:function(){return f},a:function(){return m}});var n=r(2984),s=r(4986),a=r(6513),o=r(2394),i=r(7740),l=r(6402),d=r(9399);let c=()=>(0,n.jsx)("div",{className:"h-screen grid place-content-center",children:(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(d.Z,{className:"animate-spin w-4 h-4"}),"Loading..."]})}),u=(0,s.createContext)(void 0),f=e=>{let{children:t}=e,[r,d]=(0,s.useState)(),f=(0,a.useRouter)();return(0,s.useEffect)(()=>{null===r&&f.push(i._j.login);let e=(0,o.Aj)(l.I,e=>{if(e){d(e),f.push(i._j.home);return}d(null),f.push(i._j.login)});return()=>e()},[r,f]),(0,n.jsx)(u.Provider,{value:{user:r},children:void 0===r?(0,n.jsx)(c,{}):t})},m=()=>{let e=(0,s.useContext)(u);if(!e)throw Error("useAuth must be used within an AuthProvider");return e}},9141:function(e,t,r){"use strict";r.d(t,{ProfileAvatar:function(){return j}});var n=r(2984),s=r(9409),a=r(1615),o=r(4355),i=r(4986),l=r(6502),d=r(4749);let c=i.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(l.fC,{ref:t,className:(0,d.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",r),...s})});c.displayName=l.fC.displayName;let u=i.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(l.Ee,{ref:t,className:(0,d.cn)("aspect-square h-full w-full",r),...s})});u.displayName=l.Ee.displayName;let f=i.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(l.NY,{ref:t,className:(0,d.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",r),...s})});f.displayName=l.NY.displayName;let m=e=>{let[t,r]=e.split(" ");return"".concat(t?t[0]:"").concat(r?r[0]:"").trim().toUpperCase()||"U"};var p=r(2410),h=r(8125),x=r(4219),g=r(7740),v=r(6513);let b=()=>{let e="y"===(0,v.useSearchParams)().get("d")?1:"y";return(0,n.jsx)(x.z,{size:"sm",variant:"ghost",className:"h-8",asChild:!0,children:(0,n.jsx)(h.default,{href:"".concat(g._j.login,"?d=").concat(e),children:"Test data"})})},j=()=>{let{user:e}=(0,a.a)();if(!e)return(0,n.jsx)(b,{});let t=e.displayName||e.email;return(0,n.jsxs)(o.h_,{children:[(0,n.jsx)(o.$F,{children:(0,n.jsxs)(c,{className:"h-8 w-8",children:[(0,n.jsx)(u,{src:e.photoURL,alt:"@shadcn"}),(0,n.jsx)(f,{children:m(t)})]})}),(0,n.jsxs)(o.AW,{children:[(0,n.jsx)(o.Xi,{children:t}),(0,n.jsxs)(o.Xi,{onClick:p.ni,children:[(0,n.jsx)(s.Z,{className:"w-4 h-4 mr-2"}),"Logout"]})]})]})}},6536:function(e,t,r){"use strict";r.d(t,{ThemeProvider:function(){return a}});var n=r(2984),s=r(1643);function a(e){let{children:t,...r}=e;return(0,n.jsx)(s.f,{...r,children:t})}},7325:function(e,t,r){"use strict";r.d(t,{ThemeSwitch:function(){return d}});var n=r(2984),s=r(7865),a=r(2525),o=r(1643),i=r(4219),l=r(4355);let d=()=>{let{setTheme:e}=(0,o.F)();return(0,n.jsxs)(l.h_,{children:[(0,n.jsx)(l.$F,{asChild:!0,children:(0,n.jsxs)(i.z,{variant:"ghost",size:"icon",className:"h-7 w-7",children:[(0,n.jsx)(s.Z,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0"}),(0,n.jsx)(a.Z,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"}),(0,n.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,n.jsxs)(l.AW,{align:"center",children:[(0,n.jsx)(l.Xi,{onClick:()=>e("light"),children:"Light"}),(0,n.jsx)(l.Xi,{onClick:()=>e("dark"),children:"Dark"}),(0,n.jsx)(l.Xi,{onClick:()=>e("system"),children:"System"})]})]})}},4219:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return d}});var n=r(2984),s=r(4986),a=r(24),o=r(6780),i=r(4749);let l=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:o,asChild:d=!1,...c}=e,u=d?a.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(l({variant:s,size:o,className:r})),ref:t,...c})});d.displayName="Button"},4355:function(e,t,r){"use strict";r.d(t,{$F:function(){return u},AW:function(){return f},Ju:function(){return h},VD:function(){return x},Xi:function(){return m},bO:function(){return p},h_:function(){return c}});var n=r(2984),s=r(4986),a=r(509),o=r(7598),i=r(7382),l=r(3742),d=r(4749);let c=a.fC,u=a.xz;a.ZA,a.Uv,a.Tr,a.Ee,s.forwardRef((e,t)=>{let{className:r,inset:s,children:i,...l}=e;return(0,n.jsxs)(a.fF,{ref:t,className:(0,d.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",s&&"pl-8",r),...l,children:[i,(0,n.jsx)(o.Z,{className:"ml-auto h-4 w-4"})]})}).displayName=a.fF.displayName,s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.tu,{ref:t,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...s})}).displayName=a.tu.displayName;let f=s.forwardRef((e,t)=>{let{className:r,sideOffset:s=4,...o}=e;return(0,n.jsx)(a.Uv,{children:(0,n.jsx)(a.VY,{ref:t,sideOffset:s,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...o})})});f.displayName=a.VY.displayName;let m=s.forwardRef((e,t)=>{let{className:r,inset:s,...o}=e;return(0,n.jsx)(a.ck,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",r),...o})});m.displayName=a.ck.displayName;let p=s.forwardRef((e,t)=>{let{className:r,children:s,checked:o,...l}=e;return(0,n.jsxs)(a.oC,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),checked:o,...l,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(a.wU,{children:(0,n.jsx)(i.Z,{className:"h-4 w-4"})})}),s]})});p.displayName=a.oC.displayName,s.forwardRef((e,t)=>{let{className:r,children:s,...o}=e;return(0,n.jsxs)(a.Rk,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...o,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(a.wU,{children:(0,n.jsx)(l.Z,{className:"h-2 w-2 fill-current"})})}),s]})}).displayName=a.Rk.displayName;let h=s.forwardRef((e,t)=>{let{className:r,inset:s,...o}=e;return(0,n.jsx)(a.__,{ref:t,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",r),...o})});h.displayName=a.__.displayName;let x=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.Z0,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",r),...s})});x.displayName=a.Z0.displayName},5123:function(e,t,r){"use strict";r.d(t,{Toaster:function(){return o}});var n=r(2984),s=r(1643),a=r(1943);let o=e=>{let{...t}=e,{theme:r="system"}=(0,s.F)();return(0,n.jsx)(a.x7,{theme:r,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})}},6091:function(e,t,r){"use strict";r.d(t,{E:function(){return o},QueryProvider:function(){return i}});var n=r(2984),s=r(6940),a=r(2006);let o=new s.S,i=e=>{let{children:t}=e;return(0,n.jsx)(a.aH,{client:o,children:t})}},7740:function(e,t,r){"use strict";r.d(t,{Em:function(){return a},Q_:function(){return s},_j:function(){return i},wK:function(){return o}});var n=r(2014);let s={TODO:{value:"todo",label:"Todo"},IN_PROGRESS:{value:"in-progress",label:"In Progress"},DONE:{value:"done",label:"Done"}},a=Object.values(s).reduce((e,t)=>(e.push(t),e),[]),o=Object.values(s).reduce((e,t)=>(e[t.value]=t.label,e),{}),i={home:"/",login:"/login"};n.env.BASE_PATH},2410:function(e,t,r){"use strict";r.d(t,{fZ:function(){return i},nS:function(){return a},ni:function(){return o}});var n=r(2394),s=r(6402);let a=()=>{let e=new n.hJ;(0,n.rh)(s.I,e)},o=()=>{(0,n.w7)(s.I)},i=(e,t)=>(0,n.e5)(s.I,e,t)},6402:function(e,t,r){"use strict";r.d(t,{I:function(){return i},db:function(){return l}});var n=r(2829),s=r(2394),a=r(976);let o=(0,n.ZF)({apiKey:"AIzaSyCj05Ks7FcjSPi9fSuCx6j9EZQMMZvhi4Q",authDomain:"simple-easy-todo.firebaseapp.com",projectId:"simple-easy-todo",storageBucket:"simple-easy-todo.appspot.com",messagingSenderId:"445045831618",appId:"1:445045831618:web:19607ab032c2873c8b885b",measurementId:"G-TWD4F77YWK"}),i=(0,s.v0)(o),l=(0,a.ad)(o)},4749:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(3597),s=r(2961);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}},6162:function(){}},function(e){e.O(0,[381,12,231,4,310,733,645,563,744],function(){return e(e.s=9905)}),_N_E=e.O()}]);