import React, { useEffect, useState } from "react";
import { Divider, Form, Label, Segment, Button, Grid } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";

function ProfileForm({ userData }) {
  const options = [
    { key: 1, text: "Male", value: "Male" },
    { key: 2, text: "Female", value: "Female" },
    { key: 3, text: "Others", value: "Others" },
  ];
  const [selectedGender, setSelectedGender] = useState(userData.sex);
  useEffect(() => {
    setSelectedGender(userData.sex);
  }, [userData]);

  const handleGenderChange = (event, data) => {
    setSelectedGender(data.value);
  };

  return (
    <div>
      <Segment>
        <h6 className="display-6">Personal Information</h6>
        <Form className="m-3 p-4">
          <Form.Group unstackable widths={2}>
            <Form.Input
              label="First name"
              placeholder="First name"
              defaultValue={userData.name}
            />
            <Form.Input
              label="Last name"
              placeholder="Last name"
              defaultValue={userData.name}
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              label="Address"
              placeholder="Address"
              defaultValue={userData.Address}
            />

            <Form.Input
              label="City"
              placeholder="City"
              defaultValue={userData.city}
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              label="Country"
              placeholder="Country"
              defaultValue={userData.country}
            />
            <Form.Input
              label="Pincode"
              placeholder="Pincode"
              defaultValue={userData.pincode}
            />
          </Form.Group>
        </Form>
      </Segment>
      <Segment>
        <h6 className="display-6">Contact Information</h6>
        <Form className="m-3 p-4">
          <Form.Group unstackable widths={2}>
            <Form.Input
              label="Email Id"
              placeholder="Email Id"
              defaultValue={userData.email}
              type="email"
            />
            <Form.Input
              label="Mobile Number"
              placeholder="Mobile Number"
              defaultValue={userData.name}
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              label="Age"
              placeholder="Gender"
              defaultValue={userData.age}
            />
            <Form.Input label="Gender">
              <Dropdown
                options={options}
                selection
                value={selectedGender}
                onChange={handleGenderChange}
              />
            </Form.Input>
          </Form.Group>
        </Form>
      </Segment>

      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Button style={{ float: "right" }} color="orange">
              Save
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ProfileForm;
