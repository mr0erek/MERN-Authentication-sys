const bcrypt = require('bcrypt');
const UserModel = require("../Models/User");
const jwt = require('jsonwebtoken');
const signup = async (req,res) => {
	try {
		const { name, email, password } = req.body
		const user = await UserModel.findOne({ email }); // findings for already user exist or not in the serverDB
		if(user){
			return res.status(409)
			  .json({message: `This User is already exist, Kindly login.`, success: false });
		}
		const userModel = new UserModel({ name, email, password }); //this will prepare to save the data
		userModel.password = await bcrypt.hash(password, 10); // encryting passwd
		await userModel.save();
		res.status(201)
		.json({
			message: "Signup sucessfully", 
			success: true
		})

	} catch (err){
		res.status(500)
		.json({
			message: "Internal server error",
			success: false
		})

	}
}

const login = async (req, res) => {
	try {
		const { email, password } = req.body
		const user = await UserModel.findOne({ email }); // findings for already user exist or not in the serverDB
		const errorMsg = "Authentication failed, email or password is wrong"
		if(!user){
			return res.status(403)
			  .json({message: errorMsg, success: false });
		}
		// const userModel = new UserModel({ name, email, password }); //this will prepare to save the data
		// userModel.password = await bcrypt.hash(password, 10); // encryting passwd
		// await userModel.save();
		// res.status(201)
		// .json({
		// 	message: "Signup sucessfully", 
		// 	success: true
		// })
		const isPassEqual = await bcrypt.compare(password, user.password);
		if(!isPassEqual){
			return res.status(403)
			  .json({message: errorMsg, success: false });
		}
		// if(isPassEqual){
		// 	res.status(200)
		// 	.json({message: `Hello!, ${user.name}\nemail: ${user.email}\npass_hash: ${user.pass}`,success: true})
		// }
		const jwtToken = jwt.sign(
			{ username: user.name, email: user.email, id: user._id },
			process.env.JWT_SECRET,
			{expiresIn: '24h' }
			);
		res.status(200)
		.json({
			message: "Login Success",
			success: true,
			jwtToken,
			email: user.email,
			name: user.name
		})
	} catch (err){
		res.status(500)
		.json({
			message: "Internal server error",
			success: false
		})

	}
}


module.exports = {
	signup,
	login
}
