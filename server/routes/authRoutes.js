import { Router } from "express"
import controllers from "../controllers/index.js"

const authRoutes = Router()

authRoutes
    .route("/register")
    .post(controllers.register)
authRoutes
    .route("/login")
    .post(controllers.authenticate)
authRoutes
    .route("/logout")
    .post(controllers.logout)
authRoutes
    .route("/refresh")
    .post(controllers.validateJwt)    

export default authRoutes