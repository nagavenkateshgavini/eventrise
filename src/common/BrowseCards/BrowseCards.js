import React from "react";
import { Button, Card } from "react-bootstrap";

function BrowseCards(cardData) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{cardData.title}</Card.Title>
          <Card.Text>{cardData.description}</Card.Text>
          <Button variant="danger">Register</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BrowseCards;
