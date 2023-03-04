import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logowhite.png';
import Home from './Pages/Home'
import Footer from './Composant/Footer/Footer'
//import i18next from './i18n'

const  App=()=> {


  return (
    <BrowserRouter>


      <Navbar bg="" expand="sm">
        <Container>
          <Navbar.Brand href="#home"> <img src={logo} className=""  alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                {/*<NavDropdown.Item onClick={() => i18next.changeLanguage('en')}>EN</NavDropdown.Item>
                <NavDropdown.Item onClick={() => i18next.changeLanguage('fr')}>FR</NavDropdown.Item>
                <NavDropdown.Item onClick={() => i18next.changeLanguage('ar')}>AR</NavDropdown.Item>*/}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}
export default App;
