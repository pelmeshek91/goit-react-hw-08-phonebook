"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[14],{14:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r=t(434),a="Filter_filterWrap__xOHoa",u="Filter_filterTitle__5SDqd",o=t(330),i=t(184),c=function(){var e=(0,r.v9)((function(e){return e.contacts.filter})),n=(0,r.I0)();return(0,i.jsx)("div",{className:a,children:(0,i.jsxs)("label",{children:[(0,i.jsx)("p",{className:u,children:"Find contact by name"}),(0,i.jsx)("input",{type:"text",value:e,onChange:function(e){n(o.N.changeFilter(e.target.value))}})]})})},s=t(942),l=t(413),f=t(439),d=t(791),p="Form_form__e1yzW",m="Form_btnForm__97Fxv",h="Form_caption__YaEih",v=t(52),b="NOT_FOUND";var y=function(e,n){return e===n};function x(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?y:r,u=t.maxSize,o=void 0===u?1:u,i=t.resultEqualityCheck,c=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),s=1===o?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:b},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(c):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return b}return{get:r,put:function(n,a){r(n)===b&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,c);function l(){var n=s.get(arguments);if(n===b){if(n=e.apply(null,arguments),i){var t=s.getEntries(),r=t.find((function(e){return i(e.value,n)}));r&&(n=r.value)}s.put(arguments,n)}return n}return l.clearCache=function(){return s.clear()},l}function j(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function g(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var u,o=0,i={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(i=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=i,l=s.memoizeOptions,f=void 0===l?t:l,d=Array.isArray(f)?f:[f],p=j(r),m=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(d)),h=e((function(){for(var e=[],n=p.length,t=0;t<n;t++)e.push(p[t].apply(null,arguments));return u=m.apply(null,e)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:m,dependencies:p,lastResult:function(){return u},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return a}var _=g(x),C=function(e){return e.contacts.contacts.items},k=_([function(e){return e.contacts.filter},C],(function(e,n){return""===e?n:n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),w={name:"",number:""},A=function(){var e=(0,d.useState)(w),n=(0,f.Z)(e,2),t=n[0],a=n[1],u=(0,r.I0)(),o=(0,r.v9)(C),c=function(e){var n=e.target,t=n.name,r=n.value;a((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,s.Z)({},t,r))}))};return(0,i.jsxs)("form",{className:p,onSubmit:function(e){e.preventDefault(),o.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts!")):u((0,v.je)(t)),a(w)},children:[(0,i.jsxs)("label",{children:[(0,i.jsx)("p",{className:h,children:"Name"}),(0,i.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t.name,onChange:c})]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("p",{className:h,children:"Number"}),(0,i.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:t.number,onChange:c})]}),(0,i.jsx)("button",{className:m,type:"submit",children:"Add contact"})]})},F=function(e){var n=e.contact,t=e.closeForm,a=(0,d.useState)(n.name),u=(0,f.Z)(a,2),o=u[0],c=u[1],s=(0,d.useState)(n.number),p=(0,f.Z)(s,2),m=p[0],h=p[1],b=(0,r.I0)(),y=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":c(r);break;case"number":h(r)}};return(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b((0,v.KY)((0,l.Z)((0,l.Z)({},n),{},{name:o,number:m}))),c(""),h(""),t()},children:[(0,i.jsx)("input",{type:"text",name:"name",value:o,onChange:y,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,i.jsx)("input",{type:"tel",name:"number",value:m,onChange:y,autoComplete:"false",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"  number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,i.jsx)("button",{type:"submit",children:"Save"})]})},N="Phonebook_contactsList__P05jh",Z="Phonebook_contactsItem__c7BeR",z=function(){var e=(0,d.useState)({}),n=(0,f.Z)(e,2),t=n[0],a=n[1],u=(0,r.I0)(),o=(0,r.v9)(k);(0,d.useEffect)((function(){u((0,v.VC)())}),[u]);var c=function(){a(null)};return(0,i.jsx)("ul",{className:N,children:null===o||void 0===o?void 0:o.map((function(e){var n=e.name,r=e.number,s=e.id;return(0,i.jsxs)("li",{className:Z,children:[(0,i.jsxs)("p",{children:[n," : ",r]}),(0,i.jsx)("button",{type:"button",onClick:function(){u((0,v.xX)(s))},children:"Delete"}),(0,i.jsx)("button",{type:"button",onClick:function(){return function(e){var n=o.find((function(n){return n.id===e}));a(n)}(s)},children:"Edit"}),(null===t||void 0===t?void 0:t.id)===s&&(0,i.jsx)(F,{contact:t,closeForm:c})]},s)}))})},S=function(){return(0,i.jsxs)("div",{children:[(0,i.jsx)(A,{}),(0,i.jsx)(c,{}),(0,i.jsx)(z,{})]})}}}]);
//# sourceMappingURL=14.2356832f.chunk.js.map