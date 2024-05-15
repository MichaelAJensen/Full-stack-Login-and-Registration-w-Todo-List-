import { Router } from "express"
import controllers from "../controllers/index.js"

const todoRoutes = Router()

todoRoutes
    .route("/add/:user/todo")
    .post(controllers.addTodo)
todoRoutes
    .route("/delete/:_id/todo")
    .post(controllers.deleteTodo)
todoRoutes
    .route("/edit/:_id/todo")
    .post(controllers.editTodo)


export default todoRoutes
