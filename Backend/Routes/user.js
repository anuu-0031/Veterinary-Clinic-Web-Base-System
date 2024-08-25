
import express from 'express';
import {
    updateUser, 
    deleteUser, 
    getAllUser, 
    getSingleUser,
    getUserProfile,
    getMyAppointments,
} from '../Controllers/userController.js';

import {authenticate, restrict} from '../auth/verifyToken.js'

const router = express.Router();

router.get('/:id', authenticate, restrict(['petOwner']), getSingleUser);
router.get('/', authenticate, restrict(['admin']), getAllUser);
router.put('/:id', authenticate, restrict(['petOwner']), updateUser);
router.delete('/:id', authenticate, restrict(['petOwner']), deleteUser);
router.get('/profile/me', authenticate, restrict(['petOwner']), getUserProfile);
router.get(
    'appointments/my-appointments', 
     authenticate, 
     restrict(['petOwner']), 
     getMyAppointments
    );

export default router;
