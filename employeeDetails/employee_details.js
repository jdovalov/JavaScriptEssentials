
const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
      //... More employee records can be added here
];

// Function to format employee as HTML
const employeeToHTML = (employee,..._) =>
	`<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`;

// Function to display selected employees
function displaySelectedEmployees(employeeList){
	const employeeListHTML = employeeList.map((employee, index) => employeeToHTML(employee)).join('');
        document.getElementById('employeesDetails').innerHTML = employeeListHTML;
}


// Function to display all employees
function displayEmployees() {
	displaySelectedEmployees(employees);
}

function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
	const hrEmployees = employees.filter(employee => employee.department === 'HR');
	displaySelectedEmployees(hrEmployees);
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
	document.getElementById('employeesDetails').innerHTML = employeeToHTML(foundEmployee);
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}

function findEmployeeBySpecialization(employeeSpecialization) {
    const foundEmployee = employees.find(employee => employee.specialization === 'JavaScript');
    if (foundEmployee) {
	document.getElementById('employeesDetails').innerHTML = employeeToHTML(foundEmployee);
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}