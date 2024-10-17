// import { useState } from 'react'
import { forwardRef, useEffect, useRef, useState } from 'react';
import './App.css'

const Input = forwardRef(function InputComponent( { type , placeholder },ref){
   return(
    <input type={type}
    ref={ref}
    placeholder={ placeholder }/>
   )
})
function App() {
  // const [focus,setFocus]=useState(false);
  const [x,setX]=useState(0);

  const customRef=useRef(0);    //useRef is a hook 

  const inputRef=useRef(null);

  const customeInputRef=useRef(null);

  function handleClick(){
    // setFocus(!focus);
    // document.getElementById("email").focus();
    // customRef.current = customRef.current+1;
    // console.log(customRef);
    inputRef.current.focus();
  }

  function handleMoreClick(){
    customeInputRef.current.focus();
  }

  useEffect(()=>{
  console.log("useEffect",customRef);
  console.log(inputRef);
  },[x])
  return (
   <>
     <input
     type="email"
     id="email"
     ref={inputRef}
     />
     <br/>
     <Input type="text" placeholder={"Write something....."} ref={ customeInputRef }/>
     <br />
     <input
     type="password"
     />
     <br />
     <button onClick={ handleClick }>Login</button>
     <br />
     <button onClick={ handleMoreClick }>Click Custome Component</button>
     <br />
     <button onClick={()=>setX(x+1)}>Submit</button>{x}
   </>
  )
}

export default App
