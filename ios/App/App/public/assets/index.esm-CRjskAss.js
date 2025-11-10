import{c as St,b as Da,f as Na,i as Bs,p as ka,F as Jl,g as Zl,d as tc,u as ec,A as nc,L as rc,x as Kt,B as sc,D as ic,m as pr,G as oc,S as ac,_ as uc,C as lc,r as Co,a as cc}from"./index.esm2017-Bi2ccvWJ.js";var bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ne,xa;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function _(){}_.prototype=p.prototype,v.D=p.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(E,T,A){for(var g=Array(arguments.length-2),zt=2;zt<arguments.length;zt++)g[zt-2]=arguments[zt];return p.prototype[T].apply(E,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,_){_||(_=0);var E=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)E[T]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(T=0;16>T;++T)E[T]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=v.g[0],_=v.g[1],T=v.g[2];var A=v.g[3],g=p+(A^_&(T^A))+E[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+E[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+E[2]+606105819&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+E[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+E[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+E[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+E[6]+2821735955&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+E[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+E[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+E[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+E[10]+4294925233&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+E[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+E[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+E[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+E[14]+2792965006&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+E[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(T^A&(_^T))+E[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+E[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+E[11]+643717713&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+E[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+E[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+E[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+E[15]+3634488961&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+E[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+E[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+E[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+E[3]+4107603335&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+E[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+E[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+E[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+E[7]+1735328473&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+E[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(_^T^A)+E[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+E[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+E[11]+1839030562&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+E[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+E[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+E[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+E[7]+4139469664&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+E[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+E[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+E[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+E[3]+3572445317&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+E[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+E[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+E[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+E[15]+530742520&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+E[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(T^(_|~A))+E[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+E[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+E[14]+2878612391&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+E[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+E[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+E[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+E[10]+4293915773&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+E[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+E[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+E[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+E[6]+2734768916&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+E[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+E[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+E[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+E[2]+718787259&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+A&4294967295}n.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var _=p-this.blockSize,E=this.B,T=this.h,A=0;A<p;){if(T==0)for(;A<=_;)i(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<p;)if(E[T++]=v.charCodeAt(A++),T==this.blockSize){i(this,E),T=0;break}}else for(;A<p;)if(E[T++]=v[A++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=p},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var _=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=_&255,_/=256;for(this.u(v),v=Array(16),p=_=0;4>p;++p)for(var E=0;32>E;E+=8)v[_++]=this.g[p]>>>E&255;return v};function o(v,p){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=p(v)}function a(v,p){this.h=p;for(var _=[],E=!0,T=v.length-1;0<=T;T--){var A=v[T]|0;E&&A==p||(_[T]=A,E=!1)}this.g=_}var c={};function h(v){return-128<=v&&128>v?o(v,function(p){return new a([p|0],0>p?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return y;if(0>v)return b(d(-v));for(var p=[],_=1,E=0;v>=_;E++)p[E]=v/_|0,_*=4294967296;return new a(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return b(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),E=y,T=0;T<v.length;T+=8){var A=Math.min(8,v.length-T),g=parseInt(v.substring(T,T+A),p);8>A?(A=d(Math.pow(p,A)),E=E.j(A).add(d(g))):(E=E.j(_),E=E.add(d(g)))}return E}var y=h(0),w=h(1),S=h(16777216);r=a.prototype,r.m=function(){if(x(this))return-b(this).m();for(var v=0,p=1,_=0;_<this.g.length;_++){var E=this.i(_);v+=(0<=E?E:4294967296+E)*p,p*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(x(this))return"-"+b(this).toString(v);for(var p=d(Math.pow(v,6)),_=this,E="";;){var T=ot(_,p).g;_=B(_,T.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=T,D(_))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function x(v){return v.h==-1}r.l=function(v){return v=B(this,v),x(v)?-1:D(v)?0:1};function b(v){for(var p=v.g.length,_=[],E=0;E<p;E++)_[E]=~v.g[E];return new a(_,~v.h).add(w)}r.abs=function(){return x(this)?b(this):this},r.add=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],E=0,T=0;T<=p;T++){var A=E+(this.i(T)&65535)+(v.i(T)&65535),g=(A>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);E=g>>>16,A&=65535,g&=65535,_[T]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function B(v,p){return v.add(b(p))}r.j=function(v){if(D(this)||D(v))return y;if(x(this))return x(v)?b(this).j(b(v)):b(b(this).j(v));if(x(v))return b(this.j(b(v)));if(0>this.l(S)&&0>v.l(S))return d(this.m()*v.m());for(var p=this.g.length+v.g.length,_=[],E=0;E<2*p;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<v.g.length;T++){var A=this.i(E)>>>16,g=this.i(E)&65535,zt=v.i(T)>>>16,We=v.i(T)&65535;_[2*E+2*T]+=g*We,z(_,2*E+2*T),_[2*E+2*T+1]+=A*We,z(_,2*E+2*T+1),_[2*E+2*T+1]+=g*zt,z(_,2*E+2*T+1),_[2*E+2*T+2]+=A*zt,z(_,2*E+2*T+2)}for(E=0;E<p;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=p;E<2*p;E++)_[E]=0;return new a(_,0)};function z(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function K(v,p){this.g=v,this.h=p}function ot(v,p){if(D(p))throw Error("division by zero");if(D(v))return new K(y,y);if(x(v))return p=ot(b(v),p),new K(b(p.g),b(p.h));if(x(p))return p=ot(v,b(p)),new K(b(p.g),p.h);if(30<v.g.length){if(x(v)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var _=w,E=p;0>=E.l(v);)_=jt(_),E=jt(E);var T=ut(_,1),A=ut(E,1);for(E=ut(E,2),_=ut(_,2);!D(E);){var g=A.add(E);0>=g.l(v)&&(T=T.add(_),A=g),E=ut(E,1),_=ut(_,1)}return p=B(v,T.j(p)),new K(T,p)}for(T=y;0<=v.l(p);){for(_=Math.max(1,Math.floor(v.m()/p.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=d(_),g=A.j(p);x(g)||0<g.l(v);)_-=E,A=d(_),g=A.j(p);D(A)&&(A=w),T=T.add(A),v=B(v,g)}return new K(T,v)}r.A=function(v){return ot(this,v).h},r.and=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],E=0;E<p;E++)_[E]=this.i(E)&v.i(E);return new a(_,this.h&v.h)},r.or=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],E=0;E<p;E++)_[E]=this.i(E)|v.i(E);return new a(_,this.h|v.h)},r.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],E=0;E<p;E++)_[E]=this.i(E)^v.i(E);return new a(_,this.h^v.h)};function jt(v){for(var p=v.g.length+1,_=[],E=0;E<p;E++)_[E]=v.i(E)<<1|v.i(E-1)>>>31;return new a(_,v.h)}function ut(v,p){var _=p>>5;p%=32;for(var E=v.g.length-_,T=[],A=0;A<E;A++)T[A]=0<p?v.i(A+_)>>>p|v.i(A+_+1)<<32-p:v.i(A+_);return new a(T,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,xa=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,ne=a}).apply(typeof bo<"u"?bo:typeof self<"u"?self:typeof window<"u"?window:{});var sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oa,dn,Fa,lr,ws,La,Ma,Ua;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,l){return s==Array.prototype||s==Object.prototype||(s[u]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof sr=="object"&&sr];for(var u=0;u<s.length;++u){var l=s[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,u){if(u)t:{var l=n;s=s.split(".");for(var f=0;f<s.length-1;f++){var I=s[f];if(!(I in l))break t;l=l[I]}s=s[s.length-1],f=l[s],u=u(f),u!=f&&u!=null&&t(l,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var l=0,f=!1,I={next:function(){if(!f&&l<s.length){var V=l++;return{value:u(V,s[V]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function d(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function m(s,u,l){return s.call.apply(s.bind,arguments)}function y(s,u,l){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),s.apply(u,I)}}return function(){return s.apply(u,arguments)}}function w(s,u,l){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,w.apply(null,arguments)}function S(s,u){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function D(s,u){function l(){}l.prototype=u.prototype,s.aa=u.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(f,I,V){for(var k=Array(arguments.length-2),W=2;W<arguments.length;W++)k[W-2]=arguments[W];return u.prototype[I].apply(f,k)}}function x(s){const u=s.length;if(0<u){const l=Array(u);for(let f=0;f<u;f++)l[f]=s[f];return l}return[]}function b(s,u){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const I=s.length||0,V=f.length||0;s.length=I+V;for(let k=0;k<V;k++)s[I+k]=f[k]}else s.push(f)}}class B{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function z(s){return/^[\s\xa0]*$/.test(s)}function K(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function ot(s){return ot[" "](s),s}ot[" "]=function(){};var jt=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function ut(s,u,l){for(const f in s)u.call(l,s[f],f,s)}function v(s,u){for(const l in s)u.call(void 0,s[l],l,s)}function p(s){const u={};for(const l in s)u[l]=s[l];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(s,u){let l,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(l in f)s[l]=f[l];for(let V=0;V<_.length;V++)l=_[V],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function T(s){var u=1;s=s.split(":");const l=[];for(;0<u&&s.length;)l.push(s.shift()),u--;return s.length&&l.push(s.join(":")),l}function A(s){c.setTimeout(()=>{throw s},0)}function g(){var s=Hr;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class zt{constructor(){this.h=this.g=null}add(u,l){const f=We.get();f.set(u,l),this.h?this.h.next=f:this.g=f,this.h=f}}var We=new B(()=>new _l,s=>s.reset());class _l{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let He,Xe=!1,Hr=new zt,Si=()=>{const s=c.Promise.resolve(void 0);He=()=>{s.then(yl)}};var yl=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){A(l)}var u=We;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}Xe=!1};function Xt(){this.s=this.s,this.C=this.C}Xt.prototype.s=!1,Xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ft(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var El=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return s})();function Ye(s,u){if(ft.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(jt){t:{try{ot(u.nodeName);var I=!0;break t}catch{}I=!1}I||(u=null)}}else l=="mouseover"?u=s.fromElement:l=="mouseout"&&(u=s.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Tl[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ye.aa.h.call(this)}}D(Ye,ft);var Tl={2:"touch",3:"pen",4:"mouse"};Ye.prototype.h=function(){Ye.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Un="closure_listenable_"+(1e6*Math.random()|0),vl=0;function Il(s,u,l,f,I){this.listener=s,this.proxy=null,this.src=u,this.type=l,this.capture=!!f,this.ha=I,this.key=++vl,this.da=this.fa=!1}function qn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Bn(s){this.src=s,this.g={},this.h=0}Bn.prototype.add=function(s,u,l,f,I){var V=s.toString();s=this.g[V],s||(s=this.g[V]=[],this.h++);var k=Yr(s,u,f,I);return-1<k?(u=s[k],l||(u.fa=!1)):(u=new Il(u,this.src,V,!!f,I),u.fa=l,s.push(u)),u};function Xr(s,u){var l=u.type;if(l in s.g){var f=s.g[l],I=Array.prototype.indexOf.call(f,u,void 0),V;(V=0<=I)&&Array.prototype.splice.call(f,I,1),V&&(qn(u),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Yr(s,u,l,f){for(var I=0;I<s.length;++I){var V=s[I];if(!V.da&&V.listener==u&&V.capture==!!l&&V.ha==f)return I}return-1}var Jr="closure_lm_"+(1e6*Math.random()|0),Zr={};function Ci(s,u,l,f,I){if(Array.isArray(u)){for(var V=0;V<u.length;V++)Ci(s,u[V],l,f,I);return null}return l=Ni(l),s&&s[Un]?s.K(u,l,d(f)?!!f.capture:!1,I):Al(s,u,l,!1,f,I)}function Al(s,u,l,f,I,V){if(!u)throw Error("Invalid event type");var k=d(I)?!!I.capture:!!I,W=es(s);if(W||(s[Jr]=W=new Bn(s)),l=W.add(u,l,f,k,V),l.proxy)return l;if(f=wl(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)El||(I=k),I===void 0&&(I=!1),s.addEventListener(u.toString(),f,I);else if(s.attachEvent)s.attachEvent(Di(u.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function wl(){function s(l){return u.call(s.src,s.listener,l)}const u=Rl;return s}function bi(s,u,l,f,I){if(Array.isArray(u))for(var V=0;V<u.length;V++)bi(s,u[V],l,f,I);else f=d(f)?!!f.capture:!!f,l=Ni(l),s&&s[Un]?(s=s.i,u=String(u).toString(),u in s.g&&(V=s.g[u],l=Yr(V,l,f,I),-1<l&&(qn(V[l]),Array.prototype.splice.call(V,l,1),V.length==0&&(delete s.g[u],s.h--)))):s&&(s=es(s))&&(u=s.g[u.toString()],s=-1,u&&(s=Yr(u,l,f,I)),(l=-1<s?u[s]:null)&&ts(l))}function ts(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[Un])Xr(u.i,s);else{var l=s.type,f=s.proxy;u.removeEventListener?u.removeEventListener(l,f,s.capture):u.detachEvent?u.detachEvent(Di(l),f):u.addListener&&u.removeListener&&u.removeListener(f),(l=es(u))?(Xr(l,s),l.h==0&&(l.src=null,u[Jr]=null)):qn(s)}}}function Di(s){return s in Zr?Zr[s]:Zr[s]="on"+s}function Rl(s,u){if(s.da)s=!0;else{u=new Ye(u,this);var l=s.listener,f=s.ha||s.src;s.fa&&ts(s),s=l.call(f,u)}return s}function es(s){return s=s[Jr],s instanceof Bn?s:null}var ns="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ni(s){return typeof s=="function"?s:(s[ns]||(s[ns]=function(u){return s.handleEvent(u)}),s[ns])}function mt(){Xt.call(this),this.i=new Bn(this),this.M=this,this.F=null}D(mt,Xt),mt.prototype[Un]=!0,mt.prototype.removeEventListener=function(s,u,l,f){bi(this,s,u,l,f)};function Tt(s,u){var l,f=s.F;if(f)for(l=[];f;f=f.F)l.push(f);if(s=s.M,f=u.type||u,typeof u=="string")u=new ft(u,s);else if(u instanceof ft)u.target=u.target||s;else{var I=u;u=new ft(f,s),E(u,I)}if(I=!0,l)for(var V=l.length-1;0<=V;V--){var k=u.g=l[V];I=jn(k,f,!0,u)&&I}if(k=u.g=s,I=jn(k,f,!0,u)&&I,I=jn(k,f,!1,u)&&I,l)for(V=0;V<l.length;V++)k=u.g=l[V],I=jn(k,f,!1,u)&&I}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var l=s.g[u],f=0;f<l.length;f++)qn(l[f]);delete s.g[u],s.h--}}this.F=null},mt.prototype.K=function(s,u,l,f){return this.i.add(String(s),u,!1,l,f)},mt.prototype.L=function(s,u,l,f){return this.i.add(String(s),u,!0,l,f)};function jn(s,u,l,f){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,V=0;V<u.length;++V){var k=u[V];if(k&&!k.da&&k.capture==l){var W=k.listener,lt=k.ha||k.src;k.fa&&Xr(s.i,k),I=W.call(lt,f)!==!1&&I}}return I&&!f.defaultPrevented}function ki(s,u,l){if(typeof s=="function")l&&(s=w(s,l));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(s,u||0)}function xi(s){s.g=ki(()=>{s.g=null,s.i&&(s.i=!1,xi(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class Vl extends Xt{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:xi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Je(s){Xt.call(this),this.h=s,this.g={}}D(Je,Xt);var Oi=[];function Fi(s){ut(s.g,function(u,l){this.g.hasOwnProperty(l)&&ts(u)},s),s.g={}}Je.prototype.N=function(){Je.aa.N.call(this),Fi(this)},Je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rs=c.JSON.stringify,Pl=c.JSON.parse,Sl=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function ss(){}ss.prototype.h=null;function Li(s){return s.h||(s.h=s.i())}function Mi(){}var Ze={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function is(){ft.call(this,"d")}D(is,ft);function os(){ft.call(this,"c")}D(os,ft);var fe={},Ui=null;function zn(){return Ui=Ui||new mt}fe.La="serverreachability";function qi(s){ft.call(this,fe.La,s)}D(qi,ft);function tn(s){const u=zn();Tt(u,new qi(u))}fe.STAT_EVENT="statevent";function Bi(s,u){ft.call(this,fe.STAT_EVENT,s),this.stat=u}D(Bi,ft);function vt(s){const u=zn();Tt(u,new Bi(u,s))}fe.Ma="timingevent";function ji(s,u){ft.call(this,fe.Ma,s),this.size=u}D(ji,ft);function en(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},u)}function nn(){this.g=!0}nn.prototype.xa=function(){this.g=!1};function Cl(s,u,l,f,I,V){s.info(function(){if(s.g)if(V)for(var k="",W=V.split("&"),lt=0;lt<W.length;lt++){var $=W[lt].split("=");if(1<$.length){var pt=$[0];$=$[1];var gt=pt.split("_");k=2<=gt.length&&gt[1]=="type"?k+(pt+"="+$+"&"):k+(pt+"=redacted&")}}else k=null;else k=V;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+u+`
`+l+`
`+k})}function bl(s,u,l,f,I,V,k){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+u+`
`+l+`
`+V+" "+k})}function Ve(s,u,l,f){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+Nl(s,l)+(f?" "+f:"")})}function Dl(s,u){s.info(function(){return"TIMEOUT: "+u})}nn.prototype.info=function(){};function Nl(s,u){if(!s.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var f=l[s];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var V=I[0];if(V!="noop"&&V!="stop"&&V!="close")for(var k=1;k<I.length;k++)I[k]=""}}}}return rs(l)}catch{return u}}var $n={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},as;function Gn(){}D(Gn,ss),Gn.prototype.g=function(){return new XMLHttpRequest},Gn.prototype.i=function(){return{}},as=new Gn;function Yt(s,u,l,f){this.j=s,this.i=u,this.l=l,this.R=f||1,this.U=new Je(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $i}function $i(){this.i=null,this.g="",this.h=!1}var Gi={},us={};function ls(s,u,l){s.L=1,s.v=Hn($t(u)),s.m=l,s.P=!0,Ki(s,null)}function Ki(s,u){s.F=Date.now(),Kn(s),s.A=$t(s.v);var l=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),oo(l.i,"t",f),s.C=0,l=s.j.J,s.h=new $i,s.g=Ro(s.j,l?u:null,!s.m),0<s.O&&(s.M=new Vl(w(s.Y,s,s.g),s.O)),u=s.U,l=s.g,f=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(Oi[0]=I.toString()),I=Oi);for(var V=0;V<I.length;V++){var k=Ci(l,I[V],f||u.handleEvent,!1,u.h||u);if(!k)break;u.g[k.key]=k}u=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),tn(),Cl(s.i,s.u,s.A,s.l,s.R,s.m)}Yt.prototype.ca=function(s){s=s.target;const u=this.M;u&&Gt(s)==3?u.j():this.Y(s)},Yt.prototype.Y=function(s){try{if(s==this.g)t:{const gt=Gt(this.g);var u=this.g.Ba();const Ce=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||mo(this.g)))){this.J||gt!=4||u==7||(u==8||0>=Ce?tn(3):tn(2)),cs(this);var l=this.g.Z();this.X=l;e:if(Qi(this)){var f=mo(this.g);s="";var I=f.length,V=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){me(this),rn(this);var k="";break e}this.h.i=new c.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,s+=this.h.i.decode(f[u],{stream:!(V&&u==I-1)});f.length=0,this.h.g+=s,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=l==200,bl(this.i,this.u,this.A,this.l,this.R,gt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var W,lt=this.g;if((W=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(W)){var $=W;break e}}$=null}if(l=$)Ve(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hs(this,l);else{this.o=!1,this.s=3,vt(12),me(this),rn(this);break t}}if(this.P){l=!0;let kt;for(;!this.J&&this.C<k.length;)if(kt=kl(this,k),kt==us){gt==4&&(this.s=4,vt(14),l=!1),Ve(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==Gi){this.s=4,vt(15),Ve(this.i,this.l,k,"[Invalid Chunk]"),l=!1;break}else Ve(this.i,this.l,kt,null),hs(this,kt);if(Qi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||k.length!=0||this.h.h||(this.s=1,vt(16),l=!1),this.o=this.o&&l,!l)Ve(this.i,this.l,k,"[Invalid Chunked Response]"),me(this),rn(this);else if(0<k.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),_s(pt),pt.M=!0,vt(11))}}else Ve(this.i,this.l,k,null),hs(this,k);gt==4&&me(this),this.o&&!this.J&&(gt==4?vo(this.j,this):(this.o=!1,Kn(this)))}else Xl(this.g),l==400&&0<k.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),me(this),rn(this)}}}catch{}finally{}};function Qi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function kl(s,u){var l=s.C,f=u.indexOf(`
`,l);return f==-1?us:(l=Number(u.substring(l,f)),isNaN(l)?Gi:(f+=1,f+l>u.length?us:(u=u.slice(f,f+l),s.C=f+l,u)))}Yt.prototype.cancel=function(){this.J=!0,me(this)};function Kn(s){s.S=Date.now()+s.I,Wi(s,s.I)}function Wi(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=en(w(s.ba,s),u)}function cs(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Yt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Dl(this.i,this.A),this.L!=2&&(tn(),vt(17)),me(this),this.s=2,rn(this)):Wi(this,this.S-s)};function rn(s){s.j.G==0||s.J||vo(s.j,s)}function me(s){cs(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,Fi(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function hs(s,u){try{var l=s.j;if(l.G!=0&&(l.g==s||ds(l.h,s))){if(!s.K&&ds(l.h,s)&&l.G==3){try{var f=l.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)er(l),Zn(l);else break t;gs(l),vt(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=en(w(l.Za,l),6e3));if(1>=Yi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ge(l,11)}else if((s.K||l.g==s)&&er(l),!z(u))for(I=l.Da.g.parse(u),u=0;u<I.length;u++){let $=I[u];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];const pt=$[3];pt!=null&&(l.la=pt,l.j.info("VER="+l.la));const gt=$[4];gt!=null&&(l.Aa=gt,l.j.info("SVER="+l.Aa));const Ce=$[5];Ce!=null&&typeof Ce=="number"&&0<Ce&&(f=1.5*Ce,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const kt=s.g;if(kt){const rr=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rr){var V=f.h;V.g||rr.indexOf("spdy")==-1&&rr.indexOf("quic")==-1&&rr.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(fs(V,V.h),V.h=null))}if(f.D){const ys=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;ys&&(f.ya=ys,H(f.I,f.D,ys))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var k=s;if(f.qa=wo(f,f.J?f.ia:null,f.W),k.K){Ji(f.h,k);var W=k,lt=f.L;lt&&(W.I=lt),W.B&&(cs(W),Kn(W)),f.g=k}else Eo(f);0<l.i.length&&tr(l)}else $[0]!="stop"&&$[0]!="close"||ge(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?ge(l,7):ps(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}tn(4)}catch{}}var xl=class{constructor(s,u){this.g=s,this.map=u}};function Hi(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Yi(s){return s.h?1:s.g?s.g.size:0}function ds(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function fs(s,u){s.g?s.g.add(u):s.h=u}function Ji(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}Hi.prototype.cancel=function(){if(this.i=Zi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Zi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const l of s.g.values())u=u.concat(l.D);return u}return x(s.i)}function Ol(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var u=[],l=s.length,f=0;f<l;f++)u.push(s[f]);return u}u=[],l=0;for(f in s)u[l++]=s[f];return u}function Fl(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var u=[];s=s.length;for(var l=0;l<s;l++)u.push(l);return u}u=[],l=0;for(const f in s)u[l++]=f;return u}}}function to(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var l=Fl(s),f=Ol(s),I=f.length,V=0;V<I;V++)u.call(void 0,f[V],l&&l[V],s)}var eo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ll(s,u){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var f=s[l].indexOf("="),I=null;if(0<=f){var V=s[l].substring(0,f);I=s[l].substring(f+1)}else V=s[l];u(V,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function pe(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof pe){this.h=s.h,Qn(this,s.j),this.o=s.o,this.g=s.g,Wn(this,s.s),this.l=s.l;var u=s.i,l=new an;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),no(this,l),this.m=s.m}else s&&(u=String(s).match(eo))?(this.h=!1,Qn(this,u[1]||"",!0),this.o=sn(u[2]||""),this.g=sn(u[3]||"",!0),Wn(this,u[4]),this.l=sn(u[5]||"",!0),no(this,u[6]||"",!0),this.m=sn(u[7]||"")):(this.h=!1,this.i=new an(null,this.h))}pe.prototype.toString=function(){var s=[],u=this.j;u&&s.push(on(u,ro,!0),":");var l=this.g;return(l||u=="file")&&(s.push("//"),(u=this.o)&&s.push(on(u,ro,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(on(l,l.charAt(0)=="/"?ql:Ul,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",on(l,jl)),s.join("")};function $t(s){return new pe(s)}function Qn(s,u,l){s.j=l?sn(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function Wn(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function no(s,u,l){u instanceof an?(s.i=u,zl(s.i,s.h)):(l||(u=on(u,Bl)),s.i=new an(u,s.h))}function H(s,u,l){s.i.set(u,l)}function Hn(s){return H(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function sn(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function on(s,u,l){return typeof s=="string"?(s=encodeURI(s).replace(u,Ml),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Ml(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ro=/[#\/\?@]/g,Ul=/[#\?:]/g,ql=/[#\?]/g,Bl=/[#\?@]/g,jl=/#/g;function an(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function Jt(s){s.g||(s.g=new Map,s.h=0,s.i&&Ll(s.i,function(u,l){s.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}r=an.prototype,r.add=function(s,u){Jt(this),this.i=null,s=Pe(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(u),this.h+=1,this};function so(s,u){Jt(s),u=Pe(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function io(s,u){return Jt(s),u=Pe(s,u),s.g.has(u)}r.forEach=function(s,u){Jt(this),this.g.forEach(function(l,f){l.forEach(function(I){s.call(u,I,f,this)},this)},this)},r.na=function(){Jt(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let f=0;f<u.length;f++){const I=s[f];for(let V=0;V<I.length;V++)l.push(u[f])}return l},r.V=function(s){Jt(this);let u=[];if(typeof s=="string")io(this,s)&&(u=u.concat(this.g.get(Pe(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)u=u.concat(s[l])}return u},r.set=function(s,u){return Jt(this),this.i=null,s=Pe(this,s),io(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},r.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function oo(s,u,l){so(s,u),0<l.length&&(s.i=null,s.g.set(Pe(s,u),x(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var f=u[l];const V=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var I=V;k[f]!==""&&(I+="="+encodeURIComponent(String(k[f]))),s.push(I)}}return this.i=s.join("&")};function Pe(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function zl(s,u){u&&!s.j&&(Jt(s),s.i=null,s.g.forEach(function(l,f){var I=f.toLowerCase();f!=I&&(so(this,f),oo(this,I,l))},s)),s.j=u}function $l(s,u){const l=new nn;if(c.Image){const f=new Image;f.onload=S(Zt,l,"TestLoadImage: loaded",!0,u,f),f.onerror=S(Zt,l,"TestLoadImage: error",!1,u,f),f.onabort=S(Zt,l,"TestLoadImage: abort",!1,u,f),f.ontimeout=S(Zt,l,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else u(!1)}function Gl(s,u){const l=new nn,f=new AbortController,I=setTimeout(()=>{f.abort(),Zt(l,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:f.signal}).then(V=>{clearTimeout(I),V.ok?Zt(l,"TestPingServer: ok",!0,u):Zt(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Zt(l,"TestPingServer: error",!1,u)})}function Zt(s,u,l,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(l)}catch{}}function Kl(){this.g=new Sl}function Ql(s,u,l){const f=l||"";try{to(s,function(I,V){let k=I;d(I)&&(k=rs(I)),u.push(f+V+"="+encodeURIComponent(k))})}catch(I){throw u.push(f+"type="+encodeURIComponent("_badmap")),I}}function Xn(s){this.l=s.Ub||null,this.j=s.eb||!1}D(Xn,ss),Xn.prototype.g=function(){return new Yn(this.l,this.j)},Xn.prototype.i=(function(s){return function(){return s}})({});function Yn(s,u){mt.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Yn,mt),r=Yn.prototype,r.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,ln(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,un(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,ln(this)),this.g&&(this.readyState=3,ln(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ao(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function ao(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?un(this):ln(this),this.readyState==3&&ao(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,un(this))},r.Qa=function(s){this.g&&(this.response=s,un(this))},r.ga=function(){this.g&&un(this)};function un(s){s.readyState=4,s.l=null,s.j=null,s.v=null,ln(s)}r.setRequestHeader=function(s,u){this.u.append(s,u)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=u.next();return s.join(`\r
`)};function ln(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Yn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function uo(s){let u="";return ut(s,function(l,f){u+=f,u+=":",u+=l,u+=`\r
`}),u}function ms(s,u,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=uo(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):H(s,u,l))}function J(s){mt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(J,mt);var Wl=/^https?$/i,Hl=["POST","PUT"];r=J.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,u,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():as.g(),this.v=this.o?Li(this.o):Li(as),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(V){lo(this,V);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)l.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const V of f.keys())l.set(V,f.get(V));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(V=>V.toLowerCase()=="content-type"),I=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Hl,u,void 0))||f||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,k]of l)this.g.setRequestHeader(V,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fo(this),this.u=!0,this.g.send(s),this.u=!1}catch(V){lo(this,V)}};function lo(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,co(s),Jn(s)}function co(s){s.A||(s.A=!0,Tt(s,"complete"),Tt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Tt(this,"complete"),Tt(this,"abort"),Jn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jn(this,!0)),J.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ho(this):this.bb())},r.bb=function(){ho(this)};function ho(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Gt(s)!=4||s.Z()!=2)){if(s.u&&Gt(s)==4)ki(s.Ea,0,s);else if(Tt(s,"readystatechange"),Gt(s)==4){s.h=!1;try{const k=s.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var f;if(f=k===0){var I=String(s.D).match(eo)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),f=!Wl.test(I?I.toLowerCase():"")}l=f}if(l)Tt(s,"complete"),Tt(s,"success");else{s.m=6;try{var V=2<Gt(s)?s.g.statusText:""}catch{V=""}s.l=V+" ["+s.Z()+"]",co(s)}}finally{Jn(s)}}}}function Jn(s,u){if(s.g){fo(s);const l=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||Tt(s,"ready");try{l.onreadystatechange=f}catch{}}}function fo(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Gt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),Pl(u)}};function mo(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Xl(s){const u={};s=(s.g&&2<=Gt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(z(s[f]))continue;var l=T(s[f]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const V=u[I]||[];u[I]=V,V.push(l)}v(u,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cn(s,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||u}function po(s){this.Aa=0,this.i=[],this.j=new nn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cn("baseRetryDelayMs",5e3,s),this.cb=cn("retryDelaySeedMs",1e4,s),this.Wa=cn("forwardChannelMaxRetries",2,s),this.wa=cn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Hi(s&&s.concurrentRequestLimit),this.Da=new Kl,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=po.prototype,r.la=8,r.G=1,r.connect=function(s,u,l,f){vt(0),this.W=s,this.H=u||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=wo(this,null,this.W),tr(this)};function ps(s){if(go(s),s.G==3){var u=s.U++,l=$t(s.I);if(H(l,"SID",s.K),H(l,"RID",u),H(l,"TYPE","terminate"),hn(s,l),u=new Yt(s,s.j,u),u.L=2,u.v=Hn($t(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=Ro(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Kn(u)}Ao(s)}function Zn(s){s.g&&(_s(s),s.g.cancel(),s.g=null)}function go(s){Zn(s),s.u&&(c.clearTimeout(s.u),s.u=null),er(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function tr(s){if(!Xi(s.h)&&!s.s){s.s=!0;var u=s.Ga;He||Si(),Xe||(He(),Xe=!0),Hr.add(u,s),s.B=0}}function Yl(s,u){return Yi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=en(w(s.Ga,s,u),Io(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Yt(this,this.j,s);let V=this.o;if(this.S&&(V?(V=p(V),E(V,this.S)):V=this.S),this.m!==null||this.O||(I.H=V,V=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=yo(this,I,u),l=$t(this.I),H(l,"RID",s),H(l,"CVER",22),this.D&&H(l,"X-HTTP-Session-Id",this.D),hn(this,l),V&&(this.O?u="headers="+encodeURIComponent(String(uo(V)))+"&"+u:this.m&&ms(l,this.m,V)),fs(this.h,I),this.Ua&&H(l,"TYPE","init"),this.P?(H(l,"$req",u),H(l,"SID","null"),I.T=!0,ls(I,l,null)):ls(I,l,u),this.G=2}}else this.G==3&&(s?_o(this,s):this.i.length==0||Xi(this.h)||_o(this))};function _o(s,u){var l;u?l=u.l:l=s.U++;const f=$t(s.I);H(f,"SID",s.K),H(f,"RID",l),H(f,"AID",s.T),hn(s,f),s.m&&s.o&&ms(f,s.m,s.o),l=new Yt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),u&&(s.i=u.D.concat(s.i)),u=yo(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),fs(s.h,l),ls(l,f,u)}function hn(s,u){s.H&&ut(s.H,function(l,f){H(u,f,l)}),s.l&&to({},function(l,f){H(u,f,l)})}function yo(s,u,l){l=Math.min(s.i.length,l);var f=s.l?w(s.l.Na,s.l,s):null;t:{var I=s.i;let V=-1;for(;;){const k=["count="+l];V==-1?0<l?(V=I[0].g,k.push("ofs="+V)):V=0:k.push("ofs="+V);let W=!0;for(let lt=0;lt<l;lt++){let $=I[lt].g;const pt=I[lt].map;if($-=V,0>$)V=Math.max(0,I[lt].g-100),W=!1;else try{Ql(pt,k,"req"+$+"_")}catch{f&&f(pt)}}if(W){f=k.join("&");break t}}}return s=s.i.splice(0,l),u.D=s,f}function Eo(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;He||Si(),Xe||(He(),Xe=!0),Hr.add(u,s),s.v=0}}function gs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=en(w(s.Fa,s),Io(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,To(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=en(w(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),Zn(this),To(this))};function _s(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function To(s){s.g=new Yt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=$t(s.qa);H(u,"RID","rpc"),H(u,"SID",s.K),H(u,"AID",s.T),H(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&H(u,"TO",s.ja),H(u,"TYPE","xmlhttp"),hn(s,u),s.m&&s.o&&ms(u,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Hn($t(u)),l.m=null,l.P=!0,Ki(l,s)}r.Za=function(){this.C!=null&&(this.C=null,Zn(this),gs(this),vt(19))};function er(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function vo(s,u){var l=null;if(s.g==u){er(s),_s(s),s.g=null;var f=2}else if(ds(s.h,u))l=u.D,Ji(s.h,u),f=1;else return;if(s.G!=0){if(u.o)if(f==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var I=s.B;f=zn(),Tt(f,new ji(f,l)),tr(s)}else Eo(s);else if(I=u.s,I==3||I==0&&0<u.X||!(f==1&&Yl(s,u)||f==2&&gs(s)))switch(l&&0<l.length&&(u=s.h,u.i=u.i.concat(l)),I){case 1:ge(s,5);break;case 4:ge(s,10);break;case 3:ge(s,6);break;default:ge(s,2)}}}function Io(s,u){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*u}function ge(s,u){if(s.j.info("Error code "+u),u==2){var l=w(s.fb,s),f=s.Xa;const I=!f;f=new pe(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Qn(f,"https"),Hn(f),I?$l(f.toString(),l):Gl(f.toString(),l)}else vt(2);s.G=0,s.l&&s.l.sa(u),Ao(s),go(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Ao(s){if(s.G=0,s.ka=[],s.l){const u=Zi(s.h);(u.length!=0||s.i.length!=0)&&(b(s.ka,u),b(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function wo(s,u,l){var f=l instanceof pe?$t(l):new pe(l);if(f.g!="")u&&(f.g=u+"."+f.g),Wn(f,f.s);else{var I=c.location;f=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var V=new pe(null);f&&Qn(V,f),u&&(V.g=u),I&&Wn(V,I),l&&(V.l=l),f=V}return l=s.D,u=s.ya,l&&u&&H(f,l,u),H(f,"VER",s.la),hn(s,f),f}function Ro(s,u,l){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new J(new Xn({eb:l})):new J(s.pa),u.Ha(s.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vo(){}r=Vo.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function nr(){}nr.prototype.g=function(s,u){return new Rt(s,u)};function Rt(s,u){mt.call(this),this.g=new po(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!z(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!z(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new Se(this)}D(Rt,mt),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){ps(this.g)},Rt.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=rs(s),s=l);u.i.push(new xl(u.Ya++,s)),u.G==3&&tr(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,ps(this.g),delete this.g,Rt.aa.N.call(this)};function Po(s){is.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const l in u){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}D(Po,is);function So(){os.call(this),this.status=1}D(So,os);function Se(s){this.g=s}D(Se,Vo),Se.prototype.ua=function(){Tt(this.g,"a")},Se.prototype.ta=function(s){Tt(this.g,new Po(s))},Se.prototype.sa=function(s){Tt(this.g,new So)},Se.prototype.ra=function(){Tt(this.g,"b")},nr.prototype.createWebChannel=nr.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,Ua=function(){return new nr},Ma=function(){return zn()},La=fe,ws={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$n.NO_ERROR=0,$n.TIMEOUT=8,$n.HTTP_ERROR=6,lr=$n,zi.COMPLETE="complete",Fa=zi,Mi.EventType=Ze,Ze.OPEN="a",Ze.CLOSE="b",Ze.ERROR="c",Ze.MESSAGE="d",mt.prototype.listen=mt.prototype.K,dn=Mi,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,Oa=J}).apply(typeof sr<"u"?sr:typeof self<"u"?self:typeof window<"u"?window:{});const Do="@firebase/firestore",No="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Be="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=new rc("@firebase/firestore");function be(){return Ie.logLevel}function N(r,...t){if(Ie.logLevel<=Kt.DEBUG){const e=t.map(js);Ie.debug(`Firestore (${Be}): ${r}`,...e)}}function qt(r,...t){if(Ie.logLevel<=Kt.ERROR){const e=t.map(js);Ie.error(`Firestore (${Be}): ${r}`,...e)}}function Qt(r,...t){if(Ie.logLevel<=Kt.WARN){const e=t.map(js);Ie.warn(`Firestore (${Be}): ${r}`,...e)}}function js(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,qa(r,n,e)}function qa(r,t,e){let n=`FIRESTORE (${Be}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw qt(n),new Error(n)}function G(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||qa(t,i,n)}function L(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Jl{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class hc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(yt.UNAUTHENTICATED)))}shutdown(){}}class dc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class fc{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(this.o===void 0,42304);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Dt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Dt,t.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await i(this.currentUser)}))},c=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>c(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Dt)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(G(typeof n.accessToken=="string",31837,{l:n}),new Ba(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string",2055,{h:t}),new yt(t)}}class mc{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pc{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new mc(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ko{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gc{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,cc(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){G(this.o===void 0,3512);const n=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>n(o)))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ko(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(G(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ko(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=_c(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function U(r,t){return r<t?-1:r>t?1:0}function Rs(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),i=t.codePointAt(e);if(n!==i){if(n<128&&i<128)return U(n,i);{const o=ja(),a=yc(o.encode(xo(r,e)),o.encode(xo(t,e)));return a!==0?a:U(n,i)}}e+=n>65535?2:1}return U(r.length,t.length)}function xo(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function yc(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return U(r[e],t[e]);return U(r.length,t.length)}function Oe(r,t,e){return r.length===t.length&&r.every(((n,i)=>e(n,t[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="__name__";class Ot{constructor(t,e,n){e===void 0?e=0:e>t.length&&F(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&F(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Ot.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ot?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=Ot.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const n=Ot.isNumericId(t),i=Ot.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Ot.extractNumericId(t).compare(Ot.extractNumericId(e)):Rs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ne.fromString(t.substring(4,t.length-2))}}class Q extends Ot{construct(t,e,n){return new Q(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new C(R.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((i=>i.length>0)))}return new Q(e)}static emptyPath(){return new Q([])}}const Ec=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Ot{construct(t,e,n){return new ht(t,e,n)}static isValidIdentifier(t){return Ec.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Oo}static keyField(){return new ht([Oo])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new C(R.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new C(R.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new C(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(n+=c,i++):(o(),i++)}if(o(),a)throw new C(R.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(e)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Q.fromString(t))}static fromName(t){return new O(Q.fromString(t).popFirst(5))}static empty(){return new O(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Q(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(r,t,e){if(!e)throw new C(R.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Tc(r,t,e,n){if(t===!0&&n===!0)throw new C(R.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Fo(r){if(!O.isDocumentKey(r))throw new C(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Lo(r){if(O.isDocumentKey(r))throw new C(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function za(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Sr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":F(12329,{type:typeof r})}function st(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new C(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Sr(r);throw new C(R.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}function $a(r,t){if(t<=0)throw new C(R.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(r,t){const e={typeString:r};return t&&(e.value=t),e}function Sn(r,t){if(!za(r))throw new C(R.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const i=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(i&&typeof a!==i){e=`JSON field '${n}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new C(R.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=-62135596800,Uo=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Uo);return new X(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new C(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new C(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Mo)throw new C(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new C(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Uo}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Sn(t,X._jsonSchema))return new X(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Mo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:rt("string",X._jsonSchemaVersion),seconds:rt("number"),nanoseconds:rt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static fromTimestamp(t){return new M(t)}static min(){return new M(new X(0,0))}static max(){return new M(new X(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=-1;function vc(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=M.fromTimestamp(n===1e9?new X(e+1,0):new X(e,n));return new se(i,O.empty(),t)}function Ic(r){return new se(r.readTime,r.key,Tn)}class se{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new se(M.min(),O.empty(),Tn)}static max(){return new se(M.max(),O.empty(),Tn)}}function Ac(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:U(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(r){if(r.code!==R.FAILED_PRECONDITION||r.message!==wc)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P(((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):P.reject(e)}static resolve(t){return new P(((e,n)=>{e(t)}))}static reject(t){return new P(((e,n)=>{n(t)}))}static waitFor(t){return new P(((e,n)=>{let i=0,o=0,a=!1;t.forEach((c=>{++i,c.next((()=>{++o,a&&o===i&&e()}),(h=>n(h)))})),a=!0,o===i&&e()}))}static or(t){let e=P.resolve(!1);for(const n of t)e=e.next((i=>i?P.resolve(i):n()));return e}static forEach(t,e){const n=[];return t.forEach(((i,o)=>{n.push(e.call(this,i,o))})),this.waitFor(n)}static mapArray(t,e){return new P(((n,i)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((m=>{a[d]=m,++c,c===o&&n(a)}),(m=>i(m)))}}))}static doWhile(t,e){return new P(((n,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):n()};o()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="SimpleDb";class Gs{static open(t,e,n,i){try{return new Gs(e,t.transaction(i,n))}catch(o){throw new gn(e,o)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new Dt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new gn(t,e.error)):this.S.resolve()},this.transaction.onerror=n=>{const i=Ks(n.target.error);this.S.reject(new gn(t,i))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(N(Vt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Pc(e)}}class Ee{static delete(t){return N(Vt,"Removing database:",t),_e(sc().indexedDB.deleteDatabase(t)).toPromise()}static C(){if(!ic())return!1;if(Ee.F())return!0;const t=pr(),e=Ee.M(t),n=0<e&&e<10,i=Ga(t),o=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||o)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.O)==="YES"}static N(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.B=n,this.L=null,Ee.M(pr())===12.2&&qt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(t){return this.db||(N(Vt,"Opening database:",this.name),this.db=await new Promise(((e,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=o=>{const a=o.target.result;e(a)},i.onblocked=()=>{n(new gn(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=o=>{const a=o.target.error;a.name==="VersionError"?n(new C(R.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new C(R.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new gn(t,a))},i.onupgradeneeded=o=>{N(Vt,'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const a=o.target.result;if(this.L!==null&&this.L!==o.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${o.oldVersion}, event.newVersion=${o.newVersion}, db.version=${a.version}`);this.B.q(a,i.transaction,o.oldVersion,this.version).next((()=>{N(Vt,"Database upgrade to version "+this.version+" complete")}))}})),this.db.addEventListener("close",(e=>{const n=e.target;this.L=n.version}),{passive:!0})),this.db.addEventListener("versionchange",(e=>{var n;e.newVersion===null&&(Qt('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(n=this.databaseDeletedListener)===null||n===void 0||n.call(this))}),{passive:!0}),this.db}setDatabaseDeletedListener(t){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=t}async runTransaction(t,e,n,i){const o=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.k(t);const c=Gs.open(this.db,t,o?"readonly":"readwrite",n),h=i(c).next((d=>(c.v(),d))).catch((d=>(c.abort(d),P.reject(d)))).toPromise();return h.catch((()=>{})),await c.D,h}catch(c){const h=c,d=h.name!=="FirebaseError"&&a<3;if(N(Vt,"Transaction failed with error:",h.message,"Retrying:",d),this.close(),!d)return Promise.reject(h)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Ga(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class Vc{constructor(t){this.$=t,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(t){this.$=t}done(){this.U=!0}G(t){this.K=t}delete(){return _e(this.$.delete())}}class gn extends C{constructor(t,e){super(R.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function ze(r){return r.name==="IndexedDbTransactionError"}class Pc{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(N(Vt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(N(Vt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),_e(n)}add(t){return N(Vt,"ADD",this.store.name,t,t),_e(this.store.add(t))}get(t){return _e(this.store.get(t)).next((e=>(e===void 0&&(e=null),N(Vt,"GET",this.store.name,t,e),e)))}delete(t){return N(Vt,"DELETE",this.store.name,t),_e(this.store.delete(t))}count(){return N(Vt,"COUNT",this.store.name),_e(this.store.count())}j(t,e){const n=this.options(t,e),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const o=i.getAll(n.range);return new P(((a,c)=>{o.onerror=h=>{c(h.target.error)},o.onsuccess=h=>{a(h.target.result)}}))}{const o=this.cursor(n),a=[];return this.J(o,((c,h)=>{a.push(h)})).next((()=>a))}}H(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new P(((i,o)=>{n.onerror=a=>{o(a.target.error)},n.onsuccess=a=>{i(a.target.result)}}))}Y(t,e){N(Vt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.Z=!1;const i=this.cursor(n);return this.J(i,((o,a,c)=>c.delete()))}X(t,e){let n;e?n=t:(n={},e=t);const i=this.cursor(n);return this.J(i,e)}ee(t){const e=this.cursor({});return new P(((n,i)=>{e.onerror=o=>{const a=Ks(o.target.error);i(a)},e.onsuccess=o=>{const a=o.target.result;a?t(a.primaryKey,a.value).next((c=>{c?a.continue():n()})):n()}}))}J(t,e){const n=[];return new P(((i,o)=>{t.onerror=a=>{o(a.target.error)},t.onsuccess=a=>{const c=a.target.result;if(!c)return void i();const h=new Vc(c),d=e(c.primaryKey,c.value,h);if(d instanceof P){const m=d.catch((y=>(h.done(),P.reject(y))));n.push(m)}h.isDone?i():h.W===null?c.continue():c.continue(h.W)}})).next((()=>P.waitFor(n)))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Z?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function _e(r){return new P(((t,e)=>{r.onsuccess=n=>{const i=n.target.result;t(i)},r.onerror=n=>{const i=Ks(n.target.error);e(i)}}))}let qo=!1;function Ks(r){const t=Ee.M(pr());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return qo||(qo=!0,setTimeout((()=>{throw n}),0)),n}}return r}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this._e(n),this.ae=n=>e.writeSequenceNumber(n))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}Cr.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=-1;function br(r){return r==null}function gr(r){return r===0&&1/r==-1/0}function Sc(r){return typeof r=="number"&&Number.isInteger(r)&&!gr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="";function Cc(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Bo(t)),t=bc(r.get(e),t);return Bo(t)}function bc(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case Ka:e+="";break;default:e+=o}}return e}function Bo(r){return r+Ka+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function ce(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Dc(r,t){const e=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.push(t(r[n],n,r));return e}function Qa(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ir(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ir(this.root,t,this.comparator,!1)}getReverseIterator(){return new ir(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ir(this.root,t,this.comparator,!0)}}class ir{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??ct.RED,this.left=i??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new ct(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw F(27949);return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(t,e,n,i,o){return this}insert(t,e,n){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new zo(this.data.getIterator())}getIteratorFrom(t){return new zo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new it(this.comparator);return e.data=t,e}}class zo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new Pt([])}unionWith(t){let e=new it(ht.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Pt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Oe(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Wa("Invalid base64 string: "+o):o}})(t);return new dt(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o})(t);return new dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const Nc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ie(r){if(G(!!r,39018),typeof r=="string"){let t=0;const e=Nc.exec(r);if(G(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:tt(r.seconds),nanos:tt(r.nanos)}}function tt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function oe(r){return typeof r=="string"?dt.fromBase64String(r):dt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="server_timestamp",Xa="__type__",Ya="__previous_value__",Ja="__local_write_time__";function Dr(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Xa])===null||e===void 0?void 0:e.stringValue)===Ha}function Nr(r){const t=r.mapValue.fields[Ya];return Dr(t)?Nr(t):t}function vn(r){const t=ie(r.mapValue.fields[Ja].timestampValue);return new X(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,e,n,i,o,a,c,h,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const In="(default)";class An{constructor(t,e){this.projectId=t,this.database=e||In}static empty(){return new An("","")}get isDefaultDatabase(){return this.database===In}isEqual(t){return t instanceof An&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="__type__",xc="__max__",or={mapValue:{}},tu="__vector__",_r="value";function ae(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Dr(r)?4:Fc(r)?9007199254740991:Oc(r)?10:11:F(28295,{value:r})}function Bt(r,t){if(r===t)return!0;const e=ae(r);if(e!==ae(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return vn(r).isEqual(vn(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=ie(i.timestampValue),c=ie(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(i,o){return oe(i.bytesValue).isEqual(oe(o.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(i,o){return tt(i.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(o.geoPointValue.longitude)})(r,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return tt(i.integerValue)===tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=tt(i.doubleValue),c=tt(o.doubleValue);return a===c?gr(a)===gr(c):isNaN(a)&&isNaN(c)}return!1})(r,t);case 9:return Oe(r.arrayValue.values||[],t.arrayValue.values||[],Bt);case 10:case 11:return(function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(jo(a)!==jo(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Bt(a[h],c[h])))return!1;return!0})(r,t);default:return F(52216,{left:r})}}function wn(r,t){return(r.values||[]).find((e=>Bt(e,t)))!==void 0}function Fe(r,t){if(r===t)return 0;const e=ae(r),n=ae(t);if(e!==n)return U(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(r.booleanValue,t.booleanValue);case 2:return(function(o,a){const c=tt(o.integerValue||o.doubleValue),h=tt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1})(r,t);case 3:return $o(r.timestampValue,t.timestampValue);case 4:return $o(vn(r),vn(t));case 5:return Rs(r.stringValue,t.stringValue);case 6:return(function(o,a){const c=oe(o),h=oe(a);return c.compareTo(h)})(r.bytesValue,t.bytesValue);case 7:return(function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=U(c[d],h[d]);if(m!==0)return m}return U(c.length,h.length)})(r.referenceValue,t.referenceValue);case 8:return(function(o,a){const c=U(tt(o.latitude),tt(a.latitude));return c!==0?c:U(tt(o.longitude),tt(a.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return Go(r.arrayValue,t.arrayValue);case 10:return(function(o,a){var c,h,d,m;const y=o.fields||{},w=a.fields||{},S=(c=y[_r])===null||c===void 0?void 0:c.arrayValue,D=(h=w[_r])===null||h===void 0?void 0:h.arrayValue,x=U(((d=S?.values)===null||d===void 0?void 0:d.length)||0,((m=D?.values)===null||m===void 0?void 0:m.length)||0);return x!==0?x:Go(S,D)})(r.mapValue,t.mapValue);case 11:return(function(o,a){if(o===or.mapValue&&a===or.mapValue)return 0;if(o===or.mapValue)return 1;if(a===or.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const w=Rs(h[y],m[y]);if(w!==0)return w;const S=Fe(c[h[y]],d[m[y]]);if(S!==0)return S}return U(h.length,m.length)})(r.mapValue,t.mapValue);default:throw F(23264,{le:e})}}function $o(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return U(r,t);const e=ie(r),n=ie(t),i=U(e.seconds,n.seconds);return i!==0?i:U(e.nanos,n.nanos)}function Go(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Fe(e[i],n[i]);if(o)return o}return U(e.length,n.length)}function Le(r){return Vs(r)}function Vs(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=ie(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return oe(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return O.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=Vs(o);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of n)o?o=!1:i+=",",i+=`${a}:${Vs(e.fields[a])}`;return i+"}"})(r.mapValue):F(61005,{value:r})}function cr(r){switch(ae(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Nr(r);return t?16+cr(t):16;case 5:return 2*r.stringValue.length;case 6:return oe(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((i,o)=>i+cr(o)),0)})(r.arrayValue);case 10:case 11:return(function(n){let i=0;return ce(n.fields,((o,a)=>{i+=o.length+cr(a)})),i})(r.mapValue);default:throw F(13486,{value:r})}}function yr(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Ps(r){return!!r&&"integerValue"in r}function Ws(r){return!!r&&"arrayValue"in r}function Ko(r){return!!r&&"nullValue"in r}function Qo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function hr(r){return!!r&&"mapValue"in r}function Oc(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Za])===null||e===void 0?void 0:e.stringValue)===tu}function _n(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return ce(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=_n(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=_n(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Fc(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===xc}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!hr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=_n(e)}setAll(t){let e=ht.emptyPath(),n={},i=[];t.forEach(((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=c.popLast()}a?n[c.lastSegment()]=_n(a):i.push(c.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());hr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];hr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){ce(e,((i,o)=>t[i]=o));for(const i of n)delete t[i]}clone(){return new wt(_n(this.value))}}function eu(r){const t=[];return ce(r.fields,((e,n)=>{const i=new ht([e]);if(hr(n)){const o=eu(n.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)})),new Pt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e,n,i,o,a,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Et(t,0,M.min(),M.min(),M.min(),wt.empty(),0)}static newFoundDocument(t,e,n,i){return new Et(t,1,e,M.min(),n,i,0)}static newNoDocument(t,e){return new Et(t,2,e,M.min(),M.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,M.min(),M.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t,e){this.position=t,this.inclusive=e}}function Wo(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],a=r.position[i];if(o.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),e.key):n=Fe(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ho(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Bt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Lc(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{}class nt extends nu{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Uc(t,e,n):e==="array-contains"?new jc(t,n):e==="in"?new zc(t,n):e==="not-in"?new $c(t,n):e==="array-contains-any"?new Gc(t,n):new nt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new qc(t,n):new Bc(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Fe(e,this.value)):e!==null&&ae(this.value)===ae(e)&&this.matchesComparison(Fe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends nu{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new xt(t,e)}matches(t){return ru(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ru(r){return r.op==="and"}function su(r){return Mc(r)&&ru(r)}function Mc(r){for(const t of r.filters)if(t instanceof xt)return!1;return!0}function Ss(r){if(r instanceof nt)return r.field.canonicalString()+r.op.toString()+Le(r.value);if(su(r))return r.filters.map((t=>Ss(t))).join(",");{const t=r.filters.map((e=>Ss(e))).join(",");return`${r.op}(${t})`}}function iu(r,t){return r instanceof nt?(function(n,i){return i instanceof nt&&n.op===i.op&&n.field.isEqual(i.field)&&Bt(n.value,i.value)})(r,t):r instanceof xt?(function(n,i){return i instanceof xt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((o,a,c)=>o&&iu(a,i.filters[c])),!0):!1})(r,t):void F(19439)}function ou(r){return r instanceof nt?(function(e){return`${e.field.canonicalString()} ${e.op} ${Le(e.value)}`})(r):r instanceof xt?(function(e){return e.op.toString()+" {"+e.getFilters().map(ou).join(" ,")+"}"})(r):"Filter"}class Uc extends nt{constructor(t,e,n){super(t,e,n),this.key=O.fromName(n.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class qc extends nt{constructor(t,e){super(t,"in",e),this.keys=au("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Bc extends nt{constructor(t,e){super(t,"not-in",e),this.keys=au("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function au(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((n=>O.fromName(n.referenceValue)))}class jc extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ws(e)&&wn(e.arrayValue,this.value)}}class zc extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&wn(this.value.arrayValue,e)}}class $c extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(wn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!wn(this.value.arrayValue,e)}}class Gc extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ws(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>wn(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t,e=null,n=[],i=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.Pe=null}}function Xo(r,t=null,e=[],n=[],i=null,o=null,a=null){return new Kc(r,t,e,n,i,o,a)}function Hs(r){const t=L(r);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>Ss(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(o){return o.field.canonicalString()+o.dir})(n))).join(","),br(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>Le(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>Le(n))).join(",")),t.Pe=e}return t.Pe}function Xs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Lc(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!iu(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Ho(r.startAt,t.startAt)&&Ho(r.endAt,t.endAt)}function Cs(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e=null,n=[],i=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Qc(r,t,e,n,i,o,a,c){return new Ht(r,t,e,n,i,o,a,c)}function kr(r){return new Ht(r)}function Yo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Ys(r){return r.collectionGroup!==null}function ke(r){const t=L(r);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new it(ht.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new Rn(o,n))})),e.has(ht.keyField().canonicalString())||t.Te.push(new Rn(ht.keyField(),n))}return t.Te}function Ft(r){const t=L(r);return t.Ie||(t.Ie=uu(t,ke(r))),t.Ie}function Wc(r){const t=L(r);return t.de||(t.de=uu(t,r.explicitOrderBy)),t.de}function uu(r,t){if(r.limitType==="F")return Xo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new Rn(i.field,o)}));const e=r.endAt?new Me(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Me(r.startAt.position,r.startAt.inclusive):null;return Xo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function bs(r,t){const e=r.filters.concat([t]);return new Ht(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Er(r,t,e){return new Ht(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function xr(r,t){return Xs(Ft(r),Ft(t))&&r.limitType===t.limitType}function lu(r){return`${Hs(Ft(r))}|lt:${r.limitType}`}function De(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((i=>ou(i))).join(", ")}]`),br(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((i=>Le(i))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((i=>Le(i))).join(",")),`Target(${n})`})(Ft(r))}; limitType=${r.limitType})`}function Or(r,t){return t.isFoundDocument()&&(function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):O.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)})(r,t)&&(function(n,i){for(const o of ke(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(r,t)&&(function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0})(r,t)&&(function(n,i){return!(n.startAt&&!(function(a,c,h){const d=Wo(a,c,h);return a.inclusive?d<=0:d<0})(n.startAt,ke(n),i)||n.endAt&&!(function(a,c,h){const d=Wo(a,c,h);return a.inclusive?d>=0:d>0})(n.endAt,ke(n),i))})(r,t)}function Hc(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function cu(r){return(t,e)=>{let n=!1;for(const i of ke(r)){const o=Xc(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function Xc(r,t,e){const n=r.field.isKeyField()?O.comparator(t.key,e.key):(function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Fe(h,d):F(42886)})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ce(this.inner,((e,n)=>{for(const[i,o]of n)t(i,o)}))}isEmpty(){return Qa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=new Y(O.comparator);function Wt(){return Yc}const hu=new Y(O.comparator);function fn(...r){let t=hu;for(const e of r)t=t.insert(e.key,e);return t}function du(r){let t=hu;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ye(){return yn()}function fu(){return yn()}function yn(){return new we((r=>r.toString()),((r,t)=>r.isEqual(t)))}const Jc=new Y(O.comparator),Zc=new it(O.comparator);function q(...r){let t=Zc;for(const e of r)t=t.add(e);return t}const th=new it(U);function eh(){return th}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gr(t)?"-0":t}}function mu(r){return{integerValue:""+r}}function nh(r,t){return Sc(t)?mu(t):Js(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this._=void 0}}function rh(r,t,e){return r instanceof Tr?(function(i,o){const a={fields:{[Xa]:{stringValue:Ha},[Ja]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Dr(o)&&(o=Nr(o)),o&&(a.fields[Ya]=o),{mapValue:a}})(e,t):r instanceof Vn?gu(r,t):r instanceof Pn?_u(r,t):(function(i,o){const a=pu(i,o),c=Jo(a)+Jo(i.Ee);return Ps(a)&&Ps(i.Ee)?mu(c):Js(i.serializer,c)})(r,t)}function sh(r,t,e){return r instanceof Vn?gu(r,t):r instanceof Pn?_u(r,t):e}function pu(r,t){return r instanceof vr?(function(n){return Ps(n)||(function(o){return!!o&&"doubleValue"in o})(n)})(t)?t:{integerValue:0}:null}class Tr extends Fr{}class Vn extends Fr{constructor(t){super(),this.elements=t}}function gu(r,t){const e=yu(t);for(const n of r.elements)e.some((i=>Bt(i,n)))||e.push(n);return{arrayValue:{values:e}}}class Pn extends Fr{constructor(t){super(),this.elements=t}}function _u(r,t){let e=yu(t);for(const n of r.elements)e=e.filter((i=>!Bt(i,n)));return{arrayValue:{values:e}}}class vr extends Fr{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Jo(r){return tt(r.integerValue||r.doubleValue)}function yu(r){return Ws(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function ih(r,t){return r.field.isEqual(t.field)&&(function(n,i){return n instanceof Vn&&i instanceof Vn||n instanceof Pn&&i instanceof Pn?Oe(n.elements,i.elements,Bt):n instanceof vr&&i instanceof vr?Bt(n.Ee,i.Ee):n instanceof Tr&&i instanceof Tr})(r.transform,t.transform)}class oh{constructor(t,e){this.version=t,this.transformResults=e}}class It{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new It}static exists(t){return new It(void 0,t)}static updateTime(t){return new It(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function dr(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Lr{}function Eu(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Mr(r.key,It.none()):new Cn(r.key,r.data,It.none());{const e=r.data,n=wt.empty();let i=new it(ht.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),i=i.add(o)}return new he(r.key,n,new Pt(i.toArray()),It.none())}}function ah(r,t,e){r instanceof Cn?(function(i,o,a){const c=i.value.clone(),h=ta(i.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(r,t,e):r instanceof he?(function(i,o,a){if(!dr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=ta(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Tu(i)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(r,t,e):(function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function En(r,t,e,n){return r instanceof Cn?(function(o,a,c,h){if(!dr(o.precondition,a))return c;const d=o.value.clone(),m=ea(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(r,t,e,n):r instanceof he?(function(o,a,c,h){if(!dr(o.precondition,a))return c;const d=ea(o.fieldTransforms,h,a),m=a.data;return m.setAll(Tu(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((y=>y.field)))})(r,t,e,n):(function(o,a,c){return dr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(r,t,e)}function uh(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=pu(n.transform,i||null);o!=null&&(e===null&&(e=wt.empty()),e.set(n.field,o))}return e||null}function Zo(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Oe(n,i,((o,a)=>ih(o,a)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Cn extends Lr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class he extends Lr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Tu(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function ta(r,t,e){const n=new Map;G(r.length===e.length,32656,{Ae:e.length,Re:r.length});for(let i=0;i<e.length;i++){const o=r[i],a=o.transform,c=t.data.field(o.field);n.set(o.field,sh(a,c,e[i]))}return n}function ea(r,t,e){const n=new Map;for(const i of r){const o=i.transform,a=e.data.field(i.field);n.set(i.field,rh(o,a,t))}return n}class Mr extends Lr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lh extends Lr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&ah(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=En(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=En(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=fu();return this.mutations.forEach((i=>{const o=t.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(i.key)?null:c;const h=Eu(a,c);h!==null&&n.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(M.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),q())}isEqual(t){return this.batchId===t.batchId&&Oe(this.mutations,t.mutations,((e,n)=>Zo(e,n)))&&Oe(this.baseMutations,t.baseMutations,((e,n)=>Zo(e,n)))}}class Zs{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){G(t.mutations.length===n.length,58842,{Ve:t.mutations.length,me:n.length});let i=(function(){return Jc})();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,n[a].version);return new Zs(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t,e,n){this.alias=t,this.aggregateType=e,this.fieldPath=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,j;function mh(r){switch(r){case R.OK:return F(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return F(15467,{code:r})}}function vu(r){if(r===void 0)return qt("GRPC error has no .code"),R.UNKNOWN;switch(r){case et.OK:return R.OK;case et.CANCELLED:return R.CANCELLED;case et.UNKNOWN:return R.UNKNOWN;case et.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case et.INTERNAL:return R.INTERNAL;case et.UNAVAILABLE:return R.UNAVAILABLE;case et.UNAUTHENTICATED:return R.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case et.NOT_FOUND:return R.NOT_FOUND;case et.ALREADY_EXISTS:return R.ALREADY_EXISTS;case et.PERMISSION_DENIED:return R.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case et.ABORTED:return R.ABORTED;case et.OUT_OF_RANGE:return R.OUT_OF_RANGE;case et.UNIMPLEMENTED:return R.UNIMPLEMENTED;case et.DATA_LOSS:return R.DATA_LOSS;default:return F(39323,{code:r})}}(j=et||(et={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=new ne([4294967295,4294967295],0);function na(r){const t=ja().encode(r),e=new xa;return e.update(t),new Uint8Array(e.digest())}function ra(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ne([e,n],0),new ne([i,o],0)]}class ti{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new mn(`Invalid padding: ${e}`);if(n<0)throw new mn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new mn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new mn(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=ne.fromNumber(this.fe)}pe(t,e,n){let i=t.add(e.multiply(ne.fromNumber(n)));return i.compare(ph)===1&&(i=new ne([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=na(t),[n,i]=ra(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(n,i,o);if(!this.ye(a))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ti(o,i,e);return n.forEach((c=>a.insert(c))),a}insert(t){if(this.fe===0)return;const e=na(t),[n,i]=ra(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(n,i,o);this.we(a)}}we(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class mn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,bn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Ur(M.min(),i,new Y(U),Wt(),q())}}class bn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new bn(n,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e,n,i){this.Se=t,this.removedTargetIds=e,this.key=n,this.be=i}}class Iu{constructor(t,e){this.targetId=t,this.De=e}}class Au{constructor(t,e,n=dt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class sa{constructor(){this.ve=0,this.Ce=ia(),this.Fe=dt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=q(),e=q(),n=q();return this.Ce.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:F(38017,{changeType:o})}})),new bn(this.Fe,this.Me,t,e,n)}ke(){this.xe=!1,this.Ce=ia()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,G(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class gh{constructor(t){this.We=t,this.Ge=new Map,this.ze=Wt(),this.je=ar(),this.Je=ar(),this.He=new Y(U)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const n=this.tt(e);switch(t.state){case 0:this.nt(e)&&n.Be(t.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(t.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(n.Ke(),n.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),n.Be(t.resumeToken));break;default:F(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((n,i)=>{this.nt(i)&&e(i)}))}it(t){const e=t.targetId,n=t.De.count,i=this.st(e);if(i){const o=i.target;if(Cs(o))if(n===0){const a=new O(o.path);this.Xe(e,a,Et.newNoDocument(a,M.min()))}else G(n===1,20013,{expectedCount:n});else{const a=this.ot(e);if(a!==n){const c=this._t(t),h=c?this.ut(c,t,a):1;if(h!==0){this.rt(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,d)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let a,c;try{a=oe(n).toUint8Array()}catch(h){if(h instanceof Wa)return Qt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new ti(a,i,o)}catch(h){return Qt(h instanceof mn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.fe===0?null:c}ut(t,e,n){return e.De.count===n-this.ht(t,e.targetId)?0:2}ht(t,e){const n=this.We.getRemoteKeysForTarget(e);let i=0;return n.forEach((o=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Xe(e,o,null),i++)})),i}Pt(t){const e=new Map;this.Ge.forEach(((o,a)=>{const c=this.st(a);if(c){if(o.current&&Cs(c.target)){const h=new O(c.target.path);this.Tt(h).has(a)||this.It(a,h)||this.Xe(a,h,Et.newNoDocument(h,t))}o.Ne&&(e.set(a,o.Le()),o.ke())}}));let n=q();this.Je.forEach(((o,a)=>{let c=!0;a.forEachWhile((h=>{const d=this.st(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(n=n.add(o))})),this.ze.forEach(((o,a)=>a.setReadTime(t)));const i=new Ur(t,e,this.He,this.ze,n);return this.ze=Wt(),this.je=ar(),this.Je=ar(),this.He=new Y(U),i}Ze(t,e){if(!this.nt(t))return;const n=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,n),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,n){if(!this.nt(t))return;const i=this.tt(t);this.It(t,e)?i.qe(e,1):i.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),n&&(this.ze=this.ze.insert(e,n))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new sa,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new it(U),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new it(U),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new sa),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function ar(){return new Y(O.comparator)}function ia(){return new Y(O.comparator)}const _h={asc:"ASCENDING",desc:"DESCENDING"},yh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Eh={and:"AND",or:"OR"};class Th{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ds(r,t){return r.useProto3Json||br(t)?t:{value:t}}function Ir(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function wu(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function vh(r,t){return Ir(r,t.toTimestamp())}function Lt(r){return G(!!r,49232),M.fromTimestamp((function(e){const n=ie(e);return new X(n.seconds,n.nanos)})(r))}function ei(r,t){return Ns(r,t).canonicalString()}function Ns(r,t){const e=(function(i){return new Q(["projects",i.projectId,"databases",i.database])})(r).child("documents");return t===void 0?e:e.child(t)}function Ru(r){const t=Q.fromString(r);return G(Du(t),10190,{key:t.toString()}),t}function ks(r,t){return ei(r.databaseId,t.path)}function Es(r,t){const e=Ru(t);if(e.get(1)!==r.databaseId.projectId)throw new C(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new C(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new O(Pu(e))}function Vu(r,t){return ei(r.databaseId,t)}function Ih(r){const t=Ru(r);return t.length===4?Q.emptyPath():Pu(t)}function xs(r){return new Q(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Pu(r){return G(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function oa(r,t,e){return{name:ks(r,t),fields:e.value.mapValue.fields}}function Ah(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(d,m){return d.useProto3Json?(G(m===void 0||typeof m=="string",58123),dt.fromBase64String(m||"")):(G(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),dt.fromUint8Array(m||new Uint8Array))})(r,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&(function(d){const m=d.code===void 0?R.UNKNOWN:vu(d.code);return new C(m,d.message||"")})(a);e=new Au(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=Es(r,n.document.name),o=Lt(n.document.updateTime),a=n.document.createTime?Lt(n.document.createTime):M.min(),c=new wt({mapValue:{fields:n.document.fields}}),h=Et.newFoundDocument(i,o,a,c),d=n.targetIds||[],m=n.removedTargetIds||[];e=new fr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=Es(r,n.document),o=n.readTime?Lt(n.readTime):M.min(),a=Et.newNoDocument(i,o),c=n.removedTargetIds||[];e=new fr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=Es(r,n.document),o=n.removedTargetIds||[];e=new fr([],o,i,null)}else{if(!("filter"in t))return F(11601,{At:t});{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,a=new fh(i,o),c=n.targetId;e=new Iu(c,a)}}return e}function wh(r,t){let e;if(t instanceof Cn)e={update:oa(r,t.key,t.value)};else if(t instanceof Mr)e={delete:ks(r,t.key)};else if(t instanceof he)e={update:oa(r,t.key,t.data),updateMask:kh(t.fieldMask)};else{if(!(t instanceof lh))return F(16599,{Rt:t.type});e={verify:ks(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((n=>(function(o,a){const c=a.transform;if(c instanceof Tr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Vn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Pn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof vr)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw F(20930,{transform:a.transform})})(0,n)))),t.precondition.isNone||(e.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:vh(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F(27497)})(r,t.precondition)),e}function Rh(r,t){return r&&r.length>0?(G(t!==void 0,14353),r.map((e=>(function(i,o){let a=i.updateTime?Lt(i.updateTime):Lt(o);return a.isEqual(M.min())&&(a=Lt(o)),new oh(a,i.transformResults||[])})(e,t)))):[]}function Vh(r,t){return{documents:[Vu(r,t.path)]}}function Su(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Vu(r,i);const o=(function(d){if(d.length!==0)return bu(xt.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((m=>(function(w){return{field:te(w.field),direction:bh(w.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Ds(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{Vt:e,parent:i}}function Ph(r,t,e,n){const{Vt:i,parent:o}=Su(r,t),a={},c=[];let h=0;return e.forEach((d=>{const m="aggregate_"+h++;a[m]=d.alias,d.aggregateType==="count"?c.push({alias:m,count:{}}):d.aggregateType==="avg"?c.push({alias:m,avg:{field:te(d.fieldPath)}}):d.aggregateType==="sum"&&c.push({alias:m,sum:{field:te(d.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:i.structuredQuery},parent:i.parent},ft:a,parent:o}}function Sh(r){let t=Ih(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){G(n===1,65062);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=(function(y){const w=Cu(y);return w instanceof xt&&su(w)?w.getFilters():[w]})(e.where));let a=[];e.orderBy&&(a=(function(y){return y.map((w=>(function(D){return new Rn(Ne(D.field),(function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(w)))})(e.orderBy));let c=null;e.limit&&(c=(function(y){let w;return w=typeof y=="object"?y.value:y,br(w)?null:w})(e.limit));let h=null;e.startAt&&(h=(function(y){const w=!!y.before,S=y.values||[];return new Me(S,w)})(e.startAt));let d=null;return e.endAt&&(d=(function(y){const w=!y.before,S=y.values||[];return new Me(S,w)})(e.endAt)),Qc(t,i,a,o,c,"F",h,d)}function Ch(r,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:i})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Cu(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ne(e.unaryFilter.field);return nt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ne(e.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ne(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ne(e.unaryFilter.field);return nt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}})(r):r.fieldFilter!==void 0?(function(e){return nt.create(Ne(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return xt.create(e.compositeFilter.filters.map((n=>Cu(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F(1026)}})(e.compositeFilter.op))})(r):F(30097,{filter:r})}function bh(r){return _h[r]}function Dh(r){return yh[r]}function Nh(r){return Eh[r]}function te(r){return{fieldPath:r.canonicalString()}}function Ne(r){return ht.fromServerFormat(r.fieldPath)}function bu(r){return r instanceof nt?(function(e){if(e.op==="=="){if(Qo(e.value))return{unaryFilter:{field:te(e.field),op:"IS_NAN"}};if(Ko(e.value))return{unaryFilter:{field:te(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Qo(e.value))return{unaryFilter:{field:te(e.field),op:"IS_NOT_NAN"}};if(Ko(e.value))return{unaryFilter:{field:te(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:te(e.field),op:Dh(e.op),value:e.value}}})(r):r instanceof xt?(function(e){const n=e.getFilters().map((i=>bu(i)));return n.length===1?n[0]:{compositeFilter:{op:Nh(e.op),filters:n}}})(r):F(54877,{filter:r})}function kh(r){const t=[];return r.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Du(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t,e,n,i,o=M.min(),a=M.min(),c=dt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new ee(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ee(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t){this.gt=t}}function Oh(r){const t=Sh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Er(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.Dn=new Lh}addToCollectionParentIndex(t,e){return this.Dn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(se.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(se.min())}updateCollectionGroup(t,e,n){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Lh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new it(Q.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new it(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nu=41943040;class At{static withCacheSize(t){return new At(t,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(Nu,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new Ue(0)}static ur(){return new Ue(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="LruGarbageCollector",ku=1048576;function la([r,t],[e,n]){const i=U(r,e);return i===0?U(t,n):i}class Mh{constructor(t){this.Tr=t,this.buffer=new it(la),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();la(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Uh{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){N(ua,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ze(e)?N(ua,"Ignoring IndexedDB error during garbage collection: ",e):await je(e)}await this.Rr(3e5)}))}}class qh{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((n=>Math.floor(e/100*n)))}nthSequenceNumber(t,e){if(e===0)return P.resolve(Cr.ue);const n=new Mh(e);return this.Vr.forEachTarget(t,(i=>n.Er(i.sequenceNumber))).next((()=>this.Vr.gr(t,(i=>n.Er(i))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(aa)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),aa):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let n,i,o,a,c,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),i=this.params.maximumSequenceNumbersToCollect):i=y,a=Date.now(),this.nthSequenceNumber(t,i)))).next((y=>(n=y,c=Date.now(),this.removeTargets(t,n,e)))).next((y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(t,n)))).next((y=>(d=Date.now(),be()<=Kt.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${y} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:y}))))}}function Bh(r,t){return new qh(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.changes=new we((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?P.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(n!==null&&En(n.mutation,i,Pt.empty(),X.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,q()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=q()){const i=ye();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((o=>{let a=fn();return o.forEach(((c,h)=>{a=a.insert(c,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const n=ye();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,q())))}populateOverlays(t,e,n){const i=[];return n.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((a,c)=>{e.set(a,c)}))}))}computeViews(t,e,n,i){let o=Wt();const a=yn(),c=(function(){return yn()})();return e.forEach(((h,d)=>{const m=n.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof he)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),En(m.mutation,d,m.mutation.getFieldMask(),X.now())):a.set(d.key,Pt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,m)=>a.set(d,m))),e.forEach(((d,m)=>{var y;return c.set(d,new zh(m,(y=a.get(d))!==null&&y!==void 0?y:null))})),c)))}recalculateAndSaveOverlays(t,e){const n=yn();let i=new Y(((a,c)=>a-c)),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const c of a)c.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let m=n.get(h)||Pt.empty();m=c.applyToLocalView(d,m),n.set(h,m);const y=(i.get(c.batchId)||q()).add(h);i=i.insert(c.batchId,y)}))})).next((()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,y=fu();m.forEach((w=>{if(!o.has(w)){const S=Eu(e.get(w),n.get(w));S!==null&&y.set(w,S),o=o.add(w)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,y))}return P.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,i){return(function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ys(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):P.resolve(ye());let c=Tn,h=o;return a.next((d=>P.forEach(d,((m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next((w=>{h=h.insert(m,w)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,q()))).next((m=>({batchId:c,changes:du(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next((n=>{let i=fn();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let a=fn();return this.indexManager.getCollectionParents(t,o).next((c=>P.forEach(c,(h=>{const d=(function(y,w){return new Ht(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next((m=>{m.forEach(((y,w)=>{a=a.insert(y,w)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i)))).next((a=>{o.forEach(((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Et.newInvalidDocument(m)))}));let c=fn();return a.forEach(((h,d)=>{const m=o.get(h);m!==void 0&&En(m.mutation,d,Pt.empty(),X.now()),Or(e,d)&&(c=c.insert(h,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return P.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:Lt(i.createTime)}})(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(i){return{name:i.name,query:Oh(i.bundledQuery),readTime:Lt(i.readTime)}})(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.overlays=new Y(O.comparator),this.kr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ye();return P.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&n.set(i,o)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((i,o)=>{this.wt(t,e,o)})),P.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.kr.get(n);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.kr.delete(n)),P.resolve()}getOverlaysForCollection(t,e,n){const i=ye(),o=e.length+1,a=new O(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return P.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new Y(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=o.get(d.largestBatchId);m===null&&(m=ye(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=ye(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=i)););return P.resolve(c)}wt(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(n.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new hh(e,n));let o=this.kr.get(e);o===void 0&&(o=q(),this.kr.set(e,o)),this.kr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.qr=new it(at.Qr),this.$r=new it(at.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const n=new at(t,e);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.Wr(new at(t,e))}Gr(t,e){t.forEach((n=>this.removeReference(n,e)))}zr(t){const e=new O(new Q([])),n=new at(e,t),i=new at(e,t+1),o=[];return this.$r.forEachInRange([n,i],(a=>{this.Wr(a),o.push(a.key)})),o}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new O(new Q([])),n=new at(e,t),i=new at(e,t+1);let o=q();return this.$r.forEachInRange([n,i],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new at(t,0),n=this.qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class at{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return O.comparator(t.key,e.key)||U(t.Hr,e.Hr)}static Ur(t,e){return U(t.Hr,e.Hr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new it(at.Qr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ch(o,e,n,i);this.mutationQueue.push(a);for(const c of i)this.Yr=this.Yr.add(new at(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Xr(n),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Qs:this.er-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new at(e,0),i=new at(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([n,i],(a=>{const c=this.Zr(a.Hr);o.push(c)})),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new it(U);return e.forEach((i=>{const o=new at(i,0),a=new at(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,a],(c=>{n=n.add(c.Hr)}))})),P.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;O.isDocumentKey(o)||(o=o.child(""));const a=new at(new O(o),0);let c=new it(U);return this.Yr.forEachWhile((h=>{const d=h.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(c=c.add(h.Hr)),!0)}),a),P.resolve(this.ei(c))}ei(t){const e=[];return t.forEach((n=>{const i=this.Zr(n);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){G(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return P.forEach(e.mutations,(i=>{const o=new at(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Yr=n}))}rr(t){}containsKey(t,e){const n=new at(e,0),i=this.Yr.firstAfterOrEqual(n);return P.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t){this.ni=t,this.docs=(function(){return new Y(O.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,a=this.ni(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return P.resolve(n?n.document.mutableCopy():Et.newInvalidDocument(e))}getEntries(t,e){let n=Wt();return e.forEach((i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():Et.newInvalidDocument(i))})),P.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Wt();const a=e.path,c=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Ac(Ic(m),n)<=0||(i.has(m.key)||Or(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,n,i){F(9500)}ri(t,e){return P.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new Xh(this)}getSize(t){return P.resolve(this.size)}}class Xh extends jh{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Or.addEntry(t,i)):this.Or.removeEntry(n)})),P.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t){this.persistence=t,this.ii=new we((e=>Hs(e)),Xs),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.si=0,this.oi=new ni,this.targetCount=0,this._i=Ue.ar()}forEachTarget(t,e){return this.ii.forEach(((n,i)=>e(i))),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.si&&(this.si=e),P.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new Ue(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.hr(e),P.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.ii.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)})),P.waitFor(o).next((()=>i))}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const n=this.ii.get(e)||null;return P.resolve(n)}addMatchingKeys(t,e,n){return this.oi.Kr(e,n),P.resolve()}removeMatchingKeys(t,e,n){this.oi.Gr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((a=>{o.push(i.markPotentiallyOrphaned(t,a))})),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const n=this.oi.Jr(e);return P.resolve(n)}containsKey(t,e){return P.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t,e){this.ai={},this.overlays={},this.ui=new Cr(0),this.ci=!1,this.ci=!0,this.li=new Qh,this.referenceDelegate=t(this),this.hi=new Yh(this),this.indexManager=new Fh,this.remoteDocumentCache=(function(i){return new Hh(i)})((n=>this.referenceDelegate.Pi(n))),this.serializer=new xh(e),this.Ti=new Gh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Kh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ai[t.toKey()];return n||(n=new Wh(e,this.referenceDelegate),this.ai[t.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,n){N("MemoryPersistence","Starting transaction:",t);const i=new Jh(this.ui.next());return this.referenceDelegate.Ii(),n(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ei(t,e){return P.or(Object.values(this.ai).map((n=>()=>n.containsKey(t,e))))}}class Jh extends Rc{constructor(t){super(),this.currentSequenceNumber=t}}class ri{constructor(t){this.persistence=t,this.Ai=new ni,this.Ri=null}static Vi(t){return new ri(t)}get mi(){if(this.Ri)return this.Ri;throw F(60996)}addReference(t,e,n){return this.Ai.addReference(n,e),this.mi.delete(n.toString()),P.resolve()}removeReference(t,e,n){return this.Ai.removeReference(n,e),this.mi.add(n.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),P.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((i=>this.mi.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.mi.add(o.toString())))})).next((()=>n.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.mi,(n=>{const i=O.fromPath(n);return this.fi(t,i).next((o=>{o||e.removeEntry(i,M.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((n=>{n?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return P.or([()=>P.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Ar{constructor(t,e){this.persistence=t,this.gi=new we((n=>Cc(n.path)),((n,i)=>n.isEqual(i))),this.garbageCollector=Bh(this,e)}static Vi(t,e){return new Ar(t,e)}Ii(){}di(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((n=>e.next((i=>n+i))))}yr(t){let e=0;return this.gr(t,(n=>{e++})).next((()=>e))}gr(t,e){return P.forEach(this.gi,((n,i)=>this.Sr(t,n,i).next((o=>o?P.resolve():e(i)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ri(t,(a=>this.Sr(t,a,e).next((c=>{c||(n++,o.removeEntry(a,M.min()))})))).next((()=>o.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),P.resolve()}removeReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),P.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=cr(t.data.value)),e}Sr(t,e,n){return P.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.gi.get(e);return P.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}const Zh="main";function td(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Is=n,this.ds=i}static Es(t,e){let n=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new si(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return oc()?8:Ga(pr())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.ps(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ys(t,e,i,n).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new ed;return this.ws(t,e,a).next((c=>{if(o.result=c,this.Rs)return this.Ss(t,e,a,c.size)}))})).next((()=>o.result))}Ss(t,e,n,i){return n.documentReadCount<this.Vs?(be()<=Kt.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",De(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(be()<=Kt.DEBUG&&N("QueryEngine","Query:",De(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.fs*i?(be()<=Kt.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",De(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ft(e))):P.resolve())}ps(t,e){if(Yo(e))return P.resolve(null);let n=Ft(e);return this.indexManager.getIndexType(t,n).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=Er(e,null,"F"),n=Ft(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((o=>{const a=q(...o);return this.gs.getDocuments(t,a).next((c=>this.indexManager.getMinOffset(t,n).next((h=>{const d=this.bs(e,c);return this.Ds(e,d,a,h.readTime)?this.ps(t,Er(e,null,"F")):this.vs(t,d,e,h)}))))})))))}ys(t,e,n,i){return Yo(e)||i.isEqual(M.min())?P.resolve(null):this.gs.getDocuments(t,n).next((o=>{const a=this.bs(e,o);return this.Ds(e,a,n,i)?P.resolve(null):(be()<=Kt.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),De(e)),this.vs(t,a,e,vc(i,Tn)).next((c=>c)))}))}bs(t,e){let n=new it(cu(t));return e.forEach(((i,o)=>{Or(t,o)&&(n=n.add(o))})),n}Ds(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ws(t,e,n){return be()<=Kt.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",De(e)),this.gs.getDocumentsMatchingQuery(t,e,se.min(),n)}vs(t,e,n,i){return this.gs.getDocumentsMatchingQuery(t,n,i).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="LocalStore",rd=3e8;class sd{constructor(t,e,n,i){this.persistence=t,this.Cs=e,this.serializer=i,this.Fs=new Y(U),this.Ms=new we((o=>Hs(o)),Xs),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(n)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new $h(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function id(r,t,e,n){return new sd(r,t,e,n)}async function Ou(r,t){const e=L(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next((o=>(i=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(n)))).next((o=>{const a=[],c=[];let h=q();for(const d of i){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function od(r,t){const e=L(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const i=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return(function(c,h,d,m){const y=d.batch,w=y.keys();let S=P.resolve();return w.forEach((D=>{S=S.next((()=>m.getEntry(h,D))).next((x=>{const b=d.docVersions.get(D);G(b!==null,48541),x.version.compareTo(b)<0&&(y.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),m.addEntry(x)))}))})),S.next((()=>c.mutationQueue.removeMutationBatch(h,y)))})(e,n,t,o).next((()=>o.apply(n))).next((()=>e.mutationQueue.performConsistencyCheck(n))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(c){let h=q();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(n,i)))}))}function Fu(r){const t=L(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function ad(r,t){const e=L(r),n=t.snapshotVersion;let i=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.Os.newChangeBuffer({trackRemovals:!0});i=e.Fs;const c=[];t.targetChanges.forEach(((m,y)=>{const w=i.get(y);if(!w)return;c.push(e.hi.removeMatchingKeys(o,m.removedDocuments,y).next((()=>e.hi.addMatchingKeys(o,m.addedDocuments,y))));let S=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?S=S.withResumeToken(dt.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,n)),i=i.insert(y,S),(function(x,b,B){return x.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=rd?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(w,S,m)&&c.push(e.hi.updateTargetData(o,S))}));let h=Wt(),d=q();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))})),c.push(ud(o,a,t.documentUpdates).next((m=>{h=m.Ls,d=m.ks}))),!n.isEqual(M.min())){const m=e.hi.getLastRemoteSnapshotVersion(o).next((y=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,n)));c.push(m)}return P.waitFor(c).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.Fs=i,o)))}function ud(r,t,e){let n=q(),i=q();return e.forEach((o=>n=n.add(o))),t.getEntries(r,n).next((o=>{let a=Wt();return e.forEach(((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(M.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):N(ii,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)})),{Ls:a,ks:i}}))}function ld(r,t){const e=L(r);return e.persistence.runTransaction("Get next mutation batch","readonly",(n=>(t===void 0&&(t=Qs),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t))))}function cd(r,t){const e=L(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return e.hi.getTargetData(n,t).next((o=>o?(i=o,P.resolve(i)):e.hi.allocateTargetId(n).next((a=>(i=new ee(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.hi.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=e.Fs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(n.targetId,n),e.Ms.set(t,n.targetId)),n}))}async function Os(r,t,e){const n=L(r),i=n.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,(a=>n.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!ze(a))throw a;N(ii,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Fs=n.Fs.remove(t),n.Ms.delete(i.target)}function ca(r,t,e){const n=L(r);let i=M.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,m){const y=L(h),w=y.Ms.get(m);return w!==void 0?P.resolve(y.Fs.get(w)):y.hi.getTargetData(d,m)})(n,a,Ft(t)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(a,c.targetId).next((h=>{o=h}))})).next((()=>n.Cs.getDocumentsMatchingQuery(a,t,e?i:M.min(),e?o:q()))).next((c=>(hd(n,Hc(t),c),{documents:c,qs:o})))))}function hd(r,t,e){let n=r.xs.get(t)||M.min();e.forEach(((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)})),r.xs.set(t,n)}class ha{constructor(){this.activeTargetIds=eh()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class dd{constructor(){this.Fo=new ha,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,n){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new ha,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{xo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="ConnectivityMonitor";class fa{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){N(da,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){N(da,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur=null;function Fs(){return ur===null?ur=(function(){return 268435456+Math.round(2147483648*Math.random())})():ur++,"0x"+ur.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="RestConnection",md={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pd{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${n}/databases/${i}`,this.Ko=this.databaseId.database===In?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(t,e,n,i,o){const a=Fs(),c=this.Go(t,e.toUriEncodedString());N(Ts,`Sending RPC '${t}' ${a}:`,c,n);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,i,o);const{host:d}=new URL(c),m=Bs(d);return this.jo(t,c,h,n,m).then((y=>(N(Ts,`Received RPC '${t}' ${a}: `,y),y)),(y=>{throw Qt(Ts,`RPC '${t}' ${a} failed with error: `,y,"url: ",c,"request:",n),y}))}Jo(t,e,n,i,o,a){return this.Wo(t,e,n,i,o)}zo(t,e,n){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Be})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),n&&n.headers.forEach(((i,o)=>t[o]=i))}Go(t,e){const n=md[t];return`${this.$o}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class _d extends pd{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,n,i,o){const a=Fs();return new Promise(((c,h)=>{const d=new Oa;d.setWithCredentials(!0),d.listenOnce(Fa.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case lr.NO_ERROR:const y=d.getResponseJson();N(_t,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(y)),c(y);break;case lr.TIMEOUT:N(_t,`RPC '${t}' ${a} timed out`),h(new C(R.DEADLINE_EXCEEDED,"Request time out"));break;case lr.HTTP_ERROR:const w=d.getStatus();if(N(_t,`RPC '${t}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const D=S?.error;if(D&&D.status&&D.message){const x=(function(B){const z=B.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(z)>=0?z:R.UNKNOWN})(D.status);h(new C(x,D.message))}else h(new C(R.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new C(R.UNAVAILABLE,"Connection failed."));break;default:F(9055,{c_:t,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{N(_t,`RPC '${t}' ${a} completed.`)}}));const m=JSON.stringify(i);N(_t,`RPC '${t}' ${a} sending request:`,i),d.send(e,"POST",m,n,15)}))}P_(t,e,n){const i=Fs(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ua(),c=Ma(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");N(_t,`Creating RPC '${t}' stream ${i}: ${m}`,h);const y=a.createWebChannel(m,h);this.T_(y);let w=!1,S=!1;const D=new gd({Ho:b=>{S?N(_t,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(w||(N(_t,`Opening RPC '${t}' stream ${i} transport.`),y.open(),w=!0),N(_t,`RPC '${t}' stream ${i} sending:`,b),y.send(b))},Yo:()=>y.close()}),x=(b,B,z)=>{b.listen(B,(K=>{try{z(K)}catch(ot){setTimeout((()=>{throw ot}),0)}}))};return x(y,dn.EventType.OPEN,(()=>{S||(N(_t,`RPC '${t}' stream ${i} transport opened.`),D.s_())})),x(y,dn.EventType.CLOSE,(()=>{S||(S=!0,N(_t,`RPC '${t}' stream ${i} transport closed`),D.__(),this.I_(y))})),x(y,dn.EventType.ERROR,(b=>{S||(S=!0,Qt(_t,`RPC '${t}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),D.__(new C(R.UNAVAILABLE,"The operation could not be completed")))})),x(y,dn.EventType.MESSAGE,(b=>{var B;if(!S){const z=b.data[0];G(!!z,16349);const K=z,ot=K?.error||((B=K[0])===null||B===void 0?void 0:B.error);if(ot){N(_t,`RPC '${t}' stream ${i} received error:`,ot);const jt=ot.status;let ut=(function(_){const E=et[_];if(E!==void 0)return vu(E)})(jt),v=ot.message;ut===void 0&&(ut=R.INTERNAL,v="Unknown error status: "+jt+" with message "+ot.message),S=!0,D.__(new C(ut,v)),y.close()}else N(_t,`RPC '${t}' stream ${i} received:`,z),D.a_(z)}})),x(c,La.STAT_EVENT,(b=>{b.stat===ws.PROXY?N(_t,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===ws.NOPROXY&&N(_t,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{D.o_()}),0),D}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function vs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(r){return new Th(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=n,this.E_=i,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),i=Math.max(0,e-n);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="PersistentStream";class Mu{constructor(t,e,n,i,o,a,c,h){this.Fi=t,this.w_=n,this.S_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Lu(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===R.RESOURCE_EXHAUSTED?(qt(e.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.b_===e&&this.W_(n,i)}),(n=>{t((()=>{const i=new C(R.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(i)}))}))}W_(t,e){const n=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.e_((()=>{n((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{n((()=>this.G_(i)))})),this.stream.onMessage((i=>{n((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return N(ma,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(N(ma,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class yd extends Mu{constructor(t,e,n,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=Ah(this.serializer,t),n=(function(o){if(!("targetChange"in o))return M.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?M.min():a.readTime?Lt(a.readTime):M.min()})(t);return this.listener.J_(e,n)}H_(t){const e={};e.database=xs(this.serializer),e.addTarget=(function(o,a){let c;const h=a.target;if(c=Cs(h)?{documents:Vh(o,h)}:{query:Su(o,h).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=wu(o,a.resumeToken);const d=Ds(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(M.min())>0){c.readTime=Ir(o,a.snapshotVersion.toTimestamp());const d=Ds(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,t);const n=Ch(this.serializer,t);n&&(e.labels=n),this.k_(e)}Y_(t){const e={};e.database=xs(this.serializer),e.removeTarget=t,this.k_(e)}}class Ed extends Mu{constructor(t,e,n,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return G(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,G(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){G(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=Rh(t.writeResults,t.commitTime),n=Lt(t.commitTime);return this.listener.ta(n,e)}na(){const t={};t.database=xs(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((n=>wh(this.serializer,n)))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{}class vd extends Td{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new C(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(t,Ns(e,n),i,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new C(R.UNKNOWN,o.toString())}))}Jo(t,e,n,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(t,Ns(e,n),i,a,c,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new C(R.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Id{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(qt(e),this._a=!1):N("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="RemoteStore";class Ad{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo((a=>{n.enqueueAndForget((async()=>{Re(this)&&(N(Ae,"Restarting streams for network reachability change."),await(async function(h){const d=L(h);d.Ia.add(4),await $e(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Dn(d)})(this))}))})),this.Aa=new Id(n,i)}}async function Dn(r){if(Re(r))for(const t of r.da)await t(!0)}async function $e(r){for(const t of r.da)await t(!1)}function Uu(r,t){const e=L(r);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),li(e)?ui(e):Ge(e).x_()&&ai(e,t))}function oi(r,t){const e=L(r),n=Ge(e);e.Ta.delete(t),n.x_()&&qu(e,t),e.Ta.size===0&&(n.x_()?n.B_():Re(e)&&e.Aa.set("Unknown"))}function ai(r,t){if(r.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(M.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ge(r).H_(t)}function qu(r,t){r.Ra.$e(t),Ge(r).Y_(t)}function ui(r){r.Ra=new gh({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>r.Ta.get(t)||null,lt:()=>r.datastore.serializer.databaseId}),Ge(r).start(),r.Aa.aa()}function li(r){return Re(r)&&!Ge(r).M_()&&r.Ta.size>0}function Re(r){return L(r).Ia.size===0}function Bu(r){r.Ra=void 0}async function wd(r){r.Aa.set("Online")}async function Rd(r){r.Ta.forEach(((t,e)=>{ai(r,t)}))}async function Vd(r,t){Bu(r),li(r)?(r.Aa.la(t),ui(r)):r.Aa.set("Unknown")}async function Pd(r,t,e){if(r.Aa.set("Online"),t instanceof Au&&t.state===2&&t.cause)try{await(async function(i,o){const a=o.cause;for(const c of o.targetIds)i.Ta.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.Ta.delete(c),i.Ra.removeTarget(c))})(r,t)}catch(n){N(Ae,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await wr(r,n)}else if(t instanceof fr?r.Ra.Ye(t):t instanceof Iu?r.Ra.it(t):r.Ra.et(t),!e.isEqual(M.min()))try{const n=await Fu(r.localStore);e.compareTo(n)>=0&&await(function(o,a){const c=o.Ra.Pt(a);return c.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ta.get(d);m&&o.Ta.set(d,m.withResumeToken(h.resumeToken,a))}})),c.targetMismatches.forEach(((h,d)=>{const m=o.Ta.get(h);if(!m)return;o.Ta.set(h,m.withResumeToken(dt.EMPTY_BYTE_STRING,m.snapshotVersion)),qu(o,h);const y=new ee(m.target,h,d,m.sequenceNumber);ai(o,y)})),o.remoteSyncer.applyRemoteEvent(c)})(r,e)}catch(n){N(Ae,"Failed to raise snapshot:",n),await wr(r,n)}}async function wr(r,t,e){if(!ze(t))throw t;r.Ia.add(1),await $e(r),r.Aa.set("Offline"),e||(e=()=>Fu(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{N(Ae,"Retrying IndexedDB access"),await e(),r.Ia.delete(1),await Dn(r)}))}function ju(r,t){return t().catch((e=>wr(r,e,t)))}async function Br(r){const t=L(r),e=ue(t);let n=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Qs;for(;Sd(t);)try{const i=await ld(t.localStore,n);if(i===null){t.Pa.length===0&&e.B_();break}n=i.batchId,Cd(t,i)}catch(i){await wr(t,i)}zu(t)&&$u(t)}function Sd(r){return Re(r)&&r.Pa.length<10}function Cd(r,t){r.Pa.push(t);const e=ue(r);e.x_()&&e.Z_&&e.X_(t.mutations)}function zu(r){return Re(r)&&!ue(r).M_()&&r.Pa.length>0}function $u(r){ue(r).start()}async function bd(r){ue(r).na()}async function Dd(r){const t=ue(r);for(const e of r.Pa)t.X_(e.mutations)}async function Nd(r,t,e){const n=r.Pa.shift(),i=Zs.from(n,t,e);await ju(r,(()=>r.remoteSyncer.applySuccessfulWrite(i))),await Br(r)}async function kd(r,t){t&&ue(r).Z_&&await(async function(n,i){if((function(a){return mh(a)&&a!==R.ABORTED})(i.code)){const o=n.Pa.shift();ue(n).N_(),await ju(n,(()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i))),await Br(n)}})(r,t),zu(r)&&$u(r)}async function pa(r,t){const e=L(r);e.asyncQueue.verifyOperationInProgress(),N(Ae,"RemoteStore received new credentials");const n=Re(e);e.Ia.add(3),await $e(e),n&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Dn(e)}async function xd(r,t){const e=L(r);t?(e.Ia.delete(2),await Dn(e)):t||(e.Ia.add(2),await $e(e),e.Aa.set("Unknown"))}function Ge(r){return r.Va||(r.Va=(function(e,n,i){const o=L(e);return o.ia(),new yd(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(r.datastore,r.asyncQueue,{Zo:wd.bind(null,r),e_:Rd.bind(null,r),n_:Vd.bind(null,r),J_:Pd.bind(null,r)}),r.da.push((async t=>{t?(r.Va.N_(),li(r)?ui(r):r.Aa.set("Unknown")):(await r.Va.stop(),Bu(r))}))),r.Va}function ue(r){return r.ma||(r.ma=(function(e,n,i){const o=L(e);return o.ia(),new Ed(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:bd.bind(null,r),n_:kd.bind(null,r),ea:Dd.bind(null,r),ta:Nd.bind(null,r)}),r.da.push((async t=>{t?(r.ma.N_(),await Br(r)):(await r.ma.stop(),r.Pa.length>0&&(N(Ae,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const a=Date.now()+n,c=new ci(t,e,a,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(R.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hi(r,t){if(qt("AsyncQueue",`${t}: ${r}`),ze(r))return new C(R.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{static emptySet(t){return new xe(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||O.comparator(e.key,n.key):(e,n)=>O.comparator(e.key,n.key),this.keyedMap=fn(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof xe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new xe;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this.fa=new Y(O.comparator)}track(t){const e=t.doc.key,n=this.fa.get(e);n?t.type!==0&&n.type===3?this.fa=this.fa.insert(e,t):t.type===3&&n.type!==1?this.fa=this.fa.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.fa=this.fa.remove(e):t.type===1&&n.type===2?this.fa=this.fa.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):F(63341,{At:t,ga:n}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,n)=>{t.push(n)})),t}}class qe{constructor(t,e,n,i,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const a=[];return e.forEach((c=>{a.push({type:0,doc:c})})),new qe(t,e,xe.emptySet(e),a,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class Fd{constructor(){this.queries=_a(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,n){const i=L(e),o=i.queries;i.queries=_a(),o.forEach(((a,c)=>{for(const h of c.wa)h.onError(n)}))})(this,new C(R.ABORTED,"Firestore shutting down"))}}function _a(){return new we((r=>lu(r)),xr)}async function di(r,t){const e=L(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.Sa()&&t.ba()&&(n=2):(o=new Od,n=t.ba()?0:1);try{switch(n){case 0:o.ya=await e.onListen(i,!0);break;case 1:o.ya=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const c=hi(a,`Initialization of query '${De(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&mi(e)}async function fi(r,t){const e=L(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const a=o.wa.indexOf(t);a>=0&&(o.wa.splice(a,1),o.wa.length===0?i=t.ba()?0:1:!o.Sa()&&t.ba()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Ld(r,t){const e=L(r);let n=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const c of a.wa)c.Ca(i)&&(n=!0);a.ya=i}}n&&mi(e)}function Md(r,t,e){const n=L(r),i=n.queries.get(t);if(i)for(const o of i.wa)o.onError(e);n.queries.delete(t)}function mi(r){r.Da.forEach((t=>{t.next()}))}var Ls,ya;(ya=Ls||(Ls={})).Fa="default",ya.Cache="cache";class pi{constructor(t,e,n){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new qe(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const n=e!=="Offline";return(!this.options.ka||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=qe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==Ls.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t){this.key=t}}class Ku{constructor(t){this.key=t}}class Ud{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=q(),this.mutatedKeys=q(),this.Xa=cu(t),this.eu=new xe(this.Xa)}get tu(){return this.Ha}nu(t,e){const n=e?e.ru:new ga,i=e?e.eu:this.eu;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((m,y)=>{const w=i.get(m),S=Or(this.query,y)?y:null,D=!!w&&this.mutatedKeys.has(w.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let b=!1;w&&S?w.data.isEqual(S.data)?D!==x&&(n.track({type:3,doc:S}),b=!0):this.iu(w,S)||(n.track({type:2,doc:S}),b=!0,(h&&this.Xa(S,h)>0||d&&this.Xa(S,d)<0)&&(c=!0)):!w&&S?(n.track({type:0,doc:S}),b=!0):w&&!S&&(n.track({type:1,doc:w}),b=!0,(h||d)&&(c=!0)),b&&(S?(a=a.add(S),o=x?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{eu:a,ru:n,Ds:c,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const a=t.ru.pa();a.sort(((m,y)=>(function(S,D){const x=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{At:b})}};return x(S)-x(D)})(m.type,y.type)||this.Xa(m.doc,y.doc))),this.su(n),i=i!=null&&i;const c=e&&!i?this.ou():[],h=this.Za.size===0&&this.current&&!i?1:0,d=h!==this.Ya;return this.Ya=h,a.length!==0||d?{snapshot:new qe(this.query,t.eu,o,a,t.mutatedKeys,h===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ga,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=q(),this.eu.forEach((n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))}));const e=[];return t.forEach((n=>{this.Za.has(n)||e.push(new Ku(n))})),this.Za.forEach((n=>{t.has(n)||e.push(new Gu(n))})),e}uu(t){this.Ha=t.qs,this.Za=q();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return qe.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const gi="SyncEngine";class qd{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Bd{constructor(t){this.key=t,this.lu=!1}}class jd{constructor(t,e,n,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new we((c=>lu(c)),xr),this.Tu=new Map,this.Iu=new Set,this.du=new Y(O.comparator),this.Eu=new Map,this.Au=new ni,this.Ru={},this.Vu=new Map,this.mu=Ue.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function zd(r,t,e=!0){const n=Ju(r);let i;const o=n.Pu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.cu()):i=await Qu(n,t,e,!0),i}async function $d(r,t){const e=Ju(r);await Qu(e,t,!0,!1)}async function Qu(r,t,e,n){const i=await cd(r.localStore,Ft(t)),o=i.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await Gd(r,t,o,a==="current",i.resumeToken)),r.isPrimaryClient&&e&&Uu(r.remoteStore,i),c}async function Gd(r,t,e,n,i){r.gu=(y,w,S)=>(async function(x,b,B,z){let K=b.view.nu(B);K.Ds&&(K=await ca(x.localStore,b.query,!1).then((({documents:v})=>b.view.nu(v,K))));const ot=z&&z.targetChanges.get(b.targetId),jt=z&&z.targetMismatches.get(b.targetId)!=null,ut=b.view.applyChanges(K,x.isPrimaryClient,ot,jt);return Ta(x,b.targetId,ut._u),ut.snapshot})(r,y,w,S);const o=await ca(r.localStore,t,!0),a=new Ud(t,o.qs),c=a.nu(o.documents),h=bn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=a.applyChanges(c,r.isPrimaryClient,h);Ta(r,e,d._u);const m=new qd(t,e,a);return r.Pu.set(t,m),r.Tu.has(e)?r.Tu.get(e).push(t):r.Tu.set(e,[t]),d.snapshot}async function Kd(r,t,e){const n=L(r),i=n.Pu.get(t),o=n.Tu.get(i.targetId);if(o.length>1)return n.Tu.set(i.targetId,o.filter((a=>!xr(a,t)))),void n.Pu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Os(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),e&&oi(n.remoteStore,i.targetId),Ms(n,i.targetId)})).catch(je)):(Ms(n,i.targetId),await Os(n.localStore,i.targetId,!0))}async function Qd(r,t){const e=L(r),n=e.Pu.get(t),i=e.Tu.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),oi(e.remoteStore,n.targetId))}async function Wd(r,t,e){const n=ef(r);try{const i=await(function(a,c){const h=L(a),d=X.now(),m=c.reduce(((S,D)=>S.add(D.key)),q());let y,w;return h.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let D=Wt(),x=q();return h.Os.getEntries(S,m).next((b=>{D=b,D.forEach(((B,z)=>{z.isValidDocument()||(x=x.add(B))}))})).next((()=>h.localDocuments.getOverlayedDocuments(S,D))).next((b=>{y=b;const B=[];for(const z of c){const K=uh(z,y.get(z.key).overlayedDocument);K!=null&&B.push(new he(z.key,K,eu(K.value.mapValue),It.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,B,c)})).next((b=>{w=b;const B=b.applyToLocalDocumentSet(y,x);return h.documentOverlayCache.saveOverlays(S,b.batchId,B)}))})).then((()=>({batchId:w.batchId,changes:du(y)})))})(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),(function(a,c,h){let d=a.Ru[a.currentUser.toKey()];d||(d=new Y(U)),d=d.insert(c,h),a.Ru[a.currentUser.toKey()]=d})(n,i.batchId,e),await Nn(n,i.changes),await Br(n.remoteStore)}catch(i){const o=hi(i,"Failed to persist write");e.reject(o)}}async function Wu(r,t){const e=L(r);try{const n=await ad(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const a=e.Eu.get(o);a&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?G(a.lu,14607):i.removedDocuments.size>0&&(G(a.lu,42227),a.lu=!1))})),await Nn(e,n,t)}catch(n){await je(n)}}function Ea(r,t,e){const n=L(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Pu.forEach(((o,a)=>{const c=a.view.va(t);c.snapshot&&i.push(c.snapshot)})),(function(a,c){const h=L(a);h.onlineState=c;let d=!1;h.queries.forEach(((m,y)=>{for(const w of y.wa)w.va(c)&&(d=!0)})),d&&mi(h)})(n.eventManager,t),i.length&&n.hu.J_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Hd(r,t,e){const n=L(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Eu.get(t),o=i&&i.key;if(o){let a=new Y(O.comparator);a=a.insert(o,Et.newNoDocument(o,M.min()));const c=q().add(o),h=new Ur(M.min(),new Map,new Y(U),a,c);await Wu(n,h),n.du=n.du.remove(o),n.Eu.delete(t),_i(n)}else await Os(n.localStore,t,!1).then((()=>Ms(n,t,e))).catch(je)}async function Xd(r,t){const e=L(r),n=t.batch.batchId;try{const i=await od(e.localStore,t);Xu(e,n,null),Hu(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Nn(e,i)}catch(i){await je(i)}}async function Yd(r,t,e){const n=L(r);try{const i=await(function(a,c){const h=L(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next((y=>(G(y!==null,37113),m=y.keys(),h.mutationQueue.removeMutationBatch(d,y)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>h.localDocuments.getDocuments(d,m)))}))})(n.localStore,t);Xu(n,t,e),Hu(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Nn(n,i)}catch(i){await je(i)}}function Hu(r,t){(r.Vu.get(t)||[]).forEach((e=>{e.resolve()})),r.Vu.delete(t)}function Xu(r,t,e){const n=L(r);let i=n.Ru[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Ru[n.currentUser.toKey()]=i}}function Ms(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Tu.get(t))r.Pu.delete(n),e&&r.hu.pu(n,e);r.Tu.delete(t),r.isPrimaryClient&&r.Au.zr(t).forEach((n=>{r.Au.containsKey(n)||Yu(r,n)}))}function Yu(r,t){r.Iu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(oi(r.remoteStore,e),r.du=r.du.remove(t),r.Eu.delete(e),_i(r))}function Ta(r,t,e){for(const n of e)n instanceof Gu?(r.Au.addReference(n.key,t),Jd(r,n)):n instanceof Ku?(N(gi,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,t),r.Au.containsKey(n.key)||Yu(r,n.key)):F(19791,{yu:n})}function Jd(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Iu.has(n)||(N(gi,"New document in limbo: "+e),r.Iu.add(n),_i(r))}function _i(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Iu.values().next().value;r.Iu.delete(t);const e=new O(Q.fromString(t)),n=r.mu.next();r.Eu.set(n,new Bd(e)),r.du=r.du.insert(e,n),Uu(r.remoteStore,new ee(Ft(kr(e.path)),n,"TargetPurposeLimboResolution",Cr.ue))}}async function Nn(r,t,e){const n=L(r),i=[],o=[],a=[];n.Pu.isEmpty()||(n.Pu.forEach(((c,h)=>{a.push(n.gu(h,t,e).then((d=>{var m;if((d||e)&&n.isPrimaryClient){const y=d?!d.fromCache:(m=e?.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){i.push(d);const y=si.Es(h.targetId,d);o.push(y)}})))})),await Promise.all(a),n.hu.J_(i),await(async function(h,d){const m=L(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>P.forEach(d,(w=>P.forEach(w.Is,(S=>m.persistence.referenceDelegate.addReference(y,w.targetId,S))).next((()=>P.forEach(w.ds,(S=>m.persistence.referenceDelegate.removeReference(y,w.targetId,S)))))))))}catch(y){if(!ze(y))throw y;N(ii,"Failed to update sequence numbers: "+y)}for(const y of d){const w=y.targetId;if(!y.fromCache){const S=m.Fs.get(w),D=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(D);m.Fs=m.Fs.insert(w,x)}}})(n.localStore,o))}async function Zd(r,t){const e=L(r);if(!e.currentUser.isEqual(t)){N(gi,"User change. New user:",t.toKey());const n=await Ou(e.localStore,t);e.currentUser=t,(function(o,a){o.Vu.forEach((c=>{c.forEach((h=>{h.reject(new C(R.CANCELLED,a))}))})),o.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Nn(e,n.Bs)}}function tf(r,t){const e=L(r),n=e.Eu.get(t);if(n&&n.lu)return q().add(n.key);{let i=q();const o=e.Tu.get(t);if(!o)return i;for(const a of o){const c=e.Pu.get(a);i=i.unionWith(c.view.tu)}return i}}function Ju(r){const t=L(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=tf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Hd.bind(null,t),t.hu.J_=Ld.bind(null,t.eventManager),t.hu.pu=Md.bind(null,t.eventManager),t}function ef(r){const t=L(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Xd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Yd.bind(null,t),t}class Rr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=qr(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return id(this.persistence,new nd,t.initialUser,this.serializer)}Du(t){return new xu(ri.Vi,this.serializer)}bu(t){return new dd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rr.provider={build:()=>new Rr};class nf extends Rr{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){G(this.persistence.referenceDelegate instanceof Ar,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Uh(n,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new xu((n=>Ar.Vi(n,e)),this.serializer)}}class Us{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ea(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zd.bind(null,this.syncEngine),await xd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Fd})()}createDatastore(t){const e=qr(t.databaseInfo.databaseId),n=(function(o){return new _d(o)})(t.databaseInfo);return(function(o,a,c,h){return new vd(o,a,c,h)})(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,i,o,a,c){return new Ad(n,i,o,a,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>Ea(this.syncEngine,e,0)),(function(){return fa.C()?new fa:new fd})())}createSyncEngine(t,e){return(function(i,o,a,c,h,d,m){const y=new jd(i,o,a,c,h,d);return m&&(y.fu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(i){const o=L(i);N(Ae,"RemoteStore shutting down."),o.Ia.add(5),await $e(o),o.Ea.shutdown(),o.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Us.provider={build:()=>new Us};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):qt("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="FirestoreClient";class rf{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=zs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,(async a=>{N(le,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(N(le,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=hi(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Is(r,t){r.asyncQueue.verifyOperationInProgress(),N(le,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async i=>{n.isEqual(i)||(await Ou(t.localStore,i),n=i)})),t.persistence.setDatabaseDeletedListener((()=>{Qt("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{N("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{Qt("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),r._offlineComponents=t}async function va(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Zu(r);N(le,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>pa(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,i)=>pa(t.remoteStore,i))),r._onlineComponents=t}async function Zu(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(le,"Using user provided OfflineComponentProvider");try{await Is(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===R.FAILED_PRECONDITION||i.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;Qt("Error using user provided cache. Falling back to memory cache: "+e),await Is(r,new Rr)}}else N(le,"Using default OfflineComponentProvider"),await Is(r,new nf(void 0));return r._offlineComponents}async function jr(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(le,"Using user provided OnlineComponentProvider"),await va(r,r._uninitializedComponentsProvider._online)):(N(le,"Using default OnlineComponentProvider"),await va(r,new Us))),r._onlineComponents}function tl(r){return Zu(r).then((t=>t.persistence))}function el(r){return jr(r).then((t=>t.remoteStore))}function sf(r){return jr(r).then((t=>t.syncEngine))}function of(r){return jr(r).then((t=>t.datastore))}async function Vr(r){const t=await jr(r),e=t.eventManager;return e.onListen=zd.bind(null,t.syncEngine),e.onUnlisten=Kd.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=$d.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Qd.bind(null,t.syncEngine),e}function af(r){return r.asyncQueue.enqueue((async()=>{const t=await tl(r),e=await el(r);return t.setNetworkEnabled(!0),(function(i){const o=L(i);return o.Ia.delete(0),Dn(o)})(e)}))}function uf(r){return r.asyncQueue.enqueue((async()=>{const t=await tl(r),e=await el(r);return t.setNetworkEnabled(!1),(async function(i){const o=L(i);o.Ia.add(0),await $e(o),o.Aa.set("Offline")})(e)}))}function lf(r,t,e={}){const n=new Dt;return r.asyncQueue.enqueueAndForget((async()=>(function(o,a,c,h,d){const m=new yi({next:w=>{m.Ou(),a.enqueueAndForget((()=>fi(o,y)));const S=w.docs.has(c);!S&&w.fromCache?d.reject(new C(R.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&h&&h.source==="server"?d.reject(new C(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new pi(kr(c.path),m,{includeMetadataChanges:!0,ka:!0});return di(o,y)})(await Vr(r),r.asyncQueue,t,e,n))),n.promise}function cf(r,t,e={}){const n=new Dt;return r.asyncQueue.enqueueAndForget((async()=>(function(o,a,c,h,d){const m=new yi({next:w=>{m.Ou(),a.enqueueAndForget((()=>fi(o,y))),w.fromCache&&h.source==="server"?d.reject(new C(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new pi(c,m,{includeMetadataChanges:!0,ka:!0});return di(o,y)})(await Vr(r),r.asyncQueue,t,e,n))),n.promise}function hf(r,t,e){const n=new Dt;return r.asyncQueue.enqueueAndForget((async()=>{try{const i=await of(r);n.resolve((async function(a,c,h){var d;const m=L(a),{request:y,ft:w,parent:S}=Ph(m.serializer,Wc(c),h);m.connection.Qo||delete y.parent;const D=(await m.Jo("RunAggregationQuery",m.serializer.databaseId,S,y,1)).filter((b=>!!b.result));G(D.length===1,64727);const x=(d=D[0].result)===null||d===void 0?void 0:d.aggregateFields;return Object.keys(x).reduce(((b,B)=>(b[w[B]]=x[B],b)),{})})(i,t,e))}catch(i){n.reject(i)}})),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="firestore.googleapis.com",Aa=!0;class wa{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new C(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rl,this.ssl=Aa}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Aa;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Nu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ku)throw new C(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Tc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nl((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new C(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new C(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new C(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class kn{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new C(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new C(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wa(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new hc;switch(n.type){case"firstParty":return new pc(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=Ia.get(e);n&&(N("ComponentProvider","Removing Datastore"),Ia.delete(e),n.terminate())})(this),Promise.resolve()}}function df(r,t,e,n={}){var i;r=st(r,kn);const o=Bs(t),a=r._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:r._getEmulatorOptions()}),h=`${t}:${e}`;o&&(ka(`https://${h}`),ec("Firestore",!0)),a.host!==rl&&a.host!==h&&Qt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:n});if(!Na(d,c)&&(r._setSettings(d),n.mockUserToken)){let m,y;if(typeof n.mockUserToken=="string")m=n.mockUserToken,y=yt.MOCK_USER;else{m=nc(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const w=n.mockUserToken.sub||n.mockUserToken.user_id;if(!w)throw new C(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new yt(w)}r._authCredentials=new dc(new Ba(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Nt(this.firestore,t,this._query)}}class Z{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new re(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Z(this.firestore,t,this._key)}toJSON(){return{type:Z._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(Sn(e,Z._jsonSchema))return new Z(t,n||null,new O(Q.fromString(e.referencePath)))}}Z._jsonSchemaVersion="firestore/documentReference/1.0",Z._jsonSchema={type:rt("string",Z._jsonSchemaVersion),referencePath:rt("string")};class re extends Nt{constructor(t,e,n){super(t,e,kr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Z(this.firestore,null,new O(t))}withConverter(t){return new re(this.firestore,t,this._path)}}function Cf(r,t,...e){if(r=St(r),$s("collection","path",t),r instanceof kn){const n=Q.fromString(t,...e);return Lo(n),new re(r,null,n)}{if(!(r instanceof Z||r instanceof re))throw new C(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Q.fromString(t,...e));return Lo(n),new re(r.firestore,null,n)}}function bf(r,t){if(r=st(r,kn),$s("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new C(R.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Nt(r,null,(function(n){return new Ht(Q.emptyPath(),n)})(t))}function ff(r,t,...e){if(r=St(r),arguments.length===1&&(t=zs.newId()),$s("doc","path",t),r instanceof kn){const n=Q.fromString(t,...e);return Fo(n),new Z(r,null,new O(n))}{if(!(r instanceof Z||r instanceof re))throw new C(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Q.fromString(t,...e));return Fo(n),new Z(r.firestore,r instanceof re?r.converter:null,new O(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="AsyncQueue";class Va{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Lu(this,"async_queue_retry"),this.oc=()=>{const n=vs();n&&N(Ra,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=t;const e=vs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=vs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new Dt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!ze(t))throw t;N(Ra,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((n=>{throw this.tc=n,this.nc=!1,qt("INTERNAL UNHANDLED ERROR: ",Pa(n)),n})).then((n=>(this.nc=!1,n))))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const i=ci.createAndSchedule(this,t,e,n,(o=>this.lc(o)));return this.ec.push(i),i}ac(){this.tc&&F(47125,{hc:Pa(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function Pa(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(r){return(function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1})(r,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=-1;class Ct extends kn{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Va,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Va(t),this._firestoreClient=void 0,await t}}}function Nf(r,t,e){e||(e=In);const n=Da(r,"firestore");if(n.isInitialized(e)){const i=n.getImmediate({identifier:e}),o=n.getOptions(e);if(Na(o,t))return i;throw new C(R.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new C(R.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ku)throw new C(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.host&&Bs(t.host)&&ka(t.host),n.initialize({options:t,instanceIdentifier:e})}function kf(r,t){const e=Zl(),n=In,i=Da(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=tc("firestore");o&&df(i,...o)}return i}function de(r){if(r._terminated)throw new C(R.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||mf(r),r._firestoreClient}function mf(r){var t,e,n;const i=r._freezeSettings(),o=(function(c,h,d,m){return new kc(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,nl(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new rf(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&(function(c){const h=c?._online.build();return{_offline:c?._offline.build(h),_online:h}})(r._componentsProvider))}function xf(r){if(r._initialized&&!r._terminated)throw new C(R.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Dt;return r._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(n){if(!Ee.C())return Promise.resolve();const i=n+Zh;await Ee.delete(i)})(td(r._databaseId,r._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function Of(r){return af(de(r=st(r,Ct)))}function Ff(r){return uf(de(r=st(r,Ct)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class gf{constructor(t,e,n){this._userDataWriter=e,this._data=n,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bt(dt.fromBase64String(t))}catch(e){throw new C(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new bt(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Sn(t,bt._jsonSchema))return bt.fromBase64String(t.bytes)}}bt._jsonSchemaVersion="firestore/bytes/1.0",bt._jsonSchema={type:rt("string",bt._jsonSchemaVersion),bytes:rt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new C(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new C(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new C(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mt._jsonSchemaVersion}}static fromJSON(t){if(Sn(t,Mt._jsonSchema))return new Mt(t.latitude,t.longitude)}}Mt._jsonSchemaVersion="firestore/geoPoint/1.0",Mt._jsonSchema={type:rt("string",Mt._jsonSchemaVersion),latitude:rt("number"),longitude:rt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ut._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Sn(t,Ut._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Ut(t.vectorValues);throw new C(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ut._jsonSchemaVersion="firestore/vectorValue/1.0",Ut._jsonSchema={type:rt("string",Ut._jsonSchemaVersion),vectorValues:rt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=/^__.*__$/;class yf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new he(t,this.data,this.fieldMask,e,this.fieldTransforms):new Cn(t,this.data,e,this.fieldTransforms)}}class sl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new he(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function il(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{Ec:r})}}class Ti{constructor(t,e,n,i,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new Ti(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Rc({path:n,mc:!1});return i.fc(t),i}gc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Rc({path:n,mc:!1});return i.Ac(),i}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return Pr(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(il(this.Ec)&&_f.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class Ef{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||qr(t)}Dc(t,e,n,i=!1){return new Ti({Ec:t,methodName:e,bc:n,path:ht.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ke(r){const t=r._freezeSettings(),e=qr(r._databaseId);return new Ef(r._databaseId,!!t.ignoreUndefinedProperties,e)}function vi(r,t,e,n,i,o={}){const a=r.Dc(o.merge||o.mergeFields?2:0,t,e,i);Ii("Data must be an object, but it was:",a,n);const c=ll(n,a);let h,d;if(o.merge)h=new Pt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const y of o.mergeFields){const w=qs(t,y,e);if(!a.contains(w))throw new C(R.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);hl(m,w)||m.push(w)}h=new Pt(m),d=a.fieldTransforms.filter((y=>h.covers(y.field)))}else h=null,d=a.fieldTransforms;return new yf(new wt(c),h,d)}class zr extends Ei{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof zr}}function ol(r,t,e,n){const i=r.Dc(1,t,e);Ii("Data must be an object, but it was:",i,n);const o=[],a=wt.empty();ce(n,((h,d)=>{const m=Ai(t,h,e);d=St(d);const y=i.gc(m);if(d instanceof zr)o.push(m);else{const w=On(d,y);w!=null&&(o.push(m),a.set(m,w))}}));const c=new Pt(o);return new sl(a,c,i.fieldTransforms)}function al(r,t,e,n,i,o){const a=r.Dc(1,t,e),c=[qs(t,n,e)],h=[i];if(o.length%2!=0)throw new C(R.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)c.push(qs(t,o[w])),h.push(o[w+1]);const d=[],m=wt.empty();for(let w=c.length-1;w>=0;--w)if(!hl(d,c[w])){const S=c[w];let D=h[w];D=St(D);const x=a.gc(S);if(D instanceof zr)d.push(S);else{const b=On(D,x);b!=null&&(d.push(S),m.set(S,b))}}const y=new Pt(d);return new sl(m,y,a.fieldTransforms)}function ul(r,t,e,n=!1){return On(e,r.Dc(n?4:3,t))}function On(r,t){if(cl(r=St(r)))return Ii("Unsupported field value:",t,r),ll(r,t);if(r instanceof Ei)return(function(n,i){if(!il(i.Ec))throw i.wc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(n,i){const o=[];let a=0;for(const c of n){let h=On(c,i.yc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(r,t)}return(function(n,i){if((n=St(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return nh(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=X.fromDate(n);return{timestampValue:Ir(i.serializer,o)}}if(n instanceof X){const o=new X(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ir(i.serializer,o)}}if(n instanceof Mt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof bt)return{bytesValue:wu(i.serializer,n._byteString)};if(n instanceof Z){const o=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ei(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Ut)return(function(a,c){return{mapValue:{fields:{[Za]:{stringValue:tu},[_r]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return Js(c.serializer,d)}))}}}}}})(n,i);throw i.wc(`Unsupported field value: ${Sr(n)}`)})(r,t)}function ll(r,t){const e={};return Qa(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ce(r,((n,i)=>{const o=On(i,t.Vc(n));o!=null&&(e[n]=o)})),{mapValue:{fields:e}}}function cl(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof X||r instanceof Mt||r instanceof bt||r instanceof Z||r instanceof Ei||r instanceof Ut)}function Ii(r,t,e){if(!cl(e)||!za(e)){const n=Sr(e);throw n==="an object"?t.wc(r+" a custom object"):t.wc(r+" "+n)}}function qs(r,t,e){if((t=St(t))instanceof xn)return t._internalPath;if(typeof t=="string")return Ai(r,t);throw Pr("Field path arguments must be of type string or ",r,!1,void 0,e)}const Tf=new RegExp("[~\\*/\\[\\]]");function Ai(r,t,e){if(t.search(Tf)>=0)throw Pr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new xn(...t.split("."))._internalPath}catch{throw Pr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Pr(r,t,e,n,i){const o=n&&!n.isEmpty(),a=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${i}`),h+=")"),new C(R.INVALID_ARGUMENT,c+r+h)}function hl(r,t){return r.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Z(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new vf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field($r("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class vf extends wi{data(){return super.data()}}function $r(r,t){return typeof t=="string"?Ai(r,t):t instanceof xn?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new C(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ri{}class Fn extends Ri{}function Lf(r,t,...e){let n=[];t instanceof Ri&&n.push(t),n=n.concat(e),(function(o){const a=o.filter((h=>h instanceof Qe)).length,c=o.filter((h=>h instanceof Ln)).length;if(a>1||a>0&&c>0)throw new C(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const i of n)r=i._apply(r);return r}class Ln extends Fn{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Ln(t,e,n)}_apply(t){const e=this._parse(t);return ml(t._query,e),new Nt(t.firestore,t.converter,bs(t._query,e))}_parse(t){const e=Ke(t.firestore);return(function(o,a,c,h,d,m,y){let w;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new C(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){ba(y,m);const D=[];for(const x of y)D.push(Ca(h,o,x));w={arrayValue:{values:D}}}else w=Ca(h,o,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||ba(y,m),w=ul(c,a,y,m==="in"||m==="not-in");return nt.create(d,m,w)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Mf(r,t,e){const n=t,i=$r("where",r);return Ln._create(i,n,e)}class Qe extends Ri{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Qe(t,e)}_parse(t){const e=this._queryConstraints.map((n=>n._parse(t))).filter((n=>n.getFilters().length>0));return e.length===1?e[0]:xt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(i,o){let a=i;const c=o.getFlattenedFilters();for(const h of c)ml(a,h),a=bs(a,h)})(t._query,e),new Nt(t.firestore,t.converter,bs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Uf(...r){return r.forEach((t=>pl("or",t))),Qe._create("or",r)}function qf(...r){return r.forEach((t=>pl("and",t))),Qe._create("and",r)}class Vi extends Fn{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Vi(t,e)}_apply(t){const e=(function(i,o,a){if(i.startAt!==null)throw new C(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new C(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Rn(o,a)})(t._query,this._field,this._direction);return new Nt(t.firestore,t.converter,(function(i,o){const a=i.explicitOrderBy.concat([o]);return new Ht(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(t._query,e))}}function Bf(r,t="asc"){const e=t,n=$r("orderBy",r);return Vi._create(n,e)}class Gr extends Fn{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new Gr(t,e,n)}_apply(t){return new Nt(t.firestore,t.converter,Er(t._query,this._limit,this._limitType))}}function jf(r){return $a("limit",r),Gr._create("limit",r,"F")}function zf(r){return $a("limitToLast",r),Gr._create("limitToLast",r,"L")}class Kr extends Fn{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Kr(t,e,n)}_apply(t){const e=fl(t,this.type,this._docOrFields,this._inclusive);return new Nt(t.firestore,t.converter,(function(i,o){return new Ht(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,o,i.endAt)})(t._query,e))}}function $f(...r){return Kr._create("startAt",r,!0)}function Gf(...r){return Kr._create("startAfter",r,!1)}class Qr extends Fn{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Qr(t,e,n)}_apply(t){const e=fl(t,this.type,this._docOrFields,this._inclusive);return new Nt(t.firestore,t.converter,(function(i,o){return new Ht(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,o)})(t._query,e))}}function Kf(...r){return Qr._create("endBefore",r,!1)}function Qf(...r){return Qr._create("endAt",r,!0)}function fl(r,t,e,n){if(e[0]=St(e[0]),e[0]instanceof wi)return(function(o,a,c,h,d){if(!h)throw new C(R.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const m=[];for(const y of ke(o))if(y.field.isKeyField())m.push(yr(a,h.key));else{const w=h.data.field(y.field);if(Dr(w))throw new C(R.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+y.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const S=y.field.canonicalString();throw new C(R.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${S}' (used as the orderBy) does not exist.`)}m.push(w)}return new Me(m,d)})(r._query,r.firestore._databaseId,t,e[0]._document,n);{const i=Ke(r.firestore);return(function(a,c,h,d,m,y){const w=a.explicitOrderBy;if(m.length>w.length)throw new C(R.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const S=[];for(let D=0;D<m.length;D++){const x=m[D];if(w[D].field.isKeyField()){if(typeof x!="string")throw new C(R.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof x}`);if(!Ys(a)&&x.indexOf("/")!==-1)throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${x}' contains a slash.`);const b=a.path.child(Q.fromString(x));if(!O.isDocumentKey(b))throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const B=new O(b);S.push(yr(c,B))}else{const b=ul(h,d,x);S.push(b)}}return new Me(S,y)})(r._query,r.firestore._databaseId,i,t,e,n)}}function Ca(r,t,e){if(typeof(e=St(e))=="string"){if(e==="")throw new C(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ys(t)&&e.indexOf("/")!==-1)throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(Q.fromString(e));if(!O.isDocumentKey(n))throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return yr(r,new O(n))}if(e instanceof Z)return yr(r,e._key);throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sr(e)}.`)}function ba(r,t){if(!Array.isArray(r)||r.length===0)throw new C(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ml(r,t){const e=(function(i,o){for(const a of i)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null})(r.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new C(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new C(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function pl(r,t){if(!(t instanceof Ln||t instanceof Qe))throw new C(R.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class If{convertValue(t,e="none"){switch(ae(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(oe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw F(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ce(t,((i,o)=>{n[i]=this.convertValue(o,e)})),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e[_r].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map((a=>tt(a.doubleValue)));return new Ut(o)}convertGeoPoint(t){return new Mt(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Nr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(vn(t));default:return null}}convertTimestamp(t){const e=ie(t);return new X(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Q.fromString(t);G(Du(n),9688,{name:t});const i=new An(n.get(1),n.get(3)),o=new O(n.popFirst(5));return i.isEqual(e)||qt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}function Af(){return new pf("count")}class pn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Te extends wi{constructor(t,e,n,i,o,a){super(t,e,n,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new mr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field($r("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new C(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Te._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Te._jsonSchemaVersion="firestore/documentSnapshot/1.0",Te._jsonSchema={type:rt("string",Te._jsonSchemaVersion),bundleSource:rt("string","DocumentSnapshot"),bundleName:rt("string"),bundle:rt("string")};class mr extends Te{data(t={}){return super.data(t)}}class ve{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new pn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new mr(this._firestore,this._userDataWriter,n.key,n,new pn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new C(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((c=>{const h=new mr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new pn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const h=new mr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new pn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:wf(c.type),doc:h,oldIndex:d,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new C(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=ve._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=zs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function wf(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(r){r=st(r,Z);const t=st(r.firestore,Ct);return lf(de(t),r._key).then((e=>gl(t,r,e)))}ve._jsonSchemaVersion="firestore/querySnapshot/1.0",ve._jsonSchema={type:rt("string",ve._jsonSchemaVersion),bundleSource:rt("string","QuerySnapshot"),bundleName:rt("string"),bundle:rt("string")};class Wr extends If{constructor(t){super(),this.firestore=t}convertBytes(t){return new bt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Z(this.firestore,null,e)}}function Hf(r){r=st(r,Nt);const t=st(r.firestore,Ct),e=de(t),n=new Wr(t);return dl(r._query),cf(e,r._query).then((i=>new ve(t,n,r,i)))}function Xf(r,t,e){r=st(r,Z);const n=st(r.firestore,Ct),i=Pi(r.converter,t,e);return Mn(n,[vi(Ke(n),"setDoc",r._key,i,r.converter!==null,e).toMutation(r._key,It.none())])}function Yf(r,t,e,...n){r=st(r,Z);const i=st(r.firestore,Ct),o=Ke(i);let a;return a=typeof(t=St(t))=="string"||t instanceof xn?al(o,"updateDoc",r._key,t,e,n):ol(o,"updateDoc",r._key,t),Mn(i,[a.toMutation(r._key,It.exists(!0))])}function Jf(r){return Mn(st(r.firestore,Ct),[new Mr(r._key,It.none())])}function Zf(r,t){const e=st(r.firestore,Ct),n=ff(r),i=Pi(r.converter,t);return Mn(e,[vi(Ke(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,It.exists(!1))]).then((()=>n))}function tm(r,...t){var e,n,i;r=St(r);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Sa(t[a])||(o=t[a++]);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Sa(t[a])){const y=t[a];t[a]=(e=y.next)===null||e===void 0?void 0:e.bind(y),t[a+1]=(n=y.error)===null||n===void 0?void 0:n.bind(y),t[a+2]=(i=y.complete)===null||i===void 0?void 0:i.bind(y)}let h,d,m;if(r instanceof Z)d=st(r.firestore,Ct),m=kr(r._key.path),h={next:y=>{t[a]&&t[a](gl(d,r,y))},error:t[a+1],complete:t[a+2]};else{const y=st(r,Nt);d=st(y.firestore,Ct),m=y._query;const w=new Wr(d);h={next:S=>{t[a]&&t[a](new ve(d,w,y,S))},error:t[a+1],complete:t[a+2]},dl(r._query)}return(function(w,S,D,x){const b=new yi(x),B=new pi(S,b,D);return w.asyncQueue.enqueueAndForget((async()=>di(await Vr(w),B))),()=>{b.Ou(),w.asyncQueue.enqueueAndForget((async()=>fi(await Vr(w),B)))}})(de(d),m,c,h)}function Mn(r,t){return(function(n,i){const o=new Dt;return n.asyncQueue.enqueueAndForget((async()=>Wd(await sf(n),i,o))),o.promise})(de(r),t)}function gl(r,t,e){const n=e.docs.get(t._key),i=new Wr(r);return new Te(r,i,t._key,n,new pn(e.hasPendingWrites,e.fromCache),t.converter)}function em(r){return Rf(r,{count:Af()})}function Rf(r,t){const e=st(r.firestore,Ct),n=de(e),i=Dc(t,((o,a)=>new dh(a,o.aggregateType,o._internalFieldPath)));return hf(n,r._query,i).then((o=>(function(c,h,d){const m=new Wr(c);return new gf(h,m,d)})(e,r,o)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Ke(t)}set(t,e,n){this._verifyNotCommitted();const i=As(t,this._firestore),o=Pi(i.converter,e,n),a=vi(this._dataReader,"WriteBatch.set",i._key,o,i.converter!==null,n);return this._mutations.push(a.toMutation(i._key,It.none())),this}update(t,e,n,...i){this._verifyNotCommitted();const o=As(t,this._firestore);let a;return a=typeof(e=St(e))=="string"||e instanceof xn?al(this._dataReader,"WriteBatch.update",o._key,e,n,i):ol(this._dataReader,"WriteBatch.update",o._key,e),this._mutations.push(a.toMutation(o._key,It.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=As(t,this._firestore);return this._mutations=this._mutations.concat(new Mr(e._key,It.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(R.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function As(r,t){if((r=St(r)).firestore!==t)throw new C(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(r){return de(r=st(r,Ct)),new Vf(r,(t=>Mn(r,t)))}(function(t,e=!0){(function(i){Be=i})(ac),uc(new lc("firestore",((n,{instanceIdentifier:i,options:o})=>{const a=n.getProvider("app").getImmediate(),c=new Ct(new fc(n.getProvider("auth-internal")),new gc(a,n.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new C(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new An(d.options.projectId,m)})(a,i),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),Co(Do,No,t),Co(Do,No,"esm2017")})();export{If as AbstractUserDataWriter,pf as AggregateField,gf as AggregateQuerySnapshot,bt as Bytes,Df as CACHE_SIZE_UNLIMITED,re as CollectionReference,Z as DocumentReference,Te as DocumentSnapshot,xn as FieldPath,Ei as FieldValue,Ct as Firestore,C as FirestoreError,Mt as GeoPoint,Nt as Query,Qe as QueryCompositeFilterConstraint,Fn as QueryConstraint,mr as QueryDocumentSnapshot,Qr as QueryEndAtConstraint,Ln as QueryFieldFilterConstraint,Gr as QueryLimitConstraint,Vi as QueryOrderByConstraint,ve as QuerySnapshot,Kr as QueryStartAtConstraint,pn as SnapshotMetadata,X as Timestamp,Ut as VectorValue,Vf as WriteBatch,zs as _AutoId,dt as _ByteString,An as _DatabaseId,O as _DocumentKey,hc as _EmptyAuthCredentialsProvider,ht as _FieldPath,st as _cast,Qt as _logWarn,Tc as _validateIsNotUsedTogether,Zf as addDoc,qf as and,xf as clearIndexedDbPersistence,Cf as collection,bf as collectionGroup,df as connectFirestoreEmulator,Af as count,Jf as deleteDoc,Ff as disableNetwork,ff as doc,Of as enableNetwork,Qf as endAt,Kf as endBefore,de as ensureFirestoreConfigured,Mn as executeWrite,Rf as getAggregateFromServer,em as getCountFromServer,Wf as getDoc,Hf as getDocs,kf as getFirestore,Nf as initializeFirestore,jf as limit,zf as limitToLast,tm as onSnapshot,Uf as or,Bf as orderBy,Lf as query,Xf as setDoc,Gf as startAfter,$f as startAt,Yf as updateDoc,Mf as where,nm as writeBatch};
