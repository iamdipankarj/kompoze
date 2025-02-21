import{j as e}from"./jsx-runtime-eps93zm2.js";import{r as V}from"./index-DhsZuJvc.js";import{T as r}from"./TextField-DGFrhiqs.js";import{I as u}from"./InfoIcon-CzD-LEmd.js";import"./index-CiFSV9U-.js";import"./index-BqWaXNLE.js";import"./IconWrapper-B14Ggqlt.js";const t=()=>{const[c,m]=V.useState(""),p=d=>{m(d.target.value)};return e.jsx(r,{label:"Name",value:c,onChange:p})},a=()=>{const[c,m]=V.useState(""),p=d=>{m(d.target.value)};return e.jsx(r,{label:"Name",value:c,onChange:p,disabled:!0})},n=()=>e.jsx(r,{placeholder:"Name",helperText:"Helper Text"}),s=()=>e.jsx(r,{label:"Name",helperText:"Helper Text",error:!0}),o=()=>e.jsx(r,{startAdornment:e.jsx(u,{fill:"green",size:24}),label:"Name",helperText:"Helper Text"}),l=()=>e.jsx(r,{startAdornment:e.jsx(u,{fill:"green",size:24}),endAdornment:e.jsx(u,{size:24}),placeholder:"Name",helperText:"Helper Text"}),k={title:"TextField",component:r};var i,x,h;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <TextField label='Name' value={value} onChange={handleChange} />;
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var T,g,v;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <TextField label='Name' value={value} onChange={handleChange} disabled />;
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,f,b;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <TextField placeholder='Name' helperText='Helper Text' />;
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var C,H,N;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <TextField label='Name' helperText='Helper Text' error />;
}`,...(N=(H=s.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var j,E,I;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <TextField startAdornment={<InfoIcon fill='green' size={24} />} label='Name' helperText='Helper Text' />;
}`,...(I=(E=o.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var A,F,z;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <TextField startAdornment={<InfoIcon fill='green' size={24} />} endAdornment={<InfoIcon size={24} />} placeholder='Name' helperText='Helper Text' />;
}`,...(z=(F=l.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};const q=["Simple","Disabled","WithHelperText","WithError","StartAdornment","EndAdornment"];export{a as Disabled,l as EndAdornment,t as Simple,o as StartAdornment,s as WithError,n as WithHelperText,q as __namedExportsOrder,k as default};
