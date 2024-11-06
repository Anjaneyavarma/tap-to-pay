import { Text,View, SafeAreaView,Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header(){
  
  return (
    <View style={styles.container}>
        <Image 
          style={styles.image}
          source={require('../assets/synchrony-header.png')}
        />
        <Icon name="person-outline" size={30} color="#4F8EF7" />
    </View>
  )
} 


const styles = StyleSheet.create({
  container: {
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  image:{
    paddingLeft: 5,
    width: 150,
    height: 50
  }
});


