import { request } from "./request"

// 获取登录信息
export function getLogin(loginForm) {
  return request.post('/authorizations', loginForm)
}

// 获取用户信息
export function getUserInfo() {
  return request.get('/user/profile')
}

// 获取频道列表
export function getChannel() {
  return request.get('/channels')
}

// 提交表单
export function fetchArticle(data) {
  return request.post('/mp/articles?draft=false',data)
}

// 获取文章列表
export function getArticleList(params) {
  return request.get('/mp/articles', {params})
}

// 删除文章
export function delArticle(id) {
  return request.delete(`/mp/articles/${id}`)
}

// 获取文章详情
export function getArticleById(id) {
  return request.get(`/mp/articles/${id}`)
}

// 更新文章
export function updateArticle(data) {
  return request.put(`/mp/articles/${data.id}?draft=false`,data)
}