const mongoose = require("mongoose")
url = "mongodb+srv://ahmed:ahmed@cluster0.y4qsdmp.mongodb.net/"


const connectDb = async () =>{
    try {
      await   mongoose.connect(process.env.MONGODB_URI)
      console.log("connectiuon successful to db");

    } catch (error) {
        console.error("Database not connected")
        process.exit(0)
    }
}

module.exports = connectDb