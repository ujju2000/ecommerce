
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Product({prod}) {
  return (
    <Card className = 'my-3 p-3 rounded'>
        <Link to = {`/product/${prod.id}`}> 
            <Card.Img src = {prod.image}  variant = "top" />
        </Link>
        <Card.Body>
            <Link to = {`/product/${prod.id}`}>
                <Card.Title as = "div">
                    <strong>
                        {prod.title}
                    </strong>
                </Card.Title>
            </Link>

            <Card.Text as = "h3">
                ${prod.price}
            </Card.Text>
        </Card.Body>
    </Card>

  )
}
