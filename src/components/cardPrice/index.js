import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from '../button';
import TabPrice from '../tabPrice';

export default function CardPrice() {
  return (
    <Container>
      <Row className='card-price mt-4 mb-5'>
        <Col md={12} lg={6}>
          <span className='card-price__price'>Rp 9.360 <span>/ 0,01 gr</span></span>
          <Button title="Beli Emas" className="btn-primary w-100 mt-3 py-2" />
        </Col>
        <Col md={12} lg={6} className="mt-lg-0 mt-4">
          <span className='card-price__price'>Rp 9.070 <span>/ 0,01 gr</span></span>
          <Button title="Jual Emas" className="btn-outline w-100 mt-3 py-2" />
        </Col>
      </Row>

      <TabPrice />
    </Container>
  )
}
