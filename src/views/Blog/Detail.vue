<template>
 <div class="content-area ignore">
    <div class="art-list">
      <div class="article-cons">
        <div class="art-con">
          <div class="tit">{{ data.detail.tit_art }}</div>
          <div class="article markdown-body"
                v-html="data.detail.con_art"></div>
          <div class="aut-info">
            <h2 class="author-heading">发布者</h2>
            <div class="author-con">
              <img class="author-avatar" src="@/assets/img/my_header.jpg" alt="" />
              <div class="author-description">
                <h3 class="author-title">{{ data.info.author }}</h3>
                <p class="author-bio">
                  {{ data.info.constellation }}
                  <span @click="enterPage">想了解{{ data.info.author }}吗？快点我｡◕ᴗ◕｡ →</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="art-bottom">
          <Icon type="ios-calendar-outline"
                size="20" />
          <span class="time">{{ data.detail.time_art }}</span>
          <Icon type="ios-folder-outline"
                size="20" />
          <span class="type">{{ data.typeFilter[data.detail.type_art] }}</span>
          <Icon type="ios-eye"
                size="20" />
          <span class="read">{{ data.detail.read_art }}</span>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="pre">
        <Icon custom="i-icon ivu-icon-ios-arrow-back" size="20" />
      </div>
      <div class="nav-list">
        <span class="left"
              @click="enterDetail(data.pageObj.preObj)">{{
          data.pageObj.preObj ? data.pageObj.preObj.tit_art : "没有了~"
        }}</span>
        <span class="right"
              @click="enterDetail(data.pageObj.nextObj)">{{
          data.pageObj.nextObj ? data.pageObj.nextObj.tit_art : "没有了~"
        }}</span>
      </div>
      <div class="next">
        <Icon custom="i-icon ivu-icon-ios-arrow-forward"
              size="20" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from 'vue'
import artApi from '@/service/myApi/art/art'
import { useUserInfoStore } from "@/store/userInfo"
import { useRoute, useRouter } from 'vue-router'
import router from '@/router/router'

let userInfo = useUserInfoStore()
let route = useRoute()

let data = reactive({
  detail: {},
  info: userInfo,
  pageObj: {},
  id_art: '',
  status_art: 1,
  typeFilter: {
    "1": "我的日常",
    "2": "学习与积累",
    "3": "专业技术问题"
  }
})

const getArtDetail = ()=> {
  let obj = {
    id_art: data.id_art,
    status_art: data.status_art,
  }
  artApi.artDetail(obj).then((res)=> {
    data.detail = res.result
    data.detail.con_art = data.detail.con_art.replace(/&amp;lt;/g,"<")
    data.detail.con_art = data.detail.con_art.replace(/&amp;gt;/g,">")
    data.pageObj = {
      preObj: res.preObj,
      nextObj: res.nextObj
    }
  })
}

watchEffect(()=> {
  if(route.query.id) {
    data.id_art = route.query.id
    getArtDetail()
  }
})


const enterPage = ()=> {

}

const enterDetail = (item: object)=> {
  if (item) {
    router.replace({
      path: '/Blog/Detail',
      query: {
        id: item.id_art
      }
    })
    getArtDetail()
  }
}

</script>

<style lang="scss" scoped>
.content-area.ignore {
  width: 100%;
  .title {
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 4px;
    border-left: 10px solid #333;
    background: #fff;
    box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.05);
    h1 {
      margin-bottom: 5px;
      color: #fff;
      font-size: 18px;
    }
    p {
      color: rgba(51, 51, 51, 0.7);
      font-size: 12px;
    }
  }
  .content {
    position: relative;
    min-height: 20vw;
    padding: 15px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.05);
    .no-data {
      width: 100%;
      height: 20vw;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
  }
  .art-list {
    .article-cons {
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.05);
      .art-con {
        padding: 20px;
        .tit {
          margin-bottom: 20px;
          color: #fff;
          font-size: 24px;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
        }
        .article {
          margin-bottom: 50px;
          color: #fafafa;
          font-size: 16px;
        }
      }
      .art-bottom {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 1vw 2vw;
        border-radius: 0 0 4px 4px;
        color: #fff;
        background: rgba(255, 255, 255, 0.1);
        span {
          position: relative;
          margin: 0 20px 0 5px;
          color: #fafafa;
          font-size: 14px;
          &.read {
            margin-right: 0;
          }
        }
      }
      .aut-info {
        .author-heading {
          position: relative;
          padding: 20px 0;
          line-height: 30px;
          color: #fafafa;
          font-size: 18px;
          @include border-top-1px(#e6e6e6);
        }
        .author-con {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .author-avatar {
            width: 36px;
            border-radius: 50%;
            margin-right: 10px;
          }
          .author-description {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            width: 100%;
            color: #fff;
            h3 {
              font-weight: 700;
              font-size: 18px;
            }
            p {
              font-size: 12px;
              span {
                margin-left: 10px;
                opacity: 0.8;
                color: #fff;
                font-size: 12px;
                border-bottom: 1px solid #fafafa;
                cursor: pointer;
              }
              span:hover {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.05);
    .pre {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 5px 0 0 5px;
      background: rgba(255, 255, 255, 0.1);
      .i-icon {
        color: #ccc;
      }
    }
    .next {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 0 5px 5px 0;
      background: rgba(255, 255, 255, 0.1);
      .i-icon {
        color: #ccc;
      }
    }
    .nav-list {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 577px;
      height: 44px;
      span {
        flex: 1;
        width: 25vw;
        padding: 0 20px;
        color: #bdbdbd;
        font-size: 14px;
        line-height: 44px;
        @include ell();
      }
      .left {
        text-align: left;
      }
      .right {
        text-align: right;
      }
      span:hover {
        color: #fafafa;
        cursor: pointer;
      }
      .active {
        color: #000;
        cursor: pointer;
      }
    }
  }
}
</style>