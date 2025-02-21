import{j as r}from"./jsx-runtime-eps93zm2.js";import{r as u}from"./index-DhsZuJvc.js";import{C as a}from"./Chip-EjJXVZVL.js";import"./index-CiFSV9U-.js";const e=()=>r.jsx(a,{children:"This Month"}),s=()=>{const[l,h]=u.useState("");return r.jsx(r.Fragment,{children:["This Month","Last Month","Last 3 Months","Last 6 Months"].map(t=>r.jsx(a,{clickable:!0,onClick:()=>h(t),active:t===l,label:t,style:{margin:"0px 4px"}},t))})},S={title:"Chip",component:a};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Chip>This Month</Chip>;
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [state, setstate] = useState('');
  return <>
      {['This Month', 'Last Month', 'Last 3 Months', 'Last 6 Months'].map(item => <Chip clickable onClick={() => setstate(item)} active={item === state} label={item} style={{
      margin: '0px 4px'
    }} key={item} />)}
    </>;
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const b=["Simple","Selectable"];export{s as Selectable,e as Simple,b as __namedExportsOrder,S as default};
