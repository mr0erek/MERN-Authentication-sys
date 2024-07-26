const jwt = require('jsonwebtoken');
const ensureAuthenticated = (req, res, next) => {
	const auth = req.headers['authorization'];
	if(!auth){
 		return res.status(403)
 		.json({ message: 'Unauthorized, JWT token require' });
 	}
 	try {
 		const tk = process.env.JWT_SECRET
 		const decoded = jwt.verify(auth, tk);
 		req.user = decoded;
 		next();
 	} catch (err) {
 		return res.status(403)
 		.json({message: 'Unauthorized, JWT token wrong or expired'});
 	}
 }

 module.exports = ensureAuthenticated;

 