import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

function ProfileForm({ userData }) {
  console.log("userData in Profile Page", userData);

  return (
    <div>
      <Segment>
        <h6 className="display-6">Contact Information</h6>
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
    </div>
  );
}

export default ProfileForm;
