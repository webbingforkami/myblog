<template>
  <div class="blogProject">
    <ul>
      <li v-for="project in blogProjectData">
        <h2 style="paddingBottom:10px;">{{project.title}}</h2>
        <hr>
        <ul>
          <li v-for="pro in project.valueTitle">
            <h2>{{pro.Ttitle}}</h2>
            <p v-for="p in pro.Tvalue">{{p.T}}</p>
            <a :href="pro.Tlink" target="_blank" >{{pro.Tlink}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'blogProject',
  data () {
    return {
      blogProjectData:[
        {
    "title": "个人博客项目",
    "valueTitle": [
      {
        "Ttitle": "项目介绍：",
        "Tvalue": [
          {"T": "wing的个人博客"}
        ]
      }, {
        "Ttitle": "技术栈：",
        "Tvalue":  [
          {"T": "Hmtl5 ：使用了基础的hmtl进行布局"},
          {"T": "css3 ：使用css添加样式"},
          {"T": "js ：由于是vue项目，js方面用的比较少，基本用于methods里面添加功能"},
          {"T": "vue ：使用v-for实现数组内数据的迭代；v-bind实现数据的绑定，基本在于图片地址的绑定，以及相应的{{}}插值操作；v-on实现点击等相关交互"},
          {"T": "vue-router : 实现顶部导航栏的单页面路由"},
          {"T": "vue-cli :  用于快速构建的脚手架，在项目中对一些配置进行了修改"},
          {"T": "axios :  把数据独立出来放到/static外部文件夹中，用http请求的方式引用json数据"},
          {"T": "git和github :  保存以及上传分支，用github page实现项目的展示"}
        ]
      }, {
        "Ttitle": "源代码：",
        "Tvalue": [
          {"T": "GitHub："}
        ],
        "Tlink": "https://github.com/webbingforkami/myblog"
      }, {
        "Ttitle": "展示网址：",
        "Tvalue": [
          {"T": "在线体验： "}
        ],
        "Tlink": "https://webbingforkami.github.io/myblog/#/blogBody"
      }
    ]
  }
      ]
    }
  },
  created() {
    // 访问服务器文件，应该把json文件放在最外层的static文件夹，这个文件夹是vue-cli内置服务器向外暴露的静态文件夹
    axios.get("../static/blogProject.json",{})
    .then(response=>{
         this.blogProjectData=response.data;
    })
  }
}
</script>

<style>
a{
  text-decoration: none;
  color: #2c3e50;
}
.blogProject>ul>li{
  width: 800px;
  padding: 20px;
  margin: 10px auto;
  background: white;
  text-align: left;
  box-shadow: 0 0 20px rgba(0,37,55,.05);
}
.blogProject>ul>li>ul{
  margin-top: 10px;
}
.blogProject>ul>li>ul>li{
  margin-bottom: 10px;
}
.blogProject>ul>li>ul>li>p{
  font-size: 15px;
}
.blogProject>ul>li>ul>li>a{
  font-size: 15px;
}
</style>
