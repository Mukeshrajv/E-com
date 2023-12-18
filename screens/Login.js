import React, { Component, useContext, useState, useEffect } from 'react';
import { TextInput, Text, Button, View, TouchableOpacity, StyleSheet, useNavigation, Alert,Platform } from 'react-native';
import { AuthContext } from './context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useDispatch } from 'react-redux';
export function Login({ route, navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const val = useContext(AuthContext);
  const { isLoading, login } = useContext(AuthContext);
  const encodedPassword = encodeURIComponent(password);
  const encodedEmail = encodeURIComponent(email);
  const encodedUsername = encodeURIComponent(name);
  const [userData, setUserData] = useState(null);
  const [apiResponseData, setApiResponseData] = useState([]);
  const apiUrl = 'https://trackappt.desss-portfolio.com/dynamic/dynamicapi.php?action=read&table=mobile_app_users&email=' + encodedEmail + '&password=' + encodedPassword;
  const valid = async (email, password) => {
    if (!email && !password) {
      setEmailError('Please enter your email');
      setPasswordError('Please enter your password');
    }
    
      else{
      
    try {
      const response = await axios.post(apiUrl);
      const userData = response.data;

      // Store login data in AsyncStorage
      await AsyncStorage.setItem('loginData', JSON.stringify(userData.data[0]));

      // Navigate to Profile screen
      navigation.navigate('Products');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid email or password.');
    }
  }
  };


  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <Text style={styles.header}>Login</Text>
        <Text style={styles.mail}>Email</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter email"
        onChangeText={text => setEmail(text)} 
        onBlur={() => {
          if (!email) {
            setEmailError('Please enter your email');
          } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            setEmailError('Invalid email format');
          }
          else {
            setEmailError('');
          }
        }}
        value={email}
      />
      <View>
                {emailError.length > 0 &&
                  <Text style={styles.err}>{emailError}</Text>
                } 
                </View>
                 <Text style={styles.pass}>Password</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter password"
        onChangeText={text=>setPassword(text)}
        onBlur={() => {
          if (!password) {
            setPasswordError('Please enter your password');
          } else if(password.length < 6){
            setPasswordError('Email should be minimum 6 characters');
          }
          else {
            setPasswordError('');
          }
        }}
        value={password}
      />
      <View>
    {passwordError.length > 0 &&
            <Text style={styles.err}>{passwordError}</Text>
          }
          </View>
<View style={styles.loginbtn}>
      <Button 
      title="Login"
        style={styles.btn}
        onPress={(Login) => {
          valid(email, password);
        }}
      />
      </View>
       <View style={styles.reg}>
      <Text>Don't have an account</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.txt} >Sign Up</Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
  );
};


export default Login;

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      },
      default:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#6290E0',
      }
    })
  },
  inputStyle: {
    color: 'black',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#dadae8',
    width: 300,
    // marginBottom:20,  
  },
  err:{
    // marginBottom:20,  
  },
  btn: {
   height:100,
  },
  loginbtn:{
    marginTop:30,
    width: 300,
    borderRadius:30,
  },
  txt: {
    color: 'blue',
    marginLeft:40,
    // marginTop:20,
  },
  reg:{
    marginTop:20,
  },
  error: {
    color: 'red',
    fontSize: 10,
    marginBottom: 12,
  },
  contain:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:350,
    backgroundColor:'#FFFFFF',
    marginVertical:50,
    borderRadius:10,
    marginBottom:150,
  },
  header:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:50,
    color:'#2196F3'
  },
  pass:{
    fontSize:15,
    fontWeight:'bold',
    marginRight:240,
    fontStyle:'normal',
    },
    mail:{
      fontSize:15,
      fontWeight:'bold',
      marginRight:260,
      }
});
