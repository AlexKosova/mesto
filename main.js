(()=>{"use strict";var t=document.querySelector(".profile__edit-button"),e=document.querySelector(".profile__add-button"),n=document.querySelector("#editProfileForm"),r=document.forms.editProfile,o=document.querySelector("#newPostPopup"),i=document.forms.newPost,u=document.querySelector(".elements"),c=(document.querySelector(".profile__name"),r.elements.userNameInput),l=(document.querySelector(".profile__description"),r.elements.userJobInput),a=(i.elements.postTitleInput,i.elements.postLinkInput,document.querySelector("#photo-popup")),s=(document.querySelector(".photo-popup__image"),document.querySelector(".photo-popup__title"),document.querySelectorAll(".popup"),{formSelector:".popup__container",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",errorClass:"popup__input_type_error"}),f=document.forms.editPhotoForm,p=(f.elements.photoLinkInput,document.querySelector(".profile__photo-edit-button")),y=document.querySelector("#editPhoto"),h=document.querySelector("#confirmDeletion");function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}var b=function(){function t(e,n,r,o,i){var u=i.checkLike,c=i.cardDelition;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=e.name,this._link=e.link,this._tempSelector=n,this._tempCard=this.createCard(),this._handleCardClick=o,this._likes=e.likes.length,this._card=e,this._cardId=e._id,this._id=r,this._checkLike=u,this.ownerId=e.owner._id,this._deleteCard=c}var e,n;return e=t,(n=[{key:"createCard",value:function(){return this._tempCard=this._getTemplate(),this._tempImageElem=this._tempCard.querySelector(".element__photo"),this._tempImageElem.src=this._link,this._tempCard.querySelector(".element__title").textContent=this._tempImageElem.alt=this._title,this._setEventListeners(),this._tempCard.querySelector(".element__likeQuantity").textContent=this._likes,this._isOwner(),this._tempCard}},{key:"_isOwner",value:function(){this.ownerId!==this._id&&this._buttonDelete.remove()}},{key:"_getTemplate",value:function(){return document.querySelector(this._tempSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._buttonLike=this._tempCard.querySelector(".element__button-like"),this._buttonLike.addEventListener("click",(function(){t._checkLike(t._card)})),this._buttonDelete=this._tempCard.querySelector(".element__button-delete"),this._buttonDelete.addEventListener("click",(function(){t._deleteCard(t._tempCard,t._card)})),this._tempImageElem.addEventListener("click",(function(){t._handleCardClick(t._title,t._link)}))}},{key:"like",value:function(t){this._likes=t.length,this._buttonLike.classList.toggle("element__button-like_active"),this._tempCard.querySelector(".element__likeQuantity").textContent=this._likes}},{key:"isLiked",value:function(t){var e=this;if(t.find((function(t){return t._id===e._id})))return!0}},{key:"_delete",value:function(){this._tempCard.remove()}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}var S=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=n,this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._errorClass=e.errorClass,this._submitButton=this._form.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners(),this._toggleButton()}},{key:"_toggleButton",value:function(){var t=this._form.checkValidity();this._submitButton.disabled=!t,this._submitButton.classList.toggle(this._inactiveButtonClass,!t)}},{key:"_setEventListeners",value:function(){var t=this;this._form.addEventListener("reset",(function(){setTimeout((function(){t._toggleButton()}))})),this._form.querySelectorAll(this._inputSelector).forEach((function(e){e.addEventListener("input",(function(){t._handleFormInput(e),t._toggleButton()}))}))}},{key:"_handleFormInput",value:function(t){this.inputId=t.id;var e=this._form.querySelector("#".concat(this.inputId,"-error"));t.validity.valid?(t.classList.remove(this._errorClass),e.textContent=" "):(t.classList.add(this._errorClass),e.textContent=t.validationMessage)}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}var w=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=n}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.reverse(),t.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var j=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=e,this._opened="popup_opened"}var e,n;return e=t,(n=[{key:"open",value:function(){var t=this;this._popup.classList.add(this._opened),document.addEventListener("keydown",(function(e){t._closeByEscape(e)}))}},{key:"close",value:function(){this._popup.classList.remove(this._opened),document.removeEventListener("keydown",this._closeByEscape)}},{key:"_closeByEscape",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains(t._opened)||e.target.classList.contains("popup__cancel-button"))&&t.close()}))}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},L.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(r);if(o){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imagePopupPhoto=e._popup.querySelector(".photo-popup__image"),e._imagePopupTitle=e._popup.querySelector(".photo-popup__title"),e}return e=u,(n=[{key:"open",value:function(t,e){this._imagePopupPhoto.src=e,this._imagePopupTitle.textContent=this._imagePopupPhoto.alt=t,L(I(u.prototype),"open",this).call(this)}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(j);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},x.apply(this,arguments)}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(r);if(o){var n=D(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._callbackSubmit=e,n._form=n._popup.querySelector("form"),n._inputValues=n._popup.querySelectorAll(".popup__input"),n._button=n._popup.querySelector(".popup__save-button"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputValues.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;x(D(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(e){e.preventDefault(),t._callbackSubmit(t._getInputValues())}))}},{key:"loading",value:function(t){this._button.textContent=t}},{key:"close",value:function(){x(D(u.prototype),"close",this).call(this),this._form.reset()}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(j);function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}var V=function(){function t(e){var n=e.profileName,r=e.userJob,o=e.userPhoto;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userJob=document.querySelector(r),this._userName=document.querySelector(n),this._userPhoto=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,info:this._userJob.textContent}}},{key:"setUserAvatar",value:function(t){this._userPhoto.src=t.avatar}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userJob.textContent=t.about,this.setUserAvatar(t)}}])&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}var M=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_request",value:function(t,e){return fetch(t,e).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"getInitialCards",value:function(){return this._request("".concat(this._url,"/cards"),{headers:this._headers})}},{key:"editprofile",value:function(t){return this._request("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.userName,about:t.userJobInput})})}},{key:"getUserInfo",value:function(){return this._request("".concat(this._url,"/users/me"),{headers:this._headers})}},{key:"addCard",value:function(t){return this._request("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.postTitleInput,link:t.postLinkInput})})}},{key:"setLike",value:function(t){return this._request("".concat(this._url,"/cards/likes/").concat(t),{method:"PUT",headers:this._headers})}},{key:"deleteLike",value:function(t){return this._request("".concat(this._url,"/cards/likes/").concat(t),{method:"DELETE",headers:this._headers})}},{key:"editPhoto",value:function(t){return this._request("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.photoLinkInput})})}},{key:"deleteCard",value:function(t){return this._request("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers})}}])&&H(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Q(o)?o:String(o)),r)}var o}function $(){return $="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=K(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},$.apply(this,arguments)}function G(t,e){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},G(t,e)}function K(t){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},K(t)}var W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&G(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=K(r);if(o){var n=K(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.callbackSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._confirmButton=n._popup.querySelector(".popup__confirm-button"),n._callbackSubmit=r,n}return e=u,(n=[{key:"confirmAction",value:function(){var t=this;this._confirmButton.addEventListener("click",(function(){t._callbackSubmit(t._card,t._cardId),t.close()}))}},{key:"open",value:function(t,e){this._cardId=e._id,this._card=t,$(K(u.prototype),"open",this).call(this)}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(j);function X(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Y="",Z=new M({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-62",headers:{"content-type":"application/json",authorization:"89bed7b0-4fbb-4075-8e62-f50b9f0aeeaf"}});Promise.all([Z.getUserInfo(),Z.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],l=!0,a=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(t){a=!0,o=t}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(a)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return X(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y=o._id,lt.setUserInfo(o),tt.renderItems(i)})).catch((function(t){console.log(t)}));var tt=new w({renderer:ut},u),et=new T(a);et.setEventListeners();var nt=new U(o,(function(t){nt.loading("создаём..."),Z.addCard(t).then((function(t){ut(t),nt.loading("создать"),nt.close()})).catch((function(t){console.log(t)}))}));nt.setEventListeners();var rt=new U(n,(function(t){rt.loading("сохраняем..."),Z.editprofile(t).then((function(t){lt.setUserInfo(t),rt.loading("сохранить"),rt.close()})).catch((function(t){console.log(t)}))}));rt.setEventListeners();var ot=new U(y,(function(t){ot.loading("сохраняем..."),Z.editPhoto(t).then((function(t){lt.setUserAvatar(t),ot.loading("сохранить"),ot.close()})).catch((function(t){console.log(t)}))}));ot.setEventListeners();var it=new W(h,{callbackSubmit:function(t,e){Z.deleteCard(e).then((function(){t.remove(),it.close()})).catch((function(t){console.log(t)}))}});function ut(t){var e=new b(t,"#element",Y,ct,{checkLike:function(){e.isLiked(t.likes)?Z.deleteLike(t._id).then((function(n){e.like(n.likes),t.likes=n.likes})).catch((function(t){console.log(t)})):Z.setLike(t._id).then((function(n){e.like(n.likes),t.likes=n.likes})).catch((function(t){console.log(t)}))},cardDelition:function(t,e){it.open(t,e),it.confirmAction()}});tt.addItem(e.createCard()),e.isLiked(t.likes)&&e.like(t.likes)}function ct(t,e){et.open(t,e)}it.setEventListeners(),new S(s,i).enableValidation(),new S(s,r).enableValidation(),new S(s,f).enableValidation();var lt=new V({profileName:".profile__name",userJob:".profile__description",userPhoto:".profile__photo"});t.addEventListener("click",(function(){rt.open();var t=lt.getUserInfo();c.value=t.name,l.value=t.info})),e.addEventListener("click",(function(){nt.open()})),p.addEventListener("click",(function(){ot.open()}))})();