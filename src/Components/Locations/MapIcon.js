import React, { useState, useEffect } from "react";
import "./MapIcon.css";
import HoverBox from "./HoverBox";

export default function MapIcon(props) {
    let styles = {
        top: `${props.top}`,
        bottom: `${props.bottom}`,
        left: `${props.left}`,
        right: `${props.right}`,
    };

    const image = <img src={require("../../Images/" + `${props.iconImg}`)} />;

    // State for the display class.
    const [display, setDisplay] = useState("hover-not-display");
    const [isHover, setIsHover] = useState(false);

    function handleHover(e) {
        setIsHover((prevState) => {
            return !prevState;
        });
    }

    useEffect(() => {
        if (isHover) {
            setDisplay("hover-display");
        } else {
            setDisplay("hover-not-display");
        }
    }, [isHover]);

    return (
        <>
            <div
                className="map-icon"
                style={styles}
                title={props.title}
                onMouseEnter={(e) => handleHover(e)}
                onMouseLeave={(e) => handleHover(e)}
            >
                <HoverBox
                    display={display}
                    style={styles}
                    title={props.title}
                    img={props.placeImg}
                    description={props.description}
                />
                {image}
                <p className="location-title">{props.title}</p>
            </div>
        </>
    );
}
