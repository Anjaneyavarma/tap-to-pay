import {View, StyleSheet, Image, Text, Alert} from 'react-native'
import { Button, Divider } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';

const TaptopaySuccess = () => {
  return (
    <View style={styles.container}>
        <View style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Text style={styles.headText}>PURCHASE AMOUNT</Text>
            <Text style={styles.headText}>$45</Text>
        </View>
        <View>
            <Button 
              title='PAY AGAIN'
              size='lg'
              buttonStyle={{borderWidth:2, color:'black', borderRadius:25, margin:15}}
              disabled={true}
              disabledTitleStyle={{color:'#34657F', fontWeight:'900', fontSize:'21'}}
              onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
        <View style={styles.completeDiv}>
          <View style={styles.completeDivChild1}>
            <Icon name="checkmark-circle" size={30} color="#20AE25" />
            <Text style={{fontSize:'20', color:'white', fontWeight:'200', paddingLeft:8}}>Completed</Text>
          </View>
          <View>
            <Text style={{fontSize:'15', color:'white', fontWeight:'200', marginTop:10}}>
              {new Date().toDateString()}, {new Date().toLocaleTimeString()}
            </Text>
          </View>
        </View>
        <View style={styles.cardDetails}>
            <View style={styles.cardHeader}>
              <View>
                <Image style={{width:75, height:40}} source={require('../assets/samsclub.png')}/>
              </View> 
              <View style={{borderRightColor:'grey', borderLeftWidth:0.2, paddingLeft:20}}>
                <Text>Sams club ending with 6011</Text>
              </View>
            </View>
            <View style={styles.cardCompleteDiv}>
              <View style={styles.cardCompleteDivChild1}>
                  <Icon name="checkmark-circle" size={25} color="#20AE25" />
                  <Text style={{paddingLeft:10}}>Payment Started</Text>
              </View>
              <View style={styles.cardCompleteDivChild1}>
                  <Icon name="checkmark-circle" size={25} color="#20AE25" />
                  <Text style={{paddingLeft:10}}>Payment received by Sam’s club</Text>
              </View>
              <View style={styles.cardCompleteDivChild1}>
                  <Icon name="checkmark-circle" size={25} color="#20AE25" />
                  <Text style={{paddingLeft:10}}>Purchase confirmed</Text>
              </View>
            </View>
            <View style={styles.cardCompleteDiv1}>
                <Text style={{marginBottom:12}}>{'Transaction ID: 19ab3PI5432146768sa56'}</Text>
                <Text style={{marginBottom:12}}>{"To: Sam's Club"}</Text>
                <Text style={{marginBottom:12}}>{"From: Sams club ending with 6011"}</Text>
            </View>
        </View>
        <View>
          <Button 
              title='DONE'
              size='lg'
              buttonStyle={{borderWidth:2, color:'black', borderRadius:25, margin:20}}
              disabled={true}
              disabledTitleStyle={{color:'#34657F', fontWeight:'900', fontSize:'21', padding:15}}
              onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
    </View>
  )
}

export default TaptopaySuccess

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    backgroundColor: '#34657F',
    marginBottom:20,
    height: "100%",
    width:"100%"
  },
  headText:{
    fontSize: 30,
    fontWeight:'600',
    color: 'white',
    marginTop: 20
  },
  completeDiv: {
    display:'flex', 
    flexDirection:'column',
    alignItems:'center',
    width:'50%',
    justifyContent:'center',
  },
  completeDivChild1: {
    display:'flex', 
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:0.2,
    width:'100%',
    borderBottomColor: 'white',
    paddingBottom:10
  },
  cardDetails:{
    display:'flex',
    flexDirection:'column',
    // justifyContent:'space-between',
    borderWidth:2,
    borderColor:'grey',
    borderRadius:15,
    width: '75%',
    height: 'undefined',
    backgroundColor: 'white',
    marginTop:15
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
  cardCompleteDiv:{
    display:'flex', 
    flexDirection:'column',
    alignItems:'center',
    width:'100%',
    justifyContent:'center',
    marginTop: 10,
    borderBottomWidth:0.2,
    borderBottomColor: 'grey'
  },
  cardCompleteDivChild1:{
    display:'flex', 
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:0.2,
    width:'90%',
    borderBottomColor: 'white',
    paddingBottom:10
  },
  cardCompleteDiv1:{
    display:'flex', 
    flexDirection:'column',
    width:'100%',
    justifyContent:'center',
    marginTop: 10,
    paddingLeft: 15
  },
})