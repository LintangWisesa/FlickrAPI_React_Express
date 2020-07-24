'use strict';
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded());

// app.get('/candidates', function(req, res) {
//     res.send(data)
// });

// app.post('/candidates', function(req, res) {
//     res.send("200 OK")   
// });

app.listen(process.env.HTTP_PORT || 3000, ()=>{
    console.log(`Server is running on port ${process.env.HTTP_PORT || 3000}`)
});