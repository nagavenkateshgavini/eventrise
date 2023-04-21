import React, { useEffect, useState } from "react";
import { Form, Segment, Button, Grid } from "semantic-ui-react";
import { Dropdown, Label } from "semantic-ui-react";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import { validations } from "../../utils/validation";
import axios from "axios";
import { usStates } from "../../utils/states";

function ProfileForm({ userData }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ ...userData });
  const options = [
    { key: 1, text: "Male", value: "male" },
    { key: 2, text: "Female", value: "female" },
    { key: 3, text: "Others", value: "others" },
  ];

  useEffect(() => {
    setFormData({ ...userData });
  }, [userData]);

  const handlePhoneNumberChange = (value) => {
    setFormData({ ...formData, phoneNumber: value });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validations(formData);
    console.log("errors", newErrors);
    if (Object.keys(newErrors).length > 0) {
      console.log("errors", newErrors);
      setErrors(newErrors);
    } else {
      axios
        .put(`${process.env.REACT_APP_BASE_URL}update`, formData)
        .then((res) => {
          console.log("res", res);
          if (res.status === 201) {
            console.log("I'm entering", res);
            navigate("/");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Segment>
          <h6 className="display-6">Personal Information</h6>

          <Form.Group unstackable widths={2}>
            <Form.Input
              label="Name"
              placeholder="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name && { content: errors.name }}
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              label="Street1"
              placeholder="Address"
              defaultValue={userData.street1}
              name="street1"
              value={formData.street1}
              onChange={handleChange}
              error={errors.street1 && { content: errors.street1 }}
            />
            <Form.Input
              label="Street2"
              placeholder="Address"
              defaultValue={userData.street2}
              name="street2"
              value={formData.street2}
              onChange={handleChange}
              error={errors.street2 && { content: errors.street2 }}
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              label="City"
              placeholder="City"
              defaultValue={userData.city}
              name="city"
              value={formData.city}
              onChange={handleChange}
              error={errors.city && { content: errors.city }}
            />
            <Form.Dropdown
              label="State"
              placeholder="State"
              name="state"
              value={formData.state}
              onChange={(e, { name, value }) => {
                handleChange({ target: { name, value } });
              }}
              error={errors.state && { content: errors.state }}
              fluid
              selection
              options={usStates}
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              label="Zip"
              placeholder="Zip"
              defaultValue={userData.zip}
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              error={errors.zip && { content: errors.zip }}
            />
            <Form.Input
              label="Country"
              placeholder="Zip"
              defaultValue={userData.country}
              name="country"
              value={"United States"}
              onChange={handleChange}
              error={errors.country && { content: errors.country }}
            />
          </Form.Group>
        </Segment>
        <Segment>
          <h6 className="display-6">Contact Information</h6>

          <Form.Group unstackable widths={2}>
            <Form.Input
              label="Email Id (Can't update)"
              placeholder="Email Id"
              defaultValue={userData.email}
              type="email"
              readOnly
            />

            <PhoneInput
              country={"us"}
              value={formData.mobile}
              name="phoneNumber"
              onChange={handlePhoneNumberChange}
              placeholder="Enter phone number"
            />
            {errors.phoneNumber && (
              <Label basic size="small" color="red" pointing="left">
                {errors.phoneNumber}
              </Label>
            )}
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              label="Age"
              placeholder="Gender"
              defaultValue={userData.age}
              name="age"
              value={formData.age}
              onChange={handleChange}
              error={errors.age && { content: errors.age }}
            />
            <Form.Input
              label="Gender"
              error={errors.gender && { content: errors.gender }}
            >
              <Dropdown
                options={options}
                selection
                name="gender"
                value={userData.gender}
                onChange={(e, { name, value }) =>
                  handleChange({ target: { name, value } })
                }
              />
            </Form.Input>
          </Form.Group>
        </Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Button type="submit" style={{ float: "right" }} color="orange">
                Save
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </div>
  );
}

export default ProfileForm;
