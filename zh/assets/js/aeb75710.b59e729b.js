(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[39590],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74121:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={title:"Automatically scale workloads by resource utilization metrics and cron"},l={unversionedId:"developers/extensions/set-autoscale",id:"version-v1.1/developers/extensions/set-autoscale",isDocsHomePage:!1,title:"Automatically scale workloads by resource utilization metrics and cron",description:"Prerequisite",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/developers/extensions/set-autoscale.md",sourceDirName:"developers/extensions",slug:"/developers/extensions/set-autoscale",permalink:"/zh/docs/developers/extensions/set-autoscale",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/developers/extensions/set-autoscale.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1629468747,formattedLastUpdatedAt:"2021/8/20",frontMatter:{title:"Automatically scale workloads by resource utilization metrics and cron"}},p=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Setting cron auto-scaling policy",id:"setting-cron-auto-scaling-policy",children:[]},{value:"Setting auto-scaling policy of CPU resource utilization",id:"setting-auto-scaling-policy-of-cpu-resource-utilization",children:[]}],s={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"Make sure auto-scaler trait controller is installed in your cluster"),(0,o.kt)("p",null,"Install auto-scaler trait controller with helm"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add helm chart repo for autoscaler trait"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add oam.catalog  http://oam.dev/catalog/\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the chart repo"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo update\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install autoscaler trait  controller"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system autoscalertrait oam.catalog/autoscalertrait\n")))),(0,o.kt)("p",null,"Autoscale depends on metrics server, please ",(0,o.kt)("a",{parentName:"p",href:"../references/devex/faq#autoscale-how-to-enable-metrics-server-in-various-kubernetes-clusters"},"enable it in your Kubernetes cluster")," at the beginning."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: autoscale is one of the extension capabilities ",(0,o.kt)("a",{parentName:"p",href:"../cap-center"},"installed from cap center"),",\nplease install it if you can't find it in ",(0,o.kt)("inlineCode",{parentName:"p"},"vela traits"),".")),(0,o.kt)("h2",{id:"setting-cron-auto-scaling-policy"},"Setting cron auto-scaling policy"),(0,o.kt)("p",null,"Introduce how to automatically scale workloads by cron."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Prepare Appfile"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\n\nservices:\n  express-server:\n    # this image will be used in both build and deploy steps\n    image: oamdev/testapp:v1\n\n    cmd: ["node", "server.js"]\n    port: 8080\n\n    autoscale:\n      min: 1\n      max: 4\n      cron:\n        startAt:  "14:00"\n        duration: "2h"\n        days:     "Monday, Thursday"\n        replicas: 2\n        timezone: "America/Los_Angeles"\n')))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The full specification of ",(0,o.kt)("inlineCode",{parentName:"p"},"autoscale")," could show up by ",(0,o.kt)("inlineCode",{parentName:"p"},"$ vela show autoscale"),".")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy an application"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ vela up\n  Parsing vela.yaml ...\n  Loading templates ...\n  \n  Rendering configs for service (express-server)...\n  Writing deploy config to (.vela/deploy.yaml)\n  \n  Applying deploy configs ...\n  Checking if app has been deployed...\n  App has not been deployed, creating a new deployment...\n  \u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n      Port forward: vela port-forward testapp\n               SSH: vela exec testapp\n           Logging: vela logs testapp\n        App status: vela status testapp\n    Service status: vela status testapp --svc express-server\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the replicas and wait for the scaling to take effect"),(0,o.kt)("p",{parentName:"li"},"Check the replicas of the application, there is one replica."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ vela status testapp\nAbout:\n\n  Name:         testapp\n  Namespace:    default\n  Created at:   2020-11-05 17:09:02.426632 +0800 CST\n  Updated at:   2020-11-05 17:09:02.426632 +0800 CST\n\nServices:\n\n  - Name: express-server\n    Type: webservice\n    HEALTHY Ready: 1/1\n    Traits:\n      - \u2705 autoscale: type: cron    replicas(min/max/current): 1/4/1\n    Last Deployment:\n      Created at: 2020-11-05 17:09:03 +0800 CST\n      Updated at: 2020-11-05T17:09:02+08:00\n")),(0,o.kt)("p",{parentName:"li"},"Wait till the time clocks ",(0,o.kt)("inlineCode",{parentName:"p"},"startAt"),", and check again. The replicas become to two, which is specified as\n",(0,o.kt)("inlineCode",{parentName:"p"},"replicas")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"vela.yaml"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ vela status testapp\nAbout:\n\n  Name:         testapp\n  Namespace:    default\n  Created at:   2020-11-10 10:18:59.498079 +0800 CST\n  Updated at:   2020-11-10 10:18:59.49808 +0800 CST\n\nServices:\n\n  - Name: express-server\n    Type: webservice\n    HEALTHY Ready: 2/2\n    Traits:\n      - \u2705 autoscale: type: cron    replicas(min/max/current): 1/4/2\n    Last Deployment:\n      Created at: 2020-11-10 10:18:59 +0800 CST\n      Updated at: 2020-11-10T10:18:59+08:00\n")),(0,o.kt)("p",{parentName:"li"},"Wait after the period ends, the replicas will be one eventually."))),(0,o.kt)("h2",{id:"setting-auto-scaling-policy-of-cpu-resource-utilization"},"Setting auto-scaling policy of CPU resource utilization"),(0,o.kt)("p",null,"Introduce how to automatically scale workloads by CPU resource utilization."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Prepare Appfile"),(0,o.kt)("p",{parentName:"li"},"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"vela.yaml")," as below. We add field ",(0,o.kt)("inlineCode",{parentName:"p"},"services.express-server.cpu")," and change the auto-scaling policy\nfrom cron to cpu utilization by updating filed ",(0,o.kt)("inlineCode",{parentName:"p"},"services.express-server.autoscale"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\n\nservices:\n  express-server:\n    image: oamdev/testapp:v1\n      \n    cmd: ["node", "server.js"]\n    port: 8080\n    cpu: "0.01"\n\n    autoscale:\n      min: 1\n      max: 5\n      cpuPercent: 10\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy an application"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Expose the service entrypoint of the application"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ vela port-forward helloworld 80\nForwarding from 127.0.0.1:80 -> 80\nForwarding from [::1]:80 -> 80\n\nForward successfully! Opening browser ...\nHandling connection for 80\nHandling connection for 80\nHandling connection for 80\nHandling connection for 80\n")),(0,o.kt)("p",{parentName:"li"},"On your macOS, you might need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo")," ahead of the command.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Monitor the replicas changing"),(0,o.kt)("p",{parentName:"li"},"Continue to monitor the replicas changing when the application becomes overloaded. You can use Apache HTTP server\nbenchmarking tool ",(0,o.kt)("inlineCode",{parentName:"p"},"ab")," to mock many requests to the application."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ ab -n 10000 -c 200 http://127.0.0.1/\nThis is ApacheBench, Version 2.3 <$Revision: 1843412 $>\nCopyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/\nLicensed to The Apache Software Foundation, http://www.apache.org/\n\nBenchmarking 127.0.0.1 (be patient)\nCompleted 1000 requests\n")),(0,o.kt)("p",{parentName:"li"},"The replicas gradually increase from one to four."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ vela status helloworld --svc frontend\nAbout:\n\n  Name:         helloworld\n  Namespace:    default\n  Created at:   2020-11-05 20:07:21.830118 +0800 CST\n  Updated at:   2020-11-05 20:50:42.664725 +0800 CST\n\nServices:\n\n  - Name: frontend\n    Type: webservice\n    HEALTHY Ready: 1/1\n    Traits:\n      - \u2705 autoscale: type: cpu     cpu-utilization(target/current): 5%/10%  replicas(min/max/current): 1/5/2\n    Last Deployment:\n      Created at: 2020-11-05 20:07:23 +0800 CST\n      Updated at: 2020-11-05T20:50:42+08:00\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ vela status helloworld --svc frontend\nAbout:\n\n  Name:         helloworld\n  Namespace:    default\n  Created at:   2020-11-05 20:07:21.830118 +0800 CST\n  Updated at:   2020-11-05 20:50:42.664725 +0800 CST\n\nServices:\n\n  - Name: frontend\n    Type: webservice\n    HEALTHY Ready: 1/1\n    Traits:\n      - \u2705 autoscale: type: cpu     cpu-utilization(target/current): 5%/14%  replicas(min/max/current): 1/5/4\n    Last Deployment:\n      Created at: 2020-11-05 20:07:23 +0800 CST\n      Updated at: 2020-11-05T20:50:42+08:00\n")),(0,o.kt)("p",{parentName:"li"},"Stop ",(0,o.kt)("inlineCode",{parentName:"p"},"ab")," tool, and the replicas will decrease to one eventually."))))}c.isMDXComponent=!0}}]);