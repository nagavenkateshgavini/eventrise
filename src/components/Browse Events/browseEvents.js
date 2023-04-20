import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Carousel
} from "react-bootstrap";
import "./browseEvents.css";
import FAQSection from "../../common/accordian";
import Footer from "../../common/Footer/footer";

const CategoryCard = ({ category }) => (
  <Card
    onClick={() => (window.location.href = category.link)}
    className="shadow-sm cursor-pointer"
  >
    <Card.Img variant="top" src={category.image} />
    <Card.Body>
      <Card.Title>{category.title}</Card.Title>
      <Card.Text>{category.description}</Card.Text>
    </Card.Body>
  </Card>
);

const BrowseEvents = () => {
  // Sample data for categories
  const categories = [
    {
      id: 1,
      title: "Music",
      description: "Concerts, festivals, and more",
      image: "https://via.placeholder.com/150",
      link: "/categories/music",
    },
    {
      id: 2,
      title: "Sports",
      description: "Matches, competitions, and more",
      image: "https://via.placeholder.com/150",
      link: "/categories/sports",
    },
    {
      id: 2,
      title: "Technical",
      description: "Matches, competitions, and more",
      image: "https://via.placeholder.com/150",
      link: "/categories/technical",
    },
    {
      id: 2,
      title: "Technical",
      description: "Matches, competitions, and more",
      image: "https://via.placeholder.com/150",
      link: "/categories/technical",
    },
    {
      id: 2,
      title: "Technical",
      description: "Matches, competitions, and more",
      image: "https://via.placeholder.com/150",
      link: "/categories/technical",
    },
    {
      id: 2,
      title: "Technical",
      description: "Matches, competitions, and more",
      image: "https://via.placeholder.com/150",
      link: "/categories/technical",
    },
    // Add more categories as needed
  ];

  return (
    <div className="events">
      <Container>
        {/* Highlights */}
        <Row className="my-4">
          <Col>
            <h2>Highlights</h2>
            <Carousel className="my-2">
              {/* Add your highlight images and captions here */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Add more Carousel items as needed */}
            </Carousel>
          </Col>
        </Row>

        {/* Categories */}
        <Row className="my-4">
          <Col>
            <h2>Categories</h2>
          </Col>
        </Row>
        <Row>
          {categories.map((category) => (
            <Col xs={12} md={6} lg={4} key={category.id} className="mb-4">
              <CategoryCard category={category} />
            </Col>
          ))}
        </Row>

        {/* Events */}
        {/* Add the existing events section here */}
        <Row>
          <h1 className="">Frequently Asked Questions</h1>
          <Col>
            <FAQSection />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default BrowseEvents;
