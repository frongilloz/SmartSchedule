'use strict';
import express from 'express';
import argon2 from 'argon2';
import mongoose from 'mongoose';
import User from '../models/User.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const user = User(req.body);
    console.log('User post accessed.')
    try {
      user.password = await argon2.hash(req.body.password);
    } catch(err) {
      if(err instanceof TypeError) {
        return res.status(400).send({error:{password: {message: 'Password error.'}}});
      } else {
        throw err;
      }
    }
  
    try {
      await user.save();
      res.status(200).send();
    } catch(err) {
      if(err instanceof mongoose.Error.ValidationError) {
        res.status(400).send({error: err.errors});
      } else {
        throw err;
      }
    }

});

router.get('/', async(req, res) => {
    const users = await User.find();
    res.status(200).send(users);
});


export default router;
  