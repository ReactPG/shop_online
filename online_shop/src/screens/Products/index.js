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
import { Header } from 'react-native-elements'
import RightComponent from '../../components/RightComponent'
import header_style from '../../components/Header/style'

// ສ້າງຕົວປ່ຽນ Array ໂດຍກຳນົດຄ່າເພື່ອເອົາໄປສະແດງໃນ Flatlist ພ້ອມມີ icon
const SchoolInfo = [
  { id: NAV_INDEX.STAFF, key: 'Clothes', name: 'Clothes', img: Images.icATM },
  { id: NAV_INDEX.TEACHER, key: 'Shoes', name: 'Shoes', img: Images.icCashTransferRound },
  { id: NAV_INDEX.STUDENT, key: 'Sport', name: 'Sport', img: Images.icMoveAtmRound },
  { id: 5, key: 'Fashion', name: 'Fashion', img: Images.icATM },
  { id: 6, key: 'Adults', name: 'Adults', img: Images.icCashTransferRound },
  { id: 7, key: 'Child', name: 'Child', img: Images.icMoveAtmRound },

]

class ProductScreen extends Component {

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
          <Text style={styles.textRight}>9999 $</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.containner}>
        <Header
          outerContainerStyles={header_style.containHead}
          centerComponent={{ text: I18n.t('product'), style: header_style.head_left_text }}
          rightComponent={<RightComponent icons_name='ios-cart' onPress={() => this.props.navigation.navigate('Home')} />}
        // rightComponent={{ icon: 'shopping-cart', color: '#fff', size: 45,marginTop:90 }}
        />
        <View style={styles.containTextInput}>
          <View style={styles.search_icon}>
            <Ionicons size={45} name='ios-search' color={Colors.white} />
          </View>
          <TextInput style={styles.search} placeholder={I18n.t('enterTextToSearch')} />
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
  changelanguage: state.changelanguage,
})


export default connect(mapStateToProps, null)(ProductScreen)

