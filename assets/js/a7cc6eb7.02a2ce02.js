"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[401],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},v="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),v=d(t),m=l,c=v["".concat(p,".").concat(m)]||v[m]||u[m]||i;return t?a.createElement(c,r(r({ref:n},s),{},{components:t})):a.createElement(c,r({ref:n},s))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[v]="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},627:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(7462),l=(t(7294),t(3905));const i={},r=void 0,o={unversionedId:"linux/LVM\u4f7f\u7528",id:"linux/LVM\u4f7f\u7528",title:"LVM\u4f7f\u7528",description:"\u903b\u8f91\u5377\u7ba1\u7406 Logical Volume Management\uff08LVM\uff09\u5728 Linux \u7cfb\u7edf\u4e2d\u626e\u6f14\u7740\u91cd\u8981\u7684\u89d2\u8272\uff0c\u5b83\u53ef\u4ee5\u63d0\u9ad8\u53ef\u7528\u6027\u3001\u78c1\u76d8 I/O\u3001\u6027\u80fd\u548c\u78c1\u76d8\u7ba1\u7406\u7684\u80fd\u529b\u3002\u5982\u4e0b\uff1a",source:"@site/docs/linux/LVM\u4f7f\u7528.md",sourceDirName:"linux",slug:"/linux/LVM\u4f7f\u7528",permalink:"/docs/linux/LVM\u4f7f\u7528",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/linux/LVM\u4f7f\u7528.md",tags:[],version:"current",lastUpdatedAt:1689307169,formattedLastUpdatedAt:"2023\u5e747\u670814\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AIpine\u7cfb\u7edf",permalink:"/docs/linux/AIpine\u7cfb\u7edf"},next:{title:"centos\u914d\u7f6evault\u6e90",permalink:"/docs/linux/centos\u914d\u7f6evault\u6e90"}},p={},d=[{value:"\u521b\u5efa\u7269\u7406\u5377(PV)",id:"\u521b\u5efa\u7269\u7406\u5377pv",level:2},{value:"\u521b\u5efa\u5377\u7ec4(VG)",id:"\u521b\u5efa\u5377\u7ec4vg",level:2},{value:"\u6269\u5c55\u5377\u7ec4(VG)",id:"\u6269\u5c55\u5377\u7ec4vg",level:3},{value:"\u521b\u5efa\u903b\u8f91\u5377(LV)",id:"\u521b\u5efa\u903b\u8f91\u5377lv",level:2},{value:"\u6269\u5c55\u903b\u8f91\u5377(LV)",id:"\u6269\u5c55\u903b\u8f91\u5377lv",level:3},{value:"\u521b\u5efa\u6587\u4ef6\u7cfb\u7edf",id:"\u521b\u5efa\u6587\u4ef6\u7cfb\u7edf",level:2},{value:"\u6302\u8f7d\u903b\u8f91\u5377",id:"\u6302\u8f7d\u903b\u8f91\u5377",level:3}],s={toc:d},v="wrapper";function u(e){let{components:n,...i}=e;return(0,l.kt)(v,(0,a.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u903b\u8f91\u5377\u7ba1\u7406 Logical Volume Management\uff08LVM\uff09\u5728 Linux \u7cfb\u7edf\u4e2d\u626e\u6f14\u7740\u91cd\u8981\u7684\u89d2\u8272\uff0c\u5b83\u53ef\u4ee5\u63d0\u9ad8\u53ef\u7528\u6027\u3001\u78c1\u76d8 I/O\u3001\u6027\u80fd\u548c\u78c1\u76d8\u7ba1\u7406\u7684\u80fd\u529b\u3002\u5982\u4e0b\uff1a\n",(0,l.kt)("img",{alt:"LVM",src:t(2194).Z,width:"1920",height:"1080"})),(0,l.kt)("h2",{id:"\u521b\u5efa\u7269\u7406\u5377pv"},"\u521b\u5efa\u7269\u7406\u5377(PV)"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u78c1\u76d8\u3001RAID \u9635\u5217\u3001SAN \u78c1\u76d8\u6216\u5206\u533a\u4f5c\u4e3a LVM \u7269\u7406\u5377 Physical Volume\uff08PV\uff09\u3002\n\u5148\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u68c0\u6d4b(fdisk -l \u6216\u8005 lsblk)\uff0c\u7136\u540e\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"pvcreate")," \u547d\u4ee4\u521d\u59cb\u5316 LVM PV:",(0,l.kt)("inlineCode",{parentName:"p"},"pvcreate [\u7269\u7406\u5377\u540d]")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ sudo pvcreate /dev/sdb /dev/sdc /dev/sdd\nPhysical volume "/dev/sdb" successfully created\nPhysical volume "/dev/sdc" successfully created\nPhysical volume "/dev/sdd" successfully created\n')),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u9762\u7684\u547d\u4ee4\u5c06\u5220\u9664\u7ed9\u5b9a\u78c1\u76d8 /dev/sdb\u3001/dev/sdc \u548c /dev/sdd \u4e0a\u7684\u6240\u6709\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7269\u7406\u78c1\u76d8\u53ef\u4ee5\u76f4\u63a5\u6dfb\u52a0\u5230 LVM PV \u4e2d\uff0c\u800c\u4e0d\u5fc5\u662f\u78c1\u76d8\u5206\u533a\u3002"))),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"pvdisplay"),"(\u8be6\u7ec6\u8f93\u51fa) \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"pvs"),"(\u6458\u8981\u8f93\u51fa) \u547d\u4ee4\u6765\u663e\u793a\u521b\u5efa\u7684 PV:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ sudo pvs\nPV VG Fmt Attr PSize PFree\n/dev/sdb lvm2 a-- 15.00g 15.00g\n/dev/sdc lvm2 a-- 15.00g 15.00g\n/dev/sdd lvm2 a-- 15.00g 15.00g\n\n$ sudo pvdisplay\n"/dev/sdb" is a new physical volume of "15.00 GiB"\n--- NEW Physical volume ---\nPV Name               /dev/sdb\nVG Name\nPV Size               15.00 GiB\nAllocatable           NO\nPE Size               0\nTotal PE              0\nFree PE               0\nAllocated PE          0\nPV UUID               69d9dd18-36be-4631-9ebb-78f05fe3217f\n#......\n')),(0,l.kt)("h2",{id:"\u521b\u5efa\u5377\u7ec4vg"},"\u521b\u5efa\u5377\u7ec4(VG)"),(0,l.kt)("p",null,"Volume Group\uff08VG\uff09\u662f LVM \u7ed3\u6784\u4e2d\u7684\u53e6\u4e00\u5c42\u3002\u57fa\u672c\u4e0a\uff0c\u5377\u7ec4\u7531\u4f60\u521b\u5efa\u7684 LVM \u7269\u7406\u5377\u7ec4\u6210\uff0c\u4f60\u53ef\u4ee5\u5c06\u7269\u7406\u5377\u6dfb\u52a0\u5230\u73b0\u6709\u7684\u5377\u7ec4\u4e2d\uff0c\u6216\u8005\u6839\u636e\u9700\u8981\u4e3a\u7269\u7406\u5377\u521b\u5efa\u65b0\u7684\u5377\u7ec4\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5c06\u4e00\u4e2a\u65b0\u7684\u7269\u7406\u5377\u6dfb\u52a0\u5230\u65b0\u7684\u5377\u7ec4\u4e2d\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"vgcreate [\u5377\u7ec4\u540d] [\u7269\u7406\u5377\u540d]")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ sudo vgcreate vg01 /dev/sdb /dev/sdc /dev/sdd\nVolume group "vg01" successfully created\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"PE(Physical Extent)\u7269\u7406\u6269\u5c55\u5757:\u662f\u6574\u4e2a lvm \u6700\u5c0f\u7684\u5b58\u50a8\u5757\uff0c\u4e5f\u5c31\u662f\u8bf4\u6211\u4eec\u7684\u6587\u4ef6\u6570\u636e\u90fd\u662f\u7531\u5199\u5165 pe \u6765\u5904\u7406\u7684\u3002\u7b80\u5355\u7684\u8bf4\uff0c\u8fd9\u4e2a pe \u6709\u70b9\u50cf\u6587\u4ef6\u7cfb\u7edf\u91cc\u9762\u7684 block \u5927\u5c0f\u3002"),(0,l.kt)("p",{parentName:"admonition"},"lvm \u9ed8\u8ba4\u4f7f\u7528 4MB \u7684 pe \u5757,lvm \u7684 vg \u6700\u591a\u80fd\u542b\u6709 65534 \u4e2a pe\uff0c\u56e0\u6b64\u9ed8\u8ba4\u7684 lvm vg \u4f1a\u6709 4M","*","65534/1024=256G."),(0,l.kt)("p",{parentName:"admonition"},"\u67e5\u770b pe \u5927\u5c0f:",(0,l.kt)("inlineCode",{parentName:"p"},"sudo vgdisplay")),(0,l.kt)("p",{parentName:"admonition"},"\u4fee\u6539 pe \u5927\u5c0f:",(0,l.kt)("inlineCode",{parentName:"p"},"sudo vgchange -s 1"),",\u4fee\u6539\u4e3a 1mb \u5927\u5c0f,\u8fd9\u91cc\u53ea\u80fd\u5199 2 \u7684\u500d\u6570,\u6700\u5927\u4e3a 64\uff0c\u6216\u8005\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"sudo vgchange -s 1 \u5377\u7ec4\u540d"),"\uff0c\u6216\u8005\u5728\u521b\u5efa\u5377\u7ec4\u65f6\u6307\u5b9a\n",(0,l.kt)("inlineCode",{parentName:"p"},"sudo vgcreate -s 16 \u5377\u7ec4\u540d \u7269\u7406\u78c1\u76d8\u8def\u5f84"))),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"vgs"),"(\u6458\u8981\u8f93\u51fa) \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"vgdisplay"),"(\u8be6\u7ec6\u8f93\u51fa) \u547d\u4ee4\u6765\u663e\u793a\u521b\u5efa\u7684 VG \u7684\u4fe1\u606f(\u540e\u9762\u5377\u7ec4\u540d\u53ef\u9009)\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo vgs vg01\nVG #PV #LV #SN Attr VSize VFree\nvg01 3 0 0 wz--n- 44.99g 44.99g\n\n$ sudo vgdisplay vg01\n--- Volume group ---\nVG Name              vg01\nSystem ID\nFormat               lvm2\nMetadata Areas       3\nMetadata Sequence No 1\nVG Access            read/write\nVG Status            resizable\nMAX LV               0\nCur LV               0\nOpen LV              0\nMax PV               0\nCur PV               3\nAct PV               3\nVG Size              44.99 GiB\nPE Size              4.00 MiB\nTotal PE             11511\nAlloc PE / Size      0 / 0\nFree PE / Size       11511 / 44.99 GiB\nVG UUID              d17e3c31-e2c9-4f11-809c-94a549bc43b7\n")),(0,l.kt)("h3",{id:"\u6269\u5c55\u5377\u7ec4vg"},"\u6269\u5c55\u5377\u7ec4(VG)"),(0,l.kt)("p",null,"\u5982\u679c VG \u6ca1\u6709\u7a7a\u95f4\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"vgextend"),"\u547d\u4ee4\u5728\u73b0\u6709\u7684\u5377\u7ec4\uff08VG\uff09\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u7269\u7406\u5377\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"vgextend [\u5df2\u6709\u5377\u7ec4\u540d] [\u7269\u7406\u5377\u540d]")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u6269\u5c55\u5377\u7ec4\u524d\u63d0\u662f\u4e0b\u5c42\u7269\u7406\u5377(PV)\u8fd8\u6709\u53ef\u5206\u914d\u7684,\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"pvdisplay"),"\u67e5\u770b\uff0c\u5982\u679c\u5df2\u7ecf\u4f7f\u7528\u5b8c\u5219\u9700\u8981\u5148\u63d0\u4f9b\u5b58\u50a8\u8bbe\u5907\u518d\u6269\u5c55\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ sudo vgextend vg01 /dev/sda\nVolume group "vg01" successfully extended\n')),(0,l.kt)("h2",{id:"\u521b\u5efa\u903b\u8f91\u5377lv"},"\u521b\u5efa\u903b\u8f91\u5377(LV)"),(0,l.kt)("p",null,"\u903b\u8f91\u5377 Logical Volume\uff08LV\uff09\u662f LVM \u7ed3\u6784\u4e2d\u7684\u9876\u5c42\u3002\u903b\u8f91\u5377\u662f\u7531\u5377\u7ec4\u521b\u5efa\u7684\u5757\u8bbe\u5907\u3002\u5b83\u4f5c\u4e3a\u4e00\u4e2a\u865a\u62df\u78c1\u76d8\u5206\u533a\uff0c\u53ef\u4ee5\u4f7f\u7528 LVM \u547d\u4ee4\u8f7b\u677e\u7ba1\u7406\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"lvcreate")," \u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u903b\u8f91\u5377:",(0,l.kt)("inlineCode",{parentName:"p"},"lvcreate \u2013n [\u903b\u8f91\u5377\u540d] \u2013L [\u903b\u8f91\u5377\u5927\u5c0f] [\u8981\u521b\u5efa\u7684 LV \u6240\u5728\u7684\u5377\u7ec4\u540d\u79f0]")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#\u8fd0\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u521b\u5efa\u4e00\u4e2a\u5927\u5c0f\u4e3a 10GB \u7684\u903b\u8f91\u5377 lv001\uff1a\n$ sudo lvcreate -n lv001 -L 10G vg01\nLogical volume "lv001" created\n')),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"lvs"),"(\u6458\u8981\u8f93\u51fa) \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"lvdisplay"),"(\u8be6\u7ec6\u8f93\u51fa) \u547d\u4ee4\u6765\u663e\u793a\u6240\u521b\u5efa\u7684 LV \u7684\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo lvs /dev/vg01/lvol01\nLV VG Attr LSize Pool Origin Data% Move Log Cpy%Sync Convert\nlv001 vg01 mwi-a-m-- 10.00g lv001_mlog 100.00\n\n$ sudo lvdisplay /dev/vg01/lv001\n--- Logical volume ---\nLV Path                /dev/vg01/lv001\nLV Name                lv001\nVG Name                vg01\nLV UUID                ca307aa4-0866-49b1-8184-004025789e63\nLV Write Access        read/write\nLV Creation host, time localhost.localdomain, 2020-09-10 11:43:05 -0700\nLV Status              available\n# open                 0\nLV Size                10.00 GiB\nCurrent LE             2560\nSegments               1\nAllocation             inherit\nRead ahead sectors     auto\n- currently set to     256\nBlock device           253:4\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4ee5 PE \u4e2a\u6570\u521b\u5efa\u903b\u8f91\u5377\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"lvcreate \u2013n [\u903b\u8f91\u5377\u540d] \u2013l [\u7269\u7406\u6269\u5c55 \uff08PE\uff09 \u5927\u5c0f] [\u8981\u521b\u5efa\u7684 LV \u6240\u5728\u7684\u5377\u7ec4\u540d\u79f0]")),(0,l.kt)("p",{parentName:"admonition"},"\u9996\u5148\u8ba1\u7b97\u9700\u8981\u7684 PE \u4e2a\u6570\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0clvm \u4f7f\u7528 4MB \u7684\u7269\u7406\u8303\u56f4\uff0c\u5177\u4f53\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"vgdisplay")," \u547d\u4ee4\u6765\u68c0\u67e5\u6b63\u786e\u7684 PE \u5927\u5c0f\uff0c\u8ba1\u7b97\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"10GB = 10240MB / 4MB \uff08PE \u5927\u5c0f\uff09 = 2560 PE"),"\uff0c\u521b\u5efa\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"sudo lvcreate -n lv001 -l 2560 vg01"))),(0,l.kt)("h3",{id:"\u6269\u5c55\u903b\u8f91\u5377lv"},"\u6269\u5c55\u903b\u8f91\u5377(LV)"),(0,l.kt)("p",null,"\u5982\u679c LV \u6ca1\u6709\u7a7a\u95f4\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"lvextend"),"\u547d\u4ee4\u589e\u52a0\u73b0\u6709\u903b\u8f91\u5377\u5927\u5c0f\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"lvextend [\u8981\u589e\u52a0\u7684\u989d\u5916\u7a7a\u95f4] [\u73b0\u6709\u903b\u8f91\u5377\u540d\u79f0]")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u6269\u5c55\u903b\u8f91\u5377\u524d\u63d0\u662f\u4e0b\u5c42 VG(\u5377\u7ec4)\u8fd8\u6709\u53ef\u5206\u914d\u7a7a\u95f4,\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"vgdisplay"),"\u67e5\u770b",(0,l.kt)("inlineCode",{parentName:"p"},"Free PE / Size"),"\uff0c\u5982\u679c\u5df2\u7ecf\u4f7f\u7528\u5b8c\u5219\u5148\u6269\u5c55 VG,\u518d\u6269\u5c55 LV\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#\u5c06\u73b0\u6709\u7684\u903b\u8f91\u5377\u589e\u52a0 10GB\n$ sudo lvextend -L +10G /dev/mapper/vg01-lv002\nRounding size to boundary between physical extents: 5.90 GiB\nSize of logical volume vg01/lv002 changed from 5.00 GiB (1280 extents) to 15.00 GiB (3840 extents).\nLogical volume var successfully resized\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 PE \u4e2a\u6570\u6269\u5145\u903b\u8f91\u5377\uff0c\u7ec6\u8282\u540c\u4e0a\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"sudo lvextend -l +2560 /dev/mapper/vg01-lv002"),";"),(0,l.kt)("li",{parentName:"ul"},"\u8981\u4f7f\u7528\u767e\u5206\u6bd4\uff08%\uff09\u6269\u5c55\u903b\u8f91\u5377:",(0,l.kt)("inlineCode",{parentName:"li"},"sudo lvextend -l +40%FREE /dev/mapper/vg01-lv002"),";"))),(0,l.kt)("p",null,"\u903b\u8f91\u5377\u6269\u5c55\u540e\u9700\u8981\u8c03\u6574\u6587\u4ef6\u7cfb\u7edf\u7684\u5927\u5c0f\u4ee5\u6269\u5c55\u903b\u8f91\u5377\u5185\u7684\u7a7a\u95f4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u57fa\u4e8e ext3 \u548c ext4 \u7684\u6587\u4ef6\u7cfb\u7edf\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"sudo resize2fs /dev/mapper/vg01-lv002")),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e xfs \u6587\u4ef6\u7cfb\u7edf:",(0,l.kt)("inlineCode",{parentName:"li"},"sudo xfs_growfs /dev/mapper/vg01-lv002"))),(0,l.kt)("p",null,"\u6700\u540e\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"df")," \u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u7cfb\u7edf\u7684\u5927\u5c0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo df -h /lvmtest1\nFilesystem Size Used Avail Use% Mounted on\n/dev/mapper/vg01-lv002 15360M 34M 15326M 4% /lvmtest1\n")),(0,l.kt)("h2",{id:"\u521b\u5efa\u6587\u4ef6\u7cfb\u7edf"},"\u521b\u5efa\u6587\u4ef6\u7cfb\u7edf"),(0,l.kt)("p",null,"\u5728\u521b\u5efa\u6709\u6548\u7684\u6587\u4ef6\u7cfb\u7edf\u4e4b\u524d\u662f\u4e0d\u80fd\u4f7f\u7528\u903b\u8f91\u5377\u7684\uff0c\u521b\u5efa\u6587\u4ef6\u7cfb\u7edf\u7684\u4e00\u822c\u8bed\u6cd5\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"mkfs \u2013t [\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b] /dev/[LV \u6240\u5728\u7684\u5377\u7ec4\u540d\u79f0]/[LV \u540d\u79f0]")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#\u5c06\u903b\u8f91\u5377 lv001 \u683c\u5f0f\u5316\u4e3a ext4 \u6587\u4ef6\u7cfb\u7edf\n$ sudo mkfs -t ext4 /dev/vg01/lv001\n#\u5bf9\u4e8e xfs \u6587\u4ef6\u7cfb\u7edf\n$ sudo mkfs -t xfs /dev/vg01/lv001\n")),(0,l.kt)("h3",{id:"\u6302\u8f7d\u903b\u8f91\u5377"},"\u6302\u8f7d\u903b\u8f91\u5377"),(0,l.kt)("p",null,"\u6700\u540e\u9700\u8981\u6302\u8f7d\u903b\u8f91\u5377\u6765\u4f7f\u7528\u5b83"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\u6765\u6302\u8f7d\u903b\u8f91\u5377\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"sudo mkdir /lvmtest"),";"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6302\u8f7d\u547d\u4ee4\u6302\u8f7d\u903b\u8f91\u5377:",(0,l.kt)("inlineCode",{parentName:"li"},"mount /dev/vg01/lv001 /lvmtest"),";"),(0,l.kt)("li",{parentName:"ol"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/fstab")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u65b0\u7684\u903b\u8f91\u5377\u8be6\u7ec6\u4fe1\u606f\uff0c\u4ee5\u4fbf\u7cfb\u7edf\u542f\u52a8\u65f6\u81ea\u52a8\u6302\u8f7d:",(0,l.kt)("inlineCode",{parentName:"li"},"/dev/vg01/lv001 /lvmtest xfs defaults 0 0"),";")),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"df"),"\u547d\u4ee4\u68c0\u67e5\u65b0\u6302\u8f7d\u7684\u5377\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo df -h /lvmtest\nFilesystem Size Used Avail Use% Mounted on\n/dev/mapper/vg01-lv001 15360M 34M 15326M 4% /lvmtest\n")))}u.isMDXComponent=!0},2194:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/lvm-345cd101e8a43759a3ff57cc7c07bed1.jpeg"}}]);