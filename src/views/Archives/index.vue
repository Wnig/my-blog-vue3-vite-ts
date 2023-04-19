<template>
  <div class="article-cons ignore">
    <div class="art-con">
      <div class="tit">归档</div>
      <div class="article">
        <div class="list" v-for="(item, index) in data.list" :key="index">
          <div class="year">{{ item.year }}</div>
          <div class="art-link" v-for="(ite, ind) in item.list" :key="'item_'+ ind">
            <div class="link" @click="enterDetail(ite)">{{ ite.tit_art }}</div>
            <span>{{ ite.time_art.substring(0, 10) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import artApi from '@/service/myApi/art/art'

let data = reactive({
  list: [],
  status_art: 1,
})

let obj = {
  status_art: data.status_art
}
artApi.artsList(obj).then((res)=> {
  if (res.code === 200) {
    let listMap = {}
    if(res.result) {
      res.result.forEach((item)=> {
        if(!listMap.hasOwnProperty(item.time_art.substring(0, 4))) {
          let lItem = {
            year: item.time_art.substring(0, 4),
            list: []
          }
          lItem.list.push(item)
          listMap[item.time_art.substring(0, 4)] = lItem
          data.list.push(lItem)
        } else {
          listMap[item.time_art.substring(0, 4)].list.push(item)
        }
      }) 
    }
  }
})

const enterDetail = ()=> {

}
</script>

<style lang="scss" scoped>
.article-cons.ignore {
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
      .year {
        padding-left: 5px;
        margin: 20px auto 5px;
        color: #fff;
        font-size: 20px;
        font-style: italic;
      }
      .art-link {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0 35px;
        margin-bottom: 10px;
        .link {
          flex: 1;
          color: #bababa;
          font-size: 14px;
          cursor: pointer;
          &:hover {
            color: #fff;
            opacity: 0.8;
          }
        }
        span {
          color: #fafafa;
          font-size: 14px;
          font-style: italic;
        }
      }
    }
  }
}
</style>