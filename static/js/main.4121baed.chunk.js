(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(7),n=a.n(s),i=a(6),c=a(2),r=a(1),l=(a(12),[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}]),d=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],m=(a(13),a(0)),o=function(e){var t=e.todo;return Object(m.jsx)("ul",{className:"todoUser list",children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("p",{className:"todoTitle","data-cy":"title","data-id":t.id,children:["TASK:"," ",t.title]}),Object(m.jsx)("span",{className:"todoCompleted","data-cy":"status",children:t.completed?Object(m.jsx)("p",{className:"completed",children:"STATUS: COMPLETED"}):Object(m.jsx)("p",{className:"in_process",children:"STATUS: IN PROCESS"})})]})})},u=(a(15),function(e){var t=e.userId,a=d.find((function(e){return t===e.id}));return Object(m.jsx)("ul",{className:"todoUser list",children:a&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{className:"userName","data-cy":"username",children:a.name}),Object(m.jsx)("p",{className:"userEmail","data-cy":"email",children:a.email})]})})}),j=(a(16),function(e){var t=e.list;return Object(m.jsx)("ul",{className:"preparedTodos_list",children:t.map((function(e){return Object(m.jsxs)("div",{className:"item",children:[Object(m.jsx)("li",{className:"user__item",children:Object(m.jsx)(u,{userId:e.userId})}),Object(m.jsx)("li",{className:"todo__item",children:Object(m.jsx)(o,{todo:e})})]},e.id)}))})}),b=function(){var e=Object(r.useState)(l),t=Object(c.a)(e,2),a=t[0],s=t[1],n=Object(r.useState)(""),o=Object(c.a)(n,2),u=o[0],b=o[1],h=Object(r.useState)(!1),O=Object(c.a)(h,2),p=O[0],x=O[1],f=Object(r.useState)(!1),N=Object(c.a)(f,2),S=N[0],y=N[1],v=Object(r.useState)(0),_=Object(c.a)(v,2),g=_[0],C=_[1],T=Math.max.apply(Math,Object(i.a)(a.map((function(e){return e.id}))));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"mainTitle",children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault();var t={id:T+1,title:u,userId:g,completed:!1};x(!u),y(!g),u&&g&&(s((function(e){return[].concat(Object(i.a)(e),[t])})),b(""),C(0))},className:"form",children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("input",{className:"input",type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:u,onChange:function(e){x(!1),b(e.target.value.replace(/[^a-zA-Z\u0430-\u044f\u0410-\u042f0-9 ]/g,""))}}),p&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("select",{className:"select","data-cy":"userSelect",value:g,onChange:function(e){y(!1),C(+e.target.value)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),d.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),S&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",className:"select",children:"Add"})]}),Object(m.jsx)(j,{list:a})]})};n.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.4121baed.chunk.js.map