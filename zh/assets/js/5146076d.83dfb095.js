(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[62927],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77864:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),i={title:"Worker"},c={unversionedId:"end-user/components/cue/default",id:"version-v1.1/end-user/components/cue/default",isDocsHomePage:!1,title:"Worker",description:"Description",source:"@site/versioned_docs/version-v1.1/end-user/components/cue/default.md",sourceDirName:"end-user/components/cue",slug:"/end-user/components/cue/default",permalink:"/zh/docs/end-user/components/cue/default",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/components/cue/default.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1629468747,formattedLastUpdatedAt:"2021/8/20",frontMatter:{title:"Worker"}},u=[{value:"Description",id:"description",children:[]},{value:"Samples",id:"samples",children:[]},{value:"Specification",id:"specification",children:[]}],s={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Describes long-running, scalable, containerized services that running at backend. They do NOT have network endpoint to receive external network traffic."),(0,a.kt)("h2",{id:"samples"},"Samples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: app-worker\nspec:\n  components:\n    - name: myworker\n      type: worker\n      properties:\n        image: "busybox"\n        cmd:\n          - sleep\n          - "1000"\n')),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"# Properties\n+-------+----------------------------------------------------+----------+----------+---------+\n| NAME  |                    DESCRIPTION                     |   TYPE   | REQUIRED | DEFAULT |\n+-------+----------------------------------------------------+----------+----------+---------+\n| cmd   | Commands to run in the container                   | []string | false    |         |\n| image | Which image would you like to use for your service | string   | true     |         |\n+-------+----------------------------------------------------+----------+----------+---------+\n")))}p.isMDXComponent=!0}}]);