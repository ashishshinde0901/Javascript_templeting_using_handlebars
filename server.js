const express = require('express')
const todoroute = require('./routes/routes.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')
app.set('views','views')

app.use('/todos',todoroute)

app.listen(4409)
app.get('/',(req, res)=>{
    res.send(`<h1>Hello</h1>`)
})