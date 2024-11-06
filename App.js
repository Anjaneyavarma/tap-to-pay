import { Text,View, ScrollView,SafeAreaView, StyleSheet, NativeEventEmitter, NativeModules } from 'react-native';
import React, {useEffect} from 'react';
// You can import supported modules from npm
import Icon from '@mdi/react';
import Header from './container/Header'
import AccountContainer from './container/AccountContainer';
import TaptopaySuccess from './components/TaptopaySuccess'
import {NavigationContainer} from '@react-navigation/native';
import ManageTaptoPay from './components/ManageTaptoPay'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProcessingPayment from './components/ProcessingPayment'
import NfcManager, {NfcTech} from 'react-native-nfc-manager'

const Stack = createNativeStackNavigator();

const mockAccountData = [
  {
    imagePath: require('./assets/samsclub.png'),
    cardName: "Sam's club Credit Card",
    accountNumber: 'Account ending in 6011',
    currentBalance: "$790",
    availableToSpend: "$3,000",
    totalMinimumPayment: "$0.00",
    paymentDueDate: "Oct 16",
    autopay: "ON",
    contactlessPay: "OFF",
    cardImagePath: require('./assets/samsclubCardImage.png'),
  },
  {
    imagePath: require('./assets/amazonlogo.png'),
    cardName: "Amazon Store Card",
    accountNumber: 'Account ending in 0789',
    currentBalance: "$790",
    availableToSpend: "$3,000",
    totalMinimumPayment: "$0.00",
    paymentDueDate: "Oct 16",
    autopay: "ON",
    contactlessPay: "OFF",
    cardImagePath: require('./assets/amazonStoreCard.png'),
  }
]


export default function App() {

  useEffect(() => {
    NfcManager.start();
  }, []);

  return (
    <NavigationContainer style={styles.container}>
      <SafeAreaView>
        <Header/>
      </SafeAreaView>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={AccountContainer}
        />
        <Stack.Screen name="ProcessingPayment" component={ProcessingPayment} />
        <Stack.Screen name="TaptopaySuccess" component={TaptopaySuccess} />
        <Stack.Screen name="ManageTaptoPay" component={ManageTaptoPay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 0,
    margin: 40
  },
});
