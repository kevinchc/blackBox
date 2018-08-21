import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Media } from 'reactstrap';
import Lentes from '../../images/lentes.jpg';
import Android from '../../images/androide.png';
import Apple from '../../images/apple.png';
import './Home.css';

import { Link } from 'react-router-dom';

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
                    <div className="rootHome">
                        <div className="Home">
                            <img src={Lentes}/>
                        </div>
                        <div className="Tittle">
                            <h1>BIENVENIDO</h1>
                        </div>
                        <div className="subTittle">
                        </div>
                        <div className="Android">
                            <Link to="/android">
                                <img src={Android}/>
                            </Link>
                        </div>
                        <div className="Apple">
                            <Link to="/apple">
                                <img src={Apple}/>
                            </Link>
                        </div>
                    </div>
                </Row>
            </Container>
        )
    }
}

Container.propTypes = {
    fluid:  PropTypes.bool
    // applies .container-fluid class
}

export default Home;