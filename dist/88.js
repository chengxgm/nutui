/*! NutUI v1.2.6 Mon May 21 2018 14:26:35 GMT+0800 (中国标准时间) */
webpackJsonpnutui([88],{1052:function(t,o,n){var i=n(1147);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(3)("f523229c",i,!0,{})},1147:function(t,o,n){(t.exports=n(2)()).push([t.i,"",""])},1243:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("nut-demoheader",{attrs:{name:t.$route.name}}),t._v(" "),n("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:t.showDialog1}},[t._v("自定义标题和内容")]),t._v(" "),n("div",{staticStyle:{display:"none"}},[n("pre",[n("code",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v('@click="showDialog1"')])]),t._v(" "),n("pre",[n("code",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("export default {\n    methods:{\n      'showDialog1'(){\n            const options = {\n                    'title':'自定义Dialog标题',\n                    'content':'小屏或移动端浏览效果最佳'\n                  };\n\n            this.$dialog(options);\n      }\n    }\n}")])])]),t._v(" "),n("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:t.showDialog2}},[t._v("移除右上角关闭按钮")]),t._v(" "),n("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:t.showDialog3}},[t._v("移除标题栏")]),t._v(" "),n("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:t.showDialog4}},[t._v("移除按钮栏")]),t._v(" "),n("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:t.showDialog5}},[t._v("事件")])],1)},staticRenderFns:[]}},800:function(t,o,n){var i=n(1)(n(893),n(1243),function(t){n(1052)},null,null);t.exports=i.exports},893:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={methods:{showDialog1:function(){this.$dialog({id:"demo1",title:"自定义Dialog标题",content:"小屏或移动端浏览效果最佳"})},showDialog2:function(){this.$dialog({id:"demo2",title:"自定义Dialog标题",content:"小屏或移动端浏览效果最佳",noCloseBtn:!0})},showDialog3:function(){this.$dialog({id:"demo3",content:"小屏或移动端浏览效果最佳",noHeader:!0})},showDialog4:function(){this.$dialog({title:"自定义Dialog标题",content:"小屏或移动端浏览效果最佳",noFooter:!0})},showDialog5:function(){var t={title:"自定义Dialog标题",content:"小屏或移动端浏览效果最佳",onOkBtn:function(t){alert("okBtn"),this.close()},onCancelBtn:function(t){alert("cancelBtn")},onCloseBtn:function(t){alert("closeBtn")},closeCallback:function(t){alert("will close")}};this.$dialog(t)}}}}});