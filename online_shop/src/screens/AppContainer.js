import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux' // ຕ້ອງມີການເຊື່ອມຕໍ່
import I18n from '../i18n/I18n'
import MainPage from '../routers/TabHomeStack'



class AppContainer extends Component {
    constructor(props) {
      super(props);
      let language = 'en'
      if (props.localLanguage) {
          language = props.localLanguage;
      }
      I18n.defaultLocale = language || 'en'
      I18n.locale = language || 'en'
    }
  
    render() {
      return (
          <MainPage/>
      );
    }
  }

  const mapStateToProps = state => ({
    localLanguage: state.changelanguage.localLanguage
})

const mapDispatchToProps = (dispatch) => {
    return {
        changeLocalLanguage: (language) => { dispatch(changeLocalLanguage(language)) }
    }
}

  export default connect(mapStateToProps,mapDispatchToProps)(AppContainer)