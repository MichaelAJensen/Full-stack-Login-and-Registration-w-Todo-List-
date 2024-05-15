import authControllers from "./authControllers.js"
import userControllers from "./userControllers.js"
import todoControllers from "./todoControllers.js"

const controllers = {
    register: authControllers.registerUser,
    authenticate: authControllers.authenticateAUser,
    logout: authControllers.logoutAUser,
    validateJwt: authControllers.validateJwt,
    updateprofile: userControllers.updateAUser,
    addTodo: todoControllers.addATodo,
    deleteTodo: todoControllers.deleteATodo,
    editTodo: todoControllers.editATodo,
    deleteUser: userControllers.deleteAUser,
    getAUser: userControllers.getAUser,


}

export default controllers