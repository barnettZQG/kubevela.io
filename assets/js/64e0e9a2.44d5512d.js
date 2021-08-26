(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[23137],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},99518:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),i={title:"Introduction",slug:"/"},l={unversionedId:"getting-started/introduction",id:"version-v1.1/getting-started/introduction",isDocsHomePage:!1,title:"Introduction",description:"Motivation",source:"@site/versioned_docs/version-v1.1/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/",permalink:"/docs/",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/getting-started/introduction.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1629520945,formattedLastUpdatedAt:"8/21/2021",frontMatter:{title:"Introduction",slug:"/"},sidebar:"version-v1.1/docs",next:{title:"Installation",permalink:"/docs/getting-started/quick-install"}},s=[{value:"Motivation",id:"motivation",children:[]},{value:"What is KubeVela?",id:"what-is-kubevela",children:[]},{value:"Architecture",id:"architecture",children:[{value:"Control Plane",id:"control-plane",children:[]},{value:"Runtime Infrastructures",id:"runtime-infrastructures",children:[]}]},{value:"Comparisons",id:"comparisons",children:[{value:"KubeVela vs. Platform-as-a-Service (PaaS)",id:"kubevela-vs-platform-as-a-service-paas",children:[]},{value:"KubeVela vs. Serverless",id:"kubevela-vs-serverless",children:[]},{value:"KubeVela vs. Platform agnostic developer tools",id:"kubevela-vs-platform-agnostic-developer-tools",children:[]},{value:"KubeVela vs. Helm",id:"kubevela-vs-helm",children:[]},{value:"KubeVela vs. Kubernetes",id:"kubevela-vs-kubernetes",children:[]}]}],u={toc:s};function c(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"The trend of cloud-native technology is moving towards pursuing consistent application delivery across clouds and on-premises infrastructures using Kubernetes as the common layer. Kubernetes, although excellent in abstracting low-level infrastructure details, does not introduce abstractions to model software deployment on top of today's hybrid and distributed environments. We\u2019ve seen the lack of application level context have impacted user experiences, slowed down productivity, led to unexpected errors or misconfigurations in production."),(0,r.kt)("p",null,"Meanwhile, modeling the deployment of a microservice application is a highly fragmented and challenging process. Thus, many solutions tried to solve above problem so far are either too simplified to fix the real issue, or too complicated to use at all. On the other hand, though many solutions provided friendly UI layer, the platform themselves can barely extend. This means as the needs of your application grow, they are almost certain to outgrow the capabilities of such systems. "),(0,r.kt)("p",null,"Today, the application teams are eager to find a platform that can simplify the application delivery across hybrid environments (e.g. multi-cluster/multi-cloud/hybrid-cloud/distributed-cloud), while it should also be flexible enough to meet the requirement of fast growing businesses. The platform-engineers do want to help but the engineering effort of building such system seems to be daunting."),(0,r.kt)("h2",{id:"what-is-kubevela"},"What is KubeVela?"),(0,r.kt)("p",null,"KubeVela is a modern application platform that makes deploying and managing applications across today's hybrid, multi-cloud environments easier and faster, while at meantime, naturally adapts to your needs as they grow. This is achieved by doing the following:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Centric")," - KubeVela introduces ",(0,r.kt)("a",{parentName:"p",href:"https://oam.dev/"},"Open Application Model (OAM)")," as the consistent yet higher level API to capture a full deployment of microservices on top of hybrid environments. Placement strategy, traffic shifting and rolling update are declared at application level. No infrastructure level concern, simply deploy."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Programmable Workflow")," - KubeVela leverages ",(0,r.kt)("a",{parentName:"p",href:"https://cuelang.org/"},"CUE")," to implement its model layer. This allows you to declare application deployment workflow as a DAG, with all steps and application's needs glued together in programmable approach. No restrictions, natively extensible."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Runtime Agnostic")," - KubeVela works as an application delivery control plane that is fully runtime agnostic. It can deploy and manage any application components including containers, cloud functions, databases, or even EC2 instances across hybrid environments, following the workflow you defined."),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"The overall architecture of KubeVela is shown as below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:a(74131).Z})),(0,r.kt)("h3",{id:"control-plane"},"Control Plane"),(0,r.kt)("p",null,"Control plane is where KubeVela itself lives in. As the project's name implies, KubeVela by design leverages Kubernetes as control plane. This is the key of how KubeVela guarantees full ",(0,r.kt)("em",{parentName:"p"},"automation")," and strong ",(0,r.kt)("em",{parentName:"p"},"determinism")," to application delivery at scale. Users will interact with KubeVela via the  application centric API to model the application deployment, and KubeVela will deliver the application to target ",(0,r.kt)("em",{parentName:"p"},"runtime infrastructure")," per policies and workflow declared by users and ensure the success."),(0,r.kt)("h3",{id:"runtime-infrastructures"},"Runtime Infrastructures"),(0,r.kt)("p",null,"Runtime infrastructures are where the applications are actually running on. KubeVela allows you to deploy and manage applications on both Kubernetes based infrastructures (local, managed offerings, or IoT/Edge/On-Premise ones) and non-Kubernetes environments such as public/private clouds in a consistent workflow. KubeVela itself does not run on the runtime infrastructures, they two are fully decoupled."),(0,r.kt)("h2",{id:"comparisons"},"Comparisons"),(0,r.kt)("h3",{id:"kubevela-vs-platform-as-a-service-paas"},"KubeVela vs. Platform-as-a-Service (PaaS)"),(0,r.kt)("p",null,"The typical examples are Heroku and Cloud Foundry. They provide full application deployment and management capabilities and aim to improve developer experience and efficiency. In this context, KubeVela shares the same goal."),(0,r.kt)("p",null,"Though the biggest difference lies in ",(0,r.kt)("strong",{parentName:"p"},"flexibility"),"."),(0,r.kt)("p",null,"KubeVela does not introduce any restriction. As a plus, even its deployment workflow and full feature set are implemented as LEGO-sytle CUE modules and can be extended at any time when your needs grow. Comparing to this mechanism, traditional PaaS systems are highly restricted, i.e. they have to enforce constraints in the type of supported applications and capabilities, and as application needs grows, you always outgrow the capabilities of the PaaS system - this will never happen in KubeVela platform."),(0,r.kt)("h3",{id:"kubevela-vs-serverless"},"KubeVela vs. Serverless"),(0,r.kt)("p",null,'Serverless platform such as AWS Lambda provides extraordinary user experience and agility to deploy serverless applications. However, those platforms impose even more constraints in extensibility. They are arguably "hard-coded" PaaS, so KubeVela differ from them in similar way.'),(0,r.kt)("p",null,"On the other hand, KubeVela can easily deploy both Kubernetes based serverless workloads such as Knative/OpenFaaS, or cloud based functions such as AWS Lambda."),(0,r.kt)("h3",{id:"kubevela-vs-platform-agnostic-developer-tools"},"KubeVela vs. Platform agnostic developer tools"),(0,r.kt)("p",null,"The typical example is Hashicorp's Waypoint. Waypoint is a developer facing tool which introduces a consistent workflow (i.e., build, deploy, release) to ship applications on top of different platforms."),(0,r.kt)("p",null,"KubeVela can be integrated with such tools seamlessly. In this case, developers would use the Waypoint workflow as the UI to deploy and release applications with KubeVela as the underlying deployment platform."),(0,r.kt)("h3",{id:"kubevela-vs-helm"},"KubeVela vs. Helm"),(0,r.kt)("p",null,"Helm is a package manager for Kubernetes that provides package, install, and upgrade a set of YAML files for Kubernetes as a unit. "),(0,r.kt)("p",null,"KubeVela as a modern deployment system can naturally deploy Helm charts. For example, you could use KubeVela to define an application that is composed by a WordPress chart and a AWS RDS Terraform module, orchestrate the components' topology, and then deploy them to multiple environments following certain strategy."),(0,r.kt)("p",null,"Of course, KubeVela also supports other encapsulation formats including Kustomize etc."),(0,r.kt)("h3",{id:"kubevela-vs-kubernetes"},"KubeVela vs. Kubernetes"),(0,r.kt)("p",null,"KubeVela is a modern application deployment system built with cloud native stack. It leverages ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/spec"},"Open Application Model")," and Kubernetes as control plane to resolve a hard problem - making shipping applications enjoyable."),(0,r.kt)("p",null,"Welcome onboard and sail Vela!"))}c.isMDXComponent=!0},74131:function(e,t,a){"use strict";t.Z=a.p+"assets/images/arch-4eb82664ef3aa6ee78c8c9d4a4b18a8a.png"}}]);