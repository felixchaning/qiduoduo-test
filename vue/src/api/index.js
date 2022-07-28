// 导入axios实例
import httpRequest from '../request/index'

// 获取用户信息
export function Login(param) {
  return httpRequest({
    url: '/user/login',
    method: 'post',
    data: param,
  })
}

export function Signup(param) {
  return httpRequest({
    url: '/user/signup',
    method: 'post',
    data: param,
  })
}
