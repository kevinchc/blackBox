import React, { Component } from 'react';

import {
    Nav,
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    UncontrolledDropdown,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';

/* Styles */

import './Header.css';


class Header extends  React.Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render(){
        return(
            <div className="rootNav">
                <div className="logo">
                </div>
                <div className="nav">
                    <Nav pills>
                        <NavItem>
                            <Link to="/home">Inicio</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/store">Tienda</Link>
                        </NavItem>
                        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav caret>
                                Categorias
                            </DropdownToggle>
                            <DropdownMenu>
                                    <Link to="/android">
                                        <DropdownItem>Android</DropdownItem>
                                    </Link>
                                    <Link to="/apple">
                                        <DropdownItem>Apple</DropdownItem>
                                    </Link>
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem>
                            <Link to="/contact">Contacto</Link>
                        </NavItem>
                    </Nav>
                </div>
            </div>
        )
    }
}

export default Header;