const { request, response, urlencoded } = require('express');
const express = require('express');

const app = express();

const PORT = '8000';
const routes = require('./routes/index')

//Adding CORS middleware to allow localhost 3000 to access localhost 8000 example
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

//Adding body-parser middleware - to handle the body before the request
app.use(urlencoded({extended:true}));
app.use(express.json());

// //Handle / get request
// app.get('/',(request,response)=>{
//     response.send("Welcome to UI-Focus")
// })

app.use('/', routes);
app.listen(process.env.PORT || PORT, () => {

    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  
  });