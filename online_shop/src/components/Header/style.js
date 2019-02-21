import { StyleSheet, Platform } from 'react-native'
import Metrics from '../../themes/Metrices'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    containHead: {
        backgroundColor: Colors.headerColor,
        height: 60,
        borderBottomColor: Colors.headerColor
    },
    head_text: {
        color: Colors.white,
        fontSize: 18
    },
    head_left_text: {
        color: '#fff',
        flex: 1,
        position: 'absolute',
        paddingLeft: -6,
        fontSize: 18
    }
})