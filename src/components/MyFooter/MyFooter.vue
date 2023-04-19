<template>
  <div class="footer">
    <div class="ignore">
      <p>❤我不相信所谓的命运，我只相信我自己。❤</p>
      <p>
        Copyright ©2017 Powered By Wnig 闽ICP备18014223号
      </p>
      <p>
        <span>总访问量：{{ data.totalVis }}</span><span>访客数：{{ data.visitors }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useCounterStore } from "@/store/counter"

let counterStore = useCounterStore()
let data = reactive({
  visitors: counterStore.visitors,
  totalVis: counterStore.totalVis,
})
</script>

<style lang="scss" scoped>
.footer {
  .ignore {
    width: 100%;
    margin-top: 20px;
    padding: 20px 50px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.05);
    p {
      line-height: 24px;
      text-align: center;
      font-size: 14px;
      color: #fff;
      span {
        margin: 0 10px;
      }
    }
  }
}
</style>