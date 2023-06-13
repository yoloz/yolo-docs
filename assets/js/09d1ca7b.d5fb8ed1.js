"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7492],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},l=void 0,p={unversionedId:"devOps/\u6587\u672c\u641c\u7d22grep",id:"devOps/\u6587\u672c\u641c\u7d22grep",title:"\u6587\u672c\u641c\u7d22grep",description:"Linux \u7cfb\u7edf\u4e2d\u6709\u5f88\u591a\u5f88\u6709\u540d\u7684\u641c\u7d22\u7c7b\u547d\u4ee4\uff0c\u4f8b\u5982 find \u547d\u4ee4\u3001locate \u547d\u4ee4\u3001sed \u547d\u4ee4\uff0c\u4f46\u8fd8\u6709\u4e09\u4f4d\u5144\u5f1f\u662f\u4e0d\u5f97\u4e0d\u63d0\u7684\uff0c\u5b83\u4eec\u5728\u641c\u7d22\u754c\u7684\u5730\u4f4d\u4e3e\u8db3\u8f7b\u91cd\uff0c\u90a3\u5c31\u662f grep\u3001egrep\u3001fgrep \u4e09\u5144\u5f1f\u3002",source:"@site/docs/devOps/\u6587\u672c\u641c\u7d22grep.md",sourceDirName:"devOps",slug:"/devOps/\u6587\u672c\u641c\u7d22grep",permalink:"/docs/devOps/\u6587\u672c\u641c\u7d22grep",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/devOps/\u6587\u672c\u641c\u7d22grep.md",tags:[],version:"current",lastUpdatedAt:1686645043,formattedLastUpdatedAt:"2023\u5e746\u670813\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6587\u672c\u5206\u6790awk",permalink:"/docs/devOps/\u6587\u672c\u5206\u6790awk"},next:{title:"\u6587\u672c\u7f16\u8f91sed",permalink:"/docs/devOps/\u6587\u672c\u7f16\u8f91sed"}},i={},s=[{value:"\u7b80\u5355\u4f7f\u7528",id:"\u7b80\u5355\u4f7f\u7528",level:2},{value:"\u53cd\u5411\u67e5\u627e",id:"\u53cd\u5411\u67e5\u627e",level:2},{value:"\u5c55\u793a\u884c\u53f7\u548c\u7edf\u8ba1\u884c\u6570",id:"\u5c55\u793a\u884c\u53f7\u548c\u7edf\u8ba1\u884c\u6570",level:2},{value:"\u5c55\u793a\u76f8\u90bb\u884c\u5185\u5bb9",id:"\u5c55\u793a\u76f8\u90bb\u884c\u5185\u5bb9",level:2},{value:"\u4e0d\u8981\u533a\u5206\u5927\u5c0f\u5199",id:"\u4e0d\u8981\u533a\u5206\u5927\u5c0f\u5199",level:2},{value:"\u5904\u7406\u591a\u6587\u4ef6",id:"\u5904\u7406\u591a\u6587\u4ef6",level:2},{value:"grep \u6b63\u5219",id:"grep-\u6b63\u5219",level:2},{value:"\u8bcd\u67e5\u627e",id:"\u8bcd\u67e5\u627e",level:3},{value:"\u591a\u6761\u4ef6\u67e5\u627e",id:"\u591a\u6761\u4ef6\u67e5\u627e",level:2},{value:"\u7279\u6b8a\u5b57\u7b26\u67e5\u627e",id:"\u7279\u6b8a\u5b57\u7b26\u67e5\u627e",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Linux \u7cfb\u7edf\u4e2d\u6709\u5f88\u591a\u5f88\u6709\u540d\u7684\u641c\u7d22\u7c7b\u547d\u4ee4\uff0c\u4f8b\u5982 find \u547d\u4ee4\u3001locate \u547d\u4ee4\u3001sed \u547d\u4ee4\uff0c\u4f46\u8fd8\u6709\u4e09\u4f4d\u5144\u5f1f\u662f\u4e0d\u5f97\u4e0d\u63d0\u7684\uff0c\u5b83\u4eec\u5728\u641c\u7d22\u754c\u7684\u5730\u4f4d\u4e3e\u8db3\u8f7b\u91cd\uff0c\u90a3\u5c31\u662f grep\u3001egrep\u3001fgrep \u4e09\u5144\u5f1f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"                    grep\n                   /    \\\n          (\u9009\u9879)   (-E)   (-F)\n                  /        \\\n                egrep     fgrep\n")),(0,a.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u5173\u7cfb\u56fe\u53ef\u4ee5\u770b\u51fa\uff0cegrep \u548c fgrep \u90fd\u53ef\u4ee5\u901a\u8fc7 grep \u52a0\u4e0a\u4e0d\u540c\u9009\u9879\u6765\u5b9e\u73b0\uff0c\u5b83\u4eec\u4e09\u5144\u5f1f\uff0c\u5404\u6709\u7279\u70b9\uff0c\u5982\u8868 1 \u6240\u793a\u3002\n\u8868 1 \u5404\u81ea\u7279\u70b9"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u547d \u4ee4"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301\u6b63\u5219"),(0,a.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u7684\u6b63\u5219\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"grep"),(0,a.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,a.kt)("td",{parentName:"tr",align:null},"\u57fa\u672c\u6b63\u5219\u8868\u8fbe\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"egrep"),(0,a.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u6b63\u5219\u8868\u8fbe\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fgrep"),(0,a.kt)("td",{parentName:"tr",align:null},"\xd7"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"\u7b80\u5355\u4f7f\u7528"},"\u7b80\u5355\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#\u5c1d\u8bd5\u641c\u7d22\u5305\u542bleo\u5b57\u7b26\u4e32\u7684\u884c\uff1a\n[root@roclinux ~]# grep --color "leo" /etc/passwd\nleo:x:503:503::/home/leo:/bin/bash\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0a\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"--color"),"\u9009\u9879\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u9ad8\u4eae\u6211\u4eec\u67e5\u627e\u7684\u5b57\u7b26\u4e32\uff0c\u8fd9\u91cc\uff0cleo \u5b57\u7b26\u4e32\u53d8\u6210\u4e86\u7ea2\u8272\u5b57\u4f53\u3002")),(0,a.kt)("h2",{id:"\u53cd\u5411\u67e5\u627e"},"\u53cd\u5411\u67e5\u627e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[root@roclinux ~]# grep -v "leo" /etc/passwd\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"-v"),"\u9009\u9879\u5b9e\u73b0\u4e86\u53cd\u67e5\u6548\u679c\uff0c\u5373\u542b\u6709 leo \u7684\u884c\u90fd\u6ca1\u6709\u5c55\u793a\u51fa\u6765\u3002")),(0,a.kt)("h2",{id:"\u5c55\u793a\u884c\u53f7\u548c\u7edf\u8ba1\u884c\u6570"},"\u5c55\u793a\u884c\u53f7\u548c\u7edf\u8ba1\u884c\u6570"),(0,a.kt)("p",null,"\u6709\u65f6\uff0c\u6211\u4eec\u5e0c\u671b grep \u4e0d\u4ec5\u80fd\u641c\u7d22\u5230\u5b57\u7b26\u4e32\uff0c\u8fd8\u80fd\u5c55\u793a\u51fa\u5b83\u4eec\u4f4d\u4e8e\u6587\u4ef6\u7684\u7b2c\u51e0\u884c\uff0c\u8fd9\u65f6\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"-n")," \u9009\u9879\u6765\u5b9e\u73b0\u8fd9\u4e2a\u6548\u679c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@roclinux ~]# grep -n leo /etc/passwd\n29:leo:x:503:503::/home/leo:/bin/bash\n#leo \u524d\u7684\u5185\u5bb9\u8868\u793a\u7684\u5c31\u662f\u884c\u4f4d\u7f6e\u4fe1\u606f\uff0c\u7b2c 29 \u884c\n")),(0,a.kt)("p",null,"\u53e6\u5916\u4e00\u4e9b\u65f6\u5019\uff0c\u6211\u4eec\u5e0c\u671b grep \u4e0d\u8981\u8f93\u51fa\u641c\u7d22\u5230\u7684\u884c\u7684\u5185\u5bb9\uff0c\u800c\u662f\u7b80\u5355\u5730\u544a\u8bc9\u6211\u4eec\u5230\u5e95\u641c\u7d22\u5230\u4e86\u591a\u5c11\u884c\u5c31\u597d\u4e86\uff0c\u8bd5\u8bd5",(0,a.kt)("inlineCode",{parentName:"p"},"-c"),"\u9009\u9879"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@roclinux ~]# grep -c leo /etc/passwd\n1\n#\u8868\u793a\u542b\u6709 leo \u7684\u884c\u53ea\u6709 1 \u884c\n")),(0,a.kt)("h2",{id:"\u5c55\u793a\u76f8\u90bb\u884c\u5185\u5bb9"},"\u5c55\u793a\u76f8\u90bb\u884c\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@roclinux ~]# grep -A 1 leo passwd\nleo:x:503:503::/home/leo:/bin/bash\nroc:x:504:504::/home/roc:/bin/bash\n#\u4e0a\u9762\u793a\u4f8b\u4e2d\u7684`-A`\u9009\u9879\uff0c\u662f After \u7684\u7f29\u5199\uff0c\u8868\u793a\u9664\u4e86\u5c55\u793a\u5339\u914d\u884c\u4e4b\u5916\uff0c\u8fd8\u8981\u5c55\u793a\u51fa\u5339\u914d\u884c\u4e0b\u9762\u7684\u82e5\u5e72\u884c\u3002\u800c\u793a\u4f8b\u4e2d\u7684 `-A 1` \u5219\u8868\u793a\u8fd8\u5c55\u793a\u5339\u914d\u884c\u4e0b\u9762\u4e00\u884c\u7684\u5185\u5bb9\u3002\n\n[root@roclinux ~]# grep -B 1 leo passwd\ntest:x:502:502::/home/test:/bin/bash\nleo:x:503:503::/home/leo:/bin/bash\n#\u4e0a\u9762\u793a\u4f8b\u4e2d\u7684`-B`\u9009\u9879\uff0c\u662f Before \u7684\u7f29\u5199\uff0c\u8868\u793a\u9664\u4e86\u5c55\u793a\u5339\u914d\u884c\u4e4b\u5916\uff0c\u8fd8\u8981\u5c55\u793a\u51fa\u5339\u914d\u884c\u4e0a\u9762\u7684\u82e5\u5e72\u884c\u3002\u800c\u793a\u4f8b\u4e2d\u7684 `-B 1` \u5219\u8868\u793a\u8fd8\u5c55\u793a\u5339\u914d\u884c\u4e0a\u9762\u4e00\u884c\u7684\u5185\u5bb9\u3002\n\n[root@roclinux ~]# grep -C 1 leo passwd\ntest:x:502:502::/home/test:/bin/bash\nleo:x:503:503::/home/leo:/bin/bash\nroc:x:504:504::/home/roc:/bin/bash\n#\u4e0a\u9762\u793a\u4f8b\u4e2d\u4f7f\u7528\u4e86`-C`\u9009\u9879\uff0c\u5b83\u662f`-A`\u548c`-B`\u9009\u9879\u7684\u5408\u4f53\uff0c\u8868\u793a\u9664\u4e86\u5c55\u793a\u5339\u914d\u884c\u4e4b\u5916\uff0c\u8fd8\u8981\u5c55\u793a\u51fa\u5339\u914d\u884c\u4e0a\u9762\u548c\u4e0b\u9762\u5404\u82e5\u5e72\u884c\u3002\u800c\u793a\u4f8b\u4e2d\u7684 `-C 1` \u5219\u8868\u793a\u8fd8\u5c55\u793a\u5339\u914d\u884c\u4e0a\u9762\u4e00\u884c\u548c\u4e0b\u9762\u4e00\u884c\u7684\u5185\u5bb9\u3002\n")),(0,a.kt)("h2",{id:"\u4e0d\u8981\u533a\u5206\u5927\u5c0f\u5199"},"\u4e0d\u8981\u533a\u5206\u5927\u5c0f\u5199"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u5e0c\u671b\u4e0d\u8981\u533a\u5206\u5b57\u6bcd\u7684\u5927\u5c0f\u5199\uff0c\u8fd9\u6837\u505a\u53ef\u4ee5\u63d0\u9ad8\u641c\u7d22\u547d\u4e2d\u7684\u6982\u7387\uff0c\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"-i"),"\u9009\u9879\u5219\u53ef\u4ee5\u5e2e\u6211\u4eec\u8fd9\u4e2a\u5fd9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[root@roclinux ~]# grep -i "LEO" passwd\nleo:x:503:503::/home/leo:/bin/bash\n')),(0,a.kt)("h2",{id:"\u5904\u7406\u591a\u6587\u4ef6"},"\u5904\u7406\u591a\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#\u627e\u51fa\u5185\u5bb9\u4e2d\u542b\u6709first\u5355\u8bcd\u7684\u6587\u4ef6\u90fd\u6709\u54ea\u4e9b,\u4f7f\u7528`-l`\u9009\u9879\n[roc@roclinux ~]$ grep -l "first" *.txt\n1.txt\n\n[roc@roclinux ~]$ grep -L "first" *.txt\n2.txt\n3.txt\n#\u627e\u51fa\u4e0d\u542b first \u5355\u8bcd\u7684\u6587\u4ef6\u90fd\u6709\u54ea\u4e9b,\u53cd\u5411\u64cd\u4f5c\u5c31\u8981\u7528\u53cd\u5411\u9009\u9879\uff0c\u53ea\u9700\u628a `-l` \u53d8\u6210 `-L` \u5373\u53ef\n')),(0,a.kt)("h2",{id:"grep-\u6b63\u5219"},"grep \u6b63\u5219"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#\u641c\u7d22/etc/passwd\u6587\u4ef6\u4e2d\u5f00\u5934\u662f leo \u7684\u884c\n[root@roclinux ~]# grep '^leo' /etc/passwd\nleo:x:503:503::/home/leo:/bin/bash\n\n#\u641c\u7d22 /etc/passwd \u6587\u4ef6\u4e2d\u884c\u5c3e\u662f bash \u7684\u884c\n[root@roclinux ~]# grep 'bash$' /etc/passwd\nroot:x:0:0:root:/root:/bin/bash\n#...\n")),(0,a.kt)("h3",{id:"\u8bcd\u67e5\u627e"},"\u8bcd\u67e5\u627e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#\u641c\u7d22\u542b\u6709 bin \u8fd9\u4e2a\u8bcd\u7684\u884c\n[root@roclinux ~]# grep bin /etc/passwd\n#\u8fd9\u6837\u7684\u641c\u7d22\u7ed3\u679c\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\u90a3\u5c31\u662f\u8fde sbin \u8fd9\u6837\u7684\u8bcd\u4e5f\u4f1a\u88ab\u641c\u7d22\u51fa\u6765\n\n#\u901a\u8fc7\u4f7f\u7528\\<\u548c\\>\u6765\u51c6\u786e\u5339\u914d\u5230\u4e86 bin \u8fd9\u4e2a\u8bcd\uff0c\u800c sbin \u5374\u88ab\u6321\u5728\u4e86\u95e8\u5916\n[root@roclinux ~]# grep '\\<bin\\>' /etc/passwd --color\n\n")),(0,a.kt)("p",null,"grep \u4e2d\u8fd8\u6709\u4e00\u4e2a\u66f4\u52a0\u7b80\u5355\u7684\u65b9\u6cd5\u6765\u5b9e\u73b0\u5bf9\u8bcd\u7684\u641c\u7d22,\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"-w"),"\u9009\u9879\u6765\u641c\u7d22\u4e00\u4e2a\u8bcd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@roclinux ~]# grep -w 'bin' /etc/passwd\n")),(0,a.kt)("h2",{id:"\u591a\u6761\u4ef6\u67e5\u627e"},"\u591a\u6761\u4ef6\u67e5\u627e"),(0,a.kt)("p",null,"\u60f3\u67e5\u627e\u4ee5 root \u4e3a\u884c\u9996\u7684\u6216\u4ee5 bash \u4e3a\u884c\u5c3e\u7684\u884c\uff0c\u90a3\u5e94\u8be5\u600e\u4e48\u67e5\u627e\u5462\uff1f\u8fd9\u65f6\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"egrep"),"\u3002\u540c\u6837\u7684\u641c\u7d22\u9700\u6c42\uff0cgrep \u5c31\u6ca1\u6709\u529e\u6cd5\u6ee1\u8db3\uff08\u9664\u975e\u4f7f\u7528-E \u9009\u9879\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#\u901a\u8fc7 egrep \u547d\u4ee4\u5b9e\u73b0\u4e86\u4e24\u4e2a\u6761\u4ef6\u7684\u641c\u7d22\uff0c\u5176\u4e2d\u201c|\u201d\u7b26\u53f7\u8868\u793a\u201c\u6216\u201d\uff0c\u8fde\u63a5\u4e86\u4e24\u4e2a\u641c\u7d22\u6761\u4ef6\n[root@roclinux ~]# egrep '^root|bash$' passwd\nroot:x:0:0:root:/root:/bin/bash\n#...\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u5c31\u662f grep \u548c egrep \u7684\u533a\u522b\u4e86\uff0cgrep \u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u662f\u57fa\u672c\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u800c egrep \u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u662f\u6269\u5c55\u6b63\u5219\u8868\u8fbe\u5f0f")),(0,a.kt)("h2",{id:"\u7279\u6b8a\u5b57\u7b26\u67e5\u627e"},"\u7279\u6b8a\u5b57\u7b26\u67e5\u627e"),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u641c\u7d22\u65f6\uff0c\u5047\u5982\u641c\u7d22\u5b57\u7b26\u4e32\u4e2d\u5305\u542b\u4e86\u4e0d\u5c11\u7279\u6b8a\u5b57\u7b26\uff0c\u800c\u8fd9\u4e9b\u7279\u6b8a\u5b57\u7b26\u6070\u597d\u53c8\u662f\u6b63\u5219\u8868\u8fbe\u5f0f\u9884\u7559\u7684\u5b57\u7b26\uff0c\u6bd4\u5982\u8bf4\u201c^\u201d\u3001\u201c\\$\u201d\u7b49\uff0c\u8fd9\u65f6\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"fgrep")," \u6765\u907f\u514d\u70e6\u7410\u7684\u8f6c\u4e49\u4e86,\u5728 fgrep \u7684\u773c\u91cc\uff0c\u6ca1\u6709\u7279\u6b8a\u5b57\u7b26\uff0c\u90fd\u662f\u666e\u901a\u5b57\u7b26,\u6211\u4eec\u6765\u770b\u4e0b\u9762\u7684\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#\u6211\u4eec\u7684roc.txt\u6587\u4ef6\u4e2d\u6709\u51e0\u4e2a^\u548c$\n[roc@roclinux ~]$ cat roc.txt\n^this third file\n^$this file contain some import infomation.\n\n# grep\u4f1a\u5c1d\u8bd5\u53bb\u627e\u5f00\u5934\u4e3athis\u7684\u884c, \u4f46\u5e76\u672a\u627e\u5230\n[roc@roclinux ~]$ grep '^this' roc.txt\n\n# fgrep\u4f1a\u8001\u8001\u5b9e\u5b9e\u5730\u53bb\u627e^this\u5b57\u7b26\u4e32, \u5b83\u627e\u5230\u4e86\n[roc@roclinux ~]$ fgrep '^this' roc.txt\n^this third file\n")))}u.isMDXComponent=!0}}]);