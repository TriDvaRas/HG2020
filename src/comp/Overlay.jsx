import React from "react";
import "../App.css";
import { saveAs } from 'file-saver';
import DownloadIcon from "../download.svg"


function Overlay(props) {
    let buttons = []
    for (let i = 0; i < props.links.length; i++) {
        const link = props.links[i];
        buttons.push(
            <div className="setOverlayButton text  " onClick={(() => { saveAs(link.url,`ХГ2020_${props.label}.${link.url.slice(-3)}`,{ autoBom: true }) })}>{link.name}</div>
        )
    }

    return (
        <div className="setOverlay ">
            <div className="downloadContainer ">
                <img className="downloadIcon " alt="DownloadIcon" src={DownloadIcon}></img>
                {buttons}
            </div>
        </div>
    )
}

export default Overlay;