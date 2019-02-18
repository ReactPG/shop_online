import {
    CHANGE_LANGUAGE,
    CHANGE_LOCAL_LANGUAGE,
    CHANGE_LANGUAGE_SUCCESS,
    CHANGE_LANGUAGE_FAILED,
} from '../constants/type'
// call variable from constant file

// Create gobal state
const initialState = {
    isFetching: false,
    changeLanguageData: null,
    localLanguage:'',
    error: null,
}

// platten default of redux
export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return { ...state, changeLanguageData: null, isFetching: true }
        case CHANGE_LANGUAGE_SUCCESS:
            return { ...state, isFetching: false, changeLanguageData: action.data, localLanguage: language === "en_LA" ? "lo" : "en" }
        case CHANGE_LANGUAGE_FAILED:
            return { ...state, isFetching: false, error: action.error }
        case CHANGE_LOCAL_LANGUAGE:
            return { ...state, isFetching: false, localLanguage: action.language }
        default:
            return state
    }
};
