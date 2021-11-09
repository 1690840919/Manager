const env = import.meta.env.MODE || 'prod'
const envConfig = {
  development:{
    baseAPI:'',
    mockAPI:'https://www.fastmock.site/mock/ce20293fb3a485b3b8309f303707f4c9/api'
  },
  test:{
    baseAPI:'',
    mockAPI:'https://www.fastmock.site/mock/ce20293fb3a485b3b8309f303707f4c9/api'
  },
  production:{
    baseAPI:'',
    mockAPI:'https://www.fastmock.site/mock/ce20293fb3a485b3b8309f303707f4c9/api'
  },
}

export default {
  env,
  storageName:'managerStorage',
  mock:true, // 全局开启mock数据
  ...envConfig[env]
}
