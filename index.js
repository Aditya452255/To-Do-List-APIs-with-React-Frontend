const express = require('express');
const app=express();
const tasks= require(`./router/tasks`)
const connectDB = require(`./db/connect`)
require(`dotenv`).config()

app.use(express.static(`./public`))
//middleware

app.use(express.json())


//routes

app.get(`/`,(req,res)=>{
    res.send("Task manager intialized")
})
const port=3000;

const start = async ()=>{
try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port,console.log(`server listening on http://localhost:${port}`))
} catch (error) {
    console.log(error)
}
}

app.use(`/api/v1/tasks`,tasks)

start()