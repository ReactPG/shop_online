import {Product} from '../screens/'
import { StackNavigator } from 'react-navigation'
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition'
import I18n from "../i18n/I18n"
import Colors from '../themes/Colors'

export default StackNavigator({
    Product: {
      screen: Product,
      navigationOptions: {
        headerStyle: {
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0,
            backgroundColor: Colors.headerColor,
        },
        // title: I18n.t('product'),
        headerTintColor: Colors.white,
        tabBarVisible: true,
    }
    },
  }, {
    transitionConfig: getSlideFromRightTransition,
    navigationOptions: props => {
      // title: ' Transfer'
    },
    headerMode: 'none'
  })
  