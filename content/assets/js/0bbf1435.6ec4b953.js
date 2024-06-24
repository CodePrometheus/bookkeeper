"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[9249],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,g=s["".concat(c,".").concat(d)]||s[d]||f[d]||i;return r?o.createElement(g,a(a({ref:t},p),{},{components:r})):o.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35563:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var o=r(83117),n=(r(67294),r(3905));const i={id:"geo-replication",title:"Geo-replication"},a=void 0,l={unversionedId:"admin/geo-replication",id:"version-4.16.6/admin/geo-replication",title:"Geo-replication",description:"Geo-replication is the replication of data across BookKeeper clusters. In order to enable geo-replication for a group of BookKeeper clusters,",source:"@site/versioned_docs/version-4.16.6/admin/geo-replication.md",sourceDirName:"admin",slug:"/admin/geo-replication",permalink:"/docs/4.16.6/admin/geo-replication",draft:!1,tags:[],version:"4.16.6",frontMatter:{id:"geo-replication",title:"Geo-replication"}},c={},u=[{value:"Global ZooKeeper",id:"global-zookeeper",level:2},{value:"Geo-replication across three clusters",id:"geo-replication-across-three-clusters",level:3},{value:"Region-aware placement policy",id:"region-aware-placement-policy",level:2},{value:"Autorecovery",id:"autorecovery",level:2}],p={toc:u},s="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Geo-replication")," is the replication of data across BookKeeper clusters. In order to enable geo-replication for a group of BookKeeper clusters,"),(0,n.kt)("h2",{id:"global-zookeeper"},"Global ZooKeeper"),(0,n.kt)("p",null,"Setting up a global ZooKeeper quorum is a lot like setting up a cluster-specific quorum. The crucial difference is that"),(0,n.kt)("h3",{id:"geo-replication-across-three-clusters"},"Geo-replication across three clusters"),(0,n.kt)("p",null,"Let's say that you want to set up geo-replication across clusters in regions A, B, and C. First, the BookKeeper clusters in each region must have their own local (cluster-specific) ZooKeeper quorum."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"BookKeeper clusters use global ZooKeeper only for metadata storage. Traffic from bookies to ZooKeeper should thus be fairly light in general.")),(0,n.kt)("p",null,"The crucial difference between using cluster-specific ZooKeeper and global ZooKeeper is that bookies is that you need to point all bookies to use the global ZooKeeper setup."),(0,n.kt)("h2",{id:"region-aware-placement-policy"},"Region-aware placement policy"),(0,n.kt)("h2",{id:"autorecovery"},"Autorecovery"))}f.isMDXComponent=!0}}]);