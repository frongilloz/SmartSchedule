'use strict';
import express from 'express';
import coursesController from '../controllers/courses.js';
import usersController from '../controllers/users.js';
import sessionsController from '../controllers/sessions.js';

const router = express.Router();
router.use('/courses', coursesController);
router.use('/users', usersController);
router.use('/sessions', sessionsController);

export default router;
