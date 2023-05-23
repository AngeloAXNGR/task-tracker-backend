const Project = require('../models/projectModel');
import mongoose from 'mongoose';


const getAllProjects = async(req:any, res:any) => {
	res.json({mssg:'Get all projects'})
}


const getProject = async(req:any, res:any) => {
	res.json({mssg:'Get one project'})
}

const createProject = async(req:any, res:any) => {
	res.json({mssg:'Create one project'})
}

const updateProject = async(req:any, res:any) => {
	res.json({mssg:'Update one project'})
}

const deleteProject = async(req:any, res:any) => {
	res.json({mssg:'Delete one project'})
}

module.exports = {
	getAllProjects,
	getProject,
	createProject,
	updateProject,
	deleteProject,
}