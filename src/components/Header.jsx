import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
       <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          {/* <i className="fa-solid fa-upload fa-bounce fa-xl" style={{color:'#B197FC'}}></i> */}
          <i className="fa-solid fa-icons fa-bounce fa-xl me-2" style={{color:'#8e9cb4'}} ></i>
           {' '}
           Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header