import {View, Text, StyleSheet, Alert} from 'react-native'
import { Button } from '@rneui/themed';

const HomeHeader = () => {

  return(
    <View style={{marginBottom:10, paddingLeft:20}}>
        <Text style={{fontWeight:900, fontSize:25}}>Good Morning</Text>
        <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginTop:10}}>
          <Text style={{fontWeight:900, fontSize:20}}>Your Accounts</Text>
          <Button title="ADD ACCOUNT" type='clear'
            buttonStyle={{width:'69%', borderWidth:2, borderColor:"#34657F", color:'#34657F'}}
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
    </View>
  )
}

export default HomeHeader