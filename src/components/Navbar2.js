import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Navbar2 =()=> {
  return (
<div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">Star Wars</Navbar.Brand>
        </Container>
      </Navbar>
      </div>
 
  );
}

export default Navbar2;