import React, { Component } from 'react';
import { Media } from 'reactstrap';
import Lentes from '../../images/lentes.jpg';
import Android from '../../images/androide.png';
import Apple from '../../images/apple.png';
import './Home.css';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

class Home extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <div className="root">
                        <div className="Home">
                            <img src={Lentes}/>
                        </div>
                        <div className="Android">
                            <img src={Android}/>
                        </div>
                        <div className="Apple">
                            <img src={Apple}/>
                        </div>
                    </div>
                </Row>
            </Container>
        )
    }
}

export default Home;