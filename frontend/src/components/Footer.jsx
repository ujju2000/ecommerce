
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer>
        <Container>
            <Row>
                <Col className = 'text-center py-3'>
                    <p>Unthinkable Ecommerce &copy; {year} </p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
