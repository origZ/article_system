import { request } from "./request"

// 获取登录信息
export function getLogin(loginForm) {
  return request.post('/authorizations', loginForm)
}