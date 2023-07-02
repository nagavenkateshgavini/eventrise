import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./browseEvents.css";
import FAQSection from "../../common/accordian";
import Footer from "../../common/Footer/footer";
import CustomCard from "../../common/CustomCard/CustomCard";
import { useEffect } from "react";
import outside from "../../assets/carousal1.jpeg";
import community from "../../assets/community.jpeg";
import marathons from "../../assets/marathons.jpeg";
import music from "../../assets/browse_events/music.jpeg";
import sports from "../../assets/browse_events/sports.jpeg";
import health from "../../assets/browse_events/health.jpeg";
import business from "../../assets/browse_events/business.jpeg";
import hobbies from "../../assets/browse_events/hobbies.jpeg";
import food from "../../assets/browse_events/food.jpeg";

const BrowseEvents = () => {
  // Sample data for categories
  useEffect(() => {}, []);
  const categories = [
    {
      id: 1,
      title: "Music",
      description: "Concerts, festivals, and more",
      image: music,
      link: "/categories/music",
    },
    {
      id: 2,
      title: "Sports",
      description: "Matches, competitions, and more",
      image: sports,
      link: "/categories/sports",
    },
    {
      id: 3,
      title: "Health",
      description: "Competitions for fitness enthusiasts.",
      image: health,
      link: "/categories/health",
    },
    {
      id: 4,
      title: "Business",
      description: "Stay updated on business trends",
      image: business,
      link: "/categories/business",
    },
    {
      id: 5,
      title: "Hobbies",
      description: "Discover new hobbies and attend fun events",
      image: hobbies,
      link: "/categories/hobbies",
    },
    {
      id: 6,
      title: "Food",
      description: "Experience delicious cuisine",
      image: food,
      link: "/categories/food",
    },
    // Add more categories as needed
  ];

  const slides = [
    {
      text: 'Host your dream event !',
      imgSrc: outside,
      altText: 'Image 1 Alt Text',
      color: '#ff0000'
    },
    {
      text: 'Where events come to life',
      imgSrc: community,
      altText: 'Image 2 Alt Text',
      color: '#00ff00'
    },
    {
      text: 'Create memories 🎉',
      imgSrc: marathons,
      altText: 'Image 3 Alt Text ',
      color: '#0000ff'
    }
  ];

  return (
    <div className="events">
      <Container>
        {/* Highlights */}
        <Row className="my-4">
          <Col>
            <h2 className="mb-2">Highlights</h2>
            <Carousel>
              {slides.map((slide, index) => (
                <Carousel.Item key={index} style={{ backgroundColor: slide.color }}>
                  <div className="carousel-overlay">
                      <h1 className="carousel-text">{slide.text}</h1>
                  </div>
                  <img
                    className="d-block w-100 rounded"
                    src={slide.imgSrc}
                    alt={slide.altText}
                  />
                </Carousel.Item>
              ))}
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
          {categories.map((category, idx) => (
            <Col xs={12} md={6} lg={4} key={category.id} className="mb-4">
              <CustomCard category={category} idx={idx} />
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
