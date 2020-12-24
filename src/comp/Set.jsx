import React from "react";
import "../App.css";
import Overlay from "./Overlay"




function Set(props) {
    let setInfo = props.setInfo
    return (
        <div>
            <div className="imageContainer ">
                <img className="setPreview " alt="SetPreview" src={setInfo.img}></img>
                <Overlay links={setInfo.links} label={setInfo.label} />
            </div>
            <div className="setLabel ">
                {setInfo.label}
            </div>
        </div>
    )
}
//<img className="setPreview " alt="SetPreview" src={`/HG2020/files/${[`ASS5x2.jpg`,`ASS6x2.jpg`,`ASS7x2.jpg`][Math.floor(Math.random()*3)]}`}></img>
//<img className="setPreview " alt="SetPreview" src={setInfo.img}></img>
export default Set;