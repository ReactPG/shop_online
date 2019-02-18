import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './style'
import I18n from '../../i18n/I18n'
import { connect } from 'react-redux'
import { NAV_INDEX } from '../../constants/type'
import Images from '../../themes/Image'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../themes/Colors'

// ສ້າງຕົວປ່ຽນ Array ໂດຍກຳນົດຄ່າເພື່ອເອົາໄປສະແດງໃນ Flatlist ພ້ອມມີ icon
const SchoolInfo = [
  { id: NAV_INDEX.STAFF, key: 'Clothes', name: 'Clothes', img: Images.icATM },
  { id: NAV_INDEX.TEACHER, key: 'Shoes', name: 'Shoes', img: Images.icCashTransferRound },
  { id: NAV_INDEX.STUDENT, key: 'Sport', name: 'Sport', img: Images.icMoveAtmRound },
  { id: NAV_INDEX.STAFF, key: 'Fashion', name: 'Fashion', img: Images.icATM },
  { id: NAV_INDEX.TEACHER, key: 'Adults', name: 'Adults', img: Images.icCashTransferRound },
  { id: NAV_INDEX.STUDENT, key: 'Child', name: 'Child', img: Images.icMoveAtmRound },
  { id: NAV_INDEX.TEACHER, key: 'Adults', name: 'Adults', img: Images.icCashTransferRound },
  { id: NAV_INDEX.STUDENT, key: 'Child', name: 'Child', img: Images.icMoveAtmRound },
]

class HomeScreen extends Component {

  static navigationOptions = {
    headerRight: (
      <View style={styles.search_icon}>
        <Ionicons size={45} name='md-more' color={Colors.white} />
      </View>
    )    // ປຸ່ມໃນຕຳແໜ່ງຂອງ Navigation
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // ແມ່ນການນຳເອົາຮູບຈາກຕົວປ່ຽນ Array ຊື່ວ່າ SchoolInfo ມາສະແດງເປັນຮູບໃນ Flatlist
  renderItem(item) {
    return (
      <View style={styles.warpItemList}>
        <TouchableOpacity>
          <Image source={item.img} style={styles.iconStyle} />
          <Text style={styles.txtIcon}  >{item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }


  render() {
    return (
      <View style={styles.containner}>
        <FlatList style={{flex:1}}
          data={SchoolInfo}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item, index) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          extraData={Object.assign(this.props)}
          numColumns={2}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

