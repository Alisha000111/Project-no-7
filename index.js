import inquirer from "inquirer";
let userInput = await inquirer.prompt({
    message: "Please type in small paragraph: ",
    type: "input",
    name: "paragraph"
});
let para = userInput.paragraph;
let cleanPara = para.trim();
let wordsArray = cleanPara.split(' ');
let filteredWords = wordsArray.filter(word => word !== '');
console.log(`You typed ${filteredWords.length} words.`);
console.log(`You typed ${cleanPara.length} characters.`);
