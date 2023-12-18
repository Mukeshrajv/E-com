import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, Platform, Pressable } from 'react-native';
import { CartContext } from '../CartContext';
import { AntDesign } from '@expo/vector-icons';
import { getProduct } from '../services/ProductsService.js';
export function Cart({ navigation,route }) {
  const { items, setItems,getItemsCount, getTotalPrice ,price,isCartItem,addItemToCart} = useContext(CartContext);
  const [item, setItem] = useState([]);
  // const { productId } = route.params;
  const [product, setProduct] = useState({});
 
  // const { addItemToCart } = useContext(CartContext);

  
  function Totals() {
    let [total, setTotal] = useState(0);
    //mukesh
    // cart screen
    // return (
    //   <View style={styles.cartLineTotal}>
    //     {/* <View style={styles.lineLeft}>
    //        <Text style={styles.pricetotal}> Total $ {total}</Text>
    //       </View> */}
    //     {/* <View style={styles.lineRight}>
    //           <Text style={styles.price}>Sub Total - $ {total}</Text>
    //           <View >
    //           <Button 
    //           title="Proceed"
    //            onPress={() => {
    //          navigation.navigate('CheckOut')}}
    //             />
    //             </View>
    //         </View> */}
    //   </View >
    // );
  }

  useEffect(() => { 
    setTotal(getTotalPrice());
    // setProduct(getProduct(productId));
  });
  function onAddToCart() {
    // const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qty: 1,
              product,
              totalPrice: product.price ,
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalPrice += product.price;
            }
            return item;
          });
      }
    });
  }


  function renderItem({ item }) {
    return (
      <View style={styles.cartLine}>
        <View style={styles.icon}>
          <Image style={styles.image} source={item.product.image} />
          <View style={styles.increment}>
            <Pressable >
              <AntDesign name="minuscircleo" size={24} color="black" />
            </Pressable>
            <Text>{item.qty}</Text>
            <Pressable  onPress={onAddToCart}>
              <AntDesign name="pluscircleo" size={24} color="black" />
            </Pressable>
          </View>
        </View>
        <View style={styles.contain}>
          <Text style={styles.line}>{item.product.name} x {item.qty}</Text>
          <Text style={styles.line}>$ {item.totalPrice}</Text>
        </View>
        <View style={styles.delete}>
          <AntDesign name="delete" size={24} color="black" />
        </View>
      </View>
    );
  }
  let [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(getTotalPrice());
  });

  return (
    <>
      <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.product.id.toString()}
        ListFooterComponent={Totals}
      />
      <View style={styles.lineRight}>
        <View>
          <Text style={styles.price}>Sub Total - $ {total}</Text>
        </View>
        <View >
          <Text style={styles.text}
            onPress={() => {
              navigation.navigate('CheckOut')
            }}
          >Proceed</Text>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  cartLine: {
    ...Platform.select({
      android: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        // alignSelf: 'flex-start',
        marginTop: 10,
        backgroundColor: '#f2f2f7',
        borderRadius: 16,
        padding: 10,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
          height: 0,
          width: 0,
        },
      },
      ios: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'flex-start',
        // borderTopWidth: 1,
        marginTop: 10,
        backgroundColor: '#f2f2f7',
        borderRadius: 16,
        padding: 10,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
          height: 0,
          width: 0,
        },
      },
      default: {
        flexDirection: 'row',
        width: '50%',
        alignSelf: 'flex-start',
        borderTopWidth: 1,
        backgroundColor: 'white',
        padding: 10,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
          height: 0,
          width: 0,
        },
      }
    })
  },
  cartLineTotal: {
    ...Platform.select({
      android: {
       
        width: '100%',
      },
      ios: {
      
        width: '100%',
      },
      default: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      }
    })
  },
  lineTotal: {
    fontWeight: 'bold',
  },
  lineLeft: {
    ...Platform.select({
      android: {

        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        width: '100%',
        fontSize: 20,
        lineHeight: 40,
        // marginTop:30,
        color: '#333333',
        backgroundColor: 'white',
        padding: 10,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
          height: 0,
          width: 0,
        },
      },
      ios: {
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        width: '100%',
        fontSize: 20,
        lineHeight: 40,
        // marginTop:30,
        color: '#333333',
        backgroundColor: 'white',
        padding: 10,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
          height: 0,
          width: 0,
        },
      },
      default: {
        width: '50%',
        fontSize: 20,
        lineHeight: 40,
        color: '#333333',
        backgroundColor: 'white',
        padding: 10,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
          height: 0,
          width: 0,
        },
      }
    })
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    fontSize: 20,
    padding:10,
    // lineHeight: 40,
  },
  lineRight: {
    ...Platform.select({
      android: {
        // flex: 0, 
        // flexShrink: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        fontSize: 20,
        lineHeight: 50,
        color: '#333333',
        marginRight: '10%',
        marginTop: 30,
        backgroundColor: 'white',
        padding: 10,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
          height: 0,
          width: 0,
        },
      },
      ios: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        fontSize: 20,
        lineHeight: 50,
        color: '#333333',
        marginRight: '10%',
        marginTop: 30,
        backgroundColor: 'white',
        padding: 10,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
          height: 0,
          width: 0,
        },
      },
      default: {
        width: '30%',
        fontSize: 20,
        lineHeight: 50,
        color: '#333333',
        marginRight: '10%',
        backgroundColor: 'white',
        padding: 10,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
          height: 0,
          width: 0,
        },
      }
    })
  },
  total: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#333333',
    // textAlign: 'right',
  },
  pricetotal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 130,
  },
  itemsList: {
    backgroundColor: 'white',
    flex: 1,
  },
  itemsListContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  proceed: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: '50%',
    borderTopWidth: 1,
    backgroundColor: 'white',
    padding: 10,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
 
  text: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: '#ce2226',
    padding: 15,
    borderRadius: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 8,
    color: '#2a2e7e',
  },
  infoContainer: {
    ...Platform.select({
      android: {
        margin: 10,
        width: '60%',
        height: 'auto',
      },
    }),
  },
  icon: {
    width: '30%',
    
  },
  increment: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
  delete: {
    width: '10%',
    marginTop:90,
  },
  contain:{
    width: '60%',
  },
});