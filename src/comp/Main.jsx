import React from "react";
import "../App.css";
import Table from './Table'
import OffSets from '../assets/OffSets.json'
import SampleSets from '../assets/SampleSets.json'
import CustomSets from '../assets/CustomSets.json'
import Jops from '../assets/Jops.json'
import Timer from './Timer'

function Main(props) {
    let releaseDate = new Date("30-dec-2020-10:00:00")
    return releaseDate < Date.now() ?
        // release
        <div className="mainContainer ">
            <div className="mainHeader ">Хуйня Года 2020</div>
            <h1>Основная Хуйня</h1>
            <Table setList={OffSets} />
            <h1>Ваша Кастомная Хуйня</h1>
            <Table setList={CustomSets} />
            <h1>Заготовочки для Хуйни</h1>
            <Table setList={SampleSets} />
        </div> :
        // creation
        <div className="mainContainer ">
            <div className="mainHeader ">Хуйня Года 2020</div>
            <div className="mainHeader  RoadRage yellow">А ну выйди блять спойлеры</div>
            <div className="commentary ">Госпади, куда я попал?</div>
            {/* <div className="description ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div> */}
            <div className="description ">
                Ты попал в 4-ую ежегодную Хуйню Года™, а если быть точным то в ее стадию планирования.
                Тут <s>можно</s> нужно придумать набор из своих категорий. После завершения таймера мы перейдем в стадию заполнения,
                но до этого мы еще дойдем.
                </div>
            <div className="commentary ">А как делать?</div>
            <div className="description ">
                Правил как обычно нет, наборы могут быть как на какую-либо тему, так и просто просто кучей рандомной Хуйни.
                Ниже можно найти заготовки в формате PSD и использованные шрифты.
                </div>
            <div className="description ">
                Для редактирования я рекомендую использовать програмное обеспечении компании Adobe
                известное под названием Фотомагазин™ версии СС 2019 и выше (но это просто рекомендация).
                Если вы не являетесь счастливым обладателем данного ПО (либо желания), но у вас есть идеи то напишите мне и проблема решится сама собой.
                Если нужны
                </div>

            <h1>Основная Хуйня</h1>
            <div className="commentary ">Тут что то появится и ты узнаешь об этом не первый</div>
            <Timer date={releaseDate} />

            <h1>Ваша Кастомная Хуйня</h1>
            <div className="commentary ">Здесь <s>могла</s> <s>должна быть</s> будет ваша хуйня</div>
            <Table setList={Jops} />

            <h1>Заготовочки для Хуйни</h1>
            <Table setList={SampleSets} />
            <h1>Штифты</h1>
            <a className="fontButton RoadRage" href="https://www.fonts-online.ru/font/ljk_RoadRage" target="_blank" rel="noreferrer">ljk_RoadRage</a><br/>
            <a className="fontButton Impact" href="https://www.wfonts.com/font/impact" target="_blank" rel="noreferrer">Impact</a>
        </div>

}

export default Main;