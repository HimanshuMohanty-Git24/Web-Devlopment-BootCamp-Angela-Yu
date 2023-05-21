let addButton = document.getElementById("addButton");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
  if (taskInput.value === "") {
    alert("Please enter a task");
  } else {
    let task = document.createElement("li");
    task.innerText = taskInput.value;
    taskList.appendChild(task);
    taskInput.value = "";
  }
}

addButton.addEventListener("click", addTask);
