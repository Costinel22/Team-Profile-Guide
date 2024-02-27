const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const generateTeam = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.




const setEnginner = [{
        type: "input",
        name: "enginnerName",
        message: "Please enter the name of the enginner!"
    },
    {
        type: "input",
        name: "enginnerId",
        message: "Please enter the Id of the enginner!"
    }, {
        type: "input",
        name: "enginnerEmail",
        message: "Please enter the email of the enginner!"
    }, {
        type: "input",
        name: "enginnerGithub",
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