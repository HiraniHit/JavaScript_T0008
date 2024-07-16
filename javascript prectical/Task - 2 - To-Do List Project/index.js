let tasks = [];
currentFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
    const storedTasks = localStorage.getItem("todoList-data");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
    saveTask();
});

function addTask() {
    const inputTask = document.querySelector("#search").value.trim();

    if (inputTask) {
        const newTask = {
            id: Date.now(),
            description: inputTask,
            completed: false,
        };
        tasks.push(newTask);
        document.querySelector("#search").value = "";
        localStorage.setItem("todoList-data", JSON.stringify(tasks));
        saveTask();
    }
}

function saveTask() {
    const list = document.querySelector("#task-list");
    list.innerHTML = "";

    const filteredTask = filterTasks(currentFilter);
    filteredTask.forEach((value) => {
        console.log(value);
        const li = document.createElement("li");
        li.setAttribute("class", "li-info");
        li.innerHTML += `
            <input type="checkbox" onclick="checkbox(${
                value.id
            })" class="chechbox"  name="chack" ${
            value.completed ? "checked" : ""
        }/>
            <span class="span-info" style="text-decoration: ${
                value.completed ? "line-through" : ""
            }; min-width :150px;">${value.description}</span>
            <div>
                <button class="inner-btn" onclick="editTask(${
                    value.id
                })">&#9998;</button>
                <button class="inner-btn" onclick="deleteTask(${
                    value.id
                })">&#x1F5D1;</button>
            </div>`;
        list.appendChild(li);
    });
}

function checkbox(id) {
    let task = tasks.find((value) => value.id == id);

    if (!task.completed) {
        task.completed = true;
    } else {
        task.completed = false;
    }
    localStorage.setItem("todoList-data", JSON.stringify(tasks));
    saveTask();
}

function editTask(id) {
    let task = tasks.find((value) => value.id === id);
    if (task) {
        let editedTask = prompt("Edit Task :", task.description);
        if (editedTask !== null && editedTask.trim() !== "") {
            task.description = editedTask.trim();
            localStorage.setItem("todoList-data", JSON.stringify(tasks));
            saveTask();
        }
    }
}

function deleteTask(id) {
    tasks = tasks.filter((value) => value.id !== id);
    localStorage.setItem("todoList-data", JSON.stringify(tasks));
    saveTask();
}

function filterTasks(filter) {
    currentFilter = filter;
    switch (filter) {
        case "pending":
            return tasks.filter((task) => !task.completed);
        case "completed":
            return tasks.filter((task) => task.completed == true);
        default:
            return tasks;
    }
}

function setFilter(filter) {
    currentFilter = filter;
    saveTask();
}

saveTask();
