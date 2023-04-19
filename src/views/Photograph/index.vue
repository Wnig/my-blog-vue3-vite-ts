<template>
  <div class="art-con ignore">
    <div class="title">
      <h1>相册</h1>
      <p>你是年少的欢喜，倒过来也是你。</p>
    </div>
    <div class="waterfall"
          v-if="data.list.length">
      <div class="item"
            v-for="(item, index) in data.list"
            :key="index"
            @click="showImg(index)">
        <div class="item-content">
          <img :src="item.photo_url"
                alt="" />
          <div class="describe">
            <p>{{ item.photo_con }}</p>
            <div class="time">
              <Icon type="md-calendar"
                    size="16" />
              {{ item.creat_art }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="no-data"
          v-else>
      <p>没有照片哦~ㄟ( ▔, ▔ )ㄏ</p>
    </div>
  </div>
  <PhotoDetail ref="photoDetail" v-if="data.isShowImg" v-model:isShowImg="data.isShowImg" :imgIndex="data.imgIndex" :list="data.list"></PhotoDetail>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'
import PhotoDetail from './PhotoDetail.vue'
import photoApi from '@/service/myApi/photoInfo/photoInfo'

let photoDetail = ref(PhotoDetail)

let data = reactive({
  list: [],
  total: 0,
  pageNum: 1,
  pageSize: 20,
  isShowImg: false,
  imgIndex: 0,
})

let obj = {
  pageNum: data.pageNum,
  pageSize: data.pageSize
}
photoApi.getBlogPhotoInfo(obj).then((res)=> {
  if(res.code == 200) {
    data.list = res.result
    data.total = res.total
    data.list.forEach((item)=> {
      item.photo_url = `/upload/${item.photo_url}`
    })
  }
})

const showImg = (index)=> {
  data.imgIndex = index
  data.isShowImg = true
}
</script>

<style lang="scss" scoped>
.art-con.ignore {
  .title {
    margin-bottom: 20px;
    padding: 1vw;
    border-radius: 4px;
    border-left: 10px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.5);
    h1 {
      margin-bottom: 5px;
      color: #fff;
      font-size: 18px;
    }
    p {
      color: #fff;
      font-size: 12px;
    }
  }
  .waterfall {
    column-count: 3;
    column-gap: 10px;
    .item {
      break-inside: avoid;
      box-sizing: border-box;
      margin: 0 0px 10px 0px;
      padding: 10px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 5px;
      box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.05);
      .item-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        img {
          width: 100%;
          margin-bottom: 10px;
        }
        .describe {
          width: 100%;
          p {
            color: #fff;
            margin-bottom: 5px;
            text-align: left;
            font-size: 14px;
          }
          .time {
            color: #fff;
            text-align: right;
            font-size: 14px;
          }
        }
      }
    }
  }
  .no-data {
    width: 100%;
    height: 20vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.05);
    p {
      font-size: 20px;
    }
  }
}
</style>