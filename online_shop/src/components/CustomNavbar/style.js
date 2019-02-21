import { StyleSheet, Platform } from 'react-native'
import Metrics from '../../themes/Metrices'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.customNav,
        height: Metrics.customNavBarHeight,
        paddingTop: Platform.OS === 'ios' ? 20 : 10,
    },
    leftContainer: {
        marginLeft: 10,
        width: Metrics.doubleBaseMargin,
        justifyContent: 'center'
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 10
    },
    midContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    avatarNav: {
        height: Metrics.navBarHeight,
        width: Metrics.navBarHeight,
        borderRadius: Metrics.navBarHeight / 2
    },
    txtTitleMiddle: {
        width: '80%',
        color: Colors.white,
        fontSize: Metrics.fontSize,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})