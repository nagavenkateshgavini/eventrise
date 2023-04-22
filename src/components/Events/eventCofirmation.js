import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'

export default function EventConfirm() {
  return (
    <Container>
      <Row className='justify-content-md-center mt-5 min-vh-100'>
        <Col md={6}>
          <Card className='p-4 bg-dark text-white shadow'>
            <Card.Title className='text-center mb-4'>
              Great news! Your event has been successfully created!
            </Card.Title>
            <Card.Text>
              Please note that your event will be reviewed by the admin, but don't worry, you will receive an email notification once it's approved.
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}