<template>
  <div class="home">
    <div class="ignore">
      <div class="my-home">
        <div class="blog-name">
          <p>Wnig's Blog</p>
          <div class="right-ico">
            <Icon @click="enterBlog" type="md-list-box" size="24" />
            <Icon @click="openMyInfo" type="logo-twitch" size="24" />
          </div>
        </div>
        <div class="weather">
          <div class="tips" v-if="data.location">
            <div class="location">
              <span class="name"><Icon type="ios-pin-outline" size="16" />{{ data.weather.city }}</span>
              <p>
                <span class="date"><Icon type="md-calendar" size="16" />{{ data.weather.date }}</span>
                <span class="week">{{ data.weather.week }}</span>
              </p>
            </div>
            <div class="weather-con">
              <span class="tem">{{ data.weather.tem }}°</span>
              <span v-for="(item, index) in data.weaIconList" :key="index">
                <i class="iconfont weather-ico" v-if="data.weather.wea_img == item.type" :class="item.class"></i>
              </span>
              <span class="wea">{{ data.weather.wea }}</span>
              <span class="tems"><Icon type="ios-thermometer-outline" size="12" />{{ data.weather.tem1}}°~{{ data.weather.tem2 }}°</span>
            </div>
          </div>
        </div>
        <div class="img">
          <img src="@/assets/img/img_11.jpg" alt="">
          <div class="myinfo" v-if="data.isShowMyInfo">
            <div class="frosted-glass">
              <span>长夜将尽，来日可期。</span>
              <div class="p-class">
                <p>QQ : 770225508</p>
                <p>WeChat : kjy_88_0818</p>
                <p>E-mail : 770225508@qq.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import outApi from '@/service/myApi/outApi/outApi'

let router = useRouter()

let data = reactive({
  isShowMyInfo: false,
  location: "",
  weather: {},
  weaIconList: [
    {
      type: "xue",
      class: "icon-xiaxue"
    },
    {
      type: "lei",
      class: "icon-leizhenyu"
    },
    {
      type: "shachen",
      class: "icon-shachenbao"
    },
    {
      type: "wu",
      class: "icon-wu"
    },
    {
      type: "bingbao",
      class: "icon-bingbao"
    },
    {
      type: "yun",
      class: "icon-duoyun"
    },
    {
      type: "yu",
      class: "icon-dongyu"
    },
    {
      type: "yin",
      class: "icon-yintian"
    },
    {
      type: "qing",
      class: "icon-tianqing"
    }
  ],
})

const enterBlog = ():void => {
  router.push({
    path: '/Blog/index',
  })
}
const openMyInfo = ():void => {
  data.isShowMyInfo = !data.isShowMyInfo
}

// 获取ip地址
const obj = {
  key: "FDRBZ-2T7RI-J5MGG-5OOCF-7D7KQ-N4FDM"
}
outApi.location(obj).then((res)=> {
  if(res.request_id) {
    data.location = res.result.ip
    getWeather()
  }
})

const getWeather = ()=> {
  // 获取天气
  let obj = {
    version: "v61",
    appid: "58527382",
    appsecret: "f6Cz0gZr",
    ip: data.location
  }
  outApi.weater(obj).then((res)=> {
    data.weather = res
    data.weather.date = `${data.weather.date.substring(5, 7)}/${data.weather.date.substring(8, 10)}`
  })
}
  
</script>


