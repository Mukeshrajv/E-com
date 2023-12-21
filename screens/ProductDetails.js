import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  Button, 
  StyleSheet
  } from 'react-native';
import { getProduct } from '../services/ProductsService.js';
import { CartContext } from '../CartContext';
import { increment,decrement } from '../Action/counter.js';
import { connect } from 'react-redux';

export function ProductDetails({route}) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(getProduct(productId));
  });

  function onAddToCart() {
    addItemToCart(product.id);
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.view}>
        <Image
          style={styles.image}
          source={product.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <View style={styles.contain}>
            <View>
          <Text style={styles.pricelabel}>Price</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          </View> 
          <View>  
          <Text style={styles.text} 
        onPress={onAddToCart}
      >Add to Cart</Text>
            </View>
          </View>
          <Text style={styles.pricelabel}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const mapState=(state)=>({
  qty:state.counter.qty,
});

const mapDispatch={
increment,
decrement,
};
const styles = StyleSheet.create({
  view:{
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%',
    resizeMode:'contain',
  },
  infoContainer: {
    padding: 16,
    backgroundColor:'#FFFFFF',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom:35,
    color:'#2a2e7e',
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color:'#2a2e7e',
  },
  description: {
    fontSize: 20,
    fontWeight: '400',
    color:'#2a2e7e',
    marginBottom: 16,
  },
  contain:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:25,
  },
  pricelabel:{
    fontSize: 18,
    color:'#ce2226',
  },
  text: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize:20,
    backgroundColor:'#ce2226',
    padding:15,
    borderRadius:20,
  },
});
export default connect(mapState,mapDispatch) (ProductDetails);