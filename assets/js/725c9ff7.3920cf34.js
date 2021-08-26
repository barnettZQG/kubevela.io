(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[87297],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83924:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Want More?"},s={unversionedId:"end-user/components/more",id:"version-v1.0/end-user/components/more",isDocsHomePage:!1,title:"Want More?",description:"Components in KubeVela are designed to be brought by users.",source:"@site/versioned_docs/version-v1.0/end-user/components/more.md",sourceDirName:"end-user/components",slug:"/end-user/components/more",permalink:"/docs/v1.0/end-user/components/more",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/components/more.md",version:"v1.0",lastUpdatedBy:"yangsoon",lastUpdatedAt:1625208237,formattedLastUpdatedAt:"7/2/2021",frontMatter:{title:"Want More?"},sidebar:"version-v1.0/docs",previous:{title:"Cloud Services",permalink:"/docs/v1.0/end-user/components/cloud-services"},next:{title:"Ingress",permalink:"/docs/v1.0/end-user/traits/ingress"}},c=[],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Components in KubeVela are designed to be brought by users."),(0,a.kt)("p",null,"Check below documentations about how to bring your own components to the system in various approaches."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../platform-engineers/helm/component"},"Helm")," - Helm chart is a natural form of component, note that you need to have a valid Helm repository (e.g. GitHub repo or a Helm hub) to host the chart in this case."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../platform-engineers/cue/component"},"CUE")," - CUE is powerful approach to encapsulate a component and it doesn't require any repository."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../platform-engineers/kube/component"},"Simple Template")," - Not a Helm or CUE expert? A simple template approach is also provided to define any Kubernetes API resource as a component. Note that only key-value style parameters are supported in this case."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../platform-engineers/cloud-services"},"Cloud Services")," - KubeVela allows you to declare cloud services as part of the application and provision them in consistent API.")))}u.isMDXComponent=!0}}]);