<template lang="jade">
  .nav(@click="hideSearchList")
    .logoBox
      img(src="../../static/images/logo2.jpg")
    .searchBox
      .inputBox
        input.search#bdcsMain(type="text"
        v-model="inputVal" @keyup="searchVal($event)"
        @keydown.enter="enter"
        @keydown.up="toUp" @keydown.down="toDown"
        @click.prevent.stop="clear")
        ul.searchList
          li(:class="index==current?'focus':''" v-for="(list,index) in lists")
            a(:href="'https://www.baidu.com/s?wd='+list"
              target="_blank") {{list}}
      span.send 点击搜索
    .webBox
      .web
        a.once(:href="web.href"
          target="_blank"
          v-for="web in webs")
          span.logo
            img(:src="web.logo")
          span.name
            {{web.name}}
</template>

<script>
export default {
  data () {
    return {
      // 当前输入的值
      inputVal:'',
      // 当前处于目标的搜索值
      current:-1,
      // 导航栏
      webs:[
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
        },
        {
          logo:'../../static/images/jingdong.png',
          href:'https://www.jd.com/',
          name:'京东'
        },
      ],
      // 搜索的数据
      lists:[]
    }
  },
  methods:{
    // 请求搜索数据
    searchVal(e){

      // 上下箭移动时不触发事件 
      if(e.keyCode==38||e.keyCode==40){
        return 
      }

      // jsonp跨域请求搜索数据
      this.$http.jsonp(
        'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+this.inputVal,
        {
          jsonp:'cb'
        }).then(res=>{
          this.lists=res.data.s
      })

      var $ul=document.getElementsByClassName('searchList')[0]
      $ul.style.display="block"
    },
    //  隐藏搜索列表
    hideSearchList(){
      console.log(1)
      var $ul=document.getElementsByClassName('searchList')[0]
      $ul.style.display="none"
    },
    // 清除搜索列表硬值
    clear(){
      var $ul=document.getElementsByClassName('searchList')[0]
      $ul.style.display="block"
    },
    // 回车跳转
    enter(){
      window.open('https://www.baidu.com/s?wd='+this.inputVal)
    },
    // 按上箭
    toUp(){
      if(this.current>0){
        var $focus=document.querySelectorAll('.searchList li a')[this.current-1]
        var innerHTML=$focus.innerHTML.trim()
        this.inputVal=innerHTML
        this.current--
      }
    },
    // 按下箭
    toDown(){
      // 在规定范围移动
      if(this.current>=-1&&this.current<9){
        var $focus=document.querySelectorAll('.searchList li a')[this.current+1]
        var innerHTML=$focus.innerHTML.trim()
        this.inputVal=innerHTML
        this.current++
      }
    }
  }

}
</script>

<style lang="scss">
  @import "../style/scss/nav.scss";
</style>


