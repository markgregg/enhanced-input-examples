import{r as m,j as a}from"./index-z2hoOALX.js";import{i as b,a as p,C as d,t as v,b as j,c as A,d as S,e as C,f as E}from"./data-CQ8Hyd-l.js";/* empty css               */function F(){const[u,y]=m.useState(""),[h,w]=m.useState([]);m.useEffect(()=>{f(`XS1966819226 asdkljs ahjklas kjk IT000453454 al,dsklaj klasjd lk
    asdl sajkl; ABD l;kdl;k asd lasd;jk sa;k akjl kljkl jkj sad AT000B126958
    FAN ZEN YY`,0,!0)},[]);const f=(s,i,o)=>{const n=s.trimEnd().lastIndexOf(" ",s[i]===" "?i-1:i)+1,D=s.substring(n).split(/ |\n|\r|\t/),r=h.filter(t=>!o&&t.id!=="bad-edit"||t.start+t.length<n&&t.id!=="bad-edit"),l="margin-right: 2px;";let e=n;D.forEach(t=>{if(t.match(b))o&&(p.includes(t.toUpperCase())?r.push({id:`isin${e}`,start:e,length:t.length,style:l,Decorator:d,decoratorStyle:{backgroundColor:"rgb(68, 68, 68)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"},dropDown:{activation:"mouseover",options:["on","off"]}}):r.push({id:`isin${e}`,start:e,length:t.length,style:l,Decorator:d,decoratorStyle:{backgroundColor:"rgb(154, 61, 55)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"},dropDown:{activation:"mouseover",options:["on","off"]}}));else if(v.includes(t))o&&r.push({id:`ticker${e}`,start:e,length:t.length,style:l,Decorator:d,decoratorStyle:{backgroundColor:"rgb(68, 68, 68)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"},dropDown:{activation:"mouseover",options:["on","off"]}});else if(j(t))o&&r.push({id:`vol${e}`,start:e,length:t.length,style:l,Decorator:d,decoratorStyle:{backgroundColor:"rgb(68, 68, 68)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"},dropDown:{activation:"mouseover",options:["on","off"]}});else if(A(t))o&&r.push({id:`prc${e}`,start:e,length:t.length,style:l,Decorator:d,decoratorStyle:{backgroundColor:"rgb(68, 68, 68)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"},dropDown:{activation:"mouseover",options:["on","off"]}});else if(i>=e&&i<=e+t.trimEnd().length&&t[i]!==""){if(t.match(S)){const c=p.filter(g=>g.includes(t));c.length>0&&r.push({id:"bad-edit",start:e,length:t.length,style:"font-style: italic;font-weight: bold;",dropDown:{activation:"cursorposition",options:c.slice(0,5)}})}else if(t.match(C)){const c=v.filter(g=>g.includes(t));c.length>0&&r.push({id:"bad-edit",start:e,length:t.length,style:"font-style: italic;font-weight: bold;",dropDown:{activation:"cursorposition",options:c.slice(0,5)}})}}e=e+t.length+1}),JSON.stringify(r)!==JSON.stringify(h)&&w(r),o&&y(s)},x=(s,i)=>{const o=h.find(n=>n.id===s);if(o){const n=u.substring(0,o.start)+i+u.substring(o.start+o.length);f(n,o.start,!0)}};return a.jsxs("div",{className:"storyStyle",children:[a.jsx("h1",{children:"Enhanced Input With DropDown Menus Activated By Mouse"}),a.jsx("div",{className:"text",children:"Below is an example of a dropdown menu that activates when the mouse is over a decorator."}),a.jsx("pre",{children:`
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
}`}),a.jsx("div",{style:{height:"300px",width:"600px",position:"relative"},children:a.jsx(E,{style:{fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"},clipInput:!0,lineHeight:"40px",text:u,textBlocks:h,onChange:(s,i)=>f(s,i,!0),onCursorPositionChanged:(s,i)=>f(s,i),onDropDownItemSelected:(s,i)=>x(s,i)})})]})}typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{F as DropDownMenusMouse};
