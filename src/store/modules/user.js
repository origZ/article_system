import { getLogin } from "@/service";
import { getToken, setToken } from "@/utils/token";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchLogin = createAsyncThunk('loginForm', async (loginForm, {dispatch}) => {
  await getLogin(loginForm).then((res) => {dispatch(changeToken(res.data.token))})
})



const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: getToken('token_key') || '',
  },
  reducers: {
    changeToken(state, {payload}) {
      setToken('token_key', payload)
      state.token = payload
    }
  }
})

export const userReducer = userSlice.reducer
export const {changeToken} = userSlice.actions