import React, { useState } from "react";
import "../App.css";
import downloadjs from "downloadjs";



function Overlay(props) {
    let buttons = []
    for (let i = 0; i < props.links.length; i++) {
        const link = props.links[i];
        buttons.push(
            <div className="setOverlayButton text  " onClick={(() => { downloadjs(link.url) })}>{link.name}</div>
        )
    }

    return (
        <div className="setOverlay ">
            <div className=" ">
                {buttons}
            </div>
        </div>
    )
}

export default Overlay;