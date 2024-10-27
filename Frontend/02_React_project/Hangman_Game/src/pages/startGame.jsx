import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/textinputform/textInputFormContainer";
function StartGame(){
return(
    // <></> is a react fragment use to  wrape multiple elements in a single parent and it  donot introduce extra node on DOM
    <> 
    <h1>Start Game</h1> 
    <TextInputFormContainer/>
    {/* here to work like href,link work like a tag but it doest not refresh the page while switching to another page */}
    <Link to ='/play' className="text-blue-500">Play Game Link</Link>
    </>
);
}
export  default StartGame;