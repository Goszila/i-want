const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'i_want'
})

app.use(cors())

app.get('/', (req, res) => {
	res.send('connection')
})

app.listen(4000, () => {
	console.log(connection)
})

app.get('/keyboard', (req, res) => {
	const SELECT_ALL_KEYBOARD_QUERY = 'select * from keyboard'
	connection.query(SELECT_ALL_KEYBOARD_QUERY, (err, results) => {
		if (err) {
			return res.send(err)
		} else {
			return res.json({
				data: results
			})
		}
	})
})
