USE employeeDB;

INSERT INTO department (name) 
VALUES ("Sales"), ("Engineer"),("Finance"),("Legal");


INSERT INTO role
 (title, salary, department_id)
VALUES
('Sales Leader', 100000, 1),

('Salesperson', 80000, 2),

 ('Software Engineer', 120000, 3),

 ('Account Manager', 160000, 4),

 ('Legal Team Lead', 250000, 5);

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)
 VALUES 
 ("Daved", "Joe", 1, NULL),

 ("John", "Adam", 2, 3),

  ("Ana", "Alxe", 3, NULL),

 ("stan", "Ray", 4, 5),

  ("Kevin", "walter", 5, NULL);
 
