import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function navbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >NFT Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link style={{textDecoration: "none" , color: "white"}} to="/">Home</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;
