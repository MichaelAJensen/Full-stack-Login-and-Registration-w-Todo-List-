import db from "../db/models/index.js"
import bcrypt from "bcryptjs"

const userControllers = {
    updateAUser: (req, res) => {
        let { firstName, lastName, email, password1, password2 } = req.body
        let { _id } = req.params
        //find out if another user has that email 
        if (password1 !== "" && password1 !== password2) {
            return res.json({ message: "Passwords do not match" })
        }
        db
            .User
            .findOne({ email })
            .then(data => {
                if (data && data._id.toString() !== _id) {
                    return res.json({ message: "That email is already registered to the database" })
                } else {
                    //Go ahead and update
                    let changedUser = {}
                    changedUser.email = email
                    if (password1 !== "") {
                        let password = bcrypt.hashSync(password1, 10)
                        changedUser.password = password
                    }
                    if (firstName !== "") {
                        changedUser.firstName = firstName
                    }
                    if (lastName !== "") {
                        changedUser.lastName = lastName
                    }
                    db
                        .User
                        .findByIdAndUpdate({ _id }, changedUser, { new: true })
                        .populate({ path: "todos" })
                        .exec()
                        .then(data => req.login(data, (err) => {
                            if (err) {
                                console.log(err)
                            } else {
                                let user = {}
                                user.firstName = data.firstName
                                user.lastName = data.lastName
                                user.email = data.email
                                user._id = data._id
                                user.todos = data.todos
                                return res.json(user)
                            }
                        }))
                }
            })

    },
    deleteAUser: (req, res) => {
        let { _id } = req.params
        db
            .Todo
            .deleteMany({ userId: _id })
            .then(() => {
                db
                    .User
                    .findByIdAndDelete({ _id })
                    .then(data => {
                        req.logout(data, (err) => {
                            if (err) {
                                return next(err)
                            } else {
                                res.json({ message: "You are logged out" })
                            }
                        })
                    })
            })
    },
    getAUser: (req, res) => {
        let { _id } = req.params
        db
            .User
            .findById({ _id })
            .populate({ path: "todos" })
            .exec()
            .then(data => {
                req.login(data, (err) => {
                    if (err) {
                        console.log(err)
                    }
                    let cleanData = {}
                    cleanData.firstName = data.firstName
                    cleanData.lastName = data.lastName
                    cleanData.email = data.email
                    cleanData.todos = data.todos
                    res.json(cleanData)
                })
            })
            .catch(err => console.log(err))
    }
}

export default userControllers  