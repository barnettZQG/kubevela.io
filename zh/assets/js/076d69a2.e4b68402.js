(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[47973],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(v,p(p({ref:n},c),{},{components:t})):r.createElement(v,p({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35304:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),p={title:"Expose Application"},i={unversionedId:"end-user/traits/ingress",id:"version-v1.0/end-user/traits/ingress",isDocsHomePage:!1,title:"Expose Application",description:"\u26a0\ufe0f \u672c\u7ae0\u8282\u8981\u6c42\u5f53\u524d\u96c6\u7fa4\u5df2\u7ecf\u5b89\u88c5 ingress \u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/end-user/traits/ingress.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/ingress",permalink:"/zh/docs/v1.0/end-user/traits/ingress",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/traits/ingress.md",version:"v1.0",lastUpdatedBy:"guoxudong",lastUpdatedAt:1622708793,formattedLastUpdatedAt:"2021/6/3",frontMatter:{title:"Expose Application"},sidebar:"version-v1.0/docs",previous:{title:"Want More?",permalink:"/zh/docs/v1.0/end-user/components/more"},next:{title:"Manual Scaling",permalink:"/zh/docs/v1.0/end-user/traits/scaler"}},s=[],l={toc:s};function c(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u672c\u7ae0\u8282\u8981\u6c42\u5f53\u524d\u96c6\u7fa4\u5df2\u7ecf\u5b89\u88c5 ingress \u3002")),(0,o.kt)("p",null,"\u5982\u679c\u6211\u4eec\u9700\u8981\u5c06 application \u4e2d\u7684\u670d\u52a1\u66b4\u9732\u5bf9\u5916\uff0c\u53ea\u9700\u8981\u5728\u8be5 application \u4e2d\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"ingress")," \u7684 trait\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 kubectl \u67e5\u770b ingress \u6570\u636e\u7ed3\u6784\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show ingress\n# Properties\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n|  NAME  |                                 DESCRIPTION                                  |      TYPE      | REQUIRED | DEFAULT |\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n| http   | Specify the mapping relationship between the http path and the workload port | map[string]int | true     |         |\n| domain | Specify the domain you want to expose                                        | string         | true     |         |\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n")),(0,o.kt)("p",null,"\u968f\u540e\uff0c\u4fee\u6539\u4e14\u90e8\u7f72\u4e0b\u9762 application \uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# vela-app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela-app.yaml\napplication.core.oam.dev/first-vela-app created\n")),(0,o.kt)("p",null,"\u5f53\u72b6\u6001 ",(0,o.kt)("inlineCode",{parentName:"p"},"PHASE")," \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"running")," \u4e14 ",(0,o.kt)("inlineCode",{parentName:"p"},"HEALTHY")," \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u8bf4\u660e application \u5df2\u7ecf\u88ab\u6b63\u786e\u90e8\u7f72\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get application first-vela-app -w\nNAME             COMPONENT        TYPE         PHASE            HEALTHY   STATUS   AGE\nfirst-vela-app   express-server   webservice   healthChecking                      14s\nfirst-vela-app   express-server   webservice   running          true               42s\n")),(0,o.kt)("p",null,"\u540c\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u547d\u4ee4\u884c\u67e5\u770b trait \u7684\u8be6\u60c5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get application first-vela-app -o yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-app\n  namespace: default\nspec:\n...\n  services:\n  - healthy: true\n    name: express-server\n    traits:\n    - healthy: true\n      message: 'Visiting URL: testsvc.example.com, IP: 47.111.233.220'\n      type: ingress\n  status: running\n...\n")),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8bbf\u95ee\u90e8\u7f72\u7684\u670d\u52a1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ curl -H "Host:testsvc.example.com" http://<your ip address>/\n<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')))}c.isMDXComponent=!0}}]);