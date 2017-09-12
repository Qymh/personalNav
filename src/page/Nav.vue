<template lang="jade">
  .nav(@click.stop="hideSearchList")
    .logoBox
      img(class="animated"
        src="../../static/images/logo2.jpg")
    form.searchBox(target="_blank"
      action="http://www.baidu.com/baidu")
      .inputBox
        input(type="text"
          name="word"
          class="search"
          id="bdcsMain"
          autocomplete="off")
        ul.searchList
      input(type="submit"
        class="send"
        value="点击搜索")
    .webCenter
      .webBox
        .webLimit
          .web(v-for="arr in websArr")
            a.once(:href="web.href"
              target="_blank"
              v-for="web in arr")
              span(class="logo")
                img(:src="web.logo")
              span(class="name")
                {{web.name}}
      .webPoint
        span.point(:class="index==0?'focus':''"
          @click="change(index,$event)"
          v-for="(arr,index) in websArr")      
</template>

<script>

import Velocity from 'velocity-animate'

export default {
  data () {
    return {
      websArr:[
        [
          {
            logo:'../../static/images/douyu.png',
            href:'https://www.douyu.com',
            name:'斗鱼直播'
          },
          {
            logo:'../../static/images/xiongmao.png',
            href:'https://www.panda.tv',
            name:'熊猫直播'
          },
          {
            logo:'../../static/images/bilibili.png',
            href:'https://www.bilibili.com',
            name:'哔哩哔哩'
          },
          {
            logo:'../../static/images/huya.png',
            href:"https://www.huya.com",
            name:'虎牙直播'
          },
          {
            logo:'../../static/images/zhanqi.png',
            href:'http://www.zhanqi.tv',
            name:'战旗直播'
          },
          {
            logo:'../../static/images/huomao.png',
            href:'https://www.huomao.com',
            name:'火猫直播'
          },
          {
            logo:'../../static/images/pis.jpg',
            href:'https://tieba.baidu.com/f?kw=pis&fr=ala0&tpl=5',
            name:'pis吧'
          },
          {
            logo:'../../static/images/weibo.png',
            href:'https://weibo.com',
            name:'新浪微博'
          },
          {
            logo:'../../static/images/douban.png',
            href:'https://movie.douban.com',
            name:'豆瓣电影'
          },
          {
            logo:'../../static/images/youdao.png',
            href:'http://dict.youdao.com/',
            name:'有道翻译'
          }
        ],
        [
          {
            logo:'../../static/images/jingdong.png',
            href:'https://www.jd.com/',
            name:'京东'
          }
        ]
      ]
    }
  },
  mounted () {
    // 自动对焦
    var $input=document.getElementById('bdcsMain')
    $input.focus()
  },
  methods: {
    hideSearchList(){
      var $ul=document.getElementsByClassName('searchList')[0]
      $ul.style.display='none'
    },
    change(index,e){
      
      var left=(index-1)*900+'px'

      var webBox=document.querySelectorAll('.webLimit')[0]
      Velocity(webBox,{
        left:'-1000px'
      },{
        duration:300
      })
      setTimeout(function() {
        Velocity(webBox,{
          left:'-900px'
        },{
          duration:400
        })
      }, 300);
    }
  }
}
</script>

<style lang="scss">
  @import "../style/scss/nav.scss";
</style>


