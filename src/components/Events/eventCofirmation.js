import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

export default function eventConfirm() {
  return (
    <Container>
      <Row className='justify-content-md-center mt-5 min-vh-100'>
        <Col>
          <h1>Great news! Your event has been successfully created!</h1>
          <h3>Please note that your event will be reviewed by the admin, but don't worry, you will receive an email notification once it's approved.</h3>
        </Col>
      </Row>
    </Container>
  )
}
