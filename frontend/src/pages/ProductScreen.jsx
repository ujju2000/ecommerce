
import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import {Row , Col ,Container , Image ,Card , Button} from 'react-bootstrap';

export default function ProductScreen() {
    // const id = useParams();

    // const product = products.find(p => p.id === id);
    
  return (
    <div>
        <Link className = 'btn btn-light my-3 ' to = '/'>
            GO back 
        </Link>
        <Row>
            <Col md = {5}>
                <Image />
            </Col>  

            <Col md = {4}>
                <ListGroup variant = "flush">
                    <ListGroup.Item>
                        <h3>iphone</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>fnkaf fknnckna iondkl knak iqindasnqio qk</ListGroup.Item>
                </ListGroup>
            </Col>

            <Col md = {3}>
                <Card>
                    <ListGroup variant = 'flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price :</Col>
                                <Col>
                                    <strong>300 </strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            
                        <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    <strong>In Stock</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button className = 'btn-block '>Add to cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </div>
  )
}
