let users = [];
while (true) {
  let input = prompt(
    "Enter User's Detail. (name, age, hasProfilePicture (yes/no), salary).\nEnter finish if the list is finished. (separate by comma ',')"
  );
  if (input.toLowerCase() === "finish") {
    break;
  }
  let userArr = input.split(",").map(value => value.trim());

  if (userArr.length < 4 || userArr.some(value => value ==="")){
    alert("Error, Please Enter all Required Details.");
    continue;
  }

  let name = userArr[0];
  let age = Number(userArr[1]);
  let hasProfilePicture = userArr[2].toLowerCase() === "yes";
  let salary = Number(userArr[3]);

  if(isNaN(age) || isNaN(salary)){
    alert("Error, Age & Salary must be Numbers.");
    continue;
  }

  if(userArr[2] !== "yes" && userArr[2] !== "no"){
    alert("Error, Enter the Correct Value for hasProfilePicture(yes or no)")
    continue;
  }

  console.log(userArr);

  users.push({
    name,
    age,
    hasProfilePicture,
    salary,
  });
  
}
// Part 1
let sortedUsers = [...users].sort((a,b) => a.age - b.age);
console.log(sortedUsers);

// Part 2
let maxSalary = users.sort((a,b) => b.salary - a.salary);
console.log("The person who has a Highest Salary is: " + maxSalary[0].name);

 // Part 2 - another solving method
let highestSalaryUser = users.reduce((acc,currentUser) => currentUser.salary>acc.salary ? currentUser : acc , users[0]);
console.log("The person who has a Highest Salary is: " + highestSalaryUser.name);

// Part 3
let sumOfSalary = users.reduce((acc,currentPerson) => {return acc + currentPerson.salary}, 0);
let averageOfSalary = (sumOfSalary)/(users.length);
console.log("The Average Salary of Users is: " + averageOfSalary);

// Part 4
let havingProfilePicture = users.every(users => users.hasProfilePicture)
console.log("All users have profile pictures:" + havingProfilePicture);

// Part 4 - another solving method
let havingProfilePic = users.map(user => user.hasProfilePicture).includes(false) === false;
console.log("All users have profile pictures:" + havingProfilePic);