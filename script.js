let tasks = [];

function displayTasks() {
	let html = "";
	for (let i = 0; i < tasks.lenght; i++) {
		html += "<li>" + tasks[i] +
		"<button onclick='removeTask(" + i + ") '>x</button></li>";
	}
	document.getElementById("list").innerHTML = html;
}
function addTask() {
  let taskInput = document.getElementById("task");
  let text = taskInput.value;
  if (text === "") {
    return;
  }
  tasks.push(text);
  taskInput.value = "";
  saveTasks();
  displayTasks();
}
function removeTask(i) {
  tasks.splice(i, 1);
  saveTasks();
  displayTasks();
}