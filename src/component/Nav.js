import React from "react";
import {NavLink} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/users">User</NavLink>
            </div>
        )
    }
}

export default Nav;
