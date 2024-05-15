import appActions from "./appActions.js"
import authActions from "./authActions.js"

const actions = {
    getUser: appActions.getUser,
    handleAppInput: appActions.handleAppInput,
    getUserAfterAdd: appActions.getUserAfterAdd,
    prepareToEdit: appActions.prepareToEdit,
    getUserAfterDelete: appActions.getUserAfterDelete,
    getUserAfterEdit: appActions.getUserAfterEdit,
    resizeWindow: appActions.resizeWindow,
    openProfileModal: appActions.openProfileModal,
    closeProfileModal: appActions.closeProfileModal,
    logoutUser: authActions.logoutUser,
    prepareToEditProfile: appActions.prepareToEditProfile,
    getUserAfterUpdate: appActions.getUserAfterUpdate,
    openHamburger: appActions.openHamburger,
    closeHamburger: appActions.closeHamburger,
    getAppMessage: appActions.getAppMessage,
    openLogin: authActions.openLogin,
    closeLogin: authActions.closeLogin,
    toggleForm: authActions.toggleForms,
    handleAuthInput: authActions.handleAuthInput,
    getAuthMessage: authActions.getAuthMessage,
    getLoginUser: authActions.getLoginUser,
    cleanUpAfterUser: appActions.cleanUpAfterUser,

}

export default actions