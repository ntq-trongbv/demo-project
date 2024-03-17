import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import TableUsers from "./user/TableUsers";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    {/*<Navbar.Toggle aria-controls="basic-navbar-nav"/>*/}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className={"my-3 mx-2"}>Home</NavLink>
                            <NavLink to="/users" className={"my-3 mx-2"}>Users</NavLink>
                            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                            {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.2">*/}
                            {/*        Another action*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Divider/>*/}
                            {/*    <NavDropdown.Item href="#action/3.4">*/}
                            {/*        Separated link*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export default Header;
