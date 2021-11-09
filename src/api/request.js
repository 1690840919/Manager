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
  // 是否单个设置mock，否则使用全局mock设置
  const isMock = options.mock !== undefined?  options.mock : config.mock
  // 是否生产环境
  if(config.env === 'prod'){
    service.defaults.baseURL = config.baseAPI 
  // 开发环境
  }else{
    service.defaults.baseURL = isMock? config.mockAPI : config.baseAPI
  }
  return service(options)
}

export default request
