const fs = require("fs");
const chalk = require("chalk");

// self or public
global.self = false; //jadiin true klo gk mau fitur bot lu di pke sama org lain

// setting
global.ownername = "Aqlabriyan";
global.ownernumber = "6289687033380";
global.botname = "Aqla-Bot";
global.session_name = "session.json";

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
