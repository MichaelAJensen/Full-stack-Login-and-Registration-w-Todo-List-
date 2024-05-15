import appReducer from "./appReducer.js"
import authReducer from "./authReducer.js"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer
})

export default rootReducer