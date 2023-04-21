import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
import "./styles.css";

const Registration = () => {
  //const [numTickets, setNumTickets] = useState(0);
  const location = useLocation();
  const { eventId, ticket_price } = location.state;
  console.log(eventId, ticket_price);
  const [agreement, setAgreement] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (agreement) {
      navigate(`/payment/200`);
    }
  };

  return (
    <Container className="py-4">
      <div className="background-image background-image-dark"></div>
      <Card className="registration-card">
        <h1 className="text-center mb-4">Event Registration Page</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="totalTickets">
            <Form.Label className="form-label" style={{ color: "black" }}>
              Total Number of Tickets
            </Form.Label>
            <Form.Control type="number" value={1} readOnly disabled />
          </Form.Group>
          <Form.Group controlId="ticketPrice">
            <Form.Label className="form-label" style={{ color: "black" }}>
              Ticket Price
            </Form.Label>
            <Form.Control type="number" value={200} readOnly disabled />
          </Form.Group>
          <Form.Group controlId="agreement" className="custom-checkbox">
            <Form.Check
              type="checkbox"
              label="I accept the terms and conditions."
              onChange={(e) => setAgreement(e.target.checked)}
              required
            />
          </Form.Group>
          <Button className="submit-btn" type="submit">
            Register
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Registration;
