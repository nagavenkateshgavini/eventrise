import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardStyles.css";

function CustomCard({ category }, idx) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRotateY((x / rect.width - 0.5) * -20);
    setRotateX((y / rect.height - 0.5) * 20);
  };

  // const arr=[music,sports,health,business,hobbies,food]

  return (
    <Link
      to={category.link}
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <div
        className="card-container m-3"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => {
          setRotateX(0);
          setRotateY(0);
        }}
        onMouseLeave={() => {
          setRotateX(0);
          setRotateY(0);
        }}
      >
        <Card
          className="shadow-sm cursor-pointer card"
          style={{
            transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`,
          }}
        >
          <Card.Img variant="top" src={category.image} className="image" />
          <Card.Body className="cardBody">
            <Card.Title>{category.title}</Card.Title>
            <Card.Text>{category.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
}

export default CustomCard;
