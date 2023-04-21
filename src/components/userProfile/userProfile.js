import React, { useEffect, useState, useContext } from "react";
import { Segment } from "semantic-ui-react";
import { Row, Col, ListGroup } from "react-bootstrap";
import ProfileCard from "../../common/ProfileCard/ProfileCard";
import ProfileForm from "../../common/ProfileForm/profileForm";
import axios from "axios";
import "./userProfile.css";
import EventCards from "../ProfileEventCards/ProfileEventCards";
import EventAnalytics from "../EventAnalytics/EventAnalytics";
import Footer from "../../common/Footer/footer";
import UserContext from "../../UserContext";

const UserProfile = () => {
  const { email } = useContext(UserContext);
  const [userData, setUserData] = useState({});
  const [showUserDetails, setUserDetails] = useState(true);
  const [showAttendedEvents, setAttendedEvents] = useState(false);
  const [showUpcomingEvents, setUpcomingEvents] = useState(false);
  const [showAnalyticsbool, setAnalytics] = useState(false);
  const [showPending, setPending] = useState(false);
  const [showHosted, setHosted] = useState(false);
  const showUserDetailsbool = () => {
    setUserDetails(true);
    setAttendedEvents(false);
    setUpcomingEvents(false);
    setAnalytics(false);
    setPending(false);
    setHosted(false);
  };

  const showAttendedbool = () => {
    setUserDetails(false);
    setAttendedEvents(true);
    setUpcomingEvents(false);
    setAnalytics(false);
  };

  const showUpcomingbool = () => {
    setUserDetails(false);
    setAttendedEvents(false);
    setUpcomingEvents(true);
    setAnalytics(false);
    setPending(false);
    setHosted(false);
  };

  const showAnalytics = () => {
    setUserDetails(false);
    setAttendedEvents(false);
    setUpcomingEvents(false);
    setAnalytics(true);
    setPending(false);
    setHosted(false);
  };

  const showPendingEvents = () => {
    setUserDetails(false);
    setAttendedEvents(false);
    setUpcomingEvents(false);
    setAnalytics(false);
    setPending(true);
    setHosted(false);
  };

  const showHostedEvents = () => {
    setUserDetails(false);
    setAttendedEvents(false);
    setUpcomingEvents(false);
    setAnalytics(false);
    setPending(false);
    setHosted(true);
  };

  useEffect(() => {
    const userMail = { email: email };

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
  }, [email]);

  return (
    <div>
      <Row className="mt-2" style={{ height: "100vh" }}>
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
              User Details....................
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
            <ListGroup.Item className="cursor-pointer" onClick={showAnalytics}>
              Events Analytics
            </ListGroup.Item>
            <ListGroup.Item
              className="cursor-pointer"
              onClick={showPendingEvents}
            >
              Pending events
            </ListGroup.Item>
            <ListGroup.Item
              className="cursor-pointer"
              onClick={showHostedEvents}
            >
              Hosted events
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
            <Segment>
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
              <EventCards type={"attendedEvents"} />
            </Segment>
          )}

          {showUpcomingEvents && (
            <Segment className="m-3">
              <div className="display-5 mb-2">Upcoming Events</div>
              <EventCards type={"upcomingEventsByUserId"} />
            </Segment>
          )}

          {showAnalyticsbool && <EventAnalytics />}

          {showPending && (
            <Segment className="m-3">
              <div className="display-5 mb-2">Pending Events for Approval</div>
              <EventCards type={"Pending"} />
            </Segment>
          )}

          {showHosted && (
            <Segment className="m-3">
              <div className="display-5 mb-2">Hosted Events</div>
              <EventCards type={"hostedEvents"} />
            </Segment>
          )}
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default UserProfile;
