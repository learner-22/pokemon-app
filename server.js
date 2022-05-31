//Load and initialise express

const express = require('express')
const app = express()

const PORT=3000

const getData=require('./models/pokemon.js')
const pokemon = getData()

app.get('/',(req,res)=>{
    
    res.send('<h1>Welcome to Pokemon App !! </h1>')
   
})

app.get('/pokemon',(req,res)=>{
    
    res.send(pokemon)
   
})
app.listen(PORT,()=>{
    console.log(`Running Server`)
})