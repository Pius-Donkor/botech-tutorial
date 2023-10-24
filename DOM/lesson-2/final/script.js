// selecting elements
const task_input = document.querySelector("#task-input");
const addButton = document.querySelector(".add-task-but");
const taskContainer = document.querySelector(".task-list");
const resetButton = document.querySelector(".reset-button");

// task Array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let taskCounter = 0;
console.log(tasks);

// function to load the initial tasks
function initiateTasks(tasks) {
  tasks.forEach((task) => addTaskElement(task));
  console.log(document.querySelectorAll(".task-element"));
}
if (tasks.length) {
  initiateTasks(tasks);
  loadElements();
}

// function to store the tasks
function storeTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// function to add task
const addTask = () => {
  if (!task_input.value) {
    alert("input cannot be empty");
    return;
  }
  const task = task_input.value;
  if (task) {
    const taskDetail = { taskId: taskCounter++, task, checked: false };
    tasks.push(taskDetail);
    addTaskElement(taskDetail);
    loadElements();
    storeTasks();
    task_input.value = "";
  }
};

// function to delete task

function deleteTask(e) {
  if (e.target.className === "delete-button") {
    const id = +e.target.parentElement.getAttribute("data-id");
    tasks = tasks.filter((task) => {
      return task.taskId !== id;
    });
    e.target.parentElement.remove();
    storeTasks();
  }
}

// function to reset the list
function resetList() {
  tasks.length = 0;
  taskContainer.innerHTML = "";
  storeTasks();
}

//function for checked
function checkTask(e) {
  if (e.target.className === "check") {
    if (e.target.checked) {
      e.target.parentElement.style.textDecoration = "line-through";
    } else {
      e.target.parentElement.style.textDecoration = "none";
    }
  }
}

// function to add task element to page

function addTaskElement(task) {
  const element = ` <li class="task-element" data-id="${task.taskId}" >
        <input type="checkbox" id="${task.taskId}" class='check' />
         <p>${task.task}</p>
       <button class="delete-button">❌</button>
       </li>`;

  return (taskContainer.innerHTML += element);
}

//reacting to events

// task addition event
addButton.addEventListener("click", () => {
  addTask();
});

// adding task on keypress
task_input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
    // checkbox = document.querySelectorAll(".check");
    // console.log(document.querySelectorAll(".check"));
  }
});

// updating the task elements events
function loadElements() {
  // checking task event
  if (tasks.length) {
    taskContainer.addEventListener("change", checkTask);
  }
  // deleting task event
  taskContainer.addEventListener("click", deleteTask);
  // reset the list event
  resetButton.addEventListener("click", resetList);
}
