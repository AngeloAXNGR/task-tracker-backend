import express from 'express';
import mongoose from 'mongoose';

require('dotenv').config();

const projectRoutes = require('./routes/project')
const taskRoutes = require('./routes/task')
const userRoutes = require('./routes/user')
const cors = require('cors');

const app = express()


app.use(cors({origin:["http://localhost:5173", "https://mern-task-tracker-wgkx.onrender.com"]}))
app.use(express.json())

app.use((req, res, next) => {
	next();
})

// routes
app.use('/api', userRoutes);
app.use('/api', taskRoutes);
app.use('/api', projectRoutes);






// connect to the database
mongoose.connect(process.env.MONGO_URI!)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`Connected to the database and listening on port ${process.env.PORT}`)
		})
	})
	.catch((error) => {
		console.log(error)
	})