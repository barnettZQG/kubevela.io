(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[92771],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6816:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o={title:"vela system live-diff"},l={unversionedId:"cli/vela_system_live-diff",id:"version-v1.1/cli/vela_system_live-diff",isDocsHomePage:!1,title:"vela system live-diff",description:"Dry-run an application, and do diff on a specific app revison",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/cli/vela_system_live-diff.md",sourceDirName:"cli",slug:"/cli/vela_system_live-diff",permalink:"/zh/docs/cli/vela_system_live-diff",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/cli/vela_system_live-diff.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1629468747,formattedLastUpdatedAt:"2021/8/20",frontMatter:{title:"vela system live-diff"}},s=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dry-run an application, and do diff on a specific app revison"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Dry-run an application, and do diff on a specific app revison. The provided capability definitions will be used during Dry-run. If any capabilities used in the app are not found in the provided ones, it will try to find from cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vela system live-diff\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vela live-diff -f app-v2.yaml -r app-v1 --context 10\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  -r, --Revision string     specify an application Revision name, by default, it will compare with the latest Revision\n  -c, --context int         output number lines of context around changes, by default show all unchanged lines (default -1)\n  -d, --definition string   specify a file or directory containing capability definitions, they will only be used in dry-run rather than applied to K8s cluster\n  -f, --file string         application file name (default "./app.yaml")\n  -h, --help                help for live-diff\n')),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -e, --env string   specify environment name for application\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"vela_system"},"vela system"),"\t - System management utilities")),(0,a.kt)("h6",{id:"auto-generated-by-spf13cobra-on-19-aug-2021"},"Auto generated by spf13/cobra on 19-Aug-2021"))}c.isMDXComponent=!0}}]);