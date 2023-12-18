import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput,Image } from 'react-native';
import reducer from '../reducer';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import image from '../assets/TEXASnewlogo.png';

LogBox.ignoreAllLogs();


export function MyPro({ navigation, route }) {
  // const { userData } = route.params;
  // const { name, email } = route.params;
  const [userData, setUserData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  useEffect(() => {
    const retrieveUserData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('loginData');
        
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          console.log('store',parsedData);
          setUserData(parsedData);
        }
      } catch (error) {
        console.error('Error retrieving stored data:', error);
      }
    };

    retrieveUserData();
  }, [name,email]);
  return (
   
    <View style={styles.container}>
      <View style={styles.profile}>
      <Image
       style={styles.tinyLogo}
       source={image}
      />
        {email && password && name && (
          <View style={styles.user}>
          {/* <View style={styles.logo}> */}
          <FontAwesome5 name="user-circle" size={24} color="black" />
          {/* </View> */}
          {/* <View  style={styles.data}> */}
            <Text style={styles.label}>Username:</Text>
            <Text style={styles.input}>{userData.name}</Text>
           
          
          {/* </View> */}
          {/* <View style={styles.logo}> */}
          <Fontisto name="email" size={24} color="black" />
          {/* </View> */}
          {/* <View  style={styles.data}> */}
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.input}>{userData.email}</Text>
           {/* </View> */}
          
           {/* </View> */}
          <Text style={styles.button}>My Orders</Text>
           </View> 
        )};
      
     
       {/* <Text>{JSON.stringify(postArray)}</Text> */}
      {/* <FlatList data={postArray} renderItem={({item}) => {
// return <Text>{item.body}</Text>
// }}/> */}
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    // color: '#2196F3',
    fontSize:20,
    marginLeft:10,
  },
  input: {
    width:300,
    height: 50,
    margin: 12,
    fontSize:25,
    padding: 10,
  },
  heading:{
    // color: '#2196F3',
    fontSize:35,
    marginBottom:50,
  },
  profile:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:350,
    marginVertical:50,
    marginBottom:150,
  },
  tinyLogo:{
    width: 150,
    height: 150,
    resizeMode:'contain',
  },
  user:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  logo:{
    padding:20,
  }
});

// export default MyPro;