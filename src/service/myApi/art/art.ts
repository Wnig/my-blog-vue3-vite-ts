import http from '@/service/http'
import * as T from './types'

const artApi: T.IArtApi = {
  artList(params) { // 获取文章列表
    return http.post('/myApi/index.php?action=art-list', params)
  },
  artsList(params) { // 获取文章列表
    return http.post('/myApi/index.php?action=arts-list', params)
  },
  artDetail(params) { // 获取文章详情
    return http.post('/myApi/index.php?action=art-detail', params)
  },
}
export default artApi