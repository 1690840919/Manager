import { createStore } from 'vuex'
import storage from '../utils/storage'
const store = createStore({
  state:{
    userInfo:{
      name:'北土'
    }
  },
  mutations:{
    // 设置用户信息
    setUserInfo(store,data){
      store.userInfo = data
      storage.setItem('userInfo',data)
    }
  },
  actions:{

  }
})
export default store
