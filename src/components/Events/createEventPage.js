import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./createEventsPage.css";
import { Link } from "react-router-dom";

export default function createEventPage() {
  return (
    <Container fluid className="custom-css justify-content-center bg-info">
      <Row className="text-center create-event">
        <Col lg={12} className="p-5">
          <h1>Create Event !!</h1>
        </Col>
        <Col>
          <Link to="/create">
            <Button>Click me !</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
