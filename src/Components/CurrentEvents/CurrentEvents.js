import React, { useState } from "react";
import CardData from "../../Data/CardData";
import EventCard from "../EventCard/EventCard";
import "./CurrentEvents.css";

export default function CurrentEvents() {
    const [cardData, setCardData] = useState(CardData);

    // This will map all the data from the CardsData object array and display them
    // as a EventCard Element
    const cardElements = cardData.map((card) => {
        return (
            <EventCard
                title={card.title}
                location={card.location}
                description={card.description}
                img={card.img}
            />
        );
    });

    // const [indexes, setIndexes] = useState([0,3])

    // function nextIndexes(){
    //     const endOfSplit = indexes[1]
    //     if(endOfSplit <= (cardElements.length -1)) {
    //         setIndexes(prevIndexes => {
    //             const newIndexes = prevIndexes.map( item => {
    //                 return item + 3
    //             })
    //             return newIndexes
    //         })
    //     }
    // }

    // function prevIndexes(){
    //     const startOfSplit = indexes[0]
    //     if (startOfSplit > 0) {
    //         setIndexes(prevIndexes => {
    //             const newIndexes = prevIndexes.map( item => {
    //                 return item - 3
    //             })
    //             return newIndexes
    //         })
    //     }
    // }

    return (
        <div className="events-section" id="events">
            {/* <div className="events-btns">
                <button onClick={prevIndexes}>Prev items</button>
                <button onClick={nextIndexes}>Next items</button>
            </div> */}
            <div className="card-container">{cardElements}</div>
        </div>
    );
}
