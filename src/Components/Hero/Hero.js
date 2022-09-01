import React from "react";
import video from "../../Videos/vid.mov";
import "./Hero.css";

function Hero() {
    return (
        <div className="hero-section">
            <div className="navbar">
                <ul>
                    <li>Events</li>
                    <li>Locations</li>
                    <li>History</li>
                    <li>Travel</li>
                </ul>
            </div>

            <div className="overlay">
                <h1 id="hero-title">
                    DISCOVER KY<span></span>TO
                </h1>
            </div>
            <video className="hero-vid" autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
}

export default Hero;
