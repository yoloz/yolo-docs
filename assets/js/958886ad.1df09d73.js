"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[5398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},25590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const a={},r=void 0,s={unversionedId:"java/jgss\u5e38\u89c1\u95ee\u9898",id:"java/jgss\u5e38\u89c1\u95ee\u9898",title:"jgss\u5e38\u89c1\u95ee\u9898",description:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/Troubleshooting.html",source:"@site/docs/java/jgss\u5e38\u89c1\u95ee\u9898.md",sourceDirName:"java",slug:"/java/jgss\u5e38\u89c1\u95ee\u9898",permalink:"/docs/java/jgss\u5e38\u89c1\u95ee\u9898",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/java/jgss\u5e38\u89c1\u95ee\u9898.md",tags:[],version:"current",lastUpdatedAt:1689650905,formattedLastUpdatedAt:"2023\u5e747\u670818\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"java\u5b89\u5168\u7b97\u6cd5\u7ba1\u5236\u89e3\u9664",permalink:"/docs/java/java\u5b89\u5168\u7b97\u6cd5\u7ba1\u5236\u89e3\u9664"},next:{title:"jvm\u542f\u52a8\u53c2\u6570",permalink:"/docs/java/jvm\u542f\u52a8\u53c2\u6570"}},l={},c=[{value:"Configurable Kerberos Settings:",id:"configurable-kerberos-settings",level:2},{value:"java.lang.SecurityException at javax.security.auth.login.Configuration.getConfiguration",id:"javalangsecurityexception-at-javaxsecurityauthloginconfigurationgetconfiguration",level:2},{value:"javax.security.auth.login.LoginException: KrbException: Pre-authentication information was invalid (24) - Preauthentication failed",id:"javaxsecurityauthloginloginexception-krbexception-pre-authentication-information-was-invalid-24---preauthentication-failed",level:2},{value:"GSSException: No valid credentials provided (Mechanism level: Attempt to obtain new INITIATE credentials failed! (null)) . . . Caused by: javax.security.auth.login.LoginException: Clock skew too great",id:"gssexception-no-valid-credentials-provided-mechanism-level-attempt-to-obtain-new-initiate-credentials-failed-null----caused-by-javaxsecurityauthloginloginexception-clock-skew-too-great",level:2},{value:"javax.security.auth.login.LoginException: KrbException: Null realm name (601) - default realm not specified",id:"javaxsecurityauthloginloginexception-krbexception-null-realm-name-601---default-realm-not-specified",level:2},{value:"javax.security.auth.login.LoginException: java.net.SocketTimeoutException: Receive timed out",id:"javaxsecurityauthloginloginexception-javanetsockettimeoutexception-receive-timed-out",level:2},{value:"GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos Ticket)",id:"gssexception-no-valid-credentials-provided-mechanism-level-failed-to-find-any-kerberos-ticket",level:2},{value:"javax.security.auth.login.LoginException: Could not load configuration file <code>&lt;krb5.conf&gt;</code> (No such file or directory)",id:"javaxsecurityauthloginloginexception-could-not-load-configuration-file-krb5conf-no-such-file-or-directory",level:2},{value:"javax.security.auth.login.LoginException: KrbException: KDC has no support for encryption type (14) - KDC has no support for encryption type",id:"javaxsecurityauthloginloginexception-krbexception-kdc-has-no-support-for-encryption-type-14---kdc-has-no-support-for-encryption-type",level:2},{value:"KDC reply did not match expectations",id:"kdc-reply-did-not-match-expectations",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/Troubleshooting.html"},"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/Troubleshooting.html")),(0,i.kt)("p",null,"A debugging mode can be enabled by setting the system property ",(0,i.kt)("inlineCode",{parentName:"p"},"sun.security.krb5.debug"),' to "true". This setting allows you to follow the program\'s execution of the Kerberos V5 protocol.'),(0,i.kt)("h2",{id:"configurable-kerberos-settings"},"Configurable Kerberos Settings:"),(0,i.kt)("p",null,"The Kerberos Key Distribution Center (KDC) name and realm settings are provided in the Kerberos configuration file or via the system properties ",(0,i.kt)("inlineCode",{parentName:"p"},"java.security.krb5.kdx")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"java.security.krb5.realm"),". In previous releases, changes to the Kerberos configuration values would only take effect when an application was restarted."),(0,i.kt)("p",null,"Starting from the JDK 1.4.2 release, a new boolean option ",(0,i.kt)("inlineCode",{parentName:"p"},"refreshKrb5Config")," can be specified in the entry for ",(0,i.kt)("inlineCode",{parentName:"p"},"Krb5LoginModule")," in the JAAS configuration file. If this option is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the configuration values will be refreshed before the login method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Krb5LoginModule")," is called."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When switching Kerberos configurations, it is REQUIRED that refreshKrb5Config should be set to true. Failure to set this value can lead to unexpected results.")),(0,i.kt)("h2",{id:"javalangsecurityexception-at-javaxsecurityauthloginconfigurationgetconfiguration"},"java.lang.SecurityException at javax.security.auth.login.Configuration.getConfiguration"),(0,i.kt)("p",null,"Cause: There was a problem processing the JAAS login configuration file, possibly due to a syntax error in the file."),(0,i.kt)("p",null,"Solution: Check the configuration file carefully for errors. See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/LoginConfigFile.html"},"JAAS Login Configuration File")," for information about the syntax required in the login configuration file."),(0,i.kt)("h2",{id:"javaxsecurityauthloginloginexception-krbexception-pre-authentication-information-was-invalid-24---preauthentication-failed"},"javax.security.auth.login.LoginException: KrbException: Pre-authentication information was invalid (24) - Preauthentication failed"),(0,i.kt)("p",null,"Cause 1: The password entered is incorrect."),(0,i.kt)("p",null,"Solution 1: Verify the password."),(0,i.kt)("p",null,"Cause 2: If you are using the keytab to get the key (e.g., by setting the useKeyTab option to true in the Krb5LoginModule entry in the JAAS login configuration file), then the key might have changed since you updated the keytab."),(0,i.kt)("p",null,"Solution 2: Consult your Kerberos documentation to generate a new keytab and use that keytab."),(0,i.kt)("p",null,"Cause 3: Clock skew - If the time on the KDC and on the client differ significanlty (typically 5 minutes), this error can be returned."),(0,i.kt)("p",null,"Solution 3: Synchronize the clocks (or have a system administrator do so)."),(0,i.kt)("p",null,"Cause 4: The Kerberos realm name is not all uppercase."),(0,i.kt)("p",null,"Solution 4: Make the Kerberos realm name all uppercase. Note: It is recommended to have all uppercase realm names. For details, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/KerberosReq.html#realmnamereqs"},"Naming Conventions for the Realm Names and Hostnames")," section of this tutorial."),(0,i.kt)("h2",{id:"gssexception-no-valid-credentials-provided-mechanism-level-attempt-to-obtain-new-initiate-credentials-failed-null----caused-by-javaxsecurityauthloginloginexception-clock-skew-too-great"},"GSSException: No valid credentials provided (Mechanism level: Attempt to obtain new INITIATE credentials failed! (null)) . . . Caused by: javax.security.auth.login.LoginException: Clock skew too great"),(0,i.kt)("p",null,"Cause: Kerberos requires the time on the KDC and on the client to be loosely synchronized. (The default is within 5 minutes.) If that's not the case, you will get this error."),(0,i.kt)("p",null,"Solution: Synchronize the clocks (or have a system administrator do so)."),(0,i.kt)("h2",{id:"javaxsecurityauthloginloginexception-krbexception-null-realm-name-601---default-realm-not-specified"},"javax.security.auth.login.LoginException: KrbException: Null realm name (601) - default realm not specified"),(0,i.kt)("p",null,"Cause: The default realm is not specified in the Kerberos configuration file krb5.conf (if used), provided as a part of the user name, or specified via the java.security.krb5.realm system property."),(0,i.kt)("p",null,"Solution: Verify that your Kerberos configuration file (if used) contains an entry specifying the default realm, or directly specify it by setting the value of the java.security.krb5.realm system property and/or including it in your user name when authenticating using Kerberos."),(0,i.kt)("h2",{id:"javaxsecurityauthloginloginexception-javanetsockettimeoutexception-receive-timed-out"},"javax.security.auth.login.LoginException: java.net.SocketTimeoutException: Receive timed out"),(0,i.kt)("p",null,"Solution: Verify that the Kerberos KDC is up and running."),(0,i.kt)("h2",{id:"gssexception-no-valid-credentials-provided-mechanism-level-failed-to-find-any-kerberos-ticket"},"GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos Ticket)"),(0,i.kt)("p",null,"Cause: This may occur if no valid Kerberos credentials are obtained. In particular, this occurs if you want the underlying mechanism to obtain credentials but you forgot to indicate this by setting the javax.security.auth.useSubjectCredsOnly system property value to false (for example via ",(0,i.kt)("inlineCode",{parentName:"p"},"-Djavax.security.auth.useSubjectCredsOnly=false")," in your execution command)."),(0,i.kt)("p",null,"Solution: Be sure to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"javax.security.auth.useSubjectCredsOnly")," system property value to false if you want the underlying mechanism to obtain credentials, rather than your application or a wrapper program (such as the Login utility used by some of the tutorials) performing authentication using JAAS."),(0,i.kt)("h2",{id:"javaxsecurityauthloginloginexception-could-not-load-configuration-file-krb5conf-no-such-file-or-directory"},"javax.security.auth.login.LoginException: Could not load configuration file ",(0,i.kt)("inlineCode",{parentName:"h2"},"<krb5.conf>")," (No such file or directory)"),(0,i.kt)("p",null,"Cause: The tutorials' sample execution commands specify the default Kerberos realm and KDC by setting values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"java.security.krb5.realm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"java.security.krb5.kdc")," system properties. If you like, you can instead have a ",(0,i.kt)("inlineCode",{parentName:"p"},"krb5.conf")," Kerberos configuration file used. Such a file includes information about what the default realm and KDC are. To use a ",(0,i.kt)("inlineCode",{parentName:"p"},"krb5.conf")," file, you either set the system property ",(0,i.kt)("inlineCode",{parentName:"p"},"java.security.krb5.conf")," (instead of the realm and kdc properties) to specify the location of the file or you don't set any of these properties and therefore an attempt is made to locate the krb5.conf file in a default location. You will get the error \"",(0,i.kt)("inlineCode",{parentName:"p"},"Could not load configuration file <krb5.conf>(No such file or directory)"),'" if the file could not be found.'),(0,i.kt)("p",null,"Solution: Verify that the Kerberos configuration file krb5.conf is available and readable. Check ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/KerberosReq.html"},"Kerberos Requirements")," for information about how to specify the location of the krb5.conf file and where such a file is searched for by default if you don't explicitly indicate the location."),(0,i.kt)("h2",{id:"javaxsecurityauthloginloginexception-krbexception-kdc-has-no-support-for-encryption-type-14---kdc-has-no-support-for-encryption-type"},"javax.security.auth.login.LoginException: KrbException: KDC has no support for encryption type (14) - KDC has no support for encryption type"),(0,i.kt)("p",null,"Cause 1: Your KDC does not support the encryption type requested."),(0,i.kt)("p",null,"Solution 1: Sun's implementation of Kerberos supports the following encryption types: des-cbc-md5, des-cbc-crc and des3-cbc-sha1."),(0,i.kt)("p",null,"Applications can select the desired encryption type by specifying following tags in the Kerberos Configuration file krb5.conf:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"[libdefaults]\ndefault_tkt_enctypes = des-cbc-md5 des-cbc-crc des3-cbc-sha1\ndefault_tgs_enctypes = des-cbc-md5 des-cbc-crc des3-cbc-sha1\npermitted_enctypes = des-cbc-md5 des-cbc-crc des3-cbc-sha1\n")),(0,i.kt)("p",null,"If not specified, the default value is:",(0,i.kt)("inlineCode",{parentName:"p"},"des-cbc-md5 des-cbc-crc des3-cbc-sha1")),(0,i.kt)("p",null,'Cause 2: This exception is thrown when using native ticket cache on some Windows platforms. Microsoft has added a new feature in which they no longer export the session keys for Ticket-Granting Tickets (TGTs). As a result, the native TGT obtained on Windows has an "empty" session key and null EType. The effected platforms include: Windows Server 2003, Windows 2000 Server Service Pack 4 (SP4) and Windows XP SP2.'),(0,i.kt)("p",null,"Solution 2: You need to update the Windows registry to disable this new feature. The registry key allowtgtsessionkey should be added--and set correctly--to allow session keys to be sent in the Kerberos Ticket-Granting Ticket."),(0,i.kt)("p",null,"On the Windows Server 2003 and Windows 2000 SP4, here is the required registry setting:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-long"},"HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Control\\Lsa\\Kerberos\\Parameters\nValue Name: allowtgtsessionkey\nValue Type: REG_DWORD\nValue: 0x01 ( default is 0 )\n")),(0,i.kt)("p",null,'By default, the value is 0; setting it to "0x01" allows a session key to be included in the TGT.\nHere is the location of the registry setting on Windows XP SP2:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Control\\Lsa\\Kerberos\\\nValue Name: allowtgtsessionkey\nValue Type: REG_DWORD\nValue: 0x01\n")),(0,i.kt)("h2",{id:"kdc-reply-did-not-match-expectations"},"KDC reply did not match expectations"),(0,i.kt)("p",null,"Cause: The KDC sent a response that cannot be understood by the client."),(0,i.kt)("p",null,"Solution: Verify that you have set correctly all the krb5.conf file configuration parameters and consult your KDC vendor's guide."))}p.isMDXComponent=!0}}]);