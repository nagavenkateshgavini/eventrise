import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import { Row, Col, ListGroup } from "react-bootstrap";
import ProfileCard from "../../common/ProfileCard/ProfileCard";
import ProfileForm from "../../common/ProfileForm/profileForm";
import axios from "axios";
import "./userProfile.css";
import EventCards from "../EventCards/EventCards";
import HostedEvents from "../HostedEvents/hostedEvents";
import Footer from "../../common/Footer/footer";

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [showUserDetails, setUserDetails] = useState(true);
  const [showAttendedEvents, setAttendedEvents] = useState(false);
  const [showUpcomingEvents, setUpcomingEvents] = useState(false);
  const [showAnalytics, setAnalytics] = useState(false);
  const showUserDetailsbool = () => {
    let _ = showUserDetails;
    console.log("before", _);
    setUserDetails(true);
    setAttendedEvents(false);
    setUpcomingEvents(false);
    setAnalytics(false);
  };

  const showAttendedbool = () => {
    let _ = showUserDetails;
    console.log("before", _);
    setUserDetails(false);
    setAttendedEvents(true);
    setUpcomingEvents(false);
    setAnalytics(false);
  };

  const showUpcomingbool = () => {
    let _ = showUserDetails;
    console.log("before", _);
    setUserDetails(false);
    setAttendedEvents(false);
    setUpcomingEvents(true);
    setAnalytics(false);
  };

  const showHosted = () => {
    let _ = showUserDetails;
    console.log("before", _);
    setUserDetails(false);
    setAttendedEvents(false);
    setUpcomingEvents(false);
    setAnalytics(true);
  };

  useEffect(() => {
    const userMail = { email: "gaali.v@northeastern.edu" };

    let isMounted = true;

    axios
      .get(`${process.env.REACT_APP_BASE_URL}userProfile`, {
        params: userMail,
      })
      .then((response) => {
        if (isMounted) {
          console.log("data", response.data);
          setUserData(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      isMounted = false;
    };
  }, []);
  const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      <Row className="mt-2">
        <Col xs={12} md={3} style={{ backgroundColor: "#f8f7fa" }}>
          <ListGroup
            variant="flush"
            className="mt-3 p-2"
            style={{ fontWeight: "bold" }}
          >
            <ListGroup.Item
              className="cursor-pointer"
              onClick={showUserDetailsbool}
            >
              User Details
            </ListGroup.Item>
            <ListGroup.Item
              className="cursor-pointer"
              onClick={showAttendedbool}
            >
              Attended Events
            </ListGroup.Item>
            <ListGroup.Item
              className="cursor-pointer"
              onClick={showUpcomingbool}
            >
              Upcoming Events
            </ListGroup.Item>
            <ListGroup.Item className="cursor-pointer" onClick={showHosted}>
              Events Analytics
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col
          xs={12}
          md={9}
          style={{ backgroundColor: "#f8f7fa" }}
          className="mb-3 p-2"
        >
          {showUserDetails && (
            <Segment >
              <div className="display-5"> Account Information</div>
              <hr />
              <ProfileCard />
              <h6>Profile Pic</h6>
              <ProfileForm userData={userData} />
            </Segment>
          )}

          {showAttendedEvents && (
            <Segment className="m-3">
              <div className="display-5 mb-2">Attended Events</div>
              {arr.map((e) => (
                <EventCards />
              ))}
            </Segment>
          )}

          {showUpcomingEvents && (
            <Segment className="m-3">
              <div className="display-5 mb-2">Upcoming Events</div>
              {arr.map((e) => (
                <EventCards />
              ))}
            </Segment>
          )}

          {showAnalytics && <HostedEvents />}
        </Col>
      </Row>
      <Footer/>
    </div>
  );
};

export default UserProfile;
