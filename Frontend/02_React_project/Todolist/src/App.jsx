import { useCallback, useEffect, useState } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    function deleteTodoById(value) {
        const newTodo=todos.filter(todo => todo.value !== value);
        console.log(newTodo); 
        setTodos(newTodo);
    }
    
    const memoDeleteTodoCallback=useCallback(deleteTodoById,[todos]);
    function onTodoFormSubmit(value) {
        if (value) {
            setTodos([...todos, { value }]);
        }
    }
    
    useEffect(()=>{
        console.log("Todos: ",todos)
    },[todos])
    return (
        <>
            <TodoInput onSubmit={onTodoFormSubmit} />
            <TodoList listOfTodos={todos} onDeleteTodo={memoDeleteTodoCallback} />            
        </>
    );
}

export default App;