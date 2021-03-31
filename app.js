require("colors");

const {
	inquirerMenu,
	pause,
	readInput,
	removeTaskMenu,
	confirmRemoveTask,
	showChecklistTasks,
} = require("./helpers/inquirer");
const {saveDB, readDB} = require("./helpers/saveFile");
const Tasks = require("./models/tasks");

const main = async () => {
	let opt = "";
	const tasks = new Tasks();
	const dbTasks = readDB();

	if (dbTasks) {
		tasks.loadTasksFromArray(dbTasks);
	}

	do {
		console.clear();
		opt = await inquirerMenu();
		switch (opt) {
			case "1":
				const desc = await readInput("Enter a description: ");
				tasks.createTask(desc);
				break;
			case "2":
				tasks.listAllTasks();
				break;
			case "3":
				tasks.listTasks(true);
				break;
			case "4":
				tasks.listTasks(false);
				break;
			case "5":
				const ids = await showChecklistTasks(tasks.arrayList);
				tasks.editTaskStatus(ids);
				console.log(ids);
				break;
			case "6":
				const id = await removeTaskMenu(tasks.arrayList);
				if (id !== "0") {
					const ok = await confirmRemoveTask("Are you sure?");
					if (ok) {
						tasks.deleteTask(id);
						console.log("Task deleted correctly!".green);
					}
				}
				break;
			default:
		}

		saveDB(tasks.arrayList);

		await pause();
	} while (opt !== "0");
};

main();
