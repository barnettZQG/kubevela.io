(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[77581],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97415:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Task"},c={unversionedId:"end-user/components/cue/task",id:"version-v1.1/end-user/components/cue/task",isDocsHomePage:!1,title:"Task",description:"Description",source:"@site/versioned_docs/version-v1.1/end-user/components/cue/task.md",sourceDirName:"end-user/components/cue",slug:"/end-user/components/cue/task",permalink:"/docs/end-user/components/cue/task",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/components/cue/task.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1629468747,formattedLastUpdatedAt:"8/20/2021",frontMatter:{title:"Task"}},s=[{value:"Description",id:"description",children:[]},{value:"Samples",id:"samples",children:[]},{value:"Specification",id:"specification",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Describes jobs that run code or a script to completion."),(0,a.kt)("h2",{id:"samples"},"Samples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: app-worker\nspec:\n  components:\n    - name: mytask\n      type: task\n      properties:\n        image: perl\n        count: 10\n        cmd: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n')),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"# Properties\n+---------+--------------------------------------------------------------------------------------------------+----------+----------+---------+\n|  NAME   |                                           DESCRIPTION                                            |   TYPE   | REQUIRED | DEFAULT |\n+---------+--------------------------------------------------------------------------------------------------+----------+----------+---------+\n| cmd     | Commands to run in the container                                                                 | []string | false    |         |\n| count   | specify number of tasks to run in parallel                                                       | int      | true     |       1 |\n| restart | Define the job restart policy, the value can only be Never or OnFailure. By default, it's Never. | string   | true     | Never   |\n| image   | Which image would you like to use for your service                                               | string   | true     |         |\n+---------+--------------------------------------------------------------------------------------------------+----------+----------+---------+\n")))}p.isMDXComponent=!0}}]);