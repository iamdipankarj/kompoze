import{j as a}from"./jsx-runtime-eps93zm2.js";import{c as D}from"./index-CiFSV9U-.js";import"./index-DhsZuJvc.js";const v="kze_root___trcUV",N="kze_circularRotate___dB1sr",j="kze_svg___XPHwn",A="kze_circle___zdwi7",R="kze_circularDash___Zot-3",o={root:v,circularRotate:N,svg:j,circle:A,circularDash:R},i=n=>{const{size:c=40,color:k="#1c873b",className:x,duration:l=1400,strokeWidth:b=3.6,...w}=n;return a.jsx("span",{className:D(o.root,x),"aria-busy":"true",style:{animationDuration:`${l}ms`},...w,children:a.jsx("svg",{width:c,height:c,className:o.svg,viewBox:"22 22 44 44",children:a.jsx("circle",{className:o.circle,cx:"44",cy:"44",r:"20.2",fill:"none",stroke:k,strokeWidth:b,style:{animationDuration:`${l}ms`}})})})};try{i.displayName="Spinner",i.__docgenInfo={description:"A simple `<Spinner />` component inspired by material UI\n\nSee [a11y Specification](https://www.digitala11y.com/aria-busy-state/) for WAI-ARIA details",displayName:"Spinner",props:{size:{defaultValue:null,description:"The size of the spinner in pixels (px)",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},duration:{defaultValue:null,description:"Animation duration in milliseconds (number)",name:"duration",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:null,description:"",name:"strokeWidth",required:!1,type:{name:"number"}}}}}catch{}const B={title:"Spinner",component:i,parameters:{layout:"centered"}},e={args:{}},r={args:{size:20}},s={args:{size:80,strokeWidth:2}},t={args:{size:80,color:"tomato",strokeWidth:2}};var m,d,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,_,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 20
  }
}`,...(h=(_=r.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var g,z,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 80,
    strokeWidth: 2
  }
}`,...(y=(z=s.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var S,f,W;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 80,
    color: 'tomato',
    strokeWidth: 2
  }
}`,...(W=(f=t.parameters)==null?void 0:f.docs)==null?void 0:W.source}}};const C=["Simple","WithSize","WithStrokeWidth","WithCustomDuration"];export{e as Simple,t as WithCustomDuration,r as WithSize,s as WithStrokeWidth,C as __namedExportsOrder,B as default};
