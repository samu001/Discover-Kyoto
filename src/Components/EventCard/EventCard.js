import React, { useState } from "react";
import "./EventCard.css";
import "../../Data/CardData";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function EventCard(props) {
    const [iconStyle, setIconStyle] = useState("loc-icon-not-hover");

    function handleHover() {
        setIconStyle("loc-icon-hover");
    }

    function hoverEnd() {
        setIconStyle("loc-icon-not-hover");
    }

    return (
        <>
            <div className="card">
                <div className="cardImg">
                    <img src={props.img} alt="" />
                </div>
                <h3>{props.title}</h3>
                <h4 className="card-location">{props.location}</h4>
                <div className="card-text-container">
                    <p>{props.description}</p>
                </div>

                <div className="card-btns-container">
                    <button className="card-more-btn">
                        <p>Learn More</p>
                        <p className="more-ico">
                            <AiOutlineArrowRight />
                        </p>
                    </button>

                    <button
                        className="card-dir-btn"
                        onMouseEnter={handleHover}
                        onMouseLeave={hoverEnd}
                    >
                        <p className={iconStyle}>
                            <HiOutlineLocationMarker />
                        </p>
                        <p>Directions</p>
                    </button>
                </div>
            </div>
        </>
    );
}
