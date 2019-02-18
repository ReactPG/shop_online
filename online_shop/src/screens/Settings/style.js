import {Platform, StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'
import Metrics from '../../themes/Metrices'

export default StyleSheet.create({
    containner :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.basic,
    },
    button:{
        width: Metrics.baseWidth,
        backgroundColor: Colors.general_color,
        borderRadius: Metrics.baseMargin,
        margin: Metrics.smallMargin,
        height : Metrics.baseHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: Colors.white,
    }
})