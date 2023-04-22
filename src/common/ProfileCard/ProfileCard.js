import React, { useState, useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Button, Form } from "react-bootstrap";
import UserContext from "../../UserContext";
import axios from "axios";
import { Loader } from "semantic-ui-react";

const ProfileCard = () => {
  const { email, userId } = useContext(UserContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [typeofLoad, setLoad] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const handleFileChange = async (event) => {
    setSelectedFile(event.target.files[0]);
    if (!!selectedFile) {
      //setField("file_selected", "Please select a file");
    } else {
      //setField("file_selected", null);
    }

    if (typeofLoad) {
      if (event.target.files.length > 0) {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("image", event.target.files[0]);
        try {
          await axios
            .post(
              `${process.env.REACT_APP_BASE_URL}deleteProfileImage`,
              email,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then(
              await axios.post(
                `${process.env.REACT_APP_BASE_URL}uploadProfileImage`,
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              )
            );
        } catch (error) {
          console.error("Error uploading the file", error);
        }
      }
    } else {
      if (event.target.files.length > 0) {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("image", event.target.files[0]);
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_BASE_URL}uploadProfileImage`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          console.log(response.data);
        } catch (error) {
          console.error("Error uploading the file", error);
        }
      }
    }
  };
  const inputFileRef = React.useRef(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}checkProfilePic/${userId}`)
      .then((res) => setLoad(res.data.Message));
    axios
      .get(`${process.env.REACT_APP_BASE_URL}getProfileImage/${email}`)
      .then((res) => setImageSrc(res.data.imageSrc))
      .catch((error) => {
        console.error(error);
        setImageSrc("../../assets/browse_events/music.jpeg");
      });
  });
  const handleButtonClick = () => {
    inputFileRef.current.click();
  };

  if (imageSrc === "../../assets/browse_events/music.jpeg") {
    return (
      // <Loader active inline="centered">
      //   Loading...
      // </Loader>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageSrc} alt="Loading" />
      </Card>
    );
  } else {
    return (
      <div>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label className="fw-bold fs-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imageSrc} alt="Loading" />
            </Card>
            <Button
              className="mt-2"
              variant="warning"
              onClick={handleButtonClick}
            >
              Update
            </Button>
            <input
              ref={inputFileRef}
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </Form.Label>
        </Form.Group>
      </div>
    );
  }
};

export default ProfileCard;
