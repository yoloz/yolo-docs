"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[359],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},l=void 0,i={unversionedId:"AI&ML/machine learning",id:"AI&ML/machine learning",title:"machine learning",description:"\u7f16\u7a0b\u548c ML",source:"@site/docs/AI&ML/machine learning.md",sourceDirName:"AI&ML",slug:"/AI&ML/machine learning",permalink:"/docs/AI&ML/machine learning",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/AI&ML/machine learning.md",tags:[],version:"current",lastUpdatedAt:1689307169,formattedLastUpdatedAt:"2023\u5e747\u670814\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"About",permalink:"/docs/About"},next:{title:"CDH\u4f7f\u7528",permalink:"/docs/bigdata/CDH\u4f7f\u7528"}},c={},p=[{value:"\u7f16\u7a0b\u548c ML",id:"\u7f16\u7a0b\u548c-ml",level:2},{value:"TensorFlow",id:"tensorflow",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u7f16\u7a0b\u548c-ml"},"\u7f16\u7a0b\u548c ML"),(0,o.kt)("p",null,"\u4f20\u7edf\u7f16\u7a0b\u6d41\u7a0b: \u8f93\u5165(\u89c4\u5219\u3001\u6570\u636e)\u7ecf\u8fc7\u4f20\u7edf\u7f16\u7a0b\u8f93\u51fa\u7b54\u6848\u3002\n\u673a\u5668\u5b66\u4e60\u6d41\u7a0b: \u8f93\u5165(\u7b54\u6848\u3001\u6570\u636e)\u7ecf\u8fc7\u673a\u5668\u5b66\u4e60\u8f93\u51fa\u89c4\u5219\u3002"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u73b0\u5728\u6211\u4eec\u4e0d\u518d\u8bd5\u56fe\u53bb\u641e\u6e05\u695a\u89c4\u5219\uff0c\u6211\u4eec\u6709\u8bb8\u591a\u4e0e\u573a\u666f\u6709\u5173\u7684\u6570\u636e\uff0c\u6211\u4eec\u6807\u6ce8\u8fd9\u4e9b\u6570\u636e\uff0c\u7136\u540e\u8ba1\u7b97\u673a\u53ef\u4ee5\u641e\u6e05\u695a\u4ec0\u4e48\u6837\u7684\u89c4\u5219\u53ef\u4ee5\u5c06\u6570\u636e\u5339\u914d\u7ed9\u7279\u5b9a\u7684\u6807\u7b7e\u3002")),(0,o.kt)("p",null,"\u4ece\u7f16\u7801\u5230 ML: \u6536\u96c6\u548c\u6807\u6ce8\u6570\u636e\u3002"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u673a\u5668\u5b66\u4e60\u662f\u4e00\u9879\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u505a\u5230\u5339\u914d\u6570\u636e\u548c\u6807\u7b7e\u7684\u6280\u672f\u3002")),(0,o.kt)("h2",{id:"tensorflow"},"TensorFlow"),(0,o.kt)("p",null,"\u4e00\u4e2a\u7528\u6765\u521b\u5efa\u548c\u4f7f\u7528\u673a\u5668\u5b66\u4e60\u6a21\u578b\u7684\u5f00\u6e90\u5e73\u53f0\u3002\u5b83\u5b9e\u73b0\u4e86\u4f17\u591a\u673a\u5668\u5b66\u4e60\u6240\u9700\u7684\u5e38\u7528\u7b97\u6cd5\u548c\u6a21\u5f0f\uff0c\u5e2e\u4f60\u907f\u514d\u5b66\u4e60\u6240\u6709\u6f5c\u5728\u7684\u6570\u5b66\u548c\u903b\u8f91\uff0c\u4ee5\u4fbf\u4f60\u53ea\u9700\u5173\u6ce8\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa\u673a\u5668\u5b66\u4e60\u6a21\u578b\u7684\u8fc7\u7a0b\u53eb\u505a\u8bad\u7ec3\u3002"),"\u8fd9\u91cc\u8ba1\u7b97\u673a\u4f7f\u7528\u4e00\u4e9b\u7b97\u6cd5\u6765\u5b66\u4e60\u8f93\u5165\u6570\u636e\u4ee5\u53ca\u5982\u4f55\u533a\u5206\u5b83\u4eec\u3002\u4f8b\u5982\uff0c\u5982\u4f55\u4f60\u60f3\u8ba9\u4e00\u4e2a\u8ba1\u7b97\u673a\u6765\u8bc6\u522b\u72d7\u548c\u732b\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u5927\u91cf\u7684\u732b\u72d7\u7167\u7247\u6765\u521b\u5efa\u4e00\u4e2a\u6a21\u578b\uff0c\u7136\u540e\u8ba1\u7b97\u673a\u4f1a\u4f7f\u7528\u8fd9\u4e2a\u6a21\u578b\u6765\u5206\u8fa8\u732b\u5e94\u8be5\u662f\u4ec0\u4e48\u6837\u7684\u4ee5\u53ca\u72d7\u5e94\u8be5\u662f\u4ec0\u4e48\u6837\u7684\u3002",(0,o.kt)("strong",{parentName:"p"},"\u5f53\u6a21\u578b\u8bad\u7ec3\u5b8c\u6210\u4e4b\u540e\uff0c\u7528\u5b83\u6765\u8bc6\u522b\u6216\u8005\u5206\u7c7b\u672a\u6765\u7684\u8f93\u5165\u6570\u636e\u7684\u8fc7\u7a0b\u53eb\u4f5c\u63a8\u7406\u3002")),(0,o.kt)("p",null,"\u8bad\u7ec3\u6a21\u578b\uff0c\u5229\u7528TensorFlow\uff0c\u8fd9\u91cc\u6709\u4e09\u79cd\u4e3b\u8981\u65b9\u6cd5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u624b\u5199\u6240\u6709\u4ee3\u7801\uff0c\u8fd9\u6837\u4f60\u53ef\u4ee5\u4e86\u89e3\u8ba1\u7b97\u673a\u662f\u5982\u4f55\u5b66\u4e60\u7684;"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5185\u7f6e\u7684estimators\uff0c\u8fd9\u662f\u5df2\u7ecf\u5b9e\u73b0\u597d\u7684\u795e\u7ecf\u7f51\u7edc\uff0c\u4f60\u53ef\u4ee5\u5b9a\u5236\u5b83;"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528Keras\uff0c\u8fd9\u662f\u4e00\u4e2a\u9ad8\u7ea7API\uff0c\u53ef\u4ee5\u8ba9\u4f60\u5c06\u5e38\u7528\u7684\u5b66\u4e60\u8303\u4f8b\u5c01\u88c5\u5728\u4ee3\u7801\u4e2d;")),(0,o.kt)("p",null,"\u4efb\u4f55\u6a21\u578b\u7684\u547d\u8109\u662f\u5b83\u7684\u6570\u636e\u3002TensorFlow\u63d0\u4f9b\u4e86API\u6765\u7b80\u5316\u8fd9\u4e2a\u6d41\u7a0b\uff0c\u53eb\u4f5cTensorFlow Data Services\uff1a\u5b83\u4eec\u5305\u542b\u4f17\u591a\u9884\u5904\u7406\u8fc7\u7684\u6570\u636e\u96c6\uff0c\u53ea\u9700\u8981\u4e00\u884c\u4ee3\u7801\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\uff0c\u5b83\u4eec\u540c\u6837\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5de5\u5177\u6765\u5904\u7406\u539f\u59cb\u6570\u636e\u3002"))}m.isMDXComponent=!0}}]);