import { Link, useLocation } from "react-router-dom";

function PlayGame(){
//   const [searchParams]=useSearchParams();
//   console.log(searchParams.get("text"));

//const {text}=useParams();  //fetching the value of text

const  {state}=useLocation();  //destructing state property
    return(
        <>
        <h1>Play Game {state.wordSelected}</h1>  
        {/* here to work like href,link work like a tag but it doest not refresh the page while switching to another page */}
    <Link to ='/start' className="text-blue-500">Start  Game Link</Link>
        </>
    );
}
export default PlayGame