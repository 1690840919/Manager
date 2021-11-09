import config from "../config";

export default {
  getStorage(){
    return JSON.parse(window.localStorage.getItem(config.storageName) || '{}')
  },
  setStorage(val){
    window.localStorage.setItem(config.storageName,JSON.stringify(avl))
  },
  // 储存key-val
  setItem(key,val){
    let storage = this.getStorage()
    storage[key] = val
    this.setStorage(storage)
  },
  // 获取key对应的值
  getItem(key){
    return this.getStorage()[key]
  },
  // 删除某个key
  clearItem(key){
    const storage = this.getStorage()
    delete storage[key]
    this.setStorage(storage)
  },
  // 清空localStorage储存
  clearAll(){
    window.localStorage.clear()
  }
}
