"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[3803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),m=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return i.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=m(n),u=a,d=s["".concat(c,".").concat(u)]||s[u]||g[u]||r;return n?i.createElement(d,l(l({ref:t},p),{},{components:n})):i.createElement(d,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var i=n(7462),a=(n(7294),n(3905));const r={},l=void 0,o={unversionedId:"tools/git\u5e38\u7528\u64cd\u4f5c",id:"tools/git\u5e38\u7528\u64cd\u4f5c",title:"git\u5e38\u7528\u64cd\u4f5c",description:"new",source:"@site/docs/tools/git\u5e38\u7528\u64cd\u4f5c.md",sourceDirName:"tools",slug:"/tools/git\u5e38\u7528\u64cd\u4f5c",permalink:"/docs/tools/git\u5e38\u7528\u64cd\u4f5c",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/tools/git\u5e38\u7528\u64cd\u4f5c.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Proxmox(PVE)\u4f7f\u7528",permalink:"/docs/tools/Proxmox(PVE)\u4f7f\u7528"},next:{title:"idea\u5feb\u6377\u952e",permalink:"/docs/tools/idea\u5feb\u6377\u952e"}},c={},m=[{value:"new",id:"new",level:2},{value:"clone",id:"clone",level:2},{value:"\u90e8\u5206\u6587\u4ef6",id:"\u90e8\u5206\u6587\u4ef6",level:3},{value:"commit",id:"commit",level:2},{value:"diff",id:"diff",level:2},{value:"branch",id:"branch",level:2},{value:"\u91cd\u547d\u540d\u5206\u652f",id:"\u91cd\u547d\u540d\u5206\u652f",level:3},{value:"\u5207\u5206\u652f\u51fa\u53bb",id:"\u5207\u5206\u652f\u51fa\u53bb",level:3},{value:"\u521b\u5efa\u4e00\u4e2a\u5e72\u51c0\u7684\u5206\u652f",id:"\u521b\u5efa\u4e00\u4e2a\u5e72\u51c0\u7684\u5206\u652f",level:3},{value:"\u5408\u5e76\u5176\u4ed6\u5206\u652f\u7684\u67d0\u4e2a commit",id:"\u5408\u5e76\u5176\u4ed6\u5206\u652f\u7684\u67d0\u4e2a-commit",level:3},{value:"tag",id:"tag",level:2},{value:"reset",id:"reset",level:2},{value:"\u66f4\u6362\u4ed3\u5e93\u5730\u5740",id:"\u66f4\u6362\u4ed3\u5e93\u5730\u5740",level:2},{value:"\u5220\u9664\u548c\u91cd\u547d\u540d",id:"\u5220\u9664\u548c\u91cd\u547d\u540d",level:2},{value:"\u591a\u4ed3\u5e93\u5de5\u4f5c",id:"\u591a\u4ed3\u5e93\u5de5\u4f5c",level:2},{value:"\u4fee\u6539 commit",id:"\u4fee\u6539-commit",level:2},{value:"merge confilct",id:"merge-confilct",level:2},{value:"ssh \u8fde\u63a5 github",id:"ssh-\u8fde\u63a5-github",level:2}],p={toc:m};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"new"},"new"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git init -b <init-branch>\ngit remote add -f origin <repo>\ngit status\ngit add xxxx\ngit commit -am ""\n#git config user.email[name]\ngit push --set-upstream origin <init-branch>\n')),(0,a.kt)("h2",{id:"clone"},"clone"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone [<options>] [--] <repo> [<dir>]\ngit clone -b branchName <repo> [<dir>]\n")),(0,a.kt)("h3",{id:"\u90e8\u5206\u6587\u4ef6"},"\u90e8\u5206\u6587\u4ef6"),(0,a.kt)("p",null,"Sparse Checkout \u6a21\u5f0f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u6307\u5b9a\u8fdc\u7a0b\u4ed3\u5e93\nmkdir project_folder\ncd project_folder\ngit init\ngit remote add -f origin <repo>\n\n# \u6307\u5b9a\u514b\u9686\u6a21\u5f0f\ngit config core.sparsecheckout true\n\n# \u6307\u5b9a\u514b\u9686\u7684\u6587\u4ef6\u5939(\u6216\u8005\u6587\u4ef6)\necho "libs" >> .git/info/sparse-checkout\necho "apps/register.go" >> .git/info/sparse-checkout\necho "resource/css" >> .git/info/sparse-checkout\n\n# \u62c9\u53d6\u8fdc\u7a0b\u6587\u4ef6\ngit pull origin master\n\n')),(0,a.kt)("h2",{id:"commit"},"commit"),(0,a.kt)("p",null,"git \u6709\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u6682\u5b58\u533a"),"(staging area), \u53ef\u4ee5\u653e\u5165\u65b0\u6dfb\u52a0\u7684\u6587\u4ef6\u6216\u52a0\u5165\u65b0\u7684\u6539\u52a8\uff0ccommit \u662f\u5c06\u6682\u5b58\u533a\u7684\u4ee3\u7801\u63d0\u4ea4\u5230\u672c\u5730\u4ed3\u5e93\uff0c\u4e0d\u662f\u6211\u4eec disk \u4e0a\u7684\u6539\u52a8(disk \u53ef\u89c1\u7684\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5de5\u4f5c\u533a"),")\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"git add ."),"\u4f1a\u9012\u5f52\u5730\u5c06\u5de5\u4f5c\u533a\u7684\u6539\u52a8\u6587\u4ef6\u6dfb\u52a0\u5230\u672c\u5730\u7684\u6682\u5b58\u533a\n",(0,a.kt)("inlineCode",{parentName:"p"},'git commit -am "xxx"'),"\u4e2d\u7684 a \u662f all \u7684\u610f\u601d"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"-a, --all commit all changed files")),(0,a.kt)("h2",{id:"diff"},"diff"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git diff #\u5de5\u4f5c\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u548c\u6682\u5b58\u533a\u5feb\u7167\u4e4b\u95f4\u7684\u5dee\u5f02\uff0c\u5373\u4fee\u6539\u540e\u8fd8\u6ca1\u6682\u5b58\u8d77\u6765(commit)\u7684\u53d8\u5316\u5185\u5bb9\uff1b\ngit diff --cached #\u5df2\u7ecf\u6682\u5b58\u8d77\u6765\u7684\u6587\u4ef6\u548c\u4e0a\u6b21\u63d0\u4ea4\u65f6\u7684\u5feb\u7167\u4e4b\u95f4\u7684\u5dee\u5f02\uff1b\ngit diff HEAD #\u5de5\u4f5c\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u548c\u4e0a\u6b21\u63d0\u4ea4\u4e4b\u95f4\u7684\u6539\u52a8\uff1b\ngit diff [version tag] #\u67e5\u770b\u6307\u5b9a\u7248\u672c\u4e4b\u540e\u7684\u6539\u52a8\uff1b\n")),(0,a.kt)("h2",{id:"branch"},"branch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git branch  #\u67e5\u770b\u672c\u5730\u5206\u652f\ngit branch -r #\u67e5\u770b\u8fdc\u7a0b\u5206\u652f\ngit branch -a #\u67e5\u770b\u6240\u6709\u5206\u652f\n\ngit branch <branchName> #\u672c\u5730\u521b\u5efa\u65b0\u5206\u652f\ngit checkout xx  #\u5207\u6362\u5230\u5206\u652fxx\ngit checkout -b <branchName> #\u521b\u5efa\u5206\u652f\u7684\u540c\u65f6\u5207\u6362\u5230\u8be5\u5206\u652f\u4e0a\ngit merge <branchName>  #\u5408\u5e76\u67d0\u5206\u652f\u5230\u5f53\u524d\u5206\u652f\n\ngit push origin <branchName>  #\u5c06\u65b0\u5206\u652f\u63a8\u9001\u5230\u8fdc\u7a0brepo\u4e0a\n\ngit branch -d <branchName>  #\u5220\u9664\u672c\u5730\u5206\u652f\ngit push origin --delete <branchName> #\u5220\u9664\u8fdc\u7a0b\u5206\u652f\n")),(0,a.kt)("h3",{id:"\u91cd\u547d\u540d\u5206\u652f"},"\u91cd\u547d\u540d\u5206\u652f"),(0,a.kt)("p",null,"\u5148\u5220\u9664\u8fdc\u7a0b\u5206\u652f\uff0c\u7136\u540e\u91cd\u547d\u540d\u672c\u5730\u5206\u652f\uff0c\u518d\u91cd\u65b0\u63d0\u4ea4\u4e00\u4e2a\u8fdc\u7a0b\u5206\u652f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git push --delete origin <branchName> #\u5220\u9664\u8fdc\u7a0b\u5206\u652f\ngit branch -m b1 new_b  #\u91cd\u547d\u540d\u672c\u5730\u5206\u652f\ngit push origin new_b   #\u63a8\u9001\u672c\u5730\u5206\u652f\n")),(0,a.kt)("h3",{id:"\u5207\u5206\u652f\u51fa\u53bb"},"\u5207\u5206\u652f\u51fa\u53bb"),(0,a.kt)("p",null,"\u91cd\u547d\u540d\u5206\u652f\u63d0\u4ea4\uff0c\u7136\u540e\u672c\u5206\u652f\u7ee7\u7eed\u5f00\u53d1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -m thisBranch otherBranch\ngit push origin otherBranch  #\u7559\u5b58\u8001\u7248\u5230\u4ed3\u5e93\ngit checkout thisBranch  #\u5207\u6362thisBranch\u7ee7\u7eed\u5f00\u53d1\n")),(0,a.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a\u5e72\u51c0\u7684\u5206\u652f"},"\u521b\u5efa\u4e00\u4e2a\u5e72\u51c0\u7684\u5206\u652f"),(0,a.kt)("p",null,"\u4e0d\u7ee7\u627f\u4efb\u4f55\u63d0\u4ea4\u6ca1\u6709\u7236\u8282\u70b9\uff0c\u800c\u4e0a\u6587\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout xx")," \u521b\u5efa\u7684\u5206\u652f xx \u662f\u6709\u7236\u8282\u70b9\u7684\uff0c\u5305\u542b\u4e86\u5386\u53f2\u63d0\u4ea4\u3002\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u5e72\u51c0\u7684\u5206\u652f ",(0,a.kt)("inlineCode",{parentName:"li"},"git checkout --orphan xx")," \uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u5de5\u4f5c\u76ee\u5f55\u4e2d\u5176\u4ed6\u5206\u652f\u5b58\u5728\u7684\u5185\u5bb9 ",(0,a.kt)("inlineCode",{parentName:"li"},"git rm -rf .")," ;"),(0,a.kt)("li",{parentName:"ol"},"\u7ed9\u5206\u652f xx \u6dfb\u52a0\u5185\u5bb9 ",(0,a.kt)("inlineCode",{parentName:"li"},"git add file1 file2...")," ;"),(0,a.kt)("li",{parentName:"ol"},"\u63d0\u4ea4\u5230\u672c\u5730\u4ed3\u5e93 ",(0,a.kt)("inlineCode",{parentName:"li"},'git commit -m "something"')," ;"),(0,a.kt)("li",{parentName:"ol"},"\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93 ",(0,a.kt)("inlineCode",{parentName:"li"},"git push origin xx")," ;")),(0,a.kt)("h3",{id:"\u5408\u5e76\u5176\u4ed6\u5206\u652f\u7684\u67d0\u4e2a-commit"},"\u5408\u5e76\u5176\u4ed6\u5206\u652f\u7684\u67d0\u4e2a commit"),(0,a.kt)("p",null,"\u9700\u8981\u5c06\u5176\u4ed6\u5206\u652f\u7684\u67d0\u4e00\u6b21\u63d0\u4ea4\u5408\u5165\u5230\u672c\u5730\u5f53\u524d\u5206\u652f\u4e0a\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"git cherry-pick commitid"),"\n\u5982\u679c\u5728 git cherry-pick \u540e\u52a0\u4e00\u4e2a\u5206\u652f\u540d\uff0c\u5219\u8868\u793a\u5c06\u8be5\u5206\u652f\u9876\u7aef\u63d0\u4ea4\u8fdb cherry-pick \u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"git cherry-pick <branchname>")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git cherry-pick ..<branchname>"),"\u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"git cherry-pick ^HEAD <branchname>"),"\n\u4ee5\u4e0a\u4e24\u4e2a\u547d\u4ee4\u4f5c\u7528\u76f8\u540c\uff0c\u8868\u793a\u5e94\u7528\u6240\u6709\u63d0\u4ea4\u5f15\u5165\u7684\u66f4\u6539\uff0c\u8fd9\u4e9b\u63d0\u4ea4\u662f branchname \u7684\u7956\u5148\u4f46\u4e0d\u662f HEAD \u7684\u7956\u5148(\u5373\u5f53\u524d\u5206\u652f)\uff0c\u6bd4\u5982\uff0c\u73b0\u5728\u6211\u7684\u4ed3\u5e93\u4e2d\u6709\u4e09\u4e2a\u5206\u652f\uff0c\u5176\u63d0\u4ea4\u5386\u53f2\u5982\u4e0b\u56fe\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"               C<---D<---E  branch2\n              /\nmaster   A<---B\n              \\\n               F<---G<---H  branch3\n                         |\n                         HEAD\n")),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"git cherry-pick ..branch2"),"\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"p"},"git cherry-pick ^HEAD branch2"),",\u90a3\u4e48\u4f1a\u5c06\u5c5e\u4e8e branch2 \u7684\u7956\u5148\u4f46\u4e0d\u5c5e\u4e8e branch3 \u7684\u7956\u5148\u7684\u6240\u6709\u63d0\u4ea4\u5f15\u5165\u5230\u5f53\u524d\u5206\u652f branch3 \u4e0a\uff0c\u5e76\u751f\u6210\u65b0\u7684\u63d0\u4ea4\uff0c\u6267\u884c\u540e\u7684\u63d0\u4ea4\u5386\u53f2\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"\n               C<---D<---E  branch2\n              /\nmaster   A<---B\n              \\\n               F<---G<---H<---C<---D<---E  branch3\n                                        |\n                                        HEAD\n")),(0,a.kt)("h2",{id:"tag"},"tag"),(0,a.kt)("p",null,"\u6211\u4eec\u5e38\u5e38\u5728\u4ee3\u7801\u5c01\u677f\u65f6,\u4f7f\u7528 git \u521b\u5efa\u4e00\u4e2a tag,\u8fd9\u662f\u4e00\u4e2a\u4e0d\u53ef\u4fee\u6539\u7684\u5386\u53f2\u4ee3\u7801\u7248\u672c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git tag -a V1.2 -m 'release 1.2' #\u521b\u5efa\u4e86\u672c\u5730\u4e00\u4e2a\u7248\u672cV1.2,\u5e76\u4e14\u6dfb\u52a0\u4e86\u9644\u6ce8\u4fe1\u606f\ngit tag #\u67e5\u770btag\ngit show V1.2 #\u67e5\u770b\u5177\u4f53tag\u9644\u6ce8\u4fe1\u606f\ngit push origin --tags #\u6807\u7b7e\u540c\u6b65\u5230\u8fdc\u7a0b\u4ee3\u7801\u5e93\ngit checkout tag_name #\u5207\u6362\u5230tag,\u53ea\u8bfb\u7248\u672c\ngit fetch origin tag <tagname> #\u83b7\u53d6\u8fdc\u7a0btag\ngit push origin --delete tag <tagname> #\u5220\u9664\u8fdc\u7a0btag\n#\u4ecetag\u521b\u5efa\u65b0\u7684\u5206\u652f\u7ee7\u7eed\u5f00\u53d1\uff1agit checkout -b \u65b0\u5206\u652f tag\u540d\ngit checkout -b [newbranch] [tabname]\n")),(0,a.kt)("h2",{id:"reset"},"reset"),(0,a.kt)("p",null,"git \u64a4\u9500\u64cd\u4f5c\u4e3b\u8981\u6709\u5982\u4e0b\u65b9\u5f0f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u62c9\u53d6\u6682\u5b58\u533a\u6587\u4ef6\u66ff\u6362\u5de5\u4f5c\u533a\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"li"},"git checkout file1 dir1...")," ;"),(0,a.kt)("li",{parentName:"ul"},"\u62c9\u53d6\u7248\u672c\u5e93\u6587\u4ef6\u5230\u6682\u5b58\u533a, \u4e0d\u5f71\u54cd\u5de5\u4f5c\u533a ",(0,a.kt)("inlineCode",{parentName:"li"},"git reset HEAD file1 dir1...")," ;")),(0,a.kt)("h2",{id:"\u66f4\u6362\u4ed3\u5e93\u5730\u5740"},"\u66f4\u6362\u4ed3\u5e93\u5730\u5740"),(0,a.kt)("p",null,"\u67e5\u770b\u8fdc\u7a0b\u4ed3\u5e93\u4fe1\u606f ",(0,a.kt)("inlineCode",{parentName:"p"},"git remote -v"),"\n\u672c\u5730\u4ed3\u5e93\u66f4\u6362\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git remote rm origin\ngit remote add origin new_addr\n#\u7b49\u4ef7\u64cd\u4f5c\ngit remote set-url origin new_addr\n")),(0,a.kt)("h2",{id:"\u5220\u9664\u548c\u91cd\u547d\u540d"},"\u5220\u9664\u548c\u91cd\u547d\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git rm xxx          #\u5c06\u6587\u4ef6\u4ece\u7d22\u5f15\u548c\u5de5\u4f5c\u76ee\u5f55\u4e2d\u90fd\u5220\u9664\ngit rm --cached xxx #\u5220\u9664\u7d22\u5f15\u4e2d\u7684\u6587\u4ef6\u5e76\u628a\u5b83\u4fdd\u7559\u5728\u5de5\u4f5c\u76ee\u5f55\u4e2d\ngit checkout xxx    #\u6587\u4ef6\u5220\u9664\u540e\u7684\u6062\u590d\ngit mv f1  f2       #\u91cd\u547d\u540d,f2\u4e0d\u5b58\u5728\n")),(0,a.kt)("h2",{id:"\u591a\u4ed3\u5e93\u5de5\u4f5c"},"\u591a\u4ed3\u5e93\u5de5\u4f5c"),(0,a.kt)("p",null,"github \u548c\u7801\u4e91\u540c\u65f6\u7ef4\u62a4, \u4ee3\u7801\u5728 github \u4e0a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd repositoriesDir\ngit remote -v\n#origin https://github.com/yoloz/abc.git (fetch)\n#origin https://github.com/yoloz/abc.git (push)\ngit remote add def https://gitee.com/user/def.git\ngit remote -v\n#def https://gitee.com/user/def.git (fetch)\n#def https://gitee.com/user/def.git (push)\n#origin https://github.com/yoloz/abc.git (fetch)\n#origin https://github.com/yoloz/abc.git (push)\ngit pull def master:def1  #pull def\u4e2d\u7684master\u5206\u652f\u5230\u672c\u5730def1\u5206\u652f\n#\u62a5\u9519refusing to merge unrelated histories\uff0c\u540e\u9762\u6dfb\u52a0\u9009\u9879--allow-unrelated-history\ngit checkout def1 #change branch to def1\ngit merge master [--allow-unrelated-history] #\u62f7\u8d1d\u672c\u5730master\u5206\u652f\u5230\u672c\u5730def1\u5206\u652f\u4e2d\ngit push def1 def:master  #push \u672c\u5730def1\u5206\u652f\u5230def\u4e2d\u7684master\u5206\u652f\n")),(0,a.kt)("p",null,"fatal: refusing to merge unrelated histories \u6dfb\u52a0\n",(0,a.kt)("inlineCode",{parentName:"p"},"--allow-unrelated-history")," \u544a\u8bc9 git \u5141\u8bb8\u4e0d\u76f8\u5173\u5386\u53f2\u5408\u5e76\n",(0,a.kt)("inlineCode",{parentName:"p"},"git pull def master:def")," \u7528\u4e8e\u65b0\u5efa\u5206\u652f\uff0c\u5982\u679c\u66f4\u65b0 def \u5206\u652f\uff0c\u5219\u8981\u5148 checkout \u5230 def \u5206\u652f"),(0,a.kt)("h2",{id:"\u4fee\u6539-commit"},"\u4fee\u6539 commit"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539\u6700\u8fd1\u7684\u4e00\u6b21 commit log\uff0c\u76f4\u63a5\u4f7f\u7528\u547d\u4ee4 ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit --amend")," \u5c31\u53ef\u4ee5\u5b8c\u6210\u4fee\u6539\u5566")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5408\u5e76\u591a\u4e2a commit \u4e3a\u4e00\u4e2a\u5b8c\u6574 commit, \u6216\u8005\u591a\u5206\u652f\u5408\u5e76\u65f6\u53bb\u9664\u88ab\u5408\u5e76\u5206\u652f\u7684\u4e00\u4e9b commit"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git log\n#commit f711d30598620669a692a8115d1c798af66da311\n#Author: abc <abc@gmail.com>\n#Date:   Thu Jul 11 11:38:15 2019 +0800\n#    commit\u63d0\u4ea4\u8bf4\u660e\ngit rebase -i f711d30 #commit\u6807\u5fd7\u7684\u524d7\u4f4d\n\n#pick e157f87 Initial commit\n#pick f711d30 2019-07-11 11:38:15\n#pick e04d2b0 2019-07-11 11:40:52\n\n# Commands:\n# p, pick = use commit\n# r, reword = use commit, but edit the commit message\n# e, edit = use commit, but stop for amending\n# s, squash = use commit, but meld into previous commit\n# f, fixup = like "squash", but discard this commit\'s log message\n# x, exec = run command (the rest of the line) using shell\n# d, drop = remove commit\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git rebase -i [startpoint] [endpoint]")," \u5176\u4e2d-i \u7684\u610f\u601d\u662f--interactive\uff0c\u5373\u5f39\u51fa\u4ea4\u4e92\u5f0f\u7684\u754c\u9762\u8ba9\u7528\u6237\u7f16\u8f91\u5b8c\u6210\u5408\u5e76\u64cd\u4f5c\uff0c","[startpoint][endpoint]","\u5219\u6307\u5b9a\u4e86\u4e00\u4e2a\u7f16\u8f91\u533a\u95f4\uff0c\u5982\u679c\u4e0d\u6307\u5b9a","[endpoint]","\uff0c\u5219\u8be5\u533a\u95f4\u7684\u7ec8\u70b9\u9ed8\u8ba4\u662f\u5f53\u524d\u5206\u652f HEAD \u6240\u6307\u5411\u7684 commit(\u6ce8\uff1a\u8be5\u533a\u95f4\u6307\u5b9a\u7684\u662f\u4e00\u4e2a\u524d\u5f00\u540e\u95ed\u7684\u533a\u95f4)\u3002"),(0,a.kt)("li",{parentName:"ul"},"^X \u7684^\u8868\u793a ctrl, M-A \u7684 M \u8868\u793a alt"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539\u540e(\u5982\u5c06 pick \u6362\u6210 f), ctrl+x \u9000\u51fa, \u63d0\u793a\u662f\u5426\u4fdd\u5b58\u4fee\u6539\uff0c\u9009\u62e9 yes, \u7136\u540e enter \u56de\u8f66\u5373\u53ef"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539 conflict\uff0c\u7136\u540e push"),(0,a.kt)("li",{parentName:"ul"},"d \u4f1a\u5220\u9664\u8fd9\u4e2a commit \u4ee5\u53ca\u76f8\u5173\u7684\u4fee\u6539\u53ca\u6dfb\u52a0\u7684\u6587\u4ef6")),(0,a.kt)("h2",{id:"merge-confilct"},"merge confilct"),(0,a.kt)("p",null,"\u624b\u52a8\u5904\u7406\u51b2\u7a81\u6587\u4ef6\uff1a\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"<<<<<<< HEAD")," \u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"=======")," \u4e2d\u95f4\u7684\u5185\u5bb9\u662f local \u63d0\u4ea4\u7684\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"======="),"\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},">>>>>>> commit-id")," \u662f\u8fdc\u7a0b\u4ed3\u5e93\u4e2d\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u5904\u7406\u597d\u540e\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"p"},"git add conflictFile"),"\uff0c\u7136\u540e",(0,a.kt)("inlineCode",{parentName:"p"},"commit"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"push")),(0,a.kt)("h2",{id:"ssh-\u8fde\u63a5-github"},"ssh \u8fde\u63a5 github"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/authentication/connecting-to-github-with-ssh"},"https://docs.github.com/cn/authentication/connecting-to-github-with-ssh")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u751f\u6210\u65b0 SSH \u5bc6\u94a5\uff08\u66ff\u6362\u4e3a\u60a8\u7684 GitHub \u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff09",(0,a.kt)("inlineCode",{parentName:"li"},'ssh-keygen -t ed25519 -C "your_email@example.com"')),(0,a.kt)("li",{parentName:"ol"},"\u5c06 SSH \u516c\u94a5\u590d\u5236\u5230\u526a\u8d34\u677f",(0,a.kt)("inlineCode",{parentName:"li"},"clip < ~/.ssh/id_ed25519.pub"),",\u7136\u540e\u767b\u5f55 github \u6dfb\u52a0\uff1b")))}g.isMDXComponent=!0}}]);