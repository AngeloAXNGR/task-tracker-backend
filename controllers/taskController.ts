const Task = require('../models/taskModel');
import mongoose from 'mongoose';


const getAllTasks = async(req:any, res:any) => {
	const {project_id} = req.params

	const tasks = await Task.find({project_id}).sort({createdAt: -1})
	res.status(200).json(tasks)

}


const getTask = async(req:any, res:any) => {
	res.json({mssg:'Get one task'})
}

const createTask = async(req:any, res:any) => {
	const {project_id} = req.params;
	const {title, dueDate, priority, description} = req.body;

	// Form Error handling **


	// Add data to db
	try{
		const task = await Task.create({title, dueDate, priority, description,project_id})
		res.status(200).json(task)
	}catch(error:any){
		res.status(400).json({error:error.message})
	}
}

const updateTask = async(req:any, res:any) => {
	const {id} = req.params;

	if(!mongoose.Types.ObjectId.isValid(id)){
		return res.status(400).json({error:'Task does not exist'})
	}

	const task = await Task.findByIdAndUpdate({_id:id}, {
		...req.body
	})

	if(!task){
		return res.status(400).json({error:'Task does not exist'})
	}

	res.status(200).json(task)
}

const deleteTask = async(req:any, res:any) => {
	const {id} = req.params;

	if(!mongoose.Types.ObjectId.isValid(id)){
		return res.status(400).json({error:'Task does not exist'})
	}

	const task = await Task.findOneAndDelete({_id:id})

	if(!task){
		return res.status(400).json({error:'Task does not exist'})
	}

	res.status(200).json(task)
}

module.exports = {
	getAllTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask,
}