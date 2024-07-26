var FRANKENWC=function(c){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pt;const z=globalThis,W=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,st=Symbol(),rt=new WeakMap;let Tt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==st)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(W&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&rt.set(e,t))}return t}toString(){return this.cssText}};const xt=r=>new Tt(typeof r=="string"?r:r+"",void 0,st),Rt=(r,t)=>{if(W)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=z.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},ot=W?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return xt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Nt,defineProperty:Ht,getOwnPropertyDescriptor:Mt,getOwnPropertyNames:Dt,getOwnPropertySymbols:Bt,getPrototypeOf:It}=Object,S=globalThis,nt=S.trustedTypes,Lt=nt?nt.emptyScript:"",V=S.reactiveElementPolyfillSupport,N=(r,t)=>r,G={toAttribute(r,t){switch(t){case Boolean:r=r?Lt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},K=(r,t)=>!Nt(r,t),lt={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:K};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);class T extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=lt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Ht(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=Mt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const a=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??lt}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;const t=It(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){const e=this.properties,i=[...Dt(e),...Bt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(ot(s))}else t!==void 0&&e.push(ot(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Rt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:G).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:G;this._$Em=s,this[s]=a.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??K)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[N("elementProperties")]=new Map,T[N("finalized")]=new Map,V==null||V({ReactiveElement:T}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,q=H.trustedTypes,ht=q?q.createPolicy("lit-html",{createHTML:r=>r}):void 0,F="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,J="?"+_,jt=`<${J}>`,E=document,M=()=>E.createComment(""),D=r=>r===null||typeof r!="object"&&typeof r!="function",at=Array.isArray,ct=r=>at(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Q=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,ut=/>/g,k=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,$t=/"/g,ft=/^(?:script|style|textarea|title)$/i,zt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),y=zt(1),O=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),vt=new WeakMap,C=E.createTreeWalker(E,129);function gt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ht!==void 0?ht.createHTML(t):t}const mt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=B;for(let a=0;a<e;a++){const l=r[a];let d,$,h=-1,p=0;for(;p<l.length&&(n.lastIndex=p,$=n.exec(l),$!==null);)p=n.lastIndex,n===B?$[1]==="!--"?n=dt:$[1]!==void 0?n=ut:$[2]!==void 0?(ft.test($[2])&&(s=RegExp("</"+$[2],"g")),n=k):$[3]!==void 0&&(n=k):n===k?$[0]===">"?(n=s??B,h=-1):$[1]===void 0?h=-2:(h=n.lastIndex-$[2].length,d=$[1],n=$[3]===void 0?k:$[3]==='"'?$t:pt):n===$t||n===pt?n=k:n===dt||n===ut?n=B:(n=k,s=void 0);const u=n===k&&r[a+1].startsWith("/>")?" ":"";o+=n===B?l+jt:h>=0?(i.push(d),l.slice(0,h)+F+l.slice(h)+_+u):l+_+(h===-2?a:u)}return[gt(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),i]};class I{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[d,$]=mt(t,e);if(this.el=I.createElement(d,i),C.currentNode=this.el.content,e===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=C.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(F)){const p=$[n++],u=s.getAttribute(h).split(_),g=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:g[2],strings:u,ctor:g[1]==="."?yt:g[1]==="?"?wt:g[1]==="@"?_t:L}),s.removeAttribute(h)}else h.startsWith(_)&&(l.push({type:6,index:o}),s.removeAttribute(h));if(ft.test(s.tagName)){const h=s.textContent.split(_),p=h.length-1;if(p>0){s.textContent=q?q.emptyScript:"";for(let u=0;u<p;u++)s.append(h[u],M()),C.nextNode(),l.push({type:2,index:++o});s.append(h[p],M())}}}else if(s.nodeType===8)if(s.data===J)l.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(_,h+1))!==-1;)l.push({type:7,index:o}),h+=_.length-1}o++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function P(r,t,e=r,i){var n,a;if(t===O)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const o=D(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=P(r,s._$AS(r,t.values),s,i)),t}class bt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??E).importNode(e,!0);C.currentNode=s;let o=C.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new x(o,o.nextSibling,this,t):l.type===1?d=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(d=new At(o,this,t)),this._$AV.push(d),l=i[++a]}n!==(l==null?void 0:l.index)&&(o=C.nextNode(),n++)}return C.currentNode=E,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class x{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),D(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ct(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==v&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=I.createElement(gt(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new bt(s,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=vt.get(t.strings);return e===void 0&&vt.set(t.strings,e=new I(t)),e}k(t){at(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new x(this.S(M()),this.S(M()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=P(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{const a=t;let l,d;for(t=o[0],l=0;l<o.length-1;l++)d=P(this,a[i+l],e,l),d===O&&(d=this._$AH[l]),n||(n=!D(d)||d!==this._$AH[l]),d===v?t=v:t!==v&&(t+=(d??"")+o[l+1]),this._$AH[l]=d}n&&!s&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class yt extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}class wt extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}}class _t extends L{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??v)===O)return;const i=this._$AH,s=t===v&&i!==v||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==v&&(i===v||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class At{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const Gt={P:F,A:_,C:J,M:1,L:mt,R:bt,D:ct,V:P,I:x,H:L,N:wt,U:_t,B:yt,F:At},Y=H.litHtmlPolyfillSupport;Y==null||Y(I,x),(H.litHtmlVersions??(H.litHtmlVersions=[])).push("3.1.4");const qt=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new x(t.insertBefore(M(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let R=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=qt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return O}};R._$litElement$=!0,R.finalized=!0,(Pt=globalThis.litElementHydrateSupport)==null||Pt.call(globalThis,{LitElement:R});const Z=globalThis.litElementPolyfillSupport;Z==null||Z({LitElement:R}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:K},Vt=(r=Wt,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,r),i==="accessor"){const{name:n}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,r)},init(a){return a!==void 0&&this.P(n,void 0,r),a}}}if(i==="setter"){const{name:n}=e;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,r)}}throw Error("Unsupported decorator location: "+i)};function f(r){return(t,e)=>typeof e=="object"?Vt(r,t,e):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(r){return f({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ft=r=>(...t)=>({_$litDirective$:r,values:t});class Jt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Qt}=Gt,Et=()=>document.createComment(""),j=(r,t,e)=>{var o;const i=r._$AA.parentNode,s=t===void 0?r._$AB:t._$AA;if(e===void 0){const n=i.insertBefore(Et(),s),a=i.insertBefore(Et(),s);e=new Qt(n,a,r,r.options)}else{const n=e._$AB.nextSibling,a=e._$AM,l=a!==r;if(l){let d;(o=e._$AQ)==null||o.call(e,r),e._$AM=r,e._$AP!==void 0&&(d=r._$AU)!==a._$AU&&e._$AP(d)}if(n!==s||l){let d=e._$AA;for(;d!==n;){const $=d.nextSibling;i.insertBefore(d,s),d=$}}}return e},U=(r,t,e=r)=>(r._$AI(t,e),r),Yt={},Zt=(r,t=Yt)=>r._$AH=t,Xt=r=>r._$AH,X=r=>{var i;(i=r._$AP)==null||i.call(r,!1,!0);let t=r._$AA;const e=r._$AB.nextSibling;for(;t!==e;){const s=t.nextSibling;t.remove(),t=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=(r,t,e)=>{const i=new Map;for(let s=t;s<=e;s++)i.set(r[s],s);return i},te=Ft(class extends Jt{constructor(r){if(super(r),r.type!==Kt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const s=[],o=[];let n=0;for(const a of r)s[n]=i?i(a,n):n,o[n]=e(a,n),n++;return{values:o,keys:s}}render(r,t,e){return this.dt(r,t,e).values}update(r,[t,e,i]){const s=Xt(r),{values:o,keys:n}=this.dt(t,e,i);if(!Array.isArray(s))return this.ut=n,o;const a=this.ut??(this.ut=[]),l=[];let d,$,h=0,p=s.length-1,u=0,g=o.length-1;for(;h<=p&&u<=g;)if(s[h]===null)h++;else if(s[p]===null)p--;else if(a[h]===n[u])l[u]=U(s[h],o[u]),h++,u++;else if(a[p]===n[g])l[g]=U(s[p],o[g]),p--,g--;else if(a[h]===n[g])l[g]=U(s[h],o[g]),j(r,l[g+1],s[h]),h++,g--;else if(a[p]===n[u])l[u]=U(s[p],o[u]),j(r,s[h],s[p]),p--,u++;else if(d===void 0&&(d=kt(n,u,g),$=kt(a,h,p)),d.has(a[h]))if(d.has(a[p])){const A=$.get(n[u]),it=A!==void 0?s[A]:null;if(it===null){const Ut=j(r,s[h]);U(Ut,o[u]),l[u]=Ut}else l[u]=U(it,o[u]),j(r,s[h],it),s[A]=null;u++}else X(s[p]),p--;else X(s[h]),h++;for(;u<=g;){const A=j(r,l[g+1]);U(A,o[u]),l[u++]=A}for(;h<=p;){const A=s[h++];A!==null&&X(A)}return this.ut=n,Zt(r,l),O}});function Ot(r){try{if(r.startsWith("{"))return JSON.parse(r);const t={};return r.split(";").forEach(e=>{const i=e.trim().split(/:(.*)/);t[i[0].trim()]=i[1].trim()}),t}catch{return{}}}function tt(r){if(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(r))return r}function et(r){if(/^(\d*\.?\d+)(px|cm|mm|in|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)$/.test(r))return r}function ee(r){if(["none","hidden","dotted","dashed","solid","double","groove","ridge","inset","outset"].includes(r))return r}function ie(r){if(/^(\d*\.?\d+)(ms|s)$/.test(r))return r}var se=Object.defineProperty,re=Object.getOwnPropertyDescriptor,m=(r,t,e,i)=>{for(var s=i>1?void 0:i?re(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&se(t,e,s),s};c.Select=class extends R{constructor(){super(...arguments),this.name="",this.multiple=!1,this.disabled=!1,this.placeholder="",this.searchable=!1,this.error=!1,this.i18n="",this.$term="",this.$options=[],this.$filteredOptions=this.$options,this.$focused=-1,this.$selected=[],this.$isOpen=!1,this.$i18n={"selection-count-text":":n: options selected"}}navigate(t){const e=o=>o.type!=="label"&&o.disabled!==!0;let i=this.$focused;const s=t==="up"?-1:1;do if(i+=s,i<0){for(i=this.$filteredOptions.length-1;i>=0&&!e(this.$filteredOptions[i]);)i--;break}else if(i>=this.$filteredOptions.length){for(i=0;i<this.$filteredOptions.length&&!e(this.$filteredOptions[i]);)i++;break}while(!e(this.$filteredOptions[i]));return i}addOption(t,e){t.selected===!0&&(this.multiple===!1?this.$selected=[t.value]:this.$selected.push(t.value));let i;t.hasAttribute("value")?i=t.getAttribute("value")||"":i=t.textContent||"",this.$options.push({type:"option",value:i,text:t.textContent||"",disabled:e===!0?!0:t.disabled,selected:t.selected})}connectedCallback(){super.connectedCallback(),Array.from(this.children).map(t=>{if(t.nodeName==="OPTGROUP"){const e=t;this.$options.push({type:"label",text:e.getAttribute("label")||""}),Array.from(e.children).map(i=>{const s=i;this.addOption(s,e.disabled)})}if(t.nodeName==="OPTION"){const e=t;this.addOption(e)}}),this.multiple===!1&&this.$selected.length===1&&(this.$focused=this.$options.findIndex(t=>t.value===this.$selected[0])),this.i18n&&(this.$i18n=Ot(this.i18n)),document.addEventListener("click",this.onClickAway.bind(this)),this.innerHTML="",this.removeAttribute("uk-cloak")}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.onClickAway)}createRenderRoot(){return this}updated(t){var e;if(t.has("$focused")&&this.$isOpen===!0&&this.focusLi(),t.has("$isOpen"))if(this.$isOpen===!0){this.focusLi(!1);const i=window.innerHeight,s=this.renderRoot.querySelector("div.uk-dropdown"),o=this.renderRoot.querySelector("button"),n={dropdown:s.getBoundingClientRect(),button:o.getBoundingClientRect()};n.button.bottom+((e=n.dropdown)==null?void 0:e.height)>i&&(s.style.bottom=`${n.button.height+4}px`),this.dispatchEvent(new CustomEvent("uk-select:shown",{detail:{value:!0},bubbles:!0,composed:!0}))}else this.updateComplete.then(()=>{this.$term="",this.multiple===!1?this.$focused=this.$options.findIndex(i=>i.value===this.$selected[0]):this.$focused=-1}),this.dispatchEvent(new CustomEvent("uk-select:hidden",{detail:{value:!0},bubbles:!0,composed:!0}));if(t.has("$term")){if(this.$term===""){this.updateComplete.then(()=>{this.$filteredOptions=this.$options});return}this.updateComplete.then(()=>{this.$filteredOptions=this.$options.filter(i=>{var s;return(s=i.value)==null?void 0:s.toLowerCase().includes(this.$term)})})}t.has("$selected")&&JSON.stringify(t.get("$selected"))!==JSON.stringify(this.$selected)&&this.dispatchEvent(new CustomEvent("uk-select:input",{detail:{value:this.$selected},bubbles:!0,composed:!0}))}render(){return y` <div class="uk-combobox">
      <button
        class="uk-combobox-input ${this.error===!0?"uk-form-danger":""}"
        type="button"
        .disabled=${this.disabled}
        @click="${this.toggle}"
        @keydown=${t=>{if(this.$isOpen===!0)switch(t.key){case"Escape":this.$isOpen=!1;break;case"ArrowDown":t.preventDefault(),this.$focused=this.navigate("down");break;case"ArrowUp":t.preventDefault(),this.$focused=this.navigate("up");break;case"Enter":t.preventDefault(),this.select(this.$focused);break;case" ":t.preventDefault(),this.select(this.$focused);break;case"Tab":this.searchable===!1&&(this.$isOpen=!1);break}else switch(t.key){case"ArrowDown":t.preventDefault(),this.$focused=this.navigate("down"),this.$isOpen=!0;break;case"ArrowUp":t.preventDefault(),this.$focused=this.navigate("up"),this.$isOpen=!0;break}}}
      >
        <span> ${this.text()} </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevrons-up-down"
        >
          <path d="m7 15 5 5 5-5" />
          <path d="m7 9 5-5 5 5" />
        </svg>
      </button>
      ${this.$isOpen===!0?y`<div class="uk-drop uk-dropdown uk-open" tabindex="-1">
            ${this.searchable===!0?y`<div class="uk-combobox-search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-search"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <input
                    placeholder="Search"
                    type="text"
                    .value="${this.$term}"
                    @keydown=${t=>{var e;if(this.$isOpen===!0)switch(t.key){case"Escape":this.$isOpen=!1,(e=this.renderRoot.querySelector("button"))==null||e.focus();break;case"ArrowDown":t.preventDefault(),this.$focused=this.navigate("down");break;case"ArrowUp":t.preventDefault(),this.$focused=this.navigate("up");break;case"Enter":t.preventDefault(),this.select(this.$focused);break;case"Tab":!t.altKey&&!t.shiftKey&&!t.ctrlKey&&!t.metaKey&&(this.$isOpen=!1);break}}}
                    @input=${t=>{const e=t.target;this.$term=e.value}}
                  />
                </div>`:""}
            <ul class="uk-dropdown-nav" tabindex="-1">
              ${te(this.$filteredOptions,t=>t.value,(t,e)=>y`${t.type==="label"?y`<li class="uk-nav-header">${t.text}</li>`:y`<li
                        class="${t.disabled===!0?"uk-disabled":""} ${this.$focused===e?"uk-active":""}"
                        tabindex="-1"
                        @click=${()=>this.select(e)}
                      >
                        <a tabindex="-1">
                          <span>${t.text}</span>
                          ${this.$selected.includes(t.value)?y`<svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-check"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>`:""}
                        </a>
                      </li>`}`)}
            </ul>
          </div>`:""}
      ${this.name?y`${this.multiple===!1?y`<input
                name="${this.name}"
                type="hidden"
                value="${this.$selected[0]}"
              />`:this.$selected.map(t=>y`<input
                    name="${this.name}[]"
                    type="hidden"
                    value="${t}"
                  />`)}`:""}
    </div>`}text(){var t,e;return this.$selected.length===0?this.placeholder!==""?this.placeholder:"Select an option":this.multiple===!1?(t=this.$options.find(i=>i.value===this.$selected[0]))==null?void 0:t.text:this.$selected.length===1?(e=this.$options.find(i=>i.value===this.$selected[0]))==null?void 0:e.text:this.$i18n["selection-count-text"].replace(":n:",this.$selected.length.toString())}toggle(){this.$options.length!==0&&(this.$isOpen=!this.$isOpen)}focusLi(t=!0){const e=this.renderRoot.querySelector("ul");if(e){const i=e.querySelectorAll("li");if(this.$focused>=0&&this.$focused<i.length){const s=i[this.$focused],o={ul:e.getBoundingClientRect(),li:s.getBoundingClientRect()},n=s.offsetTop-e.offsetTop-o.ul.height/2+o.li.height/2;t===!0?e.scrollTo({top:n,behavior:"smooth"}):e.scrollTop=n}}}select(t){var i,s;if(t===-1){this.$isOpen=!1,(i=this.renderRoot.querySelector("button"))==null||i.focus();return}let e=null;t!==void 0&&(e=this.$filteredOptions[t]),!(e&&(e.type==="label"||e.disabled===!0))&&(this.multiple===!1?(t!==void 0&&(this.$focused=t,this.$selected=[e==null?void 0:e.value]),this.$isOpen=!1,(s=this.renderRoot.querySelector("button"))==null||s.focus()):t!==void 0&&(this.$selected.findIndex(o=>o===(e==null?void 0:e.value))===-1?this.$selected.push(e==null?void 0:e.value):this.$selected=this.$selected.filter(o=>o!==(e==null?void 0:e.value)),this.requestUpdate()))}onClickAway(t){this.$isOpen&&!this.renderRoot.contains(t.target)&&(this.$isOpen=!1)}},m([f({type:String})],c.Select.prototype,"name",2),m([f({type:Boolean})],c.Select.prototype,"multiple",2),m([f({type:Boolean})],c.Select.prototype,"disabled",2),m([f({type:String})],c.Select.prototype,"placeholder",2),m([f({type:Boolean})],c.Select.prototype,"searchable",2),m([f({type:Boolean})],c.Select.prototype,"error",2),m([f({type:String})],c.Select.prototype,"i18n",2),m([w()],c.Select.prototype,"$term",2),m([w()],c.Select.prototype,"$options",2),m([w()],c.Select.prototype,"$filteredOptions",2),m([w()],c.Select.prototype,"$focused",2),m([w()],c.Select.prototype,"$selected",2),m([w()],c.Select.prototype,"$isOpen",2),m([w()],c.Select.prototype,"$i18n",2),c.Select=m([St("uk-select")],c.Select);class oe{constructor(){this.subscribers=[],this.observer=new MutationObserver(()=>{const t=document.documentElement.classList.contains("dark");this.subscribers.forEach(e=>e(t))}),this.observer.observe(document.documentElement,{attributeFilter:["class"],attributeOldValue:!0})}subscribe(t){this.subscribers.push(t)}unsubscribe(t){const e=this.subscribers.indexOf(t);e!==-1&&this.subscribers.splice(e,1)}}const Ct=new oe;var ne=Object.defineProperty,le=Object.getOwnPropertyDescriptor,b=(r,t,e,i)=>{for(var s=i>1?void 0:i?le(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&ne(t,e,s),s};return c.Glow=class extends R{constructor(){super(...arguments),this.$mode="light",this.$defaults={},this.$shouldRender=!1,this["border-radius"]="0.6rem",this["border-width"]="0px",this["border-style"]="solid",this["border-color"]="#1e293b",this.width="auto",this.height="auto",this["background-color"]="#09090b",this["glow-color"]="#06b6d4",this["glow-width"]="0.125rem",this["glow-speed"]="10s",this.color="#fafafa"}connectedCallback(){super.connectedCallback(),this.initializeDefaults(),this.$mode=document.documentElement.classList.contains("dark")?"dark":"light",Ct.subscribe(t=>{this.$mode=t===!0?"dark":"light"}),this.removeAttribute("uk-cloak")}disconnectedCallback(){Ct.unsubscribe(()=>{})}initializeDefaults(){try{this.$defaults.colors=this.validateColors()}catch(t){return console.error(t)}try{this.$defaults.border=this.validateBorder()}catch(t){return console.error(t)}try{const t=this.validateSize();this.$defaults.width=t.width,this.$defaults.height=t.height}catch(t){return console.error(t)}try{const t=this.validateGlow();this.$defaults["glow-width"]=t.width,this.$defaults["glow-speed"]=t.speed}catch(t){return console.error(t)}this.$shouldRender=!0}validateColors(){const t={};return[{name:"border-color",value:this["border-color"]},{name:"background-color",value:this["background-color"]},{name:"glow-color",value:this["glow-color"]},{name:"color",value:this.color}].forEach(e=>{const i=e.name;if(e.value.includes(":")){const s=Ot(e.value);if(tt(s.light)===void 0||tt(s.dark)===void 0)throw new Error(`Invalid "${i}" value.`);t[i]={light:s.light,dark:s.dark}}else{if(tt(this[i])===void 0)throw new Error(`Invalid "${i}" value.`);t[i]={light:this[i],dark:this[i]}}}),t}validateBorder(){if(ee(this["border-style"])===void 0)throw new Error('Invalid "border-style" value');[{name:"border-radius",value:this["border-radius"]},{name:"border-width",value:this["border-width"]}].forEach(s=>{const o=s.name;if(et(this[o])===void 0)throw new Error(`Invalid "${o}" value`)});const t={},[e,i="px"]=this["border-radius"].split(/(px|cm|mm|in|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/);return t.style=this["border-style"],t.radius={parent:`${Number(e)*1.25}${i}`,child:this["border-radius"]},t.width=this["border-width"],t}validateSize(){return[{name:"width",value:this.width},{name:"height",value:this.height}].forEach(t=>{const e=t.name;if(!["auto","inherit","initial","unset"].includes(this[e])&&et(this[e])===void 0)throw new Error(`Invalid "${e}" value`)}),{width:this.width,height:this.height}}validateGlow(){if(et(this["glow-width"])===void 0)throw new Error('Invalid "glow-width" value');if(ie(this["glow-speed"])===void 0)throw new Error('Invalid "glow-speed" value');return{width:this["glow-width"],speed:this["glow-speed"]}}render(){const{width:t,["glow-width"]:e,border:i,colors:s,height:o}=this.$defaults;return this.$shouldRender===!0?y`<style>
            .p {
              position: relative;
              z-index: 10;
              display: flex;
              align-items: center;
              overflow: hidden;
              width: ${t};
              padding: ${e};
              border-radius: ${i.radius.parent};
              border-width: ${i.width};
              border-style: ${i.style};
              border-color: ${s["border-color"][this.$mode]};
            }

            .p::before {
              content: "";
              position: absolute;
              inset: 0px;
              height: 100%;
              width: 100%;
              animation-name: rotate;
              animation-duration: ${this.$defaults["glow-speed"]};
              animation-timing-function: linear;
              animation-iteration-count: infinite;
              border-radius: 9999px;
              background-image: conic-gradient(
                ${s["glow-color"][this.$mode]} 20deg,
                transparent 120deg
              );
            }

            @keyframes rotate {
              0% {
                transform: rotate(0deg) scale(10);
              }

              100% {
                transform: rotate(-360deg) scale(10);
              }
            }

            .c {
              position: relative;
              z-index: 20;
              width: 100%;
              overflow: hidden;
              height: ${o};
              background-color: ${s["background-color"][this.$mode]};
              color: ${s.color[this.$mode]};
              border-radius: ${i.radius.child};
            }
          </style>

          <div class="p">
            <div class="c">
              <slot></slot>
            </div>
          </div>`:""}},b([w()],c.Glow.prototype,"$mode",2),b([w()],c.Glow.prototype,"$defaults",2),b([w()],c.Glow.prototype,"$shouldRender",2),b([f({type:String})],c.Glow.prototype,"border-radius",2),b([f({type:String})],c.Glow.prototype,"border-width",2),b([f({type:String})],c.Glow.prototype,"border-style",2),b([f({type:String})],c.Glow.prototype,"border-color",2),b([f({type:String})],c.Glow.prototype,"width",2),b([f({type:String})],c.Glow.prototype,"height",2),b([f({type:String})],c.Glow.prototype,"background-color",2),b([f({type:String})],c.Glow.prototype,"glow-color",2),b([f({type:String})],c.Glow.prototype,"glow-width",2),b([f({type:String})],c.Glow.prototype,"glow-speed",2),b([f({type:String})],c.Glow.prototype,"color",2),c.Glow=b([St("uk-glow")],c.Glow),Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),c}({});
