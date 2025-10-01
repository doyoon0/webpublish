import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false
    },
    reducers: {
        login(state, action) {
            state.isLogin = !state.isLogin;
            const { userId } = action.payload;
            const loginInfo = {"token": "12344453", "userId": userId};
            localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
        },

        logout(state) {
            state.isLogin = !state.isLogin;
            localStorage.removeItem("loginInfo");
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
