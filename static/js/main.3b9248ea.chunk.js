(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2eLuU","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__2wCwb"}},12:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__unx0n"}},13:function(e,t,a){e.exports={Button:"Button_Button__bngn_"}},17:function(e,t,a){e.exports={loader:"Loader_loader__3lfca"}},24:function(e,t,a){},25:function(e,t,a){},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1Z5Lb",SearchForm:"Searchbar_SearchForm__22Z7r","SearchForm-button":"Searchbar_SearchForm-button__xG2uC","SearchForm-button-label":"Searchbar_SearchForm-button-label__3_xZZ","SearchForm-input":"Searchbar_SearchForm-input__U3uRG"}},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),o=a.n(r),i=(a(24),a(11)),l=a(3),s=(a(25),a(4)),u=a.n(s),m=a(1);var b=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],r=a[1];return Object(m.jsx)("header",{className:u.a.Searchbar,children:Object(m.jsxs)("form",{className:u.a.SearchForm,onSubmit:function(t){t.preventDefault(),e.onSubmit(c),r("")},children:[Object(m.jsx)("button",{type:"submit",className:u.a["SearchForm-button"],children:Object(m.jsx)("span",{className:u.a["SearchForm-button-label"],children:"Search"})}),Object(m.jsx)("input",{className:u.a["SearchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){!function(e){r(e.currentTarget.value)}(e)}})]})})},j=a(12),d=a.n(j),h=a(10),g=a.n(h),f=function(e){var t=e.images,a=e.openModal;return t.map((function(e){return Object(m.jsx)("li",{className:g.a.ImageGalleryItem,onClick:function(){a({src:e.largeImageURL,id:e.id})},children:Object(m.jsx)("img",{className:g.a["ImageGalleryItem-image"],src:e.webformatURL,alt:e.id})},e.id)}))},O=function(e){var t=e.hits,a=e.toggleModal;return Object(m.jsx)("ul",{className:d.a.ImageGallery,children:Object(m.jsx)(f,{images:t,openModal:a})})},p=a(13),_=a.n(p),x=function(e){var t=e.incrementPage,a=Object(n.useRef)();return Object(m.jsx)("button",{onClick:function(){t(a)},className:_.a.Button,ref:a,type:"button",children:"Load More"})},S=a(14),v=a(15),y=a(19),I=a(18),F=(a(27),a(16)),N=a.n(F),w=a(17),G=a.n(w),M=function(e){Object(y.a)(a,e);var t=Object(I.a)(a);function a(){return Object(S.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return Object(m.jsx)(N.a,{className:G.a.loader,type:"ThreeDots",color:"#00BFFF",height:200,width:200,timeout:1e3})}}]),a}(c.a.Component),k=a(8),L=a.n(k),C=document.querySelector("#modal-root");var B=function(e){var t=e.img,a=e.toggleModal;return Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]),Object(r.createPortal)(Object(m.jsxs)("div",{className:L.a.Overlay,onClick:function(e){e.target===e.currentTarget&&a()},children:[Object(m.jsx)(M,{}),Object(m.jsx)("div",{className:L.a.Modal,children:Object(m.jsx)("img",{className:L.a["modal-img"],src:t.src,alt:t.id})})]}),C)};var E=function(e,t){var a="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&").concat("key=23968448-11f2d292972b337bbc3d525d1","&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(e){return e.json()}))};var R=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(l.a)(r,2),s=o[0],u=o[1],j=Object(n.useState)(""),d=Object(l.a)(j,2),h=d[0],g=d[1],f=Object(n.useState)("idle"),p=Object(l.a)(f,2),_=p[0],S=p[1],v=Object(n.useState)(!1),y=Object(l.a)(v,2),I=y[0],F=y[1],N=Object(n.useState)({}),w=Object(l.a)(N,2),G=w[0],k=w[1],L=function(e){var t=e||{};F(!I),k(t)};Object(n.useEffect)((function(){0!==a&&E(h,a).then((function(e){return C(e)})).catch((function(e){return console.log(e)}))}),[h,a]);var C=function(e){S("resolved"),u((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.hits))}))};return Object(m.jsxs)("div",{className:"App",children:[I&&Object(m.jsx)(B,{img:G,toggleModal:L}),Object(m.jsx)(b,{onSubmit:function(e){""!==e.trim()&&e!==h&&(S("pending"),u([]),g(e),c(1))}}),"pending"===_&&Object(m.jsx)(M,{}),""===h.trim()&&Object(m.jsx)("h2",{className:"title",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u0432 \u043f\u043e\u0438\u0441\u043a"}),s.length>0&&Object(m.jsx)(O,{hits:s,toggleModal:L}),s.length>0&&Object(m.jsx)(x,{incrementPage:function(e){S("pending"),c((function(e){return e+1})),setTimeout((function(){e.current.scrollIntoView({behavior:"smooth"})}),500)}})]})};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2lNsc",Modal:"Modal_Modal__2L10G","modal-img":"Modal_modal-img__3m6D9"}}},[[48,1,2]]]);
//# sourceMappingURL=main.3b9248ea.chunk.js.map