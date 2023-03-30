import express from 'express';

import { create } from '../controller/userController.js';
import { handleLogin, handleLogout} from
    '../controller/authController.js';

let router = express.Router();
router.post('/', handleLogin);
router.get('/', handleLogout);
router.post('/register', create);
export default router;