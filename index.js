require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./DB/connection')
const routes = require('./Routes/router')

const luxeServer = express()
luxeServer.use(cors())
luxeServer.use(express.json())
luxeServer.use(routes)

const PORT = 3000 || process.env.PORT

luxeServer.listen(PORT,()=>{
    console.log(`Luxe Fashion Server started at ${PORT} and waiting for client request !!`)
})


luxeServer.get("/",(req,res)=>{
    res.send(`<h1>Luxe Fashion Server started and waiting for client request !!</h1>`)
})
