import express from 'express';

const {getAllProjects, getProject, createProject, updateProject, deleteProject} = require('../controllers/projectController')

import { requireAuth } from '../middleware/requireAuth';

const router = express.Router()

router.use(requireAuth)

// Handlers
router.get('/projects', getAllProjects)

router.get('/projects/:id', getProject)

router.post('/projects', createProject)

router.patch('/projects/:id', updateProject)

router.delete('/projects/:id', deleteProject)

module.exports = router

