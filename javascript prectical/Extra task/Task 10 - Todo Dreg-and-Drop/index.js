let tasks = [];
currentFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
    const storedTasks = localStorage.getItem("todoList-drag-data");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
    saveTask();
});

function addtask() {
    const inputTask = document.querySelector("#search").value.trim();

    if (inputTask) {
        const newtask = {
            id: Date.now(),
            description: inputTask,
            completed: false,
        };
        tasks.push(newtask);
        document.querySelector("#search").value = "";
        localStorage.setItem("todoList-drag-data", JSON.stringify(tasks));
        saveTask();
    }
}

function saveTask() {
    const list = document.querySelector("#task-list");
    list.innerHTML = "";

    const filteredTask = filterTasks(currentFilter);
    filteredTask.forEach((value) => {
        const li = document.createElement("li");
        li.setAttribute("class", "li-info");
        li.setAttribute("draggable", "true");
        li.setAttribute("data-id", `${value.id}`);
        li.innerHTML += `
            <p class="drag-handle">&#9776;</p>
            <input type="checkbox" onclick="chackbox(${
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

        //for second method

        // li.addEventListener('dragstart', dragStart)
        // li.addEventListener('dragover', dragOver)
        // li.addEventListener('drop', drop)
    });
    darg();
}

function chackbox(id) {
    let task = tasks.find((value) => value.id == id);

    if (!task.completed) {
        task.completed = true;
    } else {
        task.completed = false;
    }
    localStorage.setItem("todoList-drag-data", JSON.stringify(tasks));
    saveTask();
}

function editTask(id) {
    let task = tasks.find((value) => value.id === id);
    if (task) {
        let editedTask = prompt("Edit Task :", task.description);
        if (editedTask !== null && editedTask.trim() !== "") {
            task.description = editedTask.trim();
            localStorage.setItem("todoList-drag-data", JSON.stringify(tasks));
            saveTask();
        }
    }
}

function deleteTask(id) {
    tasks = tasks.filter((value) => value.id !== id);
    localStorage.setItem("todoList-drag-data", JSON.stringify(tasks));
    saveTask();
}

function filterTasks(filter) {
    currentFilter = filter;
    switch (filter) {
        case "panding":
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

//drag

function darg() {
    let items = document.querySelectorAll(".li-info");
    let sortableList = document.querySelector("#task-list");

    items.forEach((item) => {
        item.addEventListener("dragstart", () => {
            setTimeout(() => item.classList.add("dragging"), 0);
        });
        item.addEventListener("dragend", () => {
            item.classList.remove("dragging");
        });
    });

    let initSortableList = (e) => {
        e.preventDefault();

        let draggingItem = sortableList.querySelector(".dragging");

        let siblings = [
            ...sortableList.querySelectorAll(".li-info:not(.dragging)"),
        ];

        let nextSiblings = siblings.find((sibling) => {
            const rect = sibling.getBoundingClientRect();
            console.log(e.clientY);

            return e.clientY < rect.top + rect.height / 2;
        });
        sortableList.insertBefore(draggingItem, nextSiblings);
    };
    sortableList.addEventListener("dragover", initSortableList);
    sortableList.addEventListener("dragenter", (e) => e.preventDefault());
}
saveTask();
//second method

// let draggedItem = null;

// function dragStart(e) {
//     draggedItem = this;
//     e.dataTransfer.effectAllowed = 'move';
//     e.dataTransfer.setData('index/html', this.innerHTML);
// }

// function dragOver(e) {
//     e.preventDefault();
// }

// function drop(e) {
//     e.preventDefault();

//     if (this !== draggedItem) {

//         const draggedId = parseInt(draggedItem.getAttribute('data-id'));
//         const droppedId = parseInt(this.getAttribute('data-id'));
//         const draggedIndex = tasks.findIndex(task => task.id === draggedId);
//         const droppedIndex = tasks.findIndex(task => task.id === droppedId);

//         [tasks[draggedIndex], tasks[droppedIndex]] = [tasks[droppedIndex], tasks[draggedIndex]];

//         localStorage.setItem("todoList-drag-data", JSON.stringify(tasks));
//         saveTask();
//     }
// }
