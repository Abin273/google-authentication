const express = require('express');
require('dotenv').config()

const connectDb = require('./config/db')
const userRouter = require('./routes/userRoute')

const app  = express()

const PORT = process.env.PORT || 8080


connectDb()

app.use('/',userRouter)


app.listen(PORT,()=>{
    console.log(`Server startes on http://localhost:${PORT}`);
})