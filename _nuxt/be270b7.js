(window.webpackJsonp=window.webpackJsonp||[]).push([[87,6,10,23,32],{515:function(t,e,o){var content=o(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("3cda5dc8",content,!0,{sourceMap:!1})},516:function(t,e,o){var content=o(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("042ecdbe",content,!0,{sourceMap:!1})},517:function(t,e,o){"use strict";o(515)},518:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,"h1[data-v-feb57f82]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity));margin-bottom:0px}@media (min-width: 768px){h1[data-v-feb57f82]{margin-bottom:2.25rem}h1[data-v-feb57f82]{font-size:1.5rem;line-height:2rem}}h1[data-v-feb57f82]{text-shadow:#3643b5 2px 1px 0}",""]),n.locals={},t.exports=n},519:function(t,e,o){"use strict";o.r(e);var n={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},r=(o(517),o(8)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex justify-center font-serif"},[o("h1",{class:t.classObject},[t._v(t._s(t.title))])])}),[],!1,null,"feb57f82",null);e.default=component.exports},520:function(t,e,o){"use strict";o(516)},521:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,"h1[data-v-9ddb4acc]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-9ddb4acc]{margin-bottom:1.5rem;margin-top:5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:2.5rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-9ddb4acc], p[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:0.25rem;width:100%;text-align:justify}span.text-2s[data-v-9ddb4acc]{font-size:.625rem}ul[data-v-9ddb4acc]{margin-bottom:1.5rem}ul.list-disc[data-v-9ddb4acc]{padding-left:3rem}li[data-v-9ddb4acc]{margin-top:0.25rem;margin-bottom:0.25rem}.page-wrapper[data-v-9ddb4acc]{background-image:none;background-size:7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%;background-position:6% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px;background-repeat:no-repeat}",""]),n.locals={},t.exports=n},522:function(t,e,o){"use strict";o.r(e);var n={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1},useBgDecoration:{type:Boolean,default:!0}},computed:{classObject:function(){return{"py-8":!this.customY,"md:py-20":!this.customY,"min-w-[272px]":!0,"mx-[24px]":!0,"w-auto":!0,"sm:mx-[32px]":!this.customX,"sm:w-auto":!this.customX,"md:mx-auto":!this.customX,"md:w-[706px]":!this.customX,"lg:mx-[168px]":!this.customX,"lg:w-auto":!this.customX,"xl:mx-auto":!this.customX,"xl:w-[1040px]":!this.customX}},pageWrapperClass:function(){return this.useBgDecoration?"bg-none lg:bg-wrapper bg-no-repeat bg-wrapper-top-left bg-wrapper-size":"bg-none"}}},r=(o(520),o(8)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.pageWrapperClass},[o("div",{class:t.classObject},[t._t("default")],2)])}),[],!1,null,"9ddb4acc",null);e.default=component.exports},523:function(t,e,o){var content=o(532);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("7b369a60",content,!0,{sourceMap:!1})},526:function(t,e,o){var n=o(51),r=o(26),d=/"/g;t.exports=function(t,e,o,c){var l=r(n(t)),m="<"+e;return""!==o&&(m+=" "+o+'="'+r(c).replace(d,"&quot;")+'"'),m+">"+l+"</"+e+">"}},527:function(t,e,o){var n=o(9);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},528:function(t,e,o){"use strict";var n=o(7),r=o(526);n({target:"String",proto:!0,forced:o(527)("small")},{small:function(){return r(this,"small","","")}})},529:function(t,e,o){"use strict";var n=o(81);e.a=Object(n.a)({"en-us":{pyconWelcome:"Welcome to PyCon TW 2024",pyconIntro:"PyCon Taiwan",achieveFirstStatLine:"Hold",achieveFirstEndLine:"years",achieveSecondStatLine:"Every Year",achieveSecondEndLine:"Speeches",achieveThirdStatLine:"Audience",achieveThirdEndLine:"People",sponsor:"Sponsor Us",sponsorList:"Sponsors",sponsorUs:"Be a Sponsor",bulletinList:"Latest Announcement",joinUs:"Join Us",callForProposals:"Call for Proposals",checkEvents:"Event Schedule",buyTickets:"Buy Tickets Now",typhoonInfoTitle:"Typhoon Preparedness Measures",typhoonInfo:"The event on September 2nd-3rd, 2023, depends on Taipei City Government's Closure Announcement. Stay updated via PyCon Taiwan official website and social media.{br}The organizer reserves the right to make final revisions, changes, interpretations of the event, and cancellations of “PyCon TW 2023”.{br}Let's say it:\"PyCon TW 2023 will definitely be held successfully!\""},"zh-hant":{pyconWelcome:"歡迎來到 PyCon TW 2024",pyconIntro:"PyCon Taiwan",achieveFirstStatLine:"持續舉辦",achieveFirstEndLine:"年",achieveSecondStatLine:"每年議程",achieveSecondEndLine:"場以上",achieveThirdStatLine:"參與會眾",achieveThirdEndLine:"人以上",sponsor:"贊助我們",sponsorList:"贊助夥伴",sponsorUs:"成為贊助夥伴",bulletinList:"最新公告",joinUs:"成為志工",callForProposals:"投稿募集",checkEvents:"查看議程",buyTickets:"立即購票",typhoonInfoTitle:"颱風因應措施",typhoonInfo:"本次活動期間 (2023 年 09 月 02 日至 03 日) 將依照「臺北市政府之停班公告」決定是否舉行，最新消息請關注「PyCon Taiwan 官網與社群媒體」之公告。{br}主辦單位保有對「PyCon TW 2023」的最終修改、變更、活動解釋及取消本活動之權利。{br}請跟我一起唸：PyCon TW 2023 一定可以順利舉行！"}})},530:function(t,e,o){"use strict";o.r(e);o(528);var n=o(529),r=o(45),d={i18n:n.a,name:"CoreTextButton",components:{ExtLink:r.a,LocaleLink:r.b},props:{primary:{type:Boolean,default:!0},secondary:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},large:{type:Boolean,default:!1},small:{type:Boolean,default:!1},block:{type:Boolean,default:!1},href:{type:String,default:void 0},to:{type:String,default:void 0},uppercase:{type:Boolean,default:!1},bulletin:{type:Boolean,default:!1}},computed:{getLocale:function(){return this.$i18n.locale},coreButtonClasses:function(){return{"core-button":!0,"--primary":this.primary,"--secondary":this.secondary,"--bordered":this.bordered,"--large":this.large,"--medium":this.medium,"--small":this.small,"--block":this.block,"--is-link":this.isLink,"--uppercase":this.uppercase,"--bulletin":this.bulletin,"--largeEn":"en-us"===this.getLocale}},medium:function(){return!this.large&&!this.small},isLink:function(){return this.href||this.to}}},c=(o(531),o(8)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{class:t.coreButtonClasses},[t.href?o("ext-link",{attrs:{href:t.href}},[o("span",[t._t("default")],2)]):t.to?o("locale-link",{attrs:{to:t.to,customized:""}},[o("span",[t._t("default")],2)]):t._t("default")],2)}),[],!1,null,"7bd0f299",null);e.default=component.exports},531:function(t,e,o){"use strict";o(523)},532:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,'.core-button[data-v-7bd0f299]{position:relative}.core-button>a[data-v-7bd0f299]{font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;outline:2px solid transparent;outline-offset:2px}.core-button.--is-link>a[data-v-7bd0f299], .core-button[data-v-7bd0f299]:not(.--is-link){display:inline-flex;align-items:center;justify-content:center;outline:2px solid transparent;outline-offset:2px}.core-button.--is-link>a[data-v-7bd0f299],.core-button[data-v-7bd0f299]:not(.--is-link){line-height:1.25rem;border-radius:40px}.core-button[data-v-7bd0f299]:not(.--is-link){cursor:default;--tw-border-opacity:1;border-color:rgba(168, 180, 202, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(168, 180, 202, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(205, 210, 226, var(--tw-text-opacity))}.core-button.--uppercase>a[data-v-7bd0f299]{text-transform:uppercase}.core-button.--primary>a[data-v-7bd0f299]{z-index:10;border-width:0;--tw-text-opacity:1;color:rgba(240, 235, 245, var(--tw-text-opacity));background-image:linear-gradient(276.15deg,#61c8a4 .74%,#548fcb 32.18%,#3849de 53.25%,#be3692 93.14%)}.core-button.--primary>a span[data-v-7bd0f299]{position:relative;z-index:30}.core-button.--primary>a[data-v-7bd0f299]:hover:after{opacity:1}.core-button.--primary.--large[data-v-7bd0f299]:not(.--is-link), .core-button.--primary.--large>a[data-v-7bd0f299]{font-weight:700}.core-button.--primary.--large[data-v-7bd0f299]:not(.--is-link),.core-button.--primary.--large>a[data-v-7bd0f299]{height:86px;font-size:28px;padding:24px 48px;min-width:128px}.core-button.--primary.--largeEn>a[data-v-7bd0f299]{min-width:323px}.core-button.--primary.--medium[data-v-7bd0f299]:not(.--is-link), .core-button.--primary.--medium>a[data-v-7bd0f299]{font-weight:600}.core-button.--primary.--medium[data-v-7bd0f299]:not(.--is-link),.core-button.--primary.--medium>a[data-v-7bd0f299]{height:68px;font-size:24px;padding:16px 48px;min-width:108px}.core-button.--primary.--small[data-v-7bd0f299]:not(.--is-link), .core-button.--primary.--small>a[data-v-7bd0f299]{height:3rem;font-size:1rem;line-height:1.5rem;font-weight:600}.core-button.--primary.--small[data-v-7bd0f299]:not(.--is-link),.core-button.--primary.--small>a[data-v-7bd0f299]{padding:10px 22px;min-width:80px;height:60px;font-size:20px}.core-button.--primary>a[data-v-7bd0f299]:after{position:absolute;left:0px;top:0px;height:100%;width:100%;z-index:20;opacity:0;border-radius:inherit;content:"";background-image:linear-gradient(96.26deg,#5fbeab 5.5%,#66b4e2 31.92%,#4454df 53.53%,#be3692 82.35%);transition:opacity .5s ease-out}.core-button.--bordered>a[data-v-7bd0f299]{z-index:10;--tw-text-opacity:1;color:rgba(240, 235, 245, var(--tw-text-opacity));background:linear-gradient(#121023,#121023) padding-box,linear-gradient(276.15deg,#61c8a4 .74%,#548fcb 32.18%,#3849de 53.25%,#be3692 93.14%) border-box;border:5px solid transparent;border-radius:40px}.core-button.--bordered>a span[data-v-7bd0f299]{position:relative;z-index:30}.core-button.--bordered>a[data-v-7bd0f299]:hover:after{opacity:1}.core-button.--bordered.--large[data-v-7bd0f299]:not(.--is-link), .core-button.--bordered.--large>a[data-v-7bd0f299]{font-weight:700}.core-button.--bordered.--large[data-v-7bd0f299]:not(.--is-link),.core-button.--bordered.--large>a[data-v-7bd0f299]{height:86px;font-size:28px;padding:24px 48px;min-width:128px}.core-button.--bordered.--largeEn>a[data-v-7bd0f299]{min-width:323px}.core-button.--bordered.--medium[data-v-7bd0f299]:not(.--is-link), .core-button.--bordered.--medium>a[data-v-7bd0f299]{font-weight:600}.core-button.--bordered.--medium[data-v-7bd0f299]:not(.--is-link),.core-button.--bordered.--medium>a[data-v-7bd0f299]{height:68px;font-size:24px;padding:16px 48px;min-width:108px}.core-button.--bordered.--small[data-v-7bd0f299]:not(.--is-link), .core-button.--bordered.--small>a[data-v-7bd0f299]{height:3rem;font-size:1rem;line-height:1.5rem;font-weight:600}.core-button.--bordered.--small[data-v-7bd0f299]:not(.--is-link),.core-button.--bordered.--small>a[data-v-7bd0f299]{padding:10px 22px;min-width:80px;height:60px;font-size:20px}.core-button.--bordered>a[data-v-7bd0f299]:after{position:absolute;left:0px;top:0px;height:100%;width:100%;z-index:20;opacity:0;border-radius:inherit;content:"";background:linear-gradient(#121023,#121023) padding-box,linear-gradient(96.26deg,#5fbeab 5.5%,#66b4e2 31.92%,#4454df 53.53%,#be3692 82.35%) border-box;border:5px solid transparent;transition:opacity .5s ease-out}.core-button.--secondary>a[data-v-7bd0f299]{z-index:10;--tw-bg-opacity:1;background-color:rgba(218, 139, 220, var(--tw-bg-opacity));background-image:none}.core-button.--secondary>a span[data-v-7bd0f299]{position:relative;z-index:30;--tw-text-opacity:1;color:rgba(26, 26, 48, var(--tw-text-opacity))}.core-button.--secondary>a:hover span[data-v-7bd0f299]{--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity))}.core-button.--secondary>a[data-v-7bd0f299]:hover:after{opacity:1}.core-button.--secondary.--large[data-v-7bd0f299]:not(.--is-link), .core-button.--secondary.--large>a[data-v-7bd0f299]{font-weight:700}.core-button.--secondary.--large[data-v-7bd0f299]:not(.--is-link),.core-button.--secondary.--large>a[data-v-7bd0f299]{height:57px;font-size:18px;padding:16px 36px}.core-button.--secondary.--medium[data-v-7bd0f299]:not(.--is-link), .core-button.--secondary.--medium>a[data-v-7bd0f299], .core-button.--secondary.--small[data-v-7bd0f299]:not(.--is-link), .core-button.--secondary.--small>a[data-v-7bd0f299]{font-weight:700}.core-button.--secondary.--medium[data-v-7bd0f299]:not(.--is-link),.core-button.--secondary.--medium>a[data-v-7bd0f299],.core-button.--secondary.--small[data-v-7bd0f299]:not(.--is-link),.core-button.--secondary.--small>a[data-v-7bd0f299]{height:42px;font-size:20px;padding:10px 22px}.core-button.--secondary>a[data-v-7bd0f299]:after{position:absolute;left:0px;top:0px;height:100%;width:100%;--tw-border-opacity:1;border-color:rgba(218, 139, 220, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(26, 26, 48, var(--tw-bg-opacity));z-index:20;opacity:0;content:"";background-image:none;border-radius:inherit;transition:opacity .5s ease-out}.core-button.--secondary.--medium>a[data-v-7bd0f299]:after,.core-button.--secondary.--small>a[data-v-7bd0f299]:after{border-width:3px}.core-button.--secondary.--large>a[data-v-7bd0f299]:after{border-width:2px}.core-button.--medium.--bulletin.--is-link>a[data-v-7bd0f299],.core-button.--medium.--bulletin[data-v-7bd0f299]:not(.--is-link){border-width:3px}',""]),n.locals={},t.exports=n},550:function(t,e,o){var content=o(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("599ee5e8",content,!0,{sourceMap:!1})},559:function(t,e,o){"use strict";o.r(e);var n={name:"IntroMilestone",props:{achievement:{type:String,default:""},achievementNumber:{type:String,default:""},achievementUnit:{type:String,default:""}}},r=(o(576),o(8)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-center font-serif font-bold"},[o("p",{staticClass:"text-2xl md:text-[1.2rem]"},[t._v("\n        "+t._s(t.achievement)+"\n    ")]),t._v(" "),o("p",{staticClass:"milestone__number"},[t._v("\n        "+t._s(t.achievementNumber)+"\n    ")]),t._v(" "),o("p",{staticClass:"mb-2 text-2xl md:mb-12 md:text-[1.2rem]"},[t._v("\n        "+t._s(t.achievementUnit)+"\n    ")])])}),[],!1,null,"dd90d086",null);e.default=component.exports},576:function(t,e,o){"use strict";o(550)},577:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,".milestone__number[data-v-dd90d086]{background:linear-gradient(302.44deg,#8be1c2 .18%,#5b69e2 43.9%,#a764c9 53.21%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:5.4rem;filter:drop-shadow(4px 6px 0 #4f4f4f)}@media (max-width:833px){.milestone__number[data-v-dd90d086]{font-size:4.8rem}}",""]),n.locals={},t.exports=n},715:function(t,e,o){var content=o(780);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("711c6f3a",content,!0,{sourceMap:!1})},775:function(t,e,o){t.exports=o.p+"img/CommunityVisibility.e05a1ba.svg"},776:function(t,e,o){t.exports=o.p+"img/Recruitment.e8091f3.svg"},777:function(t,e,o){t.exports=o.p+"img/BrandPromote.7c24900.svg"},778:function(t,e,o){t.exports=o.p+"img/TalentConnection.9fa39c5.svg"},779:function(t,e,o){"use strict";o(715)},780:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,"p[data-v-44663c94]{font-size:16px;line-height:176%}@media (min-width: 768px){p[data-v-44663c94]{font-size:20px}}",""]),n.locals={},t.exports=n},988:function(t,e,o){"use strict";o.r(e);var n=o(522),r=o(519),d=o(530),c=o(559),l=o(45),m=o(81),f=Object(m.a)({"en-us":{title:"Why Sponsorship",intro:["PyCon Taiwan has held over 12 annual conferences to date. Last year, we invited 2 keynote speakers, 27 general talks, 3 tutorials and 1 panel totaling over 36 hours of technical presentations.","At the same time, our community's social media activity has also increased, with a growth of 11,162 followers.","In addition, the podcast has been downloaded 12,000 times. These statistics demonstrate the success of PyCon Taiwan.With over 150 volunteers, ","we have brought countless technical skills and inspiration to the Python community."],milestone:[{achievement:"Technical Presentations",achievementNumber:"36",achievementUnit:"hours"},{achievement:"Participants",achievementNumber:"550",achievementUnit:"People"},{achievement:"Social Media",achievementNumber:"11K",achievementUnit:"Followers"}],serviceIntro:["PyCon Taiwan is driven by our members and you, our awesome sponsor partners!{br}Your generous support is the motivation to help us move forward.{br}PyConTW 2024 calls for your sponsorship to enlarge our community.","Meanwhile, we also provide the benefit for our sponsors below:"],services:["Increase Visibility","Recruitment","Promote your Brand","Connections with Talent"],summary:"If you are interested in the event, please leave contact information below, and we will provide the sponsorship packages detail to you. Or contact us directly via {contact} to get any further information.",terms:{contact:"sponsorship@python.tw"},cta:{text:"Application Form"},og:{title:"Sponsorship",description:"Your generous support is the motivation to help us move forward. PyConTW 2024 calls for your sponsorship to enlarge our community."}},"zh-hant":{title:"贊助召集令",intro:["PyCon Taiwan 迄今已舉辦超過 12 場年度會議。去年我們邀請 2 場主題演講、27 場一般演講、1 場專業課程以及 1 場專業論壇總計超過 36 小時的技術演講。","同時，我們的社群媒體活躍度也隨之提高，追蹤人數增加到了 11162 位。","此外，Podcast 下載量高達 12000次。這些數據充分展現了 PyCon Taiwan 的成功。","我們擁有超過 150 位志工，為 Python 社群帶來了無數的技術與靈感。"],milestone:[{achievement:"技術演講",achievementNumber:"36",achievementUnit:"小時"},{achievement:"參與會眾",achievementNumber:"550",achievementUnit:"人以上"},{achievement:"社群媒體",achievementNumber:"11K",achievementUnit:"追蹤人數"}],serviceIntro:["您的支持是推進 PyCon Taiwan 的強大動力。{br}PyCon Taiwan 在此召集您的加入，透過贊助以具體行動支持 Python 社群的成長！{br}透過參與 PyConTW 2024，我們也提供贊助廠商以下的服務："],services:["接觸專業人士","明確徵才場合","提升品牌曝光","建立人才網絡"],summary:"若想了解 PyConTW 2024 完整的贊助方案，歡迎點擊下方按鈕填寫表單留下您的聯絡資料索取贊助書或是直接透過贊助組信箱 {contact} 聯絡我們，讓我們了解貴單位的需求！",terms:{contact:"sponsorship@python.tw"},cta:{text:"索取贊助書"},og:{title:"贊助召集令",description:"您的支持是推進 PyConTW 的強大動力。PyConTW 在此召集您的加入，透過贊助以具體行動支持 Python 社群的成長！"}}}),h=o(775),v=o.n(h),y=o(776),x=o.n(y),w=o(777),k=o.n(w),_=o(778),C=o.n(_),P={i18n:f,name:"PageSponsor",components:{I18nPageWrapper:n.default,CoreH1:r.default,ExtLink:l.a,TextButton:d.default,IntroMilestone:c.default},data:function(){return{sponsorFormLink:"https://docs.google.com/forms/d/e/1FAIpQLSfUJJlrdauqiAw9kteSGkCmfIMZqFPy5w8yMU60YilevWA56g/viewform",sponsorServices:[v.a,x.a,k.a,C.a]}},methods:{getImgStyle:function(img){return{"background-image":"url(".concat(img,")")}}},head:function(){return{title:this.$i18n.t("title"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("og.title")},{hid:"og:description",property:"og:description",content:this.$i18n.t("og.description")},{hid:"description",name:"description",content:this.$i18n.t("og.description")}]}}},T=(o(779),o(8)),component=Object(T.a)(P,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("i18n-page-wrapper",[o("core-h1",{attrs:{title:t.$t("title")}}),t._v(" "),o("div",t._l(t.$t("intro"),(function(e,i){return o("i18n",{key:"sponsor_intro_"+i,attrs:{path:"intro."+i,tag:"p"},scopedSlots:t._u([{key:"br",fn:function(){return[o("br")]},proxy:!0}],null,!0)})})),1),t._v(" "),o("div",{staticClass:"flex flex-col md:grid md:grid-cols-3"},t._l(t.$t("milestone"),(function(t,e){return o("intro-milestone",{key:"sponsor_milestone_"+e,attrs:{achievement:t.achievement,"achievement-number":t.achievementNumber,"achievement-unit":t.achievementUnit}})})),1),t._v(" "),o("div",t._l(t.$t("serviceIntro"),(function(e,i){return o("i18n",{key:"sponsor_service_intro_"+i,attrs:{path:"serviceIntro."+i,tag:"p"},scopedSlots:t._u([{key:"br",fn:function(){return[o("br")]},proxy:!0}],null,!0)})})),1),t._v(" "),o("div",{staticClass:"mb-10 mt-3 grid grid-cols-2 sm:mt-0 lg:grid-cols-4"},t._l(t.$t("services"),(function(e,i){return o("div",{key:"sponsor_services_"+i,staticClass:"mt-5 flex flex-col items-center sm:mt-12"},[o("div",{staticClass:"h-[112px] w-[112px] bg-contain bg-no-repeat md:h-[138px] md:w-[138px]",style:t.getImgStyle(t.sponsorServices[i])}),t._v(" "),o("div",{staticClass:"mb-0 mt-3 text-center text-xs sm:mt-8 md:text-base"},[t._v("\n                "+t._s(e)+"\n            ")])])})),0),t._v(" "),o("i18n",{attrs:{path:"summary",tag:"p"},scopedSlots:t._u([{key:"contact",fn:function(){return[o("ext-link",{attrs:{href:"mailto:sponsorship@python.tw",highlight:"",underline:""}},[t._v(t._s(t.$t("terms.contact")))])]},proxy:!0}])}),t._v(" "),o("div",{staticClass:"mt-10 text-center"},[o("text-button",{attrs:{href:t.sponsorFormLink}},[t._v("\n            "+t._s(t.$t("cta.text"))+"\n        ")])],1)],1)}),[],!1,null,"44663c94",null);e.default=component.exports;installComponents(component,{IntroMilestone:o(559).default})}}]);