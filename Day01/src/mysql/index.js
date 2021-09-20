(async () => {
	const mysql = require('mysql2/promise')

	const cfg = {
		host: 'localhost',
		user: 'root',
		password: '123456',
		database: 'training_camp_prac'
	}
	const connection = await mysql.createConnection(cfg)
	let ret = await connection.execute(
	`CREATE TABLE IF NOT EXISTS diary(
		id INT NOT NULL AUTO_INCREMENT,
		username VARCHAR(30) NOT NULL,
		content TEXT NULL,
		PRIMARY KEY (id)
	)`)
	console.log('Create diary table', ret)
	ret = await connection.execute(`INSERT INTO diary(username, content) VALUES(?,?)`, ['Kai', 'This is the first day of training camp.'])
	console.log('Insert a new diary', ret)
	ret = await connection.execute(`INSERT INTO diary(username, content) VALUES(?,?)`, ['Hong', 'It is a bit difficult.'])
	const [rows, fields] = await connection.execute(`SELECT * FROM diary`)
	console.log('Get all data', JSON.stringify(rows))
})()
