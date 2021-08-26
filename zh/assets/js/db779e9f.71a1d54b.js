(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[66691],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61153:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i={title:"Known Limitations"},l={unversionedId:"platform-engineers/helm/known-issues",id:"version-v1.0/platform-engineers/helm/known-issues",isDocsHomePage:!1,title:"Known Limitations",description:"Limitations",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/platform-engineers/helm/known-issues.md",sourceDirName:"platform-engineers/helm",slug:"/platform-engineers/helm/known-issues",permalink:"/zh/docs/v1.0/platform-engineers/helm/known-issues",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/helm/known-issues.md",version:"v1.0",lastUpdatedBy:"guoxudong",lastUpdatedAt:1622708793,formattedLastUpdatedAt:"2021/6/3",frontMatter:{title:"Known Limitations"},sidebar:"version-v1.0/docs",previous:{title:"trait",permalink:"/zh/docs/v1.0/platform-engineers/helm/trait"},next:{title:"How-to",permalink:"/zh/docs/v1.0/platform-engineers/kube/component"}},s=[{value:"Limitations",id:"limitations",children:[{value:"Workload Type Indicator",id:"workload-type-indicator",children:[]},{value:"Always Use Full Qualified Name",id:"always-use-full-qualified-name",children:[]},{value:"Control the Application Upgrade",id:"control-the-application-upgrade",children:[]}]},{value:"Issues",id:"issues",children:[{value:"Rollout Strategy",id:"rollout-strategy",children:[]},{value:"Updating Traits Properties may Also Lead to Pods Restart",id:"updating-traits-properties-may-also-lead-to-pods-restart",children:[]}]}],p={toc:s};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"Here are some known limitations for using Helm chart as application component."),(0,r.kt)("h3",{id:"workload-type-indicator"},"Workload Type Indicator"),(0,r.kt)("p",null,'Following best practices of microservice, KubeVela recommends only one workload resource present in one Helm chart. Please split your "super" Helm chart into multiple charts (i.e. components). Essentially, KubeVela relies on the ',(0,r.kt)("inlineCode",{parentName:"p"},"workload")," filed in component definition to indicate the workload type it needs to take care, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\n...\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"...\nspec:\n  workload:\n    definition:\n      apiVersion: apps.kruise.io/v1alpha1\n      kind: Cloneset\n")),(0,r.kt)("p",null," Note that KubeVela won't fail if multiple workload types are packaged in one chart, the issue is for further operational behaviors such as rollout, revisions, and traffic management, they can only take effect on the indicated workload type."),(0,r.kt)("h3",{id:"always-use-full-qualified-name"},"Always Use Full Qualified Name"),(0,r.kt)("p",null,"The name of the workload should be templated with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/blob/543364fba59b0c7c30e38ebe0f73680db895abb6/pkg/chartutil/create.go#L415"},"fully qualified application name")," and please do NOT assign any value to ",(0,r.kt)("inlineCode",{parentName:"p"},".Values.fullnameOverride"),". As a best practice, Helm also highly recommend that new charts should be created via ",(0,r.kt)("inlineCode",{parentName:"p"},"$ helm create")," command so the template names are automatically defined as per this best practice."),(0,r.kt)("h3",{id:"control-the-application-upgrade"},"Control the Application Upgrade"),(0,r.kt)("p",null,"Changes made to the component ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," will trigger a Helm release upgrade. This process is handled by Flux v2 Helm controller, hence you can define remediation\nstrategies in the schematic based on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fluxcd/helm-controller/blob/main/docs/api/helmrelease.md#upgraderemediation"},"Helm Release\ndocumentation"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://toolkit.fluxcd.io/components/helm/helmreleases/#configuring-failure-remediation"},"specification"),"\nin case failure happens during this upgrade."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: webapp-chart\nspec:\n...\n  schematic:\n    helm:\n      release:\n        chart:\n          spec:\n            chart: "podinfo"\n            version: "5.1.4"\n        upgrade:\n          remediation:\n            retries: 3 \n            remediationStrategy: rollback\n      repository:\n        url: "http://oam.dev/catalog/"\n\n')),(0,r.kt)("p",null,"Though one issue is for now it's hard to get helpful information of a living Helm release to figure out what happened if upgrading failed. We will enhance the observability to help users track the situation of Helm release in application level."),(0,r.kt)("h2",{id:"issues"},"Issues"),(0,r.kt)("p",null,"The known issues will be fixed in following releases."),(0,r.kt)("h3",{id:"rollout-strategy"},"Rollout Strategy"),(0,r.kt)("p",null,"For now, Helm based components cannot benefit from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/design/vela-core/rollout-design.md#applicationdeployment-workflow"},"application level rollout strategy"),". As shown in ",(0,r.kt)("a",{parentName:"p",href:"./trait#update-an-applicatiion"},"this sample"),", if the application is updated, it can only be rollouted directly without canary or blue-green approach."),(0,r.kt)("h3",{id:"updating-traits-properties-may-also-lead-to-pods-restart"},"Updating Traits Properties may Also Lead to Pods Restart"),(0,r.kt)("p",null,"Changes on traits properties may impact the component instance and Pods belonging to this workload instance will restart. In CUE based components this is avoidable as KubeVela has full control on the rendering process of the resources, though in Helm based components it's currently deferred to Flux v2 controller."))}c.isMDXComponent=!0}}]);