import React, { Component } from 'react';
import { Alert,StyleSheet, Text, View,TextInput,Button  } from 'react-native'; 

export function CheckOut ({navigation}) {
  const getValues = ()=> {
    alert(first + second +' your order is placed');
  }

    const [first, setFirst] = React.useState('');
    const [second, setSecond] = React.useState('');
    const [addr, setAddr] = React.useState('');
    const [city, setCity] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [state, setState] = React.useState('');
    const [zipcode, setZipcode] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [card, setCard] = React.useState('');
    const [cardname, setName] = React.useState('');
    const [date, setDate] = React.useState('');
    const [code, setCode] = React.useState('');
    return (
      <View>
        <Text style={styles.summary}>Order Summary</Text>
        <View style={styles.container}>
        <View style={styles.left}>
          <View style={styles.name}>  
        <TextInput
         style={styles.names}
         onChangeText={setFirst}
         value={first}
         placeholder="FirstName"
          required />
       <TextInput
         style={styles.last}
         onChangeText={setSecond}
         value={second}
         placeholder="LastName"
          required />
          </View>
       <TextInput
         style={styles.input}
         onChangeText={setAddr}
         value={addr}
         placeholder="Address"
          required />
       <TextInput
         style={styles.input}
         onChangeText={setCity}
         value={city}
         placeholder="City"
          required />
         
       <TextInput
         style={styles.input}
         onChangeText={setCountry}
         value={country}
         placeholder="Country"
          required />
           <View style={styles.address}>
          <TextInput
         style={styles.names}
         onChangeText={setState}
         value={state}
         placeholder="State"
          required />
          <TextInput
         style={styles.last}
         onChangeText={setZipcode}
         value={zipcode}
         placeholder="Zipcode"
          required />
          </View>
          <TextInput
         style={styles.input}
         onChangeText={setPhone}
         value={phone}
         placeholder="PhoneNumber"
          required />
          </View>
          <View style={styles.right}>
           <TextInput
         style={styles.input}
         onChangeText={setCard}
         value={card}
         placeholder="CardNumber"
          required />
          <TextInput
         style={styles.input}
         onChangeText={setName}
         value={cardname}
         placeholder="CardName"
          required />
          <View style={styles.detail}>
          <TextInput
         style={styles.names}
         onChangeText={setDate}
         value={date}
         placeholder="Expired Date"
          required />
          <TextInput
         style={styles.last}
         onChangeText={setCode}
         value={code}
         placeholder="Security Code"
          required />
          </View>
         </View>
    </View> 
    <View style={styles.order}>
    <Button 
        title="Place Order"
        onPress={() => getValues()}
          />
        </View>
    </View>
    );
  }


const styles= StyleSheet.create({
  container:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width:'100%',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
   
    left:{
      width:'50%',
    },
  
    right:{
      width:'50%',
    },
  
    name:{
      flexDirection: 'row',
      justifyContent:'space-between',
      width:'100%',
    },
    names:{
      // alignSelf:'flex-end',
      height: 40, 
      marginLeft: 13,
      marginTop: 13,
      borderWidth: 1,
      paddingRight: 25,
      width:'43%',
    },
    last:{
      height: 40, 
      marginRight: 13,
      marginTop: 13,
      borderWidth: 1,
      paddingRight: 35,
      width:'43%',
    },
    address:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width:'100%',
    },
    summary:{
      textAlign:'center',
      fontWeight: 'bold',   
      fontSize: 20,  
    },
    order:{
      width:'100%',
      alignItems:'center',
    },
    detail:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width:'100%',
    }
  })


 

