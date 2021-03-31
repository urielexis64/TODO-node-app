require("colors");

const Task = require("./task");

class Tasks {
	_list = {};

	get arrayList() {
		const tasksList = [];

		Object.keys(this._list).forEach((key) => {
			const task = this._list[key];
			tasksList.push(task);
		});

		return tasksList;
	}

	constructor() {
		this._list = {};
	}

	deleteTask(id = "") {
		if (this._list[id]) {
			delete this._list[id];
		}
	}

	loadTasksFromArray(tasks = []) {
		tasks.forEach((task) => {
			this._list[task.id] = task;
		});
	}

	createTask(description = "") {
		const task = new Task(description);
		this._list[task.id] = task;
	}

	listAllTasks() {
		console.log();
		if (this.arrayList.length === 0) console.log(`There's no tasks.`.black.bgGreen);
		else
			this.arrayList.forEach((task, index) => {
				const idx = `${index + 1}`.green;
				const {desc, finishedAt} = task;
				const status = finishedAt === null ? "Pending".red : "Completed".green;
				console.log(`  ${idx}. ${desc} :: ${status}`);
			});
	}

	listTasks(completed = true) {
		console.log();
		const filteredTasks = this.arrayList.filter((task) =>
			completed ? task.finishedAt !== null : task.finishedAt === null
		);

		filteredTasks.forEach((task, index) => {
			const idx = `${index + 1}.`.green;
			const {desc, finishedAt} = task;
			const status = completed ? finishedAt.blue : "Pending".red;

			console.log(`  ${idx} ${desc} :: ${status}`);
		});
	}
}

module.exports = Tasks;
