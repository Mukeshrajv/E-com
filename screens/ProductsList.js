import React, {useEffect, useState} from 'react';
import { View, Text,Image,  StyleSheet, FlatList,Platform } from 'react-native';
import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';

export function ProductsList ({navigation}) {
function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      key={"item"}
      keyExtractor={(item) =>"item"+ item.id}
      data={products}
      numColumns={ Platform.OS === 'web' ? 3 : 1}
      renderItem={renderProduct}
      />
  );
}
const styles = StyleSheet.create({
  productsList: {
    ...Platform.select({
      android: {
        flex:1,
        backgroundColor: '#eeeeee',
        width:'100%',
      },
      ios: {
        flex:1,
        backgroundColor: '#eeeeee',
        width:'100%',
      },
      default: {
        flex:1,
        backgroundColor: '#eeeeee',
        width:'100%',
      },
    }),
  },
  productsListContainer: {
    ...Platform.select({
      android: {
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        width:'100%',
      },
      ios: {
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        width:'100%',
      },
      default: {
        // other platforms, web for example
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        width:'67%',
      },
    }),
  },
});

 