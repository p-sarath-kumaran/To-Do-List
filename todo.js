const taskInput = document.getElementById("input");
const taskList = document.getElementById("display");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    const task = { text: taskText };
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    displayTasks();
}

function delTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="ri-delete-bin-line"></i>';
        deleteButton.onclick = function() {
            delTask(index);
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });

    if (tasks.length === 0) {
        taskList.classList.add('hidden');
    } else {
        taskList.classList.remove('hidden');
    }
}

displayTasks();
