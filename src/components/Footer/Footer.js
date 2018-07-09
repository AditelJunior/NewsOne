import React from 'react';
import Navigation from "../Navigation/Navigation";
import "./Footer.css"

const Footer = () => {
    return (
        <section className="footer section">
            <div className="footer_block">
                <div className="navigation_block">
                    <Navigation navType="vertical_item" navLinkType="nav_link_vertical"/>
                </div>
                <div className="social_network_block">
                    <h1 className="capt_socials">Socials</h1>
                    <div className="socials">
                        <div className="social_top social_crowd">
                            <span className="social_item"><a href="https://www.facebook.com/zuck" className="fa fa-facebook-square"/></span>
                            <span className="social_item"><a href="https://www.facebook.com/zuck" className="fa fa-google"/></span>
                            <span className='social_item'><a href="https://www.facebook.com/zuck" className="fa fa-instagram"/></span>
                        </div>
                        <div className="social_bottom social_crowd">
                            <span className="social_item"><a href="https://www.facebook.com/zuck" className="fa fa-telegram"/></span>
                            <span className="social_item"><a href="https://www.facebook.com/zuck" className="fa fa-vk"/></span>
                            <span className='social_item'><a href="https://www.facebook.com/zuck" className="fa fa-twitter"/></span>
                        </div>

                    </div>
                </div>
                <div className="footer_logotype_wrapper">
                    <span className="news_logotype">news</span><span className="one_logotype">one</span>
                </div>
            </div>
            <div className="copyrights">
                Copyright © PLKIT98| All right reserved.
            </div>
        </section>
    );
};

export default Footer;
