(this.webpackJsonptest=this.webpackJsonptest||[]).push([[31],{737:function(e,t,a){"use strict";a.r(t);var n=a(63),c=a.n(n),r=a(88),s=a(637),i=a(1),o=a(13),u=a(636),l=a(7);t.default=function(){var e=Object(o.g)(),t=Object(o.h)().search.match(/sayfa=([0-9]+)/,""),a=Number(t&&t[1]?t[1]:1),n=Object(i.useState)(a),j=Object(s.a)(n,2),p=j[0],b=j[1],d=Object(i.useState)(!0),h=Object(s.a)(d,2),f=h[0],O=h[1],x=Object(i.useState)(void 0),m=Object(s.a)(x,2),k=m[0],g=m[1];return Object(i.useEffect)((function(){a!==p&&b(a),function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,fetch("/report/transactions",{headers:{"content-type":"application/json",authorization:"Bearer ".concat(document.cookie.slice(8)," ")}});case 3:if(200!==(t=e.sent).status){e.next=10;break}return e.next=7,t.json();case 7:a=e.sent,n=a.map((function(e){return{rapor_id:e.report_id,"toplam_kazan\xe7":e.transaction_total,tarih:e.date.slice(0,10)}})),g(n);case 10:O(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]),Object(l.jsx)(u.Q,{className:"d-flex justify-content-center",children:Object(l.jsx)(u.j,{xl:10,children:Object(l.jsxs)(u.e,{children:[Object(l.jsxs)(u.i,{children:["Kazan\xe7",Object(l.jsx)("small",{className:"text-muted",children:" raporlar\u0131n\u0131z"})]}),Object(l.jsxs)(u.f,{children:[Object(l.jsx)(u.n,{loading:f,sorter:!0,items:k,tableFilter:!0,hover:!0,striped:!0,itemsPerPage:15,activePage:p,clickableRows:!0,onRowClick:function(t){return e.push("/bayi/rapor/kazanc/detay/".concat(t.rapor_id))},scopedSlots:{"toplam_kazan\xe7":function(e){return Object(l.jsx)("td",{children:Object(l.jsxs)("p",{style:{color:"green",fontSize:"15px"},children:[Number(e.toplam_kazan\u00e7).toFixed(2)," TL"]})})}}}),Object(l.jsx)(u.O,{activePage:p,onActivePageChange:function(t){a!==t&&e.push("/bayi/islemler/rapor?sayfa=".concat(t))},pages:15,doubleArrows:!1,align:"center"})]})]})})})}}}]);
//# sourceMappingURL=31.057d4a21.chunk.js.map