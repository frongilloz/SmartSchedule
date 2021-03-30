'use strict';
import express from 'express';
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UsersSchema = new mongoose.Schema({
  FName: {type: String, required: true},
  LName: {type: String, required: true},
  fullName: {type: String, required: true},
  email: {
    type: String,
    required: true,
    unique: true,
    // https://emailregex.com/
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  password: {type: String, required: true},

  year1: {
    Spring: {
      year: String, 
      semester1: String,
        course1:
        {
          number: String,
          name: String,
          credits: Number
        },
        course2:
        {
          number: String,
          name: String,
          credits: Number
        },
        course3:
        {
          number: String,
          name: String,
          credits: Number
        },
        course4:
        {
          number: String,
          name: String,
          credits: Number
        },
        course5:
        {
          number: String,
          name: String,
          credits: Number
        },
        course6:
        {
          number: String,
          name: String,
          credits: Number
        },
    }, // end of spring
  },// end of year
  
  
});
UsersSchema.plugin(uniqueValidator);

export default mongoose.model('users', UsersSchema);
