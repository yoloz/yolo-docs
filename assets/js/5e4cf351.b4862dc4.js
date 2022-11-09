"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[2157],{3905:(e,a,r)=>{r.d(a,{Zo:()=>c,kt:()=>d});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),p=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},c=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||k[d]||o;return r?t.createElement(f,i(i({ref:a},c),{},{components:r})):t.createElement(f,i({ref:a},c))}));function d(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7118:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=r(7462),n=(r(7294),r(3905));const o={},i=void 0,l={unversionedId:"bigdata/kafka\u5b89\u5168\u914d\u7f6e",id:"bigdata/kafka\u5b89\u5168\u914d\u7f6e",title:"kafka\u5b89\u5168\u914d\u7f6e",description:"sasl-plaintext-acl",source:"@site/docs/bigdata/kafka\u5b89\u5168\u914d\u7f6e.md",sourceDirName:"bigdata",slug:"/bigdata/kafka\u5b89\u5168\u914d\u7f6e",permalink:"/docs/bigdata/kafka\u5b89\u5168\u914d\u7f6e",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/kafka\u5b89\u5168\u914d\u7f6e.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kafka\u4f18\u5316\u914d\u7f6e",permalink:"/docs/bigdata/kafka\u4f18\u5316\u914d\u7f6e"},next:{title:"kafka\u6d88\u8d39\u8005\u6e90\u7801",permalink:"/docs/bigdata/kafka\u6d88\u8d39\u8005\u6e90\u7801"}},s={},p=[{value:"sasl-plaintext-acl",id:"sasl-plaintext-acl",level:2},{value:"\u51c6\u5907\u914d\u7f6e\u6587\u4ef6",id:"\u51c6\u5907\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u4fee\u6539\u542f\u52a8\u811a\u672c kafka-server-start",id:"\u4fee\u6539\u542f\u52a8\u811a\u672c-kafka-server-start",level:3},{value:"\u4fee\u6539(\u6216\u6dfb\u52a0)\u914d\u7f6e\u6587\u4ef6 server.properties",id:"\u4fee\u6539\u6216\u6dfb\u52a0\u914d\u7f6e\u6587\u4ef6-serverproperties",level:3},{value:"\u91cd\u542f Kafka",id:"\u91cd\u542f-kafka",level:3},{value:"\u914d\u7f6e\u5ba2\u6237\u7aef",id:"\u914d\u7f6e\u5ba2\u6237\u7aef",level:3},{value:"ACL \u6388\u6743",id:"acl-\u6388\u6743",level:3}],c={toc:p};function k(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"sasl-plaintext-acl"},"sasl-plaintext-acl"),(0,n.kt)("h3",{id:"\u51c6\u5907\u914d\u7f6e\u6587\u4ef6"},"\u51c6\u5907\u914d\u7f6e\u6587\u4ef6"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"kafka_server_jaas.conf")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},'KafkaServer {\norg.apache.kafka.common.security.plain.PlainLoginModule required\nusername="admin"\npassword="admin"\nuser_admin="admin"\nuser_read="read"\nuser_write="write";\n};\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The properties username and password in the KafkaServer section are used by the broker to initiate connections to other brokers. In this example, admin is the user for inter-broker communication;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'user_username=pwd;The set of properties user_userName defines the passwords for all users that connect to the broker and the broker validates all client connections including those from other brokers using these properties(\u9700\u8981\u6dfb\u52a0 user_admin="admin", broker \u4e4b\u95f4\u4e92\u76f8\u8bbf\u95ee);')))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"kafka_client_jaas.conf")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},'KafkaClient{\norg.apache.kafka.common.security.plain.PlainLoginModule required\nusername="admin"\npassword="admin";\n};\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"super user\uff0c\u65e0\u9700 acl \u6388\u6743")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"kafka_read_jaas.conf")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},'KafkaClient{\norg.apache.kafka.common.security.plain.PlainLoginModule required\nusername="read"\npassword="read";\n};\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"normal user need acl")),(0,n.kt)("h3",{id:"\u4fee\u6539\u542f\u52a8\u811a\u672c-kafka-server-start"},"\u4fee\u6539\u542f\u52a8\u811a\u672c kafka-server-start"),(0,n.kt)("p",null,'exec $base_dir/kafka-run-class.sh $EXTRA_ARGS kafka.Kafka "$@"\n\u6dfb\u52a0-Djava.security.auth.login.config=\\$base_dir/../config/kafka_server_jaas.conf ,\u7136\u540e\u4fdd\u5b58\u9000\u51fa:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'exec $base_dir/kafka-run-class.sh $EXTRA_ARGS -Djava.security.auth.login.config=$base_dir/../config/kafka_server_jaas.conf kafka.Kafka "$@"\n')),(0,n.kt)("h3",{id:"\u4fee\u6539\u6216\u6dfb\u52a0\u914d\u7f6e\u6587\u4ef6-serverproperties"},"\u4fee\u6539(\u6216\u6dfb\u52a0)\u914d\u7f6e\u6587\u4ef6 server.properties"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"authorizer.class.name=kafka.security.auth.SimpleAclAuthorizer\nlisteners=SASL_PLAINTEXT://:9092\nsecurity.inter.broker.protocol=SASL_PLAINTEXT\nsasl.mechanism.inter.broker.protocol=PLAIN\nsasl.enabled.mechanisms=PLAIN\nsuper.users=User:admin\n")),(0,n.kt)("h3",{id:"\u91cd\u542f-kafka"},"\u91cd\u542f Kafka"),(0,n.kt)("p",null,"\u914d\u7f6e\u4fee\u6539\u540e kafka \u91cd\u542f\u5373\u53ef\uff0czookeeper \u672a\u505a\u914d\u7f6e(\u5373\u6240\u6709\u7528\u6237\u5747\u53ef\u8bbf\u95ee)"),(0,n.kt)("h3",{id:"\u914d\u7f6e\u5ba2\u6237\u7aef"},"\u914d\u7f6e\u5ba2\u6237\u7aef"),(0,n.kt)("p",null,"\u542f\u52a8\u811a\u672c\u6dfb\u52a0\n",(0,n.kt)("inlineCode",{parentName:"p"},"-Djava.security.auth.login.config=xxx/config/kafka_read_jaas.conf"),"\n\u6216\u8005\n",(0,n.kt)("inlineCode",{parentName:"p"},'System.setProperty(JaasUtils.JAVA_LOGIN_CONFIG_PARAM,"xxx/kafka_read_jaas.conf")')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e jar \u4f7f\u7528\uff0c\u5efa\u8bae\u811a\u672c\u91cc\u6dfb\u52a0")),(0,n.kt)("h3",{id:"acl-\u6388\u6743"},"ACL \u6388\u6743"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6388\u6743\u7528\u6237 read \u5bf9 x1, x2 \u7684\u8bfb\u53d6\uff1a\n",(0,n.kt)("inlineCode",{parentName:"li"},"kafka-acls.sh --authorizer-properties zookeeper.connect=localhost:2181/kafka --operation Read --allow-principal User:read --group=* --add --topic x1 --topic x2")),(0,n.kt)("li",{parentName:"ul"},"\u5220\u9664\u6388\u6743: \u5c06\u4e0a\u8ff0\u547d\u4ee4\u7684--add \u6362\u6210--remove \u5373\u53ef"),(0,n.kt)("li",{parentName:"ul"},"\u67e5\u770b\u6388\u6743\u8be6\u60c5\n",(0,n.kt)("inlineCode",{parentName:"li"},"kafka-acls.sh --authorizer-properties zookeeper.connect=localhost:2181/kafka --list"))))}k.isMDXComponent=!0}}]);