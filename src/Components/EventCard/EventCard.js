import React, { useState } from "react";
import "./EventCard.css";
import "../../Data/CardData";

export default function EventCard(props) {
    return (
        <>
            <div className="card">
                <div className="card-wrapper">
                    <div className="cardImg">
                        <img src={props.img} alt="" />
                    </div>
                    <h3>{props.title}</h3>
                    <h4>{props.location}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
            {/* When click on location open google maps for that location */}
        </>
    );
}
