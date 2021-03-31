require("colors");
const inquirer = require("inquirer");

const menuOptions = [
	{
		type: "list",
		name: "option",
		message: "What do you want to do?",
		choices: [
			{
				value: "1",
				name: `${"1.".green} Create task`,
			},
			{
				value: "2",
				name: `${"2.".green} List tasks`,
			},
			{
				value: "3",
				name: `${"3.".green} List finished tasks`,
			},
			{
				value: "4",
				name: `${"4.".green} List pending tasks`,
			},
			{
				value: "5",
				name: `${"5.".green} Complete task`,
			},
			{
				value: "6",
				name: `${"6.".green} Remove task`,
			},
			{
				value: "0",
				name: `${"0.".green} Exit\n`,
			},
		],
	},
];

const inquirerMenu = async () => {
	console.log("=====================".green);
	console.log("   Select an option".white);
	console.log("=====================\n".green);

	const {option} = await inquirer.prompt(menuOptions);
	return option;
};

const pause = async () => {
	const question = [
		{
			type: "input",
			name: "pause",
			message: `Press ${"ENTER".green} to continue...`,
		},
	];
	console.log("\n");
	await inquirer.prompt(question);
};

const readInput = async (message) => {
	const question = [
		{
			type: "input",
			name: "outputValue",
			message,
			validate(value) {
				if (value.length === 0) {
					return "Please enter a value.";
				}
				return true;
			},
		},
	];
	const {outputValue} = await inquirer.prompt(question);
	return outputValue;
};

const removeTaskMenu = async (tasks = []) => {
	const choices = tasks.map((task, index) => {
		const idx = `${index + 1}.`.green;
		return {
			value: task.id,
			name: `${idx} ${task.desc}`,
		};
	});

	choices.unshift({
		value: "0",
		name: "0.".green + " Cancel",
	});

	const question = [
		{
			type: "list",
			name: "id",
			message: "What task do you want to remove?",
			choices,
		},
	];

	const {id} = await inquirer.prompt(question);
	return id;
};

const confirmRemoveTask = async (message) => {
	const question = [
		{
			type: "confirm",
			name: "ok",
			message,
		},
	];

	const {ok} = await inquirer.prompt(question);
	return ok;
};

module.exports = {
	inquirerMenu,
	pause,
	readInput,
	removeTaskMenu,
	confirmRemoveTask,
};
