import mongoose from "mongoose"

const todoSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        task: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        timeseries: true
    }
)

const Todo = mongoose.model("Todo", todoSchema)

export default Todo

