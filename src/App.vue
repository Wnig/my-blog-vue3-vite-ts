<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import userInfoApi from '@/service/myApi/userInfo/userInfo'
import counterApi from '@/service/myApi/counter/counter'
import { useUserInfoStore } from "@/store/userInfo"
import { useCounterStore } from "@/store/counter"

const userInfoStore = useUserInfoStore()
const counterStore = useCounterStore()

userInfoApi.blogInfo().then((res)=> {
  if(res.code == 200) {
    userInfoStore.userInfo.author = res.result[0].author
    userInfoStore.userInfo.author_url = res.result[0].author_url
    userInfoStore.userInfo.blog_name = res.result[0].blog_name
    userInfoStore.userInfo.blog_sign = res.result[0].blog_sign
    userInfoStore.userInfo.constellation = res.result[0].constellation
    userInfoStore.userInfo.header_url = res.result[0].header_url
    userInfoStore.userInfo.img_url = res.result[0].img_url
    userInfoStore.userInfo.introduce = res.result[0].introduce
    userInfoStore.userInfo.sign = res.result[0].sign
  }
})

counterApi.counter().then((res)=> {
  if(res.code == 200) {
    counterStore.visitors = res.counter
    counterStore.totalVis = res.total
  }
})

</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
  }
</style>
