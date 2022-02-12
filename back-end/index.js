// Constants
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const express = require("express");
var cors = require("cors");
// App
const app = express();

app.use(session({
            secret: 'secret string',
            resave : false,
            saveUninitialized : false,
            cookie : {/* can add cookie related info here*/}
        })
      );

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
}));

app.get('/', function(req,res){
    if (!req.session.pageCountByCurrentUserOfAnyNameYouWant)
        req.session.pageCountByCurrentUserOfAnyNameYouWant = 0;
    req.session.pageCountByCurrentUserOfAnyNameYouWant++;
    res.send({
        pageCount : req.session.pageCountByCurrentUserOfAnyNameYouWant
    });
});


app.listen(PORT, () => console.log(`The server is started on http://localhost:${PORT}`));
