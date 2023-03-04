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
import Work from './Pages/Work';
import Report from './Pages/Report';
import Footer from './Composant/Footer/Footer'

const  App=()=> {


  return (
    <BrowserRouter>


      <Navbar bg="" expand="sm">
        <Container>
          <Navbar.Brand href="/"> <img src={logo} className=""  alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href='/'>Home</NavDropdown.Item>
                <NavDropdown.Item href='/work-orders'>Work orders</NavDropdown.Item>
                <NavDropdown.Item href="/reports">Reports</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work-orders" element={<Work />} />
        <Route path="/reports" element={<Report />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}
export default App;
