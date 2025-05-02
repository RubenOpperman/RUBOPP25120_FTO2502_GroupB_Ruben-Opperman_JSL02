//prompt user to enter title
let title1 = prompt("Enter task 1 title:");
//validating title to check for empty string
while (title1 == false) {
  alert("Please enter a title");
  title1 = prompt("Enter task 1 title:");
}
//prompt user to enter description
let description1 = prompt("Enter task 1 description:");
//validating description to check for empty string
while (description1 == false) {
  alert("Please enter a description");
  description1 = prompt("Enter task 1 description:");
}
//prompt user to enter status
let status1 = prompt(
  "Enter task status: 'todo', 'doing' or 'done':"
).toLowerCase();
//validating to see if status matches 1 of 3 options
while (!["todo", "doing", "done"].includes(status1)) {
  alert("Invalid status. Please enter 'todo','doing'or 'done'.");
  status1 = prompt(
    "Enter task status: 'todo', 'doing' or 'done':"
  ).toLowerCase();
}
//checking status to console log proper message for the given context
if (status1 === "done") {
  console.log("Title: " + title1 + ", Status: done");
} else {
  console.log("No tasks completed, let's get to work!");
}
//prompt user to enter title
let title2 = prompt("Enter task 2 title:");
//validating title to check for empty string
while (title2 == false) {
  alert("Please enter a title");
  title2 = prompt("Enter task 2 title:");
}
//prompt user to enter description
let description2 = prompt("Enter task 2 description:");
//validating description to check for empty string
while (description2 == false) {
  alert("Please enter a description");
  description2 = prompt("Enter task 2 description:");
}
//prompt user to enter status
let status2 = prompt(
  "Enter task status: 'todo', 'doing' or 'done':"
).toLowerCase();
//validating to see if status matches 1 of 3 options
while (!["todo", "doing", "done"].includes(status2)) {
  alert("Invalid status. Please enter 'todo','doing'or 'done'.");
  status2 = prompt(
    "Enter tast status: 'todo', 'doing' or 'done':"
  ).toLowerCase();
}
//checking status to console log proper message for the given context
if (status2 == "done") {
  console.log("Title: " + title2 + ", Status: done");
} else {
  console.log("No tasks completed, let's get to work!");
}
