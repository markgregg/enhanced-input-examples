import{r as m,j as c}from"./index-BZvD_NE6.js";import{i as A,a as y,C as d,t as p,b as j,c as C,d as S,e as k,f as D}from"./data-BMBs7j4S.js";function B(){const[f,b]=m.useState(""),[h,x]=m.useState([]);m.useEffect(()=>{g(`XS1966819226 asdkljs ahjklas kjk IT000453454 al,dsklaj klasjd lk
    asdl sajkl; ABD l;kdl;k asd lasd;jk sa;k akjl kljkl jkj sad AT000B126958
    FAN ZEN YY`,0,!0)},[]);const g=(s,i,r)=>{const o=s.trimEnd().lastIndexOf(" ",s[i]===" "?i-1:i)+1,w=s.substring(o).split(/ |\n|\r|\t/),l=h.filter(t=>!r&&t.id!=="bad-edit"||t.start+t.length<o&&t.id!=="bad-edit"),a="margin-right: 2px;";let e=o;w.forEach(t=>{if(t.match(A))r&&(y.includes(t.toUpperCase())?l.push({id:`isin${e}`,start:e,length:t.length,style:a,Decorator:d,decoratorStyle:{backgroundColor:"rgb(68, 68, 68)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"}}):l.push({id:`isin${e}`,start:e,length:t.length,style:a,Decorator:d,decoratorStyle:{backgroundColor:"rgb(154, 61, 55)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"}}));else if(p.includes(t))r&&l.push({id:`ticker${e}`,start:e,length:t.length,style:a,Decorator:d,decoratorStyle:{backgroundColor:"rgb(68, 68, 68)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"}});else if(j(t))r&&l.push({id:`vol${e}`,start:e,length:t.length,style:a,Decorator:d,decoratorStyle:{backgroundColor:"rgb(68, 68, 68)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"}});else if(C(t))r&&l.push({id:`prc${e}`,start:e,length:t.length,style:a,Decorator:d,decoratorStyle:{backgroundColor:"rgb(68, 68, 68)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"}});else if(i>=e&&i<=e+t.trimEnd().length&&t[i]!==""){if(t.match(S)){const n=y.filter(u=>u.includes(t));n.length>0&&l.push({id:"bad-edit",start:e,length:t.length,style:"font-style: italic;font-weight: bold;",dropDown:{activation:"cursorposition",options:n.slice(0,5)}})}else if(t.match(k)){const n=p.filter(u=>u.includes(t));n.length>0&&l.push({id:"bad-edit",start:e,length:t.length,style:"font-style: italic;font-weight: bold;",dropDown:{activation:"cursorposition",options:n.slice(0,5)}})}}e=e+t.length+1}),JSON.stringify(l)!==JSON.stringify(h)&&x(l),r&&b(s)},v=(s,i)=>{const r=h.find(o=>o.id===s);if(r){const o=f.substring(0,r.start)+i+f.substring(r.start+r.length);g(o,r.start,!0)}};return c.jsxs("div",{children:[c.jsx("span",{children:"The below example demonstrates pill decorators (decorators that look like pills). The code for the TextBlock is shown below. A larger line height is recommended when deocrating text."}),c.jsx("pre",{children:`
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
  }
}`}),c.jsx("div",{style:{height:"300px",width:"600px",position:"relative"},children:c.jsx(D,{style:{fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"},clipInput:!0,lineHeight:"40px",text:f,textBlocks:h,onChange:(s,i)=>g(s,i,!0),onCursorPositionChanged:(s,i)=>g(s,i),onDropDownItemSelected:(s,i)=>v(s,i)})})]})}typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{B as PillDecorators};
