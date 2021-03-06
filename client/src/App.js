import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

import UsersList from "./components/UserManage/CustomerList.";
import UpdateDetails from "./components/UserManage/UpdateUser";
import AddUser from "./components/UserManage/AddUserComponent";

import UsersBook from "./components/BookManagementPage/BookList.";
import AddUserBook from "./components/BookManagementPage/AddUserBookComponent";
import UpdateBook from "./components/BookManagementPage/UpdateBook";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/" element={<UsersList />} />
        <Route path="/user/:id" element={<UpdateDetails />} />
        <Route path="/add" element={<AddUser />} />

        <Route path="/book" element={<UsersBook />} />
        <Route path="/addBook" element={<AddUserBook />} />
        <Route path="/book/:id" element={<UpdateBook />} />
      </Routes>
    </div>
  );
}

export default App;
