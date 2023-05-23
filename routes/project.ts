import express from 'express';

const {getAllProjects, getProject, createProject, updateProject, deleteProject} = require('../controllers/projectController')


const router = express.Router()

// Handlers
router.get('/projects', getAllProjects)

router.get('/projects/:id', getProject)

router.post('/projects', createProject)

router.patch('/projects/:id', updateProject)

router.delete('/projects/:id', deleteProject)

module.exports = router

