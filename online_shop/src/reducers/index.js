import {combineReducers} from 'redux'
import changelanguage from './ChangeLanguage'

// ກຽມສົ່ງ Redux ທີ່ເຮົາສ້າງແຕ່ລະໄຟລ໌ໃຫ້ອອກເປັນ Reducer
const AppReducer = combineReducers({
    changelanguage,
  })
  
  export default AppReducer