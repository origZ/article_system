import { getLogin, getUserInfo} from "@/service";
import { getToken, removeToken, setToken } from "@/utils/token";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 获取登录信息
export const fetchLogin = createAsyncThunk('loginForm', async (loginForm, {dispatch}) => {
  await getLogin(loginForm).then((res) => {dispatch(changeToken(res.data.token))})
})
// 获取用户信息
export const fetchUserInfo = createAsyncThunk('loginForm', async (arg, {dispatch}) => {
  getUserInfo().then((res) => {
    dispatch(changeUserInfo(res.data))
  })
})



const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: getToken('token_key') || '',
    userInfo: {},
  },
  reducers: {
    changeToken(state, {payload}) {
      setToken('token_key', payload)
      state.token = payload
    },
    changeUserInfo(state, {payload}) {
      state.userInfo = payload
    },
    clearUserInfo(state) {
      state.token = ''
      state.userInfo = {}
      removeToken('token_key')
    }
  }
})

export const userReducer = userSlice.reducer
export const {changeToken, changeUserInfo, clearUserInfo} = userSlice.actions