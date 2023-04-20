import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import axios from "axios";
import "./EventPage.css";

const EventDetails = () => {
  const eventId = useParams().eventId;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}api/events/${eventId}`)
      .then((res) => setEvent(res.data));
  }, [eventId]);

  if (!event) {
    return (
      <Loader active inline="centered">
        Loading...
      </Loader>
    );
  }
  const { title, description, event_date, location, status } = event;
  return (
    <div>
      <Container fluid className="m-4">
        <Grid centered>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={6} largeScreen={6}>
              <Segment>
                <Image src={img1} centered />
                <Header as="h2" textAlign="center">
                  {title}
                </Header>
                <Grid>
                  <Grid.Column mobile={8} computer={4}>
                    <strong>Date:</strong>
                  </Grid.Column>
                  <Grid.Column mobile={8} computer={12}>
                    <Icon name="calendar" />
                    {new Date(event_date).toLocaleDateString()}
                  </Grid.Column>
                </Grid>
                <Grid>
                  <Grid.Column mobile={8} computer={4}>
                    <strong>Time:</strong>
                  </Grid.Column>
                  <Grid.Column mobile={8} computer={12}>
                    <Icon name="clock" />
                    {new Date(event_date).toLocaleTimeString()}
                  </Grid.Column>
                </Grid>
                <Grid>
                  <Grid.Column mobile={8} computer={4}>
                    <strong>Location:</strong>
                  </Grid.Column>
                  <Grid.Column mobile={8} computer={12}>
                    <Icon name="map marker alternate" />
                    {location}
                  </Grid.Column>
                </Grid>
                <Grid>
                  <Grid.Column mobile={8} computer={4}>
                    <strong>Status:</strong>
                  </Grid.Column>
                  <Grid.Column mobile={8} computer={12}>
                    <Label color={status === "approved" ? "green" : "red"}>
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
          </Grid.Row>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default EventDetails;
