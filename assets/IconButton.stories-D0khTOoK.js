import{j as e}from"./jsx-runtime-eps93zm2.js";import{r as b}from"./index-DhsZuJvc.js";import{I as s}from"./IconButton-CePqOmYz.js";import{I as t}from"./InfoIcon-CzD-LEmd.js";import{C as y}from"./CheckBox-mydisgjW.js";import"./index-CiFSV9U-.js";import"./index-BqWaXNLE.js";import"./IconWrapper-B14Ggqlt.js";const r=h=>{const[I,x]=b.useState(!1),g=B=>{x(B.target.checked)};return e.jsxs("div",{children:[e.jsx(y,{style:{display:"block",marginBottom:20},id:"check_1",onChange:g,children:"Disabled?"}),e.jsx(s,{...h,disabled:I,children:e.jsx(t,{fill:"#212121",size:24})})]})},n=()=>e.jsx(s,{color:"primary",variant:"filled",children:e.jsx(t,{fill:"#212121",size:24})}),o=()=>e.jsx(s,{variant:"outlined",size:"small",disabled:!0,children:e.jsx(t,{fill:"#212121",size:18})}),E={title:"IconButton",component:s,argTypes:{size:{control:{type:"select"}}}};var a,i,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [disabled, setDisabled] = useState(false);
  const handleChange = (e: any) => {
    setDisabled(e.target.checked);
  };
  return <div>
      <CheckBox style={{
      display: 'block',
      marginBottom: 20
    }} id='check_1' onChange={handleChange}>
        Disabled?
      </CheckBox>
      <IconButton {...args} disabled={disabled}>
        <InfoIcon fill='#212121' size={24} />
      </IconButton>
    </div>;
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <IconButton color='primary' variant='filled'>
      <InfoIcon fill='#212121' size={24} />
    </IconButton>;
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <IconButton variant='outlined' size='small' disabled>
      <InfoIcon fill='#212121' size={18} />
    </IconButton>;
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const M=["Medium","Primary","Small"];export{r as Medium,n as Primary,o as Small,M as __namedExportsOrder,E as default};
