import{r as m,j as l}from"./index-ZOtpgXtz.js";import{i as w,a as p,C as h,t as y,b as S,c as D,d as A,e as E,f as I,S as j}from"./data-DacIZyLb.js";/* empty css               */function $(){const[u,x]=m.useState(""),[f,b]=m.useState([]);m.useEffect(()=>{a("Click the X button to clear the text",0,!0)},[]);const a=(r,i,s)=>{const o=r.trimEnd().lastIndexOf(" ",r[i]===" "?i-1:i)+1,C=r.substring(o).split(/ |\n|\r|\t/),n=f.filter(t=>!s&&t.id!=="bad-edit"||t.start+t.length<o&&t.id!=="bad-edit"),c="margin-right: 2px;";let e=o;C.forEach(t=>{if(t.match(w))s&&(p.includes(t.toUpperCase())?n.push({id:`isin${e}`,start:e,length:t.length,style:c,Decorator:h,decoratorStyle:{backgroundColor:"rgb(68, 68, 68)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"}}):n.push({id:`isin${e}`,start:e,length:t.length,style:c,Decorator:h,decoratorStyle:{backgroundColor:"rgb(154, 61, 55)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"}}));else if(y.includes(t))s&&n.push({id:`ticker${e}`,start:e,length:t.length,style:c,Decorator:h,decoratorStyle:{backgroundColor:"rgb(68, 68, 68)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"}});else if(S(t))s&&n.push({id:`vol${e}`,start:e,length:t.length,style:c,customProps:"Size",Decorator:h,decoratorStyle:{backgroundColor:"rgb(68, 68, 68)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"}});else if(D(t))s&&n.push({id:`prc${e}`,start:e,length:t.length,style:c,Decorator:h,decoratorStyle:{backgroundColor:"rgb(68, 68, 68)",color:"white",fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"}});else if(i>=e&&i<=e+t.trimEnd().length&&t[i]!==""){if(t.match(A)){const d=p.filter(g=>g.includes(t));d.length>0&&n.push({id:"bad-edit",start:e,length:t.length,style:"font-style: italic;font-weight: bold;",dropDown:{activation:"cursorposition",options:d.slice(0,5)}})}else if(t.match(E)){const d=y.filter(g=>g.includes(t));d.length>0&&n.push({id:"bad-edit",start:e,length:t.length,style:"font-style: italic;font-weight: bold;",dropDown:{activation:"cursorposition",options:d.slice(0,5)}})}}e=e+t.length+1}),JSON.stringify(n)!==JSON.stringify(f)&&b(n),s&&x(r)},v=(r,i)=>{const s=f.find(o=>o.id===r);if(s){const o=u.substring(0,s.start)+i+u.substring(s.start+s.length);a(o,s.start,!0)}};return l.jsxs("div",{className:"storyStyle",children:[l.jsx("h1",{children:"Enhanced Input With Decorators (Buttons etc..)"}),l.jsx("div",{className:"text",children:"Decorators for the Ehanced Input can be any JSX element. The below example shows a clear button."}),l.jsx("pre",{children:`
inputDecorator={<ClearButton onClick={() => handleChange('', 0, true)} />}
`}),l.jsx("div",{style:{height:"400px",width:"600px",position:"relative"},children:l.jsx(I,{style:{fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"},lineHeight:"40px",text:u,textBlocks:f,inputDecorator:l.jsx(j,{onClick:()=>a("",0,!0)}),onChange:(r,i)=>a(r,i,!0),onCursorPositionChanged:(r,i)=>a(r,i),onDropDownItemSelected:(r,i)=>v(r,i)})})]})}typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{$ as InputDecorator};