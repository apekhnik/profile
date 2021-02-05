import React from 'react'
import { useSelector } from 'react-redux'
import { AppstateType } from '../../redux/store'
import { blockTitle, } from './Contact'
type SkillsListType = {
    skills: string[]
}
const listOfSkill = ['React', 'TYPESCRIPT', 'React Native', 'NextJS', 'Thunk/Saga', 'React-Spring', 'MaterialUi', 'SASS',]
const SkillsList = (props: SkillsListType) => {
    return <div className='skills__list'>
        <ul>
            {props.skills.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
}
const Skills: React.FC = () => {
    const language = useSelector((state: AppstateType) => state.app.lang)
    return (
        <div className='skills'>
            {blockTitle(language === 'Ru' ? 'Навыки' : 'SKILLS')}
            <SkillsList skills={listOfSkill} />
        </div>
    )
}
export default Skills