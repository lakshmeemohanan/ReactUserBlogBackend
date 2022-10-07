"use strict";(self.webpackChunkusers_blog=self.webpackChunkusers_blog||[]).push([[475],{9211:function(e,n,r){r.r(n),r.d(n,{default:function(){return v}});var t=r(8214),s=r(5861),c=r(885),a=r(2791),i=r(8931),l=r(3999),o=r(3373),d=r(2921),u=r(3108),p=r(9508),h=r(5434),x=r(9895),m=r(184),f=function(e){var n=(0,a.useContext)(u.V),r=(0,a.useState)(!1),i=(0,c.Z)(r,2),f=i[0],j=i[1],v=(0,p.x)(),Z=v.isLoading,k=v.error,g=v.sendRequest,E=v.clearError,C=function(){j(!1)},N=function(){var r=(0,s.Z)((0,t.Z)().mark((function r(){return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return j(!1),r.prev=1,r.next=4,g("https://laks-mern-app.herokuapp.com/api"+"/places/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+n.token});case 4:e.onDelete(e.id),r.next=9;break;case 7:r.prev=7,r.t0=r.catch(1);case 9:case"end":return r.stop()}}),r,null,[[1,7]])})));return function(){return r.apply(this,arguments)}}();return(0,m.jsxs)(a.Fragment,{children:[(0,m.jsx)(h.Z,{error:k,onClear:E}),(0,m.jsx)(d.Z,{header:"Are you sure?",footerClass:"place-item__modal-actions",show:f,onCancel:C,footer:(0,m.jsxs)(a.Fragment,{children:[(0,m.jsx)(l.Z,{inverse:!0,onClick:C,children:"CANCEL"}),(0,m.jsx)(l.Z,{danger:!0,onClick:N,children:"DELETE"})]}),children:(0,m.jsx)("p",{children:"Do you want to proceed and delete this place ? Please note that it cannot be undone thereafter."})}),(0,m.jsx)("li",{className:"place-item",children:(0,m.jsxs)(o.Z,{className:"place-item__content",children:[Z&&(0,m.jsx)(x.Z,{asOverlay:!0}),(0,m.jsx)("div",{className:"place-item__image",children:(0,m.jsx)("img",{src:"".concat("https://laks-mern-app.herokuapp.com","/").concat(e.image),alt:e.title})}),(0,m.jsxs)("div",{className:"place-item__info",children:[(0,m.jsx)("h2",{children:e.title}),(0,m.jsx)("h3",{children:e.address}),(0,m.jsx)("p",{children:e.description})]}),(0,m.jsxs)("div",{className:"place-item__actions",children:[n.userId===e.creatorId&&(0,m.jsx)(l.Z,{to:"/places/".concat(e.id),children:"EDIT"}),n.userId===e.creatorId&&(0,m.jsx)(l.Z,{danger:!0,onClick:function(){j(!0)},children:"DELETE"})]})]})})]})},j=function(e){return 0===e.items.length?(0,m.jsx)("div",{className:"place-list center",children:(0,m.jsxs)(o.Z,{children:[(0,m.jsx)("h2",{children:"No Places Found"}),(0,m.jsx)(l.Z,{to:"/places/new",children:"Share Place"})]})}):(0,m.jsx)("ul",{className:"place-list",children:e.items.map((function(n){return(0,m.jsx)(f,{id:n.id,image:n.image,title:n.title,description:n.description,address:n.address,creatorId:n.creator,coordinates:n.location,onDelete:e.onDeletePlace},n.id)}))})},v=function(){var e=(0,p.x)(),n=e.isLoading,r=e.error,l=e.sendRequest,o=e.clearError,d=(0,i.UO)().userId,u=(0,a.useState)(),f=(0,c.Z)(u,2),v=f[0],Z=f[1];(0,a.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("".concat("https://laks-mern-app.herokuapp.com/api","/places/user/").concat(d));case 3:n=e.sent,Z(n.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[l,d]);return(0,m.jsxs)(a.Fragment,{children:[(0,m.jsx)(h.Z,{error:r,onClear:o}),n&&(0,m.jsx)("div",{className:'="center',children:(0,m.jsx)(x.Z,{})}),!n&&v&&(0,m.jsx)(j,{items:v,onDeletePlace:function(e){Z((function(n){return n.filter((function(n){return n.id!==e}))}))}})]})}},3373:function(e,n,r){r.d(n,{Z:function(){return s}});r(2791);var t=r(184),s=function(e){return(0,t.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}}}]);
//# sourceMappingURL=475.e30b0386.chunk.js.map