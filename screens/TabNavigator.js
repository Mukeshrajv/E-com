import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Home = () => (
  <NavigationContainer>
    <Tab.Navigator>
         <Tab.Screen name="Products" component={ProductsList} />
        <Tab.Screen name="Cart" component={Cart} />
         <Tab.Screen name="MyPro" component={MyPro} />
    </Tab.Navigator>
  </NavigationContainer>
);



 