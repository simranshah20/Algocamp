import './App.css';
import SlowComponent from './SlowComponent';
import ButtonWithModal from './ButtonWithModal';
import RefactorComponent from './Hooks/RefactorComponent';

function App() {
  return (
    <>
      <RefactorComponent>
         <>
         <div>
           Something is done here.
         </div>
           <ButtonWithModal/>
         <div>
           Something is done here.
         </div>
           <SlowComponent />
         </>
      </RefactorComponent>
    </>
  );
}

export default App;