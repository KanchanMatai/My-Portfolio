import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Assets/Style.css';
import { Link } from "react-router-dom";
function Mynav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand className ="navi"href="#home">Kanchan</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link className="navi" href ="#About">About</Nav.Link>
  <Nav.Link className ="navi" href = "#Skills">Skills</Nav.Link>
  <Nav.Link className = "navi" href ="#Project">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )}
  
  export default Mynav;

