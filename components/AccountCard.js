import {View, StyleSheet, Image, Text, Alert} from 'react-native'
import { Button, Divider } from '@rneui/themed';
// import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const AccountCard = ({details, navigation, route}) =>{

  return (
    <View style={styles.container}>
        <View style={styles.cardHeader}>
            <View>
              <Image style={{width:110, height:40}} source={details.imagePath}/>
            </View> 
            <View style={{borderRightColor:'grey', borderLeftWidth:0.2, paddingLeft:20}}>
              <Text>{details.cardName}</Text>
              <Text style={{fontSize:12, fontWeight:'200'}}>{details.accountNumber}</Text>
            </View>
        </View>
        <View style={styles.cardDetails}>
            <View>
                <Image style={styles.cardImage} resizeMode='contain' source={details.cardImagePath}/>
            </View>
            <View style={{borderRightColor:'grey', borderLeftWidth:0.2, paddingLeft:30}}>
                <View style={{paddingBottom:10}}>
                    <Text style={styles.balances}>{details.currentBalance}</Text>
                    <Text style={styles.blueText}>Current balance</Text>
                </View>
                <View>
                    <Text style={styles.balances}>{details.availableToSpend}</Text>
                    <Text style={styles.blueText}>Available to spend</Text>
                </View>
            </View>
        </View>
        <View style={styles.cardPay}>
            <View>
                <Text style={styles.balances}>{details.totalMinimumPayment}</Text>
                <Text style={styles.blueText}>Total Minimum Payment</Text>
                <Text style={styles.blueText}>Autopay ON</Text>
            </View>
            <View>
                <Text style={styles.balances}>{details.paymentDueDate}</Text>
                <Text style={styles.blueText}>Payment Due Date</Text>
                <Text style={styles.blueText}>Tap to pay ON</Text>
            </View>
        </View>
        <View style={{width:'75%', alignSelf:'center', marginTop:20}}>
          <Button title="PAY BILL" type='outline' 
            buttonStyle={{width:'100%', borderWidth:2, borderColor:"#34657F", color:'#34657F'}}
            onPress={() => Alert.alert('Simple Button pressed')}
          />
          <Button title="TAP TO PAY" type='outline' style={{marginTop:10}}
            buttonStyle={{width:'100%', borderWidth:2, borderColor:"#34657F", color:'#34657F'}}
            onPress={() => navigation.navigate("ProcessingPayment")}
          />
        </View>
        <View style={styles.menuBar}>
            <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <Icon name="albums-outline" size={25} color="#34657F" />
              <Text>ACTIVITY</Text>
            </View>
            <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <Icon name="book-outline" size={25} color="#34657F" />
              <Text>STATEMENT</Text>
            </View>
            <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <Icon name="medal-outline" size={25} color="#34657F" />
              <Text>REWARDS</Text>
            </View>
            <View onTouchEnd={()=>navigation.navigate('ManageTaptoPay')} style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <Icon name="settings-outline" size={25} color="#34657F" />
              <Text>MANAGE</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    // justifyContent:'space-between',
    borderWidth:2,
    borderColor:'grey',
    borderRadius:15,
    width: 330,
    height:410,
    backgroundColor: 'white',
    marginBottom:20,
  },
  cardHeader:{
    height:50,
    width:'100%',
    display:'flex', 
    flexDirection:'row', 
    justifyContent:'space-around',
    alignSelf:'center',
    alignItems:'center',
    borderBottomWidth:0.2, 
    borderBottomColor:'grey'
  },
  cardDetails:{
      height:'28%',
      display: 'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
  },
  menuBar:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    alignContent:'center',
    marginTop:10,
    height:50, 
    borderColor:'grey', 
    borderTopWidth:0.2, 
    width:'100%',
  },
  cardImage:{
    width: undefined,
    height: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  blueText:{
    fontSize:12, 
    fontWeight:'300',
    color: '#34657F'
  },
  balances:{
    fontSize:23, 
    fontWeight:'900'
  },
  cardPay:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop: 10,
  },
});


export default AccountCard;