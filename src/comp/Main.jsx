import React from "react";
import "../App.css";
import Table from './Table'
import OffSets from '../assets/OffSets.json'
import SampleSets from '../assets/SampleSets.json'
import CustomSets from '../assets/CustomSets.json'

function Main(props)  {
    return (
        <div className="mainContainer ">
            <h1>Основные</h1>
            <Table setList={OffSets}/>
            <h1>Кастомные</h1>
            <Table setList={CustomSets}/>
            <h1>Темплейты для Кастомных</h1>
            <Table setList={SampleSets}/>
        </div>
    )
}

export default Main;