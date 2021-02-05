import { Divider } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { AppstateType } from '../redux/store'
import reactLogo from '../react.svg'
import ts from '../typescript.svg'
import redux from '../redux.svg'
type propsT = { showAbout: boolean }

const AboutMe = (props: propsT) => {
    const language = useSelector((state: AppstateType) => state.app.lang)
    const title = language === 'Ru' ? 'Обо мне' : 'About me'
    const articleEng = 'I am 28 years old, before this age I have changed several professional branches. Having an IT education, I decided to take up this activity again. It is very easy to find contact with interlocutors, I settle conflict situations at the root, I do not see anything shameful in asking for help over something that is beyond your power at the moment. I want to break into a team from which I can adopt the best practices to become a sought-after specialist. When I see the fruits of my labor, worthy motivation, I cannot be stopped'
    const articleRu = 'Мне 28 лет, до этого возраста сменил несколько профессиональных отраслей. Имея IT образование,решил вновь заняться этой деятельностью. Очень легко нахожу контакт с собеседниками, улаживаю конфликтные ситуации на корню, не вижу ничего постыдного в просьбе о помощи над тем, что тебе не под силу на данный момент. Хочу ворваться в команду от которой смогу перенять лучшие практики чтоб стать востребованным специалистом. Когда я вижу плоды своего труда + достойная мотивация, меня не остановить'
    const article = language === 'Ru' ? articleRu : articleEng
    return (
        <div className='about' style={{ transform: `rotateY(${props.showAbout ? -180 : 0}deg)` }}>
            <h3>{title}</h3>
            <p>{article}</p>
            <div className="about__footer">
                <div className="about__footer_icons">
                    <img src={reactLogo} alt="" className='icons__item' />
                    <img src={ts} alt="" className='icons__item' />
                    <img src={redux} alt="" className='icons__item' />
                </div>
                <span>2020</span>
            </div>
        </div>
    )
}
export default AboutMe