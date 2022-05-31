//Load and initialise express

const express = require('express')
const app = express()

const PORT=3000

const getData=require('./models/pokemon.js')
const pokemon = getData()

//setup view engine
app.set('view engine', 'ejs') 
app.set('views', './Views')

app.get('/',(req,res)=>{
    
    res.send('<h1>Welcome to Pokemon App !! </h1>')
   
})

app.get('/pokemon',(req,res)=>{
    
    res.render('index',{
        pageTitle: 'Pokemon App', 
        pageHeader: 'See All the Pokemon',
        data: pokemon
    })
   
})

app.get('/pokemon/:id',(req,res)=>{
    res.send(req.params.id)
})

app.listen(PORT,()=>{
    console.log(`Running Server`)
})