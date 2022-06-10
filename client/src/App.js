import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import User from './components/userManagement/User';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path ='/' element={<LoginPage/>}/>
       <Route path ='/register' element={<RegisterPage/>}/>
       <Route path='/users' element={<User/>}/>
     </Routes>
    </div>
  );
}

export default App;
