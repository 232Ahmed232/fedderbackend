const express = require("express")
require("dotenv").config()

const connectDb = require("./utils/db.js")
const app = express()


const authRoute = require("./router/auth_router.js")
const contactRoute = require("./router/contact_route.js")
const itemRouter = require("./router/item_route.js")

const errorMiddlewear = require("./middlewears/error_middlewear.js")
const cors = require("cors")


const corsOption = {
    origin:"https://fedderfrontend.vercel.app",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credential:true
}

app.use(cors(corsOption))


app.use(express.json())
app.use("api/auth", authRoute)
app.use("api/contact", contactRoute)
app.use("api/template",itemRouter)


app.use(errorMiddlewear)
connectDb().then(() => {
    app.listen(3000, () => { console.log("server is running"); })
})
