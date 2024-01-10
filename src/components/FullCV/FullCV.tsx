import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppstateType } from '../../redux/store'
import './index.css'
import { cnahgeLang } from '../../redux/reducers/appReducer'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import './style.sass'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AboutMe from '../AboutMe'

type Props = {

}
const FullCV: React.FC<Props> = (props) => {
    const language = useSelector((state: AppstateType) => state.app.lang)
    const [showAbout, setShouAbout] = useState(true)
    const dispatch = useDispatch()
    return (
        <div className="wrapper">
            <ButtonGroup disableElevation variant="contained" orientation="vertical" className='language__switcher'>
                <Button onClick={() => dispatch(cnahgeLang('Ru'))} >Ru</Button>
                <Button onClick={() => dispatch(cnahgeLang('Eng'))}>Eng</Button>
                <Button onClick={() => setShouAbout(showAbout => !showAbout)}>{!showAbout ? 'hide info' : 'show info'}</Button>
            </ButtonGroup>
            <div className='fullCv' style={{ transform: `rotateY(${showAbout ? 0 : 180}deg)` }}>



                <LeftSide />
                <RightSide />

            </div>
            <AboutMe showAbout={showAbout} />
        </div>

    )
}
export default FullCV
