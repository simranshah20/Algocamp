import { Link, useLocation } from "react-router-dom";
import Maskedtext from "../components/maskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/Lettersbuttons";
import { useState } from "react";

function PlayGame(){
//   const [searchParams]=useSearchParams();
//   console.log(searchParams.get("text"));

//const {text}=useParams();  //fetching the value of text

const  {state}=useLocation();  //destructing state property

const [guessedLetters,setGuessedLetters]=useState([]);
function handleLetterClick(letter){
    setGuessedLetters([...guessedLetters,letter]);  //...guessedLetters mean unpacking letter
}

// const arr=["hello","world"];
    return(
        <>
        <h1>Play Game</h1>  
        {/* rendering list in reacct (on UI(using map()) in list(using key)) */}
        {/* {arr.map((element,index)=><b key={index}>{element}</b>)}    */}

        <Maskedtext text={state.wordSelected} guessedLetters={guessedLetters}/>

         <div>
         <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
         </div>
        {/* here to work like href,link work like a tag but it doest not refresh the page while switching to another page */}
    <Link to ='/start' className="text-blue-500">Start  Game Link</Link>
        </>
    );
}
export default PlayGame