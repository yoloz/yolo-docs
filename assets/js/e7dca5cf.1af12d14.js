"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[6535],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||l;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const l={},a=void 0,s={unversionedId:"linux/\u7cfb\u7edf\u9632\u706b\u5899",id:"linux/\u7cfb\u7edf\u9632\u706b\u5899",title:"\u7cfb\u7edf\u9632\u706b\u5899",description:"ubuntu",source:"@site/docs/linux/\u7cfb\u7edf\u9632\u706b\u5899.md",sourceDirName:"linux",slug:"/linux/\u7cfb\u7edf\u9632\u706b\u5899",permalink:"/docs/linux/\u7cfb\u7edf\u9632\u706b\u5899",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/linux/\u7cfb\u7edf\u9632\u706b\u5899.md",tags:[],version:"current",lastUpdatedAt:1684227620,formattedLastUpdatedAt:"2023\u5e745\u670816\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7cfb\u7edf\u53c2\u6570\u8c03\u6574",permalink:"/docs/linux/\u7cfb\u7edf\u53c2\u6570\u8c03\u6574"},next:{title:"\u7f51\u5361\u542f\u505c\u53ca\u914d\u7f6e",permalink:"/docs/linux/\u7f51\u5361\u542f\u505c\u53ca\u914d\u7f6e"}},i={},u=[{value:"ubuntu",id:"ubuntu",level:2},{value:"centos",id:"centos",level:2},{value:"\u5173\u95ed selinux",id:"\u5173\u95ed-selinux",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ubuntu"},"ubuntu"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@localhost ~]# sudo ufw status\n[root@localhost ~]# sudo ufw enable\n[root@localhost ~]# sudo ufw disable\n")),(0,o.kt)("h2",{id:"centos"},"centos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@localhost ~]# sudo iptables --list\n[root@localhost ~]# sudo systemctl status firewalld.service\n[root@localhost ~]# sudo systemctl stop firewalld\n[root@localhost ~]# sudo systemctl disable firewalld\n")),(0,o.kt)("h2",{id:"\u5173\u95ed-selinux"},"\u5173\u95ed selinux"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#\u67e5\u770b\u5f53\u524dselinux\u7684\u72b6\u6001\n[root@localhost ~]# getenforce\n#\u8bbe\u7f6eselinux\n[root@localhost ~]# setenforce 0\n#\u6c38\u4e45\u4fee\u6539\n[root@localhost ~]# vi /etc/selinux/config\n# This file controls the state of SELinux on the system.\n# SELINUX= can take one of these three values:\n# enforcing - SELinux security policy is enforced\n# permissive - SELinux prints warnings instead of enforcing.\n# disabled - No SELinux policy is loaded.\nSELINUX=disabled #\u4fee\u6539\u4e3adisabled\n")))}d.isMDXComponent=!0}}]);