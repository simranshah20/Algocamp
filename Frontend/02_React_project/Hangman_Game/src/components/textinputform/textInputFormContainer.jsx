import { useEffect, useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

// container layer
// Logical Functions
function TextInputFormContainer(){
    // let inputType="password";
    const [inputType,setInputType]=useState("password"); //initial value is password
    const [value,setValue]=useState("");
    
    const navigate=useNavigate();  //useNavigate is a hook that returns a navigate function

    function hanldleFormSubmit(event){
        event.preventDefault();   //it prevent the default behaviour of submition of form 
        console.log("Form Submitted",value);
        if(value){
            //if we have something in value then we want to go to the play page
            // setTimeout(()=>{
            //     navigate("/play");
            // },500);
            navigate(`/play`,{state:{wordSelected:value} });    //assigning the property to state
        }
     }
 
     function handleTextInputChange(event){
      console.log("Input Text changed");
      console.log(event.target.value); 
      setValue(event.target.value);
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
      
    //  useEffect(()=>{
    //     console.log("Component first load");  //not call on updates
    //  },[]);  //passing empty dependency array

    //  useEffect(()=>{
    //     console.log("Component first load and update");
    //  });  //not passing dependency array    
 
    //  useEffect(()=>{
    //     console.log("Component first load and update value changed");
    //  },[value]);

    //  useEffect(()=>{
    //     console.log("Component first load and InputType value changed");
    //  },[inputType]);

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