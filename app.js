require("colors");

const {inquirerMenu, pause, readInput} = require("./helpers/inquirer");
const Task = require("./models/task");
const Tasks = require("./models/tasks");

const main = async () => {
	console.clear();

	let opt = "";
	const tasks = new Tasks();
	do {
		opt = await inquirerMenu();
		switch (opt) {
			case "1":
				const desc = await readInput("Enter a description: ");
				tasks.createTask(desc);
				break;
			case "2":
				console.log(tasks);
			default:
				break;
		}

		await pause();
	} while (opt !== "0");
};

main();
