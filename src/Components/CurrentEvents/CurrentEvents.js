import React, { useState } from "react";
import CardData from "../../Data/CardData";
import EventCard from "../EventCard/EventCard";
import "./CurrentEvents.css";
import Select from "react-select";

export default function CurrentEvents() {
    const [cardData, setCardData] = useState(CardData);

    const currentMonth = parseInt(`${new Date().getMonth() + 1}`);
    const [month, setMonth] = useState(currentMonth);

    console.log(month);

    const handleMonthChange = (selected) => {
        setMonth(selected.value);
    };

    const options = [
        { value: 1, label: "January" },
        { value: 2, label: "February" },
        { value: 3, label: "March" },
        { value: 4, label: "April" },
        { value: 5, label: "May" },
        { value: 6, label: "June" },
        { value: 7, label: "July" },
        { value: 8, label: "August" },
        { value: 9, label: "September" },
        { value: 10, label: "October" },
        { value: 11, label: "November" },
        { value: 12, label: "December" },
    ];
    // This will map all the data from the CardsData object array and display them as a EventCard Element

    const filterBox = (
        <div className="event-selector-box">
            <Select
                options={options}
                onChange={handleMonthChange}
                defaultValue={month}
                placeholder={options[month - 1].label}
            />
        </div>
    );

    const cardElements = cardData.map((card) => {
        if (card.month === month) {
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
        }
    });

    return (
        <div className="events-section" id="events">
            <div className="card-container">{cardElements}</div>
            <div>{filterBox}</div>
        </div>
    );
}
