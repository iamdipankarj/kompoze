import{j as t}from"./jsx-runtime-eps93zm2.js";import{r as o}from"./index-DhsZuJvc.js";import{C as h}from"./CheckBox-mydisgjW.js";import"./index-CiFSV9U-.js";const c=()=>{const[e,s]=o.useState(!1);o.useEffect(()=>{console.log(e)});const d=r=>{s(r.target.checked)};return t.jsxs("div",{children:[t.jsx(h,{id:"check_1",onChange:d,checked:e,children:"Add People"}),t.jsx("div",{children:e?"checked":"not checked"})]})},n=()=>{const[e,s]=o.useState(!0);o.useEffect(()=>{console.log(e)});const d=r=>{s(r.target.checked)};return t.jsx(h,{id:"check_2",onChange:d,checked:e,children:"Add People"})},f={title:"CheckBox",component:h};var a,k,l;c.parameters={...c.parameters,docs:{...(a=c.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    console.log(checked);
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return <div>
      <CheckBox id='check_1' onChange={handleChange} checked={checked}>
        Add People
      </CheckBox>
      <div>
        {checked ? 'checked' : 'not checked'}
      </div>
    </div>;
}`,...(l=(k=c.parameters)==null?void 0:k.docs)==null?void 0:l.source}}};var C,i,u;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(true);
  useEffect(() => {
    console.log(checked);
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return <CheckBox id='check_2' onChange={handleChange} checked={checked}>
      Add People
    </CheckBox>;
}`,...(u=(i=n.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const E=["Simple","CustomColor"];export{n as CustomColor,c as Simple,E as __namedExportsOrder,f as default};
