import React from "react";
import "../App.css";
import Countdown from 'react-countdown';


function Set(props) {

    return (
        <div>
            <Countdown
                date={props.date}
                daysInHours="true"
                className="timerText "
                children={<div className="description ">Если ты это читаешь, то кое кто еблан и забыл сделать что бы Хуйня появилась сама. Напиши диме что он даун и обновляй страницу.</div>}
            // renderer={renderer}
            />
        </div>
    )
}
//<img className="setPreview " alt="SetPreview" src={`/HG2020/files/${[`ASS5x2.jpg`,`ASS6x2.jpg`,`ASS7x2.jpg`][Math.floor(Math.random()*3)]}`}></img>
//<img className="setPreview " alt="SetPreview" src={setInfo.img}></img>
export default Set;