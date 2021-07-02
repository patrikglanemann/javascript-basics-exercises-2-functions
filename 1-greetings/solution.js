function greet(userName = "MrNobody") {
  return `Hello ${userName}`;
}

//for (let i=0;i<3;i++){}
const userName1 = greet("Patrik");
const userName2 = greet("");
const userName3 = greet("");

alert(`${userName1}, ${userName2}, ${userName3}`);
