import React from "react";
import "../App.css";
import Table from './Table'
import OffSets from '../assets/OffSets.json'
import SampleSets from '../assets/SampleSets.json'
import CustomSets from '../assets/CustomSets.json'
import Jops from '../assets/Jops.json'
import Timer from './Timer'
import DISH from "../assets/dish.png"
function Main(props) {
    let releaseDate = new Date("30-dec-2020-12:00:00 GMT+0300")

    return releaseDate < Date.now() ?
        // release
        <div className="mainContainer ">
            <div className="mainHeader RoadRage yellow ">Хуйня Года 1984</div>
            {/* flex row */}
            <div className="mainHeader" style={{ fontSize: "170%" }}>Рецепт "Северный Разрыв"</div>

            <div className="description" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                <img src={DISH} alt="dish" style={{ width: "42%", height: "auto", borderRadius: "10px" }} />
                <div style={{ width: "60%" }}>
                    <div className="description" style={{ fontSize: "60%", margin: "0" }}>
                        Этот рецепт обнаружен 1 января в 06:42 между коробкой от бенгальских огней и чеком за мандарины. Его автор неизвестен, но почерк узнаваем: это не блюдо, это новогодний обряд, после которого в квартире становится чуть громче и чуть страннее.
                        <br />
                        Сначала найдите самую большую кастрюлю в доме — чтобы гости поняли: Новый год будет масштабным, даже если вас трое и кот. Вылейте туда 2 литра шампанского, которое "чуть-чуть выдохлось", и добавьте 300 мл компота "на потом" для баланса вселенной. Грейте на среднем огне до состояния "шипит как гирлянда, которая вот-вот замкнёт".
                        <br />
                        Теперь всыпьте 12 зёрен перца — по одному за каждый удар курантов, но сначала каждое зерно нужно торжественно назвать "символом обновления". Бросьте туда же щепотку блёсток с ёлочной мишуры (если нет — потрясите ёлку над кастрюлей, она сама решит). Перемешивайте деревянной ложкой, будто вы мешаете судьбу, а не то что там внутри.
                        <br />
                        Главный ингредиент: 1 мандарин, очищенный под звук салюта (или под звук соседа, который "ещё один" и "последний"). Дольки кидайте по одной, делая вид, что вы проводите ритуал богатства. Затем добавьте 5 кубиков льда — ровно столько, сколько раз вы пообещали "в этом году точно". Каждый кубик должен треснуть с драмой, иначе желание не пройдёт модерацию.
                        <br />
                        Пока всё булькает, достаньте банку с горошком (важно: именно ту, которую вы покупали "на оливье"). Откройте её, покажите кастрюле и тут же закройте обратно — пусть поймёт, что оливье рядом, но не сегодня. Для аромата подержите над паром лавровый лист и произнесите: "Ну, с Новым годом". Этого достаточно, чтобы вкус стал празднично-смысловым.
                        <br /><br />
                        Подавайте в самой красивой тарелке, которую вы бережёте "на гостей", и обязательно поставьте её на салфетку с ёлками, иначе магия не активируется. Украсьте блюдо тремя горошинами (символ прошлого, настоящего и будущего) и веточкой укропа, найденной где-то рядом с открытой банкой шпрот. Рядом положите бенгальский огонь, но не зажигайте — пусть лежит как угроза.
                        <br /><br />
                        Если кто-то действительно это попробует, скажите, что так и задумано: "Это новогодний бульон воспоминаний". Потом включите гирлянду в режим "мигает как тревога" — так вкус раскрывается и пугает сомнения. В крайнем случае объявите, что это был тест на совместимость с 2026 годом, и срочно предложите всем мандарины "на закусить".
                        <br />
                    </div>

                </div>
            </div>
            <h1>Много букав </h1>
            <div className="commentary ">Госпади, а куда я попал?</div>
            <div className="description ">
                Ты попал Хуйню Года™, а если быть точным то в 7-ую ежегодную стадию ежегодного Аутизма Rice Fields Хуйни Года™. <b className="c21">Где то я это уже видел...</b>
                Цифарки дотикали. Я вам разрешаю заполять Хуету Года. <b className="c21">О каких цифрах он говорит?</b>
                Ниже находятся все паки этого года.
                В основных самые базовые, их делал лично я своими голыми руками.
                Кастомные создавались чужими голыми руками (нашими<s>шиза</s>). <b className="c21">Кстати, а где категории и паки которые мы вчера добавляли?</b>
                Категории могут повторяться, <s>я художник</s> мы так видим. <b className="c21">У чела то реально шиза?</b>
            </div>
            <div className="commentary ">А как заполнять?</div>
            <div className="description ">
                Скачиваешь пак который хочешь заполнить в нужном формате (PSD), открываешь фотошоп 2019+ <b className="c21">Всмыслефотошоп? Дед мороз же отменил фотошоп...</b>(более старые тоже подойдут, но картинки прийдется ровнять руками) и заполняешь.
                Если фотошопа нет, то идешь <a className="hlink" target="_blank" rel="noopener noreferrer" href="https://www.photopea.com/">сюда</a> и делаешь.
                <s>Если сильно хочется можно и в пеинте.</s>нельзя <b className="c21">Можно блять... Нахуя ты это читаешь кстати?</b>
            </div>
            <div className="description ">
                Как закончил сохраняешь в PNG/JPEG и закидываешь <a className="hlink" target="_blank" rel="noopener noreferrer" href="https://photos.app.goo.gl/vzFsdJRRBoxEVpd37">сюда</a> (киньте мне куда то gmail почту что бы получить RW доступ).
                <s>Если скучно можешь еще мне еще PSDшник скинуть.</s>
            </div>
            <h1>Основная Хуйня</h1>
            <Table setList={OffSets} />
            <h1>Ваша Кастомная Хуйня</h1>
            <Table setList={(CustomSets)} />
            <h1>Шаблоны Хуйни</h1>
            <div className="description ">
                Если недели на то что бы сделать свои категории не хватило, то шаблончики все еще тут.
            </div>
            <Table setList={SampleSets} />
            <h1>Штифты</h1>
            <a className="fontButton RoadRage" href="https://www.fonts-online.ru/font/ljk_RoadRage" target="_blank" rel="noreferrer">RoadRage</a><br />
            <a className="fontButton Impact" href="https://www.wfonts.com/font/impact" target="_blank" rel="noreferrer">Impact</a>
            <br />
            <br />
            <br />
            <br />
            <div className="description ">
                <s>И на последок подержите автора сердечным приступом и пипиской      Ищите пасхалки</s>
            </div>
        </div> :
        // creation
        <div className="mainContainer ">
            <div className="mainHeader  RoadRage yellow">Хуйня Года 2021</div>
            <div className="foot ">
                сайт писал какой то даун и на очень больших экранах или при маленьком масштабе могут быть небольшие но в больших количествах баги
            </div>
            <h1>Много букав </h1>
            <div className="commentary ">Госпади, а куда я попал?</div>
            {/* <div className="description ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div> */}
            <div className="description ">
                Ты попал Хуйню Года™, а если быть точным то в 5-ую ежегодную стадию ежегодного Аутизма Rice Fields Хуйни Года™.
                Там цифарки какие то тикают (ваще хз что за цифарки). А пока они тикают, кто прочитал тот <s><s><s>сдохнет </s>может</s> должен</s> обязан придумать набор из своих категорий.
                Элементарно просто, не так ли?
            </div>
            <div className="commentary ">А как делать?</div>
            <div className="description ">
                Правил как обычно нет, наборы могут быть как на какую-либо тему, так и просто кучей рандомной Хуйни.
                Ниже можно найти заготовки в формате PSD и использованные шрифты.
                Если нужны заготовки другого размера пишите мне в лс и все будет.
                Результат вашей больной фантации присылаем туда же.
            </div>
            <div className="commentary ">А где делать?</div>
            <div className="description ">
                Для редактирования я рекомендую (но это просто рекомендация <s>или нет?</s>) использовать програмное обеспечение компании Adobe
                известное под названием Фотомагазин™ версии СС 2019 и выше.
                Если вы не являетесь счастливым обладателем данного ПО (либо желания), но у вас есть идеи то напишите мне и проблема решится.
            </div>

            <h1>Основная Хуйня</h1>
            <div className="commentary ">А где? (who)</div>
            <Timer date={releaseDate} />

            <h1>Ваша Кастомная Хуйня</h1>
            <div className="commentary ">Здесь <s><s>могла</s> должна быть</s> будет ваша хуйня</div>
            <Table setList={Jops} />

            <h1>Заготовочки для Хуйни</h1>
            <Table setList={SampleSets} />
            <h1>Штифты</h1>
            <a className="fontButton RoadRage" href="https://www.fonts-online.ru/font/ljk_RoadRage" target="_blank" rel="noreferrer">RoadRage</a><br />
            <a className="fontButton Impact" href="https://www.wfonts.com/font/impact" target="_blank" rel="noreferrer">Impact</a>
            <br />
            <br />
            <br />
            <br />
            <div className="description ">
                <s>И на последок подержите автора сердечным приступом и пипиской.</s>
            </div>
        </div>

}

export default Main;