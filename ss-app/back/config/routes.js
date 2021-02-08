'use strict';
import express from 'express';
import usersController from '../app/controllers/users.js';
import sessionsController from '../app/controllers/sessions.js';

const router = express.Router();
router.use('/users', usersController);
router.use('/sessions', sessionsController);

export default router;
