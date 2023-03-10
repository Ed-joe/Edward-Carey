(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var i=n(9),c=n(3),a=n(1),s=n(0),r=Object(a.createContext)(),l=function(e){var t=e.children,n=Object(a.useState)("light"),i=Object(c.a)(n,2),l=i[0],o=i[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://ed-joe.github.io/",j="About Me",d="Edward Carey",h="Software Engineer",u="Hello! I am a recent graduate from Stony Brook University with a B.S. in Computer Science, and a B.S. in Applied Mathematics. Programming has been a big part in my life ever since I began college, and \n    I am excited to continue developing in the future. Curently, I am looking for a full-time position as a Full Stack or a Backend Developer. Feel free to reach out regarding any inquries.",b="https://drive.google.com/file/d/1qpuiUMlJ6bN3E9vefMSZKAGLh6TNktAV/view?usp=sharing",m={linkedin:"https://www.linkedin.com/in/edward-carey-835b1a214/",github:"https://github.com/Ed-joe"},p=[{name:"Redistricting Data Viewer",description:"The Redistricting Data Viewer is a dynamic website developed in collaboration with two other developers in order to cleanly view redistricting data metrics and information involving congressional redistricting in 2022. \n       The website includes an interactive map, easy tools for plan to plan comparison, and data for Nevada, Pennsylvania, and Illinois. Lastly, the website includes summary metrics for each state, when using a set of 10000 \n       plausible randomly generated plans created using a recombination algorithm on Stony Brook University's high performance computing cluster.",stack:["Spring Boot","MySQL","GCP","Bootstrap","Python","High Performance Computing"],livePreview:"https://ed-joe.github.io/redistricting-dataviewer-front-end/"},{name:"Hell's Fury",description:"Hell's Fury is an action packed top-down dungeon crawler experience developed in collaberation with two other developers, using a custom TypeScript game engine.\n      The game includes 8 unique levels, 7 unique boss fights each with their own state machine AIs, 2 unique enemy AIs, and custom music, art, and sound effects.\n      Hell's Fury was the runner-up in the Stony Brook University Game Programming Competition, which was judged by a panel of industry professionals.",stack:["TypeScript","HTML/CSS"],sourceCode:"https://github.com/Ed-joe/Hells-Fury",livePreview:"https://hells-fury.firebaseapp.com/"}],f=["JavaScript","TypeScript","Spring Boot","Python","Java","MySql","React","Node.js","Material UI","Git"],O="edwardjoecarey@gmail.com",g=n(16),x=n.n(g),v=n(14),k=n.n(v),N=n(18),w=n.n(N),y=n(17),_=n.n(y),S=(n(28),function(){var e=Object(a.useContext)(r),t=Object(c.a)(e,1)[0],n=t.themeName,i=t.toggleTheme,l=Object(a.useState)(!1),o=Object(c.a)(l,2),j=o[0],d=o[1],h=function(){return d(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,f.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,O?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(k.a,{}):Object(s.jsx)(x.a,{})}),Object(s.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(_.a,{}):Object(s.jsx)(w.a,{})})]})}),C=(n(32),function(){var e=o,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(S,{})]})}),P=n(11),E=n.n(P),I=n(19),B=n.n(I),T=(n(33),function(){var e=d,t=h,n=u,i=b,c=m;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[i&&Object(s.jsx)("a",{href:i,rel:"noopener noreferrer",target:"_blank",children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),c&&Object(s.jsxs)(s.Fragment,{children:[c.github&&Object(s.jsx)("a",{href:c.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(E.a,{})}),c.linkedin&&Object(s.jsx)("a",{href:c.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(B.a,{})})]})]})]})}),H=n(7),M=n.n(H),A=n(20),F=n.n(A),L=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},M()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(E.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(F.a,{})})]})}),q=(n(36),function(){return p.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(s.jsx)(L,{project:e},M()())}))})]}):null}),G=(n(37),function(){return f.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:f.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},M()())}))})]}):null}),J=n(21),U=n.n(J),R=(n(38),function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?i(!0):i(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(U.a,{fontSize:"large"})})}):null}),D=(n(39),function(){return O?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(O),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"edwardjoecarey@gmail.com"})})]}):null}),V=(n(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/Ed-joe",className:"link footer__link",children:"GitHub"})})}),z=(n(41),function(){var e=Object(a.useContext)(r),t=Object(c.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(C,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(T,{}),Object(s.jsx)(q,{}),Object(s.jsx)(G,{}),Object(s.jsx)(D,{})]}),Object(s.jsx)(R,{}),Object(s.jsx)(V,{})]})});n(42);Object(i.render)(Object(s.jsx)(l,{children:Object(s.jsx)(z,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c7f742cd.chunk.js.map