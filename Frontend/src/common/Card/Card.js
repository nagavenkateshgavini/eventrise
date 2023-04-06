import React from "react";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/crackers.jpeg";

const ProfileCard = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <img src={img1}></img>
      </Card>
    </div>
  );
};

export default ProfileCard;
