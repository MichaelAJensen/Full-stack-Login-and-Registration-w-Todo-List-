import axios from "axios"
import store from "../redux/index.js"
import actions from "../redux/actions/index.js"
const authURL = process.env.REACT_APP_AUTH_URL

const authCalls = {
    logout: () => axios
        .post(`${authURL}/logout`, {})
        .then(res => {
            sessionStorage.removeItem("token")
            store.dispatch(actions.logoutUser(res.data))
        }),
    login: (email, password) => axios
        .post(`${authURL}/login`, { email, password })
        .then(res => {
            if (res.data.message) {
                return store.dispatch(actions.getAuthMessage(res.data.message))
            } else {
                sessionStorage.setItem("token", res.data.token)
                return store.dispatch(actions.getLoginUser(res.data._id))
            }
        }),
    register: (user) => axios
        .post(`${authURL}/register`, user)
        .then(res => {
            if (res.data.message) {
                return store.dispatch(actions.getAuthMessage(res.data.message))
            } else {
                sessionStorage.setItem("token", res.data.token)
                return store.dispatch(actions.getLoginUser(res.data._id))
            }
        }),
    refresh: (token) => axios
        .post(`${authURL}/refresh`, { token: token })
        .then(res => {
            if (res.data.message) {
                // return store.dispatch(actions.getAppMessage(res.data.message))
                // console.log(res.data.message)
            } else if (res.data.auth) {
                //update redux store so isAuth is true and so id is stored
                //
                // console.log(res.data)
                store.dispatch(actions.getLoginUser(res.data.user._id))
                store.dispatch(actions.getUser(res.data.user))
            }
        })
}

export default authCalls