import React from "react";
import MapItem from "./MapItem";
import "./Locations.css";

export default function Locations() {
    return (
        <>
            <div className="locations-section">
                <div className="map">
                    <div className="map-img-wrapper">
                        <img
                            className="map-img"
                            src={require("../../Images/map.png")}
                        />
                        <MapItem top="50%" left="0%" bottom="0%" right="40%" />
                        <MapItem top="10%" left="20%" bottom="0%" right="0%" />
                    </div>
                </div>
            </div>
        </>
    );
}
