function loadTodos(){
    //this function will load the todos from the browser
    const todos=JSON.parse(localStorage.getItem("todos")) ||{"todoList":[]};
    console.log(todos);
    return todos;
}

function addTodoToLocalStorage(text){
const todos=loadTodos();
todos.todoList.push(text); //add entered text to todo
localStorage.setItem("todos",JSON.stringify(todos));  //JSON.stringify converts objects to
}

document.addEventListener('DOMContentLoaded',()=>{  // when dom is loaded
    const inputData=document.getElementById("todoinput");

    const submitBtn=document.getElementById('addtodo');
    submitBtn.addEventListener('click',(event)=>{
        const text=inputData.value;
        if(text==""){
            alert("Please enter a todo");
        }
        else{
            addTodoToLocalStorage(text);
        }
    })
    
    inputData.addEventListener('change',(event)=>{   //it adds events 
        //this call back mathod is fired everytime there is change in the input tag

        const enteredText=event.target.value;  //to fetch the entered value
        console.log(enteredText.trim());  //trim() remove white spaces
    })
   loadTodos();  //todo is called when browser is loaded
})