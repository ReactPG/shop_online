import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './style'
import I18n from '../../i18n/I18n'
import { connect } from 'react-redux'
import { NAV_INDEX } from '../../constants/type'
import Images from '../../themes/Image'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../themes/Colors'
import { Header } from 'react-native-elements'
import LeftComponent from '../../components/LeftComponent'
import header_style from '../../components/Header/style'
import { fetchCategory } from '../../actions/fetchCategory'

// ສ້າງຕົວປ່ຽນ Array ໂດຍກຳນົດຄ່າເພື່ອເອົາໄປສະແດງໃນ Flatlist ພ້ອມມີ icon
const SchoolInfo = [
  { id: NAV_INDEX.STAFF, key: 'Clothes', name: 'Clothes', img: Images.icATM },
  { id: NAV_INDEX.TEACHER, key: 'Shoes', name: 'Shoes', img: Images.icCashTransferRound },
  { id: NAV_INDEX.STUDENT, key: 'Sport', name: 'Sport', img: Images.icMoveAtmRound },
  { id: 4, key: 'Fashion', name: 'Fashion', img: Images.icATM },
  { id: 5, key: 'Adults', name: 'Adults', img: Images.icCashTransferRound },
  { id: 6, key: 'Child', name: 'Child', img: Images.icMoveAtmRound },
  { id: 7, key: 'Adults', name: 'Adults', img: Images.icCashTransferRound },
  { id: 8, key: 'Child', name: 'Child', img: Images.icMoveAtmRound },
]

class HomeScreen extends Component {

  // static navigationOptions = ({ navigation }) => {
  //   const { params = {} } = navigation.state
  //   return {
  //     header: <CustomNavbar txtTitle={I18n.t('home')}/> 
  //   }
  // }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    this.props.fetchCategory();
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

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.cateReducer.success) {
      console.log(nextProps.cateReducer)
    }else {
      console.log("false")
    }
    
  }
  

  render() {
    props = this.props
    
    return (
      <View style={styles.containner}>
        {/* that's ok */}
        <Header
          outerContainerStyles={header_style.containHead}
          leftComponent={<LeftComponent icons_name='ios-menu'  onPress={() => {}}/>}
          centerComponent={{ text: I18n.t('appName'), style: header_style.head_text }}
        />
        <FlatList style={{ flex: 1, margin: 10 }}
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
const mapStateToProps = state => {
  return {
    changelanguage: state.changelanguage,
    cateReducer: state.cateReducer,
  };
}

// call function redux 
const mapDispatchToProps = (dispatch) => {
  return {
    // import from action of the ChangeLanguage
    changeLocalLanguage: (language) => { dispatch(changeLocalLanguage(language)) },
    fetchCategory: () => dispatch(fetchCategory()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

