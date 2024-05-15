import { CLEAN_UP_AFTER_USER, CLOSE_HAMBURGER, CLOSE_PROFILE_MODAL, GET_APP_MESSAGE, GET_USER, GET_USER_AFTER_ADD, GET_USER_AFTER_DELETE, GET_USER_AFTER_EDIT, GET_USER_AFTER_UPDATE, HANDLE_APP_INPUT, OPEN_HAMBURGER, OPEN_PROFILE_MODAL, PREPARE_TO_EDIT, PREPARE_TO_EDIT_PROFILE, RESIZE_WINDOW } from "../types.js"

const appActions = {
    getUser: (user) => {
        return {
            type: GET_USER,
            payload: user
        }
    },
    handleAppInput: (input) => {
        return {
            type: HANDLE_APP_INPUT,
            payload: input
        }
    },
    getUserAfterAdd: (user) => {
        return {
            type: GET_USER_AFTER_ADD,
            payload: user
        }
    },
    prepareToEdit: (todo) => {
        return {
            type: PREPARE_TO_EDIT,
            payload: todo
        }
    },
    getUserAfterDelete: (user) => {
        return {
            type: GET_USER_AFTER_DELETE,
            payload: user
        }
    },
    getUserAfterEdit: (user) => {
        return {
            type: GET_USER_AFTER_EDIT,
            payload: user
        }
    },
    resizeWindow: () => {
        return {
            type: RESIZE_WINDOW
        }
    },
    openProfileModal: () => {
        return {
            type: OPEN_PROFILE_MODAL
        }
    },
    closeProfileModal: () => {
        return {
            type: CLOSE_PROFILE_MODAL
        }
    },
    prepareToEditProfile: (user) => {
        return {
            type: PREPARE_TO_EDIT_PROFILE,
            payload: user
        }
    },
    getUserAfterUpdate: (user) => {
        return {
            type: GET_USER_AFTER_UPDATE,
            payload: user
        }
    },
    openHamburger: () => {
        return {
            type: OPEN_HAMBURGER
        }
    },
    closeHamburger: () => {
        return {
            type: CLOSE_HAMBURGER
        }
    },
    getAppMessage: (message) => {
        return {
            type: GET_APP_MESSAGE,
            payload: message
        }
    },
    cleanUpAfterUser: ()=> {
        return {
            type: CLEAN_UP_AFTER_USER
        }
    }
}

export default appActions