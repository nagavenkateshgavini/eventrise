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
  const { email, setUser } = useContext(UserContext);
  const [userData, setUserData] = useState({});
  const [viewState, setViewState] = useState({
    showUserDetails: true,
    showAttendedEvents: false,
    showUpcomingEvents: false,
    showAnalyticsbool: false,
    showPending: false,
    showHosted: false,
  });

  const setView = (viewName) => {
    setViewState((prevState) => ({
      ...prevState,
      showUserDetails: viewName === "userDetails",
      showAttendedEvents: viewName === "attendedEvents",
      showUpcomingEvents: viewName === "upcomingEvents",
      showAnalyticsbool: viewName === "analytics",
      showPending: viewName === "pendingEvents",
      showHosted: viewName === "hostedEvents",
    }));
  };

  useEffect(() => {
    const userMail = { email: email };
    console.log("userMail", userMail);
    let isMounted = true;
    if (userMail.email) {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}userProfile`, userMail)
        .then((response) => {
          if (isMounted) {
            setUserData(response.data);
            setUser({ username: response.data.name });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      //Loader
    }

    return () => {
      isMounted = false;
    };
  }, [email]);
  return (
    <div>
      <Row className="mt-2">
        <Col
          xs={12}
          md={3}
          style={{ backgroundColor: "#f8f7fa", height: "100vh" }}
        >
          <ListGroup
            variant="flush"
            className="mt-3 p-2"
            style={{ fontWeight: "bold" }}
          >
            <ListGroup.Item
              className="cursor-pointer"
              onClick={() => setView("userDetails")}
            >
              User Details
            </ListGroup.Item>
            <ListGroup.Item
              className="cursor-pointer"
              onClick={() => setView("attendedEvents")}
            >
              Attended Events
            </ListGroup.Item>
            <ListGroup.Item
              className="cursor-pointer"
              onClick={() => setView("upcomingEvents")}
            >
              Upcoming Events
            </ListGroup.Item>
            <ListGroup.Item
              className="cursor-pointer"
              onClick={() => setView("analytics")}
            >
              Events Analytics
            </ListGroup.Item>
            <ListGroup.Item
              className="cursor-pointer"
              onClick={() => setView("pendingEvents")}
            >
              Pending events
            </ListGroup.Item>
            <ListGroup.Item
              className="cursor-pointer"
              onClick={() => setView("hostedEvents")}
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
          {viewState.showUserDetails && (
            <Segment>
              <div className="display-5"> Account Information</div>
              <hr />
              {/* <ProfileCard /> */}
              <ProfileForm userData={userData} />
            </Segment>
          )}

          {viewState.showAttendedEvents && (
            <Segment className="m-3">
              <div className="display-5 mb-2">Attended Events</div>
              <EventCards type={"attendedEvents"} />
            </Segment>
          )}

          {viewState.showUpcomingEvents && (
            <Segment className="m-3">
              <div className="display-5 mb-2">Upcoming Events</div>
              <EventCards type={"upcomingEventsByUserId"} />
            </Segment>
          )}

          {viewState.showAnalyticsbool && <EventAnalytics />}

          {viewState.showPending && (
            <Segment className="m-3">
              <div className="display-5 mb-2">Pending Events for Approval</div>
              <EventCards type={"pendingEvents"} />
            </Segment>
          )}

          {viewState.showHosted && (
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
