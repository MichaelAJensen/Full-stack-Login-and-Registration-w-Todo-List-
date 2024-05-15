import { CLOSE_PROFILE_MODAL, GET_USER, GET_USER_AFTER_ADD, GET_USER_AFTER_DELETE, GET_USER_AFTER_EDIT, GET_USER_AFTER_UPDATE, HANDLE_APP_INPUT, LOGOUT_USER, OPEN_HAMBURGER, OPEN_PROFILE_MODAL, PREPARE_TO_EDIT, PREPARE_TO_EDIT_PROFILE, RESIZE_WINDOW, CLOSE_HAMBURGER, GET_APP_MESSAGE, GET_LOGIN_USER, CLEAN_UP_AFTER_USER } from "../types.js"

const initialState = {
    user: "",
    // user:"660daed0f193f9d01f03a9b5",
    todos: [],
    email: "",
    firstName: "",
    lastName: "",
    task: "",
    editTask: "",
    editId: "",
    isEdit: false,
    window: window.innerWidth,
    profileModal: false,
    message: "",
    editFirstName: "",
    editLastName: "",
    editEmail: "",
    password1: "",
    password2: "",
    isProfileEdit: false,
    openHamburger: false,
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
           
            return {
                ...state,
                todos: action.payload.todos,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email
            }
        case HANDLE_APP_INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case GET_USER_AFTER_ADD:
            return {
                ...state,
                todos: action.payload.todos,
                task: ""
            }
        case PREPARE_TO_EDIT:
            return {
                ...state,
                isEdit: true,
                editId: action.payload._id,
                editTask: action.payload.task
            }
        case GET_USER_AFTER_DELETE:
            return {
                ...state,
                todos: action.payload.todos
            }
        case GET_USER_AFTER_EDIT:
            return {
                ...state,
                todos: action.payload.todos,
                editId: "",
                editTask: "",
                isEdit: false
            }
        case RESIZE_WINDOW:
            // console.log("here ", window.innerWidth)
            return {
                ...state,
                window: window.innerWidth
            }
        case OPEN_PROFILE_MODAL:
            return {
                ...state,
                profileModal: true,
                password1: "",
                password2: "",
                message: ""
            }
        case CLOSE_PROFILE_MODAL:
            return {
                ...state,
                profileModal: false,
                password1: "",
                password2: "",
                message: ""
            }
        case LOGOUT_USER:
            return {
                ...state,
                user: "",
                todos: [],
                email: "",
                firstName: "",
                lastName: "",
            }
        case PREPARE_TO_EDIT_PROFILE:
            return {
                ...state,
                isProfileEdit: true,
                editFirstName: action.payload.firstName,
                editLastName: action.payload.lastName,
                editEmail: action.payload.email,
            }
        case GET_USER_AFTER_UPDATE:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                message: "",
                editFirstName: "",
                editLastName: "",
                editEmail: "",
                password1: "",
                password2: "",
                isProfileEdit: false
            }
        case OPEN_HAMBURGER:
            return {
                ...state,
                openHamburger: true
            }
        case CLOSE_HAMBURGER:
            return {
                ...state,
                openHamburger: false
            }
        case GET_APP_MESSAGE:
            return {
                ...state,
                password1: "",
                password2: "",
                message: action.payload
            }
        case GET_LOGIN_USER:
            return {
                ...state,
                user: action.payload
            } 
        case CLEAN_UP_AFTER_USER:
            return {
                ...state,
                user: "",
                // user:"660daed0f193f9d01f03a9b5",
                todos: [],
                email: "",
                firstName: "",
                lastName: "",
                task: "",
                editTask: "",
                editId: "",
                isEdit: false,
                window: window.innerWidth,
                profileModal: false,
                message: "",
                editFirstName: "",
                editLastName: "",
                editEmail: "",
                password1: "",
                password2: "",
                isProfileEdit: false,
                openHamburger: false,
            }       
        default:
            return state
    }
}


export default appReducer