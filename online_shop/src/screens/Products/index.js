import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import styles from './style'
import I18n from '../../i18n/I18n'
import { connect } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../themes/Colors'
import { NAV_INDEX } from '../../constants/type'
import Images from '../../themes/Image'

// ສ້າງຕົວປ່ຽນ Array ໂດຍກຳນົດຄ່າເພື່ອເອົາໄປສະແດງໃນ Flatlist ພ້ອມມີ icon
const SchoolInfo = [
  { id: NAV_INDEX.STAFF, key: 'Clothes', name: 'Clothes', img: Images.icATM },
  { id: NAV_INDEX.TEACHER, key: 'Shoes', name: 'Shoes', img: Images.icCashTransferRound },
  { id: NAV_INDEX.STUDENT, key: 'Sport', name: 'Sport', img: Images.icMoveAtmRound },
  { id: NAV_INDEX.STAFF, key: 'Fashion', name: 'Fashion', img: Images.icATM },
  { id: NAV_INDEX.TEACHER, key: 'Adults', name: 'Adults', img: Images.icCashTransferRound },
  { id: NAV_INDEX.STUDENT, key: 'Child', name: 'Child', img: Images.icMoveAtmRound },

]


class ProductScreen extends Component {

  static navigationOptions = {
    headerRight: (
      <View style={styles.search_icon}>
        <Ionicons size={45} name='ios-cart' color={Colors.white} />
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
      <View style={styles.mainItem}>
        <View style={styles.warpItemList}>
          <TouchableOpacity>
            <Image source={item.img} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>

        <View style={styles.mainTextFoot}>
          <Text style={styles.textLeft}>{item.name}</Text>
          <Text style={styles.textRight}>{item.name}</Text>
        </View>

      </View>
    )
  }

  render() {
    return (
      <View style={styles.containner}>
        <View style={styles.containTextInput}>
          <View style={styles.search_icon}>
            <Ionicons size={45} name='ios-search' color={Colors.white} />
          </View>
          <TextInput style={styles.search} placeholder='Enter text to search..' />
        </View>

        <View style={styles.containner}>
          <FlatList style={{ flex: 1 }}
            data={SchoolInfo}
            renderItem={({ item }) => this.renderItem(item)}
            keyExtractor={(item, index) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            extraData={Object.assign(this.props)}
          />
        </View>
      </View>
    );
  }
}

// set for call state and update state
const mapStateToProps = state => ({
  // localLanguage: state.changelanguage.localLanguage,
  // language: state.language,
  // isFetching: state.isFetching
})

// call function redux 
const mapDispatchToProps = (dispatch) => {
  return {
    // import from action of the ChangeLanguage
    // changeLocalLanguage: (language) => { dispatch(changeLocalLanguage(language)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen)
