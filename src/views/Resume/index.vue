<template>
  <div class="resume">
    <div class="ignore">
      <div class="resume-con">
        <h1>MY RESUME</h1>
        <div class="left-nav">
          <span @click="changeTab(item)"
                @mouseover="enter(item)"
                @mouseout="leave(item)"
                class="tag"
                :class="{ clicked: index == data.tabindex, sel: item.isHover }"
                v-for="(item, index) in data.navList"
                :key="index">{{ item.name }} <i class="iconfont"
               :class="item.class"></i></span>
          <span @click="jumpBlog" class="tag">我的博客</span>
        </div>
        <div class="content">
          <div class="my-item" v-if="data.tabindex == 0">
            <h3>关于我<p>About me</p></h3>
            <div class="item-con">
              <div class="item">
                <div class="-con">年龄/29</div>
              </div>
              <div class="item">
                <div class="-con">学历/本科</div>
              </div>
              <div class="item">
                <div class="-con">坐标/厦门</div>
              </div>
              <div class="item">
                <div class="-con">状态/离职</div>
              </div>
              <div class="item">
                <div class="-con">英语/CET4</div>
              </div>
              <div class="item">
                <div class="-con">专业/计算机-软件开发</div>
              </div>
            </div>
          </div>
          <div class="my-item" v-if="data.tabindex == 1">
            <h3>工作经验<p>Work experience</p></h3>
            <Timeline>
              <TimelineItem>
                <p class="time">2020.11 – 2023.03 | 用友金融信息技术股份有限公司</p>
                <p class="content">主要通过HTML5、Vue、Element-ui、Knockout、jQuery等技术，实现PC平台、移动平台等项目的开发制作。</p>
              </TimelineItem>
              <TimelineItem>
                <p class="time">2018.11 – 2020.09 | 环球商付厦门科技有限公司</p>
                <p class="content">主要通过HTML5、Vue、Element-ui、Electron等技术，实现PC平台、移动平台、PC端桌面应用等项目的开发制作。</p>
              </TimelineItem>
              <TimelineItem>
                <p class="time">2018.03 – 2018.11 | 司马图（厦门）科技有限公司</p>
                <p class="content">主要通过HTML5、Vue、WXML等技术，实现PC平台、移动平台、微信小程序等项目的开发制作。</p>
              </TimelineItem>
              <TimelineItem>
                <p class="time">2016.08 – 2018.03 | 风筝（厦门）信息科技有限公司</p>
                <p class="content">主要通过HTML5、jQuery等技术，实现PC平台、移动平台等项目的开发制作。</p>
              </TimelineItem>
            </Timeline>
          </div>
          <div class="my-item" v-if="data.tabindex == 2">
            <h3>项目经验<p>Project experience</p></h3>
            <Timeline>
              <TimelineItem>
                <p class="time">2020.11 – 2023.03 | 用友金融信息技术股份有限公司</p>
                <p class="content"><Icon type="ios-bookmark-outline" size="14" />龙集采系统2.0重构</p>
                <p class="content">项目描述：主要负责结算付款、电商平台，通过Vue、Element-ui实现项目开发。省市区选择地址的组件开发；机构树、品类树组件开发；附件上传组件开发；</p>
                <p class="content"><Icon type="ios-bookmark-outline" size="14" />龙集采系统渗透测试、组件升级</p>
                <p class="content">项目描述：主要针对渗透测试检测出来的问题进行修复，对系统的组件进行升级，对电商平台移动端进行升级。</p>
                <p class="content"><Icon type="ios-bookmark-outline" size="14" />龙集采系统结算付款、电商平台PC端、电商平台移动端</p>
                <p class="content">项目描述：主要通过Knockout、jQuery、Bootstrap实现结算付款、电商平台，通过Vue实现电商平台APP。通过zTree.js实现机构树、品类树等功能；通过PDF.js实现PDF发票的预览；ofdViewer.js预览OFD发票；通过Viewer.js预览图片格式的发票。</p>
              </TimelineItem>
              <TimelineItem>
                <p class="time">2018.11 – 2020.09 | 环球商付厦门科技有限公司</p>
                <p class="content"><Icon type="ios-bookmark-outline" size="14" />美味导航微信公众号</p>
                <p class="content">项目描述：为平台的商户提供管理店铺、商品的管理系统，主要用Vue+Element-ui搭建，利用EChart.js展示报表数据，Vue-Cropper实现截图功能，Vue.Draggable实现餐台区域上下拖动排序。</p>
                <p class="content"><Icon type="ios-bookmark-outline" size="14" />美味导航后台管理系统</p>
                <p class="content">项目描述：互联网+新餐饮的全方位体验，快速寻找美食，饭友帮忙点餐，记录美食路上的旅程，平台为商家打造了完整的互联网新餐饮解决方案，让商家快速跻身互联网潮店。主要用Vue搭建，利用postcss-px-to-viewport实现移动端适配，EChart.js展示营业数据，Vue-Cropper实现截图功能。</p>
                <p class="content"><Icon type="ios-bookmark-outline" size="14" />会员中心微信端、会员后台管理系统</p>
                <p class="content">项目描述：为平台的商户提供独立的会员系统，更好的管理顾客资源。会员后台管理主要用Vue+Element-ui搭建，利用EChart.js展示报表数据，Vue-Cropper实现截图功能。会员中心微信端主要用Vue搭建，利用postcss-px-to-viewport实现移动端适配。</p>
                <p class="content"><Icon type="ios-bookmark-outline" size="14" />美味导航PC端快速点餐收银</p>
                <p class="content">项目描述：PC端桌面应用，不同收银设备，满足平台商户多样的收银需求。适用于笔记本电脑、一体机、PC触摸屏、Windows平板电脑等Windows设备。主要用Vue + Electron搭建，利用Lodop插件实现打印小票功能，利用Serialport插件实现串口通信，获取电子秤数据。</p>
              </TimelineItem>
              <TimelineItem>
                <p class="time">2018.03 – 2018.11 | 司马图（厦门）科技有限公司</p>
                <p class="content"><Icon type="ios-bookmark-outline" size="14" />悠易游（平台、商户） 小程序</p>
                <p class="content">项目描述：专注开发旅游产品、线路，提供旅游产品及相关服务，专业提供优质、性价比高的旅游服务。</p>
                <p class="content"><Icon type="ios-bookmark-outline" size="14" />欣宏途 小程序</p>
                <p class="content">项目描述：欣宏途旅游，整合境内外优质旅游产品及周边服务资源，通过社交网络所形成的人际脉络形成新的行为冲动和内在。</p>
                <p class="content"><Icon type="ios-bookmark-outline" size="14" /><a href="http://www.smartmapdt.com">司马图集团官网</a></p>
                <p class="content">项目描述：互联网全域解决方案提供商，司马图专注于产业项目资源整合和改造，探索新互联网经济下新兴的产业模式。</p>
              </TimelineItem>
              <TimelineItem> <p class="time"> 2016.08 – 2018.03 | 风筝（厦门）信息科技有限公司 </p>
                <p class="content"> <Icon type="ios-bookmark-outline" size="14" />风筝官网、风筝校园旅游微信公众号</p>
                <p class="content">项目描述：该项目主要为学生打造的校园旅游产品。</p>
                <p class="content"><Icon type="ios-bookmark-outline" size="14" />六合助手论坛、图库、918500彩票</p>
                <p class="content">项目描述：该项目主要为用户提供各类彩票资讯。</p>
                <p class="content"><Icon type="ios-bookmark-outline" size="14" />金足球</p>
                <p class="content">项目描述：该项目主要为用户提供足球、篮球赛事赛况的体育资讯APP。</p>
              </TimelineItem>
            </Timeline>
          </div>
          <div class="my-item" v-if="data.tabindex == 3">
            <h3> 教育背景 <p>Education</p>
            </h3>
            <div class="cont">
              <p>2013.07 - 2017.07 | 泉州师范学院 | 软件开发 | 本科</p>
              <p>主修课程：</p>
              <p>1、C语言程序设计、数据结构：具备良好的编程思想</p>
              <p>2、Web编程基础、ASP.NET：对网页的基本组成结构有一定的了解。</p>
              <p>
                3、数据库系统原理与应用、数据库访问技术：能够熟练地操作SQL
                Server数据库，灵活地运用增、删、改、查语句。
              </p>
            </div>
          </div>
          <div class="my-item" v-if="data.tabindex == 4">
            <div class="conts">
              <p @click="openMask('qq')">QQ : 770225508</p>
              <p @click="openMask('wx')">WeChat : kjy_88_0818</p>
              <p>
                <a href="mailto:770225508@qq.com">E-mail : 770225508@qq.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mask" v-if="data.isImgShow">
        <div class="img">
          <div class="close" @click="data.isImgShow = false">
            <Icon type="ios-close" size="40" color="#fff" />
          </div>
          <img v-if="data.imgType == 'qq'" src="@/assets/img/qq.jpg" alt="" />
          <img v-if="data.imgType == 'wx'" src="@/assets/img/wx.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
