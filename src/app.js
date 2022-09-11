'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();


//conect banco de dados
const DB_USER = 'nodestore'
const DB_PASSWORD = encodeURIComponent('12345')

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@nodestore.n4sllpd.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log("MongoDB ONLINE")
})
.catch((err) => console.log(err))

//carregar os models
const Product = require('./models/product');

//carregar as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/products', productRoute);


module.exports = app;