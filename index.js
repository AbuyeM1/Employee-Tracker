const mysql = require("mysql");
const inquirer = require('inquirer');



var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "employeeDB"
})

connection.connect(function (err) {
    if (err) throw err;
    start();
});
function start() {
    inquirer
        .prompt({

            type: 'list',
            message: 'What do you want to do?',
            name: 'Menu',
            choices: ["view all employees",
                "view all roles",
                "view all department",
                "Add departments",
                "Add roles",
                "Add employees"
            ]
        }

        )
        .then((answer) => {
            switch (ans.choices) {
                case "view all employees":
                    viewEmployees();

                    break;
                case "view all roles":
                    viewRols();
                    break;
                case "view all departments":
                    viewDepartment();
                    break;
                case "update employee roles":
                    updateRoles();
                    break;
                case "Add departments":
                    addEmployee();
                    break;
                case "Add roles":
                    addRoles();
                    break;
                case "Add employees":
                    addDepartment();
                    break;
                case "exit":
                    connection.end();
                    break;

            }
        }
        );
};

// function viewEmployees() {
//     var query = "SELECT ";
//     connection.query(query, function (err, res) {
//         if (err) throw err;
//         start();
//     });
// };
// function viewRols() {
//     var query = "SELECT ";
//     connection.query(query, function (err, res) {
//         if (err) throw err;
//         start();
//     });
// };
// function viewDepartment() {
//     var query = "SELECT ";
//     connection.query(query, function (err, res) {
//         if (err) throw err;
//         start();
//     });
// };
// function updateRoles() {
//     var query = "SELECT ";
//     connection.query(query, function (err, res) {
//         if (err) throw err;
//         start();
//     });
// };






