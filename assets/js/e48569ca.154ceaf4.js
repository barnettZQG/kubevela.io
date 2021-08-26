(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[82211],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94305:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),l={title:"Setting Routes"},i={unversionedId:"developers/extensions/set-route",id:"version-v1.1/developers/extensions/set-route",isDocsHomePage:!1,title:"Setting Routes",description:"The route section is used to configure the access to your app.",source:"@site/versioned_docs/version-v1.1/developers/extensions/set-route.md",sourceDirName:"developers/extensions",slug:"/developers/extensions/set-route",permalink:"/docs/developers/extensions/set-route",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/extensions/set-route.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1629468747,formattedLastUpdatedAt:"8/20/2021",frontMatter:{title:"Setting Routes"}},s=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Setting route policy",id:"setting-route-policy",children:[]}],p={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"route")," section is used to configure the access to your app."),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"Make sure route trait controller is installed in your cluster"),(0,o.kt)("p",null,"Install route trait controller with helm"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add helm chart repo for route trait"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add oam.catalog  http://oam.dev/catalog/\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the chart repo"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo update\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install route trait controller"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system routetrait oam.catalog/routetrait\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: route is one of the extension capabilities ",(0,o.kt)("a",{parentName:"p",href:"../cap-center"},"installed from cap center"),",\nplease install it if you can't find it in ",(0,o.kt)("inlineCode",{parentName:"p"},"vela traits"),".")),(0,o.kt)("h2",{id:"setting-route-policy"},"Setting route policy"),(0,o.kt)("p",null,"Add routing config under ",(0,o.kt)("inlineCode",{parentName:"p"},"express-server"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  express-server:\n    ...\n\n    route:\n      domain: example.com\n      rules:\n        - path: /testapp\n          rewriteTarget: /\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The full specification of ",(0,o.kt)("inlineCode",{parentName:"p"},"route")," could show up by ",(0,o.kt)("inlineCode",{parentName:"p"},"$ vela show route"),".")),(0,o.kt)("p",null,"Apply again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n")),(0,o.kt)("p",null,"Check the status until we see route is ready:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela status testapp\nAbout:\n\n  Name:         testapp\n  Namespace:    default\n  Created at:   2020-11-04 16:34:43.762730145 -0800 PST\n  Updated at:   2020-11-11 16:21:37.761158941 -0800 PST\n\nServices:\n\n  - Name: express-server\n    Type: webservice\n    HEALTHY Ready: 1/1\n    Last Deployment:\n      Created at: 2020-11-11 16:21:37 -0800 PST\n      Updated at: 2020-11-11T16:21:37-08:00\n    Routes:\n      - route:  Visiting URL: http://example.com    IP: <ingress-IP-address>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In ",(0,o.kt)("a",{parentName:"strong",href:"../../getting-started/quick-install#kind"},"kind cluster setup")),", you can visit the service via localhost:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If not in kind cluster, replace 'localhost' with ingress address")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ curl -H "Host:example.com" http://localhost/testapp\nHello World\n')))}u.isMDXComponent=!0}}]);