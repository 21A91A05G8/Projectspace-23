// const express = require('express');
// const mongoose = require('mongoose');
// const UserRouter = require('./src/routes/shopRoutes');
// const app=express();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(cors());
// //Routes
// // app.use('/',UserRouter);
// mongoose.connect('mongodb+srv://chandasridurga:C11AjX4M7MG2F2ad@cluster0.jeghj9f.mongodb.net/ShopsandStalls?retryWrites=true&w=majority&appName=Cluster0')
// .then(() => app.listen(5000))
// .then(() =>
// console.log("Connected to Database & Listening to localhost 5000")
// )
// .catch((err) => console.log(err))



//hostel

const express = require('express');

const mongoose = require('mongoose');
const shopRouter = require('./src/routes/Routes.js');
const app=express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());


//Routes
app.use('/',shopRouter);

mongoose.connect('mongodb+srv://jslpravalika5:fr9zMkHaYDzZBB0w@cluster0.h2p8o0m.mongodb.net/ShopsandStalls?retryWrites=true&w=majority&appName=Cluster0')
.then(() => app.listen(5000))
.then(() =>
console.log("Connected to Database & Listening to localhost 5000")
)
.catch((err) => console.log(err))