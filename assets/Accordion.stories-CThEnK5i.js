import{j as e}from"./jsx-runtime-eps93zm2.js";import{r as p}from"./index-DhsZuJvc.js";import{c as o}from"./index-CiFSV9U-.js";import{t as D}from"./theme-Cd5TyqVH.js";import{C as K}from"./CaretRightIcon-4xoKJHDv.js";import{I as u}from"./InfoIcon-CzD-LEmd.js";import{a as b,L as m}from"./ListItem-DcB6WMHk.js";import{P as g}from"./ProfileFilledIcon-rB5yg0JB.js";import"./IconWrapper-B14Ggqlt.js";const M="kze_icon___xfHxX",Q="kze_iconStart___-HLxa",X="kze_direction___B10RM",B="kze_iconActive___2ot4c",W="kze_container___YIhlM",Y="kze_label___Ss7uW",G="kze_active___cX8Oj",J="kze_region___ut1tr",n={icon:M,iconStart:Q,direction:X,iconActive:B,container:W,label:Y,active:G,region:J},t=a=>{const{expanded:c=!1,children:l,label:i,startIcon:x=null,className:A,classList:v={},onOpen:S=()=>{},onClose:z=()=>{},endIcon:L,...w}=a,{childrenClass:N,root:P,container:V,active:q,iconStart:E,labelClass:F,iconEnd:R,iconEndActive:O,region:T}=v,[s,y]=p.useState(!1);p.useEffect(()=>{c!==null&&y(c)},[c]),p.useEffect(()=>{s?z():S()},[s]);const f=()=>{y(!s)},H=U=>{U.which===13&&f()};return e.jsxs("div",{className:o(n.root,P,A),"aria-expanded":s,"aria-label":i,...w,children:[e.jsxs("div",{tabIndex:0,role:"button",onClick:f,onKeyPress:H,className:o(n.container,V,{[n.active]:s,[q]:s}),children:[x&&e.jsx("span",{className:o(n.icon,n.iconStart,E),children:x}),e.jsx("h3",{className:o(n.label,F),children:i}),e.jsx("span",{className:o(n.icon,n.direction,R,{[n.iconActive]:s,[O]:s}),children:L||e.jsx(K,{size:24,fill:D.greenPrimary})})]}),s?e.jsx("div",{className:o(n.region,T),children:e.jsx("div",{role:"region",className:N,children:l})}):null]})};try{t.displayName="Accordion",t.__docgenInfo={description:"",displayName:"Accordion",props:{expanded:{defaultValue:null,description:"",name:"expanded",required:!1,type:{name:"boolean | null"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},classList:{defaultValue:null,description:"",name:"classList",required:!1,type:{name:"object"}}}}}catch{}const r=()=>e.jsxs("div",{children:[e.jsx(t,{startIcon:e.jsx(u,{size:24}),label:"Document Checklist",children:e.jsxs(b,{gutter:!0,children:[e.jsx(m,{secondary:"Credits"}),e.jsx(m,{secondary:"Account Statement"})]})}),e.jsx(t,{startIcon:e.jsx(g,{size:24}),label:"Security & Privacy Policy",children:e.jsx("span",{style:{padding:10,display:"block"},children:"How we protect your personal and financial information."})}),e.jsx(t,{classList:{childrenClass:"mySpecialClass"},startIcon:e.jsx(u,{size:24}),label:"Interest Rates & Fees",children:e.jsx("span",{style:{padding:10,display:"block"},children:"Understand how our loan interest rates and fees work."})})]}),d=()=>{const[a,c]=p.useState(null),l=i=>x=>{c(i===a?null:i)};return e.jsxs("div",{children:[e.jsx(t,{onClick:l("panel1"),expanded:a==="panel1",startIcon:e.jsx(u,{size:24}),label:"Frequently Asked Questions",children:e.jsxs(b,{gutter:!0,children:[e.jsx(m,{secondary:"Credits"}),e.jsx(m,{secondary:"Account Statement"})]})}),e.jsx(t,{onClick:l("panel2"),expanded:a==="panel2",startIcon:e.jsx(g,{size:24}),label:"Customer",children:e.jsx("span",{style:{padding:10,display:"block"},children:"Customer Content"})}),e.jsx(t,{onClick:l("panel3"),expanded:a==="panel3",startIcon:e.jsx(u,{size:24}),label:"Transactions",children:e.jsx("span",{style:{padding:10,display:"block"},children:"Transactions Content"})})]})},le={title:"Accordion",component:t};var _,I,h;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <div>
      <Accordion startIcon={<InfoIcon size={24} />} label='Document Checklist'>
        <ListView gutter>
          <ListItem secondary='Credits' />
          <ListItem secondary='Account Statement' />
        </ListView>
      </Accordion>
      <Accordion startIcon={<ProfileFilledIcon size={24} />} label='Security & Privacy Policy'>
        <span style={{
        padding: 10,
        display: 'block'
      }}>How we protect your personal and financial information.</span>
      </Accordion>
      <Accordion classList={{
      childrenClass: 'mySpecialClass'
    }} startIcon={<InfoIcon size={24} />} label='Interest Rates & Fees'>
        <span style={{
        padding: 10,
        display: 'block'
      }}>Understand how our loan interest rates and fees work.</span>
      </Accordion>
    </div>;
}`,...(h=(I=r.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var C,j,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<string | null>(null);
  const handleClick = (panel: string) => (_e: any) => {
    setSelected(panel === selected ? null : panel);
  };
  return <div>
      <Accordion onClick={handleClick('panel1')} expanded={selected === 'panel1'} startIcon={<InfoIcon size={24} />} label='Frequently Asked Questions'>
        <ListView gutter>
          <ListItem secondary='Credits' />
          <ListItem secondary='Account Statement' />
        </ListView>
      </Accordion>
      <Accordion onClick={handleClick('panel2')} expanded={selected === 'panel2'} startIcon={<ProfileFilledIcon size={24} />} label='Customer'>
        <span style={{
        padding: 10,
        display: 'block'
      }}>Customer Content</span>
      </Accordion>
      <Accordion onClick={handleClick('panel3')} expanded={selected === 'panel3'} startIcon={<InfoIcon size={24} />} label='Transactions'>
        <span style={{
        padding: 10,
        display: 'block'
      }}>Transactions Content</span>
      </Accordion>
    </div>;
}`,...(k=(j=d.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const ie=["Uncontrolled","Controlled"];export{d as Controlled,r as Uncontrolled,ie as __namedExportsOrder,le as default};
