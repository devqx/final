//wire up a new server for our application 
"use strict"

import express from 'express';

const app = express();

import bodyParser from 'body-parser';

const router = express.Router();

import productsRoute from './routes/products';

import salesRoute from './routes/sales';


//to avoid cors issue 
app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



//use the body parser middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//define routes 
app.get('/', (req,res) => {
    res.json( {name:'chioma', role:'backend engineer'} )
})

app.use('/api/v1', productsRoute);
app.use('/api/v1', salesRoute);



//get the port from the process env 
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is listening for requests at port ${PORT}`);
})

module.exports = app //for testing 




