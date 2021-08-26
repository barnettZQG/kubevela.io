(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[60524],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3065:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),l={title:"Alibaba RDS"},i={unversionedId:"end-user/components/cloud-services/terraform/alibaba-rds",id:"end-user/components/cloud-services/terraform/alibaba-rds",isDocsHomePage:!1,title:"Alibaba RDS",description:"In this documentation, we will use Alibaba Cloud's RDS (Relational Database Service) as example to show how to enable cloud services as part of the application deployment.",source:"@site/docs/end-user/components/cloud-services/terraform/alibaba-rds.md",sourceDirName:"end-user/components/cloud-services/terraform",slug:"/end-user/components/cloud-services/terraform/alibaba-rds",permalink:"/docs/next/end-user/components/cloud-services/terraform/alibaba-rds",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/components/cloud-services/terraform/alibaba-rds.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1629965533,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Alibaba RDS"},sidebar:"docs",previous:{title:"Cue Component",permalink:"/docs/next/end-user/components/cue"},next:{title:"Alibaba OSS",permalink:"/docs/next/end-user/components/cloud-services/terraform/alibaba-oss"}},s=[{value:"Enable Terraform via Vela Addon",id:"enable-terraform-via-vela-addon",children:[]},{value:"Install Component",id:"install-component",children:[]}],c={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this documentation, we will use Alibaba Cloud's RDS (Relational Database Service) as example to show how to enable cloud services as part of the application deployment."),(0,a.kt)("p",null,"These cloud services are provided by Terraform."),(0,a.kt)("h3",{id:"enable-terraform-via-vela-addon"},"Enable Terraform via Vela Addon"),(0,a.kt)("p",null,"KubeVela provides a powerful capability center based on Vela Addon, you could use one line of command to enable the capability you want. As for Terraform, simply type in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ vela addon enable terraform\nI0825 22:39:47.917598   38209 apply.go:93] "creating object" name="terraform" resource="core.oam.dev/v1beta1, Kind=Initializer"\nInitializer terraform is in phase:...\nSuccessfully enable addon:terraform\n')),(0,a.kt)("h3",{id:"install-component"},"Install Component"),(0,a.kt)("p",null,"Firstly, we had prepared the component for you. To install it, running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/terraform/cloud-resource-provision-and-consume/ComponentDefinition-alibaba-rds.yaml\n")),(0,a.kt)("p",null,"By using vela CLI ",(0,a.kt)("inlineCode",{parentName:"p"},"vela components"),", you will get to know whether this component is installed successfully into KubeVela."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela components\nNAME        NAMESPACE   WORKLOAD                                DESCRIPTION                                                 \nalibaba-rds default     configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud RDS object \n")),(0,a.kt)("p",null,"It's free to go! Let's combine it into application whenever you needed."))}u.isMDXComponent=!0}}]);