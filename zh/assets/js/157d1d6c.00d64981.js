(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[21653],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=u(n),k=r,d=s["".concat(p,".").concat(k)]||s[k]||c[k]||l;return n?a.createElement(d,i(i({ref:e},m),{},{components:n})):a.createElement(d,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},42320:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return m}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i={title:"Kustomize \u7ec4\u4ef6"},o={unversionedId:"end-user/components/kustomize",id:"end-user/components/kustomize",isDocsHomePage:!1,title:"Kustomize \u7ec4\u4ef6",description:"\u5b9a\u4e49",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/components/kustomize.md",sourceDirName:"end-user/components",slug:"/end-user/components/kustomize",permalink:"/zh/docs/next/end-user/components/kustomize",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/components/kustomize.md",version:"current",lastUpdatedBy:"qiaozp",lastUpdatedAt:1629708205,formattedLastUpdatedAt:"2021/8/23",frontMatter:{title:"Kustomize \u7ec4\u4ef6"},sidebar:"docs",previous:{title:"Helm \u7ec4\u4ef6",permalink:"/zh/docs/next/end-user/components/helm"},next:{title:"CUE \u7ec4\u4ef6",permalink:"/zh/docs/next/end-user/components/cue"}},p=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",children:[]},{value:"\u5f00\u59cb\u4e4b\u524d",id:"\u5f00\u59cb\u4e4b\u524d",children:[]},{value:"\u90e8\u7f72\u6765\u81ea\u4e0d\u540c\u6765\u6e90\u7684 Kustomize",id:"\u90e8\u7f72\u6765\u81ea\u4e0d\u540c\u6765\u6e90\u7684-kustomize",children:[{value:"\u6765\u81ea OSS bucket",id:"\u6765\u81ea-oss-bucket",children:[]},{value:"\u6765\u81ea Git \u4ed3\u5e93",id:"\u6765\u81ea-git-\u4ed3\u5e93",children:[]}]},{value:"\u8986\u5199 Kustomize \u914d\u7f6e",id:"\u8986\u5199-kustomize-\u914d\u7f6e",children:[]}],u={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u63cf\u8ff0\u4e00\u4e2a kustomize \uff0c\u6765\u81ea Git \u4ed3\u5e93\u3001OSS bucket\u3002"),(0,l.kt)("h2",{id:"\u5f00\u59cb\u4e4b\u524d"},"\u5f00\u59cb\u4e4b\u524d"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udd27 \u5f00\u542f ",(0,l.kt)("a",{parentName:"p",href:"../addons/fluxcd"},"fluxcd")," \u63d2\u4ef6\u5373\u53ef\u4f7f\u7528 kustomize \u7c7b\u578b\u7ec4\u4ef6\u3002")),(0,l.kt)("h2",{id:"\u90e8\u7f72\u6765\u81ea\u4e0d\u540c\u6765\u6e90\u7684-kustomize"},"\u90e8\u7f72\u6765\u81ea\u4e0d\u540c\u6765\u6e90\u7684 Kustomize"),(0,l.kt)("h3",{id:"\u6765\u81ea-oss-bucket"},"\u6765\u81ea OSS bucket"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u9009"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b\u5b50"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"repoType"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u503c\u4e3a oss \u6807\u5fd7 kustomize \u914d\u7f6e\u6765\u81ea OSS bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"oss")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pullInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0e bucket \u8fdb\u884c\u540c\u6b65\uff0c\u4e0e\u8c03\u8c10 kustomize \u7684\u65f6\u95f4\u95f4\u9694 \u9ed8\u8ba4\u503c5m\uff085\u5206\u949f\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"10m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:null},"bucket \u7684 endpoint\uff0c\u65e0\u9700\u586b\u5199 scheme"),(0,l.kt)("td",{parentName:"tr",align:null},"oss-cn-beijing.aliyuncs.com")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secretRef"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fdd\u5b58\u4e00\u4e2a Secret \u7684\u540d\u5b57\uff0c\u8be5Secret\u662f\u8bfb\u53d6 bucket \u7684\u51ed\u8bc1\u3002Secret \u5305\u542b accesskey \u548c secretkey \u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:null},"sec-name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0b\u8f7d\u64cd\u4f5c\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4 20s"),(0,l.kt)("td",{parentName:"tr",align:null},"60s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542b kustomization.yaml \u6587\u4ef6\u7684\u76ee\u5f55, \u6216\u8005\u5305\u542b\u4e00\u7ec4 YAML \u6587\u4ef6\uff08\u7528\u4ee5\u751f\u6210 kustomization.yaml )\u7684\u76ee\u5f55\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"./prod")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oss.bucketName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:null},"bucket \u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"your-bucket")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oss.provider"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009 generic \u6216 aws\uff0c\u82e5\u4ece aws EC2 \u83b7\u53d6\u51ed\u8bc1\u5219\u586b aws\u3002\u9ed8\u8ba4 generic\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"generic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oss.region"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"bucket \u5730\u533a"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u793a\u4f8b")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09\u5982\u679c\u4f60\u7684 OSS bucket \u9700\u8981\u8eab\u4efd\u9a8c\u8bc1, \u521b\u5efa Secret \u5bf9\u8c61:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl create secret generic bucket-secret --from-literal=accesskey=<your-ak> --from-literal=secretkey=<your-sk>\nsecret/bucket-secret created\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u90e8\u7f72 chart")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: bucket-app\nspec:\n  components:\n    - name: bucket-comp\n      type: kustomize\n      properties:\n        repoType: oss\n        # required if bucket is private\n        secretRef: bucket-secret\n        url: oss-cn-beijing.aliyuncs.com\n        oss:\n          bucketName: definition-registry\n        path: ./app/prod/\n            \n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0cApplication \u4e2d\u540d\u4e3a bucket-comp \u7684\u7ec4\u4ef6\u4ea4\u4ed8\u4e86\u4e00\u4e2a\u6765\u81ea endpoint \u4e3a oss-cn-beijing.aliyuncs.com \u7684 OSS bucket definition-registry \u7684 kustomize\u3002kustomize.yaml \u6240\u5728\u8def\u5f84\u4e3a ./app/prod/"),(0,l.kt)("h3",{id:"\u6765\u81ea-git-\u4ed3\u5e93"},"\u6765\u81ea Git \u4ed3\u5e93"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u9009"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b\u5b50"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"repoType"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u503c\u4e3a git \u6807\u5fd7 kustomize \u914d\u7f6e\u6765\u81ea Git \u4ed3\u5e93"),(0,l.kt)("td",{parentName:"tr",align:null},"git")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pullInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0e Git \u4ed3\u5e93\u8fdb\u884c\u540c\u6b65\uff0c\u4e0e\u8c03\u8c10 helm release \u7684\u65f6\u95f4\u95f4\u9694 \u9ed8\u8ba4\u503c5m\uff085\u5206\u949f\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"10m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:null},"Git \u4ed3\u5e93\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/oam-dev/terraform-controller"},"https://github.com/oam-dev/terraform-controller"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secretRef"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b58\u6709\u62c9\u53d6 Git \u4ed3\u5e93\u6240\u9700\u51ed\u8bc1\u7684 Secret \u5bf9\u8c61\u540d\uff0c\u5bf9 HTTP/S \u57fa\u672c\u9274\u6743 Secret \u4e2d\u5fc5\u987b\u5305\u542b  username \u548c password \u5b57\u6bb5\u3002\u5bf9 SSH \u5f62\u5f0f\u9274\u6743\u5fc5\u987b\u5305\u542b identity, identity.pub \u548c known_hosts \u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:null},"sec-name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0b\u8f7d\u64cd\u4f5c\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4 20s"),(0,l.kt)("td",{parentName:"tr",align:null},"60s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"git.branch"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"Git \u5206\u652f\uff0c\u9ed8\u8ba4\u4e3a master"),(0,l.kt)("td",{parentName:"tr",align:null},"dev")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: git-app\nspec:\n  components:\n    - name: git-comp\n      type: kustomize\n      properties:\n        repoType: git\n        url: https://github.com/<path>/<to>/<repo>\n        git:\n          branch: master\n        path: ./app/dev/\n")),(0,l.kt)("h2",{id:"\u8986\u5199-kustomize-\u914d\u7f6e"},"\u8986\u5199 Kustomize \u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: bucket-app\nspec:\n  components:\n    - name: bucket-comp\n      type: kustomize\n      properties:\n        # ...omitted for brevity\n        path: ./app/\n     \n")))}m.isMDXComponent=!0}}]);