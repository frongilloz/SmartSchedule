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
    unique: true
  },
  password: {type: String, required: true},

  y1_sp: [{
    year: String, 
    semester: String,
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
  }] ,// end of y1_sp

  y1_su: [{
    year: String, 
    semester: String,
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
  }] ,// end of y1_su

  y1_fl: [{
    year: String, 
    semester: String,
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
  }] ,// end of y1_fl

  // YEAR 2
  y2_sp: [{
    year: String, 
    semester: String,
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
  }] ,// end of y2_sp

  y2_su: [{
    year: String, 
    semester: String,
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
  }] ,// end of y2_su

  y2_fl: [{
    year: String, 
    semester: String,
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
  }] ,// end of y2_fl

// YEAR 3
  y3_sp: [{
    year: String, 
    semester: String,
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
  }] ,// end of y3_sp

  y3_su: [{
    year: String, 
    semester: String,
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
  }] ,// end of y3_su

  y3_fl: [{
    year: String, 
    semester: String,
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
  }] ,// end of y3_fl

  // YEAR 4
  y4_sp: [{
    year: String, 
    semester: String,
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
  }] ,// end of y4_sp

  y4_su: [{
    year: String, 
    semester: String,
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
  }] ,// end of y4_su

  y4_fl: [{
    year: String, 
    semester: String,
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
  }] ,// end of y4_fl

  // YEAR 5
  y5_sp: [{
    year: String, 
    semester: String,
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
  }] ,// end of y5_sp

  y5_su: [{
    year: String, 
    semester: String,
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
  }] ,// end of y5_su

  y5_fl: [{
    year: String, 
    semester: String,
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
  }] ,// end of y5_fl
  
});
UsersSchema.plugin(uniqueValidator);

export default mongoose.model('users', UsersSchema);
