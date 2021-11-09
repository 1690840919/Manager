import request from "./request";
// 登陆
export const loginRequest = (data) => {
  return request({
    url:'/user/login',
    method:'post',
    data,
    mock: true
  })
}
