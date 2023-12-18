import React from 'react';
import { StyleSheet, View, Button, Image, Text,Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { CheckOut } from './screens/CheckOut.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';
import { Register } from './screens/Register.js';
import { Login } from './screens/Login.js';
import { AuthProvider } from './screens/context/AuthContext.js';
import { MyPro } from './screens/MyPro.js';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { TabNavigator } from './screens/TabNavigator.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Products = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel:false,
      tabBarStyle:{backgroundColor:'#2a2e7e',height:80},
    }}
    >
      <Tab.Screen name='Products' component={ProductsList}
        options={{
          tabBarLabel: 'Products',
          tabBarLabelStyle: {
            textAlign: 'center',
          },
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center'}} >
              <Image
                source={require('./assets/home2.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#ffffff' : '#748c94',
                }}
              />
            </View>
          ),
        }} />
      <Tab.Screen name="Cart" component={Cart}
      
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }} >
              <Image
                source={require('./assets/car.png')}
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? '#ffffff' : '#748c94',
                }}
              />
            </View>
          ),
        }} />
      <Tab.Screen name="MyPro" component={MyPro}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }} >
              <Image
                source={require('./assets/pro.png')}
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? '#ffffff' : '#748c94',
                }}
              />
            </View>
          ),
        }} />
    </Tab.Navigator>
  );
}

function App() {
  const platform=Platform.OS;
  if(platform === 'ios' || platform === 'android'){
  return (
    <Provider store={store}>
      <AuthProvider>
        <CartProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='Login' component={Login}
                options={({ route, navigation }) => ({
                  title: route.params,
                  headerTitleStyle: styles.headerTitle,
                })} />

              <Stack.Screen name='Register' component={Register}
                options={({ navigation }) => ({
                  title: 'Register',
                  headerTitleStyle: styles.headerTitle,
                })} />

              <Stack.Screen
                name="Products"
                component={Products}
                options={{ headerShown: false }}
              />
              <Stack.Screen name='ProductDetails' component={ProductDetails}
                options={({ navigation }) => ({
                  title: 'Product details',
                  headerTitleStyle: styles.headerTitle,
                })} />
              <Stack.Screen name='CheckOut' component={CheckOut}
                options={({ navigation }) => ({
                  title: 'CheckOut',
                  headerTitleStyle: styles.headerTitle,
                  headerRight: () => <CartIcon navigation={navigation} />
                })} />
            </Stack.Navigator>
          </NavigationContainer>
          </CartProvider>
      </AuthProvider>
    </Provider>
  );
}else{
  return (
    <Provider store={store}>
      <AuthProvider>
        <CartProvider>
  <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} 
          options={({ navigation }) => ({
            title: 'Login',
            headerTitleStyle: styles.headerTitle,
          })}/>
        <Stack.Screen name='Register' component={Register} 
          options={({ navigation }) => ({
            title: 'Register',
            headerTitleStyle: styles.headerTitle,
          })}/>
          <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
           <Stack.Screen name='CheckOut' component={CheckOut} 
          options={({ navigation }) => ({
            title: 'CheckOut',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
        </Stack.Navigator>
      </NavigationContainer>
       </CartProvider>
       </AuthProvider>
     </Provider>
   );
}
       
}

const buttonStyle = {
  borderRadius: 10,
};
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    // textAlign:'center',
    // alignItems:'center',
    color:'#2a2e7e',
    marginLeft:50,
    // backgroundColor: '#ffa500',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#ffa500',
  },
  my: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  mypro: {
    backgroundColor: '#ffa500',
    color: 'black',
    borderRadius: 20,
  },

});
export default App;
