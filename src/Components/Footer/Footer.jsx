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
                                    <h3>About</h3>
                                </li>
                                <li>Landmarks</li>
                                <li>Prefecture</li>
                                <li>Travel Policies</li>
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
                                <li>Information</li>
                            </ul>
                        </div>
                        <div className="tours">
                            <ul className="footer-ul">
                                <li>
                                    <h3>Tours</h3>
                                </li>
                                <li>Legal Info</li>
                                <li>Refund Policy</li>
                                <li>Availability</li>
                                <li>Scheduling</li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyrigth">
                        This webpage is a mockup website meant to show off
                        different technical skills and creativity from the
                        creator. It is not intended to represent accurate
                        current events or services occurring in the city of
                        Kyoto, Japan.
                    </div>
                    <div className="media-links">
                        <a
                            href="https://www.linkedin.com/in/samuel-perez-0a146b24a/"
                            target="_blank"
                            className="footer-icon"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            className="footer-icon"
                            href="https://www.linkedin.com/in/samuel-perez-0a146b24a/"
                            target="_blank"
                        >
                            <AiFillInstagram />
                        </a>
                        <a
                            className="footer-icon"
                            href="https://www.linkedin.com/in/samuel-perez-0a146b24a/"
                            target="_blank"
                        >
                            <BsFacebook />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
