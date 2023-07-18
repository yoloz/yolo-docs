"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[8821],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,d=m["".concat(s,".").concat(c)]||m[c]||k[c]||n;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},60244:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(87462),i=(a(67294),a(3905));const n={},l=void 0,o={unversionedId:"security/kerberos\u4e86\u89e3",id:"security/kerberos\u4e86\u89e3",title:"kerberos\u4e86\u89e3",description:"\u4ecb\u7ecd",source:"@site/docs/security/kerberos\u4e86\u89e3.md",sourceDirName:"security",slug:"/security/kerberos\u4e86\u89e3",permalink:"/docs/security/kerberos\u4e86\u89e3",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/security/kerberos\u4e86\u89e3.md",tags:[],version:"current",lastUpdatedAt:1689650905,formattedLastUpdatedAt:"2023\u5e747\u670818\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"https\u8eab\u4efd\u9a8c\u8bc1",permalink:"/docs/security/https\u8eab\u4efd\u9a8c\u8bc1"},next:{title:"kerberos\u4f7f\u7528",permalink:"/docs/security/kerberos\u4f7f\u7528"}},s={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u89e3\u51b3\u95ee\u9898",id:"\u89e3\u51b3\u95ee\u9898",level:3},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u8ba4\u8bc1\u6d41\u7a0b",id:"\u8ba4\u8bc1\u6d41\u7a0b",level:2},{value:"\u7b2c\u4e00\u6b65",id:"\u7b2c\u4e00\u6b65",level:3},{value:"\u7b2c\u4e8c\u6b65",id:"\u7b2c\u4e8c\u6b65",level:3},{value:"\u7b2c\u4e09\u6b65",id:"\u7b2c\u4e09\u6b65",level:3},{value:"\u7b2c\u56db\u6b65",id:"\u7b2c\u56db\u6b65",level:3},{value:"\u7b2c\u4e94\u6b65",id:"\u7b2c\u4e94\u6b65",level:3},{value:"\u7b2c\u516d\u6b65",id:"\u7b2c\u516d\u6b65",level:3},{value:"Kerberos \u76ca\u5904",id:"kerberos-\u76ca\u5904",level:2},{value:"Scalable",id:"scalable",level:3},{value:"Secure",id:"secure",level:3},{value:"Advanced Features",id:"advanced-features",level:3},{value:"Kerberos \u4e0d\u8db3",id:"kerberos-\u4e0d\u8db3",level:2},{value:"\u5355\u70b9\u6545\u969c",id:"\u5355\u70b9\u6545\u969c",level:3},{value:"Password guessing",id:"password-guessing",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:p},m="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,i.kt)("p",null,"Kerberos \u662f\u4e00\u79cd\u6d41\u884c\u7684\u8eab\u4efd\u9a8c\u8bc1\u534f\u8bae\uff0c\u53ef\u7528\u4e8e\u5355\u70b9\u767b\u5f55 \uff08SSO\uff09\u3002SSO \u80cc\u540e\u7684\u4e3b\u8981\u5173\u952e\u6982\u5ff5\u662f\u7528\u6237\u901a\u8fc7\u5355\u6b21\u767b\u5f55\uff08\u4e00\u6b21\u6027\u6d3b\u52a8\uff09\u5373\u53ef\u83b7\u5f97\u6240\u6709\u670d\u52a1\u8ba4\u8bc1\uff0c\u65e0\u9700\u6bcf\u4e2a\u670d\u52a1\u64cd\u4f5c\u8ba4\u8bc1\u4e00\u6b21\u3002Kerberos \u7cfb\u7edf\u63d0\u4f9b\u9488\u5bf9\u8bb8\u591a\u7f51\u7edc\u653b\u51fb\u548c\u6f0f\u6d1e\u7684\u4fdd\u62a4\u3002\u4ee5\u4e0b\u662f Kerberos \u7684\u4e00\u4e9b\u7279\u5f81\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7968\u8bc1\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1"),(0,i.kt)("li",{parentName:"ul"},"\u907f\u514d\u5728\u672c\u5730\u4fdd\u5b58\u5bc6\u7801"),(0,i.kt)("li",{parentName:"ul"},"\u907f\u514d\u901a\u8fc7\u4e92\u8054\u7f51\u53d1\u9001\u5bc6\u7801"),(0,i.kt)("li",{parentName:"ul"},"\u5f15\u5165\u53d7\u4fe1\u4efb\u7684\u7b2c\u4e09\u65b9"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u5bf9\u79f0\u5bc6\u94a5\u52a0\u5bc6\u6784\u5efa")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Kerberos \u6709\u8bb8\u591a\u5b9e\u73b0\uff0c\u76ee\u524d\u6211\u4eec\u5e38\u7528\u7684\u662f MIT krb5(1980 \u5e74\u9ebb\u7701\u7406\u5de5\u5b66\u9662\u5f00\u53d1\u4e86 Kerberos \u6765\u4fdd\u62a4 Athena \u9879\u76ee\u63d0\u4f9b\u7684\u7f51\u7edc\u670d\u52a1,\u5f53\u524d\u7248\u672c\u4e3a\u7b2c 5 \u7248)")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://web.mit.edu/kerberos/krb5-current/doc/mitK5features.html"},"MIT Kerberos Documentation")),(0,i.kt)("h3",{id:"\u89e3\u51b3\u95ee\u9898"},"\u89e3\u51b3\u95ee\u9898"),(0,i.kt)("p",null,"\u5728\u5355\u673a\u7cfb\u7edf\u4e0a\uff0c\u53ef\u4ee5\u4f7f\u7528\u5bc6\u94a5\u6216\u5bc6\u7801\u6765\u8bc1\u660e\u7528\u6237\u7684\u8eab\u4efd\uff0c\u4f46\u5728\u5206\u5e03\u5f0f\u8ba1\u7b97\u673a\u7f51\u7edc\u7cfb\u7edf\u4e0a\uff0c\u5982\u679c\u4f7f\u7528\u5bc6\u7801\u6216\u5bc6\u94a5\u6765\u8ba4\u8bc1\uff0c\u5219\u9700\u8981\u5c06\u5bc6\u7801\u6216\u5bc6\u94a5\u901a\u8fc7\u7f51\u7edc\u4ece\u4e00\u53f0\u673a\u5668\u4f20\u8f93\u5230\u53e6\u4e00\u53f0\u673a\u5668\u3002\u4f8b\u5982\uff0c\u5982\u679c\u7528\u6237\u4ece\u670d\u52a1\u5668\u8bf7\u6c42\u79c1\u6709\u6587\u4ef6\uff0c\u5219\u8be5\u7528\u6237\u9700\u8981\u5c06\u5176\u5bc6\u94a5\u53d1\u9001\u5230\u670d\u52a1\u5668\u4ee5\u5bf9\u5176\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\u56e0\u4e3a\u8be5\u5bc6\u7801\u662f\u6807\u8bc6\u7528\u6237\u7684\u552f\u4e00\u673a\u5bc6\u4fe1\u606f\uff0c\u6240\u4ee5\u7f51\u7edc\u4e2d\u4efb\u4f55\u77e5\u9053\u7528\u6237\u5bc6\u7801\u7684\u4eba\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u8be5\u7528\u6237\u8bbf\u95ee\u5176\u6587\u4ef6\u3002\u56e0\u6b64\uff0c\u6709\u5fc5\u8981\u9632\u6b62\u4efb\u4f55\u4eba\u62e6\u622a\u6216\u7a83\u542c\u4f20\u8f93\u7684\u5bc6\u7801\u3002\u6b64\u5916\uff0c\u6709\u5fc5\u8981\u63d0\u4f9b\u4e00\u79cd\u5728\u7528\u6237\u8bf7\u6c42\u670d\u52a1\u65f6\u5bf9\u7528\u6237\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u7684\u65b9\u6cd5\uff0c\u7528\u6237\u5fc5\u987b\u8bc1\u660e\u81ea\u5df1\u7684\u8eab\u4efd\u3002"),(0,i.kt)("p",null,"\u7efc\u4e0a\uff0cKerberos \u7684\u4e24\u4e2a\u57fa\u8c03:\u5b89\u5168\u6027\u548c\u8eab\u4efd\u9a8c\u8bc1\u3002"),(0,i.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"principal \u4e3b\u8981\u7531\u4e09\u90e8\u5206\u6784\u6210\uff1aprimary\uff0cinstance(\u53ef\u9009) \u548c realm\u3002\u5305\u542b instance \u7684 principal\uff0c\u4e00\u822c\u4f1a\u4f5c\u4e3a server \u7aef\u7684 principal,\u4e0d\u542b\u6709 instance \u7684 principal\uff0c\u4e00\u822c\u4f1a\u4f5c\u4e3a \u5ba2\u6237\u7aef\u7684 principal\uff0c\u7528\u4e8e\u8eab\u4efd\u8ba4\u8bc1\u3002\u5982\uff1a"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u5728 foo.yunzhisec.com \u8282\u70b9\u7684 hiverserver2 \u7684 principal:",(0,i.kt)("inlineCode",{parentName:"li"},"hiverserver2/foo.yunzhisec.com@EXAMPLE.COM"),"(primary/instance@realm)"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237 test:",(0,i.kt)("inlineCode",{parentName:"li"},"test@EXAMPLE.COM"),"(primary@realm)")),(0,i.kt)("p",{parentName:"admonition"},"keytab\uff1akeytab \u662f\u5305\u542b principal(\u53ef\u591a\u4e2a)\u548c\u52a0\u5bc6 principal key \u7684\u6587\u4ef6\uff0ckeytab \u6587\u4ef6\u5bf9\u4e8e\u6bcf\u4e2a host \u662f\u552f\u4e00\u7684\uff0c\u56e0\u4e3a key \u4e2d\u5305\u542b hostname\u3002"),(0,i.kt)("p",{parentName:"admonition"},"Ticket Cache\uff1a\u5ba2\u6237\u7aef\u4e0e KDC \u4ea4\u4e92\u5b8c\u6210\u540e\uff0c\u5305\u542b\u8eab\u4efd\u8ba4\u8bc1\u4fe1\u606f\u7684\u6587\u4ef6\uff0c\u77ed\u671f\u6709\u6548\uff0c\u9700\u8981\u4e0d\u65ad renew;"),(0,i.kt)("p",{parentName:"admonition"},"realm\uff1aKerberos \u7cfb\u7edf\u4e2d\u7684\u4e00\u4e2a namespace\u3002\u4e0d\u540c Kerberos \u73af\u5883\uff0c\u53ef\u4ee5\u901a\u8fc7 realm \u8fdb\u884c\u533a\u5206\u3002")),(0,i.kt)("p",null,"Kerberos \u4e3b\u8981\u7531\u4e09\u4e2a\u90e8\u5206\u7ec4\u6210\uff1aKey Distribution Center (\u5373 KDC)\u3001\u5ba2\u6237\u7aef\uff08Client\uff09\u548c\u666e\u901a\u670d\u52a1\u5668\uff08Server\uff09\u3002 \u5927\u81f4\u5173\u7cfb\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kerberos",src:a(16014).Z,width:"865",height:"582"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Key Distribution Center (KDC)"),(0,i.kt)("p",{parentName:"li"},"Each Kerberos realm will have at least one Kerberos server. This server, the Key Distribution Center, contains the Authentication Service, the Ticket-Granting Service, and the master database for Kerberos. These services are implemented as a single daemon.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Authentication Service"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The authentication service handles user authentication, or the process of verifying that principals are correctly identified."),(0,i.kt)("li",{parentName:"ul"},"Consists of the security servers in the KDC (or KDCs), and security clients."),(0,i.kt)("li",{parentName:"ul"},"A security client communicates with a security server to request information and operations. The security server accesses the registry database to perform queries and updates and to validate user logins."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ticket-Granting Service:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Once authenticated, a principal will be granted a TGT and a ticket session key, which gives the principal the right to use the ticket. This combination of the ticket and its associated key is known as your credentials."),(0,i.kt)("li",{parentName:"ul"},"A principal\u2019s credentials are stored in a credentials cache, which is often just a file in the principal\u2019s local directory tree."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The Kerberos Database:\u5305\u542b\u4e86 realm \u4e2d\u6240\u6709\u7684 principal\u3001\u5bc6\u7801\u4e0e\u5176\u4ed6\u4fe1\u606f\u3002\uff08\u9ed8\u8ba4\uff1aBerkeley DB\uff09"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Each KDC contains its own copy of the Kerberos database. The master KDC contains the primary copy of the database, which it propagates at regular intervals to the slave KDCs."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Access tools\nTools used to access the Kerberos information are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"kadmin - Used for reading or updating the Kerberos registry(\u7ba1\u7406\u5458\u547d\u4ee4\u884c)."),(0,i.kt)("li",{parentName:"ul"},"kinit - Creates credentials for a user(\u7528\u6237\u767b\u9646)."),(0,i.kt)("li",{parentName:"ul"},"klist - Displays the existing credentials for a user(\u5217\u51fa\u5f53\u524d\u8d26\u53f7\u4fe1\u606f)."),(0,i.kt)("li",{parentName:"ul"},"kdestroy - Deletes a user\u2019s credentials(\u9500\u6bc1\u767b\u5f55\u4fe1\u606f)."),(0,i.kt)("li",{parentName:"ul"},"kpasswd - Changes a user\u2019s Kerberos password."),(0,i.kt)("li",{parentName:"ul"},"kdb5_util - Dumps or loads the Kerberos database for save and restore operations."))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Key Distribution Center (KDC)\uff1aEach Kerberos realm will have at least one Kerberos server."),(0,i.kt)("li",{parentName:"ul"},"Authentication Service\uff1a")),(0,i.kt)("h2",{id:"\u8ba4\u8bc1\u6d41\u7a0b"},"\u8ba4\u8bc1\u6d41\u7a0b"),(0,i.kt)("p",null,"\u5f00\u542f\u5b89\u5168\u8ba4\u8bc1\u540e\u7684\u8ba4\u8bc1\u65b9\u5f0f\u6709\u4e24\u79cd\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5bc6\u7801\u8ba4\u8bc1\n\u4f7f\u7528\u7528\u6237\u5bc6\u7801\u901a\u8fc7 kinit \u8ba4\u8bc1\uff0c \u83b7\u53d6\u5230\u7684 TGT \u5b58\u5728\u672c\u5730\u51ed\u8bc1\u7f13\u5b58\u5f53\u4e2d\uff0c \u4f9b\u540e\u7eed\u8bbf\u95ee\u670d\u52a1\u8ba4\u8bc1\u4f7f\u7528\uff0c\u4e00\u822c\u5728\u4ea4\u4e92\u5f0f\u8bbf\u95ee\u4e2d\u4f7f\u7528\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 keytab \u8ba4\u8bc1\n\u7528\u6237\u901a\u8fc7\u5bfc\u51fa\u7684 keytab \u53ef\u4ee5\u514d\u5bc6\u7801\u8fdb\u884c\u7528\u6237\u8ba4\u8bc1(\u540e\u7eed\u6b65\u9aa4\u4e00\u81f4)\uff0c\u4e00\u822c\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u914d\u7f6e\u4f7f\u7528\u3002")),(0,i.kt)("p",null,"Kerberos \u7684\u8ba4\u8bc1\u8fc7\u7a0b\u53ef\u7ec6\u5206\u4e3a\u4e09\u4e2a\u9636\u6bb5\uff1a\u521d\u59cb\u9a8c\u8bc1\u3001\u83b7\u53d6\u670d\u52a1\u7968\u636e\u548c\u670d\u52a1\u9a8c\u8bc1\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u5411 KDC \u4e2d\u7684 AS \u53d1\u9001\u7528\u6237\u4fe1\u606f\uff0c\u4ee5\u53ca\u8bf7\u6c42 TGT;"),(0,i.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u62ff\u5230\u4e4b\u524d\u83b7\u5f97\u7684 TGT \u5411 KDC \u4e2d\u7684 TGS \u8bf7\u6c42\u8bbf\u95ee\u67d0\u4e2a\u670d\u52a1\u7684\u7968\u636e;"),(0,i.kt)("li",{parentName:"ol"},"\u62ff\u5230\u7968\u636e(Ticket)\u540e\u518d\u5230\u8be5\u670d\u52a1\u7684\u63d0\u4f9b\u7aef\u9a8c\u8bc1\u8eab\u4efd\uff0c\u7136\u540e\u4f7f\u7528\u5efa\u7acb\u7684\u52a0\u5bc6\u901a\u9053(\u540e\u7eed\u7684\u901a\u4fe1\u91c7\u7528 session key \u52a0\u5bc6\uff0c\u5c31\u597d\u50cf\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u5efa\u7acb\u4e00\u4e2a\u52a0\u5bc6\u901a\u9053)\u548c\u670d\u52a1\u901a\u4fe1;")),(0,i.kt)("p",null,"\u5047\u8bbe\u4e0a\u8ff0",(0,i.kt)("inlineCode",{parentName:"p"},"Service x"),"\u662f\u4e00\u4e2a http \u670d\u52a1\uff0c\u8ba4\u8bc1\u8fc7\u7a0b\u5982\u4e0b\uff1a"),(0,i.kt)("h3",{id:"\u7b2c\u4e00\u6b65"},"\u7b2c\u4e00\u6b65"),(0,i.kt)("p",null,"\u5ba2\u6237\u7aef(client)\u5c06\u76f8\u5173\u4fe1\u606f(",(0,i.kt)("strong",{parentName:"p"},"plaintext"),")\u53d1\u9001\u7ed9 Authentication Server;"),(0,i.kt)("admonition",{title:"\u76f8\u5173\u4fe1\u606f",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"your name/ID"),(0,i.kt)("li",{parentName:"ul"},"the name/ID of the requested service (in this case, service is the Ticket Granting Server),"),(0,i.kt)("li",{parentName:"ul"},"your network address (may be a list of IP addresses for multiple machines, or may be null if wanting to use on any machine);"),(0,i.kt)("li",{parentName:"ul"},"requested lifetime for the validity of the TGT"))),(0,i.kt)("h3",{id:"\u7b2c\u4e8c\u6b65"},"\u7b2c\u4e8c\u6b65"),(0,i.kt)("p",null,"Authentication Server \u5c06\u68c0\u67e5 client \u662f\u5426\u5728 KDC \u6570\u636e\u5e93\u4e2d\u3002\u6b64\u68c0\u67e5\u4ec5\u7528\u4e8e\u67e5\u770b\u662f\u5426\u5b58\u5728\uff0c\u672a\u68c0\u67e5\u4efb\u4f55\u51ed\u636e\u3002\u5982\u679c\u6ca1\u6709\u9519\u8bef\uff0c\u5c06\u968f\u673a\u751f\u6210\u4e00\u4e2a key(",(0,i.kt)("inlineCode",{parentName:"p"},"TGS Session Key"),")\u4f9b client \u548c TGS \u901a\u4fe1\u4f7f\u7528\u3002\u968f\u540e Authentication Server \u5c06\u53d1\u9001\u4e24\u6761\u4fe1\u606f\u7ed9\u5ba2\u6237\u7aef\u3002\u5176\u4e2d\u4e00\u6761\u4fe1\u606f\u88ab\u79f0\u4e3a TGT\uff0c\u7531",(0,i.kt)("inlineCode",{parentName:"p"},"TGS Secret Key"),"\u52a0\u5bc6\uff0c\u5ba2\u6237\u7aef\u65e0\u6cd5\u89e3\u5bc6\u3002"),(0,i.kt)("admonition",{title:"TGT",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"the TGS name/ID;"),(0,i.kt)("li",{parentName:"ul"},"timestamp;"),(0,i.kt)("li",{parentName:"ul"},"your network address (may be a list of IP addresses for multiple machines, or may be null if wanting to use on any machine);"),(0,i.kt)("li",{parentName:"ul"},"lifetime of the TGT (could be what you initially requested, lower if you or the TGS\u2019s secret keys are about to expire, or another limit that was implemented during the Kerberos setup);"),(0,i.kt)("li",{parentName:"ul"},"TGS Session Key"))),(0,i.kt)("p",null,"\u53e6\u4e00\u6761\u4fe1\u606f\u7531",(0,i.kt)("inlineCode",{parentName:"p"},"Client Secret Key"),"(\u901a\u8fc7\u5bc6\u7801\uff0csalt(made up of ",(0,i.kt)("a",{parentName:"p",href:"mailto:user@REALMNAME.COM"},"user@REALMNAME.COM"),") \u548c\u6563\u5217\u8ba1\u7b97\u53ef\u5f97\u51fa)\u52a0\u5bc6\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5ba2\u6237\u7aef\u7684\u5bc6\u7801\u4e0d\u6b63\u786e\u5219\u65e0\u6cd5\u89e3\u5bc6\uff0c\u9690\u5f0f\u9a8c\u8bc1\u8f93\u5165\u5bc6\u7801\u7684\u6b63\u786e\u6027\u3002")),(0,i.kt)("p",null,"\u4fe1\u606f\u5305\u542b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the TGS name/ID;"),(0,i.kt)("li",{parentName:"ul"},"timestamp;"),(0,i.kt)("li",{parentName:"ul"},"lifetime of the TGT(same as above);"),(0,i.kt)("li",{parentName:"ul"},"TGS Session Key")),(0,i.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The encrypted TGT is stored within your credential cache."),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"TGS Session Key")," is the shared key between you and the TGS."))),(0,i.kt)("h3",{id:"\u7b2c\u4e09\u6b65"},"\u7b2c\u4e09\u6b65"),(0,i.kt)("p",null,"\u5ba2\u6237\u7aef\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"Client Secret Key"),"\u89e3\u5bc6\u51fa\u7b2c\u4e8c\u6761\u4fe1\u606f\u5f97\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"TGS Session Key"),"\uff0c\u4f7f\u7528\u5176\u52a0\u5bc6\u81ea\u5df1\u7684 Authenticator:"),(0,i.kt)("admonition",{title:"Authenticator",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"your name/ID;"),(0,i.kt)("li",{parentName:"ul"},"timestamp"))),(0,i.kt)("p",null,"\u7136\u540e\u53d1\u9001\u4ee5\u4e0b\u4fe1\u606f\u7ed9 Ticket Granting Server\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e0a\u8ff0\u52a0\u5bc6\u7684 Authenticator;"),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u89e3\u5bc6\u7684 TGT;"),(0,i.kt)("li",{parentName:"ul"},"\u672a\u52a0\u5bc6\u7684\u4fe1\u606f(",(0,i.kt)("strong",{parentName:"li"},"plaintext"),"),\u5305\u542b\uff1a")),(0,i.kt)("admonition",{title:"unencrypted message",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"the requested HTTP Service name/ID you want access to;"),(0,i.kt)("li",{parentName:"ul"},"lifetime of the Ticket for the HTTP Service"))),(0,i.kt)("h3",{id:"\u7b2c\u56db\u6b65"},"\u7b2c\u56db\u6b65"),(0,i.kt)("p",null,"TGS \u6536\u5230\u5ba2\u6237\u7aef\u7684\u4fe1\u606f\uff0c\u9996\u5148\u4ece KDC database \u4e2d\u68c0\u67e5 HTTP \u670d\u52a1\u662f\u5426\u5b58\u5728(\u672a\u52a0\u5bc6\u4fe1\u606f\u91cc\u643a\u5e26\u6709 HTTP \u670d\u52a1\u4fe1\u606f)\uff0c\u68c0\u67e5\u6ca1\u95ee\u9898\u5219\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"TGS Secret Key"),"\u89e3\u5bc6 TGT \u5f97\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"TGS Session Key"),"\uff0c\u7136\u540e\u4f7f\u7528\u5176\u89e3\u5bc6\u6536\u5230\u7684 Authenticator \u4fe1\u606f\u5f97\u5230\u5ba2\u6237\u7aef\u4fe1\u606f\u3002TGS \u89e3\u5bc6\u51fa\u6240\u6709\u4fe1\u606f\u540e\uff0c\u5c06\u8fdb\u884c\u8eab\u4efd\u68c0\u67e5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c06 Authenticator \u4e2d\u7684\u5ba2\u6237\u7aef ID \u4e0e TGT \u7684\u5ba2\u6237\u7aef ID \u8fdb\u884c\u6bd4\u8f83;"),(0,i.kt)("li",{parentName:"ul"},"\u6bd4\u8f83\u6765\u81ea Authenticator \u7684\u65f6\u95f4\u6233\u548c TGT \u7684\u65f6\u95f4\u6233 (\u5178\u578b\u7684 Kerberos \u7cfb\u7edf\u5bf9\u5dee\u5f02\u7684\u5bb9\u5fcd\u5ea6\u662f 2 \u5206\u949f\uff0c\u53ef\u4ee5\u914d\u7f6e);"),(0,i.kt)("li",{parentName:"ul"},"\u68c0\u67e5 TGT \u662f\u5426\u8fc7\u671f(lifetime element);"),(0,i.kt)("li",{parentName:"ul"},"\u68c0\u67e5 Authenticator \u662f\u5426\u5df2\u7ecf\u5728 TGS \u7684\u7f13\u5b58\u4e2d\uff08for avoiding replay attacks\uff09;"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u539f\u59cb\u8bf7\u6c42\u4e2d\u7684\u7f51\u7edc\u5730\u5740\u4e0d\u4e3a\u7a7a\uff0c\u5219\u5c06\u6e90\u7684 IP \u5730\u5740\u4e0e TGT \u91cc\u7684\u7f51\u7edc\u5730\u5740\uff08\u6216\u5730\u5740\u5217\u8868\uff09\u8fdb\u884c\u6bd4\u8f83;")),(0,i.kt)("p",null,"\u5f53\u6240\u6709\u68c0\u67e5\u90fd\u901a\u8fc7\u540e\uff0cTGS \u4f1a\u968f\u673a\u751f\u6210\u4e00\u4e2a key(",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP Service Session Key"),")\u4f9b\u5ba2\u6237\u7aef\u4e0e HTTP \u670d\u52a1\u901a\u4fe1\u4f7f\u7528\u3002\u968f\u540e Ticket Granting Server \u5c06\u53d1\u9001\u4e24\u6761\u4fe1\u606f\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,i.kt)("p",null,"\u5176\u4e2d\u4e00\u6761\u4fe1\u606f\u88ab\u79f0\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP Service ticket"),"\uff0c\u7531",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP Service Secret Key"),"\u52a0\u5bc6\uff0c\u5ba2\u6237\u7aef\u65e0\u6cd5\u89e3\u5bc6\u3002"),(0,i.kt)("admonition",{title:"HTTP Service ticket",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"your name/ID;"),(0,i.kt)("li",{parentName:"ul"},"HTTP Service name/ID;"),(0,i.kt)("li",{parentName:"ul"},"your network address (may be a list of IP addresses for multiple machines, or may be null if wanting to use on any machine);"),(0,i.kt)("li",{parentName:"ul"},"timestamp;"),(0,i.kt)("li",{parentName:"ul"},"lifetime of the validity of the ticket;"),(0,i.kt)("li",{parentName:"ul"},"HTTP Service Session Key;"))),(0,i.kt)("p",null,"\u53e6\u4e00\u6761\u4fe1\u606f\u7531",(0,i.kt)("inlineCode",{parentName:"p"},"TGS Session Key"),"\u52a0\u5bc6\uff0c\u4fe1\u606f\u5305\u542b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTTP Service name/ID;"),(0,i.kt)("li",{parentName:"ul"},"timestamp;"),(0,i.kt)("li",{parentName:"ul"},"lifetime of the validity of the ticket;"),(0,i.kt)("li",{parentName:"ul"},"HTTP Service Session Key;")),(0,i.kt)("h3",{id:"\u7b2c\u4e94\u6b65"},"\u7b2c\u4e94\u6b65"),(0,i.kt)("p",null,"\u5ba2\u6237\u7aef\u4f7f\u7528\u7b2c\u4e00\u6b65\u5f97\u5230\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"TGS Session Key"),"\u89e3\u5bc6\u540e\u4e00\u6761\u4fe1\u606f\u5f97\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP Service Session Key"),"\uff0c\u4f7f\u7528\u5176\u52a0\u5bc6\u81ea\u5df1\u7684 Authenticator:"),(0,i.kt)("admonition",{title:"Authenticator",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"your name/ID;"),(0,i.kt)("li",{parentName:"ul"},"timestamp"))),(0,i.kt)("p",null,"\u7136\u540e\u53d1\u9001\u4ee5\u4e0b\u4fe1\u606f\u7ed9 HTTP \u670d\u52a1:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e0a\u8ff0\u52a0\u5bc6\u7684 Authenticator;"),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u89e3\u5bc6\u7684 HTTP Service ticket;")),(0,i.kt)("h3",{id:"\u7b2c\u516d\u6b65"},"\u7b2c\u516d\u6b65"),(0,i.kt)("p",null,"HTTP \u670d\u52a1\u9996\u5148\u5229\u7528\u81ea\u8eab\u7684\u5bc6\u94a5(",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP Service Secret Key"),")\u89e3\u5bc6\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP Service ticket")," \u7684\u4fe1\u606f\u5f97\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP Service Session Key"),",\u7136\u540e\u4f7f\u7528\u5b83\u89e3\u5bc6\u51fa\u5ba2\u6237\u7aef\u7684 Authenticator \u4fe1\u606f\u3002\u540c TGS \u4e00\u6837,HTTP Server \u4f1a\u505a\u5982\u4e0b\u68c0\u67e5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c06 Authenticator \u4e2d\u7684\u5ba2\u6237\u7aef ID \u4e0e HTTP Service ticket \u4e2d\u7684\u5ba2\u6237\u7aef ID \u8fdb\u884c\u6bd4\u8f83\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u6bd4\u8f83\u6765\u81ea Authenticator \u7684\u65f6\u95f4\u6233\u548c HTTP Service ticket \u7684\u65f6\u95f4\u6233 (\u5178\u578b\u7684 Kerberos \u7cfb\u7edf\u5bf9\u5dee\u5f02\u7684\u5bb9\u5fcd\u5ea6\u662f 2 \u5206\u949f\uff0c\u53ef\u4ee5\u914d\u7f6e)"),(0,i.kt)("li",{parentName:"ul"},"\u68c0\u67e5 HTTP Service ticket \u662f\u5426\u8fc7\u671f(lifetime element);"),(0,i.kt)("li",{parentName:"ul"},"\u68c0\u67e5 Authenticator \u662f\u5426\u5df2\u7ecf\u5728 HTTP \u670d\u52a1\u5668\u7684\u7f13\u5b58\u4e2d\uff08for avoiding replay attacks\uff09;"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u539f\u59cb\u8bf7\u6c42\u4e2d\u7684\u7f51\u7edc\u5730\u5740\u4e0d\u4e3a\u7a7a\uff0c\u5219\u5c06\u6e90\u7684 IP \u5730\u5740\u4e0e HTTP Service ticket \u91cc\u7684\u7f51\u7edc\u5730\u5740\uff08\u6216\u5730\u5740\u5217\u8868\uff09\u8fdb\u884c\u6bd4\u8f83;")),(0,i.kt)("p",null,"\u5f53\u6240\u6709\u68c0\u67e5\u90fd\u901a\u8fc7\u540e\uff0cHTTP Service \u53d1\u9001\u4e00\u6761\u7531",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP Service Session Key"),"\u52a0\u5bc6\u7684\u4fe1\u606f(Authenticator)\u7ed9\u5ba2\u6237\u7aef:"),(0,i.kt)("admonition",{title:"Authenticator",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"HTTP Service name/ID;"),(0,i.kt)("li",{parentName:"ul"},"timestamp;"))),(0,i.kt)("p",null,"\u5ba2\u6237\u7aef\u4f7f\u7528\u7f13\u5b58\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP Service Session Key"),"\u89e3\u5bc6\u63a5\u6536\u5230\u7684 Authenticator \u4fe1\u606f\u5f97\u5230 HTTP Service\u2019s ID \u548c timestamp."),(0,i.kt)("p",null,"\u81f3\u6b64\u8ba4\u8bc1\u5b8c\u6210,\u540e\u7eed\u5ba2\u6237\u7aef\u548c HTTP Serivce \u4e4b\u95f4\u4f7f\u7528\u7f13\u5b58\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP Service Ticket"),"\u5373\u53ef,\u76f4\u5230\u5b83\u8fc7\u671f\uff08lifetime attribute\uff09\u3002"),(0,i.kt)("h2",{id:"kerberos-\u76ca\u5904"},"Kerberos \u76ca\u5904"),(0,i.kt)("h3",{id:"scalable"},"Scalable"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Servers do not need to contact KDC to authenticate users"),(0,i.kt)("li",{parentName:"ul"},"Only users and machine account authenticate with the KDC, once per 10h of activity")),(0,i.kt)("h3",{id:"secure"},"Secure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Passwords are not transmitted over the wire"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4fe1\u4efb\u8bc1\u4e66\u7684 Ticket \u9a8c\u8bc1"),(0,i.kt)("li",{parentName:"ul"},"\u6709\u65f6\u95f4\u9650\u5236\u7684 session key(\u6709\u6548\u671f)"),(0,i.kt)("li",{parentName:"ul"},"Separate session key for each user-server pair")),(0,i.kt)("h3",{id:"advanced-features"},"Advanced Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5355\u70b9\u767b\u5f55"),(0,i.kt)("li",{parentName:"ul"},"Delegation"),(0,i.kt)("li",{parentName:"ul"},"\u8de8\u57df\u8eab\u4efd\u9a8c\u8bc1"),(0,i.kt)("li",{parentName:"ul"},"\u4e92\u64cd\u4f5c\u6027"),(0,i.kt)("li",{parentName:"ul"},"\u76f8\u4e92\u8eab\u4efd\u9a8c\u8bc1")),(0,i.kt)("h2",{id:"kerberos-\u4e0d\u8db3"},"Kerberos \u4e0d\u8db3"),(0,i.kt)("h3",{id:"\u5355\u70b9\u6545\u969c"},"\u5355\u70b9\u6545\u969c"),(0,i.kt)("p",null,"\u9700\u8981 central Kerberos server \u7684\u9ad8\u53ef\u7528\uff0c\u4e00\u65e6\u51fa\u6545\u969c\u5219\u65e0\u6cd5\u9a8c\u8bc1\u4f7f\u7528\u3002"),(0,i.kt)("h3",{id:"password-guessing"},"Password guessing"),(0,i.kt)("p",null,"\u8bf7\u6c42 ticket \u4e0d\u9700\u8981\u8eab\u4efd\u9a8c\u8bc1\uff0c\u653b\u51fb\u8005\u53ef\u4ee5\u901a\u8fc7\u8bf7\u6c42\u591a\u4e2a ticket \u6765\u6536\u96c6\u7b49\u6548\u7684/etc/passwd"),(0,i.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u672c\u5730\u8ba1\u7b97\u673a\u53d7\u5230\u653b\u51fb\u5e76\u88ab\u6076\u610f\u8f6f\u4ef6\u6355\u83b7\u5230\u5bc6\u7801\uff0c\u5219 Kerberos \u5bb9\u6613\u906d\u53d7\u653b\u51fb"),(0,i.kt)("li",{parentName:"ul"},"\u7968\u8bc1\u52ab\u6301(Ticket hijacking):\u6076\u610f\u7528\u6237\u53ef\u80fd\u7a83\u53d6\u540c\u4e00\u5de5\u4f5c\u7ad9\u4e0a\u53e6\u4e00\u7528\u6237\u7684\u670d\u52a1\u7968\u8bc1\u5e76\u5c1d\u8bd5\u4f7f\u7528"),(0,i.kt)("li",{parentName:"ul"},"server authentication:\u653b\u51fb\u8005\u53ef\u4ee5\u914d\u7f6e\u7f51\u7edc\u4ece\u800c\u63a5\u6536\u53d1\u9001\u7ed9\u5408\u6cd5\u670d\u52a1\u5668\u7684\u6d88\u606f")),(0,i.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://omalperera.github.io/security/2018/02/01/kerberos-simplified.html"},"kerberos Simplified")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.roguelynn.com/words/explain-like-im-5-kerberos/"},"Explain like I\u2019m 5: Kerberos")))}k.isMDXComponent=!0},16014:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/kerberos-5366f22a529ddbb3f825dd12df2b954f.png"}}]);