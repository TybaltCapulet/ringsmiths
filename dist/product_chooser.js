parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SryH":[function(require,module,exports) {
module.exports={"ring-plain":{field:"ring_type",value:"plain-shaped"},"ring-diamond":{field:"ring_type",value:"gem-set"},"carat-9":{field:"carat",value:"9ct",excl_attrs:{metal:["titanium","platinum"]},excl_fields:["metal-titanium","metal-platinum"]},"carat-18":{field:"carat",value:"18ct",excl_attrs:{metal:["titanium","platinum"]},excl_fields:["metal-titanium","metal-platinum"]},"style-flat":{field:"style",value:"flat"},"style-easyfit":{field:"style",value:"easy-fit"},"style-court":{field:"style",value:"court"},"style-dshape":{field:"style",value:"d-shape"},"width-2":{field:"width",value:"2mm",excl_attrs:{metal:["titanium"]},excl_fields:["metal-titanium"]},"width-2.5":{field:"width",value:"2-5mm",excl_attrs:{metal:["rose-gold","titanium"]},excl_fields:["metal-titanium","metal-rosegold"]},"width-3":{field:"width",value:"3mm",excl_attrs:{metal:["titanium"]},excl_fields:["metal-titanium"]},"width-4":{field:"width",value:"4mm"},"width-5":{field:"width",value:"5mm"},"width-6":{field:"width",value:"6mm",excl_attrs:{metal:["rose-gold"]},excl_fields:["metal-rosegold"]},"width-8":{field:"width",value:"8mm",excl_attrs:{metal:["rose-gold"]},excl_fields:["metal-rosegold"]},"metal-yellowgold":{field:"metal",value:"yellow-gold"},"metal-rosegold":{field:"metal",value:"rose-gold",excl_attrs:{width:["6mm","8mm","2.5mm"]},excl_fields:["width-6","width-8","width-2.5"]},"metal-whitegold":{field:"metal",value:"white-gold"},"metal-platinum":{field:"metal",value:"platinum",excl_attrs:{carat:["9ct","18ct"]},excl_fields:["carat-9","carat-18"]},"metal-titanium":{field:"metal",value:"titanium",excl_attrs:{width:["2mm","2.5mm","3mm"],carat:["9ct","18ct"]},excl_fields:["carat-9","carat-18","width-2","width-2.5","width-3"]}};
},{}],"DcJC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.titleCase=void 0;var e=function(e){var t=e.split("-");return t.forEach(function(e,t,o){o[t]=e[0].toUpperCase()+e.slice(1).toLowerCase()}),t.join(" ")};exports.titleCase=e;
},{}],"aEaM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.deselectSiblings=exports.allSiblings=void 0;var e=function(e,s){for(var i=[],t=e.parentNode.firstChild;t;)t.classList.includes(s)&&t!==e&&i.push(t),t=t.nextSibling;return i};exports.allSiblings=e;var s=function(e){for(var s=e.parentNode.firstChild;s;)s.classList.includes("selectedOption")&&s!==e&&siblings.classList.remove("selectedOption"),s=s.nextSibling};exports.deselectSiblings=s;
},{}],"fTby":[function(require,module,exports) {

},{}],"l3tj":[function(require,module,exports) {
"use strict";var e=o(require("../data/fields.json")),t=o(require("./title_case.js")),n=o(require("./siblings.js"));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return a(e)||u(e)||r(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function u(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}require("../styles/product_chooser.css");var d=f(),f=function(){return{ring_type:"ring-plain",carat:null,width:null,metal:null,style:null}},s=Object.keys(e.default).reduce(function(e,t){var n=t.split("-")[0];return e[n]=(e[n]||0)+1,e},{}),v=function(){var t,n,o,l,i=[null===(t=e.default[d.carat])||void 0===t?void 0:t.value,null===(n=e.default[d.width])||void 0===n?void 0:n.value,null===(o=e.default[d.metal])||void 0===o?void 0:o.value,null===(l=e.default[d.style])||void 0===l?void 0:l.value,"wedding-ring"].filter(Boolean);x=i.join("-")},m=function(){var t=[d.carat,d.width,d.style,d.metal].filter(Boolean),n=[];t.forEach(function(t){n.push(e.default[t].excl_fields)}),n=l(n=new Set(n.flat().filter(Boolean))),Object.keys(e.default).forEach(function(e){var t=document.getElementById(e);t&&(t.hidden=n.includes(e))});var o=n.reduce(function(e,t){var n=t.split("-")[0];return e[n]=(e[n]||0)+1,e},{});Object.keys(d).forEach(function(e){var t=document.getElementById(e+"-option-section");t&&(t.hidden=o[e]===s[e])})},y=function(t){var n=e.default[t.id],o=n.field;d[o]===t.id?d[o]=null:(d[o]=t.id,void 0!==n.excl_attrs&&Object.keys(d).forEach(function(e){var t=n.excl_fields;void 0!==t&&t.includes(d[e])&&(d[e]=null)})),m(),v(),p()},g=function(){var e=!0;return Object.keys(d).forEach(function(t){var n=document.getElementById(t+"-option-section");d[t]||!n||n.hidden||(e=!1)}),e},p=function(){var e=document.getElementById("finalise_ring");g()?e.href="/product/"+x:e.href="#"},h=function(t){var n,o,l,i=e.default[t.id];if(void 0!==i){var r=i.field,u=["style"===r?i.value:(null===(n=e.default[d.style])||void 0===n?void 0:n.value)||"court","metal"===r?i.value:(null===(o=e.default[d.metal])||void 0===o?void 0:o.value)||"yellow-gold","width"===r?i.value:(null===(l=e.default[d.width])||void 0===l?void 0:l.value)||"4mm"];return I(u.join("-"))}},b=function(e){var t=document.getElementById(e.id+"-image"),n=h(e);t&&n&&(t.src=n,t.srcset="")},E=function(){l(document.getElementsByClassName("ring-attribute-selector")).forEach(function(e){b(e)})},j=function(e){if(![null,void 0].includes(d[e.target.id.split("-")[0]])){var t=e.target.closest(".et_pb_section");t.style.display="none";for(var n=t.nextElementSibling;n.hidden;)n=n.nextElementSibling;n.style.display="block"}},w=function(){var e=Object.keys(d);e.push("spec"),e.forEach(function(e){var t=document.getElementById(e+"-option-section");[null,void 0].includes(t)||(t.style.display="metal"===e?"block":"none")})},B=function(e,n,o,l){document.getElementById("spec-text").innerHTML="Your chosen ring is a ".concat(e?e+" ":"").concat((0,t.default)(n)," ").concat((0,t.default)(o)," wedding ring with a finger width of ").concat(l,".")},k=function(e,t,n){var o=document.getElementById("spec-image"),l=[t||"court",e||"yellow-gold",n||"4mm"];o.src=I(l.join("-")),o.srcset=""},I=function(e){return"/wp-content/uploads/2020/08/"+e+".jpg"},O=function(){var t,n,o,l,i=null===(t=e.default[d.carat])||void 0===t?void 0:t.value,r=null===(n=e.default[d.metal])||void 0===n?void 0:n.value,u=null===(o=e.default[d.style])||void 0===o?void 0:o.value,a=null===(l=e.default[d.width])||void 0===l?void 0:l.value;B(i,r,u,a),k(r,u,a)},_=function(){d=f(),w(),m(),v()},S=function(e){e.classList.add("selectedOption"),(0,n.default)(e)},x="#";document.addEventListener("DOMContentLoaded",function(){l(document.getElementsByClassName("ring-attribute-selector")).forEach(function(e){e.onclick=function(){S(e),y(e),E(),O()}}),l(document.getElementsByClassName("next-button")).forEach(function(e){e.onclick=function(e){e.preventDefault(),j(e)}}),l(document.getElementsByClassName("reset-button")).forEach(function(e){e.onclick=function(e){e.preventDefault(),_()}}),_()});
},{"../data/fields.json":"SryH","./title_case.js":"DcJC","./siblings.js":"aEaM","../styles/product_chooser.css":"fTby"}]},{},["l3tj"], null)
//# sourceMappingURL=/product_chooser.js.map