import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: to => "/Home"
  },
  {
    path: '/Home',
    name: 'home',
    component: () => import('@/views/Home/index.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/Login',
    name: 'login',
    component: () => import('@/views/Login/index.vue'), 
  },
  {
    path: '/Blog',
    component: () => import('@/views/Blog/index.vue'), 
    redirect: to => "/Blog/index",
    children: [{
      path: '/Blog/index',
      name: 'blog',
      component: () => import('@/views/Blog/Blog.vue'), 
    }, {
      path: '/Blog/Detail',
      name: 'detail',
      component: () => import('@/views/Blog/Detail.vue'), 
    }, {
      path: '/Archives',
      name: 'archives',
      component: () => import('@/views/Archives/index.vue'), 
    },{
      path: '/Photograph',
      name: 'photograph',
      component: () => import('@/views/Photograph/index.vue'), 
    }],
  },
  {
    path: '/Resume',
    name: 'resume',
    component: () => import('@/views/Resume/index.vue'), 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
