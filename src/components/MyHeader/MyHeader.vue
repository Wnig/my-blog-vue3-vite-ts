<template>
  <div class="header">
    <div class="ignore">
      <div class="header-con">
        <div class="header-img">
          <img src="@/assets/img/my_header.jpg" alt="">
          <p>Wnig's Blog</p>
        </div>
        <div class="login-con">
          <div class="login" @click="goLogin">
            <Icon type="md-contact" size="20" />{{ data.username ? data.username : "登录" }}<Icon v-if="!data.username" type="md-arrow-dropright" size="20" />
          </div>
          <div class="click-btn" v-if="data.isClick">
            <strong @click="preBtn"><Icon type="md-arrow-dropleft" size="20" /> Blog</strong>
            <strong class="strong">Wnig's</strong>
            <strong @click="nextBtn">Back<Icon type="md-arrow-dropright" size="20" /></strong>
          </div>
          <span class="sign">{{ data.sentence }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { $session } from '@/until/store'
import { useUserInfoStore } from "@/store/userInfo"

let router = useRouter()
let userInfoStore = useUserInfoStore()

let data = reactive({
  username: userInfoStore.userInfo.user_art || $session.get('user_art'),
  sentence: userInfoStore.userInfo.sign,
  isClick: false,
})

const goLogin = ()=> {
  router.push({
    path: '/Login'
  })
}

const preBtn = ()=> {

}

const nextBtn = ()=> {

}

</script>

<style lang="scss" scoped>
.header {
  .ignore {
    width: 880px;
    padding-top: 20px;
    margin: 0px auto 20px;
    .header-con {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
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
      .header-img {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding: 10px 0;
        img {
          width: 60px;
          height: 60px;
          object-fit: fill;
          border-radius: 10px;
        }
        p {
          margin-left: 20px;
          color: #fff;
          font-size: 20px;
        }
      }
      .login-con {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        flex-direction: column;
        strong {
          color: #fafafa;
          font-size: 16px;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
        .strong {
          margin: 0 10px;
        }
        .sign {
          color: #fafafa;
          font-size: 14px;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
        }
        .login {
          color: #fafafa;
          font-size: 14px;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
