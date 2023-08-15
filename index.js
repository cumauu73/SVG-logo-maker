import { writeFile } from "fs/promises"
import inquirer from "inquirer"
import { questions } from "./lib/questions.js"
import { generateLogo } from "./lib/generateLogo.js"


function init() {
    inquirer.prompt(questions)
    .then((answers => {
        const logo = generateLogo(answers)
        console.log("Logo created succesfuly")
        return writeFile("./examples/newLogo.svg", logo)
    }))
    .catch((error) => {
        console.log(error)
    })
}

init();