const mysql = require("mysql");
const inquirer = require('inquirer');




var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employeeDB"
})

connection.connect(function (err) {
    if (err) throw err;
    console.log(err);
    start();
});
function start() {
    inquirer
        .prompt({

            type: 'list',
            message: 'What do you like to do?',
            name: 'Select',
            choices: ["view all employees",
                "view all roles",
                "view all department",
                "Add departments",
                "Add roles",
                "Add employees",
                "Done"
            ]
        }

        )
        .then((ans) => {
            switch (ans.choices) {
                case "view all employees":
                    viewEmployees();
                    start();
                    break;
                case "view all roles":
                    viewRols();
                    start();
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
                case "Done":
                   
                    break;

            }
        }
        );
};
function viewEmployees() {
    connection.query("SELECT * FROM employee",
        function (err, res) {
            if (err) throw err
            console.table(res);
            start()
        })

}

