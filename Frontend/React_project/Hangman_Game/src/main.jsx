import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
     <BrowserRouter> 
     {/* here <App/>  work like child of <BrowserRouter></BrowserRouter>*/}
      <App />   
     </BrowserRouter>
 )
