function B(){}function H(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t&&typeof t=="object"&&typeof t.then=="function"}function L(t){return t()}function q(){return Object.create(null)}function y(t){t.forEach(L)}function G(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let g;function ft(t,e){return g||(g=document.createElement("a")),g.href=e,t===g.href}function J(t){return Object.keys(t).length===0}function _t(t,e,n,r){if(t){const c=O(t,e,n,r);return t[0](c)}}function O(t,e,n,r){return t[1]&&r?H(n.ctx.slice(),t[1](r(e))):n.ctx}function dt(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const s=[],l=Math.max(e.dirty.length,c.length);for(let u=0;u<l;u+=1)s[u]=e.dirty[u]|c[u];return s}return e.dirty|c}return e.dirty}function ht(t,e,n,r,c,s){if(c){const l=O(e,n,r,s);t.p(l,c)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function pt(t){return t==null?"":t}let $=!1;function K(){$=!0}function Q(){$=!1}function R(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&i.push(f)}e=i}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let i=0;i<e.length;i++){const o=e[i].claim_order,f=(c>0&&e[n[c]].claim_order<=o?c+1:R(1,c,d=>e[n[d]].claim_order,o))-1;r[i]=n[f]+1;const a=f+1;n[a]=i,c=Math.max(a,c)}const s=[],l=[];let u=e.length-1;for(let i=n[c]+1;i!=0;i=r[i-1]){for(s.push(e[i-1]);u>=i;u--)l.push(e[u]);u--}for(;u>=0;u--)l.push(e[u]);s.reverse(),l.sort((i,o)=>i.claim_order-o.claim_order);for(let i=0,o=0;i<l.length;i++){for(;o<s.length&&l[i].claim_order>=s[o].claim_order;)o++;const f=o<s.length?s[o]:null;t.insertBefore(l[i],f)}}function V(t,e){if($){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){$&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function bt(){return j(" ")}function xt(){return j("")}function kt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return t===""?null:+t}function tt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,r,c=!1){et(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const u=t[l];if(e(u)){const i=n(u);return i===void 0?t.splice(l,1):t[l]=i,c||(t.claim_info.last_index=l),u}}for(let l=t.claim_info.last_index-1;l>=0;l--){const u=t[l];if(e(u)){const i=n(u);return i===void 0?t.splice(l,1):t[l]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,u}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function I(t,e,n,r){return P(t,c=>c.nodeName===e,c=>{const s=[];for(let l=0;l<c.attributes.length;l++){const u=c.attributes[l];n[u.name]||s.push(u.name)}s.forEach(l=>c.removeAttribute(l))},()=>r(e))}function vt(t,e,n){return I(t,e,n,Y)}function Et(t,e,n){return I(t,e,n,Z)}function nt(t,e){return P(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>j(e),!0)}function St(t){return nt(t," ")}function jt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function At(t,e){t.value=e==null?"":e}function Nt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Ct(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function qt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Mt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let p;function _(t){p=t}function w(){if(!p)throw new Error("Function called outside component initialization");return p}function Tt(t){w().$$.on_mount.push(t)}function Bt(t){w().$$.after_update.push(t)}function Lt(t,e){return w().$$.context.set(t,e),e}function Ot(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const m=[],M=[],x=[],T=[],z=Promise.resolve();let E=!1;function D(){E||(E=!0,z.then(A))}function Pt(){return D(),z}function S(t){x.push(t)}const v=new Set;let b=0;function A(){const t=p;do{for(;b<m.length;){const e=m[b];b++,_(e),rt(e.$$)}for(_(null),m.length=0,b=0;M.length;)M.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];v.has(n)||(v.add(n),n())}x.length=0}while(m.length);for(;T.length;)T.pop()();E=!1,v.clear(),_(t)}function rt(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const k=new Set;let h;function ct(){h={r:0,c:[],p:h}}function it(){h.r||y(h.c),h=h.p}function F(t,e){t&&t.i&&(k.delete(t),t.i(e))}function lt(t,e,n,r){if(t&&t.o){if(k.has(t))return;k.add(t),h.c.push(()=>{k.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function It(t,e){const n=e.token={};function r(c,s,l,u){if(e.token!==n)return;e.resolved=u;let i=e.ctx;l!==void 0&&(i=i.slice(),i[l]=u);const o=c&&(e.current=c)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==s&&a&&(ct(),lt(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),it())}):e.block.d(1),o.c(),F(o,1),o.m(e.mount(),e.anchor),f=!0),e.block=o,e.blocks&&(e.blocks[s]=o),f&&A()}if(W(t)){const c=w();if(t.then(s=>{_(c),r(e.then,1,e.value,s),_(null)},s=>{if(_(c),r(e.catch,2,e.error,s),_(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function zt(t,e,n){const r=e.slice(),{resolved:c}=t;t.current===t.then&&(r[t.value]=c),t.current===t.catch&&(r[t.error]=c),t.block.p(r,n)}function Dt(t,e){const n={},r={},c={$$scope:1};let s=t.length;for(;s--;){const l=t[s],u=e[s];if(u){for(const i in l)i in u||(r[i]=1);for(const i in u)c[i]||(n[i]=u[i],c[i]=1);t[s]=u}else for(const i in l)c[i]=1}for(const l in r)l in n||(n[l]=void 0);return n}function Ft(t){return typeof t=="object"&&t!==null?t:{}}function Ht(t){t&&t.c()}function Wt(t,e){t&&t.l(e)}function ut(t,e,n,r){const{fragment:c,on_mount:s,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,n),r||S(()=>{const i=s.map(L).filter(G);l?l.push(...i):y(i),t.$$.on_mount=[]}),u.forEach(S)}function ot(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){t.$$.dirty[0]===-1&&(m.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Gt(t,e,n,r,c,s,l,u=[-1]){const i=p;_(t);const o=t.$$={fragment:null,ctx:null,props:s,update:B,not_equal:c,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:q(),dirty:u,skip_bound:!1,root:e.target||i.$$.root};l&&l(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,d,...N)=>{const C=N.length?N[0]:d;return o.ctx&&c(o.ctx[a],o.ctx[a]=C)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](C),f&&st(t,a)),d}):[],o.update(),f=!0,y(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){K();const a=tt(e.target);o.fragment&&o.fragment.l(a),a.forEach(X)}else o.fragment&&o.fragment.c();e.intro&&F(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),Q(),A()}_(i)}class Jt{$destroy(){ot(this,1),this.$destroy=B}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!J(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Dt as A,Ft as B,ot as C,H as D,Pt as E,_t as F,ht as G,mt as H,dt as I,V as J,Z as K,Et as L,ft as M,Mt as N,kt as O,Ot as P,gt as Q,pt as R,Jt as S,It as T,zt as U,wt as V,qt as W,S as X,At as Y,Ct as Z,y as _,bt as a,yt as b,St as c,it as d,xt as e,F as f,ct as g,X as h,Gt as i,Lt as j,Bt as k,Y as l,vt as m,B as n,Tt as o,tt as p,$t as q,Nt as r,at as s,lt as t,j as u,nt as v,jt as w,Ht as x,Wt as y,ut as z};
