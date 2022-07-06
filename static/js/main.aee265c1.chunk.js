(window["webpackJsonpmesto-react"]=window["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),i=(n(15),n(1)),l=n(4),s=n.n(l);var u=function(){return o.a.createElement("section",{className:"header"},o.a.createElement("img",{className:"header__logo",src:s.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))};var m=function(e){return o.a.createElement("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen),onClick:function(t){return t.target.classList.contains("popup_opened")&&e.onClose()}},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{className:"popup__close popup__close_type_".concat(e.name),type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),o.a.createElement("h2",{className:"popup__title"},e.title),o.a.createElement("form",{className:"form form_type_".concat(e.name),name:"popup-".concat(e.name),noValidate:!0}),e.children))};var p=function(e){return o.a.createElement("div",{className:"popup popup_type_photo ".concat(e.card?"popup_opened":""),onClick:function(t){return t.target.classList.contains("popup_opened")&&e.onClose()}},o.a.createElement("div",{className:"popup__container-photo"},o.a.createElement("button",{className:"popup__close popup__close_type_image",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),o.a.createElement("img",{className:"popup__photo-element",src:"".concat(e.card)?e.card.link:"",alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"}),o.a.createElement("h3",{className:"popup__title-photo"})))},_=n(5),d=n(6),f=new(function(){function e(t,n){Object(_.a)(this,e),this.url=t,this.token=n}return Object(d.a)(e,[{key:"_getResponseServer",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getCardsInfo",value:function(){var e=this;return fetch("".concat(this.url,"/cards"),{headers:{"Content-type":"application/json",authorization:this.token}}).then((function(t){return e._getResponseServer(t)})).then((function(e){return e}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.url,"/users/me"),{headers:{"Content-type":"application/json",authorization:this.token}}).then((function(t){return e._getResponseServer(t)})).then((function(e){return e}))}},{key:"editUserInfo",value:function(e,t){var n=this;return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return n._getResponseServer(e)})).then((function(e){return e}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseServer(e)})).then((function(e){return e}))}},{key:"addCard",value:function(e,t){var n=this;return fetch("".concat(this.url,"/cards"),{method:"POST",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return n._getResponseServer(e)})).then((function(e){return e}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(e){return t._getResponseServer(e)})).then((function(e){return e}))}},{key:"setLikeCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(e){return t._getResponseServer(e)})).then((function(e){return e}))}},{key:"removeLikeCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(e){return t._getResponseServer(e)})).then((function(e){return e}))}}]),e}())("https://mesto.nomoreparties.co/v1/cohort-43","0cd5671f-d9e2-44a6-902a-4db007f7a8f2");var h=function(e){return o.a.createElement("li",{className:"element",onClick:function(){e.onCardClick(e.card)}},o.a.createElement("button",{className:"element__delete",type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0442\u043e"}),o.a.createElement("img",{src:e.card.link,className:"element__image",alt:e.card.name}),o.a.createElement("div",{className:"element__content"},o.a.createElement("h2",{className:"element__title"},e.card.name),o.a.createElement("div",{className:"element__like-content"},o.a.createElement("button",{className:"element__like",type:"button","aria-label":"\u041b\u0430\u0439\u043a"}),o.a.createElement("p",{className:"element__like-quantity"},e.card.likes.length))))};var E=function(e){var t=o.a.useState(),n=Object(i.a)(t,2),a=n[0],r=n[1],c=o.a.useState(),l=Object(i.a)(c,2),s=l[0],u=l[1],_=o.a.useState(),d=Object(i.a)(_,2),E=d[0],v=d[1],b=o.a.useState([]),k=Object(i.a)(b,2),y=k[0],N=k[1];return o.a.useEffect((function(){f.getUserInfo().then((function(e){r(e.name),u(e.about),v(e.avatar)})).catch((function(e){return console.log(e)})),f.getCardsInfo().then((function(e){N(e)})).catch((function(e){return console.log(e)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__avatar",onClick:e.onEditAvatar,style:{backgroundImage:"url(".concat(E,")")}}),o.a.createElement("h1",{className:"profile__name"},a),o.a.createElement("button",{className:"profile__edit-button",onClick:e.onEditProfile,type:"button","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),o.a.createElement("p",{className:"profile__activity"},s),o.a.createElement("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlace,"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})),o.a.createElement("section",{className:"elements"},o.a.createElement("ul",{className:"elements__container"},y.map((function(t){return o.a.createElement(h,{card:t,onCardClick:e.onCardClick,key:t._id})})))),o.a.createElement(p,{card:e.selectedCard,onClose:e.onClose}),o.a.createElement(m,{onClose:e.onClose,onEditProfile:e.onEditProfile,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",isOpen:"".concat(e.isEditProfilePopupOpen?"popup_opened":"")},o.a.createElement("input",{className:"form__input form__input_value_name",type:"text",name:"input-name",id:"name-input",required:!0,minLength:"2",maxLength:"40"}),o.a.createElement("span",{className:"form__input-error form__input-error_position_top",id:"name-input-error"}),o.a.createElement("input",{className:"form__input form__input_value_activity",type:"text",name:"input-activity",id:"activity-input",required:!0,minLength:"2",maxLength:"200"}),o.a.createElement("span",{className:"form__input-error form__input-error_position_button",id:"activity-input-error"}),o.a.createElement("button",{className:"form__button",type:"submit",name:"save-button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),o.a.createElement(m,{onClose:e.onClose,title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",isOpen:"".concat(e.isAddPlacePopupOpen?"popup_opened":"")},o.a.createElement("input",{className:"form__input form__input_value_place",type:"text",id:"place-input",required:!0,minLength:"2",maxLength:"30",name:"place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),o.a.createElement("span",{className:"form__input-error form__input-error_position_top",id:"place-input-error"}),o.a.createElement("input",{className:"form__input form__input_value_link",type:"url",required:!0,id:"link-input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),o.a.createElement("span",{className:"form__input-error form__input-error_position_button",id:"link-input-error"}),o.a.createElement("button",{className:"form__button",type:"submit",name:"save-button"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")),o.a.createElement(m,{onClose:e.onClose,title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",isOpen:"".concat(e.isEditAvatarPopupOpen?"popup_opened":"")},o.a.createElement("input",{className:"form__input form__input_value_link",type:"url",required:!0,id:"link-avatar",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e"}),o.a.createElement("span",{className:"form__input-error form__input-error_position_top",id:"link-avatar-error"}),o.a.createElement("button",{className:"form__button",type:"submit",name:"avatar-button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),o.a.createElement(m,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"confirmation"},o.a.createElement("button",{className:"form__button",type:"submit",name:"confirmation-button"},"\u0414\u0430")))};var v=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2022 Mesto-React Russia"))};var b=function(){var e=o.a.useState(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=o.a.useState(!1),c=Object(i.a)(r,2),l=c[0],s=c[1],m=o.a.useState(!1),p=Object(i.a)(m,2),_=p[0],d=p[1],f=o.a.useState(!1),h=Object(i.a)(f,2),b=h[0],k=h[1];return o.a.createElement("div",{className:"page"},o.a.createElement(u,null),o.a.createElement(E,{onCardClick:function(e){k(e)},onEditAvatar:function(){d(!0)},onEditProfile:function(){a(!0)},onAddPlace:function(){s(!0)},onClose:function(){d(!1),a(!1),s(!1),k(!1)},isEditProfilePopupOpen:n,isAddPlacePopupOpen:l,isEditAvatarPopupOpen:_,selectedCard:b}),o.a.createElement(v,null),o.a.createElement("template",{className:"templateCard"},o.a.createElement("li",{className:"element"},o.a.createElement("button",{className:"element__delete",type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0442\u043e"}),o.a.createElement("img",{src:"#",className:"element__image",alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"}),o.a.createElement("div",{className:"element__content"},o.a.createElement("h2",{className:"element__title"}),o.a.createElement("div",{className:"element__like-content"},o.a.createElement("button",{className:"element__like",type:"button","aria-label":"\u041b\u0430\u0439\u043a"}),o.a.createElement("p",{className:"element__like-quantity"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,n){e.exports=n.p+"static/media/logo.51772f7c.svg"},7:function(e,t,n){e.exports=n(16)}},[[7,1,2]]]);
//# sourceMappingURL=main.aee265c1.chunk.js.map