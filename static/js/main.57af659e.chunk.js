(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),s=n(3),l=n(4),i=n(6),u=n(5),d=n(7),m=(n(13),function(t){var e=t.goods;return a.a.createElement("ul",{className:"list"},e.map((function(t){return a.a.createElement("li",{className:"item",key:t.id,style:{color:t.color}},t.name)})))}),h=function(t){var e=t.handleAll,n=t.handleFive,o=t.handleRed;return a.a.createElement("div",{className:"actions"},a.a.createElement("button",{className:"actions__button",type:"button",onClick:e},"All"),a.a.createElement("button",{className:"actions__button",type:"button",onClick:n},"5 first"),a.a.createElement("button",{className:"actions__button",type:"button",onClick:o},"Red only"))},f=function(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))},b=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={goods:[],isStarted:!1},n.onShowAll=function(){f().then((function(t){n.setState({goods:t,isStarted:!0})}))},n.onShowFive=function(){f().then((function(t){return n.setState({goods:t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)})}))},n.onShowRed=function(){f().then((function(t){return n.setState({goods:t.filter((function(t){return"red"===t.color}))})}))},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.isStarted;return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,{handleAll:this.onShowAll,handleFive:this.onShowFive,handleRed:this.onShowRed}),n?a.a.createElement(m,{goods:e}):a.a.createElement("div",{className:"start"},"Press All to start"))}}]),e}(o.Component);c.a.render(a.a.createElement(b,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.57af659e.chunk.js.map