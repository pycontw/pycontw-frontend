(window.webpackJsonp=window.webpackJsonp||[]).push([[58,9,20,33,34,35,36,37,38,39,40,41,42,43],{487:function(e,t,r){var content=r(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("43dbd13e",content,!0,{sourceMap:!1})},488:function(e,t,r){var content=r(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("1a106523",content,!0,{sourceMap:!1})},489:function(e,t,r){"use strict";r(487)},490:function(e,t,r){var o=r(16)((function(i){return i[1]}));o.push([e.i,"h1[data-v-2ff7513f]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;--tw-text-opacity:1;color:rgba(224, 153, 225, var(--tw-text-opacity));margin-bottom:0px}@media (min-width: 834px){h1[data-v-2ff7513f]{margin-bottom:2.25rem}h1[data-v-2ff7513f]{font-size:1.5rem;line-height:2rem}}h1[data-v-2ff7513f]{text-shadow:#3643b5 2px 1px 0}",""]),o.locals={},e.exports=o},491:function(e,t,r){"use strict";r.r(t);var o={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},n=(r(489),r(6)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex justify-center font-serif"},[r("h1",{class:e.classObject},[e._v(e._s(e.title))])])}),[],!1,null,"2ff7513f",null);t.default=component.exports},492:function(e,t,r){"use strict";r(488)},493:function(e,t,r){var o=r(16)((function(i){return i[1]}));o.push([e.i,"h1[data-v-007b1bc8]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-007b1bc8]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-007b1bc8]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-007b1bc8], p[data-v-007b1bc8]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-007b1bc8]{font-size:.625rem}ul[data-v-007b1bc8]{margin-bottom:1.5rem}ul.list-disc[data-v-007b1bc8]{padding-left:3rem}li[data-v-007b1bc8]{margin-top:0.25rem;margin-bottom:0.25rem}.page-wrapper[data-v-007b1bc8]{background-image:none;background-size:7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%;background-position:6% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px;background-repeat:no-repeat}",""]),o.locals={},e.exports=o},494:function(e,t,r){"use strict";r.r(t);var o={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1},useBgDecoration:{type:Boolean,default:!0}},computed:{classObject:function(){return{"py-8":!this.customY,"md:py-20":!this.customY,"min-w-[272px]":!0,"mx-[24px]":!0,"w-auto":!0,"sm:mx-[32px]":!this.customX,"sm:w-auto":!this.customX,"md:mx-auto":!this.customX,"md:w-[706px]":!this.customX,"lg:mx-[168px]":!this.customX,"lg:w-auto":!this.customX,"xl:mx-auto":!this.customX,"xl:w-[1040px]":!this.customX}},pageWrapperClass:function(){return this.useBgDecoration?"bg-none lg:bg-wrapper bg-no-repeat bg-wrapper-top-left bg-wrapper-size":"bg-none"}}},n=(r(492),r(6)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.pageWrapperClass},[r("div",{class:e.classObject},[e._t("default")],2)])}),[],!1,null,"007b1bc8",null);t.default=component.exports},503:function(e,t,r){"use strict";r.r(t);var o=r(18),n={name:"ScheduleBlock",components:{LocaleLink:r(109).default},props:{primary:{type:Boolean,default:!1},secondary:{type:Boolean,default:!1},tertiary:{type:Boolean,default:!1},tabHeader:{type:Boolean,default:!1},active:{type:Boolean,default:!1},mini:{type:Boolean,default:!1},textAlignCenter:{type:Boolean,default:!0},paddingX:{type:String,default:"px-2"},paddingY:{type:String,default:"py-3.5"},to:{type:String,default:""}},data:function(){return{isHovering:!1}},computed:{transparent:function(){return!this.primary&&!this.secondary&&!this.tertiary},classObject:function(){var e;return e={scheduleBlock:!0,"-primary":this.primary,"-secondary":this.secondary,"-tertiary":this.tertiary,"-tab-header":this.tabHeader,"-active":this.active,"-mini":this.mini,"-transparent":this.transparent,"text-center":this.textAlignCenter,"cursor-pointer":this.primary||this.tabHeader,hover:this.isHovering},Object(o.a)(e,this.paddingX,!0),Object(o.a)(e,this.paddingY,!0),e}},methods:{onClick:function(e){this.$emit("click",e)},setHoveringState:function(){this.isHovering=!0},removeHoveringState:function(){this.isHovering=!1}}},c=(r(517),r(6)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.classObject,on:{click:e.onClick}},[e.to?r("locale-link",{attrs:{to:e.to,customized:""},on:{mouseenter:e.setHoveringState,mouseleave:e.removeHoveringState}},[e._t("default")],2):e._t("default")],2)}),[],!1,null,"24b94cec",null);t.default=component.exports},512:function(e,t,r){var content=r(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("8e8af254",content,!0,{sourceMap:!1})},515:function(e,t,r){e.exports=r.p+"img/ENEN.5a408d1.svg"},516:function(e,t,r){e.exports=r.p+"img/ZHZH.38617ef.svg"},517:function(e,t,r){"use strict";r(512)},518:function(e,t,r){var o=r(16)((function(i){return i[1]}));o.push([e.i,".scheduleBlock[data-v-24b94cec]{position:relative;font-family:Noto Serif TC, -apple-system, serif;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;min-width:120px;border-radius:10px}.scheduleBlock.-mini[data-v-24b94cec],.scheduleBlock.-transparent[data-v-24b94cec]{min-width:unset}.scheduleBlock.-tab-header.-active[data-v-24b94cec]{--tw-bg-opacity:1;background-color:rgba(31, 28, 59, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(205, 210, 226, var(--tw-text-opacity))}.scheduleBlock.-tab-header[data-v-24b94cec]:not(.-active):hover{color:#7568f6}.scheduleBlock.-primary.-active[data-v-24b94cec]{--tw-bg-opacity:1;background-color:rgba(53, 45, 102, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(168, 180, 202, var(--tw-text-opacity))}.scheduleBlock.-primary.-active[data-v-24b94cec] .scheduleEvent__title{--tw-text-opacity:1;color:rgba(240, 235, 245, var(--tw-text-opacity))}.scheduleBlock.-primary.-active[data-v-24b94cec]:hover{--tw-bg-opacity:1;background-color:rgba(195, 134, 174, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(53, 45, 102, var(--tw-text-opacity))}.scheduleBlock.-primary.-active[data-v-24b94cec]:hover .scheduleEvent__title{--tw-text-opacity:1;color:rgba(31, 28, 59, var(--tw-text-opacity))}.scheduleBlock.-secondary[data-v-24b94cec]{--tw-bg-opacity:1;background-color:rgba(31, 28, 59, var(--tw-bg-opacity));color:#827bc1}.scheduleBlock.-tertiary[data-v-24b94cec]{color:#f8f9fb;background-color:#3c2d66}.scheduleBlock.-mini[data-v-24b94cec]{font-size:0.75rem;line-height:1rem}",""]),o.locals={},e.exports=o},526:function(e,t,r){e.exports=r.p+"img/ZHEN.371966e.svg"},527:function(e,t,r){e.exports=r.p+"img/JPEN.638520e.svg"},555:function(e,t,r){var content=r(595);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("27822325",content,!0,{sourceMap:!1})},556:function(e,t,r){var content=r(597);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("65281d55",content,!0,{sourceMap:!1})},557:function(e,t,r){var content=r(599);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("5fead489",content,!0,{sourceMap:!1})},558:function(e,t,r){var content=r(601);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("17b4b685",content,!0,{sourceMap:!1})},559:function(e,t,r){var content=r(603);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("7c66a90a",content,!0,{sourceMap:!1})},560:function(e,t,r){var content=r(605);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("032130ea",content,!0,{sourceMap:!1})},561:function(e,t,r){var content=r(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("25d22f33",content,!0,{sourceMap:!1})},591:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI0NERDJFMiIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bTEuMDg4IDMuNzNsLTEuNjUxLTIuNzNINy4zNDNMNS42OSAxNC4zMWgxMi41MTR6TTEwLjUwMyAzLjI2N2wuMDEzLS4wMmMuNjU5LS45OTcgMi4yMDUtLjk5NyAyLjg3Ny4wMmwzLjc3MyA2LjMzOEg2LjczbDMuNzczLTYuMzM4em0yLjA0My41MzFjLS4yNjItLjM5Ni0uOTIzLS4zOTktMS4xOS0uMDA4TDguNDg4IDguNjA2aDYuOTE4TDEyLjU0NyAzLjh6bTguMjY0IDEyLjkwNmwxLjc2NCAyLjM3YTEgMSAwIDAgMS0uODAyIDEuNTk3SDIuMThhMSAxIDAgMCAxLS44MS0xLjU4NWwxLjcxOC0yLjM4MkgyMC44MXoiIC8+Cjwvc3ZnPg=="},592:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI0NERDJFMiIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bS02LjE4NC03LjA1N2MuNDYxLS42OTcgMS41NjktLjY5NyAyLjAzIDBsMy4zMjQgNS41ODNINy42MWwzLjMyMy01LjU4M3ptMS4xOTYuNTUyYy0uMDY0LS4wOTctLjI4MS0uMS0uMzU1LS4wMUw5LjM2OSA4LjEwN2g1LjE1OWwtMi4zOTktNC4wMzF6bTguNjggMTIuNjNsMS43NjUgMi4zN2ExIDEgMCAwIDEtLjgwMiAxLjU5N0gyLjE4YTEgMSAwIDAgMS0uODEtMS41ODVsMS43MTgtMi4zODJIMjAuODF6IiAvPgo8L3N2Zz4="},593:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI0NERDJFMiIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bS02LjE4NC03LjA1N2MuNDYxLS42OTcgMS41NjktLjY5NyAyLjAzIDBsMy4zMjQgNS41ODNINy42MWwzLjMyMy01LjU4M3ptOS44NzcgMTMuMTgybDEuNzY0IDIuMzdhMSAxIDAgMCAxLS44MDIgMS41OTdIMi4xOGExIDEgMCAwIDEtLjgxLTEuNTg1bDEuNzE4LTIuMzgySDIwLjgxeiIgLz4KPC9zdmc+"},594:function(e,t,r){"use strict";r(555)},595:function(e,t,r){var o=r(16)((function(i){return i[1]}));o.push([e.i,".scheduleEvent__context[data-v-2b0660af]{top:75px}.scheduleEvent__title[data-v-2b0660af]{font-weight:700}.scheduleEvent__icon>img[data-v-2b0660af]{display:inline;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;filter:brightness(80%)}.scheduleEvent[data-v-2b0660af]:hover .scheduleEvent__icon>img{filter:brightness(0)}",""]),o.locals={},e.exports=o},596:function(e,t,r){"use strict";r(556)},597:function(e,t,r){var o=r(16)((function(i){return i[1]}));o.push([e.i,".scheduleList .scheduleTick{position:-webkit-sticky;position:sticky;top:48px;z-index:100;background-color:rgba(18,16,35,.8);padding:12px 0}",""]),o.locals={},e.exports=o},598:function(e,t,r){"use strict";r(557)},599:function(e,t,r){var o=r(16)((function(i){return i[1]}));o.push([e.i,".scheduleListGroup,.scheduleListGroup .scheduleEvent{margin-bottom:12px}.scheduleListGroup .scheduleEvent.room-2-all{order:1}.scheduleListGroup .scheduleEvent.room-3-r012{order:2}.scheduleListGroup .scheduleEvent.room-4-r0{order:3}.scheduleListGroup .scheduleEvent.room-5-r1{order:4}.scheduleListGroup .scheduleEvent.room-6-r2{order:5}.scheduleListGroup .scheduleEvent.room-1-r3{order:6}",""]),o.locals={},e.exports=o},600:function(e,t,r){"use strict";r(558)},601:function(e,t,r){var o=r(16)((function(i){return i[1]}));o.push([e.i,".scheduleRoom[data-v-0e7ef73b]{margin-bottom:12px}",""]),o.locals={},e.exports=o},602:function(e,t,r){"use strict";r(559)},603:function(e,t,r){var o=r(16)((function(i){return i[1]}));o.push([e.i,".scheduleRooms[data-v-4f8ec131]{z-index:900;grid-gap:12px;background-color:rgba(18,16,35,.6)}.scheduleRooms.day1[data-v-4f8ec131]{grid-template-columns:1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;width:140%}.scheduleRooms.day2[data-v-4f8ec131]{grid-template-columns:1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;width:110.5%}",""]),o.locals={},e.exports=o},604:function(e,t,r){"use strict";r(560)},605:function(e,t,r){var o=r(16)((function(i){return i[1]}));o.push([e.i,".scheduleTable[data-v-01811b2b]{grid-gap:12px}.scheduleTable.day1[data-v-01811b2b]{grid-template-columns:[timeline] 1fr [room-4-r0-start] 2fr [room-4-r0-end room-4-r0-1-start] 2fr [room-4-r0-1-end room-4-r0-2-start] 2fr [room-4-r0-2-end room-5-r1-start] 2fr [room-5-r1-end room-5-r1-1-start] 2fr [room-5-r1-1-end room-5-r1-2-start] 2fr [room-5-r1-2-end room-6-r2-start] 2fr [room-6-r2-end room-6-r2-1-start] 2fr [room-6-r2-1-end room-1-r3-start] 2fr [room-1-r3-end];width:140%}.scheduleTable.day2[data-v-01811b2b]{grid-template-columns:[timeline] 1fr [room-4-r0-start] 2fr [room-4-r0-end room-4-r0-1-start] 2fr [room-4-r0-1-end room-5-r1-start] 2fr [room-5-r1-end room-5-r1-1-start] 2fr [room-5-r1-1-end room-6-r2-start] 2fr [room-6-r2-end room-6-r2-1-start] 2fr [room-6-r2-1-end room-1-r3-start] 2fr [room-1-r3-end];width:110.5%}.scheduleTable .scheduleTick[data-v-01811b2b]{grid-column:timeline;justify-self:center}.scheduleTable .scheduleEvent.room-3-r012[data-v-01811b2b]{grid-column:room-4-r0-start/room-6-r2-1-end}.scheduleTable .scheduleEvent.room-4-r0[data-v-01811b2b]{grid-column:room-4-r0-start/room-4-r0-end}.scheduleTable .scheduleEvent.room-4-r0-1[data-v-01811b2b]{grid-column:room-4-r0-1-start/room-4-r0-1-end}.scheduleTable .scheduleEvent.room-4-r0-2[data-v-01811b2b]{grid-column:room-4-r0-2-start/room-4-r0-2-end}.scheduleTable .scheduleEvent.room-5-r1[data-v-01811b2b]{grid-column:room-5-r1-start/room-5-r1-end}.scheduleTable .scheduleEvent.room-5-r1-1[data-v-01811b2b]{grid-column:room-5-r1-1-start/room-5-r1-1-end}.scheduleTable .scheduleEvent.room-5-r1-2[data-v-01811b2b]{grid-column:room-5-r1-2-start/room-5-r1-2-end}.scheduleTable .scheduleEvent.room-6-r2[data-v-01811b2b]{grid-column:room-6-r2-start/room-6-r2-end}.scheduleTable .scheduleEvent.room-6-r2-1[data-v-01811b2b]{grid-column:room-6-r2-1-start/room-6-r2-1-end}.scheduleTable .scheduleEvent.room-6-r2-2[data-v-01811b2b]{grid-column:room-6-r2-2-start/room-6-r2-2-end}.scheduleTable .scheduleEvent.room-1-r3[data-v-01811b2b]{grid-column:room-1-r3-start/room-1-r3-end}.scheduleTable .scheduleEvent.room-2-all[data-v-01811b2b]{grid-column:room-4-r0-start/room-1-r3-end}",""]),o.locals={},e.exports=o},606:function(e,t,r){"use strict";r(561)},607:function(e,t,r){var o=r(16)((function(i){return i[1]}));o.push([e.i,".scheduleTick[data-v-135e4649]{--tw-text-opacity:1;color:rgba(224, 153, 225, var(--tw-text-opacity))}",""]),o.locals={},e.exports=o},635:function(e,t,r){"use strict";r.r(t);var o={name:"Schedule"},n=r(6),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"schedule font-serif"},[e._t("default")],2)}),[],!1,null,"37f917cf",null);t.default=component.exports},636:function(e,t,r){"use strict";r.r(t);r(172);var o={name:"ScheduleDayTab",components:{ScheduleBlock:r(503).default},props:{date:{type:String,default:""},index:{type:Number,default:-1}},data:function(){return{day:this.$parseDate(this.date,"YYYY-MM-DD").get("date"),active:!1}},methods:{onClick:function(){this.$parent.selectTab(this.index)}}},n=r(6),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("schedule-block",{staticClass:"m-0 font-bold whitespace-nowrap lg:m-2",attrs:{active:e.active,"padding-x":"px-4 sm:px-8","tab-header":""},on:{click:e.onClick}},[e._t("default")],2)}),[],!1,null,"d826f9fe",null);t.default=component.exports;installComponents(component,{ScheduleBlock:r(503).default})},637:function(e,t,r){"use strict";r.r(t);r(29);var o=r(75),n=r.n(o),c={name:"ScheduleDayTabs",mounted:function(){this.initTabs()},updated:function(){this.initialized||(this.initTabs(),this.initialized=!0)},methods:{initTabs:function(){var e=this;this.tabs=this.$children,this.tabs.forEach((function(t,i){var r=n()().isSame(t.day,"day")||0===i;t.active=r,r&&e.updateVModel(i)}))},selectTab:function(e){this.tabs.forEach((function(t,i){t.active=e===i})),this.updateVModel(e)},updateVModel:function(e){this.$emit("input",e)}}},l=r(6),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scheduleDayTabs flex w-full mb-8 justify-center"},[e._t("default")],2)}),[],!1,null,"c4372a3a",null);t.default=component.exports},638:function(e,t,r){"use strict";r.r(t);var o=r(35),n=(r(45),r(110),r(44),r(30),r(38),r(86),{name:"ScheduleEvent",components:{ScheduleBlock:r(503).default},props:{value:{type:void 0,default:function(){return{room:"",event_id:0,event_type:"Type",title:"Title",speakers:[],is_remote:!1,recording_policy:!1,break_event:!1,language:"",python_level:"",begin_time:"",end_time:""}}},timelineBegin:{type:String,default:"08:30"},inList:{type:Boolean,default:!1}},data:function(){var e="HH:mm";return{timeFormat:e,timezoneFormat:"z",timeOptions:{outputFormat:e},timezoneOptions:{outputFormat:"z"},startPoint:this.$parseDate(this.timelineBegin),icon:{lang:{ENEN:r(515),ZHEN:r(526),JPEN:r(527),ZHZH:r(516)},level:{NOVICE:r(591),INTERMEDIATE:r(592),EXPERIENCED:r(593)}}}},computed:{isCustomEvent:function(){return"custom"===this.value.event_type},textAlignCenter:function(){return["custom","keynote"].includes(this.value.event_type)},byLine:function(){var e=this;return this.value.speakers.map((function(t){return e.getValueByLocale(t)})).join(", ")},duration:function(){var e=this.$datetimeToString(this.value.begin_time,this.timeOptions),t=this.$datetimeToString(this.value.end_time,this.timeOptions),r=this.$datetimeToString(this.value.begin_time,this.timezoneOptions);return"".concat(e," ~ ").concat(t," (").concat(r,")")},roomClass:function(){return"room-".concat(this.value.room)},classes:function(){return["scheduleEvent","p-0",this.roomClass]},styles:function(){if(!this.inList)return{gridRowStart:this.getGridRow(this.value.begin_time),gridRowEnd:this.getGridRow(this.value.end_time)}},eventPagePath:function(){var e=this.value,t=e.event_type,r=e.event_id,o=e.speakers;if("keynote"===t){var n=o[0].en_us.split(" ").join("_");return"/conference/keynotes#".concat(n)}return["talk","tutorial","sponsored"].includes(t)?"/conference/".concat(t,"/").concat(r,"/"):""}},methods:{getGridRow:function(time){var e=this.$parseDate(time).diff(this.startPoint,"minute");return parseInt("".concat(e/5),10)+1},getValueByLocale:function(data){if("object"===Object(o.a)(data)){return data[{"en-us":"en_us","zh-hant":"zh_hant"}[this.$i18n.locale]]}return data}}}),c=(r(594),r(6)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("schedule-block",{class:e.classes,style:e.styles,attrs:{"text-align-center":e.textAlignCenter,primary:!e.isCustomEvent,secondary:e.isCustomEvent,to:e.eventPagePath,active:""}},[e.$slots.prepend?r("div",{staticClass:"scheduleEvent__prepend flex"},[e._t("prepend")],2):e._e(),e._v(" "),r("div",{staticClass:"scheduleEvent__context sticky"},[r("div",{staticClass:"scheduleEvent__title"},[e._v("\n            "+e._s(e.getValueByLocale(e.value.title))+"\n        ")]),e._v(" "),e.isCustomEvent?e._e():r("br"),e._v(" "),e.byLine?r("div",{staticClass:"font-medium text-sm"},[e._v("by "+e._s(e.byLine))]):e._e(),e._v(" "),r("div",{staticClass:"scheduleEvent__icon"},[r("img",{attrs:{src:e.icon.level[e.value.python_level]}}),e._v(" "),r("img",{attrs:{src:e.icon.lang[e.value.language]}})]),e._v(" "),e.duration?r("div",{staticClass:"font-medium text-sm"},[e._v("\n            "+e._s(e.duration)+"\n        ")]):e._e()])])}),[],!1,null,"2b0660af",null);t.default=component.exports;installComponents(component,{ScheduleBlock:r(503).default})},639:function(e,t,r){"use strict";r.r(t);var o={name:"ScheduleList"},n=(r(596),r(6)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scheduleList flex flex-col w-full"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},640:function(e,t,r){"use strict";r.r(t);var o={name:"ScheduleListGroup"},n=(r(598),r(6)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scheduleListGroup flex flex-col"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},641:function(e,t,r){"use strict";r.r(t);var o={name:"ScheduleRoom",components:{ScheduleBlock:r(503).default},props:{value:{type:String,default:"Room"},inline:{type:Boolean,default:!1}},computed:{name:function(){return{"4-r0":"R0-0","4-r0-1":"R0-1","4-r0-2":"R0-2","5-r1":"R1-0","5-r1-1":"R1-1","5-r1-2":"R1-2","6-r2":"R2-0","6-r2-1":"R2-1","1-r3":"R3","2-all":"All","3-r012":"R0, R1, R2"}[this.value]},paddingX:function(){return this.inline?"px-2":void 0},paddingY:function(){return this.inline?"py-2":void 0}}},n=(r(600),r(6)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("schedule-block",{staticClass:"scheduleRoom font-semibold whitespace-nowrap",attrs:{mini:e.inline,"padding-x":e.paddingX,"padding-y":e.paddingY,tertiary:""}},[e._v("\n    "+e._s(e.name)+"\n")])}),[],!1,null,"0e7ef73b",null);t.default=component.exports;installComponents(component,{ScheduleBlock:r(503).default})},642:function(e,t,r){"use strict";r.r(t);r(172);var o={name:"ScheduleRooms",props:{dateIndex:{type:Number,default:null}}},n=(r(602),r(6)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scheduleRooms hidden sticky top-0",class:{day1:0===e.dateIndex,day2:1===e.dateIndex}},[e._t("default")],2)}),[],!1,null,"4f8ec131",null);t.default=component.exports},643:function(e,t,r){"use strict";r.r(t);r(172);var o={name:"ScheduleTable",props:{dateIndex:{type:Number,default:null}}},n=(r(604),r(6)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scheduleTable hidden w-full",class:{day1:0===e.dateIndex,day2:1===e.dateIndex}},[e._t("default")],2)}),[],!1,null,"01811b2b",null);t.default=component.exports},644:function(e,t,r){"use strict";r.r(t);var o={name:"ScheduleTick"},n=(r(606),r(6)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scheduleTick font-semibold"},[e._t("default")],2)}),[],!1,null,"135e4649",null);t.default=component.exports},939:function(e,t,r){"use strict";r.r(t);r(31),r(52),r(61),r(62);var o=r(87),n=r(3),c=r(18),l=(r(66),r(44),r(26),r(30),r(54),r(39),r(29),r(173),r(32),r(43),r(103)),d=r(76),f=Object(d.a)({"en-us":{Schedule:"Schedule"},"zh-hant":{Schedule:"時間表"}}),m=r(494),h=r(491),v=r(635),y=r(503),x=r(636),_=r(637),M=r(638),k=r(639),w=r(640),I=r(641),S=r(642),D=r(643),E=r(644);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var N={i18n:f,name:"PageConferenceSchedule",components:{CoreH1:h.default,I18nPageWrapper:m.default,Schedule:v.default,ScheduleBlock:y.default,ScheduleDayTab:x.default,ScheduleDayTabs:_.default,ScheduleList:k.default,ScheduleListGroup:w.default,ScheduleRoom:I.default,ScheduleRooms:S.default,ScheduleTable:D.default,ScheduleEvent:M.default,ScheduleTick:E.default},data:function(){return{selectedDayIndex:0,rooms:[],days:[],tables:[],lists:[],defaultTable:{events:[],ticks:[],timeline:{}},defaultList:{groups:[]}}},computed:T(T({},Object(l.b)(["schedulesData"])),{},{table:function(){return this.tables[this.selectedDayIndex]||this.defaultTable},list:function(){return this.lists[this.selectedDayIndex]||this.defaultList}}),watch:{selectedDayIndex:function(){this.makeRooms()}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("$getSchedulesData");case 2:e.processData();case 3:case"end":return t.stop()}}),t)})))()},activated:function(){var e=this;setTimeout((function(){window.scrollTo(0,e.scrollPosition)}),0)},deactivated:function(){this.scrollPosition=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},methods:{processData:function(){this.makeDays(),this.makeRooms(),this.makeTables(),this.makeLists()},makeDays:function(){var e=this;this.days=this.schedulesData.map((function(t){var r=t.date,o=t.name,n=e.$datetimeToString(r,{inputFormat:"YYYY-MM-DD",outputFormat:"M/D"});return{label:"".concat(o," (").concat(n,")"),date:r}}))},makeRooms:function(){0===this.selectedDayIndex?this.rooms=["4-r0","4-r0-1","4-r0-2","5-r1","5-r1-1","5-r1-2","6-r2","6-r2-1","1-r3"]:this.rooms=["4-r0","4-r0-1","5-r1","5-r1-1","6-r2","6-r2-1","1-r3"]},makeTables:function(){var e=this;this.tables=this.schedulesData.map((function(t){return{events:e.getEvents(t),ticks:e.getTicks(t),timeline:t.timeline}}))},makeLists:function(){var e=this;this.lists=this.schedulesData.map((function(t){return{groups:e.getGroups(t)}}))},getEvents:function(e){return e.rooms.reduce((function(t,r){var n=e.slots[r].map((function(slot){return T(T({},slot),{},{room:r})}));return[].concat(Object(o.a)(t),Object(o.a)(n))}),[])},getTicks:function(e){var t=e.timeline,r=this.$parseDate(t.begin),o=this.$parseDate(t.end).diff(r,"minute"),n=parseInt("".concat(o/30),10)+1;return Array.from({length:n}).map((function(e,i){var t=6*i+1,o=6*i+6;return{label:r.add(30*i,"minute").format("HH:mm"),style:{gridRowStart:t,gridRowEnd:o}}}))},getGroups:function(e){var t=this,r=e.rooms.reduce((function(t,r){return e.slots[r].forEach((function(slot){var e=T(T({},slot),{},{room:r});t[slot.begin_time]?t[slot.begin_time].push(e):t[slot.begin_time]=[e]})),t}),{});return Object.keys(r).sort((function(e,t){return e>t?1:e<t?-1:0})).map((function(e){return{tick:t.$datetimeToString(e,{outputFormat:"HH:mm"}),events:r[e]}}))}},head:function(){return{title:this.$i18n.t("Schedule"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("Schedule")},{hid:"og:description",property:"og:description",content:this.$i18n.t("Schedule")},{hid:"description",name:"description",content:this.$i18n.t("Schedule")}]}}},L=r(6),component=Object(L.a)(N,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("i18n-page-wrapper",{staticClass:"pageWrapper",attrs:{"use-bg-decoration":!1,"custom-x":""}},[r("core-h1",{attrs:{title:e.$t("Schedule")}}),e._v(" "),r("schedule",[r("schedule-day-tabs",{model:{value:e.selectedDayIndex,callback:function(t){e.selectedDayIndex=t},expression:"selectedDayIndex"}},e._l(e.days,(function(t,i){return r("schedule-day-tab",{key:e.$makeKey(i,"schedule_day_tab"),attrs:{"date-index":t.date,index:i}},[e._v("\n                "+e._s(t.label)+"\n            ")])})),1),e._v(" "),r("div",{staticClass:"\n                px-10\n                relative\n                w-screen\n                h-screen\n                overflow-scroll\n                mb-24\n                hidden\n                lg:block\n            "},[r("schedule-rooms",{staticClass:"lg:grid",attrs:{"date-index":e.selectedDayIndex}},[r("schedule-block"),e._v(" "),e._l(e.rooms,(function(t,i){return r("schedule-room",{key:e.$makeKey(i,"schedule_room"),attrs:{value:t}})}))],2),e._v(" "),r("schedule-table",{staticClass:"lg:grid",attrs:{"date-index":e.selectedDayIndex}},[e._l(e.table.ticks,(function(t,i){return r("schedule-tick",{key:e.$makeKey(i,"schedule_tick"),style:t.style},[e._v("\n                    "+e._s(t.label)+"\n                ")])})),e._v(" "),e._l(e.table.events,(function(t){return r("schedule-event",{key:e.$makeKey(t.event_id,"schedule_table_event",t.event_type),attrs:{value:t,"timeline-begin":e.table.timeline.begin}})}))],2)],1),e._v(" "),r("schedule-list",{staticClass:"lg:hidden"},e._l(e.list.groups,(function(t,i){return r("schedule-list-group",{key:e.$makeKey(i,"schedule_list_group")},[r("schedule-tick",[e._v(e._s(t.tick))]),e._v(" "),e._l(t.events,(function(t){return r("schedule-event",{key:e.$makeKey(t.event_id,"schedule_list_event"),attrs:{value:t,"in-list":""},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("schedule-room",{attrs:{value:t.room,inline:""}})]},proxy:!0}],null,!0)})}))],2)})),1)],1)],1)}),[],!1,null,"843ee4aa",null);t.default=component.exports;installComponents(component,{ScheduleDayTab:r(636).default,ScheduleDayTabs:r(637).default,ScheduleBlock:r(503).default,ScheduleRoom:r(641).default,ScheduleRooms:r(642).default,ScheduleTick:r(644).default,ScheduleEvent:r(638).default,ScheduleTable:r(643).default,ScheduleListGroup:r(640).default,ScheduleList:r(639).default,Schedule:r(635).default})}}]);