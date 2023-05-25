import "./Header.css";
import logo from './../../logo.svg';
import { Link, NavLink } from "react-router-dom";
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

const Header = () => (
    <header class="p-3 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
            </NavLink>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><NavLink to="/users" className="nav-link px-2 text-secondary">Users</NavLink></li>
                <li><NavLink to="/register" className="nav-link px-2 text-white">register</NavLink></li>
                <li><NavLink to="/login" className="nav-link px-2 text-white">login</NavLink></li>
            </ul>

          </div>
        </div>
   </header>

);

export default Header;
