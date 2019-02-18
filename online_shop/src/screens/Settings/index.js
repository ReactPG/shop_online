import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from './style'
import I18n from '../../i18n/I18n'
import { changeLocalLanguage } from '../../actions/ChangeLanguage'  //import fuction in action of file 
import { connect } from 'react-redux'

class SettingsScreen extends Component {
  constructor() {
    super();
    this.state = {
      language: 'lo',
    };
  }

  ChangeLao = () => {
    this.setState({ language: 'lo' });
    this.props.changeLocalLanguage('lo')
  }
  ChangeEng = () => {
    this.setState({ language: 'en' });
    this.props.changeLocalLanguage('en')
  }


  props = this.props
  render() {
    return (
      <View style={styles.containner}>
        {/* <Text> {I18n.t('settings')}  </Text> */}
        <TouchableHighlight style={styles.button} onPress={this.ChangeLao}>
          <Text style={styles.text}>{I18n.t('lao')}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.ChangeEng}>
          <Text style={styles.text}>{I18n.t('english')}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

// set for call state and update state
const mapStateToProps = state => ({
  localLanguage: state.localLanguage,
  language: state.language,
  isFetching: state.isFetching
})

// call function redux 
const mapDispatchToProps = (dispatch) => {
  return {
    // import from action of the ChangeLanguage
    changeLocalLanguage: (language) => { dispatch(changeLocalLanguage(language)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
