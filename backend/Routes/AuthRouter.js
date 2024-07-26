const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const router = require('express').Router();

// router.post('/login', (req, res) => {
// 	res.send('login Success');
// });
// router.post('/signup', (req, res) => {
// 	res.send('signup Success');
// });

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
module.exports = router;