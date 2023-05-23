import express from 'express';
import mongoose from 'mongoose';

require('dotenv').config();

const projectRoutes = require('./routes/project')

const app = express()


app.use(express.json())

app.use((req, res, next) => {
	next();
})

// routes
app.use('/api/projects', projectRoutes)


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