import { request } from "@/service";
import { getToken, setToken } from "@/utils/token";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchLogin = createAsyncThunk('loginForm', (loginForm, {dispatch}) => {
  request.post('/authorizations', loginForm).then((res) => {
    dispatch(changeToken(res.data.token))
  })
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: getToken('token_key') || ''
  },
  reducers: {
    changeToken(state, {payload}) {
      state.token = payload
      setToken('token_key', payload)
    }
  }
})

export const userReducer = userSlice.reducer
export const {changeToken} = userSlice.actions