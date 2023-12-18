import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CartContext } from '../CartContext';
export function CartIcon({navigation}) {
  const {getItemsCount} = useContext(CartContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('Cart');
        }}
      >Cart ({getItemsCount()})</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: 'orange',
    height: 37,
    padding: 10,
    borderRadius: 37 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  MyPro:{
    backgroundColor: '#ffa500',

  }
});