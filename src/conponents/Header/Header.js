import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

import './Header.css';

const Header = () => {
  const [user]= useAuthState(auth);
 
  const HandleSignOut = () => {
    signOut(auth);
  }

    return (
      <>
      <Navbar className='navbar-box' collapseOnSelect expand="lg" sticky='top' bg="light" variant="dark">
<Container>
<Navbar.Brand as={Link}to ="/"><img height={30} src='' alt="" />TeachingAcademy</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="me-auto">





</Nav>
<Nav>

  
                             

<Nav.Link as={Link}to ="/">Home</Nav.Link>


<Nav.Link as={Link}to="Courses">Courses</Nav.Link>
<Nav.Link as={Link}to="KidsService">Active </Nav.Link>
                     
                      { 
                      user ?      
                            <Nav.Link onClick={HandleSignOut}>
                            Sign out
                        </Nav.Link>
                        :
                            <Nav.Link as={Link} to="login">
                            Login
                        </Nav.Link>
                           }
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>

    </>
    );
};

export default Header;