import React from "react";
import "./HoverBox.css";

function HoverBox(props) {
    return (
        <>
            <div className={props.display}>
                <div className="hover-left">
                    <h4>{props.title}</h4>
                    <div className="hover-description">
                        <p> {props.description}</p>
                    </div>
                    <div className="hover-btn-container">
                        <button className="hover-btn-more">Learn More</button>
                        <button className="hover-btn-dir">Directions</button>
                    </div>
                </div>
                <div className="hover-right">
                    <div className="hover-img-cont">
                        <img
                            src={props.img}
                            alt="Tourist Location in Kyoto Japan"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HoverBox;
