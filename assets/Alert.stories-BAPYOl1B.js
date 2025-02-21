import{j as r}from"./jsx-runtime-eps93zm2.js";import{c as x}from"./index-CiFSV9U-.js";import{I as f}from"./InfoIcon-CzD-LEmd.js";import"./index-DhsZuJvc.js";import"./IconWrapper-B14Ggqlt.js";const v="kze_root___Q8f6a",h="kze_error___xKhJP",j="kze_icon___Zg6SB",o={root:v,error:h,icon:j},e=a=>{const{variant:m="success",children:d,className:_,...A}=a;return r.jsxs("div",{className:x(o.root,{[o.error]:m==="error"},_),...A,children:[r.jsx("span",{className:o.icon,children:r.jsx(f,{size:24})}),r.jsx("span",{children:d})]})};try{e.displayName="Alert",e.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},classList:{defaultValue:null,description:"",name:"classList",required:!1,type:{name:"object"}}}}}catch{}const s=()=>r.jsx(e,{variant:"success",children:"Alert Content"}),t=()=>r.jsx(e,{variant:"error",children:"Alert Content"}),C={title:"Alert",component:e};var n,c,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Alert variant='success'>
      Alert Content
    </Alert>;
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Alert variant='error'>
      Alert Content
    </Alert>;
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const E=["Success","WithError"];export{s as Success,t as WithError,E as __namedExportsOrder,C as default};
