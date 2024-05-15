import chai, { assert } from "chai"
import chaiHttp from "chai-http"
import app from "../index.js"
chai.use(chaiHttp)

suite("Should be able to register a user", () => {

    let testUserOne = {
        firstName: "Tony",
        lastName: "The Tiger",
        email: "ttiger@gmail.com",
        password1: "password",
        password2: "password"
    }

    // test("I should be able to create a user", (done) => {
    //     chai
    //         .request(app)
    //         .post("/register")
    //         .send(testUserOne)
    //         .end((err, res) => {
    //             console.log(res.body)
    //             assert.equal(res.status, 200)
    //             done()
    //         })
    // })
    // test("I should be able to login a user", (done) => {
    //     chai
    //         .request(app)
    //         .post("/login")
    //         .send({ email: "ttiger@gmail.com", password: "password" })
    //         .end((err, res) => {
    //             console.log(res.body)
    //             assert.equal(res.status, 200)
    //             done()
    //         })
    // })
//     test("I should be able to logout user", (done) => {
//         chai
//             .request(app)
//             .post("/logout")
//             .send({})
//             .end((err, res) => {
//                 console.log(res.body)
//                 assert.equal(res.status, 200)
//                 done()
//             })
//     })
})
