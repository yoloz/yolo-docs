"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},l=void 0,o={unversionedId:"bigdata/elasticsearch",id:"bigdata/elasticsearch",title:"elasticsearch",description:"\u79fb\u9664 8.x \u4e2d module \u7684 ml",source:"@site/docs/bigdata/elasticsearch.md",sourceDirName:"bigdata",slug:"/bigdata/elasticsearch",permalink:"/docs/bigdata/elasticsearch",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/elasticsearch.md",tags:[],version:"current",lastUpdatedAt:1685066653,formattedLastUpdatedAt:"2023\u5e745\u670826\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CDH\u4f7f\u7528",permalink:"/docs/bigdata/CDH\u4f7f\u7528"},next:{title:"filebeat\u4f7f\u7528",permalink:"/docs/bigdata/filebeat\u4f7f\u7528"}},c={},s=[{value:"\u79fb\u9664 8.x \u4e2d module \u7684 ml",id:"\u79fb\u9664-8x-\u4e2d-module-\u7684-ml",level:2},{value:"8.x \u4e2d elasticsearch-head",id:"8x-\u4e2d-elasticsearch-head",level:2},{value:"8.x \u7684\u5b89\u5168\u914d\u7f6e",id:"8x-\u7684\u5b89\u5168\u914d\u7f6e",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u79fb\u9664-8x-\u4e2d-module-\u7684-ml"},"\u79fb\u9664 8.x \u4e2d module \u7684 ml"),(0,r.kt)("p",null,"\u4e0d\u7528\u5176\u673a\u5668\u5b66\u4e60\uff0c\u540c\u65f6\u51cf\u5c0f\u538b\u7f29\u5305\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u89e3\u538b\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"li"},"elasticsearch-8.7.0-linux-x86_64.tar.gz"),";"),(0,r.kt)("li",{parentName:"ol"},"\u5220\u9664",(0,r.kt)("inlineCode",{parentName:"li"},"${ES_HOME}/modules/x-pack-ml/platform/linux-x86_64/lib/"),"\u91cc\u7684\u94fe\u63a5\u5e93\u6587\u4ef6;"),(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"li"},"${ES_HOME}/config/elasticsearch.yml"),"\u5728\u6700\u540e\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"li"},"xpack.ml.enabled: false"),";"),(0,r.kt)("li",{parentName:"ol"},"\u538b\u7f29\u4fee\u6539\u540e\u7684\u6587\u4ef6;")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4fee\u6539\u540e\u7684\u5305\u542f\u52a8\u4f1a\u6709\u544a\u8b66(\u5ffd\u7565)",(0,r.kt)("inlineCode",{parentName:"p"},"[2023-04-12T09:50:20,987][WARN ][x-pack-ml-controller-stderr] [test] /xxx/elasticsearch-8.7.0/modules/x-pack-ml/platform/linux-x86_64/bin/controller: error while loading shared libraries: libMlCore.so: cannot open shared object file: No such file or directory"))),(0,r.kt)("h2",{id:"8x-\u4e2d-elasticsearch-head"},"8.x \u4e2d elasticsearch-head"),(0,r.kt)("p",null,"\u7531\u4e8e 8.x \u9ed8\u8ba4\u542f\u7528\u4e86\u5b89\u5168\u7b56\u7565\uff0c\u5982\u679c\u60f3\u4f7f\u7528\u6b64\u63d2\u4ef6\uff0c\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u91cc\u5148\u8bbf\u95ee",(0,r.kt)("inlineCode",{parentName:"p"},"https://ip:9200/"),"\uff0c\u63a5\u53d7\u8bc1\u4e66\u7136\u540e\u7528\u6237\u5bc6\u7801\u767b\u9646\uff0c\u518d\u56de\u5230\u63d2\u4ef6\u5237\u65b0\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"8x-\u7684\u5b89\u5168\u914d\u7f6e"},"8.x \u7684\u5b89\u5168\u914d\u7f6e"),(0,r.kt)("p",null,"\u9996\u6b21\u542f\u52a8\u5b89\u88c5\u4f1a\u751f\u6210\u5b89\u5168\u4fe1\u606f,\u8be6\u60c5\u89c1\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/master//configuring-stack-security.html"},"Start the Elastic Stack with security enabled automatically")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"...\n\u2705 Elasticsearch security features have been automatically configured!\n\u2705 Authentication is enabled and cluster connections are encrypted.\n\n\u2139\ufe0f  Password for the elastic user (reset with `bin/elasticsearch-reset-password -u elastic`):\n  K+Zp-t0FiGFBh=9wCsPl\n\n\u2139\ufe0f  HTTP CA certificate SHA-256 fingerprint:\n  f725ac7f46c42e6ecf0c8a5776bc6d549b8844e3f16e6b4aab511e141f27c5b0\n\n\u2139\ufe0f  Configure Kibana to use this cluster:\n\u2022 Run Kibana and click the configuration link in the terminal when Kibana starts.\n\u2022 Copy the following enrollment token and paste it into Kibana in your browser (valid for the next 30 minutes):\n  eyJ2ZXIiOiI4LjcuMCIsImFkciI6WyIxOTIuMTY4LjEyNC4yNTM6OTIwMCJdLCJmZ3IiOiJmNzI1YWM3ZjQ2YzQyZTZlY2YwYzhhNTc3NmJjNmQ1NDliODg0NGUzZjE2ZTZiNGFhYjUxMWUxNDFmMjdjNWIwIiwia2V5Ijoid2lySWRJY0IwclpNdzhpOWUySGo6VlR4VHlpZVhSN1NybV9lVmRaWVBZQSJ9\n\n\u2139\ufe0f  Configure other nodes to join this cluster:\n\u2022 On this node:\n  \u2043 Create an enrollment token with `bin/elasticsearch-create-enrollment-token -s node`.\n  \u2043 Uncomment the transport.host setting at the end of config/elasticsearch.yml.\n  \u2043 Restart Elasticsearch.\n\u2022 On other nodes:\n  \u2043 Start Elasticsearch with `bin/elasticsearch --enrollment-token <token>`, using the enrollment token that you generated.\n...\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u9996\u6b21\u542f\u52a8 auto configuration \u8f93\u51fa\u63a7\u5236\u53f0\uff0c\u4e0d\u8f93\u51fa\u5230\u65e5\u5fd7;"),(0,r.kt)("li",{parentName:"ol"},"\u9996\u6b21\u542f\u52a8\u751f\u6210\u7684\u8bc1\u4e66\u5728${ES_HOME}/config/certs \u91cc;"),(0,r.kt)("li",{parentName:"ol"},"\u5de5\u7a0b\u65b9\u4fbf\u6216\u8005\u9057\u5fd8\u4e86\u5bc6\u7801\u6307\u7eb9\u4e4b\u7c7b\uff1a\u91cd\u7f6e\u5bc6\u7801",(0,r.kt)("inlineCode",{parentName:"li"},"bin/elasticsearch-reset-password -u elastic"),"\uff0c\u83b7\u53d6\u6307\u7eb9",(0,r.kt)("inlineCode",{parentName:"li"},"openssl x509 -fingerprint -sha256 -in config/certs/http_ca.crt")))),(0,r.kt)("p",null,"\u81ea\u52a8\u5316\u811a\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\npath=$(cd `dirname $0`/..;pwd)\nif [ -d "${path}/../es/config/certs" ];then\n  echo y|${path}/../es/bin/elasticsearch-reset-password -u elastic -s > resetPwd\n  echo "\\n"\n  echo "user:elastic,passwd:`cat resetPwd`"\n  rm -f resetPwd\n  openssl x509 -fingerprint -sha256 -in ${path}/../es/config/certs/http_ca.crt > fingerprint\n  echo "fingerprint:`sed -e \'2,$d\' -e \'s/://g\' fingerprint | awk -F \'=\' \'{print tolower($2)}\'`"\n  rm -f fingerprint\nelse\n  echo "elasticsearch CA does not exit..."\nfi\n')))}u.isMDXComponent=!0}}]);