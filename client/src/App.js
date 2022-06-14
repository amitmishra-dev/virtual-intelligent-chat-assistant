import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
//import User from './components/userManagement/User';
import BookManagement from './components/BookManagementPage/BookManagement';
//import { UsersButton } from './components/Buttons/UserButton';
import UserListing from './components/UserManage/CustomerList.';
import UpdateDetails from './components/UserManage/UpdateUser';
import AddUser from './components/UserManage/AddUserComponent';
import ViewDetails from './components/UserManage/DetailsComponent';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path ='/' element={<LoginPage/>}/>
       <Route path ='/register' element={<RegisterPage/>}/>
       <Route exact path={["/", "/defaultPath"]} element={<UserListing/>} />
      <Route exact path={["/:id"]} element={<UpdateDetails/>} />
      <Route exact path={["/details/:id"]} element={<ViewDetails/>} />
      <Route exact path={["/add"]} element={<AddUser/>} />
       <Route path='/books' element = {<BookManagement/>}/>
       
     </Routes>
    </div>
  );
}

export default App;
