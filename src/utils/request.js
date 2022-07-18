import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

service.interceptors.request.use((config) => {
  // NOTE: icode 有限期限 30 天, 過期後需重新獲取
  // https://coding.imooc.com/learn/list/577.html
  config.headers.icode = '4C293497E36C0437'
  return config
})

export default service
