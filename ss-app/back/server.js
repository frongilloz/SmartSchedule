'use strict';
import express from 'express';
//import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

//Import config
import db from './config/keys.js';

// Routes for the user db
import routes from './config/routes.js';

//User authentication middleware

const main = async () => {
    //OLD DB Config (later may want to change to dotenv)
    //const db = require('./config/keys').mongoURI;
    //console.log("db: ", db.mongoURI);

    //Connect to Mongo
    mongoose.connect(db.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('MongoDB Connected...'))
        .catch(err => console.log(err));

    // declare the express app
    const app = express();
    
    //Bodyparser Middlewar
    app.use(bodyParser.json());

    //NEW define the api routes in a more dynamic file
    app.use('/api', routes);

    app.use((req, res, next) => {
        res.status(404).send('404 Not Found');
      });
      app.use((err, req, res, next) => {
        if(err.type === "entity.parse.failed") {
          res.status(400).send({error: 'Invalid JSON'});
        } else {
          res.status(500).send('500 Internal Server Error');
        }
      });

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));
}

main();
