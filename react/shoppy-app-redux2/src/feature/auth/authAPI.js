import { } from './authSlice.js'

export const getLogin = (formData) => async (dispatch) => {
    if (validateFormCheck()) {
        if ("test" === formData.id && "1234" === formData.pwd) {
            dispatch(login({"userId": formData.id}));
            return true;
        }
    }
    return false;
}

export const getLogout = () => async(dispatch) => {
    dispatch(logout());
    return true;
}
