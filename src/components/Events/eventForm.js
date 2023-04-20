import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Footer from "../../common/Footer/footer";
import { Row, Col, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormContainer from "./FormContainer";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EventForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  };

  const validateForm = () => {
    console.log("validation called");
    const {
      title,
      event_date,
      description,
      ticket_price,
      location,
      event_category,
    } = form;
    const newErrors = {};

    if (!event_date || event_date === "")
      newErrors.event_date = "Please enter date";
    else if (description.length < 10)
      newErrors.description = "Description should be more than 10 characters";

    if (!title || title === "") newErrors.title = "Please enter title";
    if (!ticket_price || ticket_price === "")
      newErrors.ticket_price = "Please enter price";
    if (!location || location === "")
      newErrors.location = "Please enter location";
    if (!event_category || event_category === "")
      newErrors.event_category = "Please enter category";

    return newErrors;
  };

  const send = (form) => {
    const url = `${process.env.REACT_APP_BASE_URL}createEvent`;
    console.log(url, form);
    try {
      Axios.post(url, form);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submission called");

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      console.log("Errors in the form");
      console.log(formErrors);
      setErrors(formErrors);
    } else {
      console.log("Form Submitted");
      send(form);
    }
    navigate("/eventconfirmation");
  };

  return (
    <>
      <FormContainer>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h1>Please add the event details in the form</h1>
            <br />
            <Form>
              <Form.Group className="mb-3" controlId="eventForm.title">
                <Form.Label className="fw-bold fs-5">Event Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Event title"
                  value={form.title}
                  onChange={(e) => setField("title", e.target.value)}
                  isInvalid={!!errors.title}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.title}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="eventForm.description">
                <Form.Label className="fw-bold fs-5">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  value={form.description}
                  onChange={(e) => setField("description", e.target.value)}
                  isInvalid={!!errors.description}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="eventForm.eventAddress">
                <Form.Label className="fw-bold fs-5">Event Location</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  value={form.location}
                  onChange={(e) => setField("location", e.target.value)}
                  isInvalid={!!errors.location}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.location}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                className="mb-3"
                controlId="eventForm.event_date"
              >
                <Form.Label className="fw-bold fs-5">Event Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter Event Date"
                  value={form.event_date}
                  onChange={(e) => setField("event_date", e.target.value)}
                  isInvalid={!!errors.event_date}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.event_date}
                </Form.Control.Feedback>
              </Form.Group>

              <br />

              <InputGroup
                as={Col}
                md="3"
                className="mb-3"
                controlId="eventForm.ticket_price"
              >
                <InputGroup.Text>Price in $</InputGroup.Text>
                <Form.Control
                  aria-label="Amount (to the nearest dollar)"
                  value={form.ticket_price}
                  onChange={(e) => setField("ticket_price", e.target.value)}
                  isInvalid={!!errors.ticket_price}
                />
                <InputGroup.Text>.00</InputGroup.Text>

                <Form.Control.Feedback type="invalid">
                  {errors.ticket_price}
                </Form.Control.Feedback>
              </InputGroup>

              <Form.Group controlId="eventForm.event_category">
                <Form.Label className="fw-bold fs-5">Event category</Form.Label>

                <Form.Select
                  placeholder="Select Event category"
                  value={form.event_category}
                  onChange={(e) => setField("event_category", e.target.value)}
                  isInvalid={!!errors.event_category}
                >
                  <option>Select category</option>
                  <option value="music_concert">Music Concert type</option>
                  <option value="dance">Dancing event</option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.category}
                </Form.Control.Feedback>
              </Form.Group>

              <br />
              <Form.Group controlId="submit">
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className="my-2"
                  variant="primary"
                >
                  Continue
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </FormContainer>
      <Footer></Footer>
    </>
  );
}
