(this.webpackJsonptest=this.webpackJsonptest||[]).push([[9,10],{638:function(e,t,a){"use strict";a(642);var s=a(7);t.a=function(e){return e.absolute?Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:e.isLoading?"loader loader-absolute":"",children:Object(s.jsx)("div",{className:e.isLoading?"spinner-border":"",role:"status"})}),e.children]}):e.relative?Object(s.jsxs)("div",{className:"relativePosition",children:[Object(s.jsx)("div",{className:e.isLoading?"loader loader-relative":"",children:Object(s.jsx)("div",{className:e.isLoading?"spinner-border":"",role:"status"})}),e.children]}):void 0}},642:function(e,t,a){},643:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return n}));var s=function(e){return e.map((function(e){var t=new Date(e.submit_time),a=new Date(e.status_change_date),s=new Date(e.last_change_date),r=0,n="";return"approved"===e.status?(r=3,n="Onayland\u0131"):"rejected"===e.status?(r=3,n="\u0130ptal"):"processing"===e.status?(r=2,n="\u0130\u015fleniyor"):"sent"===e.status&&(n="G\xf6nderildi",r=1),{ID:e.id,"\u0130sim":e.client_name,Tarih:t.toISOString().slice(0,10),Hizmet:e.service_name,Kampanya:e.offer_name,"A\xe7\u0131klama":e.description,"Stat\xfc":n,salesRepDetails:e.sales_rep_details?e.sales_rep_details:"",statusChangeDate:a?a.toISOString().slice(0,10):null,finalSalesRepDetails:e.final_sales_rep_details?e.final_sales_rep_details:"",lastChangeDate:s?s.toISOString().slice(0,10):null,submitProcessNum:r,imageURLS:e.image_urls?e.image_urls:null}}))},r=function(e){switch(e){case"Onayland\u0131":return"success";case"\u0130\u015fleniyor":return"warning";case"\u0130ptal":return"danger";case"G\xf6nderildi":return"secondary";default:return"primary"}},n=function(e){switch(e){case"dealer":return"Bayi";case"sales_assistant":return"Sat\u0131\u015f Destek";case"sales_assistant_chef":return"Sat\u0131\u015f Destek \u015eefi";case"admin":return"Admin";default:return""}}},648:function(e,t,a){},649:function(e,t,a){"use strict";var s=a(636),r=a(7),n=function(e,t){return 2===e.submitProcessNum?Object(r.jsxs)(s.v,{row:!0,children:[Object(r.jsxs)(s.j,{children:[Object(r.jsx)(s.H,{children:"Bayi A\xe7\u0131klamas\u0131"}),Object(r.jsx)(s.ab,{rows:"8",placeholder:e.A\u00e7\u0131klama,readOnly:!0})]}),"sales_assistant"===t?Object(r.jsxs)(s.j,{children:[Object(r.jsx)(s.H,{children:"\xd6nceki Notlar\u0131n\u0131z"}),Object(r.jsx)(s.ab,{rows:"8",placeholder:e.salesRepDetails,readOnly:!0})]}):Object(r.jsxs)(s.j,{children:[Object(r.jsx)(s.H,{children:"Sat\u0131\u015f Destek Notlar\u0131"}),Object(r.jsx)(s.ab,{rows:"8",placeholder:e.salesRepDetails,readOnly:!0})]})]}):(e.submitProcessNum,Object(r.jsxs)(s.v,{children:[Object(r.jsx)(s.H,{children:"Bayi A\xe7\u0131klamas\u0131"}),Object(r.jsx)(s.ab,{rows:"4",placeholder:e.A\u00e7\u0131klama,readOnly:!0})]}))},c=function(e,t,a,n){return 3===a.submitProcessNum?Object(r.jsxs)(s.v,{children:[Object(r.jsx)(s.H,{children:n.field3}),Object(r.jsx)(s.ab,{rows:"6",placeholder:a.finalSalesRepDetails,readOnly:!0})]}):"sales_assistant"===t?Object(r.jsxs)(s.v,{children:[Object(r.jsx)(s.H,{children:"Notlar\u0131n\u0131z"}),Object(r.jsx)(s.ab,{rows:"6",placeholder:"i\u015flemle alakal\u0131 notlar\u0131n\u0131z...",onChange:function(t){return e(t.target.value)}})]}):Object(r.jsxs)(s.v,{children:[Object(r.jsx)(s.H,{children:"Sat\u0131\u015f Destek Son Notlar\u0131"}),Object(r.jsx)(s.ab,{rows:"6",placeholder:a.finalSalesRepDetails,readOnly:!0})]})},i=function(e){switch(e.Stat\u00fc){case"\u0130\u015fleniyor":return"rgb(214, 160, 11)";case"\u0130ptal":return"rgb(212, 69, 13)";case"Onayland\u0131":return"rgb(55, 150, 55)";default:return"rgb(120, 138, 151)"}},l=a(53);a(648),a(1),t.a=function(e){e.isEditable;var t=e.userDetails,a=e.setSdDetay,o=Object(l.d)((function(e){return e.reducer.loggedInUserInfo.loggedInRole})),j=function(e){switch(e){case"dealer":return{field3:"Sat\u0131\u015f Destek Son Notlar\u0131"};case"sales_assistant":return{field3:"Son notlar\u0131n\u0131z"};case"sales_assistant_chef":return{field3:"Sat\u0131\u015f Destek Son Notlar\u0131"}}}(o);return Object(r.jsx)(s.Q,{className:"justify-content-center align-items-center",children:Object(r.jsx)(s.j,{xs:"12",sm:"12",children:Object(r.jsxs)(s.e,{children:[Object(r.jsx)(s.i,{className:"basvuru-detay-header",style:{backgroundColor:i(t)},children:Object(r.jsx)("h4",{children:"Ba\u015fvuru Detay"})}),Object(r.jsxs)(s.f,{className:"basvuru-detay",children:[Object(r.jsxs)(s.v,{row:!0,className:"my-0",children:[Object(r.jsx)(s.j,{xs:"2",children:Object(r.jsxs)(s.v,{children:[Object(r.jsx)(s.H,{children:"ID"}),Object(r.jsx)(s.B,{placeholder:t.ID,readOnly:!0})]})}),Object(r.jsx)(s.j,{xs:"10",children:Object(r.jsxs)(s.v,{children:[Object(r.jsx)(s.H,{children:"\u0130sim"}),Object(r.jsx)(s.B,{placeholder:t.\u0130sim,readOnly:!0})]})})]}),Object(r.jsxs)(s.v,{row:!0,className:"my-0",children:[Object(r.jsx)(s.j,{xs:"2",children:Object(r.jsxs)(s.v,{children:[Object(r.jsx)(s.H,{children:"Tarih"}),Object(r.jsx)(s.B,{placeholder:t.Tarih,readOnly:!0})]})}),Object(r.jsx)(s.j,{xs:"3",children:Object(r.jsxs)(s.v,{children:[Object(r.jsx)(s.H,{children:"Hizmet"}),Object(r.jsx)(s.B,{placeholder:t.Hizmet,readOnly:!0})]})}),Object(r.jsx)(s.j,{xs:"7",children:Object(r.jsxs)(s.v,{children:[Object(r.jsx)(s.H,{children:"Kampanya"}),Object(r.jsx)(s.B,{placeholder:t.Kampanya,readOnly:!0})]})})]}),n(t),c(a,o,t,j),Object(r.jsx)(s.v,{row:!0,children:t.imageURLS&&t.imageURLS.map((function(e,t){return Object(r.jsx)(s.j,{md:"4",children:Object(r.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{alt:"",style:{maxWidth:"200px",maxHeight:"200px",cursor:"pointer"},src:e})})},t)}))})]})]})})})}},672:function(e,t,a){"use strict";a.r(t);var s=a(63),r=a.n(s),n=a(88),c=a(637),i=a(1),l=a(649),o=a(643),j=a(638),d=a(7);t.default=function(e){var t,a=e.match,s=e.applicationID;a?t=a.params.id:s&&(t=s);var u=Object(i.useState)({}),b=Object(c.a)(u,2),h=b[0],O=b[1],x=Object(i.useState)(!1),f=Object(c.a)(x,2),m=f[0],p=f[1];return Object(i.useEffect)((function(){p(!0),function(){var e=Object(n.a)(r.a.mark((function e(){var a,s,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/application/".concat(t),{method:"GET",headers:{"content-type":"application/json",authorization:"Bearer ".concat(document.cookie.slice(8)," ")}});case 2:if(200!==(a=e.sent).status){e.next=9;break}return e.next=6,a.json();case 6:s=e.sent,n=Object(o.b)(s),O(n[0]);case 9:p(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t]),Object(d.jsx)(j.a,{relative:!0,isLoading:m,children:Object(d.jsx)(l.a,{userDetails:h})})}},738:function(e,t,a){"use strict";a.r(t);var s=a(63),r=a.n(s),n=a(88),c=a(637),i=a(1),l=a(13),o=a(636),j=a(672),d=a(7),u=[{key:"ba\u015fvuru_ID",_style:{width:"10%"}},{key:"m\xfc\u015fteri",_style:{width:"20%"}},{key:"hizmet",_style:{width:"10%"}},"\xf6nceki_bakiye","tutar","sonraki_bakiye","kazan\xe7_ID","tarih",{key:"show_details",label:"",_style:{width:"1%"},sorter:!1,filter:!1}];t.default=function(e){var t=e.match;e.location;console.log("match",t);var a=t.params.id,s=Object(l.g)(),b=Object(l.h)().search.match(/sayfa=([0-9]+)/,""),h=Number(b&&b[1]?b[1]:1),O=Object(i.useState)(h),x=Object(c.a)(O,2),f=x[0],m=x[1],p=Object(i.useState)(!0),v=Object(c.a)(p,2),y=v[0],_=v[1],g=Object(i.useState)(void 0),k=Object(c.a)(g,2),w=k[0],S=k[1],D=Object(i.useState)([]),N=Object(c.a)(D,2),z=N[0],I=N[1];return Object(i.useEffect)((function(){h!==f&&m(h),function(){var e=Object(n.a)(r.a.mark((function e(){var t,s,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.next=3,fetch("/report/transactions?reportID=".concat(a),{headers:{"content-type":"application/json",authorization:"Bearer ".concat(document.cookie.slice(8)," ")}});case 3:if(200!==(t=e.sent).status){e.next=12;break}return e.next=7,t.json();case 7:s=e.sent,console.log("data ",s),n=s.map((function(e){return{"ba\u015fvuru_ID":e.app_id,"m\xfc\u015fteri":e.client_name,hizmet:e.selected_service,"\xf6nceki_bakiye":Number(e.balance_before).toFixed(2),tutar:e.amount,sonraki_bakiye:Number(e.balance_after).toFixed(2),"kazan\xe7_ID":e.transaction_id,tarih:e.date}})),S(n),_(!1);case 12:_(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[h]),Object(d.jsx)(o.Q,{className:"d-flex justify-content-center",children:Object(d.jsx)(o.j,{xl:12,lg:10,children:Object(d.jsxs)(o.e,{children:[Object(d.jsxs)(o.i,{children:["Kazan\xe7",Object(d.jsx)("small",{className:"text-muted",children:" DETAY"})]}),Object(d.jsxs)(o.f,{children:[Object(d.jsx)(o.n,{fields:u,loading:y,sorter:!0,items:w,tableFilter:!0,hover:!0,itemsPerPage:15,activePage:f,clickableRows:!0,onRowClick:function(e){return s.push("/bayi/rapor/kazanc/detay/".concat(e.rapor_id))},scopedSlots:{tutar:function(e){return Object(d.jsx)("td",{children:Object(d.jsxs)("p",{style:{color:"green",fontSize:"15px"},children:[Number(e.tutar).toFixed(2)," TL"]})})},show_details:function(e,t){return Object(d.jsx)("td",{className:"py-2",children:Object(d.jsx)(o.d,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){!function(e,t,a){var s=t.indexOf(e),r=t.slice();-1!==s?r.splice(s,1):r=[e],a(r)}(t,z,I)},children:z.includes(t)?"Sakla":"G\xf6ster"})})},details:function(e,t){return Object(d.jsx)(o.k,{show:z.includes(t),children:Object(d.jsxs)(o.j,{sm:"12",children:[Object(d.jsx)("div",{style:{marginTop:"15px"},children:" "}),Object(d.jsx)(j.default,{applicationID:e.ba\u015fvuru_ID})]})})}}}),Object(d.jsx)(o.O,{activePage:f,onActivePageChange:function(e){h!==e&&s.push("".concat(t.url,"?sayfa=").concat(e))},pages:15,doubleArrows:!1,align:"center"})]})]})})})}}}]);
//# sourceMappingURL=9.b01eb1c5.chunk.js.map