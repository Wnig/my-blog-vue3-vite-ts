<template>
  <div class="login ignore">
    <div class="login-con">
      <img src="@/assets/img/logo.png" alt="" />
      <Form ref="formInline" :model="data.formInline" :rules="data.ruleInline" inline>
        <FormItem prop="username">
          <Input size="small" class="input" type="text" v-model="data.formInline.username" @keyup="handleSubmit()" placeholder="请输入账号" maxlength="10">
            <template #prepend>
              <Icon type="ios-person-outline"></Icon>
            </template>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input size="small" class="input" type="password" @keyup="handleSubmit()" v-model="data.formInline.password" placeholder="请输入密码" maxlength="16">
            <template #prepend><Icon type="ios-lock-outline"></Icon></template>
          </Input>
        </FormItem>
      </Form>
      <div class="control-btn">
        <Button type="primary" ghost size="small" @click="handleSubmit()">Signin</Button>
        <Button size="small" @click="enterHome">Home</Button>
      </div>
    </div>
    <div class="footer">
      <p>❤我不相信所谓的命运，我只相信我自己。❤</p>
      <p>Copyright ©2017 Powered By Wnig 闽ICP备18014223号</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Message } from 'view-ui-plus'
import { useRouter } from 'vue-router'
import { $session } from '@/until/store'
import loginApi from '@/service/myApi/login/login'
import { useUserInfoStore } from "@/store/userInfo"

//定义路由
const router = useRouter()
const userInfoStore = useUserInfoStore()

let data = reactive({
  formInline: {
    username: "",
    password: ""
  },
  ruleInline: {
    username: [{ required: true, message: "请输入账号", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }]
  }
})
const formInline = ref()
const handleSubmit = ():void => {
  formInline.value.validate((valid:Boolean) => {
    if (valid) {
      let obj = {
        user_art: data.formInline.username,
        pwd_art: data.formInline.password
      }
      loginApi.login(obj).then((res)=> {
        if(res.code == 200) {
          $session.set('token', res.token)
          $session.set('user_art', res.username)
          userInfoStore.setToken(res.token)
          userInfoStore.setUserArt(res.username)
          Message.success({
            background: true,
            content: res.msg
          })
          setTimeout(()=> {
            router.go(-1)
          }, 1000)
        } else {
          Message.error({
            background: true,
            content: res.msg
          })
        }
      })
    }
  })
}
const enterHome = ():void => {
  router.push({
    path: '/'
  })
}
</script>


<style lang="scss" scoped>
.login.ignore {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  .login-con {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 250px;
    padding: 20px;
    border-radius: 5px;
    background: #fcfcfc;
    img {
      margin-bottom: 20px;
    }
    .ivu-form-item {
      width: 100%;
      margin-right: 0;
      margin-bottom: 25px;
    }
    .control-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 10px;
      button {
        margin: 0 5px;
      }
    }
  }
  .footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    color: #fff;
    line-height: 24px;
    text-align: center;
    font-size: 14px;
    z-index: 10;
  }
}
</style>
