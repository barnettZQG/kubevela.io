(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[7184],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23389:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var a=t(22122),r=t(19756),l=(t(67294),t(3905)),i={title:"\u7ec4\u4ef6\u4ea4\u4ed8"},o={unversionedId:"end-user/component-delivery",id:"end-user/component-delivery",isDocsHomePage:!1,title:"\u7ec4\u4ef6\u4ea4\u4ed8",description:"\u7ec4\u4ef6\uff08Components\uff09\u662f\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7684\u6838\u5fc3\u7ec4\u6210\u4e4b\u4e00\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u6784\u5efa\u6700\u5e38\u89c1\u7684\u670d\u52a1\u7c7b\u578b\uff0c\u6bd4\u5982\u4e00\u4e2a\u5bf9\u5916\u63d0\u4f9b\u8bbf\u95ee\u7684 Web Service\u3001\u4e00\u4e2a\u5728\u540e\u7aef\u8dd1\u5b9a\u65f6\u4efb\u52a1\u7684 Worker\uff0c\u53c8\u6216\u8005\u5f00\u542f Redis \u548c\u5f15\u7528 OSS \u7b49\u7b49\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/component-delivery.md",sourceDirName:"end-user",slug:"/end-user/component-delivery",permalink:"/zh/docs/next/end-user/component-delivery",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/component-delivery.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1630496336,formattedLastUpdatedAt:"2021/9/1",frontMatter:{title:"\u7ec4\u4ef6\u4ea4\u4ed8"},sidebar:"docs",previous:{title:"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212",permalink:"/zh/docs/next/core-concepts/application"},next:{title:"\u7ed1\u5b9a\u8fd0\u7ef4\u7279\u5f81",permalink:"/zh/docs/next/end-user/binding-traits"}},p=[{value:"\u67e5\u770b KubeVela \u7684\u7ec4\u4ef6\u7c7b\u578b",id:"\u67e5\u770b-kubevela-\u7684\u7ec4\u4ef6\u7c7b\u578b",children:[]},{value:"\u4f7f\u7528\u670d\u52a1\u578b\u7ec4\u4ef6(webservice)\u90e8\u7f72\u5e94\u7528",id:"\u4f7f\u7528\u670d\u52a1\u578b\u7ec4\u4ef6webservice\u90e8\u7f72\u5e94\u7528",children:[]},{value:"\u4f7f\u7528 Helm \u7ec4\u4ef6\u90e8\u7f72\u5e94\u7528",id:"\u4f7f\u7528-helm-\u7ec4\u4ef6\u90e8\u7f72\u5e94\u7528",children:[]},{value:"\u4f7f\u7528 Kustomize \u7ec4\u4ef6\u90e8\u7f72\u5e94\u7528",id:"\u4f7f\u7528-kustomize-\u7ec4\u4ef6\u90e8\u7f72\u5e94\u7528",children:[]},{value:"\u4f7f\u7528\u4e91\u8d44\u6e90\u7ec4\u4ef6",id:"\u4f7f\u7528\u4e91\u8d44\u6e90\u7ec4\u4ef6",children:[]},{value:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],s={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u7ec4\u4ef6\uff08Components\uff09\u662f\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7684\u6838\u5fc3\u7ec4\u6210\u4e4b\u4e00\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u6784\u5efa\u6700\u5e38\u89c1\u7684\u670d\u52a1\u7c7b\u578b\uff0c\u6bd4\u5982\u4e00\u4e2a\u5bf9\u5916\u63d0\u4f9b\u8bbf\u95ee\u7684 Web Service\u3001\u4e00\u4e2a\u5728\u540e\u7aef\u8dd1\u5b9a\u65f6\u4efb\u52a1\u7684 Worker\uff0c\u53c8\u6216\u8005\u5f00\u542f Redis \u548c\u5f15\u7528 OSS \u7b49\u7b49\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u5e2e\u4f60\u5feb\u901f\u800c\u5168\u9762\u7684\u843d\u5730\u4e1a\u52a1\uff0cKubeVela \u63d0\u4f9b\u4e86\u5927\u91cf\u5f00\u7bb1\u5373\u7528\u7684\u7ec4\u4ef6\u7c7b\u578b\uff0c\u4e0d\u4ec5\u5305\u542b\u4e86\u9762\u5411\u5e38\u89c4\u5fae\u670d\u52a1\u573a\u666f\u7684\u4e1a\u52a1\u578b\u7ec4\u4ef6\uff0c\u5982\u201d\u670d\u52a1\u578b\u7ec4\u4ef6\u201d\uff08webservice\uff09\u3001\u201c\u540e\u53f0\u8fd0\u884c\u7ec4\u4ef6\u201d\uff08worker\uff09\u3001\u201c\u4e00\u6b21\u6027\u4efb\u52a1\u7ec4\u4ef6\u201d\uff08task\uff09\u7b49\uff0c\u8fd8\u5305\u542b\u4e86\u9762\u5411\u793e\u533a\u4e0d\u540c\u5236\u54c1\u7c7b\u522b\u7684\u901a\u7528\u578b\u7ec4\u4ef6\uff0c\u5982\u652f\u6301 Helm Chart \u7684\u201cHelm \u7ec4\u4ef6\u201d\u3001\u652f\u6301 Git \u4ed3\u5e93\u7684\u201cKustomize \u7ec4\u4ef6\u201d\u7b49\uff0c\u540c\u65f6\u8fd8\u5305\u542b\u4e86\u4e00\u7cfb\u5217\u5e38\u7528\u7684\u4e91\u670d\u52a1\u7ec4\u4ef6\u3002\u5982\u679c KubeVela \u5185\u7f6e\u7684\u7ec4\u4ef6\u7c7b\u578b\u4e0d\u80fd\u6ee1\u8db3\u4f60\u7684\u5168\u90e8\u9700\u6c42\uff0cKubeVela \u8fd8\u62e5\u6709\u51e0\u4e4e\u53ef\u4ee5\u5bf9\u63a5\u4efb\u610f\u7c7b\u578b\u7ec4\u4ef6\u5236\u54c1\u7684\u6269\u5c55\u80fd\u529b\u3002"),(0,l.kt)("h2",{id:"\u67e5\u770b-kubevela-\u7684\u7ec4\u4ef6\u7c7b\u578b"},"\u67e5\u770b KubeVela \u7684\u7ec4\u4ef6\u7c7b\u578b"),(0,l.kt)("p",null,"\u6211\u4eec\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"../getting-started/quick-install#3-get-kubevela-cli"},"KubeVela CLI")," \u6765\u67e5\u770b\u7cfb\u7edf\u4e2d\u53ef\u7528\u7ec4\u4ef6\u7c7b\u578b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela components\nNAME        NAMESPACE   WORKLOAD                                DESCRIPTION                                                            \nalibaba-ack vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud ACK cluster       \nalibaba-oss vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud OSS object        \nalibaba-rds vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud RDS object        \nhelm        vela-system autodetects.core.oam.dev                helm release is a group of K8s resources from either git    \n                                                                repository or helm repo                                     \nkustomize   vela-system autodetects.core.oam.dev                kustomize can fetching, building, updating and applying     \n                                                                Kustomize manifests from git repo.                          \nraw         vela-system autodetects.core.oam.dev                raw allow users to specify raw K8s object in properties     \ntask        vela-system jobs.batch                              Describes jobs that run code or a script to completion.     \nwebservice  vela-system deployments.apps                        Describes long-running, scalable, containerized services    \n                                                                that have a stable network endpoint to receive external     \n                                                                network traffic from customers.                             \nworker      vela-system deployments.apps                        Describes long-running, scalable, containerized services    \n                                                                that running at backend. They do NOT have network endpoint  \n                                                                to receive external network traffic.    \n")),(0,l.kt)("p",null,"\u6bcf\u4e2a\u7c7b\u578b\u5177\u4f53\u662f\u6307\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"webservice"),"\uff1a\u957f\u65f6\u95f4\u8fd0\u884c\u3001\u5f39\u6027\u7684\u5bb9\u5668\u5316\u670d\u52a1\uff0c\u5bf9\u5916\u63d0\u4f9b\u8bbf\u95ee"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"worker"),"\uff1a\u957f\u65f6\u95f4\u8fd0\u884c\u3001\u5f39\u6027\u3001\u5bb9\u5668\u5316\u7684\u540e\u7aef\u670d\u52a1\uff0c\u4e0d\u5bf9\u5916\u8bbf\u95ee"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"task"),"\uff1a\u8dd1\u4ee3\u7801\u6216\u8005\u811a\u672c\u7684\u4e00\u6b21\u6027\u4efb\u52a1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"helm"),"\uff1a\u9762\u5411\u793e\u533a\u4e0d\u540c\u5236\u54c1\u7c7b\u522b\u7684\u901a\u7528\u578b Helm \u7ec4\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kustomize"),"\uff1a\u9762\u5411\u793e\u533a\u4e0d\u540c\u5236\u54c1\u7c7b\u522b\u7684\u901a\u7528\u578b Kustomize \u7ec4\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alibaba-ack"),"\uff1a\u4e91\u8d44\u6e90\u4e4b\u4e00\uff0c\u963f\u91cc\u4e91\u5bb9\u5668\u670d\u52a1 Kubernetes \u7248\uff08ACK \uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alibaba-oss"),"\uff1a\u4e91\u8d44\u6e90\u4e4b\u4e00\uff0c\u963f\u91cc\u4e91\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\uff08OSS\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alibaba-rds"),"\uff1a\u4e91\u8d44\u6e90\u4e4b\u4e00\uff0c\u963f\u91cc\u4e91\u5173\u7cfb\u578b\u6570\u636e\u5e93\u670d\u52a1\uff08RDS\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"raw"),"\uff1a\u76f4\u63a5\u5f15\u7528\u539f\u751f\u7684 Kubernetes \u8d44\u6e90\u5bf9\u8c61\u7684\u7ec4\u4ef6")),(0,l.kt)("p",null,"\u4e0b\u9762\u8ba9\u6211\u4eec\u4ee5\u51e0\u4e2a\u5178\u578b\u7684\u7ec4\u4ef6\u7c7b\u578b\u4e3a\u4f8b\uff0c\u4ecb\u7ecd KubeVela \u7ec4\u4ef6\u4ea4\u4ed8\u7684\u7528\u6cd5\u3002\u5982\u679c\u4f60\u5e0c\u671b\u76f4\u63a5\u67e5\u770b\u4e91\u8d44\u6e90\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u8bf7\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"./cloud-services"},"\u96c6\u6210\u4e91\u8d44\u6e90"),"\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u670d\u52a1\u578b\u7ec4\u4ef6webservice\u90e8\u7f72\u5e94\u7528"},"\u4f7f\u7528\u670d\u52a1\u578b\u7ec4\u4ef6(webservice)\u90e8\u7f72\u5e94\u7528"),(0,l.kt)("p",null,"\u670d\u52a1\u578b\u7ec4\u4ef6\u662f\u4ee5\u5bb9\u5668\u4e3a\u6838\u5fc3\u652f\u6491\u5bf9\u5916\u8bbf\u95ee\u670d\u52a1\u7684\u7ec4\u4ef6\uff0c\u5176\u529f\u80fd\u6db5\u76d6\u4e86\u4e3b\u6d41\u5fae\u670d\u52a1\u573a\u666f\u7684\u9700\u8981\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u4fbf\u4e8e\u4f60\u5feb\u901f\u5b66\u4e60\uff0c\u8bf7\u76f4\u63a5\u590d\u5236\u4e0b\u9762\u7684 Shell \u6267\u884c\uff0c\u4f1a\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF | kubectl apply -f -\n# YAML \u6587\u4ef6\u5f00\u59cb\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend\n      type: webservice\n      properties:\n        image: oamdev/testapp:v1\n        cmd: ["node", "server.js"]\n        port: 8080\n        cpu: "0.1"\n        env:\n          - name: FOO\n            value: bar\n# YAML \u6587\u4ef6\u7ed3\u675f\nEOF\n')),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u81ea\u884c\u5c06 YAML \u6587\u4ef6\u4fdd\u5b58\u4e3a website.yaml\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl apply -f website.yaml")," \u547d\u4ee4\u8fdb\u884c\u90e8\u7f72\u3002"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get application <\u5e94\u7528 name> -o yaml")," \u67e5\u770b\u5e94\u7528\u7684\u90e8\u7f72\u72b6\u6001\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get application website -o yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\n  ... #  \u7701\u7565\u975e\u5173\u952e\u4fe1\u606f\nspec:\n  components:\n  - name: frontend\n    properties:\n      ... #  \u7701\u7565\u975e\u5173\u952e\u4fe1\u606f\n    type: webservice\nstatus:\n  conditions:\n  - lastTransitionTime: "2021-08-28T10:26:47Z"\n    reason: Available\n    status: "True"\n    ... #  \u7701\u7565\u975e\u5173\u952e\u4fe1\u606f\n    type: HealthCheck\n  observedGeneration: 1\n  ... #  \u7701\u7565\u975e\u5173\u952e\u4fe1\u606f\n  services:\n  - healthy: true\n    name: frontend\n    workloadDefinition:\n      apiVersion: apps/v1\n      kind: Deployment\n  status: running\n')),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u770b\u5230 status-services-healthy \u7684\u5b57\u6bb5\u4e3a true\uff0c\u5e76\u4e14 status \u4e3a running \u65f6\uff0c\u5373\u8868\u793a\u6574\u4e2a\u5e94\u7528\u4ea4\u4ed8\u6210\u529f\u3002"),(0,l.kt)("p",null,"\u5982\u679c status \u663e\u793a\u4e3a rendering\uff0c\u6216\u8005 healthy \u4e3a false\uff0c\u5219\u8868\u793a\u5e94\u7528\u8981\u4e48\u90e8\u7f72\u5931\u8d25\uff0c\u8981\u4e48\u8fd8\u5728\u90e8\u7f72\u4e2d\u3002\u8bf7\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get application <\u5e94\u7528 name> -o yaml")," \u4e2d\u8fd4\u56de\u7684\u4fe1\u606f\u5bf9\u5e94\u5730\u8fdb\u884c\u5904\u7406\u3002"),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 vela \u7684 CLI \u67e5\u770b\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\nAPP     COMPONENT   TYPE        TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME                 \nwebsite frontend    webservice          running healthy         2021-08-28 18:26:47 +0800 CST\n")),(0,l.kt)("p",null,"\u6211\u4eec\u4e5f\u770b\u5230 website APP \u7684 PHASE \u4e3a running\uff0c\u540c\u65f6 STATUS \u4e3a healthy\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528-helm-\u7ec4\u4ef6\u90e8\u7f72\u5e94\u7528"},"\u4f7f\u7528 Helm \u7ec4\u4ef6\u90e8\u7f72\u5e94\u7528"),(0,l.kt)("p",null,"KubeVela \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," \u7ec4\u4ef6\u6ee1\u8db3\u4e86\u7528\u6237\u5bf9\u63a5 Helm Chart \u7684\u9700\u6c42\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," \u7ec4\u4ef6\u90e8\u7f72\u4efb\u610f\u6765\u81ea Helm \u4ed3\u5e93\u3001Git \u4ed3\u5e93\u6216\u8005 OSS bucket \u7684\u73b0\u6210 Helm chart \u8f6f\u4ef6\u5305\uff0c\u5e76\u5bf9\u5176\u8fdb\u884c\u53c2\u6570\u8986\u76d6\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u4ee5\u6765\u81ea Helm \u4ed3\u5e93\u7684 Chart \u5305\u90e8\u7f72\u65b9\u5f0f\uff0c\u8fdb\u884c\u793a\u4f8b\u8bb2\u89e3\u3002\u5728\u8fd9\u6b21\u7684\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u4e2d\uff0c\u5e0c\u671b\u4ea4\u4ed8\u7684\u662f\u4e00\u4e2a\u540d\u4e3a redis-comp \u7684\u7ec4\u4ef6\u3002\u5b83\u662f\u6765\u81ea ",(0,l.kt)("a",{parentName:"p",href:"https://charts.bitnami.com/bitnami"},"https://charts.bitnami.com/bitnami")," Helm \u4ed3\u5e93\u7684 Chart\u3002Chart \u7c7b\u578b\u4e3a redis-cluster\uff0c\u7248\u672c 6.2.7\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: app-delivering-chart\nspec:\n  components:\n    - name: redis-comp\n      type: helm\n      properties:\n        chart: redis-cluster\n        version: 6.2.7\n        url: https://charts.bitnami.com/bitnami\n        repoType: helm\nEOF\n")),(0,l.kt)("p",null,"\u8bf7\u590d\u5236\u4e0a\u9762\u7684\u4ee3\u7801\u5757\uff0c\u76f4\u63a5\u90e8\u7f72\u5230\u8fd0\u884c\u65f6\u96c6\u7fa4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"application.core.oam.dev/app-delivering-chart created\n")),(0,l.kt)("p",null,"\u6700\u540e\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"vela ls")," \u6765\u67e5\u770b\u4ea4\u4ed8\u6210\u529f\u540e\u7684\u5e94\u7528\u72b6\u6001\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"APP                     COMPONENT   TYPE        TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME                 \napp-delivering-chart    redis-comp  helm                running healthy         2021-08-28 18:48:21 +0800 CST\n")),(0,l.kt)("p",null,"\u6211\u4eec\u4e5f\u770b\u5230 app-delivering-chart APP \u7684 PHASE \u4e3a running\uff0c\u540c\u65f6 STATUS \u4e3a healthy\u3002"),(0,l.kt)("p",null,"\u5173\u4e8e Git \u4ed3\u5e93\u548c OSS bucket \u7684\u4f7f\u7528\u793a\u4f8b\uff0c\u4ee5\u53ca\u5173\u4e8e\u5b83\u4eec\u7684\u8be6\u7ec6\u914d\u7f6e\u9879\u4fe1\u606f\uff0c\u8bf7\u524d\u5f80\u7ba1\u7406\u5458\u624b\u518c\u91cc\u7684",(0,l.kt)("a",{parentName:"p",href:"../platform-engineers/components/build-in-component"},"\u5185\u7f6e\u7ec4\u4ef6"),"\u67e5\u9605\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528-kustomize-\u7ec4\u4ef6\u90e8\u7f72\u5e94\u7528"},"\u4f7f\u7528 Kustomize \u7ec4\u4ef6\u90e8\u7f72\u5e94\u7528"),(0,l.kt)("p",null,"KubeVela \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"kustomize")," \u7ec4\u4ef6\u6ee1\u8db3\u4e86\u7528\u6237\u76f4\u63a5\u5bf9\u63a5 Yaml \u6587\u4ef6\u3001\u6587\u4ef6\u5939\u4f5c\u4e3a\u7ec4\u4ef6\u5236\u54c1\u7684\u9700\u6c42\u3002\u65e0\u8bba\u4f60\u7684 Yaml \u6587\u4ef6/\u6587\u4ef6\u5939\u662f\u5b58\u653e\u5728 Git \u4ed3\u5e93\u8fd8\u662f OSS bucket\uff0cKubeVela \u5747\u80fd\u8bfb\u53d6\u5e76\u4ea4\u4ed8\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u4ee5\u6765\u81ea OSS bucket \u4ed3\u5e93 YAML \u6587\u4ef6\u5939\u7ec4\u4ef6\u4e3a\u4f8b\u6765\u505a\u7528\u6cd5\u7684\u8bb2\u89e3\u3002\u8fd9\u4e00\u6b21\u7684\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u4e2d\uff0c\u5e0c\u671b\u4ea4\u4ed8\u7684\u662f\u4e00\u4e2a\u540d\u4e3a bucket-comp \u7684\u7ec4\u4ef6\u3002\u7ec4\u4ef6\u5bf9\u5e94\u7684\u90e8\u7f72\u6587\u4ef6\u5b58\u653e\u5728\u4e91\u5b58\u50a8 OSS bucket\uff0c\u4f7f\u7528\u5bf9\u5e94 bucket \u540d\u79f0\u662f definition-registry\u3002kustomize.yaml \u6765\u81ea oss-cn-beijing.aliyuncs.com \u7684\u8fd9\u4e2a\u5730\u5740\uff0c\u6240\u5728\u8def\u5f84\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"./app/prod/"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: bucket-app\nspec:\n  components:\n    - name: bucket-comp\n      type: kustomize\n      properties:\n        repoType: oss\n        # \u5982\u679c bucket \u662f\u79c1\u7528\u6743\u9650\uff0c\u4f1a\u9700\u8981\u4f60\u63d0\u4f9b\n        secretRef: bucket-secret\n        url: oss-cn-beijing.aliyuncs.com\n        oss:\n          bucketName: definition-registry\n        path: ./app/prod/\nEOF\n")),(0,l.kt)("p",null,"\u8bf7\u590d\u5236\u4e0a\u9762\u7684\u4ee3\u7801\u5757\uff0c\u76f4\u63a5\u90e8\u7f72\u5230\u8fd0\u884c\u65f6\u96c6\u7fa4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"application.core.oam.dev/bucket-app created\n")),(0,l.kt)("p",null,"\u6700\u540e\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"vela ls")," \u6765\u67e5\u770b\u4ea4\u4ed8\u6210\u529f\u540e\u7684\u5e94\u7528\u72b6\u6001\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela ls\nAPP                     COMPONENT   TYPE        TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME                 \nbucket-app              bucket-comp kustomize           running healthy         2021-08-28 18:53:14 +0800 CST\n")),(0,l.kt)("p",null,"bucket-app APP \u7684 PHASE \u4e3a running\uff0c\u540c\u65f6 STATUS \u4e3a healthy\u3002\u5e94\u7528\u90e8\u7f72\u6210\u529f\uff01"),(0,l.kt)("p",null,"\u5173\u4e8e Git \u4ed3\u5e93\u7684\u4f7f\u7528\u793a\u4f8b\uff0c\u4ee5\u53ca\u5173\u4e8e\u5b83\u4eec\u7684\u8be6\u7ec6\u914d\u7f6e\u9879\u4fe1\u606f\uff0c\u8bf7\u524d\u5f80\u7ba1\u7406\u5458\u624b\u518c\u91cc\u7684",(0,l.kt)("a",{parentName:"p",href:"../platform-engineers/components/build-in-component"},"\u5185\u7f6e\u7ec4\u4ef6"),"\u67e5\u9605\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u4e91\u8d44\u6e90\u7ec4\u4ef6"},"\u4f7f\u7528\u4e91\u8d44\u6e90\u7ec4\u4ef6"),(0,l.kt)("p",null,"\u4e91\u8d44\u6e90\u7ec4\u4ef6\u4e5f\u662f KubeVela \u652f\u6301\u7684\u6838\u5fc3\u7ec4\u4ef6\uff0c\u4e91\u8d44\u6e90\u5f80\u5f80\u4e0d\u4f1a\u5355\u72ec\u4f7f\u7528\uff0c\u5982\u6570\u636e\u5e93\u3001\u7f13\u5b58\u7b49\u4e91\u8d44\u6e90\uff0c\u5f80\u5f80\u9700\u8981\u5728\u521b\u5efa\u4e4b\u540e\u5c06\u76f8\u5173\u4fe1\u606f\u4f20\u9012\u5230\u5176\u4ed6\u7ec4\u4ef6\u4f7f\u7528\uff0c\u540c\u65f6\u4e91\u8d44\u6e90\u6d89\u53ca\u5230\u4e0d\u540c\u4e91\u5382\u5546\uff0c\u4ee5\u53ca\u4e00\u4e9b\u9274\u6743\u76f8\u5173\u7684\u51c6\u5907\u5de5\u4f5c\uff0c\u6211\u4eec\u5c06\u5728",(0,l.kt)("a",{parentName:"p",href:"./cloud-services"},"\u96c6\u6210\u4e91\u8d44\u6e90"),"\u8fd9\u4e2a\u7ae0\u8282\u72ec\u7acb\u8bb2\u89e3\u3002"),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4ee5\u4e0a KubeVela \u5185\u7f6e\u7684\u5f00\u7bb1\u7ec4\u4ef6\u90fd\u65e0\u6cd5\u6ee1\u8db3\u9700\u6c42\u7684\u65f6\u5019\uff0c\u4e0d\u8981\u62c5\u5fc3\uff0cKubeVela \u63d0\u4f9b\u4e86\u5f3a\u5927\u4e86\u6269\u5c55\u80fd\u529b\uff0c\u51e0\u4e4e\u53ef\u4ee5\u5bf9\u63a5\u4efb\u610f\u7c7b\u578b\u7684\u7ec4\u4ef6\u5f62\u6001\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u7ba1\u7406\u5458\u624b\u518c\u91cc\u7684",(0,l.kt)("a",{parentName:"p",href:"../platform-engineers/components/custom-component"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),"\u5b66\u4e60\u4f7f\u7528 CUE \u548c Kubernetes \u6269\u5c55 KubeVela \u7684\u7ec4\u4ef6\u7c7b\u578b\u3002"),(0,l.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bbf\u95ee",(0,l.kt)("a",{parentName:"li",href:"./cloud-services"},"\u96c6\u6210\u4e91\u8d44\u6e90"),"\u6587\u6863\uff0c\u638c\u63e1\u4e0d\u540c\u7c7b\u578b\u4e0d\u540c\u5382\u5546\u7684\u4e91\u8d44\u6e90\u96c6\u6210\u65b9\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u8bbf\u95ee",(0,l.kt)("a",{parentName:"li",href:"./binding-traits"},"\u7ed1\u5b9a\u8fd0\u7ef4\u7279\u5f81"),"\u6587\u6863\uff0c\u638c\u63e1\u5982\u4f55\u7ed9\u7ec4\u4ef6\u7ed1\u5b9a\u4f60\u9700\u8981\u7684\u8fd0\u7ef4\u52a8\u4f5c\u548c\u7b56\u7565")))}c.isMDXComponent=!0}}]);