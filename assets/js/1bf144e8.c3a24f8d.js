"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,f=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={},o=void 0,r={unversionedId:"bigdata/filebeat\u4f7f\u7528",id:"bigdata/filebeat\u4f7f\u7528",title:"filebeat\u4f7f\u7528",description:"\u540c logstash\uff0cfilebeat \u9ed8\u8ba4\u751f\u6210filebeat-*\u7684\u7d22\u5f15\u4ee5\u53ca\u4f7f\u7528\u89e3\u538b\u76ee\u5f55\u4e0b\u7684fields.yml(\u4e8c\u8fdb\u5236\u538b\u7f29\u5305)",source:"@site/docs/bigdata/filebeat\u4f7f\u7528.md",sourceDirName:"bigdata",slug:"/bigdata/filebeat\u4f7f\u7528",permalink:"/docs/bigdata/filebeat\u4f7f\u7528",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/filebeat\u4f7f\u7528.md",tags:[],version:"current",lastUpdatedAt:1681551353,formattedLastUpdatedAt:"2023\u5e744\u670815\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"elasticsearch",permalink:"/docs/bigdata/elasticsearch"},next:{title:"hadoop\u4f7f\u7528",permalink:"/docs/bigdata/hadoop\u4f7f\u7528"}},s={},p=[{value:"\u81ea\u5b9a\u4e49\u6a21\u677f\u53ca\u7d22\u5f15",id:"\u81ea\u5b9a\u4e49\u6a21\u677f\u53ca\u7d22\u5f15",level:2},{value:"\u5b57\u6bb5\u5b9a\u4e49",id:"\u5b57\u6bb5\u5b9a\u4e49",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"Input Log",id:"input-log",level:2},{value:"filebeat \u65e5\u5fd7",id:"filebeat-\u65e5\u5fd7",level:2},{value:"\u8fde\u63a5 ES8.x",id:"\u8fde\u63a5-es8x",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u540c logstash\uff0cfilebeat \u9ed8\u8ba4\u751f\u6210",(0,i.kt)("inlineCode",{parentName:"p"},"filebeat-*"),"\u7684\u7d22\u5f15\u4ee5\u53ca\u4f7f\u7528\u89e3\u538b\u76ee\u5f55\u4e0b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"fields.yml"),"(\u4e8c\u8fdb\u5236\u538b\u7f29\u5305)"),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u6a21\u677f\u53ca\u7d22\u5f15"},"\u81ea\u5b9a\u4e49\u6a21\u677f\u53ca\u7d22\u5f15"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7684\u6587\u4ef6\u751f\u6210\u4e0d\u540c\u7684\u7d22\u5f15\uff1b"),(0,i.kt)("li",{parentName:"ul"},"json \u8bb0\u5f55\u5c55\u5f00\u5230\u6700\u5916\u5c42\uff0c\u5426\u5219 filbeat \u4f1a\u5c06\u65e5\u5fd7\u5185\u5bb9\u653e\u5728 msg \u91cc;")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'setup.template.name: custom_name\nsetup.template.pattern: custom_name_*\nsetup.template.enabled: true\nsetup.template.overwrite: true\nsetup.template.fields: customFields.yml\nsetup.ilm.enabled: false\nprocessors:\n  - drop_fields:\n      fields: [log, host, input, agent, ecs]\n      ignore_missing: false\nfilebeat.inputs:\n  - close_removed: true\n    close_inactive: 5m\n    type: log\n    tags: [t1]\n    clean_removed: true\n    enabled: true\n    json: { keys_under_root: true, overwrite_keys: true }\n    paths: [/data/t1_*]\n  - close_removed: true\n    close_inactive: 5m\n    type: log\n    tags: [t2]\n    clean_removed: true\n    enabled: true\n    json: { keys_under_root: true, overwrite_keys: true }\n    paths: [/data/t2_*]\noutput.elasticsearch:\n  indices:\n    - index: custom_name_t1\n      when.contains: { tags: t1 }\n    - when.contains: { tags: t2 }\n      index: custom_name_t2\n  hosts: ["127.0.0.1:9200"]\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"setup.template.name \u8bbe\u7f6e\u4e00\u4e2a\u65b0\u7684\u6a21\u677f\uff0c\u6a21\u677f\u7684\u540d\u79f0"),(0,i.kt)("li",{parentName:"ul"},"setup.template.pattern \u6a21\u677f\u5339\u914d\u90a3\u4e9b\u7d22\u5f15"),(0,i.kt)("li",{parentName:"ul"},"setup.template.enabled: false \u5173\u6389\u9ed8\u8ba4\u7684\u6a21\u677f\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"setup.template.overwrite: false \u662f\u5426\u8986\u76d6\u73b0\u6709\u6a21\u677f"),(0,i.kt)("li",{parentName:"ul"},"when.contains: \u5305\u542b"),(0,i.kt)("li",{parentName:"ul"},"json.keys_under_root: true \u5c06 field \u5c55\u5f00\u5230\u6700\u5916\u5c42(the custom fields are stored as top-level fields in the output document)"))),(0,i.kt)("p",null,"\u81ea\u5b9a\u4e49\u6a21\u677f\u8bf7\u67e5\u770b\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/beats/filebeat/current/configuration-template.html#configuration-template"},"Configuration-template")),(0,i.kt)("p",null,"\u6587\u4ef6\u8def\u5f84\u8bf7\u67e5\u770b\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/beats/filebeat/current/configuration-path.html#configuration-path"},"Configure project paths")),(0,i.kt)("h2",{id:"\u5b57\u6bb5\u5b9a\u4e49"},"\u5b57\u6bb5\u5b9a\u4e49"),(0,i.kt)("p",null,"\u7c7b\u578b\u81ea\u5b9a\u4e49(\u9ed8\u8ba4\u6a21\u677f\u4f7f\u7528\u7684\u662f\u5c0f\u4e8e 1024 \u662f keyword,\u53cd\u4e4b\u662f text\uff0c\u5982\u679c\u8981\u5f53\u4f5c",(0,i.kt)("inlineCode",{parentName:"p"},"keyword"),"\u4f7f\u7528\u5219\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"fieldName.keyword"),")"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"setup.template.fields: customFields.yml"),"(\u8def\u5f84\u8bf7\u67e5\u770b\u4e0a\u8ff0\u94fe\u63a5)\uff0c\u6587\u4ef6\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"- key: custom_name\n  title: custom_name\n  description: >\n    custom fields\n  fields:\n    # some desc\n    - name: t1\n      type: keyword\n    - name: t2\n      type: keyword\n    - name: t3\n      type: ip\n    - name: t4\n      type: integer\n    - name: t5\n      type: ip\n    - name: t6\n      type: integer\n    - name: t7\n      type: ip\n    - name: t8\n      type: text\n    - name: t9\n      type: date\n    - name: t10\n      type: long\n")),(0,i.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./filebeat -e -c config/customConf.yml\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"-e: Log to stderr and disable syslog/file output")),(0,i.kt)("h2",{id:"input-log"},"Input Log"),(0,i.kt)("p",null,"registry \u662f\u7528\u6765\u8bb0\u5f55\u65e5\u5fd7\u6587\u4ef6\u7684 state \u4fe1\u606f\uff0c\u5982\u8bb0\u5f55\u8bfb\u53d6\u5230\u6587\u4ef6\u4f4d\u7f6e\u7684\u7684 offset\uff0c\u6587\u4ef6\u7684 inode\u3001modify time \u7b49\uff0c\u5982\u679c\u914d\u7f6e\u4e0d\u597d\u4f1a\u5bfc\u81f4\u6b64\u6587\u4ef6\u8d8a\u6765\u8d8a\u5927\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"harvester_buffer_size"),(0,i.kt)("p",{parentName:"li"},"The size in bytes of the buffer that each harvester uses when fetching a file. The default is 16384.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"max_bytes"),(0,i.kt)("p",{parentName:"li"},"The maximum number of bytes that a single log message can have. All bytes after max_bytes are discarded and not sent. This setting is especially useful for multiline log messages, which can get large. ",(0,i.kt)("strong",{parentName:"p"},"The default is 10MB (10485760)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ignore_older"),(0,i.kt)("p",{parentName:"li"},"If this option is enabled, Filebeat ignores any files that were modified before the specified timespan."),(0,i.kt)("p",{parentName:"li"},"\u6bd4\u5982\u8bbe\u7f6e\u4e3a 1h\uff0c\u8868\u793a\u6587\u4ef6\u65f6\u95f4\u5728 1h \u4e4b\u524d\u7684\u65e5\u5fd7\u90fd\u4e0d\u4f1a\u88ab input \u6a21\u5757\u641c\u96c6\uff0c\u76f4\u5230\u6709\u65b0\u65e5\u5fd7\u4ea7\u751f\u3002"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You must set ignore_older to be greater than close_inactive.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"close_*")," configuration options are used to close the harvester after a certain criteria or time. Closing the harvester means closing the file handler."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"close_inactive"),(0,i.kt)("p",{parentName:"li"},"When this option is enabled, Filebeat closes the file handle if a file has not been harvested for the specified duration."),(0,i.kt)("p",{parentName:"li"},"\u6bd4\u5982\u4e00\u4e2a\u65e5\u5fd7\u6587\u4ef6\uff0c10 \u5206\u949f\u90fd\u6ca1\u6709\u8bfb\u5230\u65b0\u7684\u5185\u5bb9\u5c31\u628a\u6587\u4ef6\u53e5\u67c4\u5173\u95ed\u3002\u8fd9\u91cc\u7684\u65f6\u95f4\u4e0d\u662f\u53d6\u51b3\u4e8e\u6587\u4ef6\u7684\u6700\u540e\u66f4\u65b0\u65f6\u95f4\uff0c\u800c\u662f Filebeat \u5185\u90e8\u8bb0\u5f55\u7684\u65f6\u95f4\uff0c\u4e0a\u6b21\u8bfb\u5230\u6587\u4ef6\u548c\u8fd9\u6b21\u5c1d\u8bd5\u8bfb\u6587\u4ef6\u7684\u65f6\u95f4\u5dee\u3002\u5b98\u65b9\u5efa\u8bae\u8bbe\u7f6e\u7684\u65f6\u95f4\u662f\u6bd4\u6587\u4ef6\u4ea7\u751f\u6570\u636e\u9891\u7387\u9ad8\u4e00\u4e2a\u6570\u91cf\u7ea7\uff08\u9ed8\u8ba4 5m\uff09\uff0c\u6bd4\u5982\u6bcf\u79d2\u90fd\u6709\u65e5\u5fd7\u4ea7\u751f\uff0c\u8fd9\u4e2a\u503c\u5c31\u53ef\u4ee5\u8bbe\u7f6e\u4e3a 1m\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"close_renamed"),(0,i.kt)("p",{parentName:"li"},"\u662f\u5426\u5173\u95ed rename \u7684\u6587\u4ef6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"close_removed"),(0,i.kt)("p",{parentName:"li"},"When this option is enabled, Filebeat closes the harvester when a file is removed. Normally a file should only be removed after it\u2019s inactive for the duration specified by close_inactive."))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This option is enabled by default. If you disable this option, you must also disable clean_removed.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"close_timeout"),(0,i.kt)("p",{parentName:"li"},"When this option is enabled, Filebeat gives every harvester a predefined lifetime. Regardless of where the reader is in the file, reading will stop after the close_timeout period has elapsed."))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you set close_timeout to equal ignore_older, the file will not be picked up if it\u2019s modified while the harvester is closed. This\ncombination of settings normally leads to data loss, and the complete file is not sent.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This option is set to 0 by default which means it is disabled.")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"clean_*")," options are used to clean up the state entries in the registry file. These settings help to reduce the size of the registry file and can prevent a potential inode reuse issue."),(0,i.kt)("p",null,"Filebeat \u5185\u90e8\u8bb0\u5f55\u4e86\u5f88\u591a\u6587\u4ef6\u72b6\u6001\uff0c\u8bb0\u5f55\u6587\u4ef6",(0,i.kt)("inlineCode",{parentName:"p"},"data/registry/filebeat/log.json"),",\u5982\u679c\u4e0d\u6e05\u7406\u7684\u8bdd\u72b6\u6001\u4fe1\u606f\u4f1a\u8d8a\u6765\u8d8a\u5927\uff0c\u5f71\u54cd\u6548\u7387,\u6587\u4ef6\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},'{"k":"filebeat::logs::native::656718-64768","v":{"id":"native::656718-64768","offset":3,"timestamp":[2062239044447,1675392123],"identifier_name":"native","prev_id":"","source":"/home/zhds/data/sql_12345","ttl":180000000000,"type":"log","FileStateOS":{"inode":656718,"device":64768}}}\n{"op":"set","id":23}\n{"k":"filebeat::logs::native::656726-64768","v":{"source":"/home/zhds/data/login_12345","ttl":180000000000,"identifier_name":"native","id":"native::656726-64768","prev_id":"","offset":3,"timestamp":[2062238103653,1675392133],"type":"log","FileStateOS":{"inode":656726,"device":64768}}}\n{"op":"set","id":24}\n{"k":"filebeat::logs::native::656719-64768","v":{"offset":3,"type":"log","id":"native::656719-64768","source":"/home/zhds/data/sdk_12345","ttl":180000000000,"FileStateOS":{"inode":656719,"device":64768},"identifier_name":"native","prev_id":"","timestamp":[2062238416514,1675392133]}}\n{"op":"remove","id":25}\n{"k":"filebeat::logs::native::656718-64768"}\n{"op":"remove","id":26}\n{"k":"filebeat::logs::native::656726-64768"}\n{"op":"remove","id":27}\n{"k":"filebeat::logs::native::656719-64768"}\n{"op":"set","id":28}\n{"k":"filebeat::logs::native::656727-64768","v":{"id":"native::656727-64768","prev_id":"","offset":0,"type":"log","source":"/home/zhds/data/sql_12346","timestamp":[2062338936555,1675394343],"ttl":180000000000,"FileStateOS":{"inode":656727,"device":64768},"identifier_name":"native"}}\n{"op":"set","id":29}\n{"k":"filebeat::logs::native::656727-64768","v":{"offset":0,"ttl":180000000000,"type":"log","FileStateOS":{"inode":656727,"device":64768},"identifier_name":"native","id":"native::656727-64768","source":"/home/zhds/data/sql_12346","timestamp":[2062338936555,1675394343],"prev_id":""}}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u6587\u4ef6\u662f\u6bcf\u6b21\u64cd\u4f5c\u7684\u4fe1\u606f\u8bb0\u5f55\uff0c\u4e00\u76f4\u9012\u589e\uff0c\u4e0d\u662f\u7eaf\u7cb9\u7684\u4e00\u4e2a\u6587\u4ef6\u72b6\u6001\u4fe1\u606f\u4e00\u6761\u8bb0\u5f55")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"clean_inactive"),(0,i.kt)("p",{parentName:"li"},"\u591a\u4e45\u6e05\u7406\u4e00\u6b21\u6ce8\u518c\u4fe1\u606f,\u9ed8\u8ba4\u503c\u662f 0\uff08\u4e0d\u5f00\u542f\uff09"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u6e05\u7406\u7684\u6587\u4ef6\u4fe1\u606f\u9700\u8981\u4fdd\u8bc1\u8fd9\u4e2a\u6587\u4ef6\u5df2\u7ecf\u4e0d\u6d3b\u8dc3\u4e86\uff0c\u6240\u4ee5\u8fd9\u4e2a\u503c\u9700\u8981\u5927\u4e8e ignore_older + scan_frequency,\u4e0d\u7136\u7684\u8bdd\u6e05\u7406\u540e\u8fd9\u4e2a\u6587\u4ef6\u53c8\u88ab\u53d1\u73b0\uff0c\u5219\u4f1a\u91cd\u5934\u5f00\u59cb\u8bfb\u53d6\uff0c\u8fd9\u6837\u5c31\u91cd\u4e86."),(0,i.kt)("li",{parentName:"ul"},"ignore_older must be enabled when clean_inactive is used."),(0,i.kt)("li",{parentName:"ul"},"\u5728\u6d4b\u8bd5\u671f\u95f4\uff0c\u60a8\u53ef\u80fd\u4f1a\u6ce8\u610f\u5230\u6ce8\u518c\u8868\u5305\u542b\u672c\u5e94\u6839\u636e clean_inactive \u8bbe\u7f6e\u800c\u88ab\u5220\u9664\u7684\u72b6\u6001\u6761\u76ee\u3002\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u662f\u56e0\u4e3a",(0,i.kt)("strong",{parentName:"li"},"Filebeat \u76f4\u5230\u518d\u6b21\u6253\u5f00\u6ce8\u518c\u8868\u4ee5\u8bfb\u53d6\u5176\u4ed6\u6587\u4ef6\u65f6\u624d\u5220\u9664\u6761\u76ee"),"\u3002\u5982\u679c\u8981\u6d4b\u8bd5 clean_inactive \u8bbe\u7f6e\uff0c\u8bf7\u786e\u4fdd Filebeat \u914d\u7f6e\u4e3a\u4ece\u591a\u4e2a\u6587\u4ef6\u4e2d\u8bfb\u53d6\uff0c\u5426\u5219\u6587\u4ef6\u72b6\u6001\u6c38\u8fdc\u4e0d\u4f1a\u4ece\u6ce8\u518c\u8868\u4e2d\u5220\u9664\u3002"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"clean_removed"),(0,i.kt)("p",{parentName:"li"},"\u6587\u4ef6\u88ab\u5220\u9664\u540e\u662f\u5426\u6e05\u7406\u6ce8\u518c\u4fe1\u606f\uff0c\u9ed8\u8ba4\u5f00\u542f\u3002\u9700\u8981\u548c close_removed \u503c\u4fdd\u6301\u4e00\u81f4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"scan_frequency"),(0,i.kt)("p",{parentName:"li"},"How often Filebeat checks for new files in the paths that are specified for harvesting.\u6bd4\u5982\u8bbe\u7f6e 10s\uff08\u9ed8\u8ba4\uff09\uff0c\u4e00\u4e2a\u65b0\u6587\u4ef6\u4ea7\u751f 10s \u540e\u4f1a\u88ab\u53d1\u73b0\uff0c\u6216\u8005\u4e00\u4e2a\u65e7\u6587\u4ef6\uff08\u4e0a\u9762 ignore_older\uff09\u65b0\u4ea7\u751f\u4e86\u4e00\u884c\u65e5\u5fd7 10s \u624d\u53d1\u73b0\u8fd9\u4e2a\u6587\u4ef6\u3002"))),(0,i.kt)("p",null,"\u7b80\u5355\u603b\u7ed3\u51e0\u4e2a\u65f6\u95f4\u914d\u7f6e\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"clean_inactive > ignore_older + scan_frequency > close_inactive")),(0,i.kt)("p",null,"\u63a8\u8350\u914d\u7f6e(\u65f6\u95f4\u503c\u4ec5\u4f9b\u53c2\u8003)\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"scan_frequency: 10s\nignore_older: 60m\nclose_inactive: 10m\nclose_renamed: true\nclose_removed: true\nclean_inactive: 70m\nclean_removed: true\n")),(0,i.kt)("h2",{id:"filebeat-\u65e5\u5fd7"},"filebeat \u65e5\u5fd7"),(0,i.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6 filebeat.yml \u4e2d\u7684 logging \u90e8\u5206\u5305\u542b\u7528\u4e8e\u914d\u7f6e\u65e5\u5fd7\u8bb0\u5f55\u8f93\u51fa\u7684\u9009\u9879\u3002\u65e5\u5fd7\u8bb0\u5f55\u7cfb\u7edf\u53ef\u7528\u5c06\u65e5\u5fd7\u5199\u5165 syslog\uff0c\u5982\u679c\u672a\u660e\u786e\u914d\u7f6e\u65e5\u5fd7\u8bb0\u5f55\uff0c\u5219\u4f7f\u7528\u6587\u4ef6\u8f93\u51fa\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"logging.level: info\nlogging.to_files: true\nlogging.files:\n  path: /var/log/filebeat\n  name: filebeat\n  keepfiles: 7\n  permissions: 0644\nlogging.metrics.enabled: false\n")),(0,i.kt)("admonition",{title:"\u9009\u9879\uff1a",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"logging.to_stderredit"),(0,i.kt)("p",{parentName:"li"},"When true, writes all logging output to standard error output. This is equivalent to using the -e command line option.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"logging.to_syslog"))),(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e3a true\uff0c\u5219\u5c06\u6240\u6709\u65e5\u5fd7\u8bb0\u5f55\u8f93\u51fa\u5199\u5165 syslog"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"logging.to_eventlog")),(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e3a true\uff0c\u5219\u5c06\u6240\u6709\u65e5\u5fd7\u8bb0\u5f55\u8f93\u51fa\u5199\u5165 windows \u4e8b\u4ef6\u65e5\u5fd7\u3002"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"logging.to_files")),(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e3a true\uff0c\u5219\u5c06\u6240\u6709\u65e5\u5fd7\u8bb0\u5f55\u8f93\u51fa\u5199\u5165\u6587\u4ef6\uff0c\u8fbe\u5230\u65e5\u5fd7\u6587\u4ef6\u5927\u5c0f\u9650\u5236\u65f6\uff0c\u65e5\u5fd7\u6587\u4ef6\u4f1a\u81ea\u52a8\u9650\u5236\u66ff\u6362\uff08\u8f6e\u8f6c\uff09\u3002"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"logging.level")),(0,i.kt)("p",{parentName:"admonition"},"\u6700\u4f4e\u65e5\u5fd7\u7ea7\u522b\u3002debug\u3001info\u3001warning\u3001error\u3002\u9ed8\u8ba4\u65e5\u5fd7\u7ea7\u522b\u4e3a info\u3002"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"logging.metrics.enabled")),(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u542f\u52a8\uff0cfilebeat \u4f1a\u5b9a\u671f\u8bb0\u5f55\u4e0a\u4e00\u65f6\u671f\u5185\u5df2\u66f4\u6539\u7684\u5185\u90e8\u6307\u6807\uff0c\u5bf9\u4e8e\u66f4\u6539\u7684\u6bcf\u4e2a\u5ea6\u91cf\u6807\u51c6\uff0c\u5c06\u8bb0\u5f55\u8be5\u671f\u95f4\u5f00\u5934\u7684\u503c\u7684\u589e\u91cf\uff0c\u6b64\u5916\uff0c\u5173\u95ed\u65f6\u4f1a\u8bb0\u5f55\u6240\u6709\u975e\u96f6\u5185\u90e8\u6307\u6807\u7684\u603b\u503c\u3002\u9ed8\u8ba4\u503c\u4e3a true\u3002"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"logging.metrics.period")),(0,i.kt)("p",{parentName:"admonition"},"\u8bb0\u5f55\u5185\u90e8\u6307\u6807\u7684\u65f6\u95f4\u6bb5\u3002\u9ed8\u8ba4\u503c\u4e3a 30 \u79d2\u3002"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"logging.files.path")),(0,i.kt)("p",{parentName:"admonition"},"\u5199\u5165\u65e5\u5fd7\u6587\u4ef6\u7684\u76ee\u5f55\u3002\u9ed8\u8ba4\u4e3a\u65e5\u5fd7\u8def\u5f84\u3002"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"logging.files.name")),(0,i.kt)("p",{parentName:"admonition"},"\u5199\u5165\u65e5\u5fd7\u7684\u6587\u4ef6\u7684\u540d\u79f0\u3002"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"logging.files.rotateeverybytes")),(0,i.kt)("p",{parentName:"admonition"},"\u65e5\u5fd7\u6587\u4ef6\u7684\u6700\u5927\u5927\u5c0f\uff0c\u5982\u679c\u8fbe\u5230\u9650\u5236\uff0c\u5219\u4f1a\u751f\u6210\u65b0\u7684\u65e5\u5fd7\u6587\u4ef6\uff0c\u9ed8\u8ba4\u5927\u5c0f\u9650\u5236\u4e3a 10M\u3002"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"logging.files.permissions")),(0,i.kt)("p",{parentName:"admonition"},"\u65cb\u8f6c\u65e5\u5fd7\u6587\u4ef6\u65f6\u8981\u5e94\u7528\u7684\u6743\u9650\u63a9\u7801\u3002\u9ed8\u8ba4\u503c\u4e3a 0600\u3002"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"logging.files.keepfiles")),(0,i.kt)("p",{parentName:"admonition"},"\u8981\u4fdd\u7559\u5728\u78c1\u76d8\u4e0a\u7684\u6700\u65b0\u8f6e\u6362\u65e5\u5fd7\u6587\u4ef6\u6570\u3002\u5728\u65e5\u5fd7\u8f6e\u6362\u671f\u95f4\u5220\u9664\u65e7\u6587\u4ef6\u3002\u9ed8\u8ba4\u503c\u4e3a 7.keepfiles \u9009\u9879\u5fc5\u987b\u5728 2 \u5230 1024 \u4e2a\u6587\u4ef6\u7684\u8303\u56f4\u3002"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"logging.json")),(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e3a true\uff0c\u5219\u4ee5 json \u683c\u5f0f\u8bb0\u5f55\u6d88\u606f\u3002\u9ed8\u8ba4\u503c\u4e3a false\u3002")),(0,i.kt)("h2",{id:"\u8fde\u63a5-es8x"},"\u8fde\u63a5 ES8.x"),(0,i.kt)("p",null,"8.x \u9ed8\u8ba4\u542f\u7528\u5b89\u5168\u7b56\u7565\uff0c\u7528\u6237\u5bc6\u7801\u53ef\u5728\u5b89\u88c5\u65e5\u5fd7\u91cc\u67e5\u770b\uff0c\u4e5f\u53ef\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"bin/elasticsearch-reset-password"),"\u91cd\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'output.elasticsearch:\n  hosts: ["https://192.168.124.253:9200"]\n  username: "elastic"\n  password: "K+Zp-t0FiGFBh=9wCsPl"\n  # ${ES_HOME}/config/certs/http_ca.crt\n  ssl.certificate_authorities: "./http_ca.crt"\n')))}u.isMDXComponent=!0}}]);