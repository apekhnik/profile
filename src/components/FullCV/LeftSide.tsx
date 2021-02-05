import React from 'react'
import { Avatar } from '@material-ui/core';
import Contacts from './Contact';
import Education from './Education'
import Skills from './Skills';
const avatarsrc = 'https://avatars.githubusercontent.com/u/22451934?s=460&u=c3a662255d6f626d225c02bb39dbe2955457d1db&v=4'
const LeftSide: React.FC = () => {
    return (
        <div className='fullCv__left'>
            <div className="avatar__container">
                <Avatar src={avatarsrc} className='avatar' />
            </div>
            <Contacts />
            <Education />
            <Skills />
        </div>
    )
}
export default LeftSide