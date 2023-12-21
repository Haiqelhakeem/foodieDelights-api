const express = require('express');
const { registerUser, loginUser } = require('../controllers/UserController.js')
const router = express.Router();

// router.get('/users', getUsers)
// router.get('/users/:id', getUserById)
// router.post('/users', saveUser)

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router