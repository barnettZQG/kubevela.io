(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6504],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19003:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i={title:"Progressive Rollout with Istio"},l={unversionedId:"case-studies/canary-blue-green",id:"case-studies/canary-blue-green",isDocsHomePage:!1,title:"Progressive Rollout with Istio",description:"Introduction",source:"@site/docs/case-studies/canary-blue-green.md",sourceDirName:"case-studies",slug:"/case-studies/canary-blue-green",permalink:"/docs/next/case-studies/canary-blue-green",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/case-studies/canary-blue-green.md",version:"current",lastUpdatedBy:"wyike",lastUpdatedAt:1632313992,formattedLastUpdatedAt:"9/22/2021",frontMatter:{title:"Progressive Rollout with Istio"},sidebar:"docs",previous:{title:"GitOps with Workflow",permalink:"/docs/next/case-studies/gitops"},next:{title:"Multi-Cluster App Delivery",permalink:"/docs/next/case-studies/multi-cluster"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Preparation",id:"preparation",children:[]},{value:"Initial deployment",id:"initial-deployment",children:[]},{value:"Canary Release",id:"canary-release",children:[{value:"Continue with Full Release",id:"continue-with-full-release",children:[]},{value:"Rollback to The Old Version",id:"rollback-to-the-old-version",children:[]}]}],p={toc:s};function c(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The application deployment model in KubeVela is designed and implemented with extreme level of extensibility at heart. Hence, KubeVela can be easily integrated with any existing tools to superpower your application delivery with modern technologies such as Service Mesh immediately, without writing dirty glue code/scripts."),(0,r.kt)("p",null,"This guide will introduce how to use KubeVela and ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/latest/"},"Istio")," to do an advanced canary release process. In this process, KubeVela will help you to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ship Istio capabilities to end users without asking them to become an Istio expert (i.e. KubeVela will provide you a rollout trait as abstraction);"),(0,r.kt)("li",{parentName:"ul"},"design canary release steps and do rollout/rollback in a declarative workflow, instead managing the whole process manually or with ugly scripts.")),(0,r.kt)("p",null,"We will use the well-known ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/examples/bookinfo/?ie=utf-8&hl=en&docs-search=Canary"},"bookinfo")," application as the sample."),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("p",null,"Install the Istio cluster plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable istio\n")),(0,r.kt)("p",null,"The default namespace needs to be labeled so that Istio will auto-inject sidecar."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl label namespace default istio-injection=enabled\n")),(0,r.kt)("h2",{id:"initial-deployment"},"Initial deployment"),(0,r.kt)("p",null,"Deploy the Application of ",(0,r.kt)("inlineCode",{parentName:"p"},"bookinfo"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/blob/master/docs/examples/canary-rollout-use-case/first-deploy.yaml\n")),(0,r.kt)("p",null,"The component architecture and  relationship of the application are as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"book-info-struct",src:n(95135).Z})),(0,r.kt)("p",null,"This Application has four Components, ",(0,r.kt)("inlineCode",{parentName:"p"},"productpage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ratings"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"details")," components configured with an",(0,r.kt)("inlineCode",{parentName:"p"},"expose")," Trait to expose cluster-level service."),(0,r.kt)("p",null,"And ",(0,r.kt)("inlineCode",{parentName:"p"},"reviews")," component have a canary-traffic Trait."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"productpage")," component is also configured with an ",(0,r.kt)("inlineCode",{parentName:"p"},"istio-gateway")," Trait, allowing the Component to receive traffic coming from outside the cluster. The example below show that it sets ",(0,r.kt)("inlineCode",{parentName:"p"},"gateway:ingressgateway")," to use Istio's default gateway, and ",(0,r.kt)("inlineCode",{parentName:"p"},'hosts: "*"')," to specify that any request can enter the gateway."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'...\n    - name: productpage\n      type: webservice\n      properties:\n          image: docker.io/istio/examples-bookinfo-productpage-v1:1.16.2\n          port: 9080\n\n      traits:\n          - type: expose\n            properties:\n              port:\n                - 9080\n\n          - type: istio-gateway\n            properties:\n              hosts:\n                - "*"\n              gateway: ingressgateway\n              match:\n                - exact: /productpage\n                - prefix: /static\n                - exact: /login\n                - prefix: /api/v1/products\n              port: 9080\n...\n')),(0,r.kt)("p",null,"You can port-forward to the gateway as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward service/istio-ingressgateway -n istio-system 19082:80\n")),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:19082/productpage"},"http://127.0.0.1:19082/productpage")," through the browser and you will see the following page."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic-v2",src:n(56481).Z})),(0,r.kt)("h2",{id:"canary-release"},"Canary Release"),(0,r.kt)("p",null,"Next, we take the ",(0,r.kt)("inlineCode",{parentName:"p"},"reviews")," Component as an example to simulate the complete process of a canary release, and first upgrade a part of the component instances, and adjust the traffic at the same time, so as to achieve the purpose of progressive canary release."),(0,r.kt)("p",null,"Execute the following command to update the application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/blob/master/docs/examples/canary-rollout-use-case/rollout-v2.yaml\n")),(0,r.kt)("p",null,"This operation updates the mirror of the ",(0,r.kt)("inlineCode",{parentName:"p"},"reviews")," Component from the previous v2 to v3. At the same time, the Rollout Trait of the ",(0,r.kt)("inlineCode",{parentName:"p"},"reviews")," Component specifies that the number of target instances to be upgraded is two, which are upgraded in two batches, with one instance in each batch."),(0,r.kt)("p",null,"In addition, a canary-traffic Trait has been added to the Component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"...\n    - name: reviews\n      type: webservice\n      properties:\n        image: docker.io/istio/examples-bookinfo-reviews-v3:1.16.2\n        port: 9080\n        volumes:\n          - name: wlp-output\n            type: emptyDir\n            mountPath: /opt/ibm/wlp/output\n          - name: tmp\n            type: emptyDir\n            mountPath: /tmp\n\n\n      traits:\n        - type: expose\n          properties:\n            port:\n              - 9080\n\n        - type: rollout\n          properties:\n            targetSize: 2\n            rolloutBatches:\n              - replicas: 1\n              - replicas: 1\n              \n        - type: canary-traffic\n          properties:\n            port: 9080\n...\n")),(0,r.kt)("p",null,"This update also adds an upgraded execution Workflow to the Application, which contains three steps."),(0,r.kt)("p",null,"The first step is to upgrade only the first batch of instances by specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"batchPartition")," equal to 0. And use ",(0,r.kt)("inlineCode",{parentName:"p"},"traffic.weightedTargets")," to switch 10% of the traffic to the new version of the instance."),(0,r.kt)("p",null,"After completing the first step, the execution of the second step of the Workflow will enter a pause state, waiting for the user to verify the service status."),(0,r.kt)("p",null,"The third step of the Workflow is to complete the upgrade of the remaining instances and switch all traffic to the new component version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"...\n  workflow:\n    steps:\n      - name: rollout-1st-batch\n        type: canary-rollout\n        properties:\n          # just upgrade first batch of component\n          batchPartition: 0\n          traffic:\n            weightedTargets:\n              - revision: reviews-v1\n                weight: 90 # 90% shift to new version\n              - revision: reviews-v2\n                weight: 10 # 10% shift to new version\n\n      # give user time to verify part of traffic shifting to newRevision\n      - name: manual-approval\n        type: suspend\n\n      - name: rollout-rest\n        type: canary-rollout\n        properties:\n          # upgrade all batches of component\n          batchPartition: 1\n          traffic:\n            weightedTargets:\n              - revision: reviews-v2\n                weight: 100 # 100% shift to new version\n...\n")),(0,r.kt)("p",null,"After the update is complete, visit the previous URL multiple times in the browser. There is about 10% probability that you will see the new page below,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic-v3",src:n(5291).Z})),(0,r.kt)("p",null,"It can be seen that the new version of the page has changed from the previous black five-pointed star to a red five-pointed star."),(0,r.kt)("h3",{id:"continue-with-full-release"},"Continue with Full Release"),(0,r.kt)("p",null,"If the service is found to meet expectations during manual verification, the Workflow needs to be continued to complete the full release. You can do that by executing the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vela workflow reumse book-info\n")),(0,r.kt)("p",null,"If you continue to verify the webpage several times on the browser, you will find that the five-pointed star will always be red."),(0,r.kt)("h3",{id:"rollback-to-the-old-version"},"Rollback to The Old Version"),(0,r.kt)("p",null,"During the manual verification, if the service does not meet the expectations, you can terminate the pre-defined release workflow and rollback the instances and the traffic to the previous version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/blob/master/docs/examples/canary-rollout-use-case/rollback.yaml\n")),(0,r.kt)("p",null,"This is basically updates the workflow to rollback step:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  ...\n  workflow:\n    steps:\n      - name: rollback\n        type: canary-rollback\n")),(0,r.kt)("p",null,"Under the hood, it changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the Rollout spec to target to the old version, which rolls replicas of new versions to the old version and keeps replicas of old version as is."),(0,r.kt)("li",{parentName:"ul"},"the VirtualService spec to shift all traffic to the old version."),(0,r.kt)("li",{parentName:"ul"},"the DestinationRule spec to update the subsets to only the old version.")),(0,r.kt)("p",null,"You see?! All the complexity of the work is kept away from users and provided in a simple step!"),(0,r.kt)("p",null,"Continue to visit the website on the browser, you will find that the five-pointed star has changed back to black."))}c.isMDXComponent=!0},95135:function(e,t,n){"use strict";t.Z=n.p+"assets/images/book-info-struct-a1463972b514f44c4539de316d9ea604.jpg"},56481:function(e,t,n){"use strict";t.Z=n.p+"assets/images/canary-pic-v2-ea721a9f475526add19e937768a6d833.jpg"},5291:function(e,t,n){"use strict";t.Z=n.p+"assets/images/canary-pic-v3-b7d54ecd0fe426cc3f34d9f7059120aa.jpg"}}]);