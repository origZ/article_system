import axios from "axios";
import { getToken, removeToken } from "@/utils/token";
import { route } from "@/router";


const request = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use((config) => {
  // 请求头注入token
  const token = getToken('token_key')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  // 监控401
  if (error.response.status === 401) {
    removeToken('token_key')
    route.navigate('/login')
    window.location.reload()
  }
  return Promise.reject(error)
})

export {request}