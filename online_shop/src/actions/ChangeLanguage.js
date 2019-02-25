import {
    CHANGE_LOCAL_LANGUAGE
} from '../constants/type'
import I18n from 'react-native-i18n'

export const changeLocalLanguage = (language) =>{
    I18n.defaultLocale = language
    I18n.locale = language
    return{
        type: CHANGE_LOCAL_LANGUAGE,
        payload: language
    }
}
