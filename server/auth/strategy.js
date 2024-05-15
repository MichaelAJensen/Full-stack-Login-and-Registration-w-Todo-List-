import { Strategy } from "passport-local"
import bcrypt from "bcryptjs"
import db from "../db/models/index.js"
import { Strategy as JwtStrategy } from "passport-jwt"
import config from "../config.js"

const strategy = (passport) => {
    console.log("strategy")
    passport.use(
        new Strategy({ usernameField: "email" }, (email, password, done) => {
            db.User
                .findOne({ email })
                .then(data => {
                    if (!data) {
                        return done(null, false, { message: "user not found" })
                    }
                    if (!bcrypt.compareSync(password, data.password)) {
                        return done(null, false, { message: "password or username does not match our records" })
                    }
                    console.log("passwords match")
                    let user = {}
                    user._id = data._id
                    user.firstName = data.firstName
                    user.lastName = data.lastName
                    user.email = data.email
                    user.todos = data.todos
                    console.log("from strategy", user)
                    return done(null, user)
                })

        }))

    passport.use(
        new JwtStrategy(config.jwtConfig, (jwt_payload, done) => {
            db.User
                .findById(jwt_payload._id)
                .populate({ path: "todos" })
                .exec()
                .then(user => {
                    if (user) {
                        console.log("jwt success")
                        return done(null, user)
                    } else {
                        console.log("jwt failed")
                        return done(null, false, { message: "jwt auth failed" })
                    }
                }).catch(err => done(err, false))
        }))


    passport.serializeUser((user, done) => {
        return done(null, user._id)
    })
    passport.deserializeUser((id, done) => {
        db.User
            .findById({ _id: id })
            .then(data => {
                return done(err, data)
            })
    })
}

export default strategy