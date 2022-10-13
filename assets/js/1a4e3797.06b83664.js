"use strict";(self.webpackChunkjp_prototyping_blog=self.webpackChunkjp_prototyping_blog||[]).push([[7920],{8824:(e,t,n)=>{n.d(t,{c:()=>u});var a=n(7294),r=n(2263);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}},1473:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var a=n(7294),r=n(2263),l=n(8762),s=n(5742),c=n(9960),o=n(5999),u=n(373),m=n(902),i=n(8824),h=n(143),p=n(6550),g=n(412);const d=function(){const e=(0,p.k6)(),t=(0,p.TH)(),{siteConfig:{baseUrl:n}}=(0,r.Z)();return{searchValue:g.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}};var f=n(22),y=n(8202),E=n(2539),S=n(726),w=n(1073),b=n(311),I=n(3926),_=n(1029);const F="searchQueryInput_CFBF",P="searchResultItem_U687",R="searchResultItemPath_uIbk",v="searchResultItemSummary_oZHr";function k(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),t=(0,h.gA)();let n=e;try{const{preferredVersion:e}=(0,u.J)((null==t?void 0:t.pluginId)??_.gQ);e&&!e.isLast&&(n=e.path+"/")}catch(k){if(_.l9&&!(k instanceof m.i6))throw k}const{selectMessage:l}=(0,i.c)(),{searchValue:c,updateSearchPath:p}=d(),[g,E]=(0,a.useState)(c),[S,w]=(0,a.useState)(),[I,P]=(0,a.useState)(),R=(0,a.useMemo)((()=>g?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:g}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[g]);(0,a.useEffect)((()=>{p(g),S&&(g?S(g,(e=>{P(e)})):P(void 0))}),[g,S]);const v=(0,a.useCallback)((e=>{E(e.target.value)}),[]);return(0,a.useEffect)((()=>{c&&c!==g&&E(c)}),[c]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,f.w)(n);w((()=>(0,y.v)(e,t,100)))}()}),[n]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,R)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,R),a.createElement("input",{type:"search",name:"q",className:F,"aria-label":"Search",onChange:v,value:g,autoComplete:"off",autoFocus:!0}),!S&&g&&a.createElement("div",null,a.createElement(b.Z,null)),I&&(I.length>0?a.createElement("p",null,l(I.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:I.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,I&&I.map((e=>a.createElement(C,{key:e.document.i,searchResult:e}))))))}function C(e){let{searchResult:{document:t,type:n,page:r,tokens:l,metadata:s}}=e;const o=0===n,u=2===n,m=(o?t.b:r.b).slice(),i=u?t.s:t.t;return o||m.push(r.t),a.createElement("article",{className:P},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,E.C)(i,l):(0,S.o)(i,(0,w.m)(s,"t"),l,100)}})),m.length>0&&a.createElement("p",{className:R},(0,I.e)(m)),u&&a.createElement("p",{className:v,dangerouslySetInnerHTML:{__html:(0,S.o)(t.t,(0,w.m)(s,"t"),l,100)}}))}const q=function(){return a.createElement(l.Z,null,a.createElement(k,null))}}}]);