import{j as t}from"./jsx-runtime-eps93zm2.js";import{c as v}from"./index-CiFSV9U-.js";import"./index-DhsZuJvc.js";const b="kze_root___PebSf",m="kze_h1___pJqnF",T="kze_h2___8YqGv",f="kze_h3___DT-DL",x="kze_h4___UsocF",k="kze_h5___1vgAH",z="kze_h6___PXt2H",j="kze_subtitle1___LAExd",B="kze_subtitle2___KXl5J",H="kze_subtitle3___WJA1p",S="kze_subtitle4___YkpGi",q="kze_body1___-TXLl",W="kze_body2___uKYz3",C="kze_button1___oJKWx",J="kze_button2___wYCra",V="kze_caption1___xaCJb",D="kze_caption2___gln43",P="kze_colorDefault___GoWgH",L="kze_colorPrimary___c-aab",X="kze_colorSecondary___XiQGJ",A="kze_gutterBottom___lfX7F",E="kze_noWrap___HnJKd",n={root:b,h1:m,h2:T,h3:f,h4:x,h5:k,h6:z,subtitle1:j,subtitle2:B,subtitle3:H,subtitle4:S,body1:q,body2:W,button1:C,button2:J,caption1:V,caption2:D,colorDefault:P,colorPrimary:L,colorSecondary:X,gutterBottom:A,noWrap:E},F={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",subtitle3:"h6",subtitle4:"h6",body1:"p",body2:"p",button1:"span",button2:"span",caption1:"span",caption2:"span"},e=({component:r,children:c,className:s,color:o="default",gutterBottom:y=!1,noWrap:h=!1,align:_="inherit",...g})=>{const{variant:i="body1"}=g,d=r||F[i]||"p";return t.jsx(d,{className:v(n.root,n[i],s,{[n.colorDefault]:o==="default",[n.colorPrimary]:o==="primary",[n.colorSecondary]:o==="secondary",[n.gutterBottom]:y,[n.noWrap]:h}),style:{textAlign:_},children:c})};try{e.displayName="Typography",e.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"inherit"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"subtitle1"'},{value:'"subtitle2"'},{value:'"subtitle3"'},{value:'"subtitle4"'},{value:'"body1"'},{value:'"body2"'},{value:'"caption1"'},{value:'"caption2"'},{value:'"button1"'},{value:'"button2"'},{value:'"overline"'}]}},align:{defaultValue:{value:"inherit"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'}]}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"secondary"'},{value:'"bahama"'},{value:'"grayscale"'}]}},gutterBottom:{defaultValue:{value:"false"},description:"",name:"gutterBottom",required:!1,type:{name:"boolean"}},noWrap:{defaultValue:{value:"false"},description:"",name:"noWrap",required:!1,type:{name:"boolean"}},classList:{defaultValue:null,description:"",name:"classList",required:!1,type:{name:"object"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}}}catch{}const a=()=>t.jsxs(t.Fragment,{children:[t.jsx(e,{variant:"h1",align:"center",children:"H1"}),t.jsx(e,{variant:"h2",align:"right",children:"H2"}),t.jsx(e,{variant:"h2",align:"left",children:"H3"}),t.jsx(e,{variant:"h4",align:"center",gutterBottom:!0,children:"H4"}),t.jsx(e,{variant:"h5",align:"center",gutterBottom:!0,children:"H5"}),t.jsx(e,{variant:"h6",align:"center",gutterBottom:!0,children:"H6"}),t.jsx(e,{variant:"subtitle1",align:"center",children:"Subtitle 1"}),t.jsx(e,{variant:"subtitle2",align:"center",children:"Subtitle 2"}),t.jsx(e,{variant:"subtitle3",align:"center",children:"Subtitle 3"}),t.jsx(e,{variant:"subtitle4",align:"center",children:"Subtitle 4"}),t.jsx(e,{variant:"body1",align:"center",children:"Body 1"}),t.jsx(e,{variant:"body2",align:"center",children:"Body 2"}),t.jsx(e,{component:"p",variant:"button1",align:"center",children:"Button 1"}),t.jsx(e,{component:"p",variant:"button2",align:"center",children:"Button 2"}),t.jsx(e,{component:"p",variant:"caption1",align:"center",children:"Caption 1"}),t.jsx(e,{component:"p",variant:"caption2",align:"center",children:"Caption 2"})]}),N={title:"Typography",component:e};var l,p,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <>
      <Typography variant='h1' align='center'>
        H1
      </Typography>
      <Typography variant='h2' align='right'>
        H2
      </Typography>
      <Typography variant='h2' align='left'>
        H3
      </Typography>
      <Typography variant='h4' align='center' gutterBottom>
        H4
      </Typography>
      <Typography variant='h5' align='center' gutterBottom>
        H5
      </Typography>
      <Typography variant='h6' align='center' gutterBottom>
        H6
      </Typography>
      <Typography variant='subtitle1' align='center'>
        Subtitle 1
      </Typography>
      <Typography variant='subtitle2' align='center'>
        Subtitle 2
      </Typography>
      <Typography variant='subtitle3' align='center'>
        Subtitle 3
      </Typography>
      <Typography variant='subtitle4' align='center'>
        Subtitle 4
      </Typography>
      <Typography variant='body1' align='center'>
        Body 1
      </Typography>
      <Typography variant='body2' align='center'>
        Body 2
      </Typography>
      <Typography component='p' variant='button1' align='center'>
        Button 1
      </Typography>
      <Typography component='p' variant='button2' align='center'>
        Button 2
      </Typography>
      <Typography component='p' variant='caption1' align='center'>
        Caption 1
      </Typography>
      <Typography component='p' variant='caption2' align='center'>
        Caption 2
      </Typography>
    </>;
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const w=["Simple"];export{a as Simple,w as __namedExportsOrder,N as default};
