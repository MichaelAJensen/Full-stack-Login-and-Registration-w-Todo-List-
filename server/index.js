import express from "express"
import cors from "cors"
// import config from "./config.js"
import connect from "./db/index.js"
import auth from "./auth/index.js"
import routes from "./routes/index.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

auth(app)
app.use(routes)
connect(app)

export default app


