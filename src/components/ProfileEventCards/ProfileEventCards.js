import React, { useContext, useCallback, useEffect } from "react";
import { Card } from "semantic-ui-react";
import img1 from "../../assets/tickets.jpeg";
import UserContext from "../../UserContext";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventImage from "../../common/Image/Image";

function EventCards({ type }) {
  const { userId } = useContext(UserContext);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  console.log(imageUrl)
  const handleImageUrlReady = useCallback((url) => {
    setImageUrl(url);
  }, []);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  const handleCardClick = (eventId) => {
	  navigate(`/event/${eventId}`, { state: { received: "user",imageSrc:imageUrl } });
  };
  const truncateDescription = (desc) => {
    const maxLength = 100; // Maximum characters to display before truncation
    return desc.length > maxLength ? desc.slice(0, maxLength) + "..." : desc;
  };

  useEffect(() => {
    const userObj = { userId: userId };
    if (userObj !== "") {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}api/${type}/${userId}`)
        .then((res) => {
          setEvents(res.data.eventList);
        });
    }
  }, [userId, type]);
  if (events) {
    return (
      <div className="mb-2">
        {events.map((event) => (
          <Card
            fluid
            onClick={() => handleCardClick(event.event_id)}
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            <Card.Content>
              {/* <Image floated="left" size="medium" src={img1} alt="No" > */}
		<EventImage image_path={event.image_path} onImageUrlReady={handleImageUrlReady} />
              <Card.Header>{event.title}</Card.Header>
              <Card.Meta>location: {event.location}</Card.Meta>
              <Card.Content> Date: {event.event_date}</Card.Content>
              {isExpanded
                ? event.description
                : truncateDescription(event.description)}
              <span
                className="read-more-link me-2"
                onClick={toggleDescription}
                style={{ color: "blue", cursor: "pointer" }}
              >
                {isExpanded ? " Read less" : " Read more"}
              </span>
            </Card.Content>
          </Card>
        ))}
      </div>
    );
  } else {
    return (
      <Card fluid>
        <Card.Content>
          {/* <Image floated="left" size="medium" src={img1} alt="No" /> */}
          <Card.Header> </Card.Header>
          <Card.Meta></Card.Meta>
          <div className="display-6">No Events</div>
        </Card.Content>
      </Card>
    );
  }
}

export default EventCards;
