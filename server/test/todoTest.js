import chai, { assert } from "chai"
import chaiHttp from "chai-http"
import app from "../index.js"
chai.use(chaiHttp)

suite("I should be able to micromanage my todo", () => {

   
    let userId = "660daed0f193f9d01f03a9b5"
    test("I can find something to do!", (done)=>{
        chai.request(app)
        .post(`/app/add/${userId}/todo`)
        .send({task:"feed bird"})
        .end((err, res)=>{
           console.log(res.body)
            assert.equal(res.status, 200)
            done()
        })
    })
    // test("I can delete a todo item", (done)=> {
    //     chai
    //     .request(app)
    //     .post("/app/ /todos")
    //     .send({})
    //     .end((err, res) => {
    //         console.log(res.body)
    //         assert.equal(res.status, 200)
    //         done()
    //     })
    // })
    // test("I should be able to update a task", (done) => {
    //     chai
    //         .request(app)
    //         .post("/app/ / todo")
    //         .send({ editTask: "give a birs a bath" })
    //         .end((err, res) => {
    //             console.log(res.body)
    //             assert.equal(res.status, 200)
    //             done()
    //         })
    // })
})