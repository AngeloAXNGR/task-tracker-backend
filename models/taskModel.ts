import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const taskSchema = new Schema({
	title:{
		type:String,
		required:true
	},
	dueDate:{
		type:String,
		required:true
	},
	priority:{
		type:String,
		required:true
	},
	project_id:{
		type:String,
		required:true
	}
}, {timestamps:true})

module.exports = mongoose.model('Task', taskSchema)