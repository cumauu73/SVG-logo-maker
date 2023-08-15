// array of questions for inquirer prompts
export const questions = [
    {
        type: "list",
        name: "shapeChoice",
        message: "What shape do you want for your logo?",
        choices: ["Circle", "Square", "Triangle"]
    },

    {
        type: "input",
        name: "shapeColorChoice",
        message: "What color do you want your logo?"
    },

    {
        type: "input",
        name: "textChoice",
        message: "What text do you want on your logo?  (Choose up to 3 characters)",
        // checks to make sure user only inputs 3 characters or less
        validate: (answer) => {
            if (answer.length > 3) {
                return "A logo must have no more than 3 characters."
            }
            return true;
        },
    },

    {
        type: "input",
        name: "textColorChoice",
        message: "What color do you want the text?"
    },
];