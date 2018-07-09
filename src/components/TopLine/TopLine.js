import React from 'react';
import {NavLink} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./TopLine.css"
const TopLine = () => {
    return (
        <section className="top_line section">
            <div className="logo_block">
                <NavLink to="/" className="nav_item_logo">
                    <span className="news_logo">news</span><span className="one_logo">one</span>
                </NavLink>
            </div>
            <Navigation navType="top-nav__item"/>
        </section>
    );
};

export default TopLine;
