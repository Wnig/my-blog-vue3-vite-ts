import http from '@/service/http'

const userInfoApi = {
  userInfo() { // 获取信息-需要权限
    return http.post('/myApi/index.php?action=get-info')
  },
  blogInfo() { // 获取信息-无需权限
    return http.post('/myApi/index.php?action=get-blog-info')
  }
}
export default userInfoApi