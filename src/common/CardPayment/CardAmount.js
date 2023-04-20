import React from "react";
import { Card } from "react-bootstrap";

const CardAmount = ({ totalAmount }) => {
  return (
    <Card className="amount-card">
      <Card.Body>Total Amount to be paid: ${totalAmount}USD</Card.Body>
    </Card>
  );
};

export default CardAmount;
