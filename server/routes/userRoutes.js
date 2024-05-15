import { Router } from "express"
import controllers from "../controllers/index.js"

const userRoutes = Router()

userRoutes
    .route("/update/:_id/user")
    .post(controllers.updateprofile)
userRoutes
    .route("/delete/:_id/user")
    .post(controllers.deleteUser)
userRoutes
    .route("/finduser/:_id/user")
    .get(controllers.getAUser)
export default userRoutes