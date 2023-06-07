import mongoose from 'mongoose';


const Schema = mongoose.Schema


const projectSchema = new Schema({
	title:{
		type:String,
		required:true
	},
	user_id:{
		type:String,
		required:true
	}
}, {timestamps:true})




module.exports = mongoose.model('Project', projectSchema)