(this["webpackJsonppassword-generator"]=this["webpackJsonppassword-generator"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),r=c.n(s),o=(c(9),c(10),c(11),c(0)),i=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container",children:e.children})})},j=c(2),l=(c(13),c(14),function(e){return Object(o.jsxs)("label",{className:"checkbox",children:[Object(o.jsx)("input",{className:"checkbox__input",type:"checkbox",checked:e.checked,onChange:function(t){return e.onChange(t.target.checked)}}),Object(o.jsx)("span",{className:"checkbox__target"}),e.label]})}),b=function(){var e=Object(n.useState)(12),t=Object(j.a)(e,2),c=t[0],a=(t[1],Object(n.useState)("")),s=Object(j.a)(a,2),r=s[0],i=s[1],b=Object(n.useState)(!0),d=Object(j.a)(b,2),h=d[0],u=d[1],O=Object(n.useState)(!0),x=Object(j.a)(O,2),g=x[0],p=x[1],m=Object(n.useState)(!0),_=Object(j.a)(m,2),f=_[0],N=_[1],v=Object(n.useState)(!0),k=Object(j.a)(v,2),C=k[0],S=k[1],E=function(){var e=function(e,t,c,n,a){var s="",r="";s+=t?"!@$%^&*()":"",s+=c?"123456789":"",s+=a?"abcdefghijklmnopqrstuvwxyz":"",s+=n?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":"";for(var o=0;o<=e;o++){var i=Math.floor(Math.random()*s.length);r+=s.substring(i,i+1)}return r}(c,h,g,C,f);i(e)};return Object(n.useEffect)((function(){E()}),[c,h,g,f,C]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"generator",children:Object(o.jsxs)("div",{className:"generator__inner",children:[Object(o.jsx)("span",{className:"generator__title",children:"PASSWORD GENERATOR"}),Object(o.jsxs)("div",{className:"generator__options",children:[Object(o.jsx)("div",{className:"generator__option",children:Object(o.jsx)(l,{label:"Numbers",checked:g,onChange:p})}),Object(o.jsx)("div",{className:"generator__option",children:Object(o.jsx)(l,{label:"Symbols",checked:h,onChange:u})}),Object(o.jsx)("div",{className:"generator__option",children:Object(o.jsx)(l,{label:"UpperCase",checked:C,onChange:S})}),Object(o.jsx)("div",{className:"generator__option",children:Object(o.jsx)(l,{label:"LowerCase",checked:f,onChange:N})})]}),Object(o.jsx)("div",{className:"generator__starter",children:Object(o.jsx)("button",{className:"generator__starter-btn",onClick:E,children:"GENERATE"})}),Object(o.jsxs)("div",{className:"generator__output",children:[Object(o.jsx)("span",{className:"generator__output-copy",onClick:function(){navigator.clipboard.writeText(r).then((function(){console.log("success")})).catch((function(){console.log("error")}))},children:"COPY"}),Object(o.jsx)("span",{className:"generator__output-result",children:r.length>0?r:"Please select at least one option."})]})]})})})},d=(c(15),function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"content",children:e.children})})}),h=function(){return Object(o.jsx)("div",{className:"app",children:Object(o.jsx)(i,{children:Object(o.jsx)(d,{children:Object(o.jsx)(b,{})})})})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.638bd531.chunk.js.map