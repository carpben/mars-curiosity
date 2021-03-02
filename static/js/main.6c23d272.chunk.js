(this["webpackJsonpebay-ben"]=this["webpackJsonpebay-ben"]||[]).push([[0],{74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r,i,a=n(1),c=n.n(a),o=n(40),s=n.n(o),u=n(18),l=n(9),d=n(3),b=n(7),f=n(11),h=n(22),g=Object(d.a)(r||(r=Object(h.a)(["\n\tpadding: unset;\n\tbackground-color: unset;\n\tborder: unset;\n\t:focus {\n\t\toutline: none;\n\t}\n"]))),p=Object(d.a)({display:"flex",justifyContent:"center",alignItems:"center"}),j=n(0),O=function(e){var t=e.handler,n=e.stl,r=Object(f.a)(e,["handler","stl"]);return Object(j.b)("button",Object(b.a)({onClick:t,css:[v,n]},r))},v=Object(d.a)(g,{cursor:"pointer",fontSize:16}),m=function(e){var t=e.handler,n=Object(f.a)(e,["handler"]);return Object(j.b)(O,Object(b.a)({stl:{backgroundColor:"#ded6c9",padding:20,borderRadius:12,fontWeight:500,":hover, :focus":{backgroundColor:"#bbb"}},handler:t},n))},y=Object(d.a)({fontWeight:"bolder",fontSize:38,marginBottom:20}),x=function(e){return Object(j.b)("h1",Object(b.a)({css:y},e))},C=["Part of NASA's Mars Science Laboratory mission, Curiosity is the largest and most capable rover ever sent to Mars. It launched November 26, 2011 and landed on Mars at 10:32 p.m. PDT on Aug. 5, 2012 (1:32 a.m. EDT on Aug. 6, 2012).","Curiosity set out to answer the question: Did Mars ever have the right environmental conditions to support small life forms called microbes? Early in its mission, Curiosity's scientific tools found chemical and mineral evidence of past habitable environments on Mars. It continues to explore the rock record from a time when Mars could have been home to microbial life.","Curiosity explores Gale Crater and acquires rock, soil, and air samples for onboard analysis. The car-size rover is about as tall as a basketball player and uses a 7 foot-long arm to place tools close to rocks selected for study. Curiosity's large size allows it to carry an advanced kit of 10 science instruments. It has tools including 17 cameras, a laser to vaporize and study small pinpoint spots of rocks at a distance."];!function(e){e.ABOUT="ABOUT",e.IMAGES="IMAGES",e.WEATHER="WEATHER"}(i||(i={}));var S,w=Object(j.b)("div",{css:{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://mars.nasa.gov/internal_resources/585)",backgroundSize:"cover",backgroundPosition:"center",marginRight:20,flex:9,position:"relative"},children:Object(j.b)("div",{css:{position:"absolute",top:"100%",left:0,right:0,textAlign:"center"},children:"Curiosity rover image"})}),T=function(e){var t=e.size,n=void 0===t?10:t,r=e.direction,i=Object(f.a)(e,["size","direction"]),a="".concat(n/4,"px solid #666"),c="down"===r?135:"right"===r?45:-135;return Object(j.b)("div",Object(b.a)({css:{width:n,height:n,position:"relative",borderTop:a,borderRight:a,transform:"rotate(".concat(c,"deg)"),left:"left"===r?n/4:"right"===r?-n/4:0}},i))},P={imageGrid:Object(d.a)({display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:20}),primaryColor:"#8D6338"},A=n(10),k=n.n(A),E=n(14),R=n(77),W=n(78),M=n(25),z=n(41),B=n.n(z),q=function(){var e=Object(E.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B()(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e,t){return Array.from(new Array(e)).map((function(e,n){return t(n)}))},I=Object.keys,L=function(e,t){return Math.random()*(t-e+1)+e},U=function(e,t){var n=Math.pow(10,t);return Math.round(n*e)/n};!function(e){e.Tempreture="AT",e.Wind="HWS",e.Pressure="PRE"}(S||(S={}));var G,_=function(e,t,n,r){var i=t+e%n;return{av:L(i,i+r)}},F=new Date,H=function(){return F.toISOString()},V=D(200,(function(e){return function(e){var t=e+1;return{AT:_(t,-100,100,80),HWS:_(t,.15,10,17),PRE:_(t,722,40,40),First_UTC:H(),Last_UTC:H(),sol:t}}(e)})),N=function(e){var t=e.sort,n=e.page,r=e.resultsPerPage,i=(n-1)*r,a=n*r;return V.sort((function(e,n){return n[t].av-e[t].av})).slice(i,a)},Q=function(){var e=Object(E.a)(k.a.mark((function e(t){var n,r,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.date,r=t.page,e.next=3,q({url:"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=".concat(n,"&api_key=").concat("qLPoCxviAALdxi5RLgnbwC9k1o07UEQv1o5b7nMu","&page=").concat(r)});case 3:return i=e.sent,e.abrupt("return",i.photos);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J={photos:[],loading:!0,queries:{page:1,date:Object(R.a)(Object(W.a)(new Date,3),"yyyy-MM-dd")}},K=function(){var e=Object(M.a)(J),t=Object(l.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){(function(){var e=Object(E.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r((function(e){e.loading=!0})),e.next=4,Q(n.queries);case 4:t=e.sent,r((function(e){e.photos=t})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r((function(e){e.failed=!0}));case 11:return e.prev=11,r((function(e){e.loading=!1})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}})()()}),[n.queries]),console.log(n.queries);return{state:n,setPage:function(e){return r((function(t){t.queries.page=e}))},setDate:function(e){return r((function(t){t.queries.date=e}))}}},X=function(){var e=K().state,t=e.photos,n=e.failed,r=Object(a.useState)(1),i=Object(l.a)(r,2),c=i[0],o=i[1];if(n)return Object(j.c)("div",{css:{color:"red"},children:["Failed to fetch images"," "]});var s=5*(c-1),u=s+5,d=null===t||void 0===t?void 0:t.slice(s,u);return Object(j.c)(j.a,{children:[Object(j.c)("h2",{css:{fontSize:27,fontWeight:500},children:["Curiosity rover images"," ",Object(j.b)("span",{css:{color:P.primaryColor},children:"from today"})]}),void 0!=t&&Object(j.b)(j.a,{children:Object(j.c)("div",{css:{height:200,display:"flex"},children:[c>1&&Object(j.b)(O,{stl:{fontSize:40,marginRight:30},handler:function(){return o(c-1)},children:Object(j.b)(T,{size:25,direction:"left"})}),Object(j.c)("div",{css:[P.imageGrid,{position:"relative"}],children:[d.map((function(e){return Object(j.b)("img",{src:e.img_src,css:{width:"100%"}})})),Object(j.c)("div",{css:{position:"absolute",top:"100%",right:0},children:["Page ",c," / ",Math.floor((null===t||void 0===t?void 0:t.length)/5)]})]}),(null===t||void 0===t?void 0:t.length)-1>u&&Object(j.b)(O,{stl:{fontSize:40,marginLeft:30},handler:function(){return o(c+1)},children:Object(j.b)(T,{direction:"right",size:25})})]})})]})},Y=Object(d.a)({lineHeight:1.25,marginTop:0,fontWeight:500,marginBottom:0}),Z=Object(d.a)({marginTop:35}),$=Object(d.a)({flex:11}),ee=function(e){var t=e.setPage;return Object(j.c)(j.a,{children:[Object(j.b)(x,{children:"About The Program"}),Object(j.c)("div",{css:{display:"flex",marginBottom:70},children:[w,Object(j.c)("div",{css:$,children:[C.map((function(e){return Object(j.b)("p",{css:Y,children:e})})),Object(j.c)("div",{css:Z,children:[Object(j.b)(m,{handler:function(){return t(i.IMAGES)},css:{marginRight:20},children:"View Images by Date"}),Object(j.b)(m,{handler:function(){return t(i.WEATHER)},children:"View Weather"})]})]})]}),Object(j.b)(X,{})]})},te=n(42),ne=Object(d.a)({border:"1px solid #ddd",width:32,height:32,marginLeft:10,fontSize:14,borderRadius:8}),re=function(e){var t=e.handler,n=Object(f.a)(e,["handler"]);return Object(j.b)(O,Object(b.a)({css:[ne,p],handler:t},n))},ie=function(e){var t=e.currentPage,n=e.setPage;return Object(j.c)("div",{css:{display:"flex",justifyContent:"flex-end",marginTop:15},children:[Object(j.b)(re,{handler:function(){return n(t-1)},css:p,children:Object(j.b)(T,{size:7,direction:"left"})}),D(9,(function(e){var r=e+1,i=t===r;return Object(j.b)(re,{handler:function(){return n(r)},css:{backgroundColor:i?P.primaryColor:"unset",color:i?"white":"#666"},children:r})})),Object(j.b)(re,{handler:function(){return n(t+1)},css:p,children:Object(j.b)(T,{size:7,direction:"right"})})]})},ae=function(e){var t=e.searchByDate,n=e.initialDate,r=Object(a.useState)(n),i=Object(l.a)(r,2),c=i[0],o=i[1];return Object(j.c)("div",{css:{display:"flex",alignItems:"center",marginBottom:20},children:[Object(j.b)("label",{css:{fontWeight:500,marginRight:10},children:"Earth date:"}),Object(j.c)("div",{css:{border:"1px solid #ccc",borderRadius:8,overflow:"hidden"},children:[Object(j.b)("input",{type:"date",onChange:function(e){return o(e.target.value)},placeholder:"Please enter ",css:[g,{marginRight:10,padding:4}],value:c}),Object(j.b)(O,{handler:function(){c&&t(c)},stl:{backgroundColor:"#ccc",padding:6,paddingLeft:8,borderColor:"#ccc"},children:"Search"})]})]})},ce=Object(d.a)({width:"100%"}),oe=function(e){Object(te.a)(e);var t=K(),n=t.setDate,r=t.setPage,i=t.state,a=i.photos,c=i.queries;return Object(j.c)("div",{children:[Object(j.b)(x,{children:"Mars Images By Date"}),Object(j.b)(ae,{searchByDate:n,initialDate:c.date},c.date),Object(j.b)("div",{css:P.imageGrid,children:a.map((function(e){return Object(j.b)("img",{src:e.img_src,css:ce,alt:"Taken by Curiosity Rover on Mars"},e.id)}))}),Object(j.b)(ie,{currentPage:c.page,setPage:r})]})},se={weatherBySol:[],loading:!0,queries:{page:1,resultsPerPage:9,sort:S.Tempreture}},ue=function(){var e=Object(M.a)(se),t=Object(l.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){(function(){var e=Object(E.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r((function(e){e.loading=!0})),e.next=4,i=n.queries,N(i);case 4:t=e.sent,r((function(e){e.weatherBySol=t})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r((function(e){e.failed=!0}));case 11:return e.prev=11,r((function(e){e.loading=!1})),e.finish(11);case 14:case"end":return e.stop()}var i}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}})()()}),[n.queries]);return{state:n,setPage:function(e){return r((function(t){t.queries.page=e}))},setSort:function(e){return r((function(t){t.queries.sort=e}))}}},le=function(e){var t=e.optionArr,n=e.handleSelect,r=e.selectedVal;return Object(j.c)("div",{css:{overflow:"hidden",position:"relative",border:"1px solid #ccc ",display:"flex",borderRadius:5},children:[Object(j.b)("select",{value:r,onChange:function(e){return n(function(e){return e.currentTarget.value}(e))},css:[g,Object(d.a)(G||(G=Object(h.a)(["\n\t\t\t\t\t\tpadding: 5px;\n\t\t\t\t\t\tmax-width: 100%;\n\t\t\t\t\t\tpadding-right: 32px;\n\t\t\t\t\t\tappearance: none;\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\tz-index: 1;\n\t\t\t\t\t\tpadding-left: 10px;\n\t\t\t\t\t"])))],children:t.map((function(e){var t=e.id,n=e.name;return Object(j.b)("option",{value:t,children:n},t)}))}),Object(j.b)("div",{css:[{width:32,position:"absolute",right:0,bottom:3,margin:"auto",height:"100%"},p],children:Object(j.b)(T,{direction:"down"})})]})},de=function(e){var t=e.currentSort,n=e.setSort;return Object(j.c)("div",{css:{display:"flex",alignItems:"center"},children:[Object(j.b)("div",{css:{fontSize:18,fontWeight:500,marginRight:25},children:"Sort By"}),Object(j.b)(le,{handleSelect:function(e){return n(e)},selectedVal:t,optionArr:I(S).map((function(e){return{id:S[e],name:e}}))})]})},be=n(24),fe=function(e){var t,n=e.label,r=e.val;return Object(j.c)("div",{css:{display:"flex",justifyContent:"space-between",marginBottom:10,fontSize:18},children:[Object(j.c)("div",{css:{fontWeight:"bolder"},children:[n,":"]}),Object(j.b)("div",{css:{fontWeight:500},children:Object(be.isNumber)(r)?(t=r,U(t,2)):r})]})},he=function(e){var t=e.First_UTC,n=e.Last_UTC,r=e.AT,i=e.HWS,a=e.PRE,c=e.sol,o=Object(f.a)(e,["First_UTC","Last_UTC","AT","HWS","PRE","sol"]);return Object(j.c)("div",Object(b.a)(Object(b.a)({css:{border:"1px solid black",padding:17}},o),{},{children:[Object(j.b)(fe,{label:"Data point",val:c}),Object(j.b)(fe,{label:"Tempreture[AVG]",val:r.av}),Object(j.b)(fe,{label:"Wind[AVG]",val:i.av}),Object(j.b)(fe,{label:"Pressure[AVG]",val:a.av}),Object(j.b)(fe,{label:"First UTC",val:t}),Object(j.b)(fe,{label:"Last UTC",val:n})]}))},ge=Object(d.a)({display:"flex",justifyContent:"space-between",alignItems:"baseline"}),pe=Object(d.a)({display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:30}),je=function(e){var t=ue(),n=t.state,r=n.queries,i=n.weatherBySol,a=t.setPage,c=t.setSort;return Object(j.c)(j.a,{children:[Object(j.c)("div",{css:ge,children:[Object(j.b)(x,{children:"Mars Weather"}),Object(j.b)(de,{currentSort:r.sort,setSort:c})]}),Object(j.b)("div",{css:pe,children:i.map((function(e){return Object(j.b)(he,Object(b.a)({},e))}))}),Object(j.b)(ie,{currentPage:r.page,setPage:a})]})},Oe=n(43),ve=n(29),me=n.n(ve),ye=Object(Oe.a)(),xe={page:i.ABOUT},Ce=function(){return Object(b.a)(Object(b.a)({},xe),Object(be.pick)(me.a.parse(ye.location.search,{ignoreQueryPrefix:!0,arrayLimit:40}),Object.keys(xe)))};window.test=Ce;var Se=function(e){ye.push({search:me.a.stringify(e,{addQueryPrefix:!0})})},we=function(){var e,t=Object(a.useState)(Ce()),n=Object(l.a)(t,2),r=n[0],i=n[1];return e=function(){return ye.listen((function(){return i(Ce())}))},Object(a.useEffect)(e,[]),[r,Se]},Te=Object.values(i),Pe=Object(d.a)({maxWidth:1150,margin:"auto",marginTop:20,marginBottom:20}),Ae=Object(d.a)({display:"flex"}),ke=function(e){var t,n=we(),r=Object(l.a)(n,2),a=r[0],c=r[1],o=a.page,s=function(e){return c({page:e})},d=(t={},Object(u.a)(t,i.ABOUT,Object(j.b)(ee,{setPage:s})),Object(u.a)(t,i.IMAGES,Object(j.b)(oe,{})),Object(u.a)(t,i.WEATHER,Object(j.b)(je,{})),t);return Object(j.c)("div",{css:Pe,children:[Object(j.b)("div",{css:Ae,children:Te.map((function(e){return Object(j.b)(O,{handler:function(){return s(e)},stl:{marginRight:20,fontWeight:e===o?"bold":"normal"},children:e},e)}))}),d[o]]})},Ee=(n(74),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))}),Re=n(13);s.a.render(Object(Re.jsx)(c.a.StrictMode,{children:Object(Re.jsx)(ke,{})}),document.getElementById("root")),Ee()}},[[75,1,2]]]);
//# sourceMappingURL=main.6c23d272.chunk.js.map