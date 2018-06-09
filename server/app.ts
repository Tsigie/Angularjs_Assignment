import * as express from "express";
import * as http from "http"
import * as body from "body-parser"
import * as path from "path"
import { Request, Response } from "express";

let app = express()
let server = http.createServer(app)
app.use(body.json())

app.use("/.dist", express.static(path.join(__dirname, "../client/.dist")))
app.use("/index", express.static(path.join(__dirname, "../client/index.html")))

app.use("*", (req:Request, res:Response) => {
    console.log("got your request")
    return res.json("hello")
})
console.log('hi')


server.listen(3333)