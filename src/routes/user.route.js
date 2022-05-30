import express from 'express';
import * as userController from '../controllers/user.controller';
import { userRegistrationValidator } from '../validators/user.validator';
import { userRegistrationValidator1 } from '../validators/user.validator';

const router = express.Router();

// rout for all data 

router.get('/alldata', userController.getAllUsers);

//route to create new user
router.post('', userRegistrationValidator, userController.userRegistration);

// rout  to user login
router.get('/login', userController.userLogIn);
export default router;

