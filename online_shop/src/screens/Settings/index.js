import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import styles from './style'
import I18n from '../../i18n/I18n'
import { changeLocalLanguage } from '../../actions/ChangeLanguage'  //import fuction in action of file 
import { connect } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Images from '../../themes/Image'
import Colors from '../../themes/Colors'
import Modal from 'react-native-modalbox';
import { Header } from 'react-native-elements'
import header_style from '../../components/Header/style'
import RightComponent from '../../components/RightComponent'
import LeftComponent from '../../components/LeftComponent';
import RNExitApp from 'react-native-exit-app';


class SettingsScreen extends Component {
  constructor() {
    super();
    this.state = {
      language: 'lo',
      isDisabled: false, // disable/enable modal
      la_enable: 1, // lao language button
      en_enable: 1, // en language button
    };
  }

  ChangeLao = () => {
    this.setState({ la_enable: 1 });
    this.setState({ en_enable: 0.2 });
    this.setState({ language: 'lo' });
    this.props.changeLocalLanguage('lo')
    this.props.navigation.navigate('Home')
    this.refs.modal3.close()
    //RNRestart.Restart();

  }
  ChangeEng = () => {
    this.setState({ en_enable: 1 });
    this.setState({ la_enable: 0.2 });
    this.setState({ language: 'en' });
    this.props.changeLocalLanguage('en')
    this.props.navigation.navigate('Home')
    this.refs.modal3.close()
    //RNRestart.Restart();
  }

  CloseButton = () => {
    this.refs.modal4.close()
  }


  render() {
    return (
      <View style={styles.containner}>
        <Header
          outerContainerStyles={header_style.containHead}
          centerComponent={{ text: I18n.t('settings'), style: header_style.head_text }}
          leftComponent={<LeftComponent icons_name='ios-settings' onPress={() => { }} />}
        />
        <View style={styles.containnerList}>
          <View style={styles.groupList}>
            {/* Call Moal         this.refs.modal3.open() */}
            <TouchableOpacity style={styles.rowContainer} onPress={() => this.refs.modal3.open()}>
              <View style={styles.warpContentRow}>
                <View style={styles.warpIconVector}>
                  <Image source={Images.icChangeLanguage} color={Colors.white} size={40} style={styles.iconStyle} />
                </View>
                <Text style={styles.txtItem}>{I18n.t('changelanguage')}</Text>
              </View>
              <Ionicons name='ios-arrow-forward' color='#567CDC' size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.groupList}>
            <TouchableOpacity style={styles.rowContainer}>
              <View style={styles.warpContentRow}>
                <View style={styles.warpIconVector}>
                  <Image source={Images.icShare} color={Colors.white} size={40} style={styles.iconStyle} />
                </View>
                <Text style={styles.txtItem}>{I18n.t('share')}</Text>
              </View>
              <Ionicons name='ios-arrow-forward' color='#567CDC' size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.groupList}>
            <TouchableOpacity style={styles.rowContainer} onPress={() => this.refs.modal4.open()}>
              <View style={styles.warpContentRow}>
                <View style={styles.warpIconVector}>
                  <Image source={Images.icChangePassword} color={Colors.white} size={40} style={styles.iconStyle} />
                </View>
                <Text style={styles.txtItem}>{I18n.t('changePassword')}</Text>
              </View>
              <Ionicons name='ios-arrow-forward' color='#567CDC' size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.groupList}>
            <TouchableOpacity style={styles.rowContainer} onPress={() => this.refs.modal5.open()}>
              <View style={styles.warpContentRow}>
                <View style={styles.warpIconVector}>
                  <Image source={Images.icLogOut} color={Colors.white} size={40} style={styles.iconStyle} />
                </View>
                <Text style={styles.txtItem}>{I18n.t('logOut')}</Text>
              </View>
              <Ionicons name='ios-arrow-forward' color='#567CDC' size={25} />
            </TouchableOpacity>
          </View>


          {/*Made Modal Form Change Language*/}
          <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
            <Text style={styles.text}>{I18n.t('pleaseChooseLanguage')}</Text>
            <View style={styles.rowimage}>
              <TouchableHighlight style={[styles.button, { opacity: this.state.la_enable }]} onPress={this.ChangeLao}>
                <Image source={Images.icLao} size={40} style={styles.iconStyle} />
              </TouchableHighlight>
              <TouchableHighlight style={[styles.button, { opacity: this.state.en_enable }]} onPress={this.ChangeEng}>
                <Image source={Images.icEnglish} size={40} style={styles.iconStyle} />
              </TouchableHighlight>
            </View>
          </Modal>
          {/*Made Modal Form Change Password*/}
          <Modal style={[styles.modal, styles.modal4]} position={"center"} ref={"modal4"} isDisabled={this.state.isDisabled}>
            <Text style={styles.text}>{I18n.t('changePassword')}</Text>
            <TextInput placeholder={I18n.t('pleaseEnterPassword')} style={styles.textInput} />
            <TouchableOpacity style={[styles.buttonsave, { opacity: this.state.en_enable }]} onPress={() => this.CloseButton()}>
              <Text style={styles.textbutton}>{I18n.t('save')}</Text>
            </TouchableOpacity>
            <Text style={styles.forgotpass}>{I18n.t('forgotpass')}</Text>
          </Modal>


          {/* Exit App */}
          <Modal style={[styles.modal, styles.modal5]} position={"center"} ref={"modal5"} isDisabled={this.state.isDisabled}>
            <View style={{flex:1}}>
                <Text style={styles.exitText}>{I18n.t('exitApp')}</Text>
            </View>
            <View style={styles.containRow}>
              <TouchableOpacity style={styles.buttonYes} onPress={() => RNExitApp.exitApp()}>
                <Text style={styles.textbutton}>{I18n.t('yes')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonNo} onPress={() => this.refs.modal5.close()}>
                <Text style={styles.textbutton}>{I18n.t('no')}</Text>
              </TouchableOpacity>
            </View>

          </Modal>
        </View>
      </View>
    );
  }
}

// set for call state and update state
const mapStateToProps = state => ({
  changelanguage: state.changelanguage,
})

// call function redux 
const mapDispatchToProps = (dispatch) => {
  return {
    // import from action of the ChangeLanguage
    changeLocalLanguage: (language) => { dispatch(changeLocalLanguage(language)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
