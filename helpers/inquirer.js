const {green} = require("colors");
const inquirer = require("inquirer");
require("colors");

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
	console.clear();
	console.log("=====================".green);
	console.log("   Select an option".green);
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

module.exports = {
	inquirerMenu,
	pause,
};
