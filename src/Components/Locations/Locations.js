import React from "react";
import MapIcon from "./MapIcon";
import "./Locations.css";

export default function Locations() {
    return (
        <>
            <div className="locations-section" id="locations">
                <div className="map">
                    <div className="map-img-wrapper">
                        <img
                            className="map-img"
                            src={require("../../Images/map.png")}
                            alt="Map of Kyoto"
                        />
                        <MapIcon
                            top="50%"
                            left="60%"
                            bottom="70%"
                            right="0%"
                            title="Kinkaku"
                            description="Great Place to be"
                            img="https://images.unsplash.com/photo-1517164912040-bfe9a44ac04e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8amFwYW4lMjB0ZW1wbGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                        />
                        <MapIcon
                            top="20%"
                            left="20%"
                            bottom="0%"
                            right="0%"
                            title="Wakamole Temple"
                            description="Great Place to be"
                            img="https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=60"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
