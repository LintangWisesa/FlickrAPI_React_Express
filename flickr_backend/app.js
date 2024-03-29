'use strict';
const express = require('express');
const cors = require('cors')
const fs = require('fs');
const dotenv = require('dotenv');
const Flickr = require('flickr-sdk');
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

var feeds = new Flickr.Feeds(process.env.FLICKR_API_KEY);

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/templates/home.html')
})

app.get('/photos', (req, res) => {
    feeds.publicPhotos({    
    }).then((data) => {
        res.send(data.body);
    }).catch((err) => {
        res.send(err);
    });
})

app.get('/fave', (req, res) => {
    var data = JSON.parse(fs.readFileSync('./database/db.json'));
    // make sure no duplicate
    var obj = {};
    for ( var i=0; i < data.length; i++ )
        obj[data[i]['title']] = data[i];
    data = new Array();
    for ( var key in obj )
        data.push(obj[key]);
    res.send(data)
})

app.post('/fave', (req, res) => {
    var data = JSON.parse(fs.readFileSync('./database/db.json'));
    data.unshift(req.body)
    data = JSON.stringify(data)
    fs.writeFileSync('./database/db.json', data);
    res.send(req.body)
})

app.delete('/fave/:index', (req, res) => {
    var data = JSON.parse(fs.readFileSync('./database/db.json'));
    data.splice(req.params.index, 1)
    data = JSON.stringify(data)
    fs.writeFileSync('./database/db.json', data);
    res.send({status: `Data ${req.params.index} deleted`})
})

app.listen(process.env.HTTP_PORT || 3000, ()=>{
    console.log(`Server is running on port ${process.env.HTTP_PORT || 3000}`)
});