import React from 'react'
import './index.css'
import logo from '../../logo.svg';

import { useSelector } from 'react-redux';
import { AppstateType } from '../../redux/store';

type ExpItemType = {
    title: string
    description: string
    date: string
    text: JSX.Element,
    git: string
}
const snapchatRu = (
    <p>Приложение на ReactJs для создания мгновенных селфи используя  <span>веб-камеру</span>,
    с возможонстью добавлять снимок в базу данных,
    с последующим просмотром. <span>Аутенфикация</span> реализовани на <span>firebase</span>,
    firestore использовал в качестве базы данных, Firebase Hosting  - для хостинга.
    Глобальное состояние контролировал с  <span>Redux</span>,
   Все компоненты  - функциональные, и написаны на <span>Hooks</span>.
    Для UI части Я выбрал <span>MaterialUi</span></p>
)
const snapchatEng = (
    <p>ReactJs application for taking a snapshot using a <span>webcam</span>,
    with the ability to add a snapshot to the database,
    and then view it. <span>Authentication</span> using firebase was implemented,
    firestore was used for the database, Firebase Hosting for hosting.
    Global state controlled with <span>Redux</span>,
    all components are made functional components using <span>Hooks</span>.
    For the UI part I chose <span>MaterialUi</span></p>
)
const linkedinRu = (
    <p>Приложение клон LinkedIn, с возможностью авторизации.
    Каждый пользователь может оставить сообщение, отредактировать его или удалить.
    Создавая данное приложение,
    я много взаимодействовал с базой данных <span>firebase</span>, и получил хороший опыт.
   Управление бизнес логикой осуществляется с помощью<span>Redux</span> используя <span>Redux-toolkit</span>.
        <span>React-Flip-Move</span> выбрал для создания анимации. Иконки брал из  <span>MaterialUi</span>.
     Все компоненты  - функциональные, и написаны на <span>Hooks</span>.
        <span>Firebase Hosting</span> использовал для финального деплоя.</p>
)
const linkedinEng = (
    <p>The application is a clone of LinkedIn, with the possibility of authorization.
    Each user can leave their post, edit it or delete it.
    While creating this application,
    I interacted a lot with the database and got a good experience.
    Business logical layer controlled with <span>Redux</span> using <span>Redux-toolkit</span>.
    Use <span>React-Flip-Move</span> for animation. I took icons from  <span>MaterialUi</span>.
    All components are functional and written in hooks.
        <span>Firebase Hosting</span> was used for hosting.</p>
)
const nasareactEng = (
    <p>One of the more exhilarating Spa was created by me based on https://api.nasa.gov.
    All styles and components are hand-crafted.
    Hubble explores the universe 24 hours a day, 7 days a week.
    That means it has observed some fascinating cosmic wonder every day of the year,
    including on your birthday. In my application,
        you can easily view a photo for any day from the start of filming.</p>
)
const nasareactRu = (
    <p>Приложение было создано мной на основе https://api.nasa.gov.
    Все стили и компоненты написаны вручную без использования вспомогательных фреймворком.
    Телескоп Хаббл исследует вселенную 24 часа в день 7 дней в неделю.
    Hubble explores the universe 24 hours a day, 7 days a week.
    Это значит что он наблюдал  какое-то завораживающее космическое чудо каждый день, включая ваши дни рождения.
    В моем приложении вы можете легко просмотреть фото за любой день, со старта сьемки</p>
)
const coctailapiEng = (
    <p>The application in which you will find a cocktail recipe to your taste.
         Written using <span>Hooks</span> and <span>coctail-api</span>.
        The search is carried out both by the name of the cocktail and by the ingredients.</p>
)
const coctailapiRu = (
    <p>Приложение в котором вы найдете рецепт своего любимого коктейля.
        Написано с использованием <span>Hooks</span> и <span>coctail-api</span>.
        Возможно проводить поиск как по названию коктейля, так и по названию ингредиентов.</p>
)
const propsforCoctail = {
    title: 'Coctail SPA',
    description: 'https://apekhnik.github.io/alcohol-react/',
    date: '01.03.2020',
    textRu: coctailapiRu,
    textEng: coctailapiEng,
    git: 'https://github.com/apekhnik/alcohol-react'
}
const propsForNasa = {
    title: 'Nasa-React',
    description: 'https://apekhnik.github.io/nasa-react-api/',
    date: '01.01.2020',
    textRu: nasareactRu,
    textEng: nasareactEng,
    git: 'https://github.com/apekhnik/nasa-react-api'
}
const propsForSnap = {
    title: 'Snapchat-clone',
    description: 'https://snapchat-eee21.web.app/',
    date: '01.07.2020',
    textRu: snapchatRu,
    textEng: snapchatEng,
    git: 'https://github.com/apekhnik/snapchat'

}
const propsForLinked = {
    title: 'LinkedIn-clone',
    description: 'https://linkedin-clone-8fcf0.web.app',
    date: '11.07.2020',
    textRu: linkedinRu,
    textEng: linkedinEng,
    git: 'https://github.com/apekhnik/linkedIn'

}
const ExpItem: React.FC<ExpItemType> = (props) => {
    const { title, description, date, text, git } = props
    return <div className='experience'>
        <div className="experience__title">
            <h3>{title}</h3>
        </div>
        <div className='experience__description'>
            <p><a href={description}
                rel="noopener noreferrer"
                target="_blank">
                {description}
            </a></p>
            <span>{date}</span>
        </div>
        <div className="experience__about">
            <div>{text}</div>
        </div>
        <a href={git}
            className='experience__details'
            rel="noopener noreferrer">More details</a>
    </div>
}

const RightSide: React.FC = () => {
    const language = useSelector((state: AppstateType) => state.app.lang)
    return (
        <div className='fullCv__right'>
            <div className="fullCv__right_header">
                <img src={logo} alt="" className='header__logo' />
                <h2>ALEX PEKHNIK</h2>
                <p>FRONTRED DELEVOPER</p>

            </div>
            <div className="fullCv__right_experience">
                <h2>{language === 'Ru' ? 'Опыт' : 'EXPERIENCE'}</h2>

                <ExpItem title={propsForSnap.title}
                    description={propsForSnap.description}
                    date={propsForSnap.date}
                    text={language === 'Ru' ? propsForSnap.textRu : propsForSnap.textEng}
                    git={propsForSnap.git} />
                <ExpItem {...propsForNasa}
                    title={propsForNasa.title}
                    description={propsForNasa.description}
                    date={propsForNasa.date}
                    text={language === 'Ru' ? propsForNasa.textRu : propsForNasa.textEng}
                    git={propsForNasa.git} />
                <ExpItem title={propsForLinked.title}
                    description={propsForLinked.description}
                    date={propsForLinked.date}
                    text={language === 'Ru' ? propsForLinked.textRu : propsForLinked.textEng}
                    git={propsForLinked.git} />
                <ExpItem title={propsforCoctail.title}
                    description={propsforCoctail.description}
                    date={propsforCoctail.date}
                    text={language === 'Ru' ? propsforCoctail.textRu : propsforCoctail.textEng}
                    git={propsforCoctail.git} />
            </div>
        </div>
    )
}
export default RightSide