import React, { useContext, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";
import img1 from "../../assets/tickets.jpeg";
import UserContext from "../../UserContext";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function EventCards({ type }) {
  const { userId } = useContext(UserContext);
  const [events, setEvents] = useState([]);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
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
  console.log("events", typeof events);
  console.log("events", events);
  if (events) {
    return (
      <div className="mb-2">
        {events.map((event) => (
          <Link
            to={`/event/${event.event_id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card fluid>
              <Card.Content>
                <Image floated="left" size="medium" src={img1} alt="No" />
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
          </Link>
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
