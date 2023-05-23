import express from 'express';

const {getAllProjects, getProject, createProject, updateProject, deleteProject} = require('../controllers/projectController')


const router = express.Router()

// Handlers
router.get('/', getAllProjects)

router.get('/:id', getProject)

router.post('/', createProject)

router.patch('/:id', updateProject)

router.delete('/:id', deleteProject)

module.exports = router

