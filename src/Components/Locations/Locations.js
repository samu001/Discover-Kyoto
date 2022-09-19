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
                            img="https://images.unsplash.com/photo-1461727885569-b2ddec0c4328?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGphcGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop"
                        />
                        <MapIcon
                            top="20%"
                            left="20%"
                            bottom="0%"
                            right="0%"
                            title="Location B"
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit assumenda ipsam."
                            mapIcon=""
                            img="https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=60"
                        />
                        <MapIcon
                            top="60%"
                            left="20%"
                            bottom="40%"
                            right="46%"
                            title="Location c"
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit assumenda ipsam."
                            mapIcon=""
                            img="https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8amFwYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                        />

                        <MapIcon
                            top="30%"
                            left="50%"
                            bottom="50%"
                            right="60%"
                            title="Location d"
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit assumenda ipsam."
                            mapIcon=""
                            img="https://images.unsplash.com/photo-1530634082454-f57b7d567b25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hyaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&"
                        />

                        <MapIcon
                            top="20%"
                            left="60%"
                            bottom="0%"
                            right="40%"
                            title="Location E"
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit assumenda ipsam."
                            mapIcon=""
                            img="https://images.unsplash.com/flagged/photo-1577739105295-bd9312fe75b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hyaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop"
                        />
                        <MapIcon
                            top="70%"
                            left="55%"
                            bottom="20%"
                            right="0%"
                            title="Location F"
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit assumenda ipsam."
                            mapIcon=""
                            img="https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=60"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
