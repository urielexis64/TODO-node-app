require("colors");

const showMenu = () => {
	console.clear();
	console.log("=====================".green);
	console.log("   Select an option".green);
	console.log("=====================\n".green);

	console.log(`${"1.".green} Create task`);
	console.log(`${"2.".green} List tasks`);
	console.log(`${"3.".green} List finished tasks`);
	console.log(`${"4.".green} List pending tasks`);
	console.log(`${"5.".green} Complete task`);
	console.log(`${"6.".green} Remove task`);
	console.log(`${"0.".green} Exit\n`);

	const readLine = require("readline").createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	readLine.question("Select an option: ", (opt) => {
		readLine.close();
	});
};

const pause = () => {
	const readLine = require("readline").createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	readLine.question(`Press ${"ENTER".green} to continue...`, (opt) => {
		readLine.close();
	});
};

module.exports = {showMenu, pause};
