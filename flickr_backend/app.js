'use strict';
const express = require('express');
var cors = require('cors')
const dotenv = require('dotenv');
var Flickr = require('flickr-sdk');
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

var feeds = new Flickr.Feeds(process.env.FLICKR_API_KEY);

app.get('/tes', (req, res) => {
    res.send({status: 'GET 200 OK'})
});

app.post('/tes', (req, res) => {
    res.send({status: "POST 200 OK"})   
});

app.get('/photos', (req, res) => {
    feeds.publicPhotos({    
    }).then((data) => {
        res.send(data.body);
    }).catch((err) => {
        res.send(err);
    });
})

app.listen(process.env.HTTP_PORT || 3000, ()=>{
    console.log(`Server is running on port ${process.env.HTTP_PORT || 3000}`)
});