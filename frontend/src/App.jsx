
import './App.css'
import { Routes, Route } from 'react-router-dom';
import AddUser from './components/pages/AddUser'
import Home from './components/pages/Home';
import UpdateUser from './components/pages/UpdateUser';

function App() {


  return (
    <Routes>
    <Route path='/' element={<Home />} />
      <Route path='/add' element={<AddUser />} />
      <Route path='/update' element={<UpdateUser />} />
   
      
    </Routes>

  )
}

export default App
