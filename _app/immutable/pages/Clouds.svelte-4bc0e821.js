import{S as M,i as q,s as P,a as b,K as m,c as x,L as _,p as g,h as u,q as i,b as d,J as k,n as f,Q as C,o as j,l as E,m as S,M as $,R as A}from"../chunks/index-b0ba3887.js";import{a as p}from"../chunks/anime.es-aa8433bd.js";/* empty css                                                     */function v(r,l,o){const a=r.slice();return a[0]=l[o],a}function y(r){let l,o;return{c(){l=E("img"),this.h()},l(a){l=S(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){$(l.src,o="cloud.svg")||i(l,"src",o),i(l,"alt","cloud"),i(l,"class",A(r[0].class)+" svelte-sliqhj")},m(a,n){d(a,l,n)},p:f,d(a){a&&u(l)}}}function G(r){let l,o,a,n=r[0],s=[];for(let e=0;e<n.length;e+=1)s[e]=y(v(r,n,e));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();l=b(),o=m("svg"),a=m("path"),this.h()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);l=x(e),o=_(e,"svg",{class:!0});var c=g(o);a=_(c,"path",{d:!0,class:!0}),g(a).forEach(u),c.forEach(u),this.h()},h(){i(a,"d","m -97 0 q 15 -138 40 0 t 40 0 t 35 0 t 35 0 t 35 0"),i(a,"class","cloudy"),i(o,"class","svelte-sliqhj")},m(e,c){for(let t=0;t<s.length;t+=1)s[t].m(e,c);d(e,l,c),d(e,o,c),k(o,a)},p(e,[c]){if(c&1){n=e[0];let t;for(t=0;t<n.length;t+=1){const h=v(e,n,t);s[t]?s[t].p(h,c):(s[t]=y(h),s[t].c(),s[t].m(l.parentNode,l))}for(;t<s.length;t+=1)s[t].d(1);s.length=n.length}},i:f,o:f,d(e){C(s,e),e&&u(l),e&&u(o)}}}function I(r,l,o){let{cloudPercentage:a}=l,n=[],s=Math.round(a/10);console.log(a);for(let e=1;e<=s;e++)n.push({id:{i:e},class:`c${e}`});return j(()=>{const e=p.path(".cloudy");for(let c=1;c<=n.length;c++){let t=p({targets:`.c${c}`,translateX:e("x"),translateY:e("y"),scale:Math.random()+.4,easing:"linear",duration:2e5,delay:c*Math.floor(Math.random()*100),direction:"alternate",loop:!0,autoplay:!1}),h=Math.floor(Math.random()*1e4)*20;console.log("p:"+h),t.seek(h),t.play()}}),r.$$set=e=>{"cloudPercentage"in e&&o(1,a=e.cloudPercentage)},[n,a]}class N extends M{constructor(l){super(),q(this,l,I,G,P,{cloudPercentage:1})}}export{N as default};