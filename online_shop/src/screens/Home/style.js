import {Platform, StyleSheet, Dimensions} from 'react-native'
const { width, height } = Dimensions.get('window')
import Metrics from '../../themes/Metrices'
import Colors from '../../themes/Colors'
export default StyleSheet.create({
    containner :{
        flex: 1,
        margin:Metrics.smallMargin
    },
    iconStyle: {
        height: 60 - 5,
        width: 60 - 5,
        marginBottom: Metrics.baseMargin
    },
    txtIcon: {
        textAlign: 'center',
        fontSize: Metrics.basefontSize
    },
    warpItemList: {
        flex:1,
        height: height / 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        borderColor: Colors.smallblack,
        borderRadius: Metrics.baseRaduis,
        margin: Metrics.smallMargin,
        padding: Metrics.smallMargin,
        marginBottom: Metrics.smallMargin
    },
    search_icon: {
        marginTop: Metrics.baseMargin,
        marginBottom: Metrics.baseMargin,
        marginRight: Metrics.baseMargin,
        justifyContent: 'center',
        alignItems: 'center',
        height: Metrics.baseHeight,
    },
})