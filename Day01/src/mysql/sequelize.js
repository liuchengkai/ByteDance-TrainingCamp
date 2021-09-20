(async () => {
	const Sequelize = require('sequelize')

	const sequelize = new Sequelize('', '', '', {
		host: 'localhost',
		dialect: 'mysql',
		operatorsAliases: false
	})

	const Fruit = sequelize.define("Fruit", {
		name: { type: Sequelize.STRING(20), allowNull: false },
		price: { type: Sequelize.FLOAT, allowNull: false }, 
		stock: { type: Sequelize.INTEGER, defaultValue: 0 } 
	});
})()
