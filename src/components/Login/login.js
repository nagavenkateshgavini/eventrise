import React, { useState, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import UserContext from "../../UserContext";
import {
  Form,
  Segment,
  Divider,
  Button,
  Icon,
  Grid,
  Label,
} from "semantic-ui-react";

import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const changeUsername = (e) => {
    setuserName(e.target.value);
    setError("");
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const changeError = () => {
    setError("");
  };
  const getUserDetails = () => {
    if (userName.trim === "" || password.trim() === "") {
      setError("Please Enter valid username or password");
    }
    const details = { email: userName, password: password };
    axios
      .post(`${process.env.REACT_APP_BASE_URL}login`, details)
      .then((res) => {
        if (res.status === 200) {
          console.log("res", res.data);
          sessionStorage.setItem("auth", true);
          setUser({
            isAuthenticated: true,
            username: res.data.name,
            email: res.data.email,
            userId: res.data.userId,
          });
          navigate("/browse");
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Entered username or password is not valid");
      });
  };

  const googleAuth = () => {
    console.log("I'm entering...google Auth");
    axios
      .get(`${process.env.REACT_APP_BASE_URL}auth/google`)
      .then((response) => {
        console.log("data", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div
      className="text-center d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Segment className="m-5 custom-shadow">
        <Row className="m-5">
          <Col className="p-5">
            <Button
              className="m-2"
              color="google plus"
              style={{ width: "100%" }}
              onClick={googleAuth}
            >
              <Icon name="google" /> Sign up with Google
            </Button>
            <Button className="m-2" color="facebook" style={{ width: "100%" }}>
              <Icon name="facebook" /> Sign up in with Facebook
            </Button>
          </Col>
          <Col xs={12} sm={12} md={2}>
            <Divider vertical className="vertical-divider">
              OR
            </Divider>
            <Divider horizontal className="horizontal-divider">
              OR
            </Divider>
          </Col>
          <Col
            style={{
              textAlign: "center",
            }}
          >
            <Form>
              <Form.Field>
                <Form.Input
                  label="User Name"
                  placeholder="joe@schmoe.com"
                  onChange={changeUsername}
                  value={userName}
                  onFocus={changeError}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label="Password"
                  type="password"
                  onChange={changePassword}
                  value={password}
                  onFocus={changeError}
                />
              </Form.Field>
              <Grid>
                <Grid.Row columns={2} centered>
                  <Grid.Column>
                    <Button color="linkedin" onClick={getUserDetails}>
                      Login
                      <Icon name="long arrow alternate right" />{" "}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Link to="/userRegistration">
                      <Button color="linkedin">
                        SignUp <Icon className="ms-2" name="signup" />
                      </Button>
                    </Link>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <div className="mt-3">
                <Button circular color="facebook" icon="facebook" />
                <Button circular color="google plus" icon="google plus" />
              </div>
            </Form>
            {error.length > 0 && (
              <Label basic pointing prompt color="red">
                {error}
              </Label>
            )}
          </Col>
        </Row>
      </Segment>
    </div>
  );
}

export default Login;
