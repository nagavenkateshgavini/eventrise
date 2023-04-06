import React, { useEffect, useState } from "react";
import { Button, Divider, Segment } from "semantic-ui-react";
import { Row, Col, ListGroup } from "react-bootstrap";
import ProfileCard from "../../common/Card/Card";
import ProfileForm from "../../common/ProfileForm/profileForm";
import axios from "axios";

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const userMail = { email: "gaali.v@northeastern.edu" };

    let isMounted = true;

    axios
      .get("http://localhost:3001/user/userProfile", {
        params: userMail,
      })
      .then((response) => {
        if (isMounted) {
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
  return (
    <Row className="mt-2">
      <Col xs={12} md={3} style={{ backgroundColor: "#f8f7fa" }}>
        <Segment style={{ backgroundColor: "#f8f7fa" }}>
          <ListGroup variant="flush" className="mt-3">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Segment>
      </Col>
      <Col
        xs={12}
        md={9}
        style={{ backgroundColor: "#f8f7fa" }}
        className="mb-3"
      >
        <Segment>
          <div className="display-5"> Account Information</div>
          <hr />
          <ProfileCard />
          <h6>Profile Pic</h6>
          <ProfileForm userData={userData.userDetails} />
        </Segment>
        <Button className="float-right" color="orange">
          Save
        </Button>
      </Col>
    </Row>
  );
};

export default UserProfile;
