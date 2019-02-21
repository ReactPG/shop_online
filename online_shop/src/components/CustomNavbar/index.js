import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons'
import I18n from "../../i18n/I18n"
import { connect } from 'react-redux'
import Colors from '../../themes/Colors'
import Images from '../../themes/Image'
class CustomNavbar extends Component {
    render() {
        return (
            // <View style={[styles.container]}>
            //     <Text>{I18n.t(this.props.txtTitle)}</Text>
            // </View>
            <View style={[styles.container]}>
                <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => this.props.onPressLeft()}>
                    <Text>{I18n.t(this.props.txtTitle)}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

// Prop type warnings
const propTypes = {
    backButton: PropTypes.bool,
    midTitle: PropTypes.bool,
    rightTitle: PropTypes.bool,
    onPressLeft: PropTypes.func,
    txtTitle: PropTypes.string
}

const defaultProps = {
    // codeLength: 5

}

CustomNavbar.propTypes = propTypes
CustomNavbar.defaultProps = defaultProps

export default connect(null, null)(CustomNavbar)