require("colors");
const {showMenu, pause} = require("./helpers/messages");

const main = async () => {
	console.clear();
	showMenu();
	pause();
};

main();
