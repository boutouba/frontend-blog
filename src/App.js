/**
* Author : Boutouba ismail
* Project : Blog
*
**/
import Header from "./components/Header/Header";
import ListPostFront from "./components/Front/ListPostFront/ListPostFront";
import ListPost from "./components/Backend/ListPost/ListPost";
import ListUser from "./components/Backend/ListUser/ListUser";
import NoPage from "./components/NoPage/NoPage";
import AddUser from "./components/Backend/addUserForm/AddUser";
import EditUser from "./components/Backend/editUserForm/EditUser";
import AddPost from "./components/Backend/addPostForm/AddPost";
import EditPost from "./components/Backend/editPostForm/EditPost";
import Login from "./components/Login/index";
import Register from "./components/Register/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <>
  <BrowserRouter>
    <Header />
    <Routes>
        <Route exact path="/user" element={<ListUser/>}/>
        <Route exact path="/user/add" element={<AddUser/>}/>
        <Route exact path="/user/edit/:id" element={<EditUser/>}/>
        <Route exact path="/post" element={<ListPost />}/>
        <Route exact path="/post/add" element={<AddPost/>}/>
        <Route exact path="/post/edit/:id" element={<EditPost/>}/>
        <Route exact path="/" element={<ListPostFront/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route path="*" element={<NoPage/>}/>
    </Routes>
  </BrowserRouter>
  </>
);

export default App;
