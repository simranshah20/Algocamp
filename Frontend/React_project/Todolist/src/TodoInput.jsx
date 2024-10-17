import { useState } from "react";

function TodoInput({ onSubmit }){
const [inputValue,setInputVlaue]=useState('')
 
function onFormSubmit(e){
    e.preventDefault();
    onSubmit?.(inputValue);
    setInputVlaue('');
}
    return(
        <>
        <form onSubmit={onFormSubmit}>
            <input
            type="text"
            placeholder="Add your  todos here..."
            onChange={(e)=>{setInputVlaue(e.target.value)}}
            value={inputValue}
            />
            <button>Add Todo</button>
        </form>
        </>
    )
}
export default TodoInput;