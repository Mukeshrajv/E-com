import React, { Component, useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button, Platform } from 'react-native';
import { ScrollView } from 'react-native';

export function CheckOut({ navigation }) {
  const handleSubmit = () => {
    if (!first || !second || !addr || !city || !country || !state || !zipcode || !phone || !card || !cardname || !date || !code) {
      alert("please!!! Fill the Empty field ")
      // setFirstError('Please enter your firstname');
      // setSecondError('Please enter your lastname');
      // setAddrError('Please enter address');
      // setCityError('Please enter your city');
      // setCountryError('Please enter country');
      // setStateError('Please enter state');
      // setZipcodeError('Please enter zipcode');
      // setPhoneError('Please enter phonenumber');
      // setCardError('Please enter your number');
      // setNameError('Please enter cardname');
      // setDateError('Please enter date');
      // setCodeError('Please enter your code');
    }
    else if (first || second || addr || city || country || state || zipcode || phone || card || cardname || date || code){
      // const getValues = () => {
        alert(first + second + ' your order is placed');
      // }
    }
    // if (isFormValid) {

    //   // Form is valid, perform the submission logic
    //   console.log('Form submitted successfully!');
    // } else {

    //   // Form is invalid, display error messages
    //   console.log('Form has errors. Please correct them.');
    // }
  };
  // const getValues = () => {
  //   alert(first + second + ' your order is placed');
  // }

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
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const [firstError, setFirstError] = React.useState('');
  const [secondError, setSecondError] = React.useState('');
  const [addrError, setAddrError] = React.useState('');
  const [cityError, setCityError] = React.useState('');
  const [countryError, setCountryError] = React.useState('');
  const [stateError, setStateError] = React.useState('');
  const [zipcodeError, setZipcodeError] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');
  const [cardError, setCardError] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [dateError, setDateError] = React.useState('');
  const [codeError, setCodeError] = React.useState('');
  useEffect(() => {


    validateForm();
  }, [first, second, addr, city, country, state, zipcode, phone, card, cardname, date, code]);

  const validateForm = () => {
    let errors = {};


    // Set the errors and update form validity
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  // const handleSubmit = () => {
  //   if (!first && !second && !addr && !city && !country && !state && !zipcode && !phone && !card && !cardname && !date && !code) {
  //     setFirstError('Please enter your firstname');
  //     setSecondError('Please enter your lastname');
  //     setAddrError('Please enter address');
  //     setCityError('Please enter your city');
  //     setCountryError('Please enter country');
  //     setStateError('Please enter state');
  //     setZipcodeError('Please enter zipcode');
  //     setPhoneError('Please enter phonenumber');
  //     setCardError('Please enter your number');
  //     setNameError('Please enter cardname');
  //     setDateError('Please enter date');
  //     setCodeError('Please enter your code');
  //   }else{
  //   const getValues = () => {
  //     alert(first + second + ' your order is placed');
  //   }
  //   }
  // if (isFormValid) {

  //   // Form is valid, perform the submission logic
  //   console.log('Form submitted successfully!');
  // } else {

  //   // Form is invalid, display error messages
  //   console.log('Form has errors. Please correct them.');
  // }
  // };
  return (
    <ScrollView>
      <Text style={styles.summary}>Order Summary</Text>
      <View style={styles.container}>
        <View style={styles.left}>
          <View style={styles.name}>
            <View style={styles.one}>
              <TextInput
                style={styles.names}
                onChangeText={text => setFirst(text)}
                onBlur={() => {
                  if (!first) {
                    setFirstError('Please enter your firstname');
                  }
                  else {
                    setFirstError('');
                  }
                }}
                value={first}
                placeholder="FirstName"
                required />
              <View>
                {firstError.length > 0 &&
                  <Text style={styles.err}>{firstError}</Text>
                }
              </View>
            </View>
            <View style={styles.two}>
              <TextInput
                style={styles.last}
                onChangeText={text => setSecond(text)}
                onBlur={() => {
                  if (!second) {
                    setSecondError('Please enter your lastname');
                  }
                  else {
                    setSecondError('');
                  }
                }}
                value={second}
                placeholder="LastName"
                required />
              <View>
                {secondError.length > 0 &&
                  <Text style={styles.err}>{secondError}</Text>
                }
              </View>
            </View>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={text => setAddr(text)}
            onBlur={() => {
              if (!addr) {
                setAddrError('Please enter address');
              }
              else {
                setAddrError('');
              }
            }}
            value={addr}
            placeholder="Address"
            required />
          <View>
            {addrError.length > 0 &&
              <Text style={styles.err}>{addrError}</Text>
            }
          </View>

          <TextInput
            style={styles.input}
            onChangeText={text => setCity(text)}
            onBlur={() => {
              if (!city) {
                setCityError('Please enter your city');
              }
              else {
                setCityError('');
              }
            }}
            value={city}
            placeholder="City"
            required />
          <View>
            {cityError.length > 0 &&
              <Text style={styles.err}>{cityError}</Text>
            }
          </View>

          <TextInput
            style={styles.input}
            onChangeText={text => setCountry(text)}
            onBlur={() => {
              if (!country) {
                setCountryError('Please enter country');
              }
              else {
                setCountryError('');
              }
            }}
            value={country}
            placeholder="Country"
            required />
          <View>
            {countryError.length > 0 &&
              <Text style={styles.err}>{countryError}</Text>
            }
          </View>

          <View style={styles.address}>
            <View style={styles.one}>
              <TextInput
                style={styles.names}
                onChangeText={text => setState(text)}
                onBlur={() => {
                  if (!state) {
                    setStateError('Please enter state');
                  }
                  else {
                    setStateError('');
                  }
                }}
                value={state}
                placeholder="State"
                required />
              <View>
                {stateError.length > 0 &&
                  <Text style={styles.err}>{stateError}</Text>
                }
              </View>
            </View>
            <View style={styles.two}>
              <TextInput
                style={styles.last}
                onChangeText={text => setZipcode(text)}
                onBlur={() => {
                  if (!zipcode) {
                    setZipcodeError('Please enter zipcode');
                  }
                  else {
                    setZipcodeError('');
                  }
                }}
                value={zipcode}
                placeholder="Zipcode"
                required />
              <View>
                {zipcodeError.length > 0 &&
                  <Text style={styles.err}>{zipcodeError}</Text>
                }
              </View>
            </View>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={text => setPhone(text)}
            onBlur={() => {
              if (!phone) {
                setPhoneError('Please enter phonenumber');
              }
              else {
                setPhoneError('');
              }
            }}
            value={phone}
            placeholder="PhoneNumber"
            required />
          <View>
            {phoneError.length > 0 &&
              <Text style={styles.err}>{phoneError}</Text>
            }
          </View>

        </View>
        <View style={styles.right}>
          <TextInput
            style={styles.input}
            onChangeText={text => setCard(text)}
            onBlur={() => {
              if (!card) {
                setCardError('Please enter your number');
              }
              else {
                setCardError('');
              }
            }}
            value={card}
            placeholder="CardNumber"
            required />
          <View>
            {cardError.length > 0 &&
              <Text style={styles.err}>{cardError}</Text>
            }
          </View>

          <TextInput
            style={styles.input}
            onChangeText={text => setName(text)}
            onBlur={() => {
              if (!cardname) {
                setNameError('Please enter cardname');
              }
              else {
                setNameError('');
              }
            }}
            value={cardname}
            placeholder="CardName"
            required />
          <View>
            {nameError.length > 0 &&
              <Text style={styles.err}>{nameError}</Text>
            }
          </View>

          <View style={styles.detail}>
            <View style={styles.one}>
              <TextInput
                style={styles.names}
                onChangeText={text => setDate(text)}
                onBlur={() => {
                  if (!date) {
                    setDateError('Please enter date');
                  }
                  else {
                    setDateError('');
                  }
                }}
                value={date}
                placeholder="Expired Date"
                required />
              <View>
                {dateError.length > 0 &&
                  <Text style={styles.err}>{dateError}</Text>
                }
              </View>
            </View>
            <View style={styles.two}>
              <TextInput
                style={styles.last}
                onChangeText={text => setCode(text)}
                onBlur={() => {
                  if (!code) {
                    setCodeError('Please enter your code');
                  }
                  else {
                    setCodeError('');
                  }
                }}
                value={code}
                placeholder="Security Code"
                required />
              <View>
                {codeError.length > 0 &&
                  <Text style={styles.err}>{codeError}</Text>
                }
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.order}>
        <Button
          style={styles.btn}
          title="Place Order"
          // disabled={!isFormValid}
          onPress={handleSubmit}
        />
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        width: '100%',
      },
      default: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
    }),
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  name: {
    ...Platform.select({
      android: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      default: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
      },
    }),
  },
  left: {
    ...Platform.select({
      android: {
        width: '100%',
      },
      default: {
        width: '50%',
      },
    }),

  },

  right: {
    ...Platform.select({
      android: {
        width: '100%',
      },
      default: {
        width: '50%',
      },
    }),

  },

  name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  names: {
    // alignSelf:'flex-end',
    height: 40,
    marginLeft: 13,
    marginTop: 13,
    borderWidth: 1,
    paddingRight: 25,
    // width:'43%',
    ...Platform.select({
      android: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        width: '100%',
      },
      default: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        width: '100%',
      },
    }),
  },
  last: {
    height: 40,
    marginRight: 15,
    marginTop: 13,
    borderWidth: 1,
    paddingRight: 35,
    // width:'43%',
    ...Platform.select({
      android: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        width: '100%',
      },
      default: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        width: '100%',
      },
    }),
  },
  one: {
    width: "45%",
  },
  two: {
    width: "45%",
    marginRight: 14,
  },
  address: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  summary: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  order: {
    marginTop:20,
    width: '100%',
    alignItems: 'center',
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  btn: {
    marginTop: 25,
    width: 250,
  },
  err: {
    color: 'red',
    fontSize: 10,
    marginLeft: 12,
  },
})




