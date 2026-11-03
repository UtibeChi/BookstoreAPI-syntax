const express = require('express');
const authenticate = require('../middlewares/auth.middlewares');

const { registerUser, loginUser, getProfile } = require('../controllers/usercontrollers');

const router = express. Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authenticate, getProfile);

module.exports = router;    