(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[75809],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),h=o,m=s["".concat(u,".").concat(h)]||s[h]||d[h]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},38401:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"\u6982\u8ff0"},l={unversionedId:"end-user/overview-end-user",id:"end-user/overview-end-user",isDocsHomePage:!1,title:"\u6982\u8ff0",description:"Here are some workitems on the roadmap",source:"@site/docs/end-user/overview-end-user.md",sourceDirName:"end-user",slug:"/end-user/overview-end-user",permalink:"/docs/next/end-user/overview-end-user",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/overview-end-user.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1627555412,formattedLastUpdatedAt:"7/29/2021",frontMatter:{title:"\u6982\u8ff0"}},u=[{value:"Embed rollout in an application",id:"embed-rollout-in-an-application",children:[]},{value:"Add support to trait upgrade",id:"add-support-to-trait-upgrade",children:[]},{value:"Add metrics based rolling checking",id:"add-metrics-based-rolling-checking",children:[]},{value:"Add traffic shifting support",id:"add-traffic-shifting-support",children:[]},{value:"Support upgrading more than one component",id:"support-upgrading-more-than-one-component",children:[]},{value:"Support Helm Rollout strategy",id:"support-helm-rollout-strategy",children:[]},{value:"Add more restrictions on what part of the rollout plan can be changed during rolling",id:"add-more-restrictions-on-what-part-of-the-rollout-plan-can-be-changed-during-rolling",children:[]}],p={toc:u};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here are some workitems on the roadmap"),(0,a.kt)("h2",{id:"embed-rollout-in-an-application"},"Embed rollout in an application"),(0,a.kt)("p",null,"We will support embedded rollout settings in an application. In this way, any changes to the\napplication will naturally roll out in a controlled manner instead of a sudden replace."),(0,a.kt)("h2",{id:"add-support-to-trait-upgrade"},"Add support to trait upgrade"),(0,a.kt)("p",null,"There are three trait related workitems that complement each other"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"we need to make sure that traits that work on the previous application still work on the new\napplication"),(0,a.kt)("li",{parentName:"ul"},"traits themselves also need a controlled way to upgrade instead of replacing the old in one shot"),(0,a.kt)("li",{parentName:"ul"},"rollout controller should suppress conflicting traits (like HPA/Scalar) during the rollout process")),(0,a.kt)("h2",{id:"add-metrics-based-rolling-checking"},"Add metrics based rolling checking"),(0,a.kt)("p",null,"We will integrate with prometheus and use the metrics generated by the application to control the\nflow of the rollout. This part will be very similar to flagger."),(0,a.kt)("h2",{id:"add-traffic-shifting-support"},"Add traffic shifting support"),(0,a.kt)("p",null,"We will add traffic shifting based upgrading strategy like canary, A/B testing. We plan to support\nIstio in our first version. This part will be very similar to flagger."),(0,a.kt)("h2",{id:"support-upgrading-more-than-one-component"},"Support upgrading more than one component"),(0,a.kt)("p",null,"Currently, we can only upgrade one component at a time. We will support upgrading more components in\none application at once."),(0,a.kt)("h2",{id:"support-helm-rollout-strategy"},"Support Helm Rollout strategy"),(0,a.kt)("p",null,"Currently, we only support upgrading k8s resources. We will support helm based workload in the\nfuture."),(0,a.kt)("h2",{id:"add-more-restrictions-on-what-part-of-the-rollout-plan-can-be-changed-during-rolling"},"Add more restrictions on what part of the rollout plan can be changed during rolling"),(0,a.kt)("p",null,"Here are some examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the BatchPartition field cannot decrease beyond the current batch"),(0,a.kt)("li",{parentName:"ul"},"the RolloutBatches field can only change the part after the current batch"),(0,a.kt)("li",{parentName:"ul"},"the ComponentList field cannot be changed after rolling starts"),(0,a.kt)("li",{parentName:"ul"},"the RolloutStrategy/TargetSize/NumBatches cannot be changed")))}c.isMDXComponent=!0}}]);