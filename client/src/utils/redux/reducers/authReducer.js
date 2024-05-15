import { CLEAN_UP_AFTER_USER, CLOSE_LOGIN, GET_AUTH_MESSAGE, GET_LOGIN_USER, HANDLE_AUTH_INPUT, LOGOUT_USER, OPEN_LOGIN, TOGGLE_FORMS } from "../types.js"

const initialState = {
    // isAuth: true,
    isAuth: false,
    message: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password1: "",
    password2: "",
    isLogin: false,
    loginForm: true,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_USER:
            return {
                ...state,
                isAuth: false
            }
        case OPEN_LOGIN:
            return {
                ...state,
                isLogin: true,
                message: "",
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password1: "",
                password2: "",
                loginForm: true,
            }
        case CLOSE_LOGIN:
            return {
                ...state,
                isLogin: false,
                message: "",
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password1: "",
                password2: "",
                loginForm: true,

            }
        case TOGGLE_FORMS:
            return {
                ...state,
                isLogin: true,
                message: "",
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password1: "",
                password2: "",
                loginForm: !state.loginForm,

            }
        case HANDLE_AUTH_INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case GET_AUTH_MESSAGE:
            return {
                ...state,
                message: action.payload,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password1: "",
                password2: "",
            }
        case GET_LOGIN_USER:

            //let { firstName, lastName, email } = action.payload
            return {
                ...state,
                isAuth: true,
                isLogin: false,
                message: "",
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password1: "",
                password2: "",
                loginForm: true,
            }
        case CLEAN_UP_AFTER_USER:
            return {
                ...state,
                // isAuth: true,
                isAuth: false,
                message: "",
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password1: "",
                password2: "",
                isLogin: false,
                loginForm: true,

            }
        default:
            return state
    }
}


export default authReducer