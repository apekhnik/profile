import React from 'react'
import { useSelector } from 'react-redux'
import { AppstateType } from '../../redux/store'
import { blockTitle, } from './Contact'
import './index.css'

const Education: React.FC = () => {
    const language = useSelector((state: AppstateType) => state.app.lang)
    const education = language === 'Ru' ? 'Образование' : 'EDUCATION'
    const educationList = {
        master: {
            title: language === 'Ru' ? 'Магистр' : 'Master Of Science',
            univer: language === 'Ru' ? 'ДНУ им. Олеся Гончара' : 'DNU  Olesya Gonchara',
            place: {
                town: 'Dnipro',
                year: '2013-2014'
            }
        },
        bachelor: {
            title: language === 'Ru' ? 'Бакалавр' : 'Bachelor of arts',
            univer: language === 'Ru' ? 'ДНУ им. Олеся Гончара' : 'DNU  Olesya Gonchara',
            place: {
                town: 'Dnipro',
                year: '2009-2013'
            }
        }
    }
    return (
        <div className='education'>
            {blockTitle(education)}
            <div className="edication__item">
                <h3>{educationList.master.title}</h3>
                <p>{educationList.master.univer}</p>
                <p>{educationList.master.place.town}/ <span>{educationList.master.place.year}</span></p>
            </div>
            <div className="edication__item">
                <h3>{educationList.bachelor.title}</h3>
                <p>{educationList.bachelor.univer}</p>
                <p>{educationList.bachelor.place.town}/ <span>{educationList.bachelor.place.year}</span></p>
            </div>
        </div>
    )
}
export default Education