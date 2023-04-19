import http from '@/service/http'
import * as T from './types'

const photoApi: T.IPhotoApi = {
  getBlogPhotoInfo(params) {
    return http.post('/myApi/index.php?action=get-blog-photo-info', params)
  },
}
export default photoApi