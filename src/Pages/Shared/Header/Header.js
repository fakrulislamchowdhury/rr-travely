import React from 'react';
import { Navbar, Container, Button, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import icon from '../../../img/icon/RR.png';

const Header = () => {
    const { user, logOut } = useAuth();

    const activeStyle = {
        color: "red"
    }
    const style = {
        textDecoration: "none",
        fontWeight: "bold",
        padding: "10px"
    }
    return (
        <div>
            <>
                <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand>
                            <div className='d-flex align-items-center'>
                                <img src={icon} alt="" />
                                <h3 className='text-warning px-2'><b>RR Travely</b></h3>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-start">
                            <NavLink activeStyle={activeStyle} style={style} to="/home">Home</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/services">Services</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/contact">Contact</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/about">About Us</NavLink>
                            {user.displayName ?
                                ''
                                : <NavLink activeStyle={activeStyle} style={style} to="/login">Login</NavLink>
                            }

                            {user.displayName ?
                                <Navbar.Text>
                                    <NavDropdown title={<a href="#login">{user?.displayName ? user?.displayName : ''}</a>} id="nav-dropdown" >
                                        <NavDropdown.Item eventKey="4.1"><NavLink activeStyle={activeStyle} style={style} to="/myTour">My Tour</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item eventKey="4.2"><NavLink activeStyle={activeStyle} style={style} to="/addService">Add Tour</NavLink></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item eventKey="4.3">{user.displayName ?
                                            <Button onClick={logOut} variant="light">Logout</Button>
                                            : ''}
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Navbar.Text> : ''}

                            {user.displayName ?
                                < Navbar.Brand >
                                    <img
                                        src={user?.photoURL ? user?.photoURL : ''}
                                        width="30"
                                        height="30"
                                        border-radius="50%"
                                        className="d-inline-block align-top"
                                        alt=""
                                    />
                                </Navbar.Brand> : ''}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div >
    );
};

export default Header;