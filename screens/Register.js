import React, { Component,useState,useContext,useEffect } from 'react';
import { TextInput,Text, Button,View, TouchableOpacity ,StyleSheet, ToastAndroid, Platform} from 'react-native';
import { AuthContext } from './context/AuthContext';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

  export function Register({navigation}) {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [nameError,setNameError]=useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const val =useContext(AuthContext);
    const {isLoading,register}= useContext(AuthContext);
    const encodedUsername = encodeURIComponent(name);
    const encodedPassword = encodeURIComponent(password);
    const encodedEmail = encodeURIComponent(email);
    const apiUrl = 'https://trackappt.desss-portfolio.com/dynamic/dynamicapi.php?action=create&table=mobile_app_users&name='+encodedUsername+'&email='+encodedEmail+'&password='+encodedPassword;

    const fetchdata =async  (name,email,password) =>   {
      if (!email && !password && !name) {
        setEmailError('Please enter your email');
        setPasswordError('Please enter your password');
        setNameError('Please enter your name');
      }
      // else if (!email) {
      //     setEmailError('Please enter your email');
      //   }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      //         setEmailError('Invalid email format');
      //       } 
      //   else if (!password) {
      //     setPasswordError('Please enter your password');
      //   }else if(password.length < 6){
      //     setPasswordError("Email should be minimum 6 characters");
      // }else if(!name){
      //   setNameError('Please enter your name');
      // }
      else{
      axios.post(apiUrl)
             .then((response) => {
              navigation.navigate('Login');
              const platform=Platform.OS;
              if(platform === 'ios' || platform === 'android'){
                   ToastAndroid.show('registration successfully', ToastAndroid.TOP,
                   backgroundColor="red",
                  textColor="white")

              }else{
              Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
              }
            
          })
          .catch((error) => {
            console.log('API Error', error);
          });
    
        };
      };
        useEffect(() => {
  
        // Trigger form validation when name, 
        // email, or password changes
        // validateForm();
    }, [name, email, password]);
  

    
    return (
    
       
      <View style={styles.container}>
        <View style={styles.contain}>
        <Text style={styles.header}>Sign Up</Text>
        <Text style={styles.name}>Name</Text>
          <TextInput
           style={styles.inputStyle}
          placeholder="Enter name"
          onChangeText={text => setName(text)} 
          onBlur={() => {
            if (!name) {
              setNameError('Please enter your password');
            } 
            else {
              setNameError('');
            }
          }}
          value={name}
        />
         {nameError.length > 0 &&
                  <Text style={styles.err}>{nameError}</Text>
                }
        {/* {name && nameError && <Text style={{ color: 'red' }}>{nameError}</Text>} */}
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
        {emailError.length > 0 &&
                  <Text style={styles.err}>{emailError}</Text>
                }
        {/* {email && emailError && <Text style={{ color: 'red' }}>{emailError}</Text>} */}
        <Text style={styles.pass}>Password</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)} 
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
          name="password"
        />
        {passwordError.length > 0 &&
                  <Text style={styles.err}>{passwordError}</Text>
                }
         {/* {password && passwordError && <Text style={{ color: 'red' }}>{passwordError}</Text>} */}
     <View style={styles.loginbtn}>
        <Button
           style={[styles.btn,{ opacity: isFormValid ? 1 : 0.5 }]}
          title="Submit"
         onPress={(Register) => {
          fetchdata(name,email,password);
         }}
        />
        </View>
        <View style={styles.reg}>
        <Text>Already have an account</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.txt}>Login</Text>
        </TouchableOpacity>
        </View>
      </View>
     </View>
    );
    };

export default Register;

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
  inputStyle: {
    // flex: 1,
    color: 'black',
    padding: 10,
    margin:5,
    borderWidth: 1,
    borderColor: '#dadae8',
    width: 300,
    // marginBottom:20,
  },
  loginbtn:{
    marginTop:30,
    width: 300,
    borderRadius:30,
  },
  err:{
    // marginBottom:20,  
  },
  btn:{
    margin:5,
    width: 300,
  },
  txt:{
    color: 'blue',
    marginLeft:60, 
  },
  reg:{
    marginTop:20,
  },
  error: {
    color: 'red',
    fontSize: 10,
    marginBottom: 12,
},
header:{
  fontSize:30,
  fontWeight:'bold',
  marginBottom:50,
  color:'#2196F3',
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
    },
    name:{
      fontSize:15,
      fontWeight:'bold',
      marginRight:260,
    }
});