const mysql = require("mysql");
const inquirer = require('inquirer');


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "employeeDB"
})

connection.connect();
Manager();
function Manager(){
inquirer
  .prompt([
    {
      type: 'list',
      message: 'What do you want to do?',
      name: 'namemanu',
      choices:[ "Add departments","Add role", "Add employee"

      ],
    },
    // {
    //   type: 'password',
    //   message: 'What is your password?',
    //   name: 'password',
    // },
    // {
    //   type: 'password',
    //   message: 'Re-enter password to confirm:',
    //   name: 'confirm',
    // },
  ])
  .then((response) =>{
    console.log(response);
    // response.confirm === response.password
    //   ? console.log('Success!')
    //   : console.log('You forgot your password already?!')
    }
  );
}