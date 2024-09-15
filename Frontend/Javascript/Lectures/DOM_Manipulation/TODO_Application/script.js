function loadTodos(){
    //this function will load the todos from the browser
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todoList": []};
    console.log(todos); 
    return todos;
}

function addToLocalStorage(todo){
    const todos = loadTodos();
    todos.todoList.push(todo); //add entered text to todo
    localStorage.setItem("todos", JSON.stringify(todos));  //JSON.stringify converts objects to string
}

function executeFilterActions(event){
const todoList = document.getElementById('todoList');
const element=event.target;
const value=element.getAttribute("data-filter");  //to access specific attribute of html    
todoList.innerHTML = '';  //to remove li from ul
const todos = loadTodos();

// Pending 
if(value=="all"){
    console.log(todoList);
    todos.todoList.forEach(todo => {
        appendTodoInHtml(todo);
    });
}else if(value=="pending"){
    todos.todoList.forEach(todo => {
        if (todo.isCompleted!=true) {
            appendTodoInHtml(todo);  // Display only pending (not completed) todos
        appendTodoInHtml(todo);
        }
});
}else{
    todos.todoList.forEach(todo => {
        if(todo.isCompleted===true){
            appendTodoInHtml(todo);
        } 
});
}
}
function appendTodoInHtml(todos){
    const todoList = document.getElementById('todoList');

    const todoItem = document.createElement("li");  //create li in html
    const textDiv = document.createElement("div");
    textDiv.textContent = todos.completeText;
    todoItem.classList.add("todoItem"); //added new class

    const wrapper = document.createElement("div");
    wrapper.classList.add("todoButtons");

    //make edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");

    //make delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    //make completed button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";
    completeBtn.classList.add("completeBtn");

    wrapper.appendChild(editBtn);
    wrapper.appendChild(deleteBtn);
    wrapper.appendChild(completeBtn);

    todoItem.appendChild(textDiv);
    todoItem.appendChild(wrapper);
    todoList.appendChild(todoItem);
}

document.addEventListener('DOMContentLoaded', () => {  // when dom is loaded
    const inputData = document.getElementById("todoinput");
    const todoList = document.getElementById('todoList');
    const submitBtn = document.getElementById('addtodo');

    const filterBtns=document.getElementsByClassName("filterBtn");
    for(const btn of filterBtns){
        btn.addEventListener("click", executeFilterActions);
    }
    
    submitBtn.addEventListener('click', (event) => {
        const text = inputData.value.trim();
        if (text == "") {
            alert("Please enter a todo");
        } else {
            addToLocalStorage({completeText:text,isCompleted:false});
            appendTodoInHtml({completeText:text,isCompleted:false}); //append new input entered by user
            inputData.value = '';
        }
    });
    
    inputData.addEventListener('change', (event) => {   //it adds events 
        //this callback method is fired every time there is a change in the input tag

        const enteredText = event.target.value;  //to fetch the entered value
        console.log(enteredText.trim());  //trim() removes white spaces
    });
    const todos = loadTodos();  //todo is called when browser is loaded

   
});