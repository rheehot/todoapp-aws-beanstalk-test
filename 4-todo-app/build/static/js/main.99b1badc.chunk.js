(this["webpackJsonp4-todo-app"]=this["webpackJsonp4-todo-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),i=c(8),s=c.n(i),a=(c(15),c(7)),r=c(10),j=c(5),u=(c(16),c(0));var d=function(e){var t=e.children;return Object(u.jsxs)("div",{className:"TodoTemplate",children:[Object(u.jsx)("div",{className:"app-title",children:"\uc77c\uc815 \uad00\ub9ac"}),Object(u.jsx)("div",{className:"content",children:t})]})},l=c(2),b=(c(18),function(e){var t=e.onInsert,c=Object(n.useState)(""),o=Object(j.a)(c,2),i=o[0],s=o[1],a=Object(n.useCallback)((function(e){s(e.target.value)}),[]),r=Object(n.useCallback)((function(e){t(i),s(""),e.preventDefault()}),[t,i]);return Object(u.jsxs)("form",{className:"TodoInsert",onSubmit:r,children:[Object(u.jsx)("input",{type:"text",placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud558\uc138\uc694.",value:i,onChange:a}),Object(u.jsx)("button",{type:"submit",children:Object(u.jsx)(l.a,{})})]})}),O=c(9),h=c.n(O);c(19);var x=function(e){var t=e.todo,c=e.onRemove,n=e.onToggle,o=t.id,i=t.text,s=t.checked;return Object(u.jsxs)("div",{className:"TodoListItem",children:[Object(u.jsxs)("div",{className:h()("checkbox",{checked:s}),onClick:function(){return n(o)},children:[s?Object(u.jsx)(l.b,{}):Object(u.jsx)(l.c,{}),Object(u.jsx)("div",{className:"text",children:i})]}),Object(u.jsx)("div",{className:"remove",onClick:function(){return c(o)},children:Object(u.jsx)(l.d,{})})]})};c(20);var f=function(e){var t=e.todos,c=e.onRemove,n=e.onToggle;return Object(u.jsx)("div",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(x,{todo:e,onRemove:c,onToggle:n},e.id)}))})},v=function(){var e=Object(n.useState)([{id:1,text:"\ub9ac\uc561\ud2b8\uc758 \uae30\ucd08 \uc54c\uc544\ubcf4\uae30",checked:!0},{id:2,text:"\ucef4\ud3ec\ub10c\ud2b8 \uc2a4\ud0c0\uc77c\ub9c1 \ud574\ubcf4\uae30",checked:!0},{id:3,text:"\uc77c\uc815 \uad00\ub9ac \uc571 \ub9cc\ub4e4\uc5b4 \ubcf4\uae30",checked:!1}]),t=Object(j.a)(e,2),c=t[0],o=t[1],i=Object(n.useRef)(4),s=Object(n.useCallback)((function(e){var t={id:i.current,text:e,checked:!1};o([].concat(Object(r.a)(c),[t])),i.current+=1}),[c]),l=Object(n.useCallback)((function(e){o(c.filter((function(t){return t.id!==e})))}),[c]),O=Object(n.useCallback)((function(e){o(c.map((function(t){return t.id===e?Object(a.a)(Object(a.a)({},t),{},{checked:!t.checked}):t})))}),[c]);return Object(u.jsxs)(d,{children:[Object(u.jsx)(b,{onInsert:s}),Object(u.jsx)(f,{todos:c,onRemove:l,onToggle:O})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),o(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),m()}],[[21,1,2]]]);
//# sourceMappingURL=main.99b1badc.chunk.js.map