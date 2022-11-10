import React, { useState } from "react";
import MapIcon from "./MapIcon";
import "./Locations.css";
import mapData from "../../Data/LocationsData";

export default function Locations() {
    const [mapItems, setMapItems] = useState(mapData);

    const mapElements = mapItems.map((item) => {
        return (
            <MapIcon
                top={item.top}
                left={item.left}
                title={item.title}
                description={item.description}
                iconImg={item.iconImg}
                placeImg={item.placeImg}
                key={item.title}
            />
        );
    });

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
                        {mapElements}
                    </div>
                </div>
            </div>
        </>
    );
}
