import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Alert, TouchableOpacity, StyleSheet, Button } from 'react-native';
import styles from './style'
import I18n from '../../i18n/I18n'
import { connect } from 'react-redux'
import Modal from 'react-native-modalbox';
import Colors from '../../themes/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationEvents } from 'react-navigation';
import { Header } from 'react-native-elements'
import header_style from '../../components/Header/style'

class UtilityScreen extends Component {

  constructor() {
    super();
    this.state = {
      isDisabled: false,
      disableWill: true
    };
  }

  render() {
    props = this.props
    return (
      <View style={styles.container}>
        <Header
          outerContainerStyles={header_style.containHead}
          centerComponent={{ text: I18n.t('utility'), style: header_style.head_left_text }}
        />
        <View style={styles.containerContent}>
          
        </View>
      </View>
    );
  }
}


// set for call state and update state
const mapStateToProps = (state) => ({
  changelanguage: state.changelanguage,
})

// call function redux
const mapDispatchToProps = (dispatch) => {
  return {
    // import from action of the ChangeLanguage
    changeLocalLanguage: (language) => { dispatch(changeLocalLanguage(language)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UtilityScreen)

