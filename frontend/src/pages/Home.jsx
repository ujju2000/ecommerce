import {Row , Col} from 'react-bootstrap';
import React, { useEffect , useState } from 'react'
import Product from '../components/Product';
import { useUser } from '../context/user-context';

export default function Home() {
    const {products} = useUser();
  return (
    <>  
        <h1>Latest Products</h1>

        <Row>
            {
                products.map(prod => (
                    <Col key = { prod.id} sm = {12} md= {6} lg = {4} xl = {3}>
                        <Product prod = {prod} />
                    </Col>
                ))
            }
        </Row>
    </>
  )
}
