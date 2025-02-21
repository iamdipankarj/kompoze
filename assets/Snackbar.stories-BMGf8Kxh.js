import{j as e}from"./jsx-runtime-eps93zm2.js";import{R as p,r as a}from"./index-DhsZuJvc.js";import{c as C}from"./index-CiFSV9U-.js";import{S as N}from"./ShieldIcon-Ximyk83q.js";import{B as _}from"./Button-B05dNMW4.js";import"./IconWrapper-B14Ggqlt.js";import"./index-BqWaXNLE.js";const z="kze_root___Bpsfh",A="kze_message___Xwrtg",B="kze_adornment___rNrsi",s={root:z,message:A,adornment:B};typeof window<"u"?p.useLayoutEffect:p.useEffect;function w(n){const t=a.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return a.useEffect(()=>{t.current=n},[n]),a.useCallback(()=>{const o=t.current;return o()},[t])}const r=n=>{const{autoHide:t=!1,autoHideDuration:o=6e3,action:u=null,startAdornment:d=null,onExit:m,children:h,className:E,...R}=n,[b,j]=a.useState(!0),v=w(i=>{m&&m(i,"timeout")});return a.useEffect(()=>{const i=setTimeout(()=>{t&&(v(),j(!1))},o);return()=>clearTimeout(i)},[]),b?e.jsxs("div",{className:C(s.root,E),role:"alert",...R,children:[d?e.jsx("span",{className:s.adornment,children:d}):null,e.jsx("span",{className:s.message,children:h}),u?e.jsx("div",{className:s.action,children:u}):null]}):null};try{r.displayName="Snackbar",r.__docgenInfo={description:"",displayName:"Snackbar",props:{action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ReactNode"}},autoHide:{defaultValue:null,description:"",name:"autoHide",required:!1,type:{name:"boolean"}},autoHideDuration:{defaultValue:null,description:"",name:"autoHideDuration",required:!1,type:{name:"number"}},startAdornment:{defaultValue:null,description:"",name:"startAdornment",required:!1,type:{name:"ReactNode"}},onExit:{defaultValue:null,description:"",name:"onExit",required:!1,type:{name:"((e: SyntheticEvent<any, Event>, reason?: SnackExitReason) => void)"}}}}}catch{}const c=()=>e.jsx(r,{action:e.jsx(_,{size:"small",variant:"text",color:"primary",onClick:()=>console.log("you clicked me!"),children:"RETRY"}),children:"Snack Message"}),l=()=>{const n=(t,o)=>{console.log(t),console.log(o)};return e.jsx(r,{startAdornment:e.jsx(N,{fill:"green",size:24}),action:e.jsx(_,{size:"small",variant:"text",color:"primary",onClick:()=>console.log("you clicked me!"),children:"RETRY"}),onExit:n,children:"Snack Message"})},I={title:"Snackbar",component:r};var f,k,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Snackbar action={<Button size='small' variant='text' color='primary' onClick={() => console.log('you clicked me!')}>
          RETRY
        </Button>}>
      Snack Message
    </Snackbar>;
}`,...(x=(k=c.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var g,y,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const handleClose = (e: any, reason: any) => {
    console.log(e);
    console.log(reason);
  };
  return <Snackbar startAdornment={<ShieldIcon fill='green' size={24} />} action={<Button size='small' variant='text' color='primary' onClick={() => console.log('you clicked me!')}>
          RETRY
        </Button>} onExit={handleClose}>
      Snack Message
    </Snackbar>;
}`,...(S=(y=l.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const W=["Simple","WithAdornment"];export{c as Simple,l as WithAdornment,W as __namedExportsOrder,I as default};
