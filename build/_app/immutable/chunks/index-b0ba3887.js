function B(){}function I(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t&&typeof t=="object"&&typeof t.then=="function"}function L(t){return t()}function q(){return Object.create(null)}function y(t){t.forEach(L)}function J(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let g;function ft(t,e){return g||(g=document.createElement("a")),g.href=e,t===g.href}function K(t){return Object.keys(t).length===0}function _t(t,e,n,r){if(t){const c=O(t,e,n,r);return t[0](c)}}function O(t,e,n,r){return t[1]&&r?I(n.ctx.slice(),t[1](r(e))):n.ctx}function dt(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const s=[],l=Math.max(e.dirty.length,c.length);for(let u=0;u<l;u+=1)s[u]=e.dirty[u]|c[u];return s}return e.dirty|c}return e.dirty}function ht(t,e,n,r,c,s){if(c){const l=O(e,n,r,s);t.p(l,c)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function pt(t){return t==null?"":t}let $=!1;function Q(){$=!0}function R(){$=!1}function U(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&i.push(f)}e=i}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let i=0;i<e.length;i++){const o=e[i].claim_order,f=(c>0&&e[n[c]].claim_order<=o?c+1:U(1,c,d=>e[n[d]].claim_order,o))-1;r[i]=n[f]+1;const a=f+1;n[a]=i,c=Math.max(a,c)}const s=[],l=[];let u=e.length-1;for(let i=n[c]+1;i!=0;i=r[i-1]){for(s.push(e[i-1]);u>=i;u--)l.push(e[u]);u--}for(;u>=0;u--)l.push(e[u]);s.reverse(),l.sort((i,o)=>i.claim_order-o.claim_order);for(let i=0,o=0;i<l.length;i++){for(;o<s.length&&l[i].claim_order>=s[o].claim_order;)o++;const f=o<s.length?s[o]:null;t.insertBefore(l[i],f)}}function V(t,e){if($){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){$&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function bt(){return A(" ")}function xt(){return A("")}function kt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function tt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,r,c=!1){et(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const u=t[l];if(e(u)){const i=n(u);return i===void 0?t.splice(l,1):t[l]=i,c||(t.claim_info.last_index=l),u}}for(let l=t.claim_info.last_index-1;l>=0;l--){const u=t[l];if(e(u)){const i=n(u);return i===void 0?t.splice(l,1):t[l]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,u}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function z(t,e,n,r){return P(t,c=>c.nodeName===e,c=>{const s=[];for(let l=0;l<c.attributes.length;l++){const u=c.attributes[l];n[u.name]||s.push(u.name)}s.forEach(l=>c.removeAttribute(l))},()=>r(e))}function wt(t,e,n){return z(t,e,n,Y)}function Et(t,e,n){return z(t,e,n,Z)}function nt(t,e){return P(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>A(e),!0)}function vt(t){return nt(t," ")}function jt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function At(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Nt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let p;function _(t){p=t}function w(){if(!p)throw new Error("Function called outside component initialization");return p}function St(t){w().$$.on_mount.push(t)}function Ct(t){w().$$.after_update.push(t)}function qt(t,e){return w().$$.context.set(t,e),e}function Mt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const m=[],M=[],x=[],T=[],D=Promise.resolve();let v=!1;function F(){v||(v=!0,D.then(N))}function Tt(){return F(),D}function j(t){x.push(t)}const E=new Set;let b=0;function N(){const t=p;do{for(;b<m.length;){const e=m[b];b++,_(e),rt(e.$$)}for(_(null),m.length=0,b=0;M.length;)M.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];E.has(n)||(E.add(n),n())}x.length=0}while(m.length);for(;T.length;)T.pop()();v=!1,E.clear(),_(t)}function rt(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const k=new Set;let h;function ct(){h={r:0,c:[],p:h}}function it(){h.r||y(h.c),h=h.p}function H(t,e){t&&t.i&&(k.delete(t),t.i(e))}function lt(t,e,n,r){if(t&&t.o){if(k.has(t))return;k.add(t),h.c.push(()=>{k.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Bt(t,e){const n=e.token={};function r(c,s,l,u){if(e.token!==n)return;e.resolved=u;let i=e.ctx;l!==void 0&&(i=i.slice(),i[l]=u);const o=c&&(e.current=c)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==s&&a&&(ct(),lt(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),it())}):e.block.d(1),o.c(),H(o,1),o.m(e.mount(),e.anchor),f=!0),e.block=o,e.blocks&&(e.blocks[s]=o),f&&N()}if(G(t)){const c=w();if(t.then(s=>{_(c),r(e.then,1,e.value,s),_(null)},s=>{if(_(c),r(e.catch,2,e.error,s),_(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Lt(t,e,n){const r=e.slice(),{resolved:c}=t;t.current===t.then&&(r[t.value]=c),t.current===t.catch&&(r[t.error]=c),t.block.p(r,n)}function Ot(t,e){const n={},r={},c={$$scope:1};let s=t.length;for(;s--;){const l=t[s],u=e[s];if(u){for(const i in l)i in u||(r[i]=1);for(const i in u)c[i]||(n[i]=u[i],c[i]=1);t[s]=u}else for(const i in l)c[i]=1}for(const l in r)l in n||(n[l]=void 0);return n}function Pt(t){return typeof t=="object"&&t!==null?t:{}}function zt(t){t&&t.c()}function Dt(t,e){t&&t.l(e)}function ut(t,e,n,r){const{fragment:c,on_mount:s,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,n),r||j(()=>{const i=s.map(L).filter(J);l?l.push(...i):y(i),t.$$.on_mount=[]}),u.forEach(j)}function ot(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){t.$$.dirty[0]===-1&&(m.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ft(t,e,n,r,c,s,l,u=[-1]){const i=p;_(t);const o=t.$$={fragment:null,ctx:null,props:s,update:B,not_equal:c,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:q(),dirty:u,skip_bound:!1,root:e.target||i.$$.root};l&&l(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,d,...S)=>{const C=S.length?S[0]:d;return o.ctx&&c(o.ctx[a],o.ctx[a]=C)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](C),f&&st(t,a)),d}):[],o.update(),f=!0,y(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){Q();const a=tt(e.target);o.fragment&&o.fragment.l(a),a.forEach(X)}else o.fragment&&o.fragment.c();e.intro&&H(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),R(),N()}_(i)}class Ht{$destroy(){ot(this,1),this.$destroy=B}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ot as A,Pt as B,ot as C,I as D,Tt as E,_t as F,ht as G,mt as H,dt as I,V as J,Z as K,Et as L,ft as M,Nt as N,kt as O,Mt as P,gt as Q,pt as R,Ht as S,Bt as T,Lt as U,bt as a,yt as b,vt as c,it as d,xt as e,H as f,ct as g,X as h,Ft as i,qt as j,Ct as k,Y as l,wt as m,B as n,St as o,tt as p,$t as q,At as r,at as s,lt as t,A as u,nt as v,jt as w,zt as x,Dt as y,ut as z};
