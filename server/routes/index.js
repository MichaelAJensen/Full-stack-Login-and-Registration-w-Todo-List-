import authRoutes from "./authRoutes.js"
import { Router } from "express"
import userRoutes from "./userRoutes.js"
import todoRoutes from "./todoRoutes.js"

const routes = Router()

routes.use("/", authRoutes)
routes.use("/profile", userRoutes)
routes.use("/app", todoRoutes)


export default routes