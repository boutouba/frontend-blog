import React, { useState } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Post from "./../Post";
import Header from "./../Header/Header";
import SideCard from "./../SideCard";
import Table from "./../table/Table";
import AddUser from "./../addUserForm/AddUser";
import NoPage from "./../NoPage/NoPage";

const Layout = ({ history }) => {
	return (
	    <Header/>
	)
}

export default Layout;