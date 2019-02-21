import { Platform, StyleSheet, Dimensions } from 'react-native'
// const {WIDTH, HEIGTH} = 
import Colors from '../../themes/Colors'
import Metrics from '../../themes/Metrices'
const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
    container: {
        flex: 1
    },
    containerContent: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1

    },
    warpDetail: {
        width: '95%',
        paddingTop: 10
        // backgroundColor: Colors.background,
        // marginVertical: 10
        // borderRadius: 5,
        // borderWidth: 0.5,
        // borderColor: 'gray'
    },
    modalContent: {
        paddingBottom: Platform.OS === 'ios' ? height / 2 - 80 : 0,
        height: '40%',
        width: width-50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    bottomModal: {
        justifyContent: 'center',
        backgroundColor: 'red',
        margin: 0
    },
    head_icon: {
        marginTop: Metrics.baseMargin,
        marginBottom: Metrics.baseMargin,
        marginRight: Metrics.baseMargin,
        justifyContent: 'center',
        alignItems: 'center',
        height: Metrics.baseHeight,
    },
})