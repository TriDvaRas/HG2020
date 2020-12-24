import React from "react";
import "../App.css";
import CornerUL from "../assets/Corner_UL.png"
import EGG1 from "../assets/EGG1.png"
import EGG from "../assets/EGG.png"


function Overlay() {
    
    return (
        <div className="decorations ">
            <img className="UL " src={CornerUL} alt="Блять"></img>
            <img className="EGG1 " src={EGG1} alt="Блять"></img>
            <img className="EGG " src={EGG} alt="Блять"></img>
        </div>
    )
}

export default Overlay;