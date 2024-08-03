const express = require("express");
const app = express();
const bodyparser = require("body-parser")
const Productroute = require('./Routes/ProductRoute')
const Userroute = require('./Routes/UserRoute')
const Cartroute = require('./Routes/CartRoute')
const Orderroute = require('./Routes/OrderRoute')
const mongoose = require('mongoose');
const cors = require("cors");
app.use(bodyparser.json());
app.use(cors());


mongoose.connect(
    'mongodb+srv://Jega0018:jega08m@cluster0.2afnqpo.mongodb.net/e__commerce'
).then(() => {
    console.log('Connected to database!'); 
})
app.set('view engine','ejs'); //EMBEDDED JAVASCRIPT

app.use('/',Productroute)
app.use('/',Userroute)
app.use('/',Cartroute)
app.use('/',Orderroute)

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})