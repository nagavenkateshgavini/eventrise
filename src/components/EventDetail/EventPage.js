import React, { useState, useEffect } from "react";

import {
  Segment,
  Image,
  Header,
  Icon,
  Label,
  Button,
  Grid,
  Container,
  Loader,
} from "semantic-ui-react";
import img1 from "../../assets/tickets.jpeg";
import Footer from "../../common/Footer/footer";

const EventDetails = ({ eventId }) => {
  console.log("entering details");
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEventDetails(eventId).then((data) => setEvent(data));
  }, [eventId]);

  const fetchEventDetails = async (id) => {
    // Replace this function with your actual API call
    const mockApiCall = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          imageUrl: "https://example.com/image.jpg",
          title: "Sample Event",
          description: "This is a sample event description.",
          date: "2023-05-01",
          location: "New York City",
          status: "active",
        });
      }, 1000);
    });

    const eventData = await mockApiCall;
    return eventData;
  };

  if (!event) {
    return (
      <Loader active inline="centered">
        Loading...
      </Loader>
    );
  }

  const { imageUrl, title, description, date, location, status } = event;

  return (
    <div>
      <Container className="m-4">
        <Grid centered columns={2}>
          <Grid.Column>
            <Segment>
              <Image src={img1} centered />
              <Header as="h2" textAlign="center">
                {title}
              </Header>
              <Grid stackable>
                <Grid.Column mobile={16} computer={4}>
                  <strong>Date:</strong>
                </Grid.Column>
                <Grid.Column mobile={16} computer={12}>
                  <Icon name="calendar" />
                  {new Date(date).toLocaleDateString()}
                </Grid.Column>
              </Grid>
              <Grid>
                <Grid.Column mobile={16} computer={4}>
                  <strong>Location:</strong>
                </Grid.Column>
                <Grid.Column mobile={16} computer={12}>
                  <Icon name="map marker alternate" />
                  {location}
                </Grid.Column>
              </Grid>
              <Grid>
                <Grid.Column mobile={16} computer={4}>
                  <strong>Status:</strong>
                </Grid.Column>
                <Grid.Column mobile={16} computer={12}>
                  <Label color={status === "active" ? "green" : "red"}>
                    {status}
                  </Label>
                </Grid.Column>
              </Grid>
              <Segment>
                <Header as="h2" textAlign="center">
                  About Event
                </Header>
                <hr />
                {description}
              </Segment>
              <div style={{ textAlign: "center" }}>
                <Button color="green">Attend Event</Button>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default EventDetails;
