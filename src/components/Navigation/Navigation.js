import React from 'react';
import NavItem from "./NavItem/NavItem";
import './Navigation.css'
const navLink = {
    home: "/",
    news: "/news",
    add: "/add",
    about: "/about",
    contacts: "/contacts"
};

const Navigation = (props) => {
    return (
        <ul className="nav_list">
            {Object.keys(navLink).map(link => (
                <NavItem
                    key={link}
                    navType={props.navType}
                    navLinkType={props.navLinkType}
                    pathTo={navLink[link]}
                    title={link}
                />

            ))}
        </ul>
    );
};

export default Navigation;
