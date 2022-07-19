const express =require('express');
const app = express();
require('dotenv').config();


app.get('/', (req, res)=>{
  console.log('peticion recibida')  
  res.status(200).send("<h1> probando backend creado, creando repo y conectandolo con Azure. <br> sefue asi </br> </h1>")
})

const PORT = process.env.PORT || 4000; 

app.listen(PORT,()=> {
    console.log(`listening on port ${PORT}`)
})

