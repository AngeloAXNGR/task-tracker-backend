const Project = require('../models/projectModel');
const Task = require('../models/taskModel');
import mongoose from 'mongoose';


const getAllProjects = async(req:any, res:any) => {
	const user_id = req.user._id
	const projects = await Project.find({user_id}).sort({createdAt: -1})
	res.status(200).json(projects)

}


const getProject = async(req:any, res:any) => {
	res.json({mssg:'Get one project'})
}

const createProject = async(req:any, res:any) => {
	const {title} = req.body;

	// Form Error handling **


	// Add data to db
	try{
		const user_id = req.user._id;
		const project = await Project.create({title, user_id})
		res.status(200).json(project)
	}catch(error:any){
		res.status(400).json({error:error.message})
	}
}

const updateProject = async(req:any, res:any) => {
	const {id} = req.params;

	if(!mongoose.Types.ObjectId.isValid(id)){
		return res.status(400).json({error:'Project does not exist'})
	}

	const project = await Project.findByIdAndUpdate({_id:id}, {
		...req.body
	})

	if(!project){
		return res.status(400).json({error:'Project does not exist'})
	}

	res.status(200).json(project)
}

const deleteProject = async(req:any, res:any) => {
	const {id} = req.params;

	if(!mongoose.Types.ObjectId.isValid(id)){
		return res.status(400).json({error:'Project does not exist'})
	}

	const project = await Project.findOneAndDelete({_id:id})

	if(!project){
		return res.status(400).json({error:'Project does not exist'})
	}

	const deleteTasks = await Task.deleteMany({project_id: id})

	res.status(200).json(project)
}

module.exports = {
	getAllProjects,
	getProject,
	createProject,
	updateProject,
	deleteProject,
}