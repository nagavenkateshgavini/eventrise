import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="text-center">
            <h1 className="display-4">404 Page Not Found</h1>
            <p className="lead">
              Sorry, the page you are looking for could not be found.
            </p>
            <Button variant="primary" href="/">
              Go back to homepage
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
