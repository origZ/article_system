// token封装
export function getToken(key) {
  return localStorage.getItem(key)
}

export function setToken(key, value) {
  localStorage.setItem(key, value)
}

export function removeToken(key) {
  localStorage.removeItem(key)
}