import React, { useState, useEffect } from "react";
import "./History.css";

function History() {
    const data = ["Medival", "Edo", "Modern"];

    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState();

    function selectItem() {}

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

    const arrLi = data.map((item, i) => {
        return (
            <li
                key={i}
                className={`${index === i ? "active" : ""}`}
                onClick={() => selectItem(i)}
            >
                {item}
            </li>
        );
    });

    return (
        <>
            <div>
                <button onClick={moveUp}>Move Up</button>
                <ul>{arrLi}</ul>
                <button onClick={moveDown}>Move Down</button>
            </div>
        </>
    );
}

export default History;
