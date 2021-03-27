const {v4: uuidv4} = require("uuid");

class Task {
	id = "";
	desc = "";
	finishedAt = null;

	constructor(desc) {
		this.id = uuidv4();
		this.desc = desc;
		this.finishedAt = null;
	}
}

module.exports = Task;
