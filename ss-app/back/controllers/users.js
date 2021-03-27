'use strict';
import express from 'express';
import argon2 from 'argon2';
import mongoose from 'mongoose';
import User from '../models/User.js';
import ConsolidatedCourse from '../models/ConsolidatedCourse.js';

const router = express.Router();

// Create a new user
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

// Get a user
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

//Added update functionality to update pw
router.put('/forgot', async(req, res) => {
  console.log("REQUEST PW", req.body)

  // query for user
  const user = await User.findOne({email:req.body.email});
  
  // If user doesn't exist
  if(user === null) {
    return res.status(400).send();
  }
  
  // Parse user's request to updated Object
  const updateUser = new User({
    FName: user.FName,
    LName: user.LNameAdd,
    fullName: user.fullName,
    email: user.email,
    password: req.body.newPass
  });

  // Encyrpt password
  try {
    updateUser.password = await argon2.hash(req.body.newPass);
  } catch(err) {
    if(err instanceof TypeError) {
      return res.status(400).send({error:{password: {message: 'Password error.'}}});
    } else {
      throw err;
    }
  }

  // Else get the returned user's credentials
  let curr_user_id = user._id 

  console.log('updateUser:', updateUser)
  console.log('curr_user_id:', curr_user_id)
  console.log('User:', User)
  
  // Update the database; query based on the user's id
  try{
    await User.updateOne({_id: curr_user_id },{password: updateUser.password }, function (err, docs){
          if (err){
            console.log(err)
        }
        else{
            console.log("Updated Docs : ", docs);
            console.log("PW Update success!")
            res.status(200).send();
        }
    });
    
    }catch (err) {
    res.json({message: err});
  } 


  
});

export default router;
  