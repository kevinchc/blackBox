import React from 'react';
import Product from '../Product/Product';
import {
    Container,
    Row
} from 'reactstrap';

class ListProduct extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Product name="Product1" price="S/.120"/>
                    <Product name="Product2" price="S/.120"/>
                    <Product name="Product2" price="S/.120"/>
                    <Product name="Product2" price="S/.120"/>
                    <Product name="Product2" price="S/.120"/>
                </Row>
            </Container>
        )
    }
}

export default ListProduct;