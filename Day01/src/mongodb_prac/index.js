(async ()=>{
	const {MongoClient} = require('mongodb')

	const client = new MongoClient(
		'mongodb://localhost:27017',
		{
			useNewUrlParser: true
		}
	)
	
	let ret = await client.connect()

	const db = client.db('test')
	const diary = db.collection('diary')
	ret = await diary.insertMany([
		{
			author: 'Kai',
			content: 'First day of training camp.'
		},
		{
			author: 'XiaoHong',
			content: 'It\'s a bit difficult to follow.'
		},
		{
			author: 'DK',
			content: 'I got a job today.'
		}
	])
	console.log('insert: ', ret)
	ret = await diary.updateOne({author: 'DK'}, {$set: {content: "I got an internship today!"}})
	console.log('update: ', ret)
	client.close()
})()
