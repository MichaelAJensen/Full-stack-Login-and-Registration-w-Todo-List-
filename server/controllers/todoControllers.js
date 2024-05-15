import db from "../db/models/index.js"


const todoControllers = {
    addATodo: (req, res) => {
        let { task } = req.body
        let { user } = req.params
        let newTask = new db.Todo({ task, userId: user })
        newTask.save()
            .then(data => {
                db
                    .User
                    .findByIdAndUpdate({ _id: data.userId }, { $push: { "todos": data._id } }, { new: true })
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
                    }

                    )
                    .catch(err => console.log(err))
            }).catch(err => console.log(err))
    },
    deleteATodo: (req, res) => {
        let { _id } = req.params
        db
            .Todo
            .findByIdAndDelete({ _id })
            .then(data => {
                db
                    .User
                    .findByIdAndUpdate({ _id: data.userId }, { $pull: { "todos": data._id } }, { new: true })
                    .populate({ path: "todos" })
                    .exec()
                    .then(data => res.json(data))
                    .catch(err => console.log(err))
            }).catch(err => console.log(err))
    },
    editATodo: (req, res) => {
        let { editTask } = req.body
        let { _id } = req.params
        db
            .Todo
            .findByIdAndUpdate({ _id }, { task: editTask }, { new: true })
            .then(data => {
                db
                    .User
                    .findById({ _id: data.userId })
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
            }).catch(err => console.log(err))
    }
}

export default todoControllers