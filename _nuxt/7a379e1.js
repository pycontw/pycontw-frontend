(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{372:function(t,r,e){var content=e(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(20).default)("32d51914",content,!0,{sourceMap:!1})},374:function(t,r,e){"use strict";e.r(r);e(387);var o={name:"SponsorCard",props:{logoUrl:{type:String,default:""},tag:{type:String,default:""},small:{type:Boolean,default:!1}},computed:{classObject:function(){return{sponsorCard:!0,"-small":this.small}}}},n=(e(390),e(5)),component=Object(n.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{directives:[{name:"show",rawName:"v-show",value:!!t.logoUrl,expression:"!!logoUrl"}],class:t.classObject},[e("div",{staticClass:"dummy"}),t._v(" "),e("img",{attrs:{src:t.logoUrl,alt:""}}),t._v(" "),t.tag?e("div",{staticClass:"sponsorCard__tag"},[t._v("\n        "+t._s(t.tag)+"\n    ")]):t._e()])}),[],!1,null,"32e1d59a",null);r.default=component.exports},387:function(t,r,e){"use strict";var o=e(3),n=e(388);o({target:"String",proto:!0,forced:e(389)("small")},{small:function(){return n(this,"small","","")}})},388:function(t,r,e){var o=e(37),n=/"/g;t.exports=function(t,r,e,l){var c=String(o(t)),d="<"+r;return""!==e&&(d+=" "+e+'="'+String(l).replace(n,"&quot;")+'"'),d+">"+c+"</"+r+">"}},389:function(t,r,e){var o=e(6);t.exports=function(t){return o((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},390:function(t,r,e){"use strict";e(372)},391:function(t,r,e){var o=e(19)((function(i){return i[1]}));o.push([t.i,".sponsorCard[data-v-32e1d59a]{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:1rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));width:40%}@media (min-width:767px){.sponsorCard[data-v-32e1d59a]{width:10rem}}.sponsorCard>.dummy[data-v-32e1d59a]{margin-top:100%}.sponsorCard>img[data-v-32e1d59a]{position:absolute;-o-object-fit:contain;object-fit:contain;width:calc(100% - 10px);border-radius:inherit}.sponsorCard.-small[data-v-32e1d59a]{height:5rem;width:5rem;min-width:100px}.sponsorCard__tag[data-v-32e1d59a]{position:absolute;display:flex;height:1.5rem;width:100%;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(67, 56, 202, var(--tw-bg-opacity));font-size:0.75rem;line-height:1rem;bottom:20px}",""]),o.locals={},t.exports=o}}]);