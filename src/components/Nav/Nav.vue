<template>
  <div class="nav-con">
    <div class="ignore">
      <div class="left-con">
        <div class="myheader">
          <img class="my-header" src="@/assets/img/my_header.jpg" alt="" />
        </div>
        <div class="info-list">
          <strong>{{ infoObj.blog_name }}</strong>
          <span>{{ infoObj.blog_sign }}</span>
        </div>
        <div class="nav">
          <p @click="changeTabBtn(item, index)" :class="{ 'sel-item': data.nowIndex == index }" v-for="(item, index) in data.navData" :key="index">
            <span v-if="data.isAdmin">{{ item.name }}</span>
            <span v-else-if="item.name != 'Manage'">{{ item.name }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserInfoStore } from "@/store/userInfo"

let router = useRouter()
const userInfoStore = useUserInfoStore()

let data = reactive({
  nowIndex: 0,
  navData: [{
    name: "Home",
    link: "home",
    type: ""
  },
  {
    name: "All",
    link: "blog",
    type: 0
  },
  {
    name: "Daily",
    link: "blog",
    type: 1
  },
  {
    name: "Accumulate",
    link: "blog",
    type: 2
  },
  {
    name: "Professional",
    link: "blog",
    type: 3
  },
  {
    name: "Photograph",
    link: "photograph",
    type: ""
  },
  {
    name: "Archives",
    link: "archives",
    type: ""
  },
  {
    name: "About",
    link: "about",
    type: ""
  },
  {
    name: "Resume",
    link: "resume",
    type: ""
  },
  {
    name: "Manage",
    link: "manage",
    type: ""
  }],
  isAdmin: false,
})
let infoObj = reactive({
  blog_name: userInfoStore.userInfo.blog_name,
  blog_sign: userInfoStore.userInfo.blog_sign,
})

const changeTabBtn = (item: { link: string, type: string }, index:number)=> {
  if (item.link === "blog") {
    router.replace({
      name: `${item.link}`,
      query: {
        type_art: item.type
      }
    })
  } else {
    router.push({ 
      name: `${item.link}`,
     })
  }
}
</script>

<style lang="scss" scoped>
.ignore {
  .left-con {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 195px;
    min-height: 50px;
    margin-right: 20px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 4px 10px rgba(0, 0, 0, 0.06);
    z-index: 10;
    .myheader {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-bottom: 10px;
      img {
        width: 100px;
        border-radius: 50%;
      }
    }
    .info-list {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 20px;
      strong {
        position: relative;
        width: 100%;
        margin-bottom: 10px;
        color: #fff;
        text-align: center;
        font-size: 30px;
        font-weight: 700;
        text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.4);
        &::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          right: 0;
          height: 1px;
          width: 100%;
          margin: auto;
          background: rgba(255, 255, 255, 1);
          transform: scaleX(1);
          transition: all 0.2s ease-in;
        }
        &:hover::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          right: 0;
          height: 1px;
          width: 0;
          margin: auto;
          background: rgba(255, 255, 255, 1);
          transform: scaleX(1);
          transition: all 0.2s ease-in;
        }
      }
      span {
        width: 100%;
        text-align: left;
        color: #fff;
        font-size: 14px;
      }
    }
    .nav {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;
      p {
        display: flex;
        position: relative;
        width: 100%;
        cursor: pointer;
        z-index: 1;
        transition: all 0.2s ease-in;
        &.sel-item {
          font-weight: 700;
          transition: all 0.2s ease-in;
        }
      }
      span {
        width: 100%;
        padding: 5px 20px;
        color: #fff;
        text-align: center;
        font-size: 14px;
        @include ell();
        @include border-top-1px(#e6e6e6);
      }
      p:hover {
        font-weight: 700;
      }
    }
  }
}

</style>