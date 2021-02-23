'use strict';
import express from 'express';
import argon2 from 'argon2';
import mongoose from 'mongoose';
import User from '../models/User.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const user = User(req.body);
    console.log('User POST accessed.')
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

router.get('/:email', async(req, res) => {
  try {
    console.log('GET: ', req.params.email)
    const user = await User.findOne({email: req.params.email});
    res.status(200).send(user);
  }
  catch (err) {
      res.json({message: err});
  }
});


export default router;
  