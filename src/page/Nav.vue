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
          logo:'../../static/images/douyu.jpg',
          href:'https://www.douyu.com',
          name:'斗鱼直播'
        },
        {
          logo:'../../static/images/huya.jpg',
          href:"https://www.huya.com",
          name:'虎牙直播'
        },
        {
          logo:'../../static/images/zhanqi.jpg',
          name:'战旗直播'
        },
        {
          logo:'../../static/images/huomao.jpg',
          name:'火猫直播'
        },
        {
          logo:'../../static/images/xiongmao.jpg',
          name:'熊猫直播'
        },
        {
          logo:'../../static/images/bilibili.jpg',
          name:'哔哩哔哩'
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


