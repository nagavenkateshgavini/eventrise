import React from "react";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/crackers.jpeg";
import { Button } from "react-bootstrap";

const ProfileCard = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <img src={img1} alt="something"></img>
        
      </Card>
      <Button className="mt-2" variant="warning">Upload</Button>
    </div>
  );
};

export default ProfileCard;
