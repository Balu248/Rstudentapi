import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addstudent from './components/Addstudent';
import Searchstudent from './components/Searchstudent';
import Deletestudent from './components/Deletestudent';
import Viewstudent from './components/Viewstudent';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/a' element={<Addstudent/>}/>
      <Route path='/s' element={<Searchstudent/>}/>
      <Route path='/d' element={<Deletestudent/>}/>
      <Route path='/v' element={<Viewstudent/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
