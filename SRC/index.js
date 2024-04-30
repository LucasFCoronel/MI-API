const express = require ('express');
const mongoose = require ('mongoose');
require('dotenv').config();
const userRoutes = require ("./routes/user")


const app = express ();
const port = process.env.port || 3000;

// middlewar 
app.use(express.json());
app.use ('/api',userRoutes )


//routes 

app.get ('/', (req, res) =>{
  res.send("Bienvenido a mi API")
})

//mongoose conexion 

mongoose.connect (process.env.MONGODB_URI).then(()=> console.log('conectado a mongodb'))
.catch((Error)=> console.error(Error));


app.listen (port, ()=> {
  console.log ('el servidor este en el puerto 3000')
})