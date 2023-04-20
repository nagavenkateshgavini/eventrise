import React, { useState } from "react";
import {
  Form,
  Dropdown,
  Button,
  Grid,
  Segment,
  Label,
  Header as SemanticHeader,
} from "semantic-ui-react";
import Header from "../../common/header/header";
import Footer from "../../common/Footer/footer";
import { useMediaQuery } from "react-responsive";
import PhoneInput from "react-phone-input-2";
import img1 from "../../assets/celebration.jpeg";
import { useNavigate } from "react-router-dom";
import { usStates } from "../../utils/states";

import axios from "axios";

const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const UserRegistration = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    phoneNumber: "",
  });

  const handlePhoneNumberChange = (value) => {
    setFormData({ ...formData, phoneNumber: value });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({});
    setFormData({ ...formData, [name]: value });
  };
  const isNotEmpty = (value) => {
    let val = String(value);
    return val.trim() !== "";
  };

  const validations = (formData) => {
    const newErrors = {};
    for (const fieldName in formData) {
      if (!isNotEmpty(formData[fieldName])) {
        newErrors[fieldName] = "This field is required";
      }
    }
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(formData.email).toLowerCase())) {
      newErrors.email = "Please Enter valid mail Address";
    }

    if (formData.age < 18 && formData.age >= 100) {
      newErrors.age = "Your Age doesn't meet requirements";
    }
    if (isNaN(formData.age)) {
      newErrors.age = "Enter valid Age It should not have string";
    }

    const passRe =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passRe.test(String(formData.password))) {
      newErrors.password =
        "Password didn't meet requirements It should have one small  & capital letter, number, special character with length 8";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = validations(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(formData, `${process.env.REACT_APP_BASE_URL}createUser`)
      axios
        .post(`${process.env.REACT_APP_BASE_URL}createUser`, formData)
        .then((res) => {
          if (res.status === 201) {
            console.log("I'm entering", res);
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const isMobile = useMediaQuery({ query: "(max-width: 955px)" });
  return (
    <div style={{ background: "linear-gradient(90deg, #f5e7d8, #e2bb96)" }}>
      <Header />
      <div
        className="my-2"
        style={{
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <Segment
          className="p-4"
          style={{
            background: "linear-gradient(135deg, #f5e7d8, #e2bb96)",
            boxShadow: "3px 4px 6px rgba(255, 215, 0, 0.3)",
          }}
        >
          <SemanticHeader as="h2" textAlign="center" color="black">
            User Registration
          </SemanticHeader>
          <Grid className="p-4">
            <Grid.Row centered columns={2}>
              <Grid.Column mobile={16} computer={8}>
                <img src={img1} alt="something" />
              </Grid.Column>
              <Grid.Column>
                <Form onSubmit={handleSubmit}>
                  <Form.Field></Form.Field>
                  <Form.Field>
                    <Grid>
                      <Grid.Column
                        mobile={16}
                        computer={3}
                        style={{ textAlign: isMobile ? "" : "right" }}
                      >
                        <Label
                          pointing={isMobile ? "below" : "right"}
                          color="blue"
                        >
                          Name
                        </Label>
                      </Grid.Column>
                      <Grid.Column width={13}>
                        <Form.Input
                          placeholder="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          style={{ width: isMobile ? "100%" : "50%" }}
                          error={errors.name && { content: errors.name }}
                        />
                      </Grid.Column>
                    </Grid>
                  </Form.Field>

                  <Form.Field>
                    <Grid>
                      <Grid.Column
                        mobile={16}
                        computer={3}
                        style={{ textAlign: isMobile ? "" : "right" }}
                      >
                        <Label
                          pointing={isMobile ? "below" : "right"}
                          color="blue"
                        >
                          Email
                        </Label>
                      </Grid.Column>
                      <Grid.Column width={13}>
                        <Form.Input
                          placeholder="Email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          style={{ width: isMobile ? "100%" : "50%" }}
                          error={errors.email && { content: errors.email }}
                        />
                      </Grid.Column>
                    </Grid>
                  </Form.Field>
                  <Form.Field>
                    <Grid>
                      <Grid.Column
                        mobile={16}
                        computer={3}
                        style={{ textAlign: isMobile ? "" : "right" }}
                      >
                        <Label
                          pointing={isMobile ? "below" : "right"}
                          color="blue"
                        >
                          Password
                        </Label>
                      </Grid.Column>
                      <Grid.Column
                        mobile={16}
                        computer={3}
                        style={{ textAlign: isMobile ? "" : "right" }}
                      >
                        <Form.Input
                          placeholder="Password"
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          error={
                            errors.password && { content: errors.password }
                          }
                        />
                      </Grid.Column>
                    </Grid>
                  </Form.Field>
                  <Form.Field>
                    <Grid>
                      <Grid.Column
                        mobile={16}
                        computer={3}
                        style={{ textAlign: isMobile ? "" : "right" }}
                      >
                        <Label
                          pointing={isMobile ? "below" : "right"}
                          color="blue"
                        >
                          Gender
                        </Label>
                      </Grid.Column>
                      <Grid.Column width={13}>
                        <Form.Input
                          error={errors.gender && { content: errors.gender }}
                        >
                          <Dropdown
                            style={{ width: isMobile ? "100%" : "50%" }}
                            placeholder="Select Gender"
                            fluid
                            selection
                            options={genderOptions}
                            name="gender"
                            value={formData.gender}
                            onChange={(e, { name, value }) =>
                              handleChange({ target: { name, value } })
                            }
                          />
                        </Form.Input>
                      </Grid.Column>
                    </Grid>
                  </Form.Field>
                  <Form.Field>
                    <Grid>
                      <Grid.Column
                        mobile={16}
                        computer={3}
                        style={{ textAlign: isMobile ? "" : "right" }}
                      >
                        <Label
                          pointing={isMobile ? "below" : "right"}
                          color="blue"
                        >
                          Age
                        </Label>
                      </Grid.Column>
                      <Grid.Column width={13}>
                        <Form.Input
                          placeholder="Age"
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          style={{ width: isMobile ? "100%" : "50%" }}
                          error={errors.age && { content: errors.age }}
                        />
                      </Grid.Column>
                    </Grid>
                  </Form.Field>
                  <Form.Field>
                    <Grid>
                      <Grid.Column
                        mobile={16}
                        computer={3}
                        style={{ textAlign: isMobile ? "" : "right" }}
                      >
                        <Label
                          pointing={isMobile ? "below" : "right"}
                          color="blue"
                        >
                          Street 1
                        </Label>
                      </Grid.Column>
                      <Grid.Column width={13}>
                        <Form.Input
                          placeholder="Street 1"
                          name="street1"
                          value={formData.street1}
                          onChange={handleChange}
                          style={{ width: isMobile ? "100%" : "50%" }}
                          error={errors.street1 && { content: errors.street1 }}
                        />
                      </Grid.Column>
                    </Grid>
                  </Form.Field>
                  <Form.Field>
                    <Grid>
                      <Grid.Column
                        mobile={16}
                        computer={3}
                        style={{ textAlign: isMobile ? "" : "right" }}
                      >
                        <Label
                          pointing={isMobile ? "below" : "right"}
                          color="blue"
                        >
                          Street 2
                        </Label>
                      </Grid.Column>
                      <Grid.Column width={13}>
                        <Form.Input
                          placeholder="Street 2"
                          name="street2"
                          value={formData.street2}
                          onChange={handleChange}
                          style={{ width: isMobile ? "100%" : "50%" }}
                          error={errors.street2 && { content: errors.street2 }}
                        />
                      </Grid.Column>
                    </Grid>
                  </Form.Field>
                  <Form.Field>
                    <Grid>
                      <Grid.Column
                        mobile={16}
                        computer={3}
                        style={{ textAlign: isMobile ? "" : "right" }}
                      >
                        <Label
                          pointing={isMobile ? "below" : "right"}
                          color="blue"
                        >
                          City
                        </Label>
                      </Grid.Column>
                      <Grid.Column width={13}>
                        <Form.Input
                          placeholder="City"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          style={{ width: isMobile ? "100%" : "50%" }}
                        />
                      </Grid.Column>
                    </Grid>
                  </Form.Field>
                  <Form.Field>
                    <Grid>
                      <Grid.Column
                        mobile={16}
                        computer={3}
                        style={{ textAlign: isMobile ? "" : "right" }}
                      >
                        <Label
                          pointing={isMobile ? "below" : "right"}
                          color="blue"
                        >
                          State
                        </Label>
                      </Grid.Column>
                      <Grid.Column width={13}>
                        <Form.Dropdown
                          style={{ width: isMobile ? "100%" : "50%" }}
                          placeholder="State"
                          name="state"
                          value={formData.state}
                          onChange={(e, { name, value }) =>
                          handleChange({ target: { name, value } })
                          }
                          error={errors.state && { content: errors.state }}
                          fluid
                          selection
                          options={usStates}
                        />
                      </Grid.Column>
                    </Grid>
                  </Form.Field>
                  <Form.Field>
                    <Grid>
                      <Grid.Column
                        mobile={16}
                        computer={3}
                        style={{ textAlign: isMobile ? "" : "right" }}
                      >
                        <Label
                          pointing={isMobile ? "below" : "right"}
                          color="blue"
                        >
                          Zip
                        </Label>
                      </Grid.Column>
                      <Grid.Column width={13}>
                        <Form.Input
                          placeholder="Zip Code"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          style={{ width: isMobile ? "100%" : "50%" }}
                          error={errors.zip && { content: errors.zip }}
                        />
                      </Grid.Column>
                    </Grid>
                  </Form.Field>
                  <Form.Field>
                    <Grid>
                      <Grid.Column
                        mobile={16}
                        computer={3}
                        style={{ textAlign: isMobile ? "" : "right" }}
                      >
                        <Label
                          pointing={isMobile ? "below" : "right"}
                          color="blue"
                        >
                          Country
                        </Label>
                      </Grid.Column>
                      <Grid.Column width={13}>
                        <Form.Input
                          placeholder="Country"
                          name="country"
                          value={"United States"}
                          onChange={handleChange}
                          style={{ width: isMobile ? "100%" : "50%" }}
                          error={errors.country && { content: errors.country }}
                        />
                      </Grid.Column>
                    </Grid>
                  </Form.Field>

                  <Form.Field>
                    <Grid>
                      <Grid.Column
                        mobile={16}
                        computer={3}
                        style={{ textAlign: isMobile ? "" : "right" }}
                      >
                        <Label
                          pointing={isMobile ? "below" : "right"}
                          color="blue"
                        >
                          Mobile Number
                        </Label>
                      </Grid.Column>
                      <Grid.Column width={13}>
                        <Form.Input
                          error={
                            errors.phoneNumber && {
                              content: errors.phoneNumber,
                            }
                          }
                        >
                          <PhoneInput
                            style={{ width: isMobile ? "100%" : "50%" }}
                            country={"us"}
                            value={formData.phoneNumber}
                            name="phoneNumber"
                            onChange={handlePhoneNumberChange}
                            placeholder="Enter phone number"
                          />
                        </Form.Input>
                      </Grid.Column>
                    </Grid>
                  </Form.Field>
                  <Button className="float-end" primary type="submit">
                    Submit
                  </Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
      <div style={{ marginBottom: "50px" }}></div>
      <Footer />
    </div>
  );
};

export default UserRegistration;
