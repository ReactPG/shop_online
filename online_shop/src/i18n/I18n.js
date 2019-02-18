import I18n from 'react-native-i18n'

I18n.fallbacks = true

I18n.translations = {
    en: require('./languages/english.json'),
    lo: require('./languages/lo.json')
}

export default I18n