import express from 'express';

const port = 8000

const app = express();

app.get('/', (req, res) => {
	res.send('Hello Typescript')
})

app.get('/hi', (req, res) => {
	res.send('Ha')
})


app.listen(port,() => {
	console.log(`listening on port ${port}`)
})