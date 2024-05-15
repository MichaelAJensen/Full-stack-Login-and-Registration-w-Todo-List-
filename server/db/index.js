import config from "../config.js"
import mongoose from "mongoose"

const connect = (app) => {
    mongoose
        .connect(config.MONGO_URI)
        .then(() => {
            app
                .listen(config.PORT, () => console.log("Mr Zaid's tiny ears listen"))
        })
        .catch(err => console.log(err))
}
export default connect