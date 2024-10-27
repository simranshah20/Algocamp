import './App.css';
import SlowComponent from './SlowComponent';
// import ButtonWithModal from './ButtonWithModal';
// import RefactorComponent from './Hooks/RefactorComponent';
import { useState,memo, useCallback, useMemo } from 'react';
import Modal from './Modal';
import AnotherSlowComponent from './SlowComponent';

//const memoisedSlowComponent=memo(SlowComponent);     //stop re-rendering in an application called as memoization

//another way of memoization

const memoisedSlowComponent = memo(({time,custom,x}) => {
  return <SlowComponent time={ time } custom = { custom } x={x}/>
}) 

const memoAnotherComponent = memo(AnotherSlowComponent);
function App() {
  const [ isOpen,setIsOpen ]=useState(false);
  const someFunction = useCallback(()=>{},[]);    //stop re-rendering in an application called as memoization
  const [x,setX]=useState(0);
  const timearray=useMemo(()=>{
    return [1000];
  },[]);
  return (
    // <>
      // <RefactorComponent>
         <>
         <button onClick={()=>setIsOpen(true)}>Open Modal</button>
         <button onClick={()=>setX(x+1)}>Increment</button>
         {isOpen && <Modal close={() => setIsOpen(false)}/>}
         <div>
           Something is done here.
         </div>
           {/* <ButtonWithModal/> */}
         <div>
           Something is done here.
         </div>
         count {x}
           {/* <memoisedSlowComponent /> */}

           {/* another way of memoisation */}
          <memoisedSlowComponent time={ timearray } custom={someFunction} x={x}/>
          <memoAnotherComponent>
            <div>I am an Adult.</div>
          </memoAnotherComponent>
         </>
      // </RefactorComponent> 
    // </>
  );
}

export default App;