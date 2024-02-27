const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
let allTeam = [];
// Create the array of team members
const setEngineer = [{
        type: "input",
        name: "engineerName",
        message: "Please enter the name of the enginner!"
    },
    {
        type: "input",
        name: "engineerId",
        message: "Please enter the Id of the enginner!"
    }, {
        type: "input",
        name: "engineerEmail",
        message: "Please enter the email of the enginner!"
    }, {
        type: "input",
        name: "engineerGithub",
        message: "Please enter the Github of the enginner!"
    }
]

const setIntern = [{
        type: "input",
        name: "internName",
        message: "Please enter the name of the intern!"
    },
    {
        type: "input",
        name: "internId",
        message: "Please enter the Id of the intern!"
    }, {
        type: "input",
        name: "internEmail",
        message: "Please enter the email of the intern!"
    }, {
        type: "input",
        name: "internSchool",
        message: "Please enter the School of the intern!"
    }
]

const setManager = [{
        type: "input",
        name: "managerName",
        message: "Please enter the name of the manager!"
    },
    {
        type: "input",
        name: "managerId",
        message: "Please enter the Id of the manager!"
    }, {
        type: "input",
        name: "managerEmail",
        message: "Please enter the email of the manager!"
    }, {
        type: "input",
        name: "managerOfficeNumber",
        message: "Please enter the officeNumber of the manager!"
    }
]

// Use async function to execute the request 
async function init() {
    // Create first team object named Manager and after initialize the choice list
    const data = await inquirer.prompt(setManager);
    const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.manageOfficeNumber);
    allTeam.push(manager);
    // Add a chosen team list to be called or to get out of the team list
    let keepAdding = true;
    while (keepAdding) {
        const getTeam = () => {
            return inquirer.prompt([{
                type: "list",
                message: "Choose one of the team members you want to add! Or not!?",
                name: "listOfTeamMembers",
                choices: ["Engineer", "Intern", "I'm done adding team members!"]
            }]);
        };

        const teamChoice = await getTeam();

        switch (teamChoice.listOfTeamMembers) {
            // Create a new team object named Intern
            case 'Intern':
                const internData = await inquirer.prompt(setIntern);
                const intern = new Intern(internData.internName, internData.internId, internData.internEmail, internData.internSchool);
                allTeam.push(intern);
                break;
                // Create a new team object named Enginner
            case 'Engineer':
                const engineerData = await inquirer.prompt(setEngineer);
                const engineer = new Engineer(engineerData.engineerName, engineerData.engineerId, engineerData.engineerEmail, engineerData.engineerGithub);
                allTeam.push(engineer);
                break;

            default:
                // Stop adding after "I'm done" choice
                keepAdding = false;
                break;
        }
    }

    // Call createHtml after the loop completes
    createHtml();
}

// Create a separate function for HTML generation
function createHtml() {
    // Use the `allTeam` array assuming it contains the team members
    fs.writeFileSync(outputPath, render(allTeam), "UTF-8");
    console.log("Team created!");
}

// Call init once to start the program
init();