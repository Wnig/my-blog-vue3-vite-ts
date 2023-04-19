<template>
  <div class="photo-mask ignore" v-if="isShowImg">
    <Icon class="close" @click="closeMask" type="md-close" color="#fff" size="50" />
    <Icon type="ios-arrow-back" size="60" color="#fff" @click="preBtn" />
    <div class="img">
      <p>{{ data.imgIndex + 1 }} / {{ list.length }}</p>
      <div class="img-content"><img :src="list[data.imgIndex].photo_url" alt="" /></div>
      <p>{{ list[data.imgIndex].photo_con }}</p>
      <p><Icon type="md-calendar" size="18" />{{ list[data.imgIndex].creat_art }}</p>
    </div>
    <Icon type="ios-arrow-forward" size="60" color="#fff" @click="nextBtn" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

let emit = defineEmits(['update:isShowImg'])
let props = defineProps({
  isShowImg: {
    type: Boolean,
    default: false,
  },
  imgIndex: {
    type: Number,
    default: 0,
  },
  list: {
    type: Array,
    default: ()=> {
      return []
    }
  },
})

let data = reactive({
  imgIndex: props.imgIndex
})

const closeMask = ()=> {
  emit('update:isShowImg', false)
}

const preBtn = ()=> {
  if(data.imgIndex < 0) {
    data.imgIndex = props.list.length - 1
  } else {
    data.imgIndex--
  }
}
const nextBtn = ()=> {
  if(data.imgIndex == props.list.length - 1) {
    data.imgIndex = 0
  } else {
    data.imgIndex++
  }
}
</script>

<style lang="scss" scoped>
.photo-mask.ignore {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  .img {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .img-content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 400px;
      img {
        max-height: 100%;
        object-fit: fill;
        margin-bottom: 10px;
      }
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 400px;
      margin-bottom: 5px;
      color: #fff;
      font-size: 18px;
    }
  }
  .ivu-icon {
    cursor: pointer;
  }
  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 9;
  }
}
</style>