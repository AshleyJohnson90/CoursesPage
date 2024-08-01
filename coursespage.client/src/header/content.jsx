import React from "react";
import "./content.css";
import SNHUtransparent from '/SNHUtransparent.png';

export const Content = () => {
    return (
        <div>
            <div className="container">
                <img src={SNHUtransparent} alt="SNHU Logo"></img>
            </div>
        </div>
    );
};