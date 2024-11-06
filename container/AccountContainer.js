import {View, StyleSheet, Image, Text, Alert, ScrollView} from 'react-native'
import AccountCard from '../components/AccountCard';
import HomeHeader from '../components/HomeHeader'

const mockAccountData = [
  {
    imagePath: require('../assets/samsclub.png'),
    cardName: "Sam's club Credit Card",
    accountNumber: 'Account ending in 6011',
    currentBalance: "$790",
    availableToSpend: "$3,000",
    totalMinimumPayment: "$0.00",
    paymentDueDate: "Oct 16",
    autopay: "ON",
    contactlessPay: "OFF",
    cardImagePath: require('../assets/samsclubCardImage.png'),
  },
  {
    imagePath: require('../assets/amazonlogo.png'),
    cardName: "Amazon Store Card",
    accountNumber: 'Account ending in 0789',
    currentBalance: "$790",
    availableToSpend: "$3,000",
    totalMinimumPayment: "$0.00",
    paymentDueDate: "Oct 16",
    autopay: "ON",
    contactlessPay: "OFF",
    cardImagePath: require('../assets/amazonStoreCard.png'),
  }
]

const AccountContainer = ({navigation, route}) =>{

  return (
    <ScrollView>
        <View>
          <HomeHeader/>
        </View>
        <View style={styles.home}>
          {mockAccountData.map((details, i)=>{
            return (<View key={i}>
                        <AccountCard 
                          details = {details}
                          navigation={navigation}
                          route={route}
                        />
                    </View>)
          })}
        </View>
    </ScrollView>
  )
    
}

export default AccountContainer

const styles = StyleSheet.create({
  home:{
      marginTop:15,
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50,
  }
})