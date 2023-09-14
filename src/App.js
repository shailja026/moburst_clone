
import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Home from './pages/Home';
import { Route , Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
   
      <Route path='services' element = {<Services/>}/>
     </Routes>
    
     
    </div>
  );
}

export default App;
