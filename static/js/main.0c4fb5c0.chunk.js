(this.webpackJsonplesson_16_redux=this.webpackJsonplesson_16_redux||[]).push([[0],{15:function(e,t,n){e.exports=n(30)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),i=n(4),s=n(2),l=n(12),u=n(1),m={message:"",correction:"",list:[{id:0,message:"Learn JS",isDone:!1,isCorrection:!1},{id:1,message:"Learn React",isDone:!1,isCorrection:!1},{id:2,message:"Learn Redux",isDone:!1,isCorrection:!1}]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-ITEM":var n={id:e.list.length,message:t.message,isDone:!1,isCorrection:!1};return Object(u.a)(Object(u.a)({},e),{},{message:"",list:[].concat(Object(l.a)(e.list),[n])});case"HANDLE CHANGE":return Object(u.a)(Object(u.a)({},e),{},{message:t.message});case"REMOVE-ITEM":return Object(u.a)(Object(u.a)({},e),{},{list:e.list.filter((function(e){return e.id!==t.id}))});case"DONE-ITEM":return Object(u.a)(Object(u.a)({},e),{},{list:e.list.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{isDone:!e.isDone}):e}))});case"CORRECT-ITEM":return Object(u.a)(Object(u.a)({},e),{},{list:e.list.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{isCorrection:!e.isCorrection}):e}))});case"HANDLE-CORRECTION":return Object(u.a)(Object(u.a)({},e),{},{list:e.list.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{message:t.message}):e}))});default:return e}},E=Object(s.b)({todo:d}),g=Object(s.c)(E);window.store=g;var O=g,h=(n(26),n(27),n(10)),f=n(11),b=n(14),p=n(13),v=(n(28),n(29),function(e){return console.log(e),o.a.createElement("div",{className:"Item"},e.isCorrection?o.a.createElement("div",{className:"correction"},o.a.createElement("input",{className:"correctionInput",value:e.message,onChange:function(t){e.handleCorrection(t.target.value,e.id)},onBlur:function(){e.correctItem(e.id)},autoFocus:!0})):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:e.isDone?"messageDone":"message",onDoubleClick:function(){e.correctItem(e.id)}},e.message),o.a.createElement("div",{className:"status"},o.a.createElement("div",{className:"done",onClick:function(){e.doneItem(e.id)}},"V"),o.a.createElement("div",{className:"delete",onClick:function(){e.removeItem(e.id)}},"X"))))}),C=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){console.log(this.props);var e=this.props,t=e.addItem,n=e.handleChange,a=e.removeItem,r=e.doneItem,c=e.correctItem,i=e.handleCorrection,s=this.props.todo,l=s.list,u=s.message,m=(s.isDone,s.isCorrection,s.correction);return console.log(l),o.a.createElement("div",{className:"Task2"},"Double click to change item. Blur to save.",o.a.createElement("div",{className:"list"},l.length>0?l.map((function(e){return o.a.createElement(v,{key:e.id,id:e.id,message:e.message,removeItem:a,isDone:e.isDone,doneItem:r,isCorrection:e.isCorrection,correctItem:c,handleChange:n,correction:m,handleCorrection:i})})):null),o.a.createElement("div",{className:"wrap"},"Task",o.a.createElement("input",{className:"input",placeholder:"What do you need to do?",onChange:function(e){return n(e.target.value)},value:u}),o.a.createElement("button",{className:"button",onClick:function(){return u?t(u):null}},"Save item")))}}]),n}(a.Component),I=Object(i.b)((function(e){return{todo:e.todo}}),{addItem:function(e){return{type:"ADD-ITEM",message:e}},handleChange:function(e){return{type:"HANDLE CHANGE",message:e}},removeItem:function(e){return{type:"REMOVE-ITEM",id:e}},doneItem:function(e){return{type:"DONE-ITEM",id:e}},correctItem:function(e){return{type:"CORRECT-ITEM",id:e}},handleCorrection:function(e,t){return{type:"HANDLE-CORRECTION",message:e,id:t}}})(C);var j=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"TODO Redux"),o.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:O},o.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.0c4fb5c0.chunk.js.map