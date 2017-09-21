

function Employee(name, jobTitle, salary, status){
	this.name = name;
	this.jobTitle = jobTitle;
	this.salary = salary;
	this.status = status || fullTime;
	

	

	
var employee1 = new Employee("Joe","gardener",10000);
var employee2 = new Employee("Alice","artist",11000);
var employee3 = new Employee("Sam","scientist", 21000, "part-time");

		var employeesArray = [];
	

	employeesArray.push(employee1);
	
	console.log(employeesArray);
	
}
	