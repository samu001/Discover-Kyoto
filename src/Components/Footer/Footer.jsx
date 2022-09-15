import React from "react";
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-scroll";

function Footer() {
    return (
        <>
            <div className="footer-section">
                <div className="footer-wrapper">
                    <div className="back-to-top">
                        <button>
                            <Link
                                to="nav"
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration={500}
                            >
                                Back to Top
                            </Link>
                        </button>
                    </div>
                    <div className="footer-links-wrapper">
                        <div className="travel">
                            <ul className="footer-ul">
                                <li>
                                    <h3>Tours</h3>
                                </li>
                                <li>Landmarks</li>
                                <li>About Kyoto</li>
                                <li>Hotels</li>
                            </ul>
                        </div>
                        <div className="events">
                            <ul className="footer-ul">
                                <li>
                                    <h3>Events</h3>
                                </li>
                                <li>Availability</li>
                                <li>Security</li>
                                <li>Delays</li>
                                <li>More Information</li>
                            </ul>
                        </div>
                        <div className="tours">
                            <ul className="footer-ul">
                                <li>
                                    <h3>Tours</h3>
                                </li>
                                <li>East Tour</li>
                                <li>West Tour</li>
                                <li>South Tour</li>
                                <li>Scheduling</li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyrigth">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit ab reprehenderit, voluptatem qui neque porro nam
                        error vero corporis iure.
                    </div>
                    <div className="media-links">
                        <p className="footer-icon">
                            <FaTwitter />
                        </p>
                        <p className="footer-icon">
                            <AiFillInstagram />
                        </p>
                        <p className="footer-icon">
                            <BsFacebook />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
