const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const clearBtn = document.getElementById("clearBtn");

let totalTodos = 0;
let completedTodos = 0;

addBtn.addEventListener("click", function () {
    const text = todoInput.value.trim();

    if (text === "") {
        alert("Please enter a todo");
        return;
    }

    const li = document.createElement("li");
    li.textContent = text;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    totalTodos++;
    totalCount.textContent = totalTodos;

    todoInput.value = "";

    completeBtn.addEventListener("click", function () {
        li.classList.toggle("completed");

        if (li.classList.contains("completed")) {
            completedTodos++;
        } else {
            completedTodos--;
        }

        completedCount.textContent = completedTodos;
    });

    deleteBtn.addEventListener("click", function () {
        if (li.classList.contains("completed")) {
            completedTodos--;
            completedCount.textContent = completedTodos;
        }

        todoList.removeChild(li);
        totalTodos--;
        totalCount.textContent = totalTodos;
    });
});

clearBtn.addEventListener("click", function () {
    todoList.innerHTML = "";
    totalTodos = 0;
    completedTodos = 0;
    totalCount.textContent = 0;
    completedCount.textContent = 0;
});
