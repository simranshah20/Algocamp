import Button from "../Buttons/Button";
import TextInput from "../TextInput/textInput"; 

function TextInputForm({ inputType, hanldleFormSubmit,handleTextInputChange,handleShowHideClick }){
return(
   <form onSubmit={hanldleFormSubmit}>
    <div>
        <TextInput
        type={inputType}  //show text in password form
        label="Enter a word or a phrase"
        placeholder="Enter a word or a phrase here..."
        onChangeHandler={handleTextInputChange}
        />
    </div>
    <div>
        <Button        
        styleType="warning"
        text={inputType=="password"?"show":"Hide"}
        onClickHandler={handleShowHideClick}
        />
    </div>
    <div>
        <Button
        type="submit"
        styleType="primary"
        text="Submit"
        />
    </div>
   </form>
);
}
export default TextInputForm;