<style lang="scss" scoped>
.home {
  .ignore {
    .my-home {
      width: 800px;
      margin: 0 auto;
      .blog-name {
        position: relative;
        padding: 20px;
        .right-ico {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          margin: 0 auto;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          min-width: 66px;
          padding: 20px 5px;
        }
        p {
          text-align: center;
          font-size: 30px;
          color: #fff;
          font-family: 'Reggae One', CenturyGothic, "AppleGothic", sans-serif;
          text-shadow: 0 0 4px #fff, 0 0 4px #fff, 0 0 50px #fff, 0 0 100px #fff, 0 0 200px #fff;
        }
        i {
          color: #fff;
          cursor: pointer;
        }
      }
      .weather {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        background: #000;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          margin: 0 auto;
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0px 5px 1px rgba(255, 255, 255, 1);
        }
        &::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          margin: 0 auto;
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0px 5px 1px rgba(255, 255, 255, 1);
        }
        .tips {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .location {
          display: flex;
          align-items: center;
          justify-content: center;
          .name {
            max-width: 170px;
            margin-right: 10px;
            color: rgba(255, 255, 255, 0.8);
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
            font-size: 16px;
            @include ell();
          }
          p {
            margin-right: 10px;
            .date {
              margin-right: 10px;
              color: rgba(255, 255, 255, 0.8);
              text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
              font-size: 16px;
            }
            .week {
              color: rgba(255, 255, 255, 0.8);
              text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
              font-size: 12px;
            }
          }
        }
        .weather-con {
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          flex-wrap: wrap;
          .tem {
            margin-right: 5px;
            color: rgba(255, 255, 255, 0.8);
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
            font-size: 20px;
          }
          .wea {
            margin-right: 5px;
            color: rgba(255, 255, 255, 0.8);
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
            line-height: 28px;
            font-size: 16px;
          }
          .air {
            color: rgba(255, 255, 255, 0.8);
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
            font-size: 12px;
          }
          i {
            color: rgba(255, 255, 255, 0.8);
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
            line-height: 28px;
            font-size: 16px;
            &.weather-ico {
              margin-right: 5px;
            }
          }

          .tems {
              color: rgba(255, 255, 255, 0.8);
              text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
              font-size: 12px;
            }
        }
        p {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
        }
      }
      .music {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
        z-index: 11;
        .music-ico {
          color: #fff;
          margin-right: 10px;
        }
        .music-info {
          display: flex;
          align-items: center;
          justify-content: center;
          marquee {
            width: 100px;
            margin-right: 20px;
            p {
              span {
                color: #fff;
                font-size: 12px;
                font-weight: 700;
                text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.29);
                white-space: nowrap;
              }
            }
          }
          .control-btn {
            #audio {
              display: none;
            }
            i {
              font-size: 20px;
              color: #fff;
              text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.29);
              cursor: pointer;
              &.icon-icon-2 {
                margin: 0 12px;
              }
              &.icon-icon-6 {
                margin: 0 12px;
              }
            }
          }
        }
      }
      .img {
        position: relative;
        width: 100%;
        img {
          width: 100%;
          object-fit: fill;
        }
      }
      .myinfo {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        .frosted-glass {
          display: flex;
          align-items: center;
          position: relative;
          height: 300px;
          box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126),
            0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224),
            0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(20px);
          transition: 0.5s ease;
          &:hover {
            box-shadow: 0 0.7px 1px rgba(0, 0, 0, 0.157),
              0 1.7px 2.6px rgba(0, 0, 0, 0.224), 0 3.5px 5.3px rgba(0, 0, 0, 0.28),
              0 7.3px 11px rgba(0, 0, 0, 0.346), 0 20px 30px rgba(0, 0, 0, 0.5);
          }
          &::before {
            position: absolute;
            left: 0;
            top: 0;
            content: '';
            border-top: 2px solid #fff;
            border-left: 2px solid #fff;
            width: 20px;
            height: 20px;
          }
          &::after {
            position: absolute;
            right: 0;
            bottom: 0;
            content: '';
            border-bottom: 2px solid #fff;
            border-right: 2px solid #fff;
            width: 20px;
            height: 20px;
          }
          span {
            position: absolute;
            right: 20px;
            top: 20px;
            font-size: 14px;
            color: #fff;
            text-shadow: 0 0 4px #fff, 0 0 4px #fff, 0 0 50px #fff, 0 0 100px #fff, 0 0 200px #fff;
            &::before {
              content: '';
              position: absolute;
              right: 0;
              left: -10px;
              bottom: -5px;
              margin: 0 auto;
              width: 110%;
              height: 1px;
              background: #fff;
            }
          }
          .p-class {
            position: relative;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            width: 100%;
            padding: 45px 50px;
            p {
              margin-bottom: 10px;
              font-size: 18px;
              color: #fff;
              text-shadow: 0 0 4px #fff, 0 0 4px #fff, 0 0 50px #fff, 0 0 100px #fff, 0 0 200px #fff;
            }
          }
        }
      }
    }
  }
}
</style>
