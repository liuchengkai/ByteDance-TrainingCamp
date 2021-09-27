const {promisify} = require('util')
module.exports.clone = async function(repo, desc){
	const download = promisify(require("download-git-repo"))
//	const ora = require('ora')
	const {ora} = await import('ora')
	await console.log(ora)
	const process = ora(`Dowloading...${repo}`)
	process.start()
	await download(repo, desc)
	process.succeed('✅')
}
