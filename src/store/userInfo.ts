import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore({
  id: 'userInfo',
  state: () =>({
    userInfo: {
      token: '',
      user_art: '',
      author: '',
      author_url: '',
      blog_name: '',
      blog_sign: '',
      constellation: '',
      header_url: '',
      img_url: '',
      introduce: '',
      sign: '',
    },
  }),
  getters: {
    
  },
  actions: {
    setToken(data: string) {
      this.userInfo.token = data
    },
    setUserArt(data: string) {
      this.userInfo.user_art = data
    },
  },
})