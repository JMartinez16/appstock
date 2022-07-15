const express =require('express');
const app = express()

app.get('/', (req, res)=>{
  console.log('peticion recibida')  
  res.status(200).send("<h1>probando server, NODEMON</h1>")
})

app.listen(4000,()=>{
    console.log("escuchando en el 4000")
})
