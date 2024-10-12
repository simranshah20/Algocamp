import { Link } from "react-router-dom";
import Button from "../components/Buttons/Button";
import { useEffect } from "react";
// import { WordContext } from "../Context/WordContext";
import useWordStore from "../Stores/WordStore";
function Home(){

    //react hook
   //  const { setWord }=useContext(WordContext);
    const { setWordList,setWord }=useWordStore();   //coming from the store
     
    async function fetchWords(){   //downloading data on first load
        const response = await fetch('http://localhost:3000/words');
        const data=await response.json();   //convet into json and provide javascript in object form
        console.log(data);

        setWordList([...data])    //seting new array and can be accessed anywhere

        const randomIndex=Math.floor(Math.random()*data.length);  //fetch random index
        console.log(data[randomIndex]);  
        
        setWord(data[randomIndex].wordValue);  //select random word from array
    }

    useEffect(()=>{
     fetchWords();
    },[]);  //passing dependency array

   return(
    <>
    <Link to='/play'>
       <Button text="Single Player"/>
    </Link>
    <br/>
    <Link to="/start">
       <div className="my-2">
          <Button text="Multi player" styleType="secondary"/>
       </div>
    </Link>
    </>
   )
}
export default Home;