import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity,Platform} from 'react-native';
export function Product({name, price, image, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.productlist}>
      <Image
        style={styles.thumb}
        source={image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={2}>{name}</Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  productlist:{
    ...Platform.select({
      android:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  ios:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  }
}),
  },
  card: {
    ...Platform.select({
      android:{
    backgroundColor: '#f2f2f7',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 7,
    marginHorizontal: 7,
    width:'95%',
    padding:10,
    // height: 120,
  },
  ios:{
    backgroundColor: '#f2f2f7',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 7,
    marginHorizontal: 7,
    width:'95%',
    padding:10,
    height: 120,
  },
  default:{
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
    marginVertical: 10,
    marginHorizontal: 7,
    width:'48%',
  }
}),
},
  thumb: {
    ...Platform.select({
      android:{
    height: 100,
    borderBottomLeftRadius:16,
    borderBottomRightRadius:16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '30%',
    resizeMode:'contain',
  },
  ios:{
    height: 100,
    backgroundColor: 'white',
    borderBottomLeftRadius:16,
    borderBottomRightRadius:16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '30%',
    resizeMode:'contain',
  },
  default:{
    height: 250,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
    resizeMode:'contain',
  }
}),
  },
  infoContainer: {
    ...Platform.select({
      android:{
    margin:10,
    width:'60%',
    height:'auto',
  },
  ios:{
    margin:10,
    width:'60%',
    height:'auto',
  },
  default:{
    padding: 20,
    margin:20,
  }
}),
  },
  name: {
    ...Platform.select({
      android:{
    fontSize: 18,
    fontWeight: 'bold',
    color:"#8E44AD",
    // numberOfLines:{2}
  },
  ios:{
    fontSize: 18,
    fontWeight: 'bold',
    color:"#8E44AD",
    numberOfLines:2,
  },
  default:{
    fontSize: 15,
    fontWeight: 'bold',
  }
}),
},
  price: {
    ...Platform.select({
      android:{
    fontSize: 20,
    fontWeight: '600',
    marginTop:20,
    color:"#8E44AD",
    // marginBottom: 8,
  },
  ios:{
    fontSize: 20,
    fontWeight: '600',
    marginTop:20,
    color:"#8E44AD",
    // marginBottom: 8,
  },
  default:{
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
}),
},
});