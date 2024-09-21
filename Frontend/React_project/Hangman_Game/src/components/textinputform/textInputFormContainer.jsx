import { useState } from "react";
import TextInputForm from "./TextInputForm";

// container layer
// Logical Functions
function TextInputFormContainer(){
    // let inputType="password";
    const [inputType,setInputType]=useState("password"); //initial value is password


    function hanldleFormSubmit(event){
        event.preventDefault();   //it prevent the default behaviour of submition of form 
        console.log("Form Submitted");
     }
 
     function handleTextInputChange(event){
      console.log("Input Text changed");
      console.log(event.target.value); 
     }
     function handleShowHideClick(){
        console.log("Show/Hide button clicked");
        // toggle to show and hide the text
        if(inputType=="password"){
            setInputType("text");
        }else{
            setInputType("password");
        }
        console.log(inputType);
     }
     return (
        // calling presentation layer component and returning then
     <TextInputForm 
       inputType={inputType} //here {inputType} is a
       hanldleFormSubmit={hanldleFormSubmit}
       handleTextInputChange={handleTextInputChange}
       handleShowHideClick={handleShowHideClick}
     />
     );
}
export default TextInputFormContainer;