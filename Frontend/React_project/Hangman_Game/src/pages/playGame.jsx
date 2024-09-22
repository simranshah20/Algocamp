import { Link } from "react-router-dom";

function PlayGame(){
    return(
        <>
        <h1>Play Game</h1>
        {/* here to work like href,link work like a tag but it doest not refresh the page while switching to another page */}
    <Link to ='/start   ' className="text-blue-500">Start  Game Link</Link>
        </>
    );
}
export default PlayGame