<template lang="jade">
  .nav
    .logoBox
      img(class="animated bounceInUp"
        src="../../static/images/logo2.jpg")
    form.searchBox(target="_blank"
      action="http://www.baidu.com/baidu")
      input(type="text"
        name="word"
        class="search"
        baiduSug="1"
        id="bdcsMain")
      input(type="submit"
        class="send"
        value="点击搜索")
    .webBox
      .web
        a.once(:href="web.href"
          target="_blank"
          v-for="web in webs")
          span(class="logo")
            img(:src="web.logo")
          span(class="name")
            {{web.name}}
</template>

<script>
export default {
  data () {
    return {
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
          logo:'../../static/images/jingdong.png',
          href:'https://www.jd.com/',
          name:'京东'
        },
      ]
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  @import "../style/scss/nav.scss";
</style>


