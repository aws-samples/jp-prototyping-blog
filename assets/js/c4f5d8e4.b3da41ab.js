"use strict";(self.webpackChunkjp_prototyping_blog=self.webpackChunkjp_prototyping_blog||[]).push([[4195],{9131:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(7294),l=a(6010),c=a(9960),r=a(2263),s=a(179),m=a(7462);const i={recommends:"recommends__0E1",title:"title_Uzz7",articles:"articles_T1lI",link:"link_kBKQ",card:"card_Pyd_"};var o=a(8084);function E(e){let{title:t,link:a}=e;return n.createElement("div",{className:(0,l.Z)("col col--4")},n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement(c.Z,{className:i.link,to:a},n.createElement("div",{className:i.card},n.createElement("h3",null,t)))))}function d(){const e=(0,o.eZ)("get-recent-posts").sort((()=>.5-Math.random())).slice(0,3);return n.createElement("div",{className:i.recommends},n.createElement("h1",{className:i.title},"\u30aa\u30b9\u30b9\u30e1\u306e\u8a18\u4e8b"),n.createElement("section",{className:i.articles},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},e.map(((e,t)=>n.createElement(E,(0,m.Z)({key:t},e))))))))}const u={search:"search_rOLS",title:"title_sXY8",links:"links_yE8_",tag:"tag_Saum"};function N(){return n.createElement("div",{className:u.search},n.createElement("h1",{className:u.title},"\u8a18\u4e8b\u3092\u63a2\u3059"),n.createElement("div",{className:"container"},n.createElement("div",{className:u.links},n.createElement(c.Z,{className:u.tag,to:"/search/"},"\u6587\u5b57\u3067\u691c\u7d22"),n.createElement(c.Z,{className:u.tag,to:"/blog/tags"},"\u30bf\u30b0\u4e00\u89a7\u3092\u898b\u308b"))))}const _={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};function h(){const{siteConfig:e}=(0,r.Z)();return n.createElement("header",{className:(0,l.Z)("hero hero--primary",_.heroBanner)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},e.title),n.createElement("p",{className:"hero__subtitle"},e.tagline),n.createElement("div",{className:_.buttons},n.createElement(c.Z,{className:"button button--secondary button--lg",to:"/blog"},"\u30d6\u30ed\u30b0\u3092\u958b\u304f"))))}function g(){const{siteConfig:e}=(0,r.Z)();return n.createElement(s.Z,{title:e.title,description:"AWS JP Prototyping Team Blog"},n.createElement(h,null),n.createElement("main",null,n.createElement(d,null),n.createElement(N,null)))}}}]);