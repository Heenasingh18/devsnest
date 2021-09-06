var fs = require("fs");

fs.mkdirSync("Day_5");

fs.writeFileSync("Day_5/day5_1.txt", "Hello");

fs.appendFileSync("Day_5/day5_1.txt", " everyone");

fs.writeFileSync("Day_5/day5_2.txt", "This is Heena singh");

var data = fs.readFileSync("Day_5/day5_1.txt", "utf-8");
console.log(data);

//fs.renameSync("Day_5/day5_1.txt","Day_5/File1.txt");

fs.renameSync("Day_5/day5_2.txt", "Day_5/File2.txt");

fs.unlinkSync("Day_5/File2.txt");         // To delete a file in a folder

//fs.rmdirSync("Day_5");              //To delete a folder