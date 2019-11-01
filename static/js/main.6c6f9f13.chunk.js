(this["webpackJsonpgoit-react-hw-02-bank-account"]=this["webpackJsonpgoit-react-hw-02-bank-account"]||[]).push([[0],{1:function(e,t,a){e.exports={balance:"Balance_balance___Oi5U",balance_downward:"Balance_balance_downward__IxJSd",balance_upward:"Balance_balance_upward__qp94R",material_icons:"Balance_material_icons__22pPN"}},12:function(e,t,a){e.exports={history:"TransactionHistory_history__2xDy2"}},13:function(e,t,a){},14:function(e,t,a){e.exports=a(29)},2:function(e,t,a){e.exports={controls:"Controls_controls__1H3eG",input:"Controls_input__1Uarx",button:"Controls_button__1lK37"}},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=a(9),i=a(4),s=a(5),u=a(7),m=a(6),h=a(8),p=a(2),b=a.n(p),d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleClickDeposit=function(){var e=Number(a.state.value);a.props.onClickDeposit(e),a.setState({value:""})},a.handleClickWithdraw=function(){var e=Number(a.state.value);a.props.onClickWithdraw(e),a.setState({value:""})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("section",{className:b.a.controls},r.a.createElement("input",{type:"number",className:b.a.input,onChange:this.handleChange,value:e,placeholder:"Enter amount ..."}),r.a.createElement("button",{type:"button",className:b.a.button,onClick:this.handleClickDeposit},"Deposit"," ")," ",r.a.createElement("button",{type:"button",className:b.a.button,onClick:this.handleClickWithdraw},"Withdraw"," ")," ")}}]),t}(n.Component),_=a(1),f=a.n(_),w=function(e){var t=e.balance,a=e.income,n=e.expense;return r.a.createElement("section",{className:f.a.balance},r.a.createElement("span",{className:f.a.balance_downward},r.a.createElement("i",{className:f.a.material_icons}," arrow_downward ")," ",a,"$"," ")," ",r.a.createElement("span",{className:f.a.balance_upward},r.a.createElement("i",{className:f.a.material_icons}," arrow_upward ")," ",n,"$"," ")," ",r.a.createElement("span",{className:f.a.balance_item}," Balance: ",t,"$ ")," ")},y=a(12),E=a.n(y),v=function(e){var t=e.transactions;return r.a.createElement("table",{className:E.a.history},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," Transaction ")," ",r.a.createElement("th",null," Amount ")," ",r.a.createElement("th",null," Date ")," ")," ")," ",r.a.createElement("tbody",null," ",t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null," ",e.type," ")," ",r.a.createElement("td",null," ",e.amount," ")," ",r.a.createElement("td",null," ",e.date," ")," ")}))," ")," ")},C=a(13),k=a.n(C),D=a(19),N=new Date,O={DEPOSIT:"Deposit",WITHDRAW:"Withdraw"},W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={history:[],balance:0},a.income=function(){return a.state.history.filter((function(e){return"Deposit"===e.type})).reduce((function(e,t){return e+t.amount}),0)},a.expense=function(){return a.state.history.filter((function(e){return"Withdraw"===e.type})).reduce((function(e,t){return e+t.amount}),0)},a.onClickButtonDeposit=function(e){var t={id:D.generate(),type:O.DEPOSIT,amount:e,date:N.toLocaleString()};0===e?alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!"):a.setState((function(a){return{balance:a.balance+e,history:[].concat(Object(o.a)(a.history),[t])}}))},a.onClickButtonWithdraw=function(e){var t={id:D.generate(),type:O.WITHDRAW,amount:e,date:N.toLocaleString()};0===e?alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!"):e>a.state.balance?alert("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!"):a.setState((function(a){return{balance:a.balance-e,history:[].concat(Object(o.a)(a.history),[t])}}))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.history,a=e.balance;return r.a.createElement("div",{className:k.a.dashboard},r.a.createElement(d,{onClickDeposit:this.onClickButtonDeposit,onClickWithdraw:this.onClickButtonWithdraw})," ",r.a.createElement(w,{balance:a,income:this.income(t),expense:this.expense(t)})," ",r.a.createElement(v,{transactions:t})," ")}}]),t}(n.Component),g=function(){return r.a.createElement(W,null)};a(28);l.a.render(r.a.createElement(g,null),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6c6f9f13.chunk.js.map