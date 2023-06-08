import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const taskSchema = new Schema({
	title:{
		type:String,
		required:true
	},
	dueDate:{
		type:String,
		required:false
	},
	priority:{
		type:String,
		required:true
	},
	description:{
		type:String,
		required:false
	},
	project_id:{
		type:String,
		required:true
	}
}, {timestamps:true})

module.exports = mongoose.model('Task', taskSchema)