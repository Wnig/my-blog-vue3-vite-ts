<template>
  <div class="blog">
    <div class="ignore">
      <MyHeader />
      <div class="blog-con">
        <Nav />
        <div class="right-con">
          <router-view></router-view>
          <MyFooter />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyHeader from '@/components/MyHeader/MyHeader.vue'
import MyFooter from '@/components/MyFooter/MyFooter.vue'
import Nav from '@/components/Nav/Nav.vue'

</script>

<style lang="scss" scoped>
.blog {
  .ignore {
    min-height: 100vh;
    .blog-con {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      width: 880px;
      margin: auto;
      .right-con {
        position: relative;
        width: 665px;
      }
      .content-area {
      }
    }
  }
}
</style>