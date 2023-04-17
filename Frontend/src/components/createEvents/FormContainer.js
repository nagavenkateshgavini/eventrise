import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
export default function FormContainer({ children }) {
  return (
    <Container>
        <Row className='justify-content-md-center mt-5 min-vh-100'>
            <Col>
                {children}
            </Col>
        </Row>
    </Container>
  )
}
