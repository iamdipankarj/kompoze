import{j as e}from"./jsx-runtime-eps93zm2.js";import"./index-DhsZuJvc.js";const x="kze_shimmer___lXHal",j={shimmer:x},r=a=>{const{type:n="rectangle",width:h=100,height:m=30,size:i=50,borderRadius:g=5,className:b,...y}=a;return e.jsx("div",{className:b,...y,children:e.jsx("div",{className:j.shimmer,style:{width:n==="rectangle"?h:i,height:n==="rectangle"?m:i,borderRadius:n==="rectangle"?g:"50%"}})})};try{r.displayName="Skeleton",r.__docgenInfo={description:"",displayName:"Skeleton",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rectangle"'}]}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}const t=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{type:"rectangle",width:150,height:40,borderRadius:50}),e.jsx("br",{}),e.jsx(r,{type:"rectangle",width:300,height:30,borderRadius:5}),e.jsx("br",{}),e.jsx(r,{type:"rectangle",width:400,height:40,borderRadius:10}),e.jsx("br",{}),e.jsx(r,{type:"rectangle",width:550,height:60,borderRadius:5})]}),s=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{type:"circle",size:70}),e.jsx("br",{}),e.jsx(r,{type:"circle",size:100}),e.jsx("br",{}),e.jsx(r,{type:"circle",size:150}),e.jsx("br",{})]}),S={title:"Skeleton",component:r};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <>
      <Skeleton type='rectangle' width={150} height={40} borderRadius={50} />
      <br />
      <Skeleton type='rectangle' width={300} height={30} borderRadius={5} />
      <br />
      <Skeleton type='rectangle' width={400} height={40} borderRadius={10} />
      <br />
      <Skeleton type='rectangle' width={550} height={60} borderRadius={5} />
    </>;
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var o,u,p;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <>
      <Skeleton type='circle' size={70} />
      <br />
      <Skeleton type='circle' size={100} />
      <br />
      <Skeleton type='circle' size={150} />
      <br />
    </>;
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const f=["Rectangle","Circle"];export{s as Circle,t as Rectangle,f as __namedExportsOrder,S as default};
