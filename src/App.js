import { Container, Row, Col, Button } from "reactstrap";

import Post from "./components/Post";
import Header from "./components/Header";
import SideCard from "./components/SideCard";
import Table from "./components/table/Table";
import NoPage from "./components/NoPage/NoPage";
import AddUser from "./components/addUserForm/AddUser";
import Layout from "./components/Layout/Layout";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <>
  <Header />
  <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Table/>}/>
        <Route exact path="/add-user" element={<AddUser/>}/>
        <Route path="*" element={<NoPage/>}/>
    </Routes>
  </BrowserRouter>
  </>
);

export default App;
