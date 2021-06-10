(this["webpackJsonpsyntax-note"]=this["webpackJsonpsyntax-note"]||[]).push([[0],{355:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(17),i=n.n(s),o=n(16),a=n(62),l=n.n(a),j=["python","kotlin","javascript"],u=["python","kotlin"],d=["1. types","1.1. basic types","1.2. type checks and cast","1.3. print type","2. conditions","2.1. if","2.1. when, switch","3. loops","3.1. for-loop (collection)","3.2. for-loop (with index)","4. string","4.1. string template","4.2. split","5. collections","5.1. filter","5.2. groupby","10. etc","10.1. range","10.2. ternary operator"],p={0:12,1:12,2:6,3:4,4:3,5:2,6:2},b=n(368),h=n(374),x=n(63),O=n.n(x),g=n(375),f=n(369),m=n(370),v=n(2),y=function(e){var t=e.languages,n=e.contents;console.log("contents in Contents"),console.log(n);var c=p[t.length];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(b.a,{container:!0,spacing:1,children:t.map((function(e,t){return Object(v.jsx)(b.a,{item:!0,xs:c,children:Object(v.jsx)("h4",{children:e})},t)}))}),Object(v.jsx)("div",{className:"js-toc-content",children:d.map((function(e,r){return Object(v.jsx)(h.a,{children:e.indexOf(".")===e.lastIndexOf(".")?Object(v.jsx)("h2",{id:e,children:e}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h3",{id:e,children:e}),Object(v.jsx)(b.a,{container:!0,spacing:1,children:t.map((function(t){return function(e,t){var r=null,s=null,i=null;if(e in n&&t in n[e]){var o=n[e][t];if("code"in o){var a=(r=o.code.raw).indexOf("\n"),l=(r=r.substring(a+1)).lastIndexOf("```");r=r.substring(0,l)}if("output"in o){var j=(s=o.output.raw).indexOf("\n"),u=(s=s.substring(j+1)).lastIndexOf("```");s=s.substring(0,u)}"description"in o&&(i=o.description.raw)}return Object(v.jsxs)(b.a,{item:!0,xs:c,children:[null!=r?Object(v.jsx)(g.a,{language:e,style:f.a,children:r}):Object(v.jsx)("p",{children:"N/A"}),null!=s?Object(v.jsx)(g.a,{style:m.a,children:s}):Object(v.jsx)("div",{}),null!=i?Object(v.jsx)("pre",{children:Object(v.jsx)(O.a,{properties:{target:"_blank"},children:i})}):Object(v.jsx)("div",{})]},e)}(t,e)}))})]})},r)}))})]})},k=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{children:"footer"}),Object(v.jsx)("p",{children:"."}),Object(v.jsx)("p",{children:"."}),Object(v.jsx)("p",{children:"."}),Object(v.jsx)("p",{children:"."}),Object(v.jsx)("p",{children:"."}),Object(v.jsx)("p",{children:"."}),Object(v.jsx)("p",{children:"."}),Object(v.jsx)("p",{children:"."}),Object(v.jsx)("p",{children:"."}),Object(v.jsx)("p",{children:"."}),Object(v.jsx)("p",{children:"."}),Object(v.jsx)("p",{children:"."}),Object(v.jsx)("p",{children:"."}),Object(v.jsx)("p",{children:"."}),Object(v.jsx)("p",{children:"."}),Object(v.jsx)("p",{children:"."}),Object(v.jsx)("p",{children:"."})]})},S=n(9),w=n(371),N=n(372),C=Object(w.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})),I=function(e){var t=e.languages,n=e.setLanguages,c=C();function r(e,c){console.log("".concat(e," has clicked."));var r=Object(S.a)(t);c?r.push(e):r=r.filter((function(t){return t!==e})),console.log("new",r),localStorage.setItem("languages",JSON.stringify(r)),n(r)}return Object(v.jsxs)("header",{children:[Object(v.jsx)("h1",{children:"Syntax Note"}),Object(v.jsxs)("div",{className:c.root,children:[t.map((function(e){return Object(v.jsx)(N.a,{color:"primary",variant:"contained",onClick:function(){return r(e,!1)},children:e},e)})),t.length?Object(v.jsx)("span",{children:"\xa0\xa0\xa0\xa0"}):Object(v.jsx)(v.Fragment,{}),j.filter((function(e){return!t.includes(e)})).map((function(e){return Object(v.jsx)(N.a,{color:"primary",variant:"outlined",onClick:function(){return r(e,!0)},children:e},e)}))]})]})},J=n(373),L=Object(w.a)((function(e){return{root:{position:"fixed",padding:"20px",paddingLeft:"5px",top:"0px",right:"0px",fontSize:"0.8em",lineHeight:"200%",backgroundColor:function(e){return e?"transparent":"lightgray"},height:"100%","& .fab":{marginLeft:"15px"},"& .js-toc":{marginTop:"20px"},"& .js-toc .toc-list":{listStyle:"none"},"& .js-toc .toc-link":{paddingBottom:"10px"},"& .js-toc > .toc-list li a":{textDecoration:"none"},"& #id-toc-list":{position:"relative",display:function(e){return e?"none":"block"}}}}})),A=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],s=L(n);return Object(v.jsxs)("div",{className:s.root,children:[Object(v.jsx)(J.a,{color:"secondary",className:"fab","aria-label":"add",onClick:function(){r(!n)},children:"TOC"}),Object(v.jsx)("div",{id:"id-toc-list",className:"js-toc"})]})},F=n(43),T=n.n(F),B=n(69),D=n(70);function E(){return(E=Object(D.a)(T.a.mark((function e(){var t,c,r,s,i,o,a,l,u;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={},c=n(352),r=Object(B.a)(j),e.prev=3,r.s();case 5:if((s=r.n()).done){e.next=20;break}return i=s.value,o="https://raw.githubusercontent.com/syntax-note/syntax-note.github.io/main/md_common/".concat(i,".md"),console.log(o),e.next=11,fetch(o,{cache:"no-cache"});case 11:return a=e.sent,e.next=14,a.text();case 14:l=e.sent,u=c.parse(l),console.log(u),t[i]=u;case 18:e.next=5;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(3),r.e(e.t0);case 25:return e.prev=25,r.f(),e.finish(25);case 28:return console.log(t),e.abrupt("return",t);case 30:case"end":return e.stop()}}),e,null,[[3,22,25,28]])})))).apply(this,arguments)}var _=function(){var e=Object(c.useState)(u),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)({dummy:"temp"}),i=Object(o.a)(s,2),a=i[0],j=i[1];return console.log(typeof["apple","banana","mango"]),Object(c.useEffect)((function(){console.log("App mounted");var e=JSON.parse(localStorage.getItem("languages"))||u;console.log(e),r(e),function(){return E.apply(this,arguments)}().then((function(e){j(e),setTimeout((function(){l.a.init({tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",hasInnerContainers:!1,collapseDepth:6})}),1e3)}))}),[]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(I,{languages:n,setLanguages:r}),Object(v.jsx)(A,{}),Object(v.jsx)(y,{languages:n,contents:a}),Object(v.jsx)(k,{})]})};i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(_,{})}),document.getElementById("root"))}},[[355,1,2]]]);
//# sourceMappingURL=main.25e19144.chunk.js.map