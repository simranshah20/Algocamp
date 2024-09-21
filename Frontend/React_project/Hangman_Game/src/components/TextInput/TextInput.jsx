function TextInput({ type="text",label,placeholder="Enter your input here....",onChangeHandler}){ //here type is a props
return(
    <label>
        <span className="text-gray-700">{label}</span>
        <input
        type={type}  //{type} is  a prop
        className="px-4 py-2 border border-gray-600 rounded-md w-full" //w-full mean 100% width of its parent width
        placeholder={placeholder} //{placeholder} is a prop
        onChange={onChangeHandler} //{onChangedHandler} is a prop
        />
    </label>
)
}
export default TextInput;