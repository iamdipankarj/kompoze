import{j as e}from"./jsx-runtime-eps93zm2.js";import{c as i}from"./index-CiFSV9U-.js";import"./index-DhsZuJvc.js";const g="kze_icon___DWznm",C="kze_label___vAFIP",V="kze_hasPointer___677sb",N="kze_children___-wiPo",S="kze_root___kAjTD",z="kze_input___7R8ZN",a={icon:g,label:C,hasPointer:V,children:N,root:S,input:z},n=r=>{const{id:s,inputProps:d,children:u,disabled:m=!1,hasPointer:p=!0,name:h,onChange:_,required:f,checked:x,value:b,className:y,classList:j={},...k}=r,{iconClass:R,labelClass:v,childrenClass:q,inputClass:P}=j;return e.jsxs("div",{className:i(a.root,y),...k,children:[e.jsx("input",{id:s,type:"radio",className:i(a.input,P),name:h,onChange:_,disabled:m,checked:x,required:f,value:b,...d}),e.jsxs("label",{className:i(a.label,v,{[a.hasPointer]:p}),htmlFor:s,children:[e.jsx("span",{className:i(a.icon,R)}),e.jsx("div",{className:i(a.children,q),children:u})]})]})};try{n.displayName="Radio",n.__docgenInfo={description:"",displayName:"Radio",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},hasPointer:{defaultValue:null,description:"",name:"hasPointer",required:!1,type:{name:"boolean"}},classList:{defaultValue:null,description:"",name:"classList",required:!1,type:{name:"object"}}}}}catch{}const t=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(n,{id:"check_1",name:"actor",children:"Michael Scott"}),e.jsx("br",{}),e.jsx(n,{id:"check_2",name:"actor",children:"Dwight Schrute"}),e.jsx("br",{}),e.jsx(n,{id:"check_3",name:"actor",children:"Jim Halpert"}),e.jsx("br",{}),e.jsx(n,{id:"check_4",name:"actor",children:e.jsx("div",{children:"Some Content"})})]}),H={title:"Radio",component:n};var l,o,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column'
  }}>
      <Radio id='check_1' name='actor'>
        Michael Scott
      </Radio>
      <br />
      <Radio id='check_2' name='actor'>
        Dwight Schrute
      </Radio>
      <br />
      <Radio id='check_3' name='actor'>
        Jim Halpert
      </Radio>
      <br />
      <Radio id='check_4' name='actor'>
        <div>Some Content</div>
      </Radio>
    </div>;
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const I=["Simple"];export{t as Simple,I as __namedExportsOrder,H as default};
