import express from 'express';

const {getAllTasks, getTask, createTask, updateTask, deleteTask} = require('../controllers/taskController')


const router = express.Router()

// Handlers
router.get('/projects/:project_id/tasks', getAllTasks)

router.get('/tasks/:id', getTask)

router.post('/projects/:project_id/tasks', createTask)

router.patch('/tasks/:id', updateTask)

router.delete('/tasks/:id', deleteTask)

module.exports = router

