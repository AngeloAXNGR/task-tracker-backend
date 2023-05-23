import express from 'express';

const {getAllTasks, getTask, createTask, updateTask, deleteTask} = require('../controllers/taskController')


const router = express.Router()

// Handlers
router.get('/:project_id/tasks', getAllTasks)

router.get('/:id', getTask)

router.post('/:project_id/tasks', createTask)

router.patch('/:id', updateTask)

router.delete('/:id', deleteTask)

module.exports = router

