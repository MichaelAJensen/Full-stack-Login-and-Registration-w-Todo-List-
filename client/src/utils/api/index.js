import appCalls from "./appCalls.js"
import authCalls from "./authCalls.js"

const API = {
    getUser: appCalls.getuser,
    addTodo: appCalls.addTodo,
    deleteTodo: appCalls.deleteATodo,
    editTodo: appCalls.editATodo,
    logout: authCalls.logout,
    editProfile: appCalls.editProfile,
    login: authCalls.login,
    register: authCalls.register, 
    deleteUser: appCalls.deleteUser, 
    refresh: authCalls.refresh,
}

export default API