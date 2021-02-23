'use strict';
import mongoose from 'mongoose';

const sessionsSchema = new mongoose.Schema({
  user: {ref: 'users', type: mongoose.Schema.ObjectId},
  token: {type: String, required: true}
});

export default mongoose.model('sessions', sessionsSchema);