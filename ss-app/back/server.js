const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//import dotenv from 'dotenv';
//import routes from './config/routes.js';


const courses = require('./routes/api/courses');

const app = express();

//Bodyparser Middlewar
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/courses', courses);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));