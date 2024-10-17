import { useCallback } from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ listOfTodos, onDeleteTodo }) {
    function deleteTodo(val) {
        console.log("Delete todo with id: ", val);
        onDeleteTodo?.(val);
    }
    
    const memoDeleteTodoCallback=useCallback(deleteTodo,[onDeleteTodo])
    return (
        <ul>
            {listOfTodos?.map((todo) => (
                <TodoListItem key={todo.value} todo={todo} onDelete={deleteTodo} />
            ))}
        </ul>
    );
}

export default TodoList;