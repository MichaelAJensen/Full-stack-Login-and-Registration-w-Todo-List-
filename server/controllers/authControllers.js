import db from "../db/models/index.js"
import bcrypt from "bcryptjs"
import passport from "passport"
import jwt from "jsonwebtoken"

const authControllers = {
    registerUser: (req, res) => {
        console.log("body", req.body)
        let { password1, password2, email, firstName, lastName } = req.body
        if (password1 !== password2) {
            return res.json({ message: "Your passwords do not match" })
        }
        db.User
            .findOne({ email })
            .then(data => {
                if (data) {
                    return res.json({ message: "User is already registered to database, please login" })
                }
                let password = bcrypt.hashSync(password1, 10)
                let newUser = new db.User({ firstName, lastName, email, password })

                newUser
                    .save()
                    .then(data => {
                        req.login(data, (err) => {
                            console.log("this is inside register a user in the login", data)
                            if (err) {
                                console.log(err)
                            } else {
                                // let user = {}
                                // user.firstName = data.firstName
                                // user.lastName = data.lastName
                                // user.email = data.email
                                // user._id = data._id
                                // user.todos = data.todos
                                const token = jwt.sign({ _id: data._id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 })
                                return res.json({ _id: data._id, token: token })
                            }
                        })
                    })
            })
    },
    authenticateAUser: (req, res, next) => {
        console.log(req.body)
        passport.authenticate("local", (err, user, info) => {
            if (err) {
                console.log(err)
            }
            if (!user) {

                return res.json({ message: "Invalid credentials" })
            } else {
                req.login(user, (err) => {
                    if (err) {
                        console.log(err)
                    }
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 })
                    return res.json({ _id: user._id, token: token })
                })
            }
        })(req, res, next)
    },
    logoutAUser: (req, res, next) => {
        req.logout((err) => {
            if (err) {
                return next(err)
            } else {
                res.json({ message: "You are logged out" })
            }
        })
    },
    validateJwt: (req, res) => {
        passport.authenticate("jwt", { session: false }, (err, user, info) => {
            if (err) {
                console.log(err)
                let data = {
                    auth: false,
                    err: err
                }
                return res.status(500).json(data)
            }
            if (!user) {
                let data = {
                    auth: false,
                    message: "unauthorized"
                }
                return res.status(500).json(data)
            }
            let data = {
                auth: true,
                user: user
            }
            return res.status(200).json(data)
        })(req, res)
    }
}

export default authControllers

