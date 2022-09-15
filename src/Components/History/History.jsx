import React, { useState, useEffect } from "react";
import "./History.css";

function History() {
    const titleData = [
        "Medival Age",
        "Edo Period",
        "Early Modern Period",
        "Modern Period",
        "Contemporary Age",
    ];
    const descData = [
        "The Medival Period was a very period like no other cuse mevidval is in the name",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur soluta aperiam voluptate sunt possimus sit odit dolorum nemo consequuntur debitis a reiciendis harum dolorem placeat, est explicabo natus quisquam. Magni!",
        "The EARLY Modern Period is convinient to live in, but you dont have cool swords",
        "The Modern Period is convinient to live in, but you have even less swords",
        "The Contemporarry Period is convinient to live in, but you have no swords at all, instead u got guns...",
    ];
    const imgData = [
        "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80",
        "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80",
        "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80",
        "https://images.unsplash.com/photo-1468779065891-103dac4a7c48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGt5b3RvJTIwY2l0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60",
    ];

    const [index, setIndex] = useState(0);

    // When the state index change the whole component will be re render
    // Applying the custom classes
    function selectItem(i) {
        setIndex(i);
    }

    function moveUp() {
        setIndex((prevIndex) => {
            return prevIndex - 1;
        });
    }

    function moveDown() {
        setIndex((prevIndex) => {
            return prevIndex + 1;
        });
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
                    {historyImg}
                </div>
            </div>
        </>
    );
}

export default History;
