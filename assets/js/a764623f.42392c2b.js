(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[28218],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),i=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=i(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},55027:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),c={title:"Port Forwarding"},l={unversionedId:"developers/port-forward",id:"developers/port-forward",isDocsHomePage:!1,title:"Port Forwarding",description:"Once your web services of the application deployed, you can access it locally via port-forward.",source:"@site/docs/developers/port-forward.md",sourceDirName:"developers",slug:"/developers/port-forward",permalink:"/docs/next/developers/port-forward",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/port-forward.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1625206152,formattedLastUpdatedAt:"7/2/2021",frontMatter:{title:"Port Forwarding"},sidebar:"docs",previous:{title:"Setting Up Deployment Environment",permalink:"/docs/next/developers/config-enviroments"},next:{title:"Check Application Logs",permalink:"/docs/next/developers/check-logs"}},p=[],i={toc:p};function s(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once your web services of the application deployed, you can access it locally via ",(0,a.kt)("inlineCode",{parentName:"p"},"port-forward"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vela ls\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"NAME            APP     WORKLOAD      TRAITS    STATUS      CREATED-TIME\nexpress-server  testapp webservice              Deployed    2020-09-18 22:42:04 +0800 CST\n")),(0,a.kt)("p",null,"It will directly open browser for you."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vela port-forward testapp\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"Forwarding from 127.0.0.1:8080 -> 80\nForwarding from [::1]:8080 -> 80\n\nForward successfully! Opening browser ...\nHandling connection for 8080\nHandling connection for 8080\n")))}s.isMDXComponent=!0}}]);