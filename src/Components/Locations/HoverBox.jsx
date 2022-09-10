import React from "react";
import "./HoverBox.css";

function HoverBox(props) {
    return (
        <>
            <div className={props.display}>
                <div className="hover-left">{props.title}</div>
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
