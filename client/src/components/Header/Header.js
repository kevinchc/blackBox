import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '@material-ui/core/Icon';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import './Header.css';


class Header extends Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            auth: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){

        const {
            auth
        } = this.state;

        return(
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <div className="Nav">
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">
                                        GitHub
                                    </NavLink>
                                </NavItem>
                            </div>
                            {
                                auth && <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                        <Icon>person</Icon>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Option 1
                                        </DropdownItem>
                                        <DropdownItem>
                                            Option 2
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}


export default Header;