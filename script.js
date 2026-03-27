let tasks = [];

function displayTasks() {
  let html = "";
  for (let i = 0; i < tasks.length; i++) {
    html += "<li>" + tasks[i] +
      "<button onclick='removeTask(" + i + ")'>x</button></li>";
  }
  document.getElementById("list").innerHTML = html;
}

function addTask() {
  let taskInput = document.getElementById("task");
  let text = taskInput.value;
  if (text === "") return;

  tasks.push(text);
  taskInput.value = "";
  displayTasks();
}

function removeTask(i) {
  tasks.splice(i, 1);
  displayTasks();
}

function clearAll() {
  tasks = [];
  displayTasks();
}