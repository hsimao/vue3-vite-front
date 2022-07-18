import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 資料請求攔截器
service.interceptors.request.use((config) => {
  // NOTE: icode 有限期限 30 天, 過期後需重新獲取
  // https://coding.imooc.com/learn/list/577.html
  config.headers.icode = '4C293497E36C0437'
  return config
})

// 資料回應攔截器
service.interceptors.response.use((response) => {
  const { success, message, data } = response.data
  if (success) return data
  return Promise.reject(new Error(message))
})

export default service
