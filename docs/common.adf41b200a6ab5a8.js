"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7693:(M,m,a)=>{a.d(m,{c:()=>i});var r=a(4083),u=a(7864),c=a(1898);const i=(o,n)=>{let e,t;const l=(h,f,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(h,f);E&&n(E)?E!==e&&(v(),d(E,p)):v()},d=(h,f)=>{e=h,t||(t=e);const p=e;(0,r.w)(()=>p.classList.add("ion-activated")),f()},v=(h=!1)=>{if(!e)return;const f=e;(0,r.w)(()=>f.classList.remove("ion-activated")),h&&t!==e&&e.click(),e=void 0};return(0,c.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:h=>l(h.currentX,h.currentY,u.a),onMove:h=>l(h.currentX,h.currentY,u.b),onEnd:()=>{v(!0),(0,u.h)(),t=void 0}})}},2225:(M,m,a)=>{a.d(m,{g:()=>r});const r=(n,e,t,l,d)=>c(n[1],e[1],t[1],l[1],d).map(v=>u(n[0],e[0],t[0],l[0],v)),u=(n,e,t,l,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*t*d+3*t+l*d))-n*Math.pow(d-1,3),c=(n,e,t,l,d)=>o((l-=d)-3*(t-=d)+3*(e-=d)-(n-=d),3*t-6*e+3*n,3*e-3*n,n).filter(h=>h>=0&&h<=1),o=(n,e,t,l)=>{if(0===n)return((n,e,t)=>{const l=e*e-4*n*t;return l<0?[]:[(-e+Math.sqrt(l))/(2*n),(-e-Math.sqrt(l))/(2*n)]})(e,t,l);const d=(3*(t/=n)-(e/=n)*e)/3,v=(2*e*e*e-9*e*t+27*(l/=n))/27;if(0===d)return[Math.pow(-v,1/3)];if(0===v)return[Math.sqrt(-d),-Math.sqrt(-d)];const h=Math.pow(v/2,2)+Math.pow(d/3,3);if(0===h)return[Math.pow(v/2,.5)-e/3];if(h>0)return[Math.pow(-v/2+Math.sqrt(h),1/3)-Math.pow(v/2+Math.sqrt(h),1/3)-e/3];const f=Math.sqrt(Math.pow(-d/3,3)),p=Math.acos(-v/(2*Math.sqrt(Math.pow(-d/3,3)))),E=2*Math.pow(f,1/3);return[E*Math.cos(p/3)-e/3,E*Math.cos((p+2*Math.PI)/3)-e/3,E*Math.cos((p+4*Math.PI)/3)-e/3]}},5062:(M,m,a)=>{a.d(m,{i:()=>r});const r=u=>u&&""!==u.dir?"rtl"===u.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(M,m,a)=>{a.r(m),a.d(m,{startFocusVisible:()=>i});const r="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=o=>{let n=[],e=!0;const t=o?o.shadowRoot:document,l=o||document.body,d=y=>{n.forEach(g=>g.classList.remove(r)),y.forEach(g=>g.classList.add(r)),n=y},v=()=>{e=!1,d([])},h=y=>{e=c.includes(y.key),e||d([])},f=y=>{if(e&&void 0!==y.composedPath){const g=y.composedPath().filter(w=>!!w.classList&&w.classList.contains("ion-focusable"));d(g)}},p=()=>{t.activeElement===l&&d([])};return t.addEventListener("keydown",h),t.addEventListener("focusin",f),t.addEventListener("focusout",p),t.addEventListener("touchstart",v),t.addEventListener("mousedown",v),{destroy:()=>{t.removeEventListener("keydown",h),t.removeEventListener("focusin",f),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",v),t.removeEventListener("mousedown",v)},setFocus:d}}},8689:(M,m,a)=>{a.d(m,{c:()=>u});var r=a(3577);const u=n=>{const e=n;let t;return{hasLegacyControl:()=>{if(void 0===t){const d=void 0!==e.label||c(e),v=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,h=(0,r.h)(e);t=!0===e.legacy||!d&&!v&&null!==h}return t}}},c=n=>null!==n.shadowRoot&&!!(i.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||o.includes(n.tagName)&&""!==n.textContent),i=["ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7864:(M,m,a)=>{a.d(m,{a:()=>i,b:()=>o,c:()=>c,d:()=>e,h:()=>n});const r={getEngine(){var t;const l=window;return l.TapticEngine||(null===(t=l.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&l.Capacitor.Plugins.Haptics},available(){var t;const l=window;return!!this.getEngine()&&("web"!==(null===(t=l.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const l=this.getEngine();if(!l)return;const d=this.isCapacitor()?t.style.toUpperCase():t.style;l.impact({style:d})},notification(t){const l=this.getEngine();if(!l)return;const d=this.isCapacitor()?t.style.toUpperCase():t.style;l.notification({style:d})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},u=()=>r.available(),c=()=>{u()&&r.selection()},i=()=>{u()&&r.selectionStart()},o=()=>{u()&&r.selectionChanged()},n=()=>{u()&&r.selectionEnd()},e=t=>{u()&&r.impact(t)}},7366:(M,m,a)=>{a.d(m,{a:()=>r,b:()=>f,c:()=>e,d:()=>p,e:()=>L,f:()=>n,g:()=>E,h:()=>c,i:()=>u,j:()=>_,k:()=>C,l:()=>t,m:()=>v,n:()=>y,o:()=>d,p:()=>o,q:()=>i,r:()=>s,s:()=>O,t:()=>h,u:()=>g,v:()=>w,w:()=>l});const r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2055:(M,m,a)=>{a.d(m,{I:()=>n,a:()=>d,b:()=>o,c:()=>f,d:()=>E,f:()=>v,g:()=>l,i:()=>t,p:()=>p,r:()=>y,s:()=>h});var r=a(5861),u=a(3577),c=a(1178);const o="ion-content",n=".ion-content-scroll-host",e=`${o}, ${n}`,t=g=>"ION-CONTENT"===g.tagName,l=function(){var g=(0,r.Z)(function*(w){return t(w)?(yield new Promise(s=>(0,u.c)(w,s)),w.getScrollElement()):w});return function(s){return g.apply(this,arguments)}}(),d=g=>g.querySelector(n)||g.querySelector(e),v=g=>g.closest(e),h=(g,w)=>t(g)?g.scrollToTop(w):Promise.resolve(g.scrollTo({top:0,left:0,behavior:w>0?"smooth":"auto"})),f=(g,w,s,_)=>t(g)?g.scrollByPoint(w,s,_):Promise.resolve(g.scrollBy({top:s,left:w,behavior:_>0?"smooth":"auto"})),p=g=>(0,c.b)(g,o),E=g=>{if(t(g)){const s=g.scrollY;return g.scrollY=!1,s}return g.style.setProperty("overflow","hidden"),!0},y=(g,w)=>{t(g)?g.scrollY=w:g.style.removeProperty("overflow")}},9240:(M,m,a)=>{a.d(m,{g:()=>u});var r=a(1178);const u=(i,o,n)=>{const e=null==i?0:i.toString().length,t=c(e,o);if(void 0===n)return t;try{return n(e,o)}catch(l){return(0,r.a)("Exception in provided `counterFormatter`.",l),t}},c=(i,o)=>`${i} / ${o}`},5234:(M,m,a)=>{a.r(m),a.d(m,{KEYBOARD_DID_CLOSE:()=>u,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>w,keyboardDidClose:()=>p,keyboardDidOpen:()=>h,keyboardDidResize:()=>f,resetKeyboardAssist:()=>e,setKeyboardClose:()=>v,setKeyboardOpen:()=>d,startKeyboardAssist:()=>t,trackViewportChanges:()=>g});const r="ionKeyboardDidShow",u="ionKeyboardDidHide";let i={},o={},n=!1;const e=()=>{i={},o={},n=!1},t=s=>{l(s),s.visualViewport&&(o=w(s.visualViewport),s.visualViewport.onresize=()=>{g(s),h()||f(s)?d(s):p(s)&&v(s)})},l=s=>{s.addEventListener("keyboardDidShow",_=>d(s,_)),s.addEventListener("keyboardDidHide",()=>v(s))},d=(s,_)=>{E(s,_),n=!0},v=s=>{y(s),n=!1},h=()=>!n&&i.width===o.width&&(i.height-o.height)*o.scale>150,f=s=>n&&!p(s),p=s=>n&&o.height===s.innerHeight,E=(s,_)=>{const O=new CustomEvent(r,{detail:{keyboardHeight:_?_.keyboardHeight:s.innerHeight-o.height}});s.dispatchEvent(O)},y=s=>{const _=new CustomEvent(u);s.dispatchEvent(_)},g=s=>{i=Object.assign({},o),o=w(s.visualViewport)},w=s=>({width:Math.round(s.width),height:Math.round(s.height),offsetTop:s.offsetTop,offsetLeft:s.offsetLeft,pageTop:s.pageTop,pageLeft:s.pageLeft,scale:s.scale})},9852:(M,m,a)=>{a.d(m,{c:()=>u});var r=a(3457);const u=c=>{let i,o,n;const e=()=>{i=()=>{n=!0,c&&c(!0)},o=()=>{n=!1,c&&c(!1)},null==r.w||r.w.addEventListener("keyboardWillShow",i),null==r.w||r.w.addEventListener("keyboardWillHide",o)};return e(),{init:e,destroy:()=>{null==r.w||r.w.removeEventListener("keyboardWillShow",i),null==r.w||r.w.removeEventListener("keyboardWillHide",o),i=o=void 0},isKeyboardVisible:()=>n}}},7741:(M,m,a)=>{a.d(m,{S:()=>u});const u={bubbles:{dur:1e3,circles:9,fn:(c,i,o)=>{const n=c*i/o-c+"ms",e=2*Math.PI*i/o;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(c,i,o)=>{const n=i/o,e=c*n-c+"ms",t=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,i)=>({r:6,style:{left:9-9*i+"px","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,i,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*i+(i<o/2?180:-180)}deg)`,"animation-delay":c*i/o-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,i,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*i+(i<o/2?180:-180)}deg)`,"animation-delay":c*i/o-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,i,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":c*i/o-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,i,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":c*i/o-c+"ms"}})}}},7539:(M,m,a)=>{a.r(m),a.d(m,{createSwipeBackGesture:()=>o});var r=a(3577),u=a(5062),c=a(1898);a(4349);const o=(n,e,t,l,d)=>{const v=n.ownerDocument.defaultView;let h=(0,u.i)(n);const p=s=>h?-s.deltaX:s.deltaX;return(0,c.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:s=>(h=(0,u.i)(n),(s=>{const{startX:C}=s;return h?C>=v.innerWidth-50:C<=50})(s)&&e()),onStart:t,onMove:s=>{const C=p(s)/v.innerWidth;l(C)},onEnd:s=>{const _=p(s),C=v.innerWidth,O=_/C,L=(s=>h?-s.velocityX:s.velocityX)(s),D=L>=0&&(L>.2||_>C/2),x=(D?1-O:O)*C;let k=0;if(x>5){const S=x/Math.abs(L);k=Math.min(S,540)}d(D,O<=0?.01:(0,r.l)(0,O,.9999),k)}})}},5642:(M,m,a)=>{a.d(m,{K:()=>i});var r=a(4755),u=a(7002),c=a(3020);let i=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=c.oAB({type:o}),o.\u0275inj=c.cJS({imports:[r.ez,u.Pc]}),o})()},3646:(M,m,a)=>{a.d(m,{G:()=>c});var r=a(3020),u=a(7002);let c=(()=>{class i{constructor(){this.titulo=""}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=r.Xpm({type:i,selectors:[["app-header"]],inputs:{titulo:"titulo"},decls:6,vars:1,consts:[["translucent","true",1,"ion-no-border"],["slot","start"],["defaultHref","/","text","Regresar","color","primary"],[1,"ion-text-capitalize"]],template:function(n,e){1&n&&(r.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),r._UZ(3,"ion-back-button",2),r.qZA(),r.TgZ(4,"ion-title",3),r._uU(5),r.qZA()()()),2&n&&(r.xp6(5),r.hij(" ",e.titulo," "))},dependencies:[u.oU,u.Sm,u.Gu,u.wd,u.sr,u.cs]}),i})()}}]);