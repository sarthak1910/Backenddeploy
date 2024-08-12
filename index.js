const express = require('express')
const app = express()
require('dotenv').config()
// for production we have to install dotenv
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
  res.send("sarthak21verma")
})
app.get('/login',(req,res)=>{
  res.send("<h1>Please login</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})