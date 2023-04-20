import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./browseEvents.css";
import FAQSection from "../../common/accordian";
import Footer from "../../common/Footer/footer";
import CustomCard from "../../common/CustomCard/CustomCard";
import { useEffect } from "react";


const BrowseEvents = () => {
  // Sample data for categories
  useEffect(() => {}, []);
  const categories = [
    {
      id: 1,
      title: "Music",
      description: "Concerts, festivals, and more",
      image: "https://via.placeholder.com/150",
      link: "/categories/music_concert",
    },
    {
      id: 2,
      title: "Sports",
      description: "Matches, competitions, and more",
      image: "https://via.placeholder.com/150",
      link: "/categories/sports",
    },
    {
      id: 3,
      title: "Health",
      description: "Competitions for fitness enthusiasts.",
      image: "https://via.placeholder.com/150",
      link: "/categories/health",
    },
    {
      id: 4,
      title: "Business",
      description: "Stay updated on business trends",
      image: "https://via.placeholder.com/150",
      link: "/categories/business",
    },
    {
      id: 5,
      title: "Hobbies",
      description: "Discover new hobbies and attend fun events",
      image: "https://via.placeholder.com/150",
      link: "/categories/hobbies",
    },
    {
      id: 6,
      title: "Food",
      description: "Experience delicious cuisine",
      image: "https://via.placeholder.com/150",
      link: "/categories/Food",
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
              <CustomCard category={category} />
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
