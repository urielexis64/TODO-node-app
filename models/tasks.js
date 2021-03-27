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

	createTask(description = "") {
		const task = new Task(description);
		this._list[task.id] = task;
	}
}

module.exports = Tasks;
