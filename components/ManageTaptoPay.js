import React, {useState} from 'react';
import {Text,View, StyleSheet } from 'react-native';
import { CheckBox, Slider, Icon, Button } from '@rneui/themed';

const ManageTaptoPay = () => {

    const [checked, setChecked] = React.useState(true);
    const toggleCheckbox = () => setChecked(!checked);
    const [dailyLimit, setDailyLimit] = useState(100);
    const [transactionLimit, setTransactionLimit] = useState(100);

    return(
      <View style={styles.container}>
          <View>
              <Text style={styles.heading}>{"Sam's Club Credit Card"}</Text>
              <Text style={styles.subHeading}>Account ending with 6011</Text>
          </View>
          <View style={{marginTop:20}}>
              <Text style={styles.manage}>Manage your card</Text>
          </View>
          <View style={styles.cardContainer}>
              <View style={{padding:20}}>
                  <View style={styles.cardHeader}>
                      <Text style={styles.cardHeading}>TAP TO PAY</Text>
                      <CheckBox
                        size={25}
                        textStyle={{fontSize:16, fontWeight:'500', color: 'black'}}
                        title={'Enable'}
                        checked={checked}
                        onPress={toggleCheckbox}
                        uncheckedColor={'black'}
                        checkedTitle={'Disable'}
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                      />
                  </View>
                  <View style={{marginTop:10}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.dailyLimit}>Daily Limit</Text>
                        <Text style={styles.dailyLimit1}>${dailyLimit}</Text>
                    </View>
                    
                    <Slider 
                      value={dailyLimit}
                      step={5}
                      onValueChange={setDailyLimit}
                      maximumValue={1000}
                      minimumValue={0}
                      trackStyle={{ height: 5, backgroundColor: 'transparent' }}
                      thumbStyle={{ height: 40, width: 20, backgroundColor: 'transparent' }}
                      thumbProps={{
                        children: (
                          <Icon
                            size={10}
                            reverse
                            color="#34657F"
                          />
                        ),
                      }}
                    />
                  </View>
                  <View style={{marginTop:10}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.dailyLimit}>Transaction Limit</Text>
                        <Text style={styles.dailyLimit1}>${transactionLimit}</Text>
                    </View>
                    
                    <Slider 
                      value={transactionLimit}
                      step={5}
                      onValueChange={setTransactionLimit}
                      maximumValue={1000}
                      minimumValue={0}
                      thumbStyle={{ height: 40, width: 16, backgroundColor: 'transparent' }}
                      thumbProps={{
                        children: (
                          <Icon
                            size={10}
                            reverse
                            color="#34657F"
                          />
                        ),
                      }}
                    />
                  </View>
              </View>
              <View style={{width:'75%', alignSelf: 'center'}}>
                  <Button
                      title={'UPDATE LIMIT'}
                      containerStyle={{margin:10}}
                      buttonStyle={{backgroundColor:"#34657F"}}
                  />
              </View>
          </View>
      </View>
    )
}

export default ManageTaptoPay


const styles = StyleSheet.create({
    container:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      backgroundColor: '#34657F',
      marginBottom:20,
      height: "100%",
      width:"100%"
    },
    heading:{
      fontSize: 30,
      color: 'white',
      fontWeight: '500',
    }, 
    subHeading:{
      fontSize: 15,
      color: 'white',
      fontWeight: '300',
    },
    manage:{
      fontSize: 25,
      color: '#FEB600',
      fontWeight: '500',
    },
    cardContainer:{
      display:'flex',
      flexDirection:'column',
      marginTop: 20,
      borderWidth:2,
      borderColor:'grey',
      borderRadius:15,
      width: 330,
      height:410,
      backgroundColor: 'white',
      marginBottom:20,
    },
    cardHeader:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft:15,
        marginBottom: 20,
        borderLeftWidth: 5,
        borderLeftColor: '#34657F',
    },
    cardHeading:{
      fontSize: 22,
      color: '#34657F',
      fontWeight: '600',
    }, 
    dailyLimit:{
      color: 'black',
      fontSize:20,
      fontWeight: '400',
    },
    dailyLimit1:{
      fontSize: 20,
      width: 50,
      height: 20,
      alignSelf:'center',
      textAlign:'center',
      backgroundColor: "#FEB600"
    }
})