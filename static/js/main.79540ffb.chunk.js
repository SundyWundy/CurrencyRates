(this.webpackJsonpcurrencyrate=this.webpackJsonpcurrencyrate||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},44:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(18),u=c.n(r),s=(c(23),c(5)),j=c(3),o=(c(24),c(4)),b=c.n(o),i=(c(44),c(1));function O(e){var t=e.CurrencyList,c=e.SelectedCurrency,n=e.onChangeCurrency,a=e.CurrencyValue,r=e.onChangeCurrencyValue;return Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{className:"CurrencyInput",type:"number",value:a,onChange:r}),Object(i.jsx)("select",{className:"selectList",value:c,onChange:n,children:t.map((function(e){return Object(i.jsx)("option",{value:e,children:e},e)}))})]})}function l(e){var t=e.Currency,c=e.CurrencyValue,a=Object(n.useState)([]),r=Object(j.a)(a,2),u=r[0],o=r[1],O=Object(n.useState)(),l=Object(j.a)(O,2),f=l[0],y=l[1],h=Object(n.useState)(0),C=Object(j.a)(h,2),d=C[0],v=C[1];Object(n.useEffect)((function(){b.a.get("./Common-Currency.json").then((function(e){o(Object(s.a)(Object.keys(e.data)))}))}),[]),Object(n.useEffect)((function(){b.a.get("./Common-Currency.json").then((function(e){var t=Object.keys(e.data)[d];y(e.data[t].name)}))}),[t,f,d]),Object(n.useEffect)((function(){p()}),[t,u]);var p=function(){var e=0;for(e=0;e<u.length;e++)t===u[e]&&(v(e),e=u.length)};return Object(i.jsxs)("div",{children:[c," ",f]})}var f=function(){var e,t,c=Object(n.useState)([]),a=Object(j.a)(c,2),r=a[0],u=a[1],o=Object(n.useState)([]),f=Object(j.a)(o,2),y=f[0],h=f[1],C=Object(n.useState)("USD"),d=Object(j.a)(C,2),v=d[0],p=d[1],g=Object(n.useState)("AED"),m=Object(j.a)(g,2),x=m[0],S=m[1],k=Object(n.useState)(1),E=Object(j.a)(k,2),V=E[0],N=E[1],D=Object(n.useState)(),L=Object(j.a)(D,2),I=L[0],w=L[1],A=Object(n.useState)(!0),J=Object(j.a)(A,2),q=J[0],B=J[1],M=Object(n.useState)(1),R=Object(j.a)(M,2),U=R[0],_=R[1];q?(t=V,e=V*I):(e=V,t=V/I),Object(n.useEffect)((function(){b.a.get("https://open.er-api.com/v6/latest/".concat(v)).then((function(e){var t=Object.keys(e.data.rates)[1];u(Object(s.a)(Object.keys(e.data.rates))),p(e.data.base_code),S(t),w(e.data.rates[t])}))}),[]),Object(n.useEffect)((function(){b.a.get("https://open.er-api.com/v6/latest/".concat(v)).then((function(e){u(Object(s.a)(Object.keys(e.data.rates)))}))}),[v]),Object(n.useEffect)((function(){b.a.get("https://open.er-api.com/v6/latest/".concat(x)).then((function(e){h(Object(s.a)(Object.keys(e.data.rates)))}))}),[x]),Object(n.useEffect)((function(){b.a.get("https://open.er-api.com/v6/latest/".concat(v)).then((function(e){z();var t=Object.keys(e.data.rates)[U];w(e.data.rates[t])}))}),[v,x,U]);var z=function(){for(var e=0;e<r.length;e++)x===r[e]&&(_(e),e=r.length)};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{className:"title",children:"Currency Rates "}),Object(i.jsxs)("div",{className:"Display1",children:[Object(i.jsx)(l,{Currency:v,CurrencyValue:V}),"equals"]}),Object(i.jsx)("div",{className:"Display2",children:Object(i.jsx)(l,{Currency:x,CurrencyValue:I})}),Object(i.jsx)(O,{CurrencyList:r,SelectedCurrency:v,onChangeCurrency:function(e){return p(e.target.value)},onChangeCurrencyValue:function(e){N(e.target.value),B(!0)},CurrencyValue:t}),Object(i.jsx)(O,{CurrencyList:y,SelectedCurrency:x,onChangeCurrency:function(e){S(e.target.value)},onChangeCurrencyValue:function(e){N(e.target.value),B(!1)},CurrencyValue:e,getIndex:U})]})};u.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.79540ffb.chunk.js.map