webpackJsonp([1],{"/4h8":function(t,e){},"08T5":function(t,e){},"0RyI":function(t,e){t.exports=[{Title:"关于我",attribute:"时间：2018-2-24 0：28 | 标签：项目 | 阅读：2333",texts:["技术栈: h5+css js vue vue-router"]}]},"5Rmq":function(t,e){},"5eeL":function(t,e){t.exports=[{Title:"json相关知识点",attribute:"时间：2018-2-22 12：58 | 标签：任务 | 阅读：2333",texts:["Json是一种数据格式，不是编程语言，语法形式和js一样最重要的四点，bug通常地方：1.没有变量申明 2.没有末尾的分号，逗号等所有符号 3.对象的属性必须加 “双引号” ！"]},{Title:"成为大佬的方向",attribute:"时间：2018-2-22 12：58 | 标签：任务 | 阅读：2333",texts:["基础：HTML+CSS网站页面搭建，CS核心和PC端页面开发，HTML5移动端页面开发","核心：web前端核心技术JavaScript，ecmasript，dom，ajax，json，正则，作用域，运动框架，核心算法，高级函数，插件封装，jQuery等。","高级：html5+高级JavaScript开发，大数据可视化，webapp交互接口，lbs定位，微信sdk，es6标准，高级算法，数据结构，插件封装。","框架：vue、react、angular企业开发应用。","企业要求：bootstrap，swiper，iscroll，sass，ps切图，网站上线等。"]},{Title:"要实现的小任务",attribute:"时间：2018-2-22 12：58 | 标签：任务 | 阅读：2333",texts:["点赞，评论，回复","伪登录界面","分页以及相应跳页","懒加载","引入json","关闭页面加遮罩","实现回到顶部","移动端适配","后端axios","基本网站成型发布","导航栏玩一下position:sticky","回到顶部按钮移动出现，以及返回动画","首页的内容划分出 首页 和 文章,首页放版本更新以及小心得等，文章放相应文章以及csdn上的内容，给文章做个目录","小任务单独划分一个 todos 组件，位置在回顶上面，点击弹出，加遮罩","项目板块添加本网页的项目，分点：1.技术栈；2.项目介绍；3.收获；4.源代码；5.在线展示"]},{Title:"遇到的小知识点",attribute:"时间：2018-2-22 12：58 | 标签：get点 | 阅读：2333",texts:["1.父级元素如果有transform属性，会导致子元素的fixed失效。父元素去掉transform属性","2.v-for中图片不能用插值{{}}，要用绑定属性 :src=' ' ","3.子元素撑不起父元素: 清浮动 overflow: hidden;","4.a标签中加 <a href='javascript:;'> 能阻止浏览器的默认效果","5.position:fixed相对父级定位：fixed定位相对父级容器定位，不添加:top,bottom,left,right样式，通过margin定位","6.redirect重定向设置默认路由：{path: '/', redirect: 'goods'},{path: '/goods', component: goods},","7.几个居中的小办法：1)text-align:center; 2)margin:0 auto; 3)position:absolute;left:0;right:0;margin:auto 父级要有position","8.img里面添加 title='水果' 属性，鼠标移过去时会出现小提示","9.背景图固定不随滚动条移动 background-attachment: fixed;","10.div自适应文字宽度 display:inline-block;","11.标签中写大于小于号方法 '&lt &gt'","12.添加QQ好友的链接 tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1158211734&website=www.oicqzone.com","13.修改网页位置 document.documentElement.scrollTop = document.body.scrollTop = 0;"]}]},"6Ho/":function(t,e){t.exports=[{Title:"留言板",attribute:"时间：2018-2-24 0：28 | 标签：项目 | 阅读：2333",texts:["本功能尚未实现，等购买服务器后连同 登录，阅读数量等功能一同上线"]}]},"9wA9":function(t,e){t.exports={navs:[{title:"首页",rou:"blogBody"},{title:"文章",rou:"writings"},{title:"项目",rou:"blogProject"},{title:"留言板",rou:"blogMessage"},{title:"关于我",rou:"blogMe"}],mores:[{title:"CSDN",url:"http://blog.csdn.net/webbingAndKami"},{title:"gitHub",url:"https://github.com/webbingforkami"}]}},DIIB:function(t,e){},KurJ:function(t,e){},L515:function(t,e){},L6SR:function(t,e,i){t.exports=i.p+"static/img/WeChat.38bf037.png"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("VCXJ"),n=(i("D0oh"),i("aozt")),a=i.n(n),o={name:"blogHead",data:function(){return{blogHeadData:{navs:[{title:"首页",rou:"blogBody"},{title:"文章",rou:"writings"},{title:"项目",rou:"blogProject"},{title:"留言板",rou:"blogMessage"},{title:"关于我",rou:"blogMe"}],mores:[{title:"CSDN",url:"http://blog.csdn.net/webbingAndKami"},{title:"gitHub",url:"https://github.com/webbingforkami"}]}}},created:function(){var t=this;a.a.get("../static/blogHead.json",{}).then(function(e){t.blogHeadData=e.data})}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"blogHead"},[s("ul",{staticClass:"head"},[s("img",{attrs:{src:i("iUub"),alt:""}}),t._v(" "),t._l(t.blogHeadData.navs,function(e){return s("li",[s("router-link",{attrs:{to:e.rou}},[t._v(t._s(e.title))])],1)}),t._v(" "),s("ul",{staticClass:"headRight"},t._l(t.blogHeadData.mores,function(e){return s("li",[s("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))])])}))],2)])},staticRenderFns:[]};var r=i("Z0/y")(o,l,!1,function(t){i("wblW")},null,null).exports,c={props:{visibleHeight:{type:Number,default:400},rate:{type:Number,default:10},customStyle:{type:Object,default:function(){return{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}}},data:function(){return{scrollTop:"",visible:!1,interval:null}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=window.pageYOffset>this.visibleHeight,this.scrollTop=window.pageYOffset},goTop:function(t){var e=this;this.interval=setInterval(function(){e.scrollTop=e.scrollTop+-e.scrollTop/e.rate,window.scrollTo(0,e.scrollTop),e.scrollTop<=0&&(window.scrollTo(0,0),clearInterval(e.interval))},13)}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"back-top",style:this.customStyle,attrs:{name:"button"},on:{click:this.goTop}},[e("svg",{staticClass:"back-icon",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[e("g",[e("path",{attrs:{d:"M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z","fill-rule":"evenodd"}})])])])},staticRenderFns:[]};var d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bodyimg"},[e("div",{staticClass:"userFont"},[e("div",{staticClass:"imgbox"},[e("h1",[this._v("Wing的博客")]),this._v(" "),e("h2",[this._v("在秃头的边缘试探")])])])])}]};var b={name:"App",components:{blogHead:r,scrollTop:i("Z0/y")(c,u,!1,function(t){i("08T5")},"data-v-481088fb",null).exports,bodyimg:i("Z0/y")({name:"bodyimg",data:function(){return{}}},d,!1,function(t){i("fIas")},"data-v-d0ad2f68",null).exports}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("bodyimg"),this._v(" "),e("div",{staticClass:"box"},[e("blogHead"),this._v(" "),e("router-view"),this._v(" "),e("scrollTop")],1)],1)},staticRenderFns:[]};var v=i("Z0/y")(b,g,!1,function(t){i("5Rmq")},null,null).exports,A=i("zO6J"),h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"hello"})},staticRenderFns:[]};i("Z0/y")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},h,!1,function(t){i("KurJ")},"data-v-72919aa1",null).exports;var f={name:"blogBody",data:function(){return{blogBodyDate:[{Title:"版本更新 1.0",attribute:"时间：2018-3-3 11：32 | 标签：坑爹更新 | 阅读：2333",texts:["1.添加了 lib-flexible 的移动端适配","2.用 axios 把 json 数据搬到外层 static 文件夹中","3.修改'关于我'板块,设置为默认页，并修改设计","4.回到顶部按钮添加动画"]},{Title:"wing有话说",attribute:"时间：2018-3-3 11：32 | 标签：bb时间 | 阅读：2333",texts:["前几天本人生日，就和女朋友去广州玩了几天，期间也问了几个大佬的意见，包括找工作的，我的个人网站的等等，感觉受益挺多的，今晚重新开始继续维护这个网站，同时开始公测这个网站吧（其实就是发出去朋友圈- -，主要是之前只是给几个玩前端的朋友看的），希望自己可以早点找到工作，交得起房租- -，我都不知道自己工作都没找到就租房子是什么鬼"]},{Title:"内测版本 2.0",attribute:"时间：2018-2-24 0：28 | 标签：坑爹更新 | 阅读：2333",texts:["1.对网站首页进行十分装逼的改动","------添加顶部背景图","------对导航框与侧边框添加粘性固定","------调节了相应的移动端适配"]},{Title:"内测版本 1.0",attribute:"时间：2018-2-22 12：58 | 标签：坑爹更新 | 阅读：2333",texts:["1.完成网站基本架构","2.添加回到顶部按钮","3.设置了默认路由","4.适配移动端，添加了基础的响应式布局"]}]}},created:function(){var t=this;a.a.get("../static/blogBody.json",{}).then(function(e){t.blogBodyDate=e.data})}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"blogBody"},[i("div",{staticClass:"body",staticStyle:{clear:"both"}},[i("div",{staticClass:"bodyLeft"},[i("ul",t._l(t.blogBodyDate,function(e){return i("li",[i("div",{staticClass:"Title"},[i("h2",[t._v(t._s(e.Title))])]),t._v(" "),i("div",{staticClass:"attribute"},[t._v(t._s(e.attribute))]),t._v(" "),t._l(e.texts,function(e){return i("div",{staticClass:"text"},[t._v(t._s(e))])})],2)}))]),t._v(" "),i("div",{staticClass:"bodyRight"},[t._v(" emmmm不知道要放些什么，就这么空着也不好看，只好先做出来放着蹭地方")])])])},staticRenderFns:[]};var m=i("Z0/y")(f,p,!1,function(t){i("L515")},null,null).exports,_={name:"blogProject",data:function(){return{blogProjectData:[{title:"个人博客项目",valueTitle:[{Ttitle:"项目介绍：",Tvalue:[{T:"wing的个人博客"}]},{Ttitle:"技术栈：",Tvalue:[{T:"Hmtl5 ：使用了基础的hmtl进行布局"},{T:"css3 ：使用css添加样式"},{T:"js ：由于是vue项目，js方面用的比较少，基本用于methods里面添加功能"},{T:"vue ：使用v-for实现数组内数据的迭代；v-bind实现数据的绑定，基本在于图片地址的绑定，以及相应的{{}}插值操作；v-on实现点击等相关交互"},{T:"vue-router : 实现顶部导航栏的单页面路由"},{T:"vue-cli :  用于快速构建的脚手架，在项目中对一些配置进行了修改"},{T:"axios :  把数据独立出来放到/static外部文件夹中，用http请求的方式引用json数据"},{T:"git和github :  保存以及上传分支，用github page实现项目的展示"}]},{Ttitle:"源代码：",Tvalue:[{T:"GitHub："}],Tlink:"https://github.com/webbingforkami/myblog"},{Ttitle:"展示网址：",Tvalue:[{T:"在线体验： "}],Tlink:"https://webbingforkami.github.io/myblog/#/blogBody"}]}]}},created:function(){var t=this;a.a.get("../static/blogProject.json",{}).then(function(e){t.blogProjectData=e.data})}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"blogProject"},[i("ul",t._l(t.blogProjectData,function(e){return i("li",[i("h2",{staticStyle:{paddingBottom:"10px"}},[t._v(t._s(e.title))]),t._v(" "),i("hr"),t._v(" "),i("ul",t._l(e.valueTitle,function(e){return i("li",[i("h2",[t._v(t._s(e.Ttitle))]),t._v(" "),t._l(e.Tvalue,function(e){return i("p",[t._v(t._s(e.T))])}),t._v(" "),i("a",{attrs:{href:e.Tlink,target:"_blank"}},[t._v(t._s(e.Tlink))])],2)}))])}))])},staticRenderFns:[]};var w=i("Z0/y")(_,T,!1,function(t){i("iDsQ")},null,null).exports,x={name:"blogWritings",data:function(){return{blogWritingsData:[{Title:"json相关知识点",attribute:"时间：2018-2-22 12：58 | 标签：任务 | 阅读：2333",texts:["Json是一种数据格式，不是编程语言，语法形式和js一样最重要的四点，bug通常地方：1.没有变量申明 2.没有末尾的分号，逗号等所有符号 3.对象的属性必须加 “双引号” ！"]},{Title:"成为大佬的方向",attribute:"时间：2018-2-22 12：58 | 标签：任务 | 阅读：2333",texts:["基础：HTML+CSS网站页面搭建，CS核心和PC端页面开发，HTML5移动端页面开发","核心：web前端核心技术JavaScript，ecmasript，dom，ajax，json，正则，作用域，运动框架，核心算法，高级函数，插件封装，jQuery等。","高级：html5+高级JavaScript开发，大数据可视化，webapp交互接口，lbs定位，微信sdk，es6标准，高级算法，数据结构，插件封装。","框架：vue、react、angular企业开发应用。","企业要求：bootstrap，swiper，iscroll，sass，ps切图，网站上线等。"]},{Title:"要实现的小任务",attribute:"时间：2018-2-22 12：58 | 标签：任务 | 阅读：2333",texts:["点赞，评论，回复","伪登录界面","分页以及相应跳页","懒加载","引入json","关闭页面加遮罩","实现回到顶部","移动端适配","后端axios","基本网站成型发布","导航栏玩一下position:sticky","回到顶部按钮移动出现，以及返回动画","首页的内容划分出 首页 和 文章,首页放版本更新以及小心得等，文章放相应文章以及csdn上的内容，给文章做个目录","小任务单独划分一个 todos 组件，位置在回顶上面，点击弹出，加遮罩","项目板块添加本网页的项目，分点：1.技术栈；2.项目介绍；3.收获；4.源代码；5.在线展示"]},{Title:"遇到的小知识点",attribute:"时间：2018-2-22 12：58 | 标签：get点 | 阅读：2333",texts:["1.父级元素如果有transform属性，会导致子元素的fixed失效。父元素去掉transform属性","2.v-for中图片不能用插值{{}}，要用绑定属性 :src=' ' ","3.子元素撑不起父元素: 清浮动 overflow: hidden;","4.a标签中加 <a href='javascript:;'> 能阻止浏览器的默认效果","5.position:fixed相对父级定位：fixed定位相对父级容器定位，不添加:top,bottom,left,right样式，通过margin定位","6.redirect重定向设置默认路由：{path: '/', redirect: 'goods'},{path: '/goods', component: goods},","7.几个居中的小办法：1)text-align:center; 2)margin:0 auto; 3)position:absolute;left:0;right:0;margin:auto 父级要有position","8.img里面添加 title='水果' 属性，鼠标移过去时会出现小提示","9.背景图固定不随滚动条移动 background-attachment: fixed;","10.div自适应文字宽度 display:inline-block;","11.标签中写大于小于号方法 '&lt &gt'","12.添加QQ好友的链接 tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1158211734&website=www.oicqzone.com","13.修改网页位置 document.documentElement.scrollTop = document.body.scrollTop = 0;"]}]}},created:function(){var t=this;a.a.get("../static/blogWritings.json",{}).then(function(e){t.blogWritingsData=e.data})}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"blogBody"},[i("div",{staticClass:"body",staticStyle:{clear:"both"}},[i("div",{staticClass:"bodyLeft"},[i("ul",t._l(t.blogWritingsData,function(e){return i("li",[i("div",{staticClass:"Title"},[i("h2",[t._v(t._s(e.Title))])]),t._v(" "),i("div",{staticClass:"attribute"},[t._v(t._s(e.attribute))]),t._v(" "),t._l(e.texts,function(e){return i("div",{staticClass:"text"},[t._v(t._s(e))])})],2)}))]),t._v(" "),i("div",{staticClass:"bodyRight"},[t._v("随便放点什么")])])])},staticRenderFns:[]};var C=i("Z0/y")(x,y,!1,function(t){i("zwzI")},null,null).exports,E={name:"blogMessage",data:function(){return{blogMessageData:[{Title:"留言板",attribute:"时间：2018-2-24 0：28 | 标签：项目 | 阅读：2333",texts:["本功能尚未实现，等购买服务器后连同 登录，阅读数量等功能一同上线"]}]}},created:function(){var t=this;a.a.get("../static/blogMessage.json",{}).then(function(e){t.blogMessageData=e.data})}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"blogBody"},[i("div",{staticClass:"body",staticStyle:{clear:"both"}},[i("div",{staticClass:"msgLeft"},[i("ul",t._l(t.blogMessageData,function(e){return i("li",[i("div",{staticClass:"Title"},[i("h2",[t._v(t._s(e.Title))])]),t._v(" "),t._l(e.texts,function(e){return i("div",{staticClass:"text"},[t._v(t._s(e))])})],2)}))])])])},staticRenderFns:[]};var j=i("Z0/y")(E,M,!1,function(t){i("/4h8")},null,null).exports,D={name:"blogMe",data:function(){return{}},mounted:function(){document.documentElement.scrollTop=document.body.scrollTop=610}},B={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"meLeft"},[s("h1",[t._v(" For Me ")]),t._v(" "),s("table",{staticClass:"basic"},[s("td",{attrs:{align:"right"}},[s("h2",[t._v('"name"  :')])]),t._v(" "),s("td",[s("h2",[t._v('  "温伟彬",')])]),t._v(" "),s("tr",[s("td",{attrs:{align:"right"}},[s("h2",[t._v('"sex"  :')])]),t._v(" "),s("td",[s("h2",[t._v('  "男",')])])]),t._v(" "),s("tr",[s("td",{attrs:{align:"right"}},[s("h2",[t._v('"age"  :')])]),t._v(" "),s("td",[s("h2",[t._v("  21")])])])]),t._v(" "),s("div",{staticClass:"skill"},[s("p",[t._v("是一个大专"),s("span",[t._v("应届毕业生")])]),s("span"),t._v(" "),s("p",[s("span",[t._v("熟悉h5+css3+js+vue全家桶")])]),t._v(" "),s("p",[t._v("想找一份"),s("span",[t._v("web前端")]),t._v("的实习")])]),t._v(" "),s("div",{staticClass:"meimg"},[s("p",[t._v("如何找到我？!")]),t._v(" "),s("div",{staticClass:"wechat"},[s("img",{attrs:{src:i("L6SR"),alt:""}}),t._v("\n      < / WeChat >\n    ")]),t._v(" "),s("span",[t._v("\n      微信号：wwb13226779310"),s("br"),t._v("\n      phone：13226779310"),s("br"),t._v("\n      QQ:1158211734\n    ")]),t._v(" "),s("div",{staticClass:"qq"},[s("a",{attrs:{href:"tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1158211734&website=www.oicqzone.com"}},[s("i",{staticClass:"icon iconfont icon-qq"})]),t._v(" "),s("img",{attrs:{src:i("eQq7"),alt:""}}),t._v(" "),s("a",{attrs:{href:"https://github.com/webbingforkami",target:"_blank"}},[s("i",{staticClass:"icon iconfont icon-github"})])])])])}]};var Q=i("Z0/y")(D,B,!1,function(t){i("DIIB")},null,null).exports;s.a.use(A.a);var k=new A.a({routes:[{path:"/",name:"blogMe",redirect:"blogMe"},{path:"/blogBody",name:"blogBody",component:m},{path:"/blogProject",name:"blogProject",component:w},{path:"/writings",name:"writings",component:C},{path:"/blogMessage",name:"blogMessage",component:j},{path:"/blogMe",name:"blogMe",component:Q}]});i("bc0p"),i("q0Z3"),i("9wA9"),i("0RyI"),i("6Ho/"),i("qUEy"),i("5eeL");s.a.config.productionTip=!1,new s.a({el:"#app",router:k,components:{App:v},template:"<App/>"})},bc0p:function(t,e){},eQq7:function(t,e){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAEwALAwERAAIRAQMRAf/EAHMAAQEBAAAAAAAAAAAAAAAAAAcFCgEBAQEBAAAAAAAAAAAAAAAAAgEDABAAAAMGBAQHAQAAAAAAAAAAAgMEARMUBQYWABIVByEkJRcRMSIyIzMmCBEAAgIBAwUAAAAAAAAAAAAAAAERAjFBgRJhcbHhA//aAAwDAQACEQMRAD8A3rVbUqKkKcm1RrwjOJliVphSQloWKZkvOMAllkoRMFwMmE3mR5SVODzGcaELOLcG1lWrs9DkCdp70QbjWpRF2veMfErnvePXtRt50/c9udF6a68M7n5Pt9WMuH0iJ0necdtBSilMjTNyt4E1NllFH0Ns2ZLajqQ9ogGkzbdReni6SpxoGhGz8TJFAJ2pY1oRAWLZYIPsGxja5X6V8+iYQ+Y0IAH86QFq1tpulQ/eTdjPC3LcEZeUx1C+rr6pd0c8zZORgIWC5Rzg1xuVj/hEP//Z"},fIas:function(t,e){},iDsQ:function(t,e){},iUub:function(t,e,i){t.exports=i.p+"static/img/qi.c2fbb15.png"},q0Z3:function(t,e){t.exports=[{Title:"版本更新 1.0",attribute:"时间：2018-3-3 11：32 | 标签：坑爹更新 | 阅读：2333",texts:["1.添加了 lib-flexible 的移动端适配","2.用 axios 把 json 数据搬到外层 static 文件夹中","3.修改'关于我'板块,设置为默认页，并修改设计","4.回到顶部按钮添加动画"]},{Title:"wing有话说",attribute:"时间：2018-3-3 11：32 | 标签：bb时间 | 阅读：2333",texts:["前几天本人生日，就和女朋友去广州玩了几天，期间也问了几个大佬的意见，包括找工作的，我的个人网站的等等，感觉受益挺多的，今晚重新开始继续维护这个网站，同时开始公测这个网站吧（其实就是发出去朋友圈- -，主要是之前只是给几个玩前端的朋友看的），希望自己可以早点找到工作，交得起房租- -，我都不知道自己工作都没找到就租房子是什么鬼"]},{Title:"内测版本 2.0",attribute:"时间：2018-2-24 0：28 | 标签：坑爹更新 | 阅读：2333",texts:["1.对网站首页进行十分装逼的改动","------添加顶部背景图","------对导航框与侧边框添加粘性固定","------调节了相应的移动端适配"]},{Title:"内测版本 1.0",attribute:"时间：2018-2-22 12：58 | 标签：坑爹更新 | 阅读：2333",texts:["1.完成网站基本架构","2.添加回到顶部按钮","3.设置了默认路由","4.适配移动端，添加了基础的响应式布局"]}]},qUEy:function(t,e){t.exports=[{title:"个人博客项目",valueTitle:[{Ttitle:"项目介绍：",Tvalue:[{T:"wing的个人博客"}]},{Ttitle:"技术栈：",Tvalue:[{T:"Hmtl5 ：使用了基础的hmtl进行布局"},{T:"css3 ：使用css添加样式"},{T:"js ：由于是vue项目，js方面用的比较少，基本用于methods里面添加功能"},{T:"vue ：使用v-for实现数组内数据的迭代；v-bind实现数据的绑定，基本在于图片地址的绑定，以及相应的{{}}插值操作；v-on实现点击等相关交互"},{T:"vue-router : 实现顶部导航栏的单页面路由"},{T:"vue-cli :  用于快速构建的脚手架，在项目中对一些配置进行了修改"},{T:"axios :  把数据独立出来放到/static外部文件夹中，用http请求的方式引用json数据"},{T:"git和github :  保存以及上传分支，用github page实现项目的展示"}]},{Ttitle:"源代码：",Tvalue:[{T:"GitHub："}],Tlink:"https://github.com/webbingforkami/myblog"},{Ttitle:"展示网址：",Tvalue:[{T:"在线体验： "}],Tlink:"https://webbingforkami.github.io/myblog/#/blogBody"}]}]},wblW:function(t,e){},zwzI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.32fa9eea142df4f9467c.js.map