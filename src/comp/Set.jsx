import React from "react";
import "../App.css";
import Overlay from "./Overlay"




function Set(props) {
    let setInfo = props.setInfo
    return (
        <div className="imageContainer ">
            <img className="setPreview " src={setInfo.img}></img>
            <Overlay  links={setInfo.links} />
        </div>
    )
}

export default Set;