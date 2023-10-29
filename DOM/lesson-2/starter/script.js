const task_input = document.querySelector("#task-input");
const task_container = document.querySelector(".task-list");
const addButton = document.querySelector(".add-task-but");
console.log(task_input);

function acceptTaskInput(e) {
  console.log(e);
  const task = task_input.value;
  let taskElement = `<li class="task-element" data-id="1">
  <input type="checkbox" id="1" class="check" />
  <p>${task}</p>
  <button class="delete-button">❌</button>
</li>`;

  task_container.innerHTML += taskElement;
  task_input.value = "";
}

task_input.addEventListener("keypress", (e) => {
  if (e.key !== "Enter") return;
  acceptTaskInput(e);
});
addButton.addEventListener("click", acceptTaskInput);
