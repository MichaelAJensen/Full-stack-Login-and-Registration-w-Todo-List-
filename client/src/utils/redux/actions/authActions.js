import { LOGOUT_USER, OPEN_LOGIN, CLOSE_LOGIN, TOGGLE_FORMS, HANDLE_AUTH_INPUT, GET_AUTH_MESSAGE, GET_LOGIN_USER } from "../types.js"

const authActions = {
    logoutUser: () => {
        return {
            type: LOGOUT_USER
        }
    },
    openLogin: () => {
        return {
            type: OPEN_LOGIN
        }
    },
    closeLogin: () => {
        return {
            type: CLOSE_LOGIN
        }
    },
    toggleForms: () => {
        return {
            type: TOGGLE_FORMS
        }
    },
    handleAuthInput: (input) => {
        return {
            type: HANDLE_AUTH_INPUT,
            payload: input
        }
    },
    getAuthMessage: (message) => {
        return {
            type: GET_AUTH_MESSAGE,
            payload: message
        }
    },
    getLoginUser: (_id) => {
        return {
            type: GET_LOGIN_USER,
            payload: _id
        }
    }
}

export default authActions