var K=Object.defineProperty;var d=(e,t)=>K(e,"name",{value:t,configurable:!0});import{T as g}from"./Text.788e2e34.js";import{H as P}from"./Heading.5a7353ba.js";import{_ as N,$ as W,a as w}from"./index.module.9393f1ed.js";import{j as m,F as k,r as o,a as H}from"./jsx-runtime.4a1b0d34.js";import{r as V}from"./index.0a37b0c0.js";import{I as Y,r as F}from"./IconBase.esm.156b4a2c.js";import"./clsx.m.256e9345.js";import"./iframe.31dc95c9.js";try{g.displayName="Text",g.__docgenInfo={description:"",displayName:"Text",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Texts/index.tsx#Text"]={docgenInfo:g.__docgenInfo,name:"Text",path:"src/components/Texts/index.tsx#Text"})}catch{}try{P.displayName="Heading",P.__docgenInfo={description:"",displayName:"Heading",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Texts/index.tsx#Heading"]={docgenInfo:P.__docgenInfo,name:"Heading",path:"src/components/Texts/index.tsx#Heading"})}catch{}var C=new Map;C.set("bold",function(e){return m(k,{children:m("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});C.set("duotone",function(e){return m(k,{children:m("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});C.set("fill",function(){return m(k,{children:m("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});C.set("light",function(e){return m(k,{children:m("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});C.set("thin",function(e){return m(k,{children:m("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});C.set("regular",function(e){return m(k,{children:m("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var X=d(function(t,n){return F(t,n,C)},"renderPath"),M=o.exports.forwardRef(function(e,t){return m(Y,{...Object.assign({ref:t},e,{renderPath:X})})});M.displayName="Check";const Z=M;function G(e,t){const n=o.exports.createContext(t);function r(c){const{children:u,...l}=c,a=o.exports.useMemo(()=>l,Object.values(l));return o.exports.createElement(n.Provider,{value:a},u)}d(r,"Provider");function s(c){const u=o.exports.useContext(n);if(u)return u;if(t!==void 0)return t;throw new Error(`\`${c}\` must be used within \`${e}\``)}return d(s,"useContext"),r.displayName=e+"Provider",[r,s]}d(G,"$c512c27ab02ef895$export$fd42f52fd3ae1109");function J(e,t=[]){let n=[];function r(c,u){const l=o.exports.createContext(u),a=n.length;n=[...n,u];function i(f){const{scope:p,children:h,...b}=f,E=(p==null?void 0:p[e][a])||l,A=o.exports.useMemo(()=>b,Object.values(b));return o.exports.createElement(E.Provider,{value:A},h)}d(i,"Provider");function x(f,p){const h=(p==null?void 0:p[e][a])||l,b=o.exports.useContext(h);if(b)return b;if(u!==void 0)return u;throw new Error(`\`${f}\` must be used within \`${c}\``)}return d(x,"useContext"),i.displayName=c+"Provider",[i,x]}d(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const s=d(()=>{const c=n.map(u=>o.exports.createContext(u));return d(function(l){const a=(l==null?void 0:l[e])||c;return o.exports.useMemo(()=>({[`__scope${e}`]:{...l,[e]:a}}),[l,a])},"useScope")},"createScope");return s.scopeName=e,[r,Q(s,...t)]}d(J,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function Q(...e){const t=e[0];if(e.length===1)return t;const n=d(()=>{const r=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return d(function(c){const u=r.reduce((l,{useScope:a,scopeName:i})=>{const f=a(c)[`__scope${i}`];return{...l,...f}},{});return o.exports.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}d(Q,"$c512c27ab02ef895$var$composeContextScopes");function L(e,t,{checkForDefaultPrevented:n=!0}={}){return d(function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)},"handleEvent")}d(L,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function B(e){const t=o.exports.useRef(e);return o.exports.useEffect(()=>{t.current=e}),o.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}d(B,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function ee({prop:e,defaultProp:t,onChange:n=d(()=>{},"onChange")}){const[r,s]=te({defaultProp:t,onChange:n}),c=e!==void 0,u=c?e:r,l=B(n),a=o.exports.useCallback(i=>{if(c){const f=typeof i=="function"?i(e):i;f!==e&&l(f)}else s(i)},[c,e,s,l]);return[u,a]}d(ee,"$71cd76cc60e0454e$export$6f32135080cb4c3");function te({defaultProp:e,onChange:t}){const n=o.exports.useState(e),[r]=n,s=o.exports.useRef(r),c=B(t);return o.exports.useEffect(()=>{s.current!==r&&(c(r),s.current=r)},[r,s,c]),n}d(te,"$71cd76cc60e0454e$var$useUncontrolledState");function ne(e){const t=o.exports.useRef({value:e,previous:e});return o.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}d(ne,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const T=Boolean(globalThis==null?void 0:globalThis.document)?o.exports.useLayoutEffect:()=>{};function oe(e){const[t,n]=o.exports.useState(void 0);return T(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let u,l;if("borderBoxSize"in c){const a=c.borderBoxSize,i=Array.isArray(a)?a[0]:a;u=i.inlineSize,l=i.blockSize}else u=e.offsetWidth,l=e.offsetHeight;n({width:u,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}d(oe,"$db6c3485150b8e66$export$1ab7ae714698c4b8");const re=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],z=re.reduce((e,t)=>{const n=o.exports.forwardRef((r,s)=>{const{asChild:c,...u}=r,l=c?W:t;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(l,N({},u,{ref:s}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),se="Label",[Ae,ce]=G(se,{id:void 0,controlRef:{current:null}}),ae=d(e=>{const t=ce("LabelConsumer"),{controlRef:n}=t;return o.exports.useEffect(()=>{e&&(n.current=e)},[e,n]),t.id},"$b73a6c6685e72184$export$feddbbf47baabdb9");function ie(e,t){return o.exports.useReducer((n,r)=>{const s=t[n][r];return s!=null?s:n},e)}d(ie,"$fe963b355347cc68$export$3e6543de14f8614f");const D=d(e=>{const{present:t,children:n}=e,r=de(t),s=typeof n=="function"?n({present:r.isPresent}):o.exports.Children.only(n),c=w(r.ref,s.ref);return typeof n=="function"||r.isPresent?o.exports.cloneElement(s,{ref:c}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");D.displayName="Presence";function de(e){const[t,n]=o.exports.useState(),r=o.exports.useRef({}),s=o.exports.useRef(e),c=o.exports.useRef("none"),u=e?"mounted":"unmounted",[l,a]=ie(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.exports.useEffect(()=>{const i=y(r.current);c.current=l==="mounted"?i:"none"},[l]),T(()=>{const i=r.current,x=s.current;if(x!==e){const p=c.current,h=y(i);e?a("MOUNT"):h==="none"||(i==null?void 0:i.display)==="none"?a("UNMOUNT"):a(x&&p!==h?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,a]),T(()=>{if(t){const i=d(f=>{const h=y(r.current).includes(f.animationName);f.target===t&&h&&V.exports.flushSync(()=>a("ANIMATION_END"))},"handleAnimationEnd"),x=d(f=>{f.target===t&&(c.current=y(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",x),t.addEventListener("animationcancel",i),t.addEventListener("animationend",i),()=>{t.removeEventListener("animationstart",x),t.removeEventListener("animationcancel",i),t.removeEventListener("animationend",i)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:o.exports.useCallback(i=>{i&&(r.current=getComputedStyle(i)),n(i)},[])}}d(de,"$921a889cee6df7e8$var$usePresence");function y(e){return(e==null?void 0:e.animationName)||"none"}d(y,"$921a889cee6df7e8$var$getAnimationName");const U="Checkbox",[ue,Oe]=J(U),[le,fe]=ue(U),pe=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,"aria-labelledby":r,name:s,checked:c,defaultChecked:u,required:l,disabled:a,value:i="on",onCheckedChange:x,...f}=e,[p,h]=o.exports.useState(null),b=w(t,$=>h($)),E=ae(p),A=r||E,O=o.exports.useRef(!1),R=p?Boolean(p.closest("form")):!0,[_=!1,q]=ee({prop:c,defaultProp:u,onChange:x});return o.exports.createElement(le,{scope:n,state:_,disabled:a},o.exports.createElement(z.button,N({type:"button",role:"checkbox","aria-checked":v(_)?"mixed":_,"aria-labelledby":A,"aria-required":l,"data-state":j(_),"data-disabled":a?"":void 0,disabled:a,value:i},f,{ref:b,onKeyDown:L(e.onKeyDown,$=>{$.key==="Enter"&&$.preventDefault()}),onClick:L(e.onClick,$=>{q(I=>v(I)?!0:!I),R&&(O.current=$.isPropagationStopped(),O.current||$.stopPropagation())})})),R&&o.exports.createElement(he,{control:p,bubbles:!O.current,name:s,value:i,checked:_,required:l,disabled:a,style:{transform:"translateX(-100%)"}}))}),me="CheckboxIndicator",xe=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...s}=e,c=fe(me,n);return o.exports.createElement(D,{present:r||v(c.state)||c.state===!0},o.exports.createElement(z.span,N({"data-state":j(c.state),"data-disabled":c.disabled?"":void 0},s,{ref:t,style:{pointerEvents:"none",...e.style}})))}),he=d(e=>{const{control:t,checked:n,bubbles:r=!0,...s}=e,c=o.exports.useRef(null),u=ne(n),l=oe(t);return o.exports.useEffect(()=>{const a=c.current,i=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(i,"checked").set;if(u!==n&&f){const p=new Event("click",{bubbles:r});a.indeterminate=v(n),f.call(a,v(n)?!1:n),a.dispatchEvent(p)}},[u,n,r]),o.exports.createElement("input",N({type:"checkbox","aria-hidden":!0,defaultChecked:v(n)?!1:n},s,{tabIndex:-1,ref:c,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function v(e){return e==="indeterminate"}d(v,"$e698a72e93240346$var$isIndeterminate");function j(e){return v(e)?"indeterminate":e?"checked":"unchecked"}d(j,"$e698a72e93240346$var$getState");const be=pe,$e=xe,S=d(({})=>m(be,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded",children:m($e,{asChild:!0,children:m(Z,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})}),"Checkbox");try{S.displayName="Checkbox",S.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/index.tsx#Checkbox"]={docgenInfo:S.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/index.tsx#Checkbox"})}catch{}const Pe={title:"Components/Checkbox",component:S,args:{},argTypes:{},decorators:[e=>H("div",{className:"flex items-center gap-2",children:[e(),m(g,{size:"sm",children:"Checkbox example"})]})]},Te={},Re=["Default"];export{Te as Default,Re as __namedExportsOrder,Pe as default};
//# sourceMappingURL=Checkbox.stories.2c56b464.js.map
