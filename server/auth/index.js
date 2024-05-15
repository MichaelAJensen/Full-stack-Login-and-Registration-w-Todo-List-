import passport from "passport"
import session from "express-session"
import config from "../config.js"
import strategy from "./strategy.js"

const auth = (app) => {
    app.use(session(config.SESSION))
    app.use(passport.initialize())
    app.use(passport.authenticate("session"))
    strategy(passport)
}

export default auth