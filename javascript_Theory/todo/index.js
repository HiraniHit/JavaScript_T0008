let tasks = [];
let currentFilter = 'all';

// Load tasks from local storage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    renderTasks();
});

function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const description = taskInput.value.trim();
    
    if (description) {
        const newTask = {
            id: Date.now(),
            description: description,
            completed: false
        };
        tasks.push(newTask);
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    const filteredTasks = filterTasks(currentFilter);
    
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.setAttribute("class","li-info")
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.description}</span>
            <div>
                <button class="inner-btn" onclick="toggleTask(${task.id})">${task.completed ? 'Undo' : 'Complete'}</button>
                <button class="inner-btn" onclick="editTask(${task.id})">Edit</button>
                <button class="inner-btn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        const newDescription = prompt('Edit task:', task.description);
        if (newDescription !== null && newDescription.trim() !== '') {
            task.description = newDescription.trim();
            saveTasks();
            renderTasks();
        }
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

function filterTasks(filter) {
    currentFilter = filter;
    switch(filter) {
        case 'panding':
            return tasks.filter(task => !task.completed);
        case 'completed':
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
}

// Function to handle filter button clicks
function setFilter(filter) {
    currentFilter = filter;
    renderTasks();
}

// Initial render
renderTasks();