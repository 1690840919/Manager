import axios from 'axios'
import config from '../config/index'

const service = axios.create({
  baseURL:config.baseAPI,
  timeout:8000
})
// 请求拦截
service.interceptors.request.use((req)=>{
  return req
})

// 响应拦截
service.interceptors.response.use((res)=>{
  return res
})
// 请求函数,额外可做处理
const request = (options) => {
  return service(options)
}

export default request
