import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../UserContext";
import { HashLink } from "react-router-hash-link";
import {
  Navbar,
  Container,
  Form,
  Nav,
  NavDropdown,
  Button,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../assets/tickets.jpeg";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { username, setUser } = useContext(UserContext);
  const isAuthenticated = sessionStorage.getItem("auth");
  const navigate = useNavigate();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={`py-2 ${scrollPosition > 50 ? "bg-light" : "bg-dark"}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{ color: `${scrollPosition > 50 ? "black" : "white"}` }}
        >
          Event<span className="siteName">Rise</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Link className="link" to="/browse">
              Features
            </Link>
            <NavDropdown
              title={<span className="menu-title">Categories</span>}
              id="collasible-nav-dropdown"
              color="warning"
              className="nav-dropdown mt-1"
            >
              <NavDropdown.Item as={HashLink} smooth to="/create">
                Create
              </NavDropdown.Item>
              <NavDropdown.Item as={HashLink} smooth to="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item as={HashLink} smooth to="#action/3.1">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={HashLink} smooth to="#action/3.1">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
          {isAuthenticated && (
            <Link
              className="link"
              onClick={() => {
                sessionStorage.clear();
                setUser({
                  username: "",
                  email: "",
                  userId: "",
                  isAuthenticated: false,
                });
                navigate("/browse");
              }}
            >
              Logout
            </Link>
          )}
          <Nav className="ms-2">
            <Link to="/userProfile">
              <Image
                src={img1}
                style={{ borderRadius: "90%", height: "50px", width: "50px" }}
              />
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: `${scrollPosition > 50 ? "black" : "white"}`, // Choose a suitable color
                  lineHeight: "50px",
                  verticalAlign: "middle",
                  marginLeft: "5px",
                }}
              >
                {username}
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
