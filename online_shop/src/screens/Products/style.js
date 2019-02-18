import { Platform, StyleSheet, Dimensions } from 'react-native'
import Metrics from '../../themes/Metrices'
import Colors from '../../themes/Colors'
const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
    containner: {
        flex: 1,
    },
    containTextInput: {
        height: 65,
        backgroundColor: Colors.general_color,
        top: 0,
        flexDirection: 'row-reverse',
    },
    search: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.white,
        margin: Metrics.baseMargin,
        height: Metrics.baseHeight,
        marginBottom: Metrics.baseHeight,
        borderRadius: Metrics.baseRaduis + Metrics.baseRaduis,
        paddingLeft: Metrics.baseMargin + Metrics.smallMargin,
    },
    search_icon: {
        marginTop: Metrics.baseMargin,
        marginBottom: Metrics.baseMargin,
        marginRight: Metrics.baseMargin,
        justifyContent: 'center',
        alignItems: 'center',
        height: Metrics.baseHeight,
    },

    iconStyle: {
        height: 100,
        width: 100,
        marginBottom: Metrics.baseMargin
    },
    mainItem: {
        flex: 1,
        backgroundColor: Colors.white,
        borderColor: Colors.smallblack,
        borderRadius: Metrics.baseRaduis,
        margin: Metrics.baseMargin,
        padding: Metrics.smallMargin,
        marginBottom: Metrics.smallMargin,
    },
    warpItemList: {
        flex: 1,
        height: height / 3.5,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: Colors.white,
        // borderColor: Colors.smallblack,
        // borderRadius: Metrics.baseRaduis,
        // margin: Metrics.baseMargin,
        // padding: Metrics.smallMargin,
        // marginBottom: Metrics.smallMargin,
    },
    mainTextFoot: {
        margin: Metrics.baseMargin,
        flexDirection: 'row'
    },
    textLeft: {
        flex:1,
        fontSize:Metrics.basefontSize,
        textAlign: 'left',
        fontSize: Metrics.meduimfontSize,
    },
    textRight: {
        fontSize:Metrics.basefontSize,
        textAlign: 'right',
        fontSize: Metrics.meduimfontSize,
    },
})