function TodoListItem({ todo, onDelete }) {
    return (
        <li>
            {todo.value}
            <button onClick={() => onDelete(todo.value)}>Delete</button>
        </li>
    );
}

export default TodoListItem;