import store from "../redux/index.js"
import actions from "../redux/actions/index.js"
import axios from "axios"

const appURL = process.env.REACT_APP_APP_URL
const profileURL = process.env.REACT_APP_PROFILE_URL

const appCalls = {
    getuser: (_id) => axios
        .get(`${profileURL}/finduser/${_id}/user`)
        .then(res => {           
            return store.dispatch(actions.getUser(res.data))
        }),
    addTodo: (task, _id) => axios
        .post(`${appURL}/add/${_id}/todo`, { task })
        .then(res => store.dispatch(actions.getUserAfterAdd(res.data))),
    deleteATodo: (_id) => axios
        .post(`${appURL}/delete/${_id}/todo`, {})
        .then(res => store.dispatch(actions.getUserAfterDelete(res.data))),
    editATodo: (editTask, _id) => axios
        .post(`${appURL}/edit/${_id}/todo`, { editTask })
        .then(res => store.dispatch(actions.getUserAfterEdit(res.data))),
    editProfile: (editObj, _id) => axios
        .post(`${profileURL}/update/${_id}/user`, editObj)
        .then(res => {
            if (res.data.mesage) {
                return store.dispatch(actions.getAppMessage(res.data.message))
            } else {
                return store.dispatch(actions.getUserAfterUpdate(res.data))
            }
        }),
    deleteUser: (_id) => axios
        .post(`${profileURL}/delete/${_id}/user`, {})
        .then(res => store.dispatch(actions.cleanUpAfterUser()))
}

export default appCalls