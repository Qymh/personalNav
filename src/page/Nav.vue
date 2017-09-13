<template lang="jade">
  .nav(@click="hideSearchList")
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
          v-model="currentVal"
          @click.stop="showSearchList"
          @keyup="search($event)"
          @keydown.up="toUp($event)"
          @keydown.down="toDown($event)"
          autocomplete="off")
        ul.searchList
          li(:class="index==currentLine?'focus':''"
            v-for="(list,index) in lists"
            @click.stop="hideSearchList")
            a(:href="'https://www.baidu.com/s?wd='+list"
              target="_blank") {{list}}
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
      // 当前搜索值
      currentVal:'',
      // 当前搜索行
      currentLine:-1,
      // 搜索列表
      lists:[],
      // 网页组
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
            logo:'../../static/images/pis.jpg',
            href:'https://tieba.baidu.com/f?kw=pis&fr=ala0&tpl=5',
            name:'pis吧'
          },
          {
            logo:'../../static/images/youdao.png',
            href:'http://dict.youdao.com/',
            name:'有道翻译'
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
            logo:'../../static/images/huomao.png',
            href:'https://www.huomao.com',
            name:'火猫直播'
          },
        ],
        [
          {
            logo:'../../static/images/jingdong.png',
            href:'https://www.jd.com/',
            name:'京东'
          }
        ]
      ],
      // 当前点击的point
      innerIndex:0,
      outerDate:new Date().getTime()
    }
  },
  mounted () {
    // 自动对焦
    var $input=document.getElementById('bdcsMain')
    $input.focus()

    // 快捷键
    document.body.addEventListener('keydown',this.shortcut)

    // 滚动事件
    if(document.addEventListener){
        document.addEventListener('DOMMouseScroll',this.scroll,false);
    }

    // 滚动事件
    window.onmousewheel=document.onmousewheel=this.scroll;//IE/Opera/Chrome
  },
  methods: {
    // 快捷键
    shortcut(e){
      var alt=e.altKey // 是否点击alt
      var code=e.keyCode // 对应按键

      // 
      if(alt){
        var $webLimit=document.querySelector('.webLimit')
        var left=$webLimit.style.left

        if(left==''){
          left=0
        }

        left=Number.parseInt(left)

        var innerIndex=Math.abs(left/900)


        var web=document.querySelectorAll('.web')[innerIndex].childNodes
  
        e.returnValue=false
        e.preventDefault()
        switch (code) {

          // alt+q
          case 81:
            web[0].click()
            break;

          // alt+w
          case 87:
            web[1].click()
            break;

          // alt+e
          case 69:
            web[2].click()
            break;

          // alt+r
          case 82:
            web[3].click()
            break;

          // alt+t
          case 84:
            web[4].click()
            break;

          // alt+a
          case 65:
            web[5].click()
            break;

          // alt+s
          case 83:
            web[6].click()
            break;

          // alt+d
          case 68:
            web[7].click()
            break;

          // alt+f
          case 70:
            web[8].click()
            break;

          // alt+g
          case 71:
            web[9].click()
            break;

        }
      }

      
    },
    // 搜索框的人性化隐藏
    hideSearchList(){
      var $ul=document.getElementsByClassName('searchList')[0]
      $ul.style.display='none'
    },
    // 显示搜索框
    showSearchList(){
      var $ul=document.getElementsByClassName('searchList')[0]
      $ul.style.display='block'
    },
    // 点击的左右轮播
    change(index,e){
      // 计时器
      var innerDate=new Date().getTime()

      if(innerDate-this.outerDate>200){

        var webBox=document.querySelectorAll('.webLimit')[0]
        var $width=900
        var left=(index)*$width
        var $target=e.target
        var $spans=document.querySelectorAll('.webPoint span')

        $spans.forEach(($span)=>{
          $span.setAttribute('class','point')
        })

        $target.setAttribute('class','point focus')
    
        // 幻灯播放
        Velocity(webBox,{
          left:`-${left}px`
        },{
          duration:200
        })

        this.outerDate=innerDate

      }else{
        return 
      }

    },
    // 滑动的左右轮播
    scroll(e){
      var innerDate=new Date().getTime();
      var e=e||window.event
      var date=e.wheelDelta||e.detail // 滚轴的数值
      var $limit=document.querySelector('.webLimit') // 需要改变的盒子
      var $width=900 // 盒子宽度
      var $spans=document.querySelectorAll('.webPoint span') // 点
      
      var that=this

      if(innerDate-this.outerDate>200){
          // 控制滚动滑屏
        function wheelEvent(){

          if(e.wheelDelta){

            $spans.forEach(($span)=>{
              $span.setAttribute('class','point')
            })

            if(e.wheelDelta<0){
             Velocity($limit,{
               left:-$width+'px'
             },{
               duration:200
             })

            $spans[1].setAttribute('class','point focus')

            }else if(e.wheelDelta>0){
              Velocity($limit,{
               left:0
             },{
               duration:200
             })
             
             $spans[0].setAttribute('class','point focus')
            }
          }

          else if(e.detail){
            if(e.detail>0&&top>-limit){
              Velocity($limit,{
                left:-$width+'px'
              },{
                duration:200
              })

            $spans[1].setAttribute('class','point focus')

            }else if(e.detail<0&&top<0){
              Velocity($limit,{
                left:0
              },{
                duration:200
              })

              $spans[0].setAttribute('class','point focus')
            }
          }

          that.outerDate=innerDate
        }

        wheelEvent()
      }
    },
    // 搜索
    search(e){

      // 获取输入框的值
      var $input=document.getElementById('bdcsMain')
      var val=$input.value

      // 上下键不操作
      if(e.keyCode==38||e.keyCode==40){
        return
      }

      if(e.keyCode==13){
        window.open('https://www.baidu.com/s?wd='+this.currentVal)
        this.currentVal=''
      }

      // 显示搜索列表
      var $ul=document.querySelectorAll('.searchList')[0]
      $ul.style.display="block"

      // jsonp跨域获取搜索数据
      this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='
      +val,{
        jsonp:'cb'
      }).then((res)=>{
        this.lists=res.data.s
      })

     
    },
    // 搜索列表上切换
    toUp(){
      // 控制范围
      if(this.currentLine>0){
        this.currentLine--
      }

      var $li=document.querySelectorAll('.searchList li a')
      var inner=$li[this.currentLine].innerHTML // 当前的焦点值

      this.currentVal=inner

    },
    // 搜索列表下切换
    toDown(){
      // 控制范围
      if(this.currentLine<=8){
        this.currentLine++
      }

      var $li=document.querySelectorAll('.searchList li a')
      var inner=$li[this.currentLine].innerHTML // 当前的焦点值

      this.currentVal=inner
    }
  }
}
</script>

<style lang="scss">
  @import "../style/scss/nav.scss";
</style>


