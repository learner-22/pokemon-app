//Load and initialise express

const express = require('express')
const app = express()

const PORT=3000

app.get('/',(req,res)=>{
    
    res.send('<h1>Welcome to Pokemon App !! </h1>')
   
})
app.listen(PORT,()=>{
    console.log(`Running Server`)
})