let router = useRouter()
let data = reactive({
  isOpen: false,
  tabindex: 0,
  navList: [
    {
      id: 0,
      name: "关于我",
      class: "iconyuzhouxingqiu-22 ufo",
      isHover: false
    },
    {
      id: 1,
      name: "工作经验",
      class: "iconyuzhouxingqiu-10 sun",
      isHover: false
    },
    {
      id: 2,
      name: "项目经验",
      class: "iconyuzhouxingqiu-23 rocket",
      isHover: false
    },
    {
      id: 3,
      name: "教育背景",
      class: "iconyuzhouxingqiu-05 star",
      isHover: false
    },
    {
      id: 4,
      name: "联系我",
      class: "iconyuzhouxingqiu-07 moon",
      isHover: false
    }
  ],
  imgType: "",
  isImgShow: false
})

const jumpBlog = ()=> {
  router.push({ name: "blog" })
}
const changeTab = (item)=> {
  data.tabindex = item.id
}
const enter = (item)=> {
 data.navList[item.id].isHover = true
}
const leave = (item)=> {
  data.navList[item.id].isHover = false
}
const openMask = (str)=> {
  data.imgType = str
  data.isImgShow = true
}
const openMenu = ()=> {
  data.isOpen = true
}

</script>

<style lang="scss" scoped>
.resume {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  .ignore {
    .resume-con {
      position: relative;
      display: flex;
      align-content: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      width: 500px;
      min-height: 300px;
      padding: 20px 10px;
      border-radius: 5px;
      border: 1px dashed #ffff;
      box-shadow: #fff 0px 0px 10px;
      h1 {
        position: relative;
        margin-bottom: 20px;
        font-size: 20px;
        text-align: center;
        color: #fff;
        text-shadow: 0px 1px 4px rgba(255, 255, 255, 255.29);
        &::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -8px;
          margin: auto;
          width: 50%;
          height: 1px;
          background: #fff;
        }
      }
      .left-nav {
        position: absolute;
        left: -120px;
        top: 0;
        width: 120px;
        color: #fff;
        text-shadow: 0px 1px 4px rgba(255, 255, 255, 255.29);
        z-index: 9;
        .tag {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 35px;
          margin-bottom: 15px;
          border-radius: 10px 0 0 10px;
          color: #fff;
          text-align: center;
          text-shadow: 0px 1px 4px rgba(255, 255, 255, 255.29);
          border: 1px dashed #fff;
          font-size: 14px;
          cursor: pointer;
          &:hover {
            font-weight: 700;
          }
          i {
            font-size: 38px;
            z-index: 9;
          }
          .ufo {
            position: absolute;
            left: -20px;
            top: -10px;
          }
          .sun {
            position: absolute;
            left: -20px;
            top: -10px;
          }
          .rocket {
            position: absolute;
            left: -20px;
            top: 0px;
          }
          .star {
            position: absolute;
            left: -20px;
            top: 0;
          }
          .moon {
            position: absolute;
            left: -20px;
            top: -10px;
          }
        }
        .sel .ufo,
        .clicked .ufo {
          font-weight: 700;
          animation: ufo 2s ease-in-out infinite;
        }
        .sel .sun,
        .clicked .sun {
          font-weight: 700;
          animation: sun 1.4s infinite linear;
        }
        .sel .rocket,
        .clicked .rocket {
          top: -10px;
          font-weight: 700;
          animation: rocket 2s ease-in-out infinite;
        }
        .sel .star,
        .clicked .star {
          top: -10px;
          font-weight: 700;
          animation: yunshi 2s ease-in-out infinite;
        }
        .sel .moon,
        .clicked .moon {
          font-weight: 700;
          animation: shack 4s ease-in infinite;
        }
      }
      .my-item {
        padding: 10px;
        h3 {
          display: flex;
          align-items: flex-end;
          justify-self: start;
          margin-bottom: 10px;
          font-size: 18px;
          color: #fff;
          text-shadow: 0px 1px 4px rgba(255, 255, 255, 255.29);
          p {
            margin-left: 5px;
            font-size: 12px;
            color: #fff;
            font-style: italic;
            text-shadow: 0px 1px 4px rgba(255, 255, 255, 255.29);
          }
        }
        .item-con {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          .item {
            .-con {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
              position: relative;
              width: 90px;
              height: 90px;
              margin: 20px;
              padding: 5px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.1);
              text-align: center;
              font-size: 12px;
              cursor: pointer;
              -webkit-transition: background 0.2s,
                -webkit-transform ease-out 0.1s;
              transition: background 0.2s, -webkit-transform ease-out 0.1s;
              transition: transform ease-out 0.1s, background 0.2s;
              transition: transform ease-out 0.1s, background 0.2s,
                -webkit-transform ease-out 0.1s;
              &:after {
                content: "";
                position: absolute;
                left: 0px;
                box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
                opacity: 0;
                -webkit-transform: scale(0.9);
                transform: scale(0.9);
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
              &:hover {
                background: hsla(0, 0%, 100%, 0.05);
                font-weight: 700;
                color: #fff;
                text-shadow: 0px 1px 4px rgba(255, 255, 255, 255.29);
                -webkit-transform: scale(0.93);
                transform: scale(0.93);
              }
              &:hover:after {
                -webkit-animation: effect 1.3s ease-out 75ms;
                animation: effect 1.3s ease-out 75ms;
              }
            }
          }
        }
        .time {
          color: #fff;
          text-shadow: 0px 1px 4px rgba(255, 255, 255, 255.29);
        }
        .content {
          color: #fff;
          text-shadow: 0px 1px 4px rgba(255, 255, 255, 255.29);
        }
        .cont {
          color: #fff;
          text-shadow: 0px 1px 4px rgba(255, 255, 255, 255.29);
          p {
            font-size: 14px;
            margin-bottom: 10px;
          }
        }
        .conts {
          color: #fff;
          text-shadow: 0px 1px 4px rgba(255, 255, 255, 255.29);
          p {
            font-size: 14px;
            margin-bottom: 10px;
            cursor: pointer;
            a {
              color: #fff;
              text-shadow: 0px 1px 4px rgba(255, 255, 255, 255.29);
            }
          }
        }
      }
      .content {
        a {
          color: #fff;
        }
      }
    }
    .mask {
      position: fixed;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      z-index: 10;
      .img {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        .close {
          position: absolute;
          right: -20px;
          top: -20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #999;
          cursor: pointer;
        }
        img {
          width: 300px;
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    .ignore {
      display: none;
    }
    .i-mobile {
      display: block;
    }
  }
}

@-webkit-keyframes ufo {
  0% {
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
  }
  50% {
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    -o-transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
  }
}

@-webkit-keyframes sun {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rocket {
  0% {
    -webkit-transform: translateX(0px) translateY(10px);
    -moz-transform: translateX(0px) translateY(10px);
    -ms-transform: translateX(0px) translateY(10px);
    -o-transform: translateX(0px) translateY(10px);
  }
  100% {
    -webkit-transform: translateX(10px) translateY(0px);
    -moz-transform: translateX(10px) translateY(0px);
    -ms-transform: translateX(10px) translateY(0px);
    -o-transform: translateX(10px) translateY(0px);
  }
}

@-webkit-keyframes yunshi {
  0% {
    -webkit-transform: translateX(10px) translateY(0px);
    -moz-transform: translateX(10px) translateY(0px);
    -ms-transform: translateX(10px) translateY(0px);
    -o-transform: translateX(10px) translateY(0px);
  }
  100% {
    -webkit-transform: translateX(0px) translateY(10px);
    -moz-transform: translateX(0px) translateY(10px);
    -ms-transform: translateX(0px) translateY(10px);
    -o-transform: translateX(0px) translateY(10px);
  }
}

@-webkit-keyframes shack {
  0% {
    -webkit-transform: rotate(25deg);
    -moz-transform: rotate(25deg);
    -ms-transform: rotate(25deg);
    -o-transform: rotate(25deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(25deg);
    -moz-transform: rotate(25deg);
    -ms-transform: rotate(25deg);
    -o-transform: rotate(25deg);
  }
}
@keyframes effect {
  0% {
    opacity: 0.3;
  }
  40% {
    opacity: 0.5;
  }
  40%,
  to {
    box-shadow: 0 0 0 2px hsla(0, 0%, 100%, 0.1), 0 0 10px 10px #302f2f,
      0 0 0 10px hsla(0, 0%, 100%, 0.5);
  }
  to {
    opacity: 0;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
}
</style>