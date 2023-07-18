"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7920],{88824:(e,t,a)=>{a.d(t,{c:()=>o});var r=a(67294),l=a(52263);const n=["zero","one","two","few","many","other"];function s(e){return n.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function o(){const e=u();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}},51473:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var r=a(67294),l=a(52263),n=a(70179),s=a(35742),c=a(39960),u=a(95999),o=a(88824),m=a(16550),h=a(10412);const i=function(){const e=(0,m.k6)(),t=(0,m.TH)(),{siteConfig:{baseUrl:a}}=(0,l.Z)();return{searchValue:h.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const r=new URLSearchParams(t.search);a?r.set("q",a):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}};var p=a(90022),d=a(98202),g=a(82539),f=a(10726),y=a(91073),E=a(80311);const I={searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};var S=a(73926);function R(e){let{searchResult:{document:t,type:a,page:l,tokens:n,metadata:s}}=e;const u=0===a,o=2===a,m=(u?t.b:l.b).slice(),h=o?t.s:t.t;return u||m.push(l.t),r.createElement("article",{className:I.searchResultItem},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,g.C)(h,n):(0,f.o)(h,(0,y.m)(s,"t"),n,100)}})),m.length>0&&r.createElement("p",{className:I.searchResultItemPath},(0,S.e)(m)),o&&r.createElement("p",{className:I.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,f.o)(t.t,(0,y.m)(s,"t"),n,100)}}))}const w=function(){const{siteConfig:{baseUrl:e}}=(0,l.Z)(),{selectMessage:t}=(0,o.c)(),{searchValue:a,updateSearchPath:c}=i(),[m,h]=(0,r.useState)(a),[g,f]=(0,r.useState)(),[y,S]=(0,r.useState)(),w=(0,r.useMemo)((()=>m?(0,u.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:m}):(0,u.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[m]);(0,r.useEffect)((()=>{c(m),g&&(m?g(m,(e=>{S(e)})):S(void 0))}),[m,g]);const P=(0,r.useCallback)((e=>{h(e.target.value)}),[]);return(0,r.useEffect)((()=>{a&&a!==m&&h(a)}),[a]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:t,zhDictionary:a}=await(0,p.w)(e);f((()=>(0,d.v)(t,a,100)))}()}),[e]),r.createElement(n.Z,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,w)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,w),r.createElement("input",{type:"search",name:"q",className:I.searchQueryInput,"aria-label":"Search",onChange:P,value:m,autoComplete:"off",autoFocus:!0}),!g&&m&&r.createElement("div",null,r.createElement(E.Z,null)),y&&(y.length>0?r.createElement("p",null,t(y.length,(0,u.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:y.length}))):r.createElement("p",null,(0,u.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,y&&y.map((e=>r.createElement(R,{key:e.document.i,searchResult:e}))))))}}}]);