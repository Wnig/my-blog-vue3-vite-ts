import http from '@/service/http'

const counterApi = {
  counter(){
    return http.post('/myApi/index.php?action=counter')
  }
}
export default counterApi