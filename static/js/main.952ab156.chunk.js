(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){e.exports=a(318)},136:function(e,t,a){},139:function(e,t,a){},318:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),i=(a(136),a(20)),o=a(81),m=a(26),u=a(19),s=a(21),d=a.n(s),E=a(73),p=a.n(E),g=a(76),b=a.n(g),h=a(75),v=a.n(h),f=a(42),y=a.n(f),O=a(74),j=a.n(O),w=a(120),k=a.n(w),S=a(23),D=a.n(S),C=a(55),x=a.n(C),T=(a(139),function(e){var t=Object(n.useState)(e),a=Object(u.a)(t,2),l=a[0],r=a[1];return{value:l,onChange:function(e){return r(e.target.value)},resetValue:function(){return r("")}}});function A(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],c=a[1],o=T(""),s=o.resetValue,E=Object(m.a)(o,["resetValue"]),g=T(""),h=(g.resetValue,Object(m.a)(g,["resetValue"])),f=T(""),O=(f.resetValue,Object(m.a)(f,["resetValue"])),w=T(function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1;return t<10&&(t="0"+t),a<10&&(a="0"+a),e.getFullYear()+"-"+a+"-"+t}()),S=(w.resetValue,Object(m.a)(w,["resetValue"])),C={description:"",owner:"tushar",priority:"",status:"",plannedDate:"",notes:""};e.track&&(C.user="");var A=Object(n.useState)(C),N=Object(u.a)(A,2),V=N[0],W=N[1],M=Object(n.useState)(!1),P=Object(u.a)(M,2),B=P[0],G=P[1];Object(n.useEffect)(function(){var e=!0;for(var t in V)V[t]||(e=!1);G(e)},[V]),Object(n.useEffect)(function(){W(Object(i.a)({},V,{notes:O.value}))},[O.value]),Object(n.useEffect)(function(){console.log("test"),W(Object(i.a)({},V,{plannedDate:S.value}))},[S.value]);var q=function(){c(!1)},F=function(){console.log(V),e.addTask(V),c(!1)};return l.a.createElement("div",{className:"wrapper"},l.a.createElement(d.a,Object.assign({name:"task"},E,{style:{margin:8},margin:"normal",className:"add_task",helperText:"Type what needs to be done",label:"Enter task name",variant:"outlined"})),e.track?l.a.createElement(d.a,Object.assign({name:"track"},h,{margin:"normal",id:"outlined-name",label:"Type User",style:{margin:8},variant:"outlined",helperText:"Enter user name"})):null,l.a.createElement(x.a,{query:"(max-device-width: 1224px)"},l.a.createElement("br",null)),l.a.createElement(k.a,{disabled:!0,color:"primary",onClick:function(e){e.target.name;if(""===E.value)return alert("task cannot be Empty");W(Object(i.a)({},V,{description:E.value})),s(),c(!0)},style:{margin:8,fontSize:50,cursor:"pointer"}}),l.a.createElement(x.a,{query:"(min-device-width: 1224px)"},l.a.createElement(p.a,{fullWidth:!0,open:r,onClose:q,"aria-labelledby":"form-dialog-title"},l.a.createElement(j.a,{id:"form-dialog-title"},"Fill task Details"),l.a.createElement(v.a,{style:{textAlign:"center"}},l.a.createElement(y.a,{style:{padding:10}},"Select ",l.a.createElement("b",null,"Priority")," for current task."),l.a.createElement("select",{style:{padding:5},onChange:function(e){return W(Object(i.a)({},V,{priority:e.target.value}))}},l.a.createElement("option",{value:"high"},"high"),l.a.createElement("option",{value:"low"},"low"),l.a.createElement("option",{value:"meduim"},"medium")),l.a.createElement(y.a,{style:{padding:10}},"Select ",l.a.createElement("b",null,"Status")," for current task."),l.a.createElement("select",{style:{padding:5},onChange:function(e){return W(Object(i.a)({},V,{status:e.target.value}))}},l.a.createElement("option",{value:"planned"},"planned"),l.a.createElement("option",{value:"unplanned"},"unplanned"),l.a.createElement("option",{value:"completed"},"completed")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d.a,Object.assign({id:"date",label:"Planned Date",type:"date"},S)),l.a.createElement(d.a,Object.assign({},O,{fullWidth:!0,margin:"normal",label:"Additional notes",helperText:"notes"}))),l.a.createElement(b.a,null,l.a.createElement(D.a,{onClick:q,color:"primary"},"Cancel"),l.a.createElement(D.a,{onClick:F,disabled:!B,color:"primary"},"ADD TASK")))),l.a.createElement(x.a,{query:"(max-device-width: 1224px)"},l.a.createElement(p.a,{fullScreen:!0,fullWidth:!0,open:r,onClose:q,"aria-labelledby":"form-dialog-title"},l.a.createElement(j.a,{id:"form-dialog-title"},"Fill task Details"),l.a.createElement(v.a,{style:{textAlign:"center"}},l.a.createElement(y.a,{style:{padding:10}},"Select ",l.a.createElement("b",null,"Priority")," for current task."),l.a.createElement("select",{style:{padding:5},onChange:function(e){return W(Object(i.a)({},V,{priority:e.target.value}))}},l.a.createElement("option",{value:"high"},"high"),l.a.createElement("option",{value:"low"},"low"),l.a.createElement("option",{value:"meduim"},"medium")),l.a.createElement(y.a,{style:{padding:10}},"Select ",l.a.createElement("b",null,"Status")," for current task."),l.a.createElement("select",{style:{padding:5},onChange:function(e){return W(Object(i.a)({},V,{status:e.target.value}))}},l.a.createElement("option",{value:"planned"},"planned"),l.a.createElement("option",{value:"unplanned"},"unplanned"),l.a.createElement("option",{value:"completed"},"completed")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d.a,Object.assign({id:"date",label:"Planned Date",type:"date"},S)),l.a.createElement(d.a,Object.assign({},O,{fullWidth:!0,margin:"normal",label:"Additional notes",helperText:"notes"}))),l.a.createElement(b.a,null,l.a.createElement(D.a,{onClick:q,color:"primary"},"Cancel"),l.a.createElement(D.a,{disabled:!B,onClick:F,color:"primary"},"ADD TASK")))))}var N=a(128),V=a.n(N),W=a(54),M=a.n(W),P=a(127),B=a.n(P),G=a(78),q=a.n(G),F=a(80),K=a.n(F),L=a(72),J=a.n(L),R=a(129),z=a.n(R),I=a(130),U=a.n(I),X=a(25),Y=a.n(X);var $=function(e){return l.a.createElement(Y.a,{component:"div",style:{padding:24}},e.children)},_=a(41),H=a(121),Q=a.n(H),Z=a(122),ee=a.n(Z),te=a(123),ae=a.n(te);var ne=Object(_.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes;return l.a.createElement("div",{className:t.root},l.a.createElement(M.a,{position:"static"},l.a.createElement(Q.a,null,e.sideDrawer?null:l.a.createElement(ee.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},l.a.createElement(ae.a,null)),l.a.createElement(Y.a,{variant:"h6",color:"inherit",className:t.grow},"VG-TASK-MANAGEMENT"),e.sideDrawer?null:l.a.createElement(D.a,{color:"inherit"},"Login"))))}),le=a(124),re=a.n(le),ce=a(126),ie=a.n(ce),oe=a(16),me=a.n(oe),ue=a(125),se=a.n(ue),de=a(77),Ee=a.n(de),pe=a(32),ge=a.n(pe);var be=Object(_.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700}}})(function(e){var t=e.task;return l.a.createElement(ge.a,null,l.a.createElement(re.a,null,l.a.createElement(se.a,null,l.a.createElement(Ee.a,null,l.a.createElement(me.a,null,"Description"),l.a.createElement(me.a,{align:"right"}),l.a.createElement(me.a,{align:"right"},"Owner"),l.a.createElement(me.a,{align:"right"},"Priority"),l.a.createElement(me.a,{align:"right"},"Status"),l.a.createElement(me.a,{align:"right"},"Date"),l.a.createElement(me.a,{align:"right"},"Notes"))),l.a.createElement(ie.a,null,t.map(function(e){return console.log(e),l.a.createElement(Ee.a,{key:e.id},l.a.createElement(me.a,{style:{borderLeft:"6px solid #3982CA",borderRadius:2},component:"th",scope:"row"},e.description),l.a.createElement(me.a,{align:"right"},e.chat),l.a.createElement(me.a,{align:"right"},e.owner),l.a.createElement(me.a,{align:"right"},e.priority),l.a.createElement(me.a,{align:"right"},e.status),l.a.createElement(me.a,{align:"right"},e.plannedDate),l.a.createElement(me.a,{align:"right"},e.notes))}))))}),he=a(79),ve=a.n(he);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(u.a)(c,2),E=s[0],p=s[1],g=Object(n.useState)([]),b=Object(u.a)(g,2),h=b[0],v=b[1],f=T(""),y=(f.resetValue,Object(m.a)(f,["resetValue"])),O=Object(n.useState)([{id:1,description:"this is description",chat:l.a.createElement(q.a,{title:"Start conversation",placement:"top"},l.a.createElement(ve.a,{onClick:function(){return p(!0)},style:{cursor:"pointer"}})),owner:"tushar",priority:"high",status:"status",plannedDate:"time left",notes:"notes"}]),j=Object(u.a)(O,2),w=j[0],k=j[1];return l.a.createElement("div",null,l.a.createElement(ne,null),l.a.createElement("div",{id:"pending"}),l.a.createElement("div",{className:"delay"}),l.a.createElement("div",{className:"high"}),l.a.createElement("div",{className:"main-wrapper"},l.a.createElement("div",{className:"task"},l.a.createElement(M.a,{position:"static"},l.a.createElement(B.a,{value:a,onChange:function(e,t){console.log(t),r(t)}},l.a.createElement(K.a,{label:"My Tasks"}),l.a.createElement(K.a,{label:"Track"}))),0===a&&l.a.createElement($,null," ",l.a.createElement(A,{addTask:function(e){console.log(e),k([].concat(Object(o.a)(w),[Object(i.a)({},e,{chat:l.a.createElement(q.a,{title:"Start conversation",placement:"top"},l.a.createElement(ve.a,{onClick:function(){return p(!0)},style:{cursor:"pointer"}}))})]))}}),l.a.createElement(be,{task:w})),1===a&&l.a.createElement($,null,l.a.createElement(A,{track:!0}),l.a.createElement(be,{task:w})),l.a.createElement(V.a,{style:{minWidth:"25%",textAlign:"center"},anchor:"right",open:E,onClose:function(){return p(!1)}},l.a.createElement("div",{role:"button"},l.a.createElement(ne,{sideDrawer:!0}),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v([].concat(Object(o.a)(h),[y.value]))}},l.a.createElement(d.a,Object.assign({style:{marginTop:10,minWidth:"90%"},variant:"outlined",label:"write an updated",margin:"normal"},y))),l.a.createElement(J.a,null,h.map(function(e){return l.a.createElement(z.a,null,l.a.createElement(U.a,{primary:e,secondary:"author tushar"}))})))))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[131,2,1]]]);
//# sourceMappingURL=main.952ab156.chunk.js.map