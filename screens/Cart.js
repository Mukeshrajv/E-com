import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet,Image, } from 'react-native';
import { CartContext } from '../CartContext';

export function Cart ({navigation}) {
const {items, getItemsCount, getTotalPrice} = useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
       <View  style={styles.cartLineTotal}>
        <View style={styles.lineLeft}>
          {/* <Text style={styles.lineTotal}>Total</Text>
          <Text style={styles.lineTotal}>$ {total}</Text> */}
           <Text style={styles.pricetotal}> Total $ {total}</Text>
          </View>
          <View style={styles.lineRight}>
              <Text style={styles.price}> Total $ {total}</Text>
              <View >
              <Button 
              title="Proceed to Checkout"
               onPress={() => {
             navigation.navigate('CheckOut')}}
                />
                </View>
            </View>
       </View >
    );
  }

  function renderItem({item}) {
    return (
       <View style={styles.cartLine}>
        <Image style={styles.image} source={item.product.image} />
          <Text style={styles.line}>{item.product.name} x {item.qty}</Text>
          <Text style={styles.line}>$ {item.totalPrice}</Text>
       </View>
    );
  }

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
  );
}
const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row',
    width:'50%',
    alignSelf: 'flex-start',
    borderTopWidth: 1,
    backgroundColor: 'white',
    padding:10,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  cartLineTotal: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'100%',
    // backgroundColor: 'white',
    // padding:10,
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    // shadowColor: 'black',
    // shadowOffset: {
    //   height: 0,
    //   width: 0,
    // },
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width:'50%',
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333' ,
    backgroundColor: 'white',
    padding:10,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  line:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width:'50%',
    fontSize: 20, 
    lineHeight: 40, 
  },
  lineRight: {
    width:'30%',
    fontSize: 20, 
    lineHeight: 50, 
    color:'#333333',
    marginRight:'10%',
    backgroundColor: 'white',
    padding:10,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  total: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
  },
  pricetotal:{
    fontSize: 20, 
    fontWeight: 'bold',
  },
  itemsList: {   
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  image:{
    width:'25%',
    height:100,
    resizeMode:'contain',
  },
  proceed:{
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width:'50%',
    borderTopWidth: 1,
    backgroundColor: 'white',
    padding:10,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  price:{
    flexDirection: 'row',
    alignSelf: 'center',
    fontWeight: 'bold', 
  }
 
});