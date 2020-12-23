import React from "react";
import "../App.css";
import Table from './Table'
import OffSets from '../assets/OffSets.json'
import SampleSets from '../assets/SampleSets.json'
import CustomSets from '../assets/CustomSets.json'
import Timer from './Timer'

function Main(props) {
    let releaseDate = new Date("30-dec-2020-12:00:00")
    return (
        <div className="mainContainer ">
            <h1>Основная Хуйня</h1>
            {
                releaseDate < Date.now() ?
                    <Table setList={OffSets} /> :
                    <Timer date={releaseDate} />
            }
            <h1>Ваша Кастомная Хуйня</h1>
            <Table setList={CustomSets} />
            <h1>Заготовочки для Вашей Хуйни</h1>
            <Table setList={SampleSets} />
        </div>
    )
}

export default Main;