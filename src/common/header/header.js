import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../UserContext";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
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
  const isAuthenticated = sessionStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`py-2 ${scrollPosition > 50 ? "bg-color" : "bg-dark"}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{ color: `${scrollPosition > 50 ? "black" : "white"}`, fontSize: 'large' }}
        >
	  Event<span style={{ color: `${scrollPosition > 50 ? "white": "#e4a11b"}`, fontSize: 'large' }} className="siteName"> Rise</span>
        </Navbar.Brand>
        
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={`${scrollPosition > 50 ? "bg-dark" : ""}`}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Link className="link" to="/">
              Browse Events
            </Link>
            <Link className="link" to="/create">
              Create Events
            </Link>
            {/* <NavDropdown
              title={<span className="menu-title">Features</span>}
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
            </NavDropdown> */}
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
                navigate("/");
              }}
            >
              Logout
            </Link>
          )}
          <Nav className="ms-2">
            <Nav.Link href="/userProfile">
            <span
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: `${scrollPosition > 50 ? "black" : "white"}`, // Choose a suitable color
                  lineHeight: "50px",
                  verticalAlign: "middle",
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
              >
                {isAuthenticated ? (<span>{username}</span>) : (<span>Login</span>)}
              </span>
              <Image
                src={img1}
                style={{ borderRadius: "90%", height: "50px", width: "50px" }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
