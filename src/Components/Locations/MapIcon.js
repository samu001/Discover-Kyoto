import React, { useState, useEffect } from "react";
import "./MapIcon.css";
import HoverBox from "./HoverBox";

// This implementation with a single map item Element does not work

export default function MapIcon(props) {
    let styles = {
        top: `${props.top}`,
        bottom: `${props.bottom}`,
        left: `${props.left}`,
        right: `${props.right}`,
    };

    // State for the display class.
    const [display, setDisplay] = useState("hover-not-display");
    const [isHover, setIsHover] = useState(false);

    function handleHover(e) {
        setIsHover((prevState) => {
            console.log(
                `is hovering ${!prevState} the place ${e.target.title}`
            );
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

    // const showHoverBox = (e) => {
    //     setDisplay("hover-display");
    // };

    // const hideHoverBox = (e) => {
    //     setDisplay("hover-not-display");
    // };

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
                    img={props.img}
                />
                <div className="icon">🏠</div>
            </div>
        </>
    );
}
