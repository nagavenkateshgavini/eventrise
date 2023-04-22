import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import { Card, Carousel, Container, Row, Col } from "react-bootstrap";
import img1 from "../../assets/celebration.jpeg";
import { Link } from "react-router-dom";
import Footer from "../../common/Footer/footer";
import axios from "axios";

function Categories() {
  const category = useParams().categoryName;
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}api/eventCategory/${category}`)
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
      });
  }, [category]);

  // Define the EventCard component
  const EventCard = ({ event }) => {
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);
    const [imageSrc, setImageSrc] = useState("../../assets/bg-5.jpg");

    const toggleDescription = () => {
      setIsExpanded(!isExpanded);
    };
    const image_path = event.image_path;

    useEffect(() => {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}getEventImage`, image_path)
        .then((res) => setImageSrc(res.data));
    }, []);

    const truncateDescription = (desc) => {
      const maxLength = 100; // Maximum characters to display before truncation
      return desc.length > maxLength ? desc.slice(0, maxLength) + "..." : desc;
    };

    const handleNavigation = () => {
      navigate(`/event/${event.event_id}`, {
        state: { imageSrc },
      });
    };
    return (
      <Col xs={12} sm={6} md={4} lg={3}>
        <div
          onClick={handleNavigation}
          style={{
            textDecoration: "none",
            color: "black",
            cursor: "pointer",
          }}
        >
          <Card className="mb-4">
            <Card.Img
              variant="top"
              src={imageSrc}
              style={{ height: "200px", width: "100%", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>
                <small className="text-muted">Date: {event.event_date}</small>
              </Card.Text>
              <Card.Text>
                <small className="text-muted">
                  Price: ${event.ticket_price}
                </small>
              </Card.Text>
              <Card.Text>
                {isExpanded
                  ? event.description
                  : truncateDescription(event.description)}
                <span
                  className="read-more-link"
                  onClick={toggleDescription}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  {isExpanded ? " Read less" : " Read more"}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Col>
    );
  };

  // Define the EventCarousel component
  const EventCarousel = () => {
    return (
      <Carousel>
        {[1, 2, 3].map((event, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100" src={img1} alt={event.title} />
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

  return (
    <div>
      <Segment className="m-4">
        <h1>Category: {category}</h1>
        <EventDisplay events={events} />
      </Segment>
      <Footer />
    </div>
  );
}

export default Categories;
