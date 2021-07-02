/*
- `name` (string)
- `surname` (string)
- `age` (number)
- `previousExperience` (array of strings with names to previous jobs, if any. Otherwise empty)
- `education`
- `isLearningJavaScript` (boolean)
*/

function displayStudent(student) {
  console.log(`Name: ${student.name}`);
  console.log(`Surname: ${student.surname}`);
  console.log(`Age: ${student.age}`);
  if (!student.previousExperience.length) {
    console.log("none");
  } else {
    console.log(`Previous Experience: ${student.previousExperience}`);
  }
  console.log(`Eductation: ${student.eductation}`);
  console.log(`isLearningJavaScript: ${student.isLearningJavaScript}`);
}

const student1 = {
  name: "Harry",
  surname: "Potter",
  age: 26,
  previousExperience: ["Magic", "Potion brewing"],
  eductation: "leSchool",
  isLearningJavaScript: false,
};

const student2 = {
  name: "Tom",
  surname: "Test",
  age: 17,
  previousExperience: [],
  eductation: "Trainee computer science",
  isLearningJavaScript: true,
};

const student3 = {
  name: "Jean",
  surname: "Grey",
  age: 31,
  previousExperience: [
    "Janitor",
    "Customer service",
    "Assisting marketing manager",
  ],
  eductation: "The fancy College",
  isLearningJavaScript: true,
};

displayStudent(student1);
displayStudent(student2);
displayStudent(student3);
