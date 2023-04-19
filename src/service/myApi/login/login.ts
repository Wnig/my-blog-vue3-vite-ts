import http from '@/service/http'
import * as T from './types'

const loginApi: T.ILoginApi = {
    login(params){
        return http.post('/myApi/index.php?action=login', params)
    }

}
export default loginApi