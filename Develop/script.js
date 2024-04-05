// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const collectEmployees = function() {
const employeesArray = [];
  // TODO: Get user input to create and return an array of employee objects

let addNewEmployees= true;
while(addNewEmployees) {
  const firstName= prompt ("Enter your first name:");
  const lastName= prompt("Enter your last name:");
  //Im using  let for salary bc it might be reassigned when i have to find avg salary!
  //using parseFloat to take string of data and turn to float number
  let salary= parseFloat(prompt("Enter your salary:"));
//when having an if statement, you want to 'if () {what should happen}; be sure
//to end with semi colon!
  if (isNaN(salary)){ //im saying if salary id not a # (isNaN), then
    salary= 0 
  }

//here we have onject 'employee' and what info we want from each employee
const employee= {
firstName: firstName,
lastName: lastName,
salary: salary
};
// we are pushing the employe infor from lines above
//to the array we created earlier called'emoplyeeArray1' to store the data
//we collected using the object 'employee'
employeesArray.push(employee);// pushes new data to the employeesArray1 w/o changing 
//what was already in the employeesArray1
addNewEmployees= confirm("Any new employee to add?"); 
//i dont need to if statment for if they cancel bc of built in func CONFIRM
}
return employeesArray //means when the terminates function collectEmployees
}

// Display the average salary
//first you want to declare the totalSalary and avgSalary variables!!
const totalSalary=[];
const avgSalary=[];

const displayAverageSalary = function(employeesArray) {
  
  //.reduce((acc,curr)=> acc+curr. 
  //.reduce is array method that allows you to find the sum
  //cur.salary:the 'curr'ent element being processed which would be salary portion of our array!
  //acc- accumulates the result of each iterations!
  //0 is the inital value of accumulator(acc)
const totalSalary= employeesArray.reduce((acc,curr)=> acc+curr.salary, 0);
const avgSalary= totalSalary/employeesArray.length;

console.log(`The average employee salary between our employees is $${avgSalary}`);

 // TODO: Calculate and display the average salary
}
/////////////////////////////////////////////////////////////
// Select a random employee
//math.random this generates floating # between0 and 1
//math.floor rounds to nearest integer
//randomIndex vari to access a random employee in employeesArray

/*//**Math.random()** function to generate a random decimal number between 0 and 1. 
//We multiply this number by the length of the array using the myArray.length property to get a random index within the array. 
//Finally, we use the **Math.floor()** function to round down the decimal to the nearest integer, 
which gives us a **valid index** (hence why in this challenge we have a const=randomIndex) within the array. 
After that, we use this index to pick a 
**random element** (hence why we have const randomEmployee) from the array and store it in the randomElement variable.*/
//source: https://www.javatpoint.com/how-to-pick-random-elements-from-an-array

const getRandomEmployee = function(employeesArray) {

  const randomIndex= Math.floor(Math.random()*employeesArray.length);
  const randomEmployee=employeesArray[randomIndex]; //storage purpose
  
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
  
  // TODO: Select and display a random employee
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
