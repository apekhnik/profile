import React from 'react'
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import LanguageIcon from '@material-ui/icons/Language';
import PlaceIcon from '@material-ui/icons/Place';
import { useSelector } from 'react-redux';
import { AppstateType } from '../../redux/store';

export const blockTitle = (title: string, color?: string) => (
    <h2 className='blockTitle__h2' style={{ color: color }}>{title}</h2>
)
export const contactOptions = (Icon: any, title: string) => {
    return (
        <div className='contacts__option' >
            <Icon />
            <span>{title}</span>
        </div>
    )
}
const Contacts: React.FC = () => {
    const language = useSelector((state: AppstateType) => state.app.lang)
    return (
        <div className='contacts'>
            {blockTitle(language === 'Ru' ? 'Контакты' : 'CONTACT')}
            <div className='contacts__items'>
                {contactOptions(MailRoundedIcon, 'email')}
                {contactOptions(PhoneCallbackIcon, '+3 8066 597 2309')}
                {contactOptions(LanguageIcon, 'Kalinina 31/1')}
                {contactOptions(PlaceIcon, 'github.com')}
            </div>


        </div>
    )
}
export default Contacts