'use strict';
import express from 'express';
import argon2 from 'argon2';
import crypto from 'crypto';
import User from '../models/User.js';
import Session from '../models/Session.js';

const router = express.Router();

// Login a User
router.post('/', async (req, res) => {
  const user = await User.findOne({email: req.body.email});
  if(user === null) {
    return res.status(400).send();
  }

  if(await argon2.verify(user.password, req.body.password)) {
    const token = crypto.randomBytes(32).toString('hex');
    const session = Session({user: user, token: token});
    session.save();
    res.status(200).send({token: token, userName: user.fullName});
  } else {
    res.status(400).send();
  }
});

// Delete a login session
router.delete('/', async (req, res) => {
  if(req.session) {
    req.session.delete();
    res.status(200).send();
  } else {
    res.status(400).send();
  }
});

export default router;
