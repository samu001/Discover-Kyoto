import React from "react";
import "./MapItem.css";

export default function MapItem(props) {
    let styles = {
        top: `${props.top}`,
        bottom: `${props.bottom}`,
        left: `${props.left}`,
        right: `${props.right}`,
    };

    return (
        <>
            <div className="map-item" style={styles}>
                <h2>&#9824;</h2>
            </div>
        </>
    );
}
