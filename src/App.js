import { Container, Row, Col, Button } from "reactstrap";

import Post from "./components/Post";
import Header from "./components/Header/Header";
import SideCard from "./components/SideCard";
import Table from "./components/table/Table";
import NoPage from "./components/NoPage/NoPage";
import AddUser from "./components/addUserForm/AddUser";
import EditUser from "./components/editUserForm/EditUser";
import Login from "./components/Login/index";
import Register from "./components/Register/index";
import Layout from "./components/Layout/Layout";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <>
  <BrowserRouter>
    <Header />
    <Routes>
        <Route exact path="/users" element={<Table/>}/>
        <Route exact path="/user/add" element={<AddUser/>}/>
        <Route exact path="/user/edit/:id" element={<EditUser/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route path="*" element={<NoPage/>}/>
    </Routes>
  </BrowserRouter>
  </>
);

export default App;
