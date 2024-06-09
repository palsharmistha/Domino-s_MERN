import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Pages/UserContext';
import logo from '../Images/logo.png';

function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      setUser(null); // Clear the user state
      navigate('/login'); // Redirect to login page
    }
  };

  const welcomeTextStyle = {
    fontWeight: 'bold',
    color: 'black',
    marginRight: '10px', // Add space to the right of the welcome text
  };

  return (
    <Navbar className='navbar' expand="lg" style={{ position: 'fixed', width: '100%', top: '0', zIndex: '1000', backgroundColor: 'white', borderBottom: '1px solid #ccc' }}>
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo} alt="Logo" style={{ marginTop: '-10px', maxHeight: '40px' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='link mr-auto'>
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
            <Nav.Link as={Link} to="/giftcards">GIFT CARDS</Nav.Link>
            <Nav.Link as={Link} to="/menu">MENU</Nav.Link>
            <Nav.Link as={Link} to="/orders">ORDERS</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {user && (
              <>
                <span className="navbar-text" style={welcomeTextStyle}>Welcome, {user.firstName}</span>
                <Nav.Link as={Link} to="#" onClick={handleLogout} style={welcomeTextStyle}>LOGOUT</Nav.Link>
              </>
            )}
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                <Nav.Link as={Link} to="/signup">SIGNUP</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
