import { useState } from 'react';
import './App.css';

function Input({ type, placeholder }) {
    return(
        <div>
           <input type={type} placeholder={placeholder} />
        </div>
    )
}

function App() {
    const [isStudent, setIsStudent] = useState(false);
    const [count,setCount]=useState(0);

    function updateCount(){    //count 0->1
      setCount( count + 1 );    //setCount(0+1)
      console.log(count);   //1
      // setCount((prevCount)=>prevCount+1);
      // setCount((prevCount)=>prevCount+1);
    }
    return (
        <>
            <form>
                <Input type="text" placeholder="Enter Your Name....." />
                <br />
                <input
                    type="checkbox"
                    name="student"
                    id="student"
                    onChange={() => {
                        setIsStudent(!isStudent);
                    }}
                />
                <label htmlFor="student">Are you a student?</label>

                {/* reconcillation(mounting/unmounting) */}
                {/* {isStudent ? (<Input type="text" placeholder="Enter Your School Name....." />) : ( null )}
                {!isStudent ? (<Input type="text" placeholder="Enter Your Company Name....." />) : ( null )} */}
                
                {/* another way of reconcillation(mounting/unmounting) using key*/}
                {!isStudent ? (<Input type="text" placeholder="Enter Your School Name....." key="school"/>) : (<Input type="text" placeholder="Enter Your Company Name....." key="Company" />)}

            </form>
            <div>
              Count Value: { count } <br/>
              <button onClick={ updateCount }>Click</button>
            </div>
        </>
    );
}

export default App;