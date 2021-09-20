const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.blue(content))
const {clone} = require('./download')
const open = require('open')

const spawn = async(...args) => {
	const {spawn} = require('child_process')
	return new Promise(resolve => {
		const proc = spawn(...args)
		proc.stdout.pipe(process.stdout)
		proc.stderr.pipe(process.stderr)
		proc.on('close', () => {
			resolve()
		})
	})
}

module.exports = async name => {
	clear()
	const data = await figlet("Kai CLI")
	console.log(chalk.white.bgGreen.bold(data))
	
	// Project template
	log('Creating' + name)
	await clone('github:su37josephxia/vue-template', name)

	log(`Installing dependencies...`)
	await spawn('npm', ['install'], {cwd: `./${name}`})
	log(chalk.green(
	`Dependencies has been installed.
	To get started:
	======================
	    cd ${name}
	    npm run serve
	======================
		`))
	open('http://localhost:8080')
	await spawn('npm', ['run', 'serve'], {cwd:`./${name}`})
}
