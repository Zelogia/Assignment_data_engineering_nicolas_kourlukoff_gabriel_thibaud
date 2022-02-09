const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
    uri: "mongodb://localhost:27017",
    collection: 'sessions'
});
app.use(
    session({
        secret: 'secret string',
        resave: false,
        saveUninitialized: false,
        store: store, /* store session data in mongodb */
        cookie: { /* can add cookie related info here */ }
    })
);

app.get('/', function(req, res){
    if(!req.session.pageCountByCurrentUserOrAnyNameYouWant)
        req.session.pageCountByCurrentUserOrAnyNameYouWant = 0;
    req.session.pageCountByCurrentUserOrAnyNameYouWant++;
    res.send({
        pageCount: req.session.pageCountByCurrentUserOrAnyNameYouWant
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
