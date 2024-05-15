import chai, { assert } from "chai"
import chaiHttp from "chai-http"
import app from "../index.js"
chai.use(chaiHttp)

suite("Should be able to update a user", () => {

    let testUserOne = {
        firstName: "Anthony",
        lastName: "Le Tigre",
        email: "ttiger@yahoo.com",
        password1: "goldfish",
        password2: "goldfish"
    }

    // test("I should be able to update a user", (done) => {
    //     chai
    //         .request(app)
    //         .post("/profile/update/$2a$10$obIPO7o.SXV5E8SQJvQpCOGlEGDCT8ZQDQ0mo0WomVQNeXP//vlJq /user")
    //         .send(testUserOne)
    //         .end((err, res) => {
    //             console.log("body", res.body)
    //             assert.equal(res.status, 200)
    //             done()
    //         })
    // })
    // test("I should be able to delete a user", (done) => {
    //     chai
    //         .request(app)
    //         .post("/profile/delete/ /user")
    //         .send({})
    //         .end((err, res) => {
    //             console.log(res.body)
    //             assert.equal(res.status, 200)
    //             done()
    //         })
    // })
    // testUserOne("I should be able to get my user", (done) => {
    //     chai
    //         .request(app)
    //         .get("/profile/finduser/ /user")
    //         .end((err, res) => {
    //             console.log(res.body)
    //             assert.equal(res.status, 200)
    //                 .end()
    //         })
    // })
})