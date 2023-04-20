import React from "react";
import { useParams } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import { Card, Carousel, Container, Row, Col } from "react-bootstrap";
import img1 from "../../assets/celebration.jpeg";
import img2 from "../../assets/crackers.jpeg";

function Categories() {
  const category = useParams().categoryName;

  // Define the EventCard component
  const EventCard = ({ event }) => {
    return (
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card className="mb-4">
          <Card.Img
            variant="top"
            src={event.image}
            style={{ height: "200px", width: "100%", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Text>{event.description}</Card.Text>
            <Card.Text>
              <small className="text-muted">{event.date}</small>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  // Define the EventCarousel component
  const EventCarousel = ({ events }) => {
    return (
      <Carousel>
        {events.map((event, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={event.image}
              alt={event.title}
            />
            <Carousel.Caption>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };

  // Define the EventDisplay component
  const EventDisplay = ({ events }) => {
    return (
      <Container>
        <Row className="mb-4">
          <Col>
            <EventCarousel events={events} />
          </Col>
        </Row>
        <Row>
          {events.map((event, idx) => (
            <EventCard key={idx} event={event} />
          ))}
        </Row>
      </Container>
    );
  };

  // Sample event data, replace with your own data
  const events = [
    {
      title: "Event 1",
      description: "Event 1 description.",
      date: "2023-05-01",
      image: img1,
    },
    {
      title: "Event 2",
      description: "Event 2 description.",
      date: "2023-05-15",
      image: img2,
    },
    {
      title: "Event 3",
      description: "Event 2 description.",
      date: "2023-05-15",
      image: img2,
    },
    {
      title: "Event 4",
      description: "Event 2 description.",
      date: "2023-05-15",
      image: img2,
    },
    {
      title: "Event 5",
      description: "Event 2 description.",
      date: "2023-05-15",
      image: img2,
    },
  ];

  return (
    <div>
      <Segment className="m-4">
        <h1>Category: {category}</h1>
        <EventDisplay events={events} />
      </Segment>
    </div>
  );
}

export default Categories;
