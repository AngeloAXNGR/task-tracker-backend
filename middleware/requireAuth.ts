const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async(req:any, res:any, next:any) => {

	// verify authentication
	// token acquired here
	const { authorization } = req.headers

	if(!authorization){
		return res.status(401).json({error: 'Authorization token required'})
	}

	const token = authorization.split(' ')[1]

	// verify token to ensure its not tampered
	try{
		const {_id} = jwt.verify(token, process.env.SECRET)

		// use _id to find the user in the database
		req.user = await User.findOne({_id}).select('_id')
		next()

	}catch(error){
		console.log(error)
		res.status(401).json({error:'Request is not authorized'})
	}
}

export {requireAuth}