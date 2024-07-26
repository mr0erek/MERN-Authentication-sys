const router = require('express').Router();
const ensureAuthenticated = require('../Middlewares/Auth');

router.get('/', ensureAuthenticated,(req, res) => {
	console.log("---- Logged in User detail : ", req.user);
	res.status(200).json([
	{
		name: "Mobile",
		price: 5000
	},

	{
		name: "T.V",
		price: 4000
	},

	{
		name: "Charger",
		price: 150
	},

	{
		name: "Drone",
		price: 1900
	},

	])	
});
// router.post('/signup', signupValidation, signup);
module.exports = router;