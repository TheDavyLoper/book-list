(this["webpackJsonpbook-list"]=this["webpackJsonpbook-list"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),l=(n(11),n(5)),u=n(1),i=n(4),s=n.n(i),m=Object(a.createContext)(),d=function(e){var t=Object(a.useState)(JSON.parse(localStorage.getItem("booklist"))||[]),n=Object(u.a)(t,2),r=n[0],c=n[1];Object(a.useEffect)((function(){localStorage.setItem("booklist",JSON.stringify(r))}),[r]);return o.a.createElement(m.Provider,{value:{books:r,addBook:function(e,t){c([].concat(Object(l.a)(r),[{title:e,author:t,id:s()()}]))},removeBook:function(e){c(r.filter((function(t){return t.id!==e})))}}},e.children)},b=function(){var e=Object(a.useContext)(m).books;return o.a.createElement("div",{className:"navbar"},o.a.createElement("h1",null,"Your Reading List"),o.a.createElement("p",null,e.length?e.length<2?"You have ".concat(e.length," book to read"):"You have ".concat(e.length," books to read"):""))},v=function(e){var t=e.book,n=Object(a.useContext)(m).removeBook;return o.a.createElement("li",null,o.a.createElement("div",{className:"title"},t.title)," ",o.a.createElement("span",{className:"x",onClick:function(){return n(t.id)}},"X"),o.a.createElement("div",{className:"author"},t.author))},h=function(){var e=Object(a.useContext)(m).books;return e.length?o.a.createElement("div",{className:"book-list"},o.a.createElement("ul",null,e.map((function(e){return o.a.createElement(v,{book:e,key:e.id})})))):o.a.createElement("div",{className:"empty"},"No books to reads...")},f=function(){var e=Object(a.useContext)(m).addBook,t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],l=Object(a.useState)(""),i=Object(u.a)(l,2),s=i[0],d=i[1];return o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(r,s),c(""),d("")}},o.a.createElement("input",{type:"text",name:"title",value:r,placeholder:"Add Book",onChange:function(e){return c(e.target.value)}}),o.a.createElement("input",{type:"text",name:"author",value:s,placeholder:"Add Author",onChange:function(e){return d(e.target.value)}}),o.a.createElement("button",{type:"submit"},"Add Book"))};var k=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d,null,o.a.createElement(b,null),o.a.createElement(h,null),o.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.7be59915.chunk.js.map