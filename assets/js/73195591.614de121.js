(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[7523],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},10577:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o={title:"Performance Fine-tuning"},l={unversionedId:"platform-engineers/system-operation/performance-finetuning",id:"platform-engineers/system-operation/performance-finetuning",isDocsHomePage:!1,title:"Performance Fine-tuning",description:"Recommended Configurations",source:"@site/docs/platform-engineers/system-operation/performance-finetuning.md",sourceDirName:"platform-engineers/system-operation",slug:"/platform-engineers/system-operation/performance-finetuning",permalink:"/docs/next/platform-engineers/system-operation/performance-finetuning",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/system-operation/performance-finetuning.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1630935267,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Performance Fine-tuning"},sidebar:"docs",previous:{title:"Observability",permalink:"/docs/next/platform-engineers/system-operation/observability"},next:{title:"Dry Run",permalink:"/docs/next/platform-engineers/debug/dry-run"}},p=[{value:"Recommended Configurations",id:"recommended-configurations",children:[]},{value:"Fine-tuning Methods",id:"fine-tuning-methods",children:[]}],c={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"recommended-configurations"},"Recommended Configurations"),(0,i.kt)("p",null,"When cluster scale becomes large and more applications are needed for managing, KubeVela controller performance might have bottleneck problems due to inappropriate parameters."),(0,i.kt)("p",null,"According to the KubeVela performance test, three sets of parameters are recommended in clusters with different scales as below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Scale"),(0,i.kt)("th",{parentName:"tr",align:"right"},"#Nodes"),(0,i.kt)("th",{parentName:"tr",align:"right"},"#Apps"),(0,i.kt)("th",{parentName:"tr",align:"right"},"#Pods"),(0,i.kt)("th",{parentName:"tr",align:"right"},"concurrent-reconciles"),(0,i.kt)("th",{parentName:"tr",align:"center"},"kube-api-qps"),(0,i.kt)("th",{parentName:"tr",align:"right"},"kube-api-burst"),(0,i.kt)("th",{parentName:"tr",align:"right"},"CPU"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Memory"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Small"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 200"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 3,000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 18,000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"300"),(0,i.kt)("td",{parentName:"tr",align:"right"},"500"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0.5"),(0,i.kt)("td",{parentName:"tr",align:"right"},"1Gi")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Medium"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 500"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 5,000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 30,000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"500"),(0,i.kt)("td",{parentName:"tr",align:"right"},"800"),(0,i.kt)("td",{parentName:"tr",align:"right"},"1"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2Gi")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Large"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 1,000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 12,000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 72,000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"800"),(0,i.kt)("td",{parentName:"tr",align:"right"},"1,000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2"),(0,i.kt)("td",{parentName:"tr",align:"right"},"4Gi")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The above configurations are based on medium size applications (each application contains 2~3 components and 5~6 resources). If the applications in your scenario are generally larger, e.g., containing 20 resources, then you could increase the application number accordingly to find the appropriate configuration and parameters.")),(0,i.kt)("h3",{id:"fine-tuning-methods"},"Fine-tuning Methods"),(0,i.kt)("p",null,"You might encounter various performance bottlenecks. Read the following examples and try to find the proper solution for your problem."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Applications could be created. Its managed resources are available but indirect resources are not. For example, Deployments in webservice are successfully created but Pods are not. You could check kube-controller-manager and see if there is performance bottleneck problems with it."),(0,i.kt)("li",{parentName:"ol"},"Applications could be created. Its managed resources are not available and there is no rendering problem with the application. Check if apiserver has lots of requests waiting in queue. The mutating requests for managed resources might be blocked at apiserver."),(0,i.kt)("li",{parentName:"ol"},"Applications could be found in cluster but no status information could be displayed. If there is no problem with the application content, it might be caused by the KubeVela controller bottleneck, such as limiting requests to apiserver. Increase ",(0,i.kt)("strong",{parentName:"li"},"kube-api-qps / kube-api-burst")," and check if CPU is overloaded. If CPU is not overloaded, check if the thread number is below the number of CPU cores."),(0,i.kt)("li",{parentName:"ol"},"KubeVela Controller itself could crash frequently due to Out-Of-Memory. Increase the memory to solve it.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Read more details in ",(0,i.kt)("a",{parentName:"p",href:"/blog/2021/08/30/kubevela-performance-test"},"KubeVela Performance Test Report"))))}s.isMDXComponent=!0}}]);