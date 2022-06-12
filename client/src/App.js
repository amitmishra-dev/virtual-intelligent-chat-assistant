import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import User from './components/userManagement/User';
import BookManagement from './components/BookManagementPage/BookManagement';
import { Todos } from './components/Buttons/UserButton';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path ='/' element={<LoginPage/>}/>
       <Route path ='/register' element={<RegisterPage/>}/>
       <Route path='/users' element={<User/>}/>
       <Route path='/books' element = {<BookManagement/>}/>
       <Route  path = '/button' element = {<Todos/>}/>
     </Routes>
    </div>
  );
}

export default App;
