// EventImage.js
import React, { useState, useEffect } from "react";
import {Image} from "semantic-ui-react"
import axios from "axios";

const EventImage = ({ image_path, onImageUrlReady }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
	    console.log(image_path);
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}getEventImage`,
		{image_path: image_path}
        );
	console.log(response.data);
        setImageUrl(response.data);
	onImageUrlReady(response.data);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    fetchImage();
  }, [image_path, onImageUrlReady]);

  return (
    <Image
      src={imageUrl || "path/to/placeholder/image.jpg"} // Provide a placeholder image in case the URL is not available
      alt="Event"
      className="event-image"
    />
  );
};

export default EventImage;
