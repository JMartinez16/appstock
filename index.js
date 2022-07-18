const express =require('express');
const app = express();
require('dotenv').config();


app.get('/', (req, res)=>{
  console.log('peticion recibida')  
  res.status(200).send("<h1> probando el server en el 4000, ... </h1>")
})

const PORT = process.env.PORT || 4000; 

app.listen(PORT,()=> {
    console.log(`listening on port ${PORT}`)
})

