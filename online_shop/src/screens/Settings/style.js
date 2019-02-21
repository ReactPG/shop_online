import { Platform, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'
import Metrics from '../../themes/Metrices'
const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
    containner: {
        flex: 1,
        // justifyContent: 'center',
    },
    containnerList: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.basic,
    },
    button: {
        margin: Metrics.smallMargin,
        justifyContent: 'center',
        alignItems: 'center',  
    },
    buttonsave: {
        margin: Metrics.smallMargin,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        borderRadius:Metrics.baseRaduis,
        backgroundColor:Colors.buttonColor,
        height: Metrics.baseHeight,
    },
    textInput:{
        borderColor:Colors.borderColor,
        height: Metrics.baseHeight,
        margin:Metrics.baseMargin,
        paddingLeft: Metrics.baseMargin,
        width: '70%',
        borderRadius:Metrics.baseRaduis,
        borderWidth: 0.5
        // backgroundColor:Colors.basic
    },
    text: {
        color: Colors.white,
    },
    groupList: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: Metrics.baseMargin,
        paddingVertical: Metrics.smallMargin,
        backgroundColor: Colors.card,
        marginBottom: 0,
        margin: Metrics.baseMargin
    },
    iconLeft: {
        height: Metrics.images.medium,
        width: Metrics.images.medium,
        marginRight: Metrics.baseMargin
    },
    iconStyle: {
        height: Metrics.icons.large - 5,
        width: Metrics.icons.large - 5
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Metrics.smallMargin
    },
    warpContentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    iconVector: {
        // alignSelf: 'center'
    },
    warpIconVector: {
        height: 40,
        width: 40,
        backgroundColor: Colors.colorIcon,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'transparent',
        marginRight: Metrics.baseMargin
    },
    warpIconVectorNoHolder: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'transparent',
        marginRight: Metrics.baseMargin
    },
    txtItem: {
        color: Colors.textColor,
        fontSize: Metrics.meduimfontSize
    },
    // Modal 
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal3: {
        height: 170,
        width: width - 60,
        backgroundColor: 'white',
        borderRadius: 20,
        position: "absolute",
    },
    modal4: {
        margin:Metrics.baseMargin,
        height: 210,
        width: width - 50,
        backgroundColor: 'white',
        borderRadius: 20,
        position: "absolute",
    },
    modal5: {
        margin:Metrics.baseMargin,
        justifyContent: 'center',
        alignItems:'center',
        height: 150,
        width: width - 50,
        backgroundColor: 'white',
        borderRadius: 20,
        // position: "absolute",
    },
    text: {
        color: "black",
        fontSize: 22
    },
    textbutton: {
        color: Colors.white,
    },
    forgotpass: {
        color: Colors.buttonColor,
    },
    btn: {
        margin: 10,
        backgroundColor: "#3B5998",
        color: "white",
        padding: 10
    },

    rowimage:{
        flexDirection:'row',
        justifyContent:'center'
    },
    head_icon: {
        marginTop: Metrics.baseMargin,
        marginBottom: Metrics.baseMargin,
        marginRight: Metrics.baseMargin,
        justifyContent: 'center',
        alignItems: 'center',
        height: Metrics.baseHeight,
    },
    containRow:{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginTop: -40
    },
    buttonYes:{
        margin: Metrics.smallMargin,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        borderRadius:Metrics.baseRaduis,
        backgroundColor:Colors.buttonColor,
        height: Metrics.baseHeight,
    },
    buttonNo:{
        margin: Metrics.smallMargin,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        borderRadius:Metrics.baseRaduis,
        backgroundColor:Colors.red,
        height: Metrics.baseHeight,
    },
    exitText:{
        marginTop:36,
        justifyContent:'center',
        alignItems:'center',
        color: "black",
        fontSize: 22
    }
})