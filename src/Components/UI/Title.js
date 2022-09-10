import React from "react";
import "./Title.css";

function Title(props) {
    const titleUIStyle = {
        background: `${props.theme === "dark" ? "black" : "white"}`,
    };

    const lineStyle = {
        background: `${props.theme === "dark" ? "#dfdfdf" : "black"}`,
    };

    const descStyle = {
        color: `${props.theme === "dark" ? "#dfdfdf" : "black"}`,
    };

    return (
        <>
            <div className="title-ui" style={titleUIStyle}>
                <div className="title-grid">
                    <div className="cross-line" style={lineStyle}></div>
                    <h1>{props.title}</h1>
                    <div className="cross-line" style={lineStyle}></div>
                </div>
                <div className="title-desc" style={descStyle}>
                    {props.description}
                </div>
            </div>
        </>
    );
}

export default Title;
