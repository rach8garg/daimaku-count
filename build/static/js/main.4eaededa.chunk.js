(this["webpackJsonpdaimaku-counter"]=this["webpackJsonpdaimaku-counter"]||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(11),i=n.n(o),r=(n(71),n(34)),s=(n(72),n(121)),u=n(123),l=n(120),j=n(122),d=n(51);n(80),n(81);d.a.initializeApp({apiKey:"AIzaSyA5yKC4QasaZ_D0r5axUN7VZtjvNwNwpZg",authDomain:"daimaku-counter.firebaseapp.com",databaseURL:"https =//daimaku-counter.firebaseio.com",projectId:"daimaku-counter",storageBucket:"daimaku-counter.appspot.com"});var b=d.a,h=b.firestore();b.storage();h.enablePersistence().catch((function(e){"failed-precondition"===e.code?console.log("persistance failed"):"unimplemented"===e.code&&console.log("persistance not available")}));var m=n(13),O=n(6);var f=function(){var e=Object(m.f)(),t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],o=n[1],i=Object(c.useState)(0),d=Object(r.a)(i,2),b=d[0],f=d[1],p=Object(c.useState)(""),g=Object(r.a)(p,2),v=g[0],x=g[1],k=Object(c.useState)([]),w=Object(r.a)(k,2),C=w[0],E=w[1];Object(c.useEffect)((function(){var e=[];h.collection("members").get().then((function(t){t.forEach((function(t){e.push(t.data())})),E(e)})).catch((function(e){console.log("Error getting documents: ",e)}))}),[]);var N=!a||!b||"lotus108"!==v;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"I am"}),Object(O.jsx)("div",{children:Object(O.jsx)(u.a,{variant:"outlined",className:"white-font",children:Object(O.jsxs)(l.a,{native:!0,value:a,onChange:function(e){o(e.target.value)},children:[Object(O.jsx)("option",{value:""}),C.map((function(e,t){return Object(O.jsx)("option",{value:e.name,children:e.name},t)}))]})})}),Object(O.jsx)("p",{children:"and I want to contribute"}),Object(O.jsx)(j.a,{variant:"outlined",type:"number",value:b,onChange:function(e){f(e.target.value)},placeholder:"Count in minutes",className:"time-input"}),Object(O.jsx)("p",{children:"minutes towards March 16th Campaign."})]}),Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsx)(j.a,{variant:"outlined",type:"password",value:v,onChange:function(e){x(e.target.value)},placeholder:"Password",className:"custom-input"}),Object(O.jsx)(s.a,{variant:"contained",onClick:function(){h.collection("members").where("name","==",a).get().then((function(t){t.forEach((function(t){h.collection("members").doc(t.id).set({name:t.data().name,count:Number(b)+t.data().count}).then((function(){x(""),f(0),o(""),e.push("/thanks")})).catch((function(e){console.log("Error setting documents: ",e)}))}))})).catch((function(e){console.log("Error getting documents: ",e)}))},color:"primary",disabled:N,children:"Contribute"})]})]})};var p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,125)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))},g=n(40),v=n(117),x=n(118),k=n(119),w=n(56);function C(){return Object(O.jsx)(w.a,{date:new Date("2021-03-16")})}var E=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(v.a,{position:"static",children:Object(O.jsxs)(x.a,{variant:"dense",children:[Object(O.jsx)(k.a,{variant:"subtitle2",color:"inherit",children:Object(O.jsx)(g.b,{to:"/",children:"Munneshwara - Daimaku Count"})}),Object(O.jsx)("div",{className:"counter",children:Object(O.jsx)(C,{})})]})})})};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(E,{}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(m.c,{children:[Object(O.jsx)(m.a,{path:"/thanks",component:function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=0;h.collection("members").get().then((function(t){t.forEach((function(t){e=t.data().count+e})),a(Math.floor(e/60))})).catch((function(e){console.log("Error getting documents: ",e)}))}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:"Thank You !!"}),Object(O.jsxs)("h4",{children:["Total district contribution : ",n," Hours"]})]})}}),Object(O.jsx)(m.a,{path:"/",component:f})]})})]})})}),document.getElementById("root")),p()}},[[79,1,2]]]);
//# sourceMappingURL=main.4eaededa.chunk.js.map