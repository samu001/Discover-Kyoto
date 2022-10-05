import React, { useState, useEffect } from "react";
import "./History.css";
import imgA from "../../Images/history_a.jpg";
import imgB from "../../Images/historyb.jpg";

function History() {
    // Put all of this info in a separate doc
    const titleData = [
        "Medival Age",
        "Edo Period",
        "Early Modern Period",
        "Modern Period",
        "Contemporary Age",
    ];

    const descData = [
        "Ample archeological evidence suggests human settlement in the area of Kyoto began as early as the Paleolithic period, although not much published material is retained about human activity in the region before the 6th century, around which time the Shimogamo Shrine is believed to have been established",
        "In the Sengoku period, the city suffered extensive destruction in the Ōnin War of 1467 tp 1477, and did not really recover until the mid-16th century. During the war, battles between samurai factions spilled into the streets, and came to involve court nobility (kuge) and religious factions as well. Nobles' mansions were transformed into fortresses",
        "Throughout the Edo period, the economy of the city flourished as one of three major cities in Japan, the others being Osaka and Edo. At the end of the period, the Hamaguri rebellion of 1864 burned down 28,000 houses in the city, which showed the rebels' dissatisfaction towards the Tokugawa Shogunate",
        "At the start of the Meiji period, the emperor's move from Kyoto to Tokyo in 1869 weakened the economy of Kyoto. The modern city of Kyoto was formed on April 1, 1889. The construction of Lake Biwa Canal in 1890 was one measure taken to revive the city. The population of the city exceeded one million in 1932",
        "Kyoto became a city designated by government ordinance on September 1, 1956. In 1997, Kyoto hosted the conference that resulted in the protocol on greenhouse gas emissions (United Nations Framework Convention on Climate Change.",
    ];
    const imgData = [
        imgA,
        imgB,
        "https://images.unsplash.com/photo-1593405844957-3854dae97a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1528044229747-82406f99e7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1993&q=80",
    ];

    const [index, setIndex] = useState(2);

    // When the state index change the whole component will be re render. Applying the custom classes
    function selectItem(i) {
        setIndex(i);
    }

    function moveUp() {
        if (index > 0) {
            setIndex((prevIndex) => {
                return prevIndex - 1;
            });
        }
    }

    function moveDown() {
        if (index < titleData.length - 1) {
            setIndex((prevIndex) => {
                return prevIndex + 1;
            });
        }
    }

    const arrLi = titleData.map((item, i) => {
        return (
            <li
                key={i}
                className={`${index === i ? "li-active" : "li-inactive"}`}
                onClick={() => selectItem(i)}
            >
                {item}
            </li>
        );
    });

    const description = descData.map((descItem, i) => {
        return (
            <p
                key={i}
                className={`${index === i ? "desc-active" : "desc-inactive"}`}
            >
                {descItem}
            </p>
        );
    });

    const historyImg = imgData.map((image, i) => {
        let url = "";
        let className = "";
        if (index === i) {
            url = `${image}`;
            className = "img-active";
        } else {
            className = "img-inactive";
        }

        return (
            <img
                className={`${className}`}
                src={url}
                alt="Japan Image"
                key={i}
            />
        );
    });

    return (
        <>
            <div className="history-section" id="history">
                <div className="slider-hist">
                    <div className="selector">
                        <button className="silder-btn" onClick={moveUp}>
                            {"<"}
                        </button>
                        <ul className="time-period-ul">{arrLi}</ul>
                        <button className="silder-btn" onClick={moveDown}>
                            {">"}
                        </button>
                    </div>
                    <div className="description-hist">{description}</div>
                    <div className="hist-overlay"></div>
                    {historyImg}
                </div>
            </div>
        </>
    );
}

export default History;
