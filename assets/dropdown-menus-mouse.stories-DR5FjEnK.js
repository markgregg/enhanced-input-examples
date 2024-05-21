import{r as m,j as c}from"./index-C8_aQqE3.js";import{i as D,a as p,C as d,t as v,b as j,c as A,d as C,e as S,f as E}from"./data-BMlR12sx.js";function F(){const[u,y]=m.useState(""),[f,w]=m.useState([]);m.useEffect(()=>{h(`XS1966819226 asdkljs ahjklas kjk IT000453454 al,dsklaj klasjd lk
    asdl sajkl; ABD l;kdl;k asd lasd;jk sa;k akjl kljkl jkj sad AT000B126958
    FAN ZEN YY`,0,!0)},[]);const h=(o,i,s)=>{const n=o.trimEnd().lastIndexOf(" ",o[i]===" "?i-1:i)+1,x=o.substring(n).split(/ |\n|\r|\t/),r=f.filter(t=>!s&&t.id!=="bad-edit"||t.start+t.length<n&&t.id!=="bad-edit"),a="margin-right: 2px;";let e=n;x.forEach(t=>{if(t.match(D))s&&(p.includes(t.toUpperCase())?r.push({id:`isin${e}`,start:e,length:t.length,style:a,Decorator:d,decoratorStyle:{backgroundColor:"rgb(68, 68, 68)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"},dropDown:{activation:"mouseover",options:["on","off"]}}):r.push({id:`isin${e}`,start:e,length:t.length,style:a,Decorator:d,decoratorStyle:{backgroundColor:"rgb(154, 61, 55)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"},dropDown:{activation:"mouseover",options:["on","off"]}}));else if(v.includes(t))s&&r.push({id:`ticker${e}`,start:e,length:t.length,style:a,Decorator:d,decoratorStyle:{backgroundColor:"rgb(68, 68, 68)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"},dropDown:{activation:"mouseover",options:["on","off"]}});else if(j(t))s&&r.push({id:`vol${e}`,start:e,length:t.length,style:a,Decorator:d,decoratorStyle:{backgroundColor:"rgb(68, 68, 68)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"},dropDown:{activation:"mouseover",options:["on","off"]}});else if(A(t))s&&r.push({id:`prc${e}`,start:e,length:t.length,style:a,Decorator:d,decoratorStyle:{backgroundColor:"rgb(68, 68, 68)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"},dropDown:{activation:"mouseover",options:["on","off"]}});else if(i>=e&&i<=e+t.trimEnd().length&&t[i]!==""){if(t.match(C)){const l=p.filter(g=>g.includes(t));l.length>0&&r.push({id:"bad-edit",start:e,length:t.length,style:"font-style: italic;font-weight: bold;",dropDown:{activation:"cursorposition",options:l.slice(0,5)}})}else if(t.match(S)){const l=v.filter(g=>g.includes(t));l.length>0&&r.push({id:"bad-edit",start:e,length:t.length,style:"font-style: italic;font-weight: bold;",dropDown:{activation:"cursorposition",options:l.slice(0,5)}})}}e=e+t.length+1}),JSON.stringify(r)!==JSON.stringify(f)&&w(r),s&&y(o)},b=(o,i)=>{const s=f.find(n=>n.id===o);if(s){const n=u.substring(0,s.start)+i+u.substring(s.start+s.length);h(n,s.start,!0)}};return c.jsxs("div",{children:[c.jsx("span",{children:"The below example demonstrates dropdown menus that activie when you move yiouor mouse over a decorator"}),c.jsx("pre",{children:`
TextBlock
{
  id: 'id',
  start: pos,
  length: token.length,
  style,
  Decorator: PillDecorator,
  decoratorStyle: {
    backgroundColor: 'rgb(68, 68, 68)',
    color: 'white',
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  dropDown: {
    activation: 'mouseover',
    options: ['on', 'off']
  },
}`}),c.jsx("div",{style:{height:"300px",width:"600px",position:"relative"},children:c.jsx(E,{style:{fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"},clipInput:!0,lineHeight:"40px",text:u,textBlocks:f,onChange:(o,i)=>h(o,i,!0),onCursorPositionChanged:(o,i)=>h(o,i),onDropDownItemSelected:(o,i)=>b(o,i)})})]})}typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{F as DropDownMenusMouse};
