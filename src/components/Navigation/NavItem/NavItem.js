import React from 'react';
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return (
        <li className={props.navType ? "nav_item " + props.navType : 'nav_item'}>
            <NavLink to={props.pathTo} className={props.navLinkType ? "nav_item_link " + props.navLinkType : "nav_item_link"}>
                {props.title}
            </NavLink>
        </li>
    );
};

export default NavItem;
