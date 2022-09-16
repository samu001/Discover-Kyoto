import React from "react";
import video from "../../Videos/herovideo.mov";
import "./Hero.css";
import { Link } from "react-scroll";

function Hero() {
    return (
        <div className="hero-section">
            <div className="navbar" id="nav">
                <ul>
                    <li>
                        <Link
                            to="events"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={500}
                        >
                            <p>Events</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="locations"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={500}
                        >
                            <p className="text">Locations</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="featured"
                            spy={true}
                            smooth={true}
                            offset={-5}
                            duration={500}
                        >
                            <p>Featured</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="history"
                            spy={true}
                            smooth={true}
                            offset={-135}
                            duration={500}
                        >
                            <p>History</p>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="overlay-hero">
                <h1 id="hero-title">
                    DISCOVER KY<span></span>TO
                </h1>
            </div>
            <div className="hero-vid-overlay"></div>
            <video className="hero-vid" autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
}

export default Hero;
