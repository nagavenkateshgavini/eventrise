import React from "react";
import { Card, Image } from "semantic-ui-react";
import img1 from "../../assets/tickets.jpeg";

function EventCards(props) {
  console.log("props", props);
  if (props)
    return (
      <div className="mb-2">
        <Card fluid>
          <Card.Content>
            <Image floated="left" size="medium" src={img1} alt="No" />
            <Card.Header>Event Name</Card.Header>
            <Card.Meta>Event Location</Card.Meta>
            Event Description
          </Card.Content>
        </Card>
      </div>
    );
}

export default EventCards;
