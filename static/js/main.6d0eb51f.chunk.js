(this["webpackJsonpprojeto-trybe-wallet"]=this["webpackJsonpprojeto-trybe-wallet"]||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/login.eed66231.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/editar.c50bc969.png"},31:function(e,t,a){e.exports=a.p+"static/media/excluir.837c7aa4.png"},35:function(e,t,a){e.exports=a(56)},40:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),i=a(21),o=(a(40),a(14)),s=a(3),u=a(2),d=a(16),m=a(8),p=a(9),h=a(11),E=a(10),b=(a(45),a(29)),v=a.n(b),f=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).onHeandleChange=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n),(function(){return e.isHabilitButton()}))},e.validEmail=function(){var t=e.state.email;return/\S+@\S+\.\S+/.test(t)},e.validPassword=function(){return e.state.password.length>=6},e.isHabilitButton=function(){e.validPassword()&&e.validEmail()?e.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},{isDesible:!1})})):e.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},{isDesible:!0})}))},e.onClick=function(){var t=e.props,a=t.history;(0,t.addEmailAction)(e.state.email),a.push("/carteira")},e.state={email:"",password:"",isDesible:!0},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.isDesible;return r.a.createElement("div",{className:"all-container-login"},r.a.createElement("h2",{className:"title-login"},"Login"),r.a.createElement("div",{className:"section-login"},r.a.createElement("div",{className:"login-left"},r.a.createElement("img",{src:v.a,alt:"img login"})),r.a.createElement("form",{className:"login-rigth"},r.a.createElement("label",{htmlFor:"email"},"Email:",r.a.createElement("input",{"data-testid":"email-input",name:"email",id:"email",type:"email",value:t,onChange:this.onHeandleChange})),r.a.createElement("label",{htmlFor:"passsword"},"Senha:",r.a.createElement("input",{"data-testid":"password-input",name:"password",id:"passwoerd",type:"password",value:a,onChange:this.onHeandleChange})),r.a.createElement("div",{className:"button-center"},r.a.createElement("button",{id:"submit",type:"button",disabled:n,onClick:this.onClick},"Entrar")))))}}]),a}(r.a.Component),g=Object(o.b)(null,(function(e){return{addEmailAction:function(t){return e({type:"ADD_EMAIL",payload:t})}}}))(f),y=a(12),C=a.n(y),j=a(18),O=(a(47),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).constTotal=function(){var t=e.props.expensesList.reduce((function(e,t){var a=t.exchangeRates[t.currency].ask;return e+Number(t.value)*a}),0);return Number(t).toFixed(2)},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.emailProps;return r.a.createElement("div",{className:"all-conatiner-info"},r.a.createElement("h1",{className:"title-wallet"},"TrybeWallet"),r.a.createElement("div",{className:"info-left"},r.a.createElement("p",{"data-testid":"email-field",className:"div-email"},"email:"," ",e||"email@gmail"),r.a.createElement("div",{"data-testid":"total-field",className:"div-field"},this.constTotal()),r.a.createElement("div",{"data-testid":"header-currency-field",className:"div-curreny"},"BRL")))}}]),a}(r.a.Component));var x=Object(o.b)((function(e){return{emailProps:e.user.email,expensesList:e.wallet.expenses}}),null)(O),D=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onHandleChange,n=e.description,l=e.siglas,c=e.onClickDespesas,i=e.method,o=e.text,s=e.tag;return r.a.createElement("form",{className:"container-form"},r.a.createElement("label",{htmlFor:"value-input"},"Valor:",r.a.createElement("input",{id:"value-input","data-testid":"value-input",type:"number",name:"value",value:t,onChange:a,className:"value-input"})),r.a.createElement("label",{htmlFor:"description-input"},"Descri\xe7\xe3o:",r.a.createElement("input",{id:"description-input","data-testid":"description-input",type:"text",name:"description",value:n,onChange:a})),r.a.createElement("label",{htmlFor:"select-sigla"},"Moeda:",r.a.createElement("select",{name:"currency","data-testid":"currency-input",onChange:a,id:"select-sigla",defaultValue:l.map((function(e){return e===t}))},l.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("label",{htmlFor:"method"},r.a.createElement("select",{name:"method",id:"method",onChange:a,"data-testid":"method-input",defaultValue:i===t},r.a.createElement("option",{value:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito"))),r.a.createElement("label",{htmlFor:"tag"},"Categoria:",r.a.createElement("select",{name:"tag",id:"tag",onChange:a,"data-testid":"tag-input"},r.a.createElement("option",{value:"Alimenta\xe7\xe3o",selected:"Alimenta\xe7\xe3o"===s},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer",selected:"Lazer"===s},"Lazer"),r.a.createElement("option",{value:"Trabalho",selected:"Trabalho"===s},"Trabalho"),r.a.createElement("option",{value:"Transporte",selected:"Transporte"===s},"Transporte"),r.a.createElement("option",{value:"Sa\xfade",selected:"Sa\xfade"===s},"Sa\xfade"))),r.a.createElement("button",{type:"button",id:"button-despesas",onClick:c},o))}}]),a}(r.a.Component),w=(a(48),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onHandleChange,n=e.description,l=e.siglas,c=e.onClickDespesas,i=e.text;return r.a.createElement("form",{className:"container-form"},r.a.createElement("label",{htmlFor:"value-input"},"Valor",r.a.createElement("input",{id:"value-input","data-testid":"value-input",type:"number",name:"value",value:t,onChange:a,className:"value-input"})),r.a.createElement("label",{htmlFor:"description-input"},"Descri\xe7\xe3o",r.a.createElement("input",{id:"description-input","data-testid":"description-input",type:"text",name:"description",value:n,onChange:a,className:"description-input"})),r.a.createElement("label",{htmlFor:"select-sigla"},"Moeda",r.a.createElement("select",{className:"select",name:"currency","data-testid":"currency-input",onChange:a,id:"select-sigla"},l.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("label",{htmlFor:"method"},"M\xe9todo",r.a.createElement("select",{name:"method",id:"method",onChange:a,"data-testid":"method-input",className:"select"},r.a.createElement("option",{value:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito"))),r.a.createElement("label",{htmlFor:"tag"},"Categoria",r.a.createElement("select",{name:"tag",id:"tag",onChange:a,"data-testid":"tag-input",className:"select"},r.a.createElement("option",{value:"Alimenta\xe7\xe3o"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade"},"Sa\xfade"))),r.a.createElement("button",{type:"button",id:"button-despesas",className:"button-despesas",onClick:c},i))}}]),a}(r.a.Component)),N=(a(49),a(30)),k=a.n(N),S=a(31),A=a.n(S),T=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).onClickDespesas=Object(j.a)(C.a.mark((function t(){var a,n,r,l;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props,n=a.listDespesas,r=a.addListCorrices,t.next=3,r();case 3:l=t.sent,e.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},{id:e.id+1,exchangeRates:l})})),n(e.state),e.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},{value:"",description:""})}));case 7:case"end":return t.stop()}}),t)}))),e.onClickAlterar=Object(j.a)(C.a.mark((function t(){var a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.dispachSalvarEdit,t.next=3,a(e.state);case 3:case"end":return t.stop()}}),t)}))),e.onHandleChange=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n))},e.buttonEdit=function(){var t=Object(j.a)(C.a.mark((function t(a,n){var r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.props.dispachEditDespesa,t.next=3,r(n);case 3:e.prencheInput();case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.prencheInput=function(){var t=e.props.edit;e.setState({value:t.value,description:t.description,currency:t.currency,tag:t.currency,method:t.method})},e.state={id:-1,value:"",description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o",exchangeRates:{}},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.addListCorrices,e.next=3,t();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.siglas,n=t.listExpenses,l=t.removeItem,c=t.edit,i=this.state,o=i.value,s=i.description,u=i.method,d=i.tag,m=i.currency;return console.log(c),r.a.createElement("div",{className:"all-containter-wallet"},r.a.createElement(x,null),c?r.a.createElement(D,{value:o,onHandleChange:this.onHandleChange,description:s,siglas:a,currency:m,method:u,tag:d,onClickDespesas:this.onClickAlterar,text:"Editar despesa"}):r.a.createElement(w,{value:o,onHandleChange:this.onHandleChange,description:s,siglas:a,method:u,tag:d,onClickDespesas:this.onClickDespesas,text:"Adicionar",currency:m}),r.a.createElement("div",{className:"container-table"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",{scope:"col"},"Tag"),r.a.createElement("th",{scope:"col"},"M\xe9todo de pagamento"),r.a.createElement("th",{scope:"col"},"Valor"),r.a.createElement("th",{scope:"col"},"Moeda"),r.a.createElement("th",{scope:"col"},"C\xe2mbio utilizado"),r.a.createElement("th",{scope:"col"},"Valor convertido"),r.a.createElement("th",{scope:"col"},"Moeda de convers\xe3o"),r.a.createElement("th",{scope:"col"},"Editar/Excluir"))),r.a.createElement("tbody",null,n.length>0&&n.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{className:"td-descripion"},t.description),r.a.createElement("td",null,t.tag),r.a.createElement("td",null,t.method),r.a.createElement("td",null,Number(t.value).toFixed(2)),r.a.createElement("td",null,t.exchangeRates[t.currency].name),r.a.createElement("td",null,Number(t.exchangeRates[t.currency].ask).toFixed(2)),r.a.createElement("td",null,(Number(t.exchangeRates[t.currency].ask)*Number(t.value)).toFixed(2)),r.a.createElement("td",{className:"td-Real"},"Real"),r.a.createElement("td",null,r.a.createElement("button",{type:"button","data-testid":"edit-btn",onClick:function(a){return e.buttonEdit(a,t)},className:"button-edit"},r.a.createElement("img",{src:k.a,width:"20px",alt:"buttao-edit"})),r.a.createElement("button",{type:"button","data-testid":"delete-btn",onClick:function(){return l(t.id)},className:"button-excluir"},r.a.createElement("img",{src:A.a,width:"20px",alt:"buttao-excluir"}))))}))))))}}]),a}(r.a.Component);T.defaultProps={edit:{}};var F=Object(o.b)((function(e){return{siglas:e.wallet.currencies,listExpenses:e.wallet.expenses,edit:e.wallet.edit}}),(function(e){return{addListCorrices:function(){return e((function(e){return fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json()})).then((function(t){var a=Object.keys(t).filter((function(e){return"USDT"!==e}));return e({type:"FECTH_CORRENCIES",payload:a}),t}))}))},listDespesas:function(t){return e({type:"ADD_DEPESAS",payload:t})},removeItem:function(t){return e({type:"REMOVE_DEPESA",payload:t})},dispachEditDespesa:function(t){return e({type:"EDIT_DESPESA",payload:t})},dispachSalvarEdit:function(t){return e({type:"SALVE_EDIT",payload:t})}}}))(T);a(50);var L=function(){return r.a.createElement("div",{className:"all-container"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:g}),r.a.createElement(s.a,{exact:!0,path:"/carteira",component:F})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(13),H=a(32),I=a(33),_={email:""};var M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EMAIL":return Object(u.a)(Object(u.a)({},e),{},{email:t.payload});default:return e}},P=a(34),V={currencies:[],expenses:[],edit:null};var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FECTH_CORRENCIES":return Object(u.a)(Object(u.a)({},e),{},{currencies:t.payload});case"ADD_DEPESAS":return Object(u.a)(Object(u.a)({},e),{},{expenses:[].concat(Object(P.a)(e.expenses),[t.payload])});case"REMOVE_DEPESA":return Object(u.a)(Object(u.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.payload}))});case"EDIT_DESPESA":return Object(u.a)(Object(u.a)({},e),{},{edit:t.payload});case"SALVE_EDIT":return console.log("SALVE_EDIT",t.payload),console.log(e.edit.id),Object(u.a)(Object(u.a)({},e),{},{expenses:e.expenses.map((function(a){return console.log("case1:",a.id,t.payload.id),console.log("case2:",a.id,e.edit.id),a.id===e.edit.id&&(a.value=t.payload.value,a.description=t.payload.description,a.currency=t.payload.currency,a.method=t.payload.method,a.tag=t.payload.tag),a})),edit:null});default:return e}},B=Object(R.combineReducers)({user:M,wallet:z}),W=Object(R.createStore)(B,Object(H.composeWithDevTools)(Object(R.applyMiddleware)(I.a)));c.a.render(r.a.createElement(i.a,{basename:"/projeto-trybe-wallet"},r.a.createElement(o.a,{store:W},r.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.6d0eb51f.chunk.js.map