import React, { useState } from "react";
import CardData from "../../Data/CardData";
import EventCard from "../EventCard/EventCard";
import "./CurrentEvents.css";

export default function CurrentEvents() {
    const [cardData, setCardData] = useState(CardData);

    // This will map all the data from the CardsData object array and display them as a EventCard Element
    const cardElements = cardData.map((card) => {
        return (
            <EventCard
                title={card.title}
                location={card.location}
                description={card.description}
                img={card.img}
                locUrl={card.locUrl}
                key={card.title}
            />
        );
    });

    return (
        <div className="events-section" id="events">
            <div className="card-container">{cardElements}</div>
        </div>
    );
}
