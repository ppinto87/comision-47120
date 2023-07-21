import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';


function NavBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ATARA Jardín</Navbar.Brand>
          <Nav className="me-auto">
              <NavDropdown title="Despensa Viva" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action5">
                Panes y crackers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                Fermentos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>
      
     
    
    </>
  )
}

export default NavBar