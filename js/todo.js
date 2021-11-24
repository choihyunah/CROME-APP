const toDoForm = document.getElementById("todo-form");
const toDoInPut = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInPut.value;
    toDoInPut.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);