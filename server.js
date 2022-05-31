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

let image =''
app.get('/pokemon/:id',(req,res)=>{
//   res.send(req.params.id)
   console.log(Number(req.params.id))
   console.log( pokemon[Number(req.params.id)].img.concat('.jpg') )
    res.render('show',{
    pageTitle: 'Pokemon App', 
    pageHeader: " Gotta Catch 'Em All'",
    data: pokemon[Number(req.params.id)],
    image : pokemon[Number(req.params.id)].img.concat('.jpg')
})
})

app.listen(PORT,()=>{
    console.log(`Running Server`)
})