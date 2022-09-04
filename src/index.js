const express = require("express");
const app = express();
const cors = require("cors");


//Settings 
app.set('port', 3000);


//Middlewares
app.use(express.json());
app.use(cors())

//Routes
app.use(require('./routes/products'));
app.use(require('./routes/category'));


// Starting the server 
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})