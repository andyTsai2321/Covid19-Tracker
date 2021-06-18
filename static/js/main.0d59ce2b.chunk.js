(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{136:function(e,a,t){e.exports=t(249)},142:function(e,a,t){},242:function(e,a,t){},243:function(e,a,t){},244:function(e,a,t){},247:function(e,a,t){},249:function(e,a,t){"use strict";t.r(a);var n=t(20),r=t(0),o=t.n(r),c=t(14),i=t.n(c),l=t(50),s=t(38),u=t.n(s),d=t(95),m=t(57),h=t(299),f=t(253),b=t(301),p=t(309),g=t(307),v=t(305),y=t(302),E=t(303),k=t(315),C=t(287),O=t(290),S=(t(142),t(310)),w=function(e){return 1===e?"infoBox--red":2===e?"infoBox--green":"infoBox--black"};var j=function(e){var a=e.title,t=e.cases,n=(e.isRed,e.total),r=e.active,c=e.index,i=Object(l.a)(e,["title","cases","isRed","total","active","index"]);return o.a.createElement(C.a,{onClick:i.onClick,className:"infoBox \n                        ".concat(r&&w(c))},o.a.createElement(O.a,null,o.a.createElement(f.a,{color:"textSecondary"},a),o.a.createElement("h2",{className:"infoBox__cases ".concat(1===c?"red":2===c?"green":null)},n),o.a.createElement(f.a,{className:"infoBox__total",color:"textSecondary"},"+",t," ",o.a.createElement(S.a,{id:"IncreaseToday"}))))},T=t(121),x=t(25),N=t.n(x),M=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return new Promise((function(n,r){var o={method:a};""!==t&&(o.body=JSON.stringify(t)),fetch(e,o).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){r(e)}))}))},B=function(e,a){var t,n=[];for(var r in e.cases){if(t){var o={x:r,y:e[a][r]-t};n.push(o)}t=e[a][r]}return n};var I=function(e){var a=e.themeType,t=e.casesType,c=void 0===t?"cases":t,i=Object(l.a)(e,["themeType","casesType"]),s=Object(r.useState)({}),d=Object(n.a)(s,2),h=d[0],f=d[1],b={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,a){return N()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"},ticks:{fontColor:"dark"===a?"#fff":"#000"}}],yAxes:[{gridLines:{display:!1},ticks:{fontColor:"dark"===a?"#fff":"#000",callback:function(e,a,t){return N()(e).format("0a")}}}]}};return Object(r.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){var a=B(e,c);f(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),o.a.createElement("div",{className:i.className},(null===h||void 0===h?void 0:h.length)>0&&o.a.createElement(T.Line,{options:b,data:{datasets:[{backgroundColor:"cases"===c?"rgba(204, 16, 52, .4)":"recovered"===c?"rgba(125, 215, 29, .4)":"rgba(0, 0, 0, .4)",borderColor:"cases"===c?"rgb(204, 16, 52)":"recovered"===c?"rgb(125, 215, 29)":"rgb(0, 0, 0)",data:h}]}}))},A=t(312),R=t(313),D=t(125),P=t(308),z=t(311),L={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},_=function(e){return Object(D.a)(e).sort((function(e,a){return e.cases>a.cases?-1:1}))},W=function(e){return e?"".concat(N()(e).format("0.0a")):"+0"},G=function(e){e=(e||0).toString();for(var a="";e.length>3;)a=","+e.slice(-3)+a,e=e.slice(0,e.length-3);return e&&(a=e+a),a};t(242);var V=function(e){var a=e.themeType,t=e.countries,n=e.casesType,r=e.center,c=e.zoom;return o.a.createElement("div",{className:"map"},o.a.createElement(A.a,{center:r,zoom:c},o.a.createElement(R.a,{url:"dark"===a?"https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png":"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return o.a.createElement(P.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:L[a].hex,fillColor:L[a].hex,fillOpacity:.4,radius:Math.sqrt(e[a])*L[a].multiplier},o.a.createElement(z.a,null,o.a.createElement("div",{className:"info-container"},o.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),o.a.createElement("div",{className:"info-name"},e.country),o.a.createElement("div",{className:"info-confirmed"},"Cases: ",N()(e.cases).format("0,0")),o.a.createElement("div",{className:"info-recovered"},"Recovered: ",N()(e.recovered).format("0,0")),o.a.createElement("div",{className:"info-deaths"},"Deaths: ",N()(e.deaths).format("0,0")))))}))}(t,n)))},K=t(292),F=t(296),U=t(295),$=t(291),q=t(293),H=t(294),J=t(314),Y={Afghanistan:"\u963f\u5bcc\u6c57","Aland Islands":"\u5967\u862d\u7fa4\u5cf6",Albania:"\u963f\u723e\u5df4\u5c3c\u4e9e",Algeria:"\u963f\u723e\u53ca\u5229\u4e9e","American Samoa":"\u7f8e\u5c6c\u85a9\u6469\u4e9e",Andorra:"\u5b89\u9053\u723e",Angola:"\u5b89\u54e5\u62c9",Anguilla:"\u5b89\u572d\u62c9","Antigua and Barbuda":"\u5b89\u5730\u5361\u53ca\u5df4\u5e03\u9054",Argentina:"\u963f\u6839\u5ef7",Armenia:"\u4e9e\u7f8e\u5c3c\u4e9e",Aruba:"\u963f\u9b6f\u5df4",Australia:"\u6fb3\u5927\u5229\u4e9e",Austria:"\u5967\u5730\u5229",Azerbaijan:"\u4e9e\u585e\u62dc\u7136",Bangladesh:"\u5b5f\u52a0\u62c9",Bahrain:"\u5df4\u6797",Bahamas:"\u5df4\u54c8\u99ac",Barbados:"\u5df4\u8c9d\u591a",Belarus:"\u767d\u4fc4\u7f85\u65af",Belgium:"\u6bd4\u5229\u6642",Belize:"\u8c9d\u91cc\u65af",Benin:"\u8c9d\u5357",Bermuda:"\u767e\u6155\u5927",Bhutan:"\u4e0d\u4e39",Bolivia:"\u73bb\u5229\u7dad\u4e9e","Bosnia and Herzegovina":"\u6ce2\u65af\u5c3c\u4e9e\u548c\u9ed1\u585e\u54e5\u7dad\u90a3",Botswana:"\u6ce2\u672d\u90a3","Bouvet Island":"\u5e03\u7dad\u5cf6",Brazil:"\u5df4\u897f",Brunei:"\u6c76\u840a",Bulgaria:"\u4fdd\u52a0\u5229\u4e9e","Burkina Faso":"\u5e03\u5409\u7d0d\u6cd5\u7d22",Burundi:"\u84b2\u9686\u5730",Cambodia:"\u67ec\u57d4\u5be8",Cameroon:"\u5580\u9ea5\u9686",Canada:"\u52a0\u62ff\u5927","Cape Verde":"\u7dad\u5fb7\u89d2","Central African Republic":"\u4e2d\u975e",Chad:"\u67e5\u5fb7",Chile:"\u667a\u5229","Christmas Islands":"\u8056\u8a95\u5cf6","Cocos (keeling) Islands":"\u79d1\u79d1\u65af\uff08\u57fa\u6797\uff09\u7fa4\u5cf6",Colombia:"\u54e5\u502b\u6bd4\u4e9e",Comoros:"\u845b\u6469","Congo (Congo-Kinshasa)":"\u525b\u679c\uff08\u91d1\uff09",Congo:"\u525b\u679c","Cook Islands":"\u5eab\u514b\u7fa4\u5cf6","Costa Rica":"\u54e5\u65af\u5927\u9ece\u52a0","Cote D\u2019Ivoire":"\u8c61\u7259\u6d77\u5cb8",China:"\u4e2d\u570b",Croatia:"\u514b\u7f85\u57c3\u897f\u4e9e",Cuba:"\u53e4\u5df4",Czech:"\u6377\u514b",Cyprus:"\u585e\u666e\u52d2\u65af",Denmark:"\u4e39\u9ea5",Djibouti:"\u5409\u5e03\u63d0",Dominica:"\u591a\u660e\u5c3c\u52a0","East Timor":"\u6771\u5e1d\u6c76",Ecuador:"\u5384\u74dc\u591a",Egypt:"\u57c3\u53ca","Equatorial Guinea":"\u8d64\u9053\u5e7e\u5167\u4e9e",Eritrea:"\u5384\u5229\u5782\u4e9e",Estonia:"\u611b\u6c99\u5c3c\u4e9e",Ethiopia:"\u8863\u7d22\u6bd4\u4e9e","Faroe Islands":"\u6cd5\u7f85\u7fa4\u5cf6",Fiji:"\u6590\u6fdf",Finland:"\u82ac\u862d",France:"\u6cd5\u570b","Franch Metropolitan":"\u6cd5\u570b\u5927\u90fd\u6703","Franch Guiana":"\u6cd5\u5c6c\u84cb\u4e9e\u90a3","French Polynesia":"\u6cd5\u5c6c\u6ce2\u5229\u5c3c\u897f\u4e9e",Gabon:"\u52a0\u5f6d",Gambia:"\u7518\u6bd4\u4e9e",Georgia:"\u55ac\u6cbb\u4e9e",Germany:"\u5fb7\u570b",Ghana:"\u8fe6\u7d0d",Gibraltar:"\u76f4\u5e03\u7f85\u9640",Greece:"\u5e0c\u81d8",Grenada:"\u683c\u745e\u90a3\u9054",Guadeloupe:"\u74dc\u5fb7\u7f85\u666e\u5cf6",Guam:"\u95dc\u5cf6",Guatemala:"\u74dc\u5730\u99ac\u62c9",Guernsey:"\u6839\u897f\u5cf6","Guinea-Bissau":"\u5e7e\u5167\u4e9e\u6bd4\u7d22",Guinea:"\u5e7e\u5167\u4e9e",Guyana:"\u84cb\u4e9e\u90a3","Hong Kong":"\u9999\u6e2f \uff08\u4e2d\u570b\uff09",Haiti:"\u6d77\u5730",Honduras:"\u5b8f\u90fd\u62c9\u65af",Hungary:"\u5308\u7259\u5229",Iceland:"\u51b0\u5cf6",India:"\u5370\u5ea6",Indonesia:"\u5370\u5ea6\u5c3c\u897f\u4e9e",Iran:"\u4f0a\u6717",Iraq:"\u4f0a\u62c9\u514b",Ireland:"\u611b\u723e\u862d","Isle of Man":"\u99ac\u6069\u5cf6",Israel:"\u4ee5\u8272\u5217",Italy:"\u7fa9\u5927\u5229",Jamaica:"\u7259\u8cb7\u52a0",Japan:"\u65e5\u672c",Jersey:"\u6fa4\u897f\u5cf6",Jordan:"\u7d04\u65e6",Kazakhstan:"\u54c8\u85a9\u514b",Kenya:"\u80af\u4e9e",Kiribati:"\u5409\u91cc\u5df4\u65af","Korea (South)":"\u97d3\u570b","Korea (North)":"\u671d\u9bae",Kuwait:"\u79d1\u5a01\u7279",Kyrgyzstan:"\u5409\u723e\u5409\u65af\u65af\u5766",Laos:"\u5bee\u570b",Latvia:"\u62c9\u812b\u7dad\u4e9e",Lebanon:"\u9ece\u5df4\u5ae9",Lesotho:"\u8cf4\u7d22\u6258",Liberia:"\u8cf4\u6bd4\u745e\u4e9e",Libya:"\u5229\u6bd4\u4e9e",Liechtenstein:"\u5217\u652f\u6566\u65af\u767b",Lithuania:"\u7acb\u9676\u5b9b",Luxembourg:"\u76e7\u68ee\u5821",Macau:"\u6fb3\u9580\uff08\u4e2d\u570b\uff09",Macedonia:"\u99ac\u5176\u9813",Malawi:"\u99ac\u62c9\u7dad",Malaysia:"\u99ac\u4f86\u897f\u4e9e",Madagascar:"\u99ac\u9054\u52a0\u65af\u52a0",Maldives:"\u99ac\u723e\u5730\u592b",Mali:"\u99ac\u88e1",Malta:"\u99ac\u8033\u4ed6","Marshall Islands":"\u99ac\u7d39\u723e\u7fa4\u5cf6",Martinique:"\u99ac\u63d0\u5c3c\u514b\u5cf6",Mauritania:"\u8305\u5229\u5854\u5c3c\u4e9e",Mauritius:"\u6a21\u91cc\u897f\u65af",Mayotte:"\u99ac\u7d04\u7279",Mexico:"\u58a8\u897f\u54e5",Micronesia:"\u5bc6\u514b\u7f85\u5c3c\u897f\u4e9e",Moldova:"\u6469\u723e\u591a\u74e6",Monaco:"\u6469\u7d0d\u54e5",Mongolia:"\u8499\u53e4",Montenegro:"\u9ed1\u5c71",Montserrat:"\u8499\u7279\u585e\u62c9\u7279",Morocco:"\u6469\u6d1b\u54e5",Mozambique:"\u83ab\u4e09\u6bd4\u514b",Myanmar:"\u7dec\u7538",Namibia:"\u7d0d\u7c73\u6bd4\u4e9e",Nauru:"\u8afe\u9b6f",Nepal:"\u5c3c\u6cca\u723e",Netherlands:"\u8377\u862d","New Caledonia":"\u65b0\u5580\u91cc\u591a\u5c3c\u4e9e","New Zealand":"\u7d10\u897f\u862d",Nicaragua:"\u5c3c\u52a0\u62c9\u74dc",Niger:"\u5c3c\u65e5",Nigeria:"\u5948\u53ca\u5229\u4e9e",Niue:"\u7d10\u57c3","Norfolk Island":"\u8afe\u798f\u514b\u5cf6",Norway:"\u632a\u5a01",Oman:"\u963f\u66fc",Pakistan:"\u5df4\u57fa\u65af\u5766",Palau:"\u5e1b\u7409",Palestine:"\u5df4\u52d2\u65af\u5766",Panama:"\u5df4\u62ff\u99ac","Papua New Guinea":"\u5df4\u5e03\u4e9e\u7d10\u5e7e\u5167\u4e9e",Paraguay:"\u5df4\u62c9\u572d",Peru:"\u7955\u9b6f",Philippines:"\u83f2\u5f8b\u8cd3","Pitcairn Islands":"\u76ae\u7279\u51f1\u6069\u7fa4\u5cf6",Poland:"\u6ce2\u862d",Portugal:"\u8461\u8404\u7259","Puerto Rico":"\u6ce2\u591a\u9ece\u5404",Qatar:"\u5361\u9054",Reunion:"\u7559\u5c3c\u6c6a\u5cf6",Romania:"\u7f85\u99ac\u5c3c\u4e9e",Rwanda:"\u76e7\u5b89\u9054",Russia:"\u4fc4\u7f85\u65af","Saint Helena":"\u8056\u8d6b\u52d2\u62ff","Saint Kitts-Nevis":"\u8056\u514b\u91cc\u65af\u591a\u798f\u53ca\u5c3c\u7dad\u65af","Saint Lucia":"\u8056\u9732\u897f\u4e9e","Saint Vincent and the Grenadines":"\u8056\u6587\u68ee\u53ca\u683c\u745e\u90a3\u4e01","El Salvador":"\u85a9\u723e\u74e6\u591a",Samoa:"\u85a9\u6469\u4e9e","San Marino":"\u8056\u99ac\u5229\u8afe","Sao Tome and Principe":"\u8056\u591a\u7f8e\u548c\u666e\u6797\u897f\u6bd4","Saudi Arabia":"\u6c99\u70cf\u5730\u963f\u62c9\u4f2f",Senegal:"\u585e\u5167\u52a0\u723e",Seychelles:"\u585e\u5e2d\u723e","Sierra Leone":"\u7345\u5b50\u5c71",Singapore:"\u65b0\u52a0\u5761",Serbia:"\u585e\u723e\u7dad\u4e9e",Slovakia:"\u65af\u6d1b\u4f10\u514b",Slovenia:"\u65af\u6d1b\u7dad\u5c3c\u4e9e","Solomon Islands":"\u7d22\u7f85\u9580\u7fa4\u5cf6",Somalia:"\u7d22\u99ac\u5229\u4e9e","South Africa":"\u5357\u975e",Spain:"\u897f\u73ed\u7259","Sri Lanka":"\u65af\u91cc\u862d\u5361",Sudan:"\u8607\u4e39",Suriname:"\u8607\u5229\u5357",Swaziland:"\u53f2\u74e6\u6fdf\u862d",Sweden:"\u745e\u5178",Switzerland:"\u745e\u58eb",Syria:"\u6558\u5229\u4e9e",Tajikistan:"\u5854\u5409\u514b",Tanzania:"\u5766\u5c1a\u5c3c\u4e9e",Taiwan:"\u81fa\u7063",Thailand:"\u6cf0\u570b","Trinidad and Tobago":"\u5343\u91cc\u9054\u53ca\u6258\u5df4\u54e5","Timor-Leste":"\u6771\u5e1d\u6c76",Togo:"\u591a\u54e5",Tokelau:"\u6258\u514b\u52de",Tonga:"\u6e6f\u52a0",Tunisia:"\u7a81\u5c3c\u897f\u4e9e",Turkey:"\u571f\u8033\u5176",Turkmenistan:"\u571f\u5eab\u66fc",Tuvalu:"\u5410\u74e6\u9b6f",Uganda:"\u70cf\u5e72\u9054",Ukraine:"\u70cf\u514b\u862d","United Arab Emirates":"\u963f\u62c9\u4f2f\u806f\u5408\u5927\u516c\u570b",UK:"\u82f1\u570b",USA:"\u7f8e\u570b",Uruguay:"\u70cf\u62c9\u572d",Uzbekistan:"\u70cf\u8332\u5225\u514b",Vanuatu:"\u842c\u90a3\u675c","Vatican City":"\u68b5\u8482\u5ca1",Venezuela:"\u59d4\u5167\u745e\u62c9",Vietnam:"\u8d8a\u5357","Wallis and Futuna":"\u74e6\u5229\u65af\u7fa4\u5cf6\u548c\u5bcc\u5716\u7d0d\u7fa4\u5cf6","Western Sahara":"\u897f\u6492\u54c8\u62c9",Yemen:"\u8449\u9580",Yugoslavia:"\u5357\u65af\u62c9\u592b",Zambia:"\u5c1a\u6bd4\u4e9e",Zimbabwe:"\u8f9b\u5df4\u5a01",Bosnia:"\u6ce2\u58eb\u5c3c\u4e9e\u8207\u8d6b\u585e\u54e5\u7dad\u7d0d","British Virgin Islands":"\u82f1\u5c6c\u7dad\u4eac\u7fa4\u5cf6","Cabo Verde":"\u7dad\u5fb7\u89d2",Macao:"\u6fb3\u9580"},Z=t(250),Q=(t(243),[{id:"country",numeric:!1,disablePadding:!0,label:o.a.createElement(S.a,{id:"Country"})},{id:"cases",numeric:!0,disablePadding:!1,label:o.a.createElement(S.a,{id:"Cases"})},{id:"recovered",numeric:!0,disablePadding:!1,label:o.a.createElement(S.a,{id:"Recovered"})},{id:"deaths",numeric:!0,disablePadding:!1,label:o.a.createElement(S.a,{id:"Deaths"})}]);function X(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var ee=function(e){var a=e.countries,t=(e.sortData,e.order),n=e.onRequestSort,r=e.orderBy;return o.a.createElement($.a,{component:Z.a,style:{height:"400px"}},o.a.createElement(K.a,{stickyHeader:!0,size:"small","aria-label":"a dense table"},o.a.createElement(q.a,null,o.a.createElement(H.a,null,Q.map((function(e){return o.a.createElement(U.a,{key:e.id,align:e.numeric?"right":"center",padding:e.disablePadding?"none":"default",sortDirection:r===e.id&&t,style:{width:"country"===e.id?"150px":"100px"}},o.a.createElement(J.a,{active:r===e.id,direction:r===e.id?t:"asc",onClick:(a=e.id,function(e){n(e,a)})},e.label));var a})))),o.a.createElement(F.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(a,function(e,a){return"desc"===e?function(e,t){return X(e,t,a)}:function(e,t){return-X(e,t,a)}}(t,r)).map((function(e,a){var t=e.country,n=e.cases,r=e.recovered,c=e.deaths,i=e.countryInfo;"enhanced-table-checkbox-".concat(a);return o.a.createElement(H.a,{hover:!0,key:t},o.a.createElement(U.a,{align:"center"},t,o.a.createElement("img",{src:i.flag,style:{width:20,marginLeft:5}})),o.a.createElement(U.a,{align:"right"},N()(n).format("0,0")),o.a.createElement(U.a,{align:"right"},N()(r).format("0,0")),o.a.createElement(U.a,{align:"right"},N()(c).format("0,0")))})))),0===a.length&&"Country not found")},ae=t(297),te=t(298),ne=t(123),re=t.n(ne);t(244);var oe=function(e){var a=Object.assign({},e),t=Object(r.useRef)();return o.a.createElement("div",{className:"search"},o.a.createElement(ae.a,{placeholder:"Search",id:"standard-basic",label:"Search",inputRef:t}),o.a.createElement(te.a,{variant:"contained",startIcon:o.a.createElement(re.a,null),color:"primary",onClick:function(){return a.onClick(t.current.value)}}))},ce=t(4),ie=t(124),le=t(300);t(247),t(248);var se=function(e){var a=e.setLocale,t=e.lang,c=e.setThemeType,i=e.themeType,s=Object(r.useState)([]),w=Object(n.a)(s,2),T=w[0],x=w[1],N=Object(r.useState)("Worldwide"),B=Object(n.a)(N,2),A=B[0],R=B[1],D=Object(r.useState)({}),P=Object(n.a)(D,2),z=P[0],L=P[1],K=Object(r.useState)([]),F=Object(n.a)(K,2),U=F[0],$=F[1],q=Object(r.useState)({lat:34.80746,lng:-40.4796}),H=Object(n.a)(q,2),J=H[0],Z=H[1],Q=Object(r.useState)(3),X=Object(n.a)(Q,2),ae=X[0],te=X[1],ne=Object(r.useState)("cases"),re=Object(n.a)(ne,2),se=re[0],ue=re[1],de=Object(r.useState)([]),me=Object(n.a)(de,2),he=me[0],fe=me[1],be=Object(r.useState)(1),pe=Object(n.a)(be,2),ge=pe[0],ve=pe[1],ye=Object(r.useState)("desc"),Ee=Object(n.a)(ye,2),ke=Ee[0],Ce=Ee[1],Oe=o.a.useState("cases"),Se=Object(n.a)(Oe,2),we=Se[0],je=Se[1],Te=Object(r.useState)(""),xe=Object(n.a)(Te,2),Ne=(xe[0],xe[1],Object(ie.a)({palette:{type:i}}));Object(r.useEffect)((function(){M("https://disease.sh/v3/covid-19/all").then((function(e){L(e)}))}),[]),Object(r.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("https://disease.sh/v3/covid-19/countries").then((function(e){var a=e;"zh-TW"===t&&(a=e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{country:Y[e.country]?Y[e.country]:e.country})})));var n=a.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),r=_(a);$(r),fe(a),x(n)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var Me=function(){var e=Object(m.a)(u.a.mark((function e(a){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.target.value,R(t),console.log(t),n="Worldwide"===t?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(t),M(n).then((function(e){R(t),L(e),"Worldwide"!==t?Z([e.countryInfo.lat,e.countryInfo.long]):Z(0,0),te(4)}));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();console.log("country info",z),console.log(t);var Be,Ie=Object(ce.a)({switchBase:{color:"#5462b3","&$checked":{color:"#3f51b5"},"&$checked + $track":{backgroundColor:"#3f51b5"}},checked:{},track:{}})(h.a);return Object(ce.a)((function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#3f51b5",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#3f51b5",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var a=e.classes,t=Object(l.a)(e,["classes"]);return o.a.createElement(h.a,Object.assign({focusVisibleClassName:a.focusVisible,disableRipple:!0,classes:{root:a.root,switchBase:a.switchBase,thumb:a.thumb,track:a.track,checked:a.checked}},t))})),o.a.createElement(le.a,{theme:Ne},o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"app__left"},o.a.createElement("div",{className:"app__header"},o.a.createElement(f.a,{color:"textPrimary",variant:"h4"},o.a.createElement(S.a,{id:"WebTitle"})),o.a.createElement(b.a,{control:o.a.createElement(Ie,{checked:"dark"===i,onChange:function(){return c("light"===i?"dark":"light"),void ve(Math.random())},name:"checkedB"}),label:o.a.createElement(f.a,{color:"textPrimary"},o.a.createElement(S.a,{id:"DarkMode"}))}),o.a.createElement(p.a,{row:!0,value:t,onChange:function(e){a(e.target.value)}},o.a.createElement(b.a,{value:"en",control:o.a.createElement(g.a,{color:"primary"}),label:o.a.createElement(v.a,{color:"dark"===i?"#fff":"#000"},"EN"),color:"red"}),o.a.createElement(b.a,{value:"zh-TW",control:o.a.createElement(g.a,{color:"primary"}),label:o.a.createElement(v.a,{color:"dark"===i?"#fff":"#000"},"\u4e2d\u6587"),color:"secondary"})),o.a.createElement(y.a,{className:"app__dropdown"},o.a.createElement(E.a,{variant:"outlined",value:A,onChange:Me},o.a.createElement(k.a,{value:"Worldwide"},o.a.createElement(S.a,{id:"Worldwide"})),T.map((function(e){return o.a.createElement(k.a,{value:e.value},e.name)}))))),o.a.createElement(f.a,{color:"textPrimary",variant:"h6"},o.a.createElement(S.a,{id:"Overview"})),o.a.createElement("div",{className:"app__stats"},o.a.createElement(j,{title:o.a.createElement(S.a,{id:"Cases"}),active:"cases"===se,isRed:!0,onClick:function(e){return ue("cases")},cases:W(z.todayCases),total:G(z.cases),index:1}),o.a.createElement(j,{title:o.a.createElement(S.a,{id:"Recovered"}),active:"recovered"===se,onClick:function(e){return ue("recovered")},cases:W(z.todayRecovered),total:G(z.recovered),index:2}),o.a.createElement(j,{title:o.a.createElement(S.a,{id:"Deaths"}),isRed:!0,active:"deaths"===se,onClick:function(e){return ue("deaths")},cases:W(z.todayDeaths),total:G(z.deaths),index:3})),o.a.createElement(V,{key:ge,themeType:i,casesType:se,countries:he,center:J,zoom:ae})),o.a.createElement(C.a,{className:"app__right"},o.a.createElement(O.a,null,o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("h3",{style:{flex:"1",paddingRight:"10px",display:"flex",alignItems:"center"}},o.a.createElement(S.a,{id:"AllCountry"})),o.a.createElement(oe,{onClick:function(e){return function(e){var a=[];he.forEach((function(t){t.country.toLowerCase().includes(e.toLowerCase())&&a.push(t)})),$(a)}(e)}})),o.a.createElement(ee,{countries:U,order:ke,orderBy:we,onRequestSort:function(e,a){Ce(we===a&&"asc"===ke?"desc":"asc"),je(a)}})),o.a.createElement("h3",{style:{paddingLeft:"10px"}},o.a.createElement(S.a,{id:"WorldTrend",values:{casesType:o.a.createElement(S.a,{id:(Be=se,Be.charAt(0).toUpperCase()+Be.slice(1))})}})),o.a.createElement(I,{className:"app__graph",casesType:se,themeType:i}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=t(306),de={WebTitle:"COVID-19 Tracker",Worldwide:"Worldwide",Overview:"Overview",Cases:"Cases",IncreaseToday:"New Cases",Recovered:"Recovered",Deaths:"Deaths",Total:"Total",WorldTrend:"World {casesType} trend",Country:"Country",AllCountry:"All Country",DarkMode:"Dark Mode",DarkModeClose:"Dark Mode Close"},me={WebTitle:"COVID-19 \u8ffd\u8e64\u7ad9",Worldwide:"\u5168\u7403",Overview:"\u7e3d\u89bd",Cases:"\u78ba\u8a3a\u6578",IncreaseToday:"\u4eca\u65e5\u65b0\u589e",Recovered:"\u6cbb\u7652\u6578",Deaths:"\u6b7b\u4ea1\u6578",Total:"\u7e3d\u8a08",WorldTrend:"\u5168\u7403 {casesType} \u8da8\u52e2",Country:"\u570b\u5bb6",AllCountry:"\u5168\u90e8\u570b\u5bb6",DarkMode:"\u6df1\u8272\u6a21\u5f0f",DarkModeClose:"\u6df1\u8272\u6a21\u5f0f\u95dc\u9589"},he=function(){var e,a=Object(r.useState)(navigator.language),t=Object(n.a)(a,2),c=t[0],i=t[1],l=Object(r.useState)("light"),s=Object(n.a)(l,2),u=s[0],d=s[1];return e=c.includes("zh")?me:de,o.a.createElement(ue.a,{locale:c,key:c,defaultLocale:"en",messages:e},o.a.createElement("div",{id:"theme",className:"theme__".concat(u)},o.a.createElement(se,{setLocale:i,lang:c,setThemeType:d,themeType:u})))};i.a.render(o.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[136,1,2]]]);
//# sourceMappingURL=main.0d59ce2b.chunk.js.map