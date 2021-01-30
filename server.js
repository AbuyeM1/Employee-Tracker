
const mysql = require("mysql");
const inquirer = require('inquirer');

//this connection for mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employeeDB"
})
// create the connection with server
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
            name: 'function',
            choices: ["view all employees",
                "view all roles",
                "view all departments",
                "Add department",
                "Add role",
                "Add employee",
                "update employee role",
                "Done"
            ]
        }

        )
        .then((answer) => {
            switch (answer.function) {
                case "view all employees":
                    viewEmployees();
                    break;
                case "view all roles":
                    viewRoles();
                    break;
                case "view all departments":
                    viewDepartments();
                    break;
                case "update employee role":
                    updateRoles();
                    break;
                case "Add employee":
                    addEmployee();

                    break;
                case "Add role":
                    addRoles();
                    break;
                case "Add department":
                    addDepartment();

                    break;
                case "Done":
                    break;
            }
        }
        );
};

function viewEmployees() {
    console.log("Display all employee list");
    connection.query("SELECT * FROM employeeDB.employee",
        function (err, res) {
            if (err) throw err
            console.table(res);
            start();
        })

}
function viewDepartments() {
    connection.query("SELECT * FROM employeeDB.department",
        function (err, res) {
            if (err) throw err
            console.table(res);
            start()
        })

}
function viewRoles() {
    connection.query("SELECT * FROM employeeDB.role",
        function (err, res) {
            if (err) throw err
            console.table(res);
            start()
        })

}
function listRoles(employeInfo) {

    var roleList = null;
    connection.query("SELECT id,title FROM employeeDB.role",
        function (err, res) {
            if (err) throw err
            var roleList = res.map(({ id, title }) => ({ value: id, id: `${id}`, title: `${title}` }));

            return promptRoles(employeInfo, roleList);
        })
}
function promptRoles(employeInfo, roleList) {
    inquirer
        .prompt([
            {
                type: "list",
                name: "roleID",
                message: "Which role do you want to assign?",
                choices: roleList,

            },


        ]).then(ans => {


            var query = "INSERT INTO employeeDB.employee (first_name, last_name, role_id, manager_id) VALUES (" + `"${employeInfo.employeesFirst}"` + "," + `"${employeInfo.employeesLast}"` + "," + `${ans.roleID}` + "," + `${employeInfo.managerID}` + ")";
            connection.query(query,

                function (err, res) {
                    if (err) throw err
                    console.log("Successfully Employee Info Inserted");
                    start()
                })

        })



}
// function addEmployee() {
//     var x = 2;

//     inquirer
//         .prompt([
//             {
//                 name: "employeesFirst",
//                 type: "input",
//                 message: "What is employee first name?",

//             },
//             {
//                 name: "employeesLast",
//                 type: "input",
//                 message: "What is employee Last name?",

//             },

//             {
//                 name: "managerID",
//                 type: "input",
//                 message: "please enter the manager id?",

//             }

//         ]).then(ans => {
//             listRoles(ans);

//         })
// }
// function addDepartment() {
//     inquirer
//         .prompt([
//             {
//                 name: "Department",
//                 type: "input",
//                 message: "Please enter the department you would like to add?",
//             }
//         ]).then(ans => {
//             connection.query("INSERT INTO department SET d_name = ?", {
//                 name: answer.Department

//             });
//             connection.query("SELECT * FROM department", function (err, res) {
//                 if (err) throw err;
//                 console.table(res);
//                 start();

//             })
//         })
// }

// function addRoles() {
//     inquirer
//         .prompt([
//             {
//                 name: "title",
//                 type: "input",
//                 message: "Please enter the role's title",
//             },
//             {
//                 name: "salary",
//                 type: "input",
//                 message: "Please enter the role's salary",
//             },
//             {
//                 name: "department_id",
//                 type: "input",
//                 message: "Please enter the department id ",
//             },

//         ]).then(ans => {
//             connection.query("INSERT INTO role SET ?", {

//             });
//             connection.query("SELECT * FROM role", function (err, res) {
//                 if (err) throw err;
//                 console.table(res)
//             })

//         })
// }







