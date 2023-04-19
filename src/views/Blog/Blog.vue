<template>
  <div class="content-area ignore">
    <div class="title" v-if="data.type_art">
      <h1><span v-if="data.type_art != 0">分类：</span>{{ data.titList[data.type_art].name }}</h1>
      <p>{{ data.titList[data.type_art].describe }}</p>
    </div>
    <div class="title" v-else>
      <h1>{{ data.titList[0].name }}</h1>
      <p>{{ data.titList[0].describe }}</p>
    </div>
    <div class="content" v-if="!data.list.length">
      <p class="no-data">没有文章哦~ㄟ( ▔, ▔ )ㄏ</p>
    </div>
    <div class="art-list" v-else>
      <div class="article-cons" v-for="(item, index) in data.list" :key="index">
        <div class="art-con">
          <div class="tit" @click="enterDetail(item.id_art)">{{ item.tit_art }}</div>
          <div class="article">{{ item.con_txt_art }}</div>
          <div class="enter" @click="enterDetail(item.id_art)">继续阅读 →</div>
        </div>
        <div class="art-bottom">
          <Icon type="ios-calendar-outline" size="20" />
          <span class="time">{{ item.time_art }}</span>
          <Icon type="ios-folder-outline" size="20" />
          <span class="type">{{ data.typeFilter[item.type_art] }}</span>
          <Icon type="ios-eye" size="20" />
          <span class="time">{{ item.read_art }}</span>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="nav-list">
        <Page @on-change="handlePage" :total="data.total" :current.sync="data.pageNum" size="small" :page-size="data.pageSize" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  beforeRouteEnter(to, from, next) {
    console.log(to, from)
    next((vm) => {
      vm.getArtList()
    });
  }
})
</script>

<script setup lang="ts">
import { reactive, watchEffect } from 'vue'
import artApi from '@/service/myApi/art/art'
import { useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

let route = useRoute()
let router = useRouter()

let data = reactive({
  nowItem: {},
  titList: [
    {
      type: 0,
      name: "全部文章",
      describe: "没有伞的孩子必须努力奔跑。"
    },
    {
      type: 1,
      name: "我的日常",
      describe: "如果生命会说话，它一定说谢谢你爱它。"
    },
    {
      type: 2,
      name: "学习与积累",
      describe:
        "好好努力，你才可能变成自己所想的那种人，走自己想走的那条路。"
    },
    {
      type: 3,
      name: "专业技术问题",
      describe: "若人生掀起大浪，我就会迎风而上。"
    }
  ],
  list: [],
  pageNum: 1,
  pageSize: 5,
  total: 0,
  pageList: 0,
  type_art: '',
  status_art: 1,
  typeFilter: {
    "1": "我的日常",
    "2": "学习与积累",
    "3": "专业技术问题"
  }
})

const getArtList = ()=> {
  let obj = {
    pageNum: data.pageNum,
    pageSize: data.pageSize,
    status_art: data.status_art,
    type_art: (data.type_art && data.type_art != 0) ? data.type_art : ''
  }
  artApi.artList(obj).then((res)=> {
    if (res.code === 200) {
      data.list = res.result
      data.total = res.total
      data.pageList = Math.ceil(data.total / data.pageSize)
    }
  })
}

// watchEffect(()=> {
//   data.type_art = route.query.type_art
//   getArtList()
// })

// 路由离开
// onBeforeRouteLeave((to, from, next)=> {
//   console.log(to, from)
// })

// 路由更新
onBeforeRouteUpdate((to, from)=> {
  data.type_art = to.query.type_art
  getArtList()
})

const enterDetail = (id_art: string)=> {
  router.push({
    path: `/Blog/Detail`,
    query: {
      id: id_art
    }
  })
}

const handlePage = ()=> {

}

defineExpose({
  getArtList,
})
</script>

<style lang="scss" scoped>
.content-area.ignore {
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
      color: rgba(255, 255, 255, 0.7);
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
      font-size: 20px;
    }
  }
  .art-list {
    .article-cons {
      margin-bottom: 20px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.05);
      .art-con {
        padding: 2vw;
        .tit {
          margin-bottom: 20px;
          color: #fff;
          font-size: 24px;
          cursor: pointer;
          @include ell();
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
        }
        .tit:hover {
          opacity: 0.8;
        }
        .article {
          margin-bottom: 20px;
          color: #fff;
          font-size: 16px;
          @include multi(4);
        }
        .enter {
          width: 86px;
          font-size: 16px;
          text-align: center;
          color: #fff;
          border-bottom: 1px solid #fff;
          cursor: pointer;
        }
        .enter:hover {
          opacity: 0.8;
        }
      }
      .art-bottom {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 1vw 2vw;
        border-radius: 0 0 4px 4px;
        background: rgba(255, 255, 255, 0.1);
        .ivu-icon {
          color: #fff;
        }
        span {
          position: relative;
          margin: 0 20px 0 5px;
          color: #fff;
          font-size: 14px;
        }
      }
    }
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.05);
  }
}
</style>

<style lang="scss">
.ignore {
  .nav {
    position: relative;
    .nav-list {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 44px;
      .ivu-page-prev {
        position: absolute;
        left: 0;
        top: 0;
        width: 44px;
        height: 44px;
        border-radius: 5px 0 0 5px;
        border: none;
        background: rgba(255, 255, 255, 0.1) !important;
        .ivu-icon {
          font-size: 20px;
          line-height: 44px;
        }
        a {
          color: #bdbdbd;
        }
        a:hover {
          color: #bdbdbd;
        }
      }
      .ivu-page-next {
        position: absolute;
        right: 0;
        top: 0;
        width: 44px;
        height: 44px;
        border-radius: 0 5px 5px 0;
        border: none;
        background: rgba(255, 255, 255, 0.1) !important;
        .ivu-icon {
          font-size: 20px;
          line-height: 44px;
        }
        a {
          color: #bdbdbd;
        }
        a:hover {
          color: #bdbdbd;
        }
      }
      .ivu-page-item {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        height: 30px;
        margin: 0 5px;
        padding: 5px;
        line-height: 24px;
        a {
          color: #fff;
        }
        a:hover {
          color: #fff;
        }
      }
      .ivu-page-item-active {
        border: none;
        a {
          color: rgba(255, 255, 255, 0.6);
        }
        a:hover {
          color: rgba(255, 255, 255, 0.5);
        }
      }
      .ivu-page-disabled {
        cursor: not-allowed;
        a {
          color: #bdbdbd;
        }
        a:hover {
          color: #bdbdbd;
        }
      }
      a {
        color: #bdbdbd;
      }
      a:hover {
        color: #000;
      }
    }
  }
}
</style>