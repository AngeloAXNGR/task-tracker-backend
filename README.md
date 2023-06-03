# Task Tracker API
Backend Part of Task Tracker Application. Both Frontend and Backend are hosted with Render. The live version can be viewed [here](https://mern-task-tracker-wgkx.onrender.com).

## API Endpoints
### Projects
|Description        |Method                         |Route                        |
|-------------------|-------------------------------|-----------------------------|
|Get All Projects   |GET                            |/projects                    |
|Get Project By ID  |GET                            |/projects/:id                |
|Create a Project   |POST                           |/projects                    |
|Edit a Project     |PATCH                          |/projects/:id                |
|Delete a Project   |DELETE                         |/projects/:id                |

### Tasks
|Description                            |Method                         |Route                       |
|---------------------------------------|-------------------------------|----------------------------|
|Get Tasks by Project ID                |GET                            |/projects/:project_id/tasks |
|Get Task By ID                         |GET                            |/tasks/:id                  |
|Create a Task for a Specific Project   |POST                           |/projects/:project_id/tasks |
|Edit a Task                            |PATCH                          |/tasks/:id                  |
|Delete a Task                          |DELETE                         |/tasks/:id                  |

## Technologies used
- Node.JS
- TypeScript
- MongoDB
- Mongoose
- Express
- Postman (Testing API Endpoints)

## Getting Started
### Clone Repository
```
https://github.com/AngeloAXNGR/task-tracker-backend.git
cd task-tracker-backend
```
### Environment Variables
```
PORT=<Port in which the server will run on, e.g 5000>
MONGO_URI=<URI used to connect to the MongoDB Database>
```

### Install packages and running the server
```
npm install
npm run serve
```
