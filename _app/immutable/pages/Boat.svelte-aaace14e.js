import{S,i as X,s as C,l as v,a as p,K as G,m as _,p as y,c as b,h as u,L as B,M as I,q as e,b as z,J as m,n as M,o as D}from"../chunks/index-b0ba3887.js";import{a as q}from"../chunks/anime.es-aa8433bd.js";/* empty css                                                   */function J(h){let t,l,n,g,a,w,f,i,x,d,c,o;return{c(){t=v("div"),l=v("img"),g=p(),a=v("img"),f=p(),i=v("img"),d=p(),c=G("svg"),o=G("path"),this.h()},l(s){t=_(s,"DIV",{class:!0});var r=y(t);l=_(r,"IMG",{src:!0,alt:!0,class:!0}),g=b(r),a=_(r,"IMG",{src:!0,alt:!0,class:!0}),f=b(r),i=_(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(u),d=b(s),c=B(s,"svg",{class:!0});var E=y(c);o=B(E,"path",{class:!0,d:!0}),y(o).forEach(u),E.forEach(u),this.h()},h(){I(l.src,n="boat.svg")||e(l,"src",n),e(l,"alt","Boat"),e(l,"class","boatImg svelte-1dyz12g"),I(a.src,w="guy.svg")||e(a,"src",w),e(a,"alt","guy"),e(a,"class","guyImg svelte-1dyz12g"),I(i.src,x="arm.svg")||e(i,"src",x),e(i,"alt","arm"),e(i,"class","arm svelte-1dyz12g"),e(t,"class","boat svelte-1dyz12g"),e(o,"class","arch"),e(o,"d","m 0 0 q 20 -1 40 0"),e(c,"class","svelte-1dyz12g")},m(s,r){z(s,t,r),m(t,l),m(t,g),m(t,a),m(t,f),m(t,i),z(s,d,r),z(s,c,r),m(c,o)},p:M,i:M,o:M,d(s){s&&u(t),s&&u(d),s&&u(c)}}}function K(h,t,l){let{wind:n}=t,g=75e3/n+1e3;return D(()=>{const a=q.path(".arch");q({targets:".boat",translateX:a("x"),translateY:a("y"),rotate:a("angle"),direction:"alternate",easing:"linear",duration:g,loop:!0}),q({targets:".arm",rotateX:40,rotateZ:30,direction:"alternate",duration:5e3,easing:"linear",loop:!0})}),h.$$set=a=>{"wind"in a&&l(0,n=a.wind)},[n]}class Y extends S{constructor(t){super(),X(this,t,K,J,C,{wind:0})}}export{Y as default};
