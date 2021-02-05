const SET_SHOW_INFO_PAGE_TRUE = 'SET_SHOW_INFO_PAGE_TRUE',
    SET_SHOW_INFO_PAGE_FALSE = 'SET_SHOW_INFO_PAGE_FALSE'
type initialStateType = {
    showInfoPage: boolean
    lang: string
}
const initialState: initialStateType = {
    showInfoPage: true,
    lang: 'eng'
};

const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_SHOW_INFO_PAGE_TRUE:
            return {
                ...state,
                showInfoPage: true
            }
        case SET_SHOW_INFO_PAGE_FALSE:
            return {
                ...state,
                showInfoPage: false
            }
        case 'TOOGLE_INFO':
            return {
                ...state,
                showInfoPage: action.payload
            }
        case 'CHANGE_LANGUAGE':
            return {
                ...state,
                lang: action.payload
            }
        default:
            break;
    }
    return state;
};
type setInfoShowTrueType = {
    type: typeof SET_SHOW_INFO_PAGE_TRUE
}
export const cnahgeLang = (lang: string) => ({ type: 'CHANGE_LANGUAGE', payload: lang })
export const setInfoShow = (): setInfoShowTrueType => ({ type: SET_SHOW_INFO_PAGE_TRUE })
type setInfoShowFalseType = {
    type: typeof SET_SHOW_INFO_PAGE_FALSE
}
export const setInfoHide = (): setInfoShowFalseType => ({ type: SET_SHOW_INFO_PAGE_FALSE })
export default appReducer;
