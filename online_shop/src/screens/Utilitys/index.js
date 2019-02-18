import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style'
import I18n from '../../i18n/I18n'
import { connect } from 'react-redux'


class UtilityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.containner}>
        <Text>  {I18n.t('utility')} </Text>
      </View>
    );
  }
}

// set for call state and update state
const mapStateToProps = state => ({
  localLanguage: state.changelanguage.localLanguage,
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

export default connect(mapStateToProps, mapDispatchToProps)(UtilityScreen)

