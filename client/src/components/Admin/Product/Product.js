import React from 'react';
import {
    Container,
    Row,
    Col,
    Label,
    Input
} from 'reactstrap';

function Product(props) {
    return(
        <Col sm="4" className="ProductRoot">
            <Row>

            </Row>
            <Row className="tittleProduct">
                <h3>{props.name}</h3>
            </Row>
            <Row className="priceProduct">
                <h3>{props.price}</h3>
            </Row>
        </Col>
    )
}

export default Product;