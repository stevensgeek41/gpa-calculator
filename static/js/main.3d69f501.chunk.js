(this["webpackJsonpgpa-calculator"]=this["webpackJsonpgpa-calculator"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),i=(a(13),a(4)),s=a(5),o=a(1),u=a(7),d=a(6);a(14);function h(){return l.a.createElement("h1",null,"Please Input your course information.")}function m(e){return l.a.createElement("select",{value:e.value,onChange:e.onChange},l.a.createElement("option",{value:"A+"},"A+"),l.a.createElement("option",{value:"A"},"A"),l.a.createElement("option",{value:"A-"},"A-"),l.a.createElement("option",{value:"B+"},"B+"),l.a.createElement("option",{value:"B"},"B"),l.a.createElement("option",{value:"B-"},"B-"),l.a.createElement("option",{value:"C+"},"C+"),l.a.createElement("option",{value:"C"},"C"),l.a.createElement("option",{value:"C-"},"C-"),l.a.createElement("option",{value:"D+"},"D+"),l.a.createElement("option",{value:"D"},"D"),l.a.createElement("option",{value:"F"},"F"))}function v(e){return l.a.createElement("select",{value:e.value,onChange:e.onChange},l.a.createElement("option",{value:0},"0.00"),l.a.createElement("option",{value:3},"3.00"),l.a.createElement("option",{value:4},"4.00"))}function g(e){var t=0;switch(e){case"A+":case"A":t=4;break;case"A-":t=3.7;break;case"B+":t=3.3;break;case"B":t=3;break;case"B-":t=2.7;break;case"C+":t=2.3;break;case"C":t=2;break;case"C-":t=1.7;break;case"D+":t=1.3;break;case"D":t=1;break;case"F":t=0}return t}function E(){return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",{width:175,align:"center"},"Class Title"),l.a.createElement("td",null,"Grade"),l.a.createElement("td",null,"Credits"))))}function p(e){for(var t=e.grades.length,a=0,n=0,r=0;r<t;r++)a+=g(e.grades[r])*e.credits[r],n+=1*e.credits[r],console.log(n);return l.a.createElement("h3",null,"Current GPA: ",(a/n).toFixed(1))}var b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={grades:["A"],credits:[0]},n.gradeOnChange=n.handleGradeChange.bind(Object(o.a)(n)),n.creditOnChange=n.handleCreditChange.bind(Object(o.a)(n)),n.deleteOnClick=n.handleDelete.bind(Object(o.a)(n)),n.resetOnClick=n.handleReset.bind(Object(o.a)(n)),n.textOnSubmit=n.handleTextSubmit.bind(Object(o.a)(n)),n.addOnClick=n.handleAdd.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"handleGradeChange",value:function(e,t){var a=this.state.grades.slice();a[e]=t.target.value,this.setState({grades:a})}},{key:"handleTextSubmit",value:function(e){e.preventDefault()}},{key:"handleAdd",value:function(e){var t=this.state.credits.slice(),a=this.state.grades.slice();t.splice(e,0,0),a.splice(e,0,"A"),this.setState({grades:a,credits:t})}},{key:"handleReset",value:function(e){this.setState({grades:["A"],credits:[0]})}},{key:"handleCreditChange",value:function(e,t){var a=this.state.credits.slice();this.state.grades.slice();a[e]=t.target.value,this.setState({credits:a})}},{key:"handleDelete",value:function(e){var t=this.state.credits.slice(),a=this.state.grades.slice();t.splice(e,1),a.splice(e,1),this.setState({grades:a,credits:t})}},{key:"render",value:function(){var e=this,t=this.state.grades.slice(),a=this.state.credits.slice();return l.a.createElement("div",{className:"body"},l.a.createElement(E,null),l.a.createElement("form",{onSubmit:this.textOnSubmit},t.map((function(t,n){return l.a.createElement("div",{className:"course"+n,key:n},n+1,".",l.a.createElement("input",{type:"text",size:20}),l.a.createElement(m,{value:t,onChange:e.gradeOnChange.bind(e,n)}),l.a.createElement(v,{value:a[n],onChange:e.creditOnChange.bind(e,n)}),l.a.createElement("input",{type:"button",value:"add",onClick:e.addOnClick.bind(e,n)}),n>0&&l.a.createElement("input",{type:"button",value:"delete",onClick:e.deleteOnClick.bind(e,n)}))}))),l.a.createElement("br",null),l.a.createElement("input",{type:"button",value:"reset",onClick:this.resetOnClick}),l.a.createElement(p,{grades:this.state.grades,credits:this.state.credits}),l.a.createElement("h4",null,"calculated according to ",l.a.createElement("a",{href:"http://e-catalog.jhu.edu/undergrad-students/academic-policies/grading/"},"jhu grading policies")))}}]),a}(l.a.Component);var C=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(h,null),l.a.createElement("div",{className:"course"},l.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.3d69f501.chunk.js.map