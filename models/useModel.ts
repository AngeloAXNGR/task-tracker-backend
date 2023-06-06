import mongoose from 'mongoose';

const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	email:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	}
})

// Sign up
userSchema.statics.signup = async function(email, password){
	// form validation
	if(!email || !password){
		throw Error('All fields must be filled out');
	}

	// check if email is valid
	if(!validator.isEmail(email)){
		throw Error('Email is not valid');
	}

	// check for valid password format (Should include: uppercase letters, lowercase letters, numbers, punctation or symbols, atleast 10 in character length)
	if(!validator.isStrongPassword(password)){
		throw Error('Password is not strong enough');
	}

	// check if email used to signup already exists in the database
	const exists = await this.findOne({email});

	if(exists){
		throw Error('Email already in use');
	}

	// password hashing and salting
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password,salt);

	// create a user
	const user = await this.create({email, password:hash})

	return user
}


// Login
userSchema.statics.login = async function(email, password){
	if(!email || !password){
		throw Error('All fields must be filled out');
	}

	// find user by email
	const user = await this.findOne({email});

	// throw error if user is not found in the database
	if(!user){
		throw Error('Incorrect Email');
	}

	// Compare password hashes between user input and the one saved in the database
	const match = await bcrypt.compare(password, user.password);

	if(!match){
		throw Error('Invalid Login Credentials');
	}

	return user
}

module.exports = mongoose.model('User', userSchema)
