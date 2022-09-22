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
                            title="Location A"
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit assumenda ipsam."
                            mapIcon="https://cdn-icons-png.flaticon.com/512/1690/1690171.png"
                            iconImg="https://cdn-icons-png.flaticon.com/512/1690/1690171.png"
                            placeImg="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        />
                        <MapIcon
                            top="20%"
                            left="20%"
                            bottom="0%"
                            right="0%"
                            title="Location B"
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit assumenda ipsam."
                            mapIcon=""
                            iconImg="https://cdn-icons-png.flaticon.com/512/1690/1690147.png"
                            placeImg="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        />
                        <MapIcon
                            top="60%"
                            left="20%"
                            bottom="40%"
                            right="46%"
                            title="Location c"
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit assumenda ipsam."
                            mapIcon=""
                            iconImg="https://cdn-icons-png.flaticon.com/512/1690/1690176.png"
                            placeImg="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        />

                        <MapIcon
                            top="30%"
                            left="50%"
                            bottom="50%"
                            right="60%"
                            title="Location d"
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit assumenda ipsam."
                            mapIcon=""
                            iconImg="https://cdn-icons-png.flaticon.com/512/1690/1690165.png"
                            placeImg="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
