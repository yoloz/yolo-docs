"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},s=void 0,l={unversionedId:"linux/ssh\u514d\u5bc6\u767b\u5f55",id:"linux/ssh\u514d\u5bc6\u767b\u5f55",title:"ssh\u514d\u5bc6\u767b\u5f55",description:"\u64cd\u4f5c\u6b65\u9aa4",source:"@site/docs/linux/ssh\u514d\u5bc6\u767b\u5f55.md",sourceDirName:"linux",slug:"/linux/ssh\u514d\u5bc6\u767b\u5f55",permalink:"/docs/linux/ssh\u514d\u5bc6\u767b\u5f55",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/linux/ssh\u514d\u5bc6\u767b\u5f55.md",tags:[],version:"current",lastUpdatedAt:1688378919,formattedLastUpdatedAt:"2023\u5e747\u67083\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"netplan",permalink:"/docs/linux/netplan"},next:{title:"ubuntu\u5f00\u542fsyslog",permalink:"/docs/linux/ubuntu\u5f00\u542fsyslog"}},i={},u=[{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u5728\u5ba2\u6237\u7aef\u914d\u7f6e\u670d\u52a1\u5668\u767b\u5f55\u76f8\u5173\u53c2\u6570",id:"\u5728\u5ba2\u6237\u7aef\u914d\u7f6e\u670d\u52a1\u5668\u767b\u5f55\u76f8\u5173\u53c2\u6570",level:2},{value:"ssh \u62f7\u8d1d\u6587\u4ef6",id:"ssh-\u62f7\u8d1d\u6587\u4ef6",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u751f\u6210\u5bc6\u94a5:",(0,o.kt)("inlineCode",{parentName:"li"},"ssh-keygen -t dsa -P '' -f ~/.ssh/id_dsa"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u751f\u6210\u5bc6\u94a5\u8fc7\u7a0b\u4e2d\uff0c\u5efa\u8bae\u91c7\u7528\u9ed8\u8ba4\u503c\uff0c\u53ea\u9700\u8981\u6309\u4e09\u6b21\u56de\u8f66\u4e4b\u540e\uff0c\u5c31\u4f1a\u5728\uff5e/.ssh \u76ee\u5f55\u4e0b\u751f\u6210\u5bc6\u94a5\u6587\u4ef6\uff0c\u5176\u4e2d id_rsa \u4e3a\u79c1\u94a5\uff0cid_rsa.pub \u4e3a\u516c\u94a5")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u914d\u7f6e")),(0,o.kt)("p",null,"\u670d\u52a1\u5668\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/authorized_keys")," \u6587\u4ef6\u4fdd\u5b58\u53ef\u5feb\u901f\u8fde\u63a5\u7684\u5ba2\u6237\u7aef\u7684\u516c\u94a5\u3002\u9700\u8981\u628a\u5ba2\u6237\u7aef\u751f\u6210\u7684 id_rsa.pub \u6587\u4ef6\u7684\u5185\u5bb9\u62f7\u8d1d\u5230 authorized_keys \u6587\u4ef6\u7684\u672b\u5c3e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@linux ~]$ scp ~/.ssh/id_rsa.pub user@server:/home/user\n[root@linux ~]$ ssh user@server -p port\n[root@linux ~]$ cat\xa0~/id_dsa.pub\xa0>>\xa0~/.ssh/authorized_keys\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5982\u679c\u8fd8\u662f\u9700\u8981\u5bc6\u7801\uff0c\u5219\u662f\u7531\u4e8e\u76ee\u5f55\u53ca\u6743\u9650\u95ee\u9898\u9020\u6210")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@linux ~]$ chown\xa0username:\xa0/home/username/.ssh\n[root@linux ~]$ chown\xa0username:\xa0/home/username/.ssh/*\n[root@linux ~]$ chmod\xa0700\xa0/home/username/.ssh\n[root@linux ~]$ chmod\xa0600\xa0/home/username/.ssh/*\n")),(0,o.kt)("h2",{id:"\u5728\u5ba2\u6237\u7aef\u914d\u7f6e\u670d\u52a1\u5668\u767b\u5f55\u76f8\u5173\u53c2\u6570"},"\u5728\u5ba2\u6237\u7aef\u914d\u7f6e\u670d\u52a1\u5668\u767b\u5f55\u76f8\u5173\u53c2\u6570"),(0,o.kt)("p",null,"\u9664\u4e86\u5bc6\u7801\u4e4b\u5916\uff0c\u767b\u5f55\u65f6\uff0c\u8fd8\u9700\u8981\u914d\u7f6e ip \u5730\u5740\u3001\u7aef\u53e3\u3001\u7528\u6237\u7b49\u4fe1\u606f\uff0c\u4e5f\u6bd4\u8f83\u7e41\u7410\u3002\u53ef\u901a\u8fc7\u5ba2\u6237\u7aef\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/config")," \u914d\u7f6e\u670d\u52a1\u5668\u7684\u76f8\u5173\u53c2\u6570\u7b80\u5316\u767b\u5f55\u547d\u4ee4\u3002"),(0,o.kt)("p",null,"config \u6587\u4ef6\u7684\u914d\u7f6e\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"Host server\nHostName 192.168.1.1\nPort 22\nUser ubuntu\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Host \u4e3a\u670d\u52a1\u5668\u7684\u540d\u79f0\uff0c\u8f93\u5165\u767b\u5f55\u547d\u4ee4\u65f6\u4f7f\u7528;",(0,o.kt)("br",{parentName:"p"}),"\n","HostName \u4e3a\u670d\u52a1\u5668\u7684 ip \u5730\u5740;",(0,o.kt)("br",{parentName:"p"}),"\n","Port \u4e3a ssh \u7684\u7aef\u53e3;",(0,o.kt)("br",{parentName:"p"}),"\n","User \u4e3a\u670d\u52a1\u5668\u7684\u7528\u6237\u540d;  ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4ece\u6b64\u4ee5\u540e\uff0c\u767b\u5f55\u670d\u52a1\u5668\u5982\u6b64",(0,o.kt)("inlineCode",{parentName:"strong"},"ssh server"))),(0,o.kt)("h2",{id:"ssh-\u62f7\u8d1d\u6587\u4ef6"},"ssh \u62f7\u8d1d\u6587\u4ef6"),(0,o.kt)("p",null,"\u9047\u5230 ssh \u80fd\u8fde\u63a5\u4f46\u662f scp \u88ab\u7981\u6b62\u7684\u60c5\u5f62\u53ef\u4ee5\u7528\u5982\u4e0b\u65b9\u5f0f\u62f7\u8d1d\u6587\u4ef6\u5230\u672c\u5730",(0,o.kt)("inlineCode",{parentName:"p"},"ssh root@10.68.120.214 'cd /root && cat shandongReq2Join.tar.gz' > ~/shandongReq2Join.tar.gz")))}d.isMDXComponent=!0}}]);