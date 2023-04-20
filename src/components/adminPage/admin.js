import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../common/header/header";
import Footer from "../../common/Footer/footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import "./admin.css";

export default function Admin() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    console.log("calling get_events api");
    const url = `${process.env.REACT_APP_BASE_URL}getEvents`;
    const result = await Axios.get(url);
    setEvents(result.data);
  };

  const editEvent = async (event_id) => {
    console.log("approve event called");
    const url = `${process.env.REACT_APP_BASE_URL}updateEvent`;
    console.log(event_id);
    const data = { status: "approved", event_id: event_id };
    console.log(data);

    try {
      let res = await Axios.put(url, data);
      console.log(res);
      loadEvents();
    } catch (e) {
      console.log("Issue with the approve event callstart", e);
    }
  };

  return (
    <>
      <Header />
      <Container fluid className="justify-content-center">
        <Row className="text-center create-event">
          <Col lg={12} className="p-5 min-vh-100">
            <h1>Admin Panel</h1>
            <br />

            <Table striped bordered hover>
              <thead className="custom-header">
                <tr>
                  <th>#</th>
                  <th>Event Title</th>
                  <th>Event Date</th>
                  <th>Event Status</th>
                  <th>Event details</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{event.title}</td>
                    <td>{event.event_date.split("T")[0]}</td>
                    <td>{event.status}</td>
                    <td>
                      <Link
                        className="btn btn-primary m-1"
                        onClick={() => editEvent(event.event_id)}
                      >
                        <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                      </Link>
                      <Link className="btn btn-danger">
                        <i class="fa fa-trash-o" aria-hidden="true">
                          Delete
                        </i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}
