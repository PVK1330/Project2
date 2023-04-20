import { NavDropdown, Navbar, Nav, Container, Button, Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";


const HeaderNavBar = () => {

    const authContext = useAuth();

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Products" id="navbarScrollingDropdown">
                            <Link to='/product/list' className="dropdown-item">Product List</Link>
                            <Link to='/product/add' className="dropdown-item">Add Product</Link>
                        </NavDropdown>
                        {/* <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link> */}

                    </Nav>
                    <Navbar.Text>
                        <span className="fw-bold text-dark">{authContext.username}</span>
                        <span style={{ marginLeft: "10px" }}>
                            <Button variant="light" onClick={() => authContext.clearSession()}>Sign Out</Button>
                        </span>
                    </Navbar.Text>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderNavBar;