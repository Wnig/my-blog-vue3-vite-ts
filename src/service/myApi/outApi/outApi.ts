import http from '@/service/http'

const outApi = {
  location(params:object) { // 获取信息-需要权限
    return http.get('/ws/location/v1/ip', params)
  },
  weater(params: object) { // 获取信息-无需权限
    return http.get('/api', params)
  }
}
export default outApi