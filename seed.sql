USE employeeDB;

INSERT INTO department (name) 
VALUES ("Sales"), ("Engineer"),("Finance"),("Legal");


INSERT INTO role (title, salary, department_id)
VALUES("Manager", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES("Assistant Manager", 70000, 2);
INSERT INTO role (title, salary, department_id)
VALUES("Second Assistant Manager", 50000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
 VALUES ("John", "Adam", 1, NULL);
