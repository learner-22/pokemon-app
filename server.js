//Load and initialise express

const express = require('express')
const app = express()

const PORT=3000

const getData=require('./models/pokemon.js')
const pokemon = getData()

//Setting up Middleware
app.use((req,res,next)=>{
    console.log(`running Middleware function`)
    next()  
})
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Add css file 
app.use(express.static('./'))
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

app.get('/pokemon/new',(req,res)=>{
    res.render('newpokemon')
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


app.post('/pokemon', (req, res) =>{
  
    req.body.img = `http://img.pokemondb.net/artwork/${req.body.name}`
    pokemon.push(req.body)
    console.log(req.body)
    res.redirect('/pokemon')
})
app.listen(PORT,()=>{
    console.log(`Running Server`)
})