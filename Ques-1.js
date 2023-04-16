// 1. Write a JavaScript program to:
// a) filter employees according to department = IT
// b) filter employees who earn a salary < 65000
// Sample Input:
// let employees = [
// {
// "id": 1,
// "name":"Abhinav",
// "department":"IT",
// "Salary":75000
// },
// {
// "id": 2,
// "name":"Gaurav",
// "department":"Sales",
// "Salary":52000
// },
// {
// "id": 3,
// "name":"Raj",
// "department":"IT",
// "Salary":64000
// }]
// Output:
// [
// {
// "id": 1,
// "name":"Abhinav",
// "department":"IT",
// "Salary":75000
// },
// {

// "id": 3,
// "name":"Raj",
// "department":"IT",
// "Salary":64000
// }
// ]
// [
// {
// "id": 2,
// "name":"Gaurav",
// "department":"Sales",
// "Salary":52000
// },
// {
// "id": 3,
// "name":"Raj",
// "department":"IT",
// "Salary":64000
// }
// ]

//Solution

let employees = [
  {
    "id": 1,
    "name": "Abhinav",
    "department": "IT",
    "salary": 75000
  },
  {
    "id": 2,
    "name": "Gaurav",
    "department": "Sales",
    "salary": 52000
  },
  {
    "id": 3,
    "name": "Raj",
    "department": "IT",
    "salary": 64000
  }
];

// Filter employees according to department = IT
let itEmployees = employees.filter(employee => employee.department === "IT");

console.log("IT Employees:");
console.log(itEmployees);

// Filter employees who earn a salary < 65000
let lowSalaryEmployees = employees.filter(employee => employee.salary < 65000);

console.log("Employees with salary < 65000:");
console.log(lowSalaryEmployees);
