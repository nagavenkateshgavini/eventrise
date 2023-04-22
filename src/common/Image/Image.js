// EventImage.js
import React, { useState, useEffect } from "react";
import {Image} from "semantic-ui-react"
import axios from "axios";

const EventImage = ({ image_path }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}getEventImage`,
          image_path
        );
        setImageUrl(response.data.url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    fetchImage();
  }, [image_path]);

  return (
    <Image
      src={imageUrl || "path/to/placeholder/image.jpg"} // Provide a placeholder image in case the URL is not available
      alt="Event"
      className="event-image"
    />
  );
};

export default EventImage;
