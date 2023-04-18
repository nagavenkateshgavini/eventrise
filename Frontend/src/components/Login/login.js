import React from "react";
import { Row, Col } from "react-bootstrap";
import { Form, Segment, Divider, Button, Icon } from "semantic-ui-react";
import "./login.css";

function Login() {
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
            >
              <Icon name="google" /> Log in with Google
            </Button>
            <Button className="m-2" color="facebook" style={{ width: "100%" }}>
              <Icon name="facebook" /> Login in with Facebook
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
                <Form.Input label="User Name" placeholder="joe@schmoe.com" />
              </Form.Field>
              <Form.Field>
                <Form.Input label="Password" type="password" />
              </Form.Field>

              <Button color="linkedin">
                Login
                <Icon name="long arrow alternate right" />{" "}
              </Button>
            </Form>
          </Col>
        </Row>
      </Segment>
    </div>
  );
}

export default Login;
