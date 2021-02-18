'use strict';
import Session from '../models/Session.js';

const checkAuth = async (req, res, next) => {
  const session = await Session.findOne({token: req.token}).populate('user');
  if(session != null) {
    req.session = session;
  }
  next();
};

export default checkAuth;
