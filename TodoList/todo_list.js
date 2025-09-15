
const addTaskBtn = document.getElementById("addTaskBtn");

const clearCompletedBtn = document.getElementById("clearCompletedBtn");
let tasks = [];
console.log("sono arrivato fino a punto 0");


function addTask() {
    console.log("sono arrivato fino a punto 1");
    const taskInput= document.getElementById("taskInput");
    
            const taskText = taskInput.value.trim();
            console.log("sono arrivato fino a punto 2 : "+ taskText);
            if (taskText !== "") {
                console.log("sono arrivato fino a punto 3 : "+ taskText);
                tasks.push({ text: taskText});
                taskInput.value = "";
                console.log("sono arrivato fino a punto 4 : "+ taskInput.value);
                displayTasks();
            }
            
        displayTasks();
        console.log("sono arrivato fino a punto 5");
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
                li.querySelector("input").addEventListener("change", () => toggleTask(index));
                taskList.appendChild(li);
            });
}


function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
    
}

