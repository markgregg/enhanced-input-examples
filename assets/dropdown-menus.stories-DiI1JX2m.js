import{r as u,j as l}from"./index-z2hoOALX.js";import{i as j,a as p,t as m,b as v,c as E,d as D,e as S,f as B}from"./data-CQ8Hyd-l.js";/* empty css               */function O(){const[f,x]=u.useState(""),[c,y]=u.useState([]);u.useEffect(()=>{h("Type XS1 at the end of the line ",0,!0)},[]);const h=(s,e,n)=>{const o=s.trimEnd().lastIndexOf(" ",s[e]===" "?e-1:e)+1,b=s.substring(o).split(/ |\n|\r|\t/),r=c.filter(t=>!n&&t.id!=="bad-edit"||t.start+t.length<o&&t.id!=="bad-edit"),d="margin-right: 2px;";let i=o;b.forEach(t=>{if(t.match(j))n&&p.includes(t.toUpperCase())&&r.push({id:`isin${i}`,start:i,length:t.length,style:d});else if(m.includes(t))n&&r.push({id:`ticker${i}`,start:i,length:t.length,style:d});else if(v(t))n&&r.push({id:`vol${i}`,start:i,length:t.length,style:d});else if(E(t))n&&r.push({id:`prc${i}`,start:i,length:t.length,style:d});else if(e>=i&&e<=i+t.trimEnd().length&&t[e]!==""){if(t.match(D)){const a=p.filter(g=>g.includes(t));a.length>0&&r.push({id:"bad-edit",start:i,length:t.length,style:"font-style: italic;font-weight: bold;",dropDown:{activation:"cursorposition",options:a.slice(0,5)}})}else if(t.match(S)){const a=m.filter(g=>g.includes(t));a.length>0&&r.push({id:"bad-edit",start:i,length:t.length,style:"font-style: italic;font-weight: bold;",dropDown:{activation:"cursorposition",options:a.slice(0,5)}})}}i=i+t.length+1}),JSON.stringify(r)!==JSON.stringify(c)&&y(r),n&&x(s)},w=(s,e)=>{const n=c.find(o=>o.id===s);if(n){const o=f.substring(0,n.start)+e+f.substring(n.start+n.length);h(o,n.start,!0)}};return l.jsxs("div",{className:"storyStyle",children:[l.jsx("h1",{children:"Enhanced Input With DropDown Menus"}),l.jsxs("div",{className:"text",children:["Dropdown lists can be assoicated against a TextBlock. They will always appear just below the block. They can be activiated either by -",l.jsx("br",{}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("b",{children:"cursorposition:"})," when the cursor is within the TextBlock"]}),l.jsxs("li",{children:[l.jsx("b",{children:"mouseover:"})," when the mouse is over the TextBlock"]})]}),"The below example is activated by the position of the cursor."]}),l.jsx("pre",{children:`
TextBlock
{
  id: 'bad-edit',
  start: pos,
  length: token.length,
  style: 'font-style: italic;font-weight: bold;',
  dropDown: {
    activation: 'cursorposition',
    options: ['item1', 'item2', 'item3'],
  }
}`}),l.jsx("div",{style:{height:"300px",width:"600px",position:"relative"},children:l.jsx(B,{style:{fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"},lineHeight:"40px",text:f,textBlocks:c,onChange:(s,e)=>h(s,e,!0),onCursorPositionChanged:(s,e)=>h(s,e),onDropDownItemSelected:(s,e)=>w(s,e)})})]})}typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{O as DropdownMenus};