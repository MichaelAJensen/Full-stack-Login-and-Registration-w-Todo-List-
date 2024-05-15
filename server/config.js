import dotenv from "dotenv"
import MongoStore from "connect-mongo"
import { ExtractJwt } from "passport-jwt"

if (process.env.NODE_ENV !== "production") {
    dotenv.config()
}

const config = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    SESSION: {
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({mongoUrl:process.env.MONGO_URI})
    },
    jwtConfig: {
        jwtFromRequest: ExtractJwt.fromBodyField("token"),//where the token will be extracted from req.body under the key of "token"
        secretOrKey: process.env.JWT_SECRET,
    }
}

export default config

