import{S as G,i as S,s as W,l as g,a as x,K as M,m as p,p as h,c as E,h as m,L as I,M as J,q as a,b as f,J as _,n as w,o as X}from"../chunks/index-069ed4bc.js";import{a as q}from"../chunks/anime.es-aa8433bd.js";/* empty css                                                   *//* empty css                                                     */function Y(d){let e,r,c,o,t,i,u,n,v;return{c(){e=g("div"),r=g("img"),o=x(),t=g("img"),u=x(),n=M("svg"),v=M("path"),this.h()},l(s){e=p(s,"DIV",{class:!0});var l=h(e);r=p(l,"IMG",{src:!0,alt:!0,class:!0}),o=E(l),t=p(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(m),u=E(s),n=I(s,"svg",{class:!0});var y=h(n);v=I(y,"path",{class:!0,d:!0}),h(v).forEach(m),y.forEach(m),this.h()},h(){J(r.src,c="wave_mirror.svg")||a(r,"src",c),a(r,"alt","wave"),a(r,"class","wave one svelte-m9c2e9"),J(t.src,i="wave.svg")||a(t,"src",i),a(t,"alt","wave"),a(t,"class","wave two svelte-m9c2e9"),a(e,"class","container svelte-m9c2e9"),a(v,"class","eight"),a(v,"d","m 43.75 25 q -43.75 18.75 0 37.5 q 12.5 6.25 25 -18.75 q 6.25 -25 18.75 -18.75 q 37.5 18.75 12.5 37.5 q -25 12.5 -31.25 -18.75 q -6.25 -25 -25 -18.75"),a(n,"class","svelte-m9c2e9")},m(s,l){f(s,e,l),_(e,r),_(e,o),_(e,t),f(s,u,l),f(s,n,l),_(n,v)},p:w,i:w,o:w,d(s){s&&m(e),s&&m(u),s&&m(n)}}}function b(d,e,r){let{wind:c}=e,o=75e3/c+1e3;return X(t=>{const i=q.path(".eight");q({targets:".one",translateX:i("x"),translateY:i("y"),easing:"linear",duration:o,loop:!0}),q({targets:".two",translateX:i("x"),translateY:i("y"),direction:"reverse",easing:"linear",duration:o,loop:!0})}),d.$$set=t=>{"wind"in t&&r(0,c=t.wind)},[c]}class P extends G{constructor(e){super(),S(this,e,b,Y,W,{wind:0})}}export{P as default};
