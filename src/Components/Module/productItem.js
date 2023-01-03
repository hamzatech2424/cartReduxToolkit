import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../theme'
import { setStatusOfProductToAdded } from '../../Store/Slices/productsSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Store/Slices/cartSlice'

const SW = Dimensions.get("window").width
const SH = Dimensions.get("window").height

const CARD_HEIGHT = 180
const CARD_WIDTH = SW * 0.42



const ProductItem = ({ item }) => {

  const defaultPrice = item?.price ? item?.price : "00"
  const dispatch = useDispatch()


  const onPressAdd = () => {
    dispatch(setStatusOfProductToAdded({item,status:true}))
    dispatch(addToCart(item))
  }


  return (
    <View style={[{ width: CARD_WIDTH }, styles.mainContainer]}>
      <View style={styles.viewOne}>
        <Image source={{ uri: item.thumbnail }} style={{ width: '100%', height: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
      </View>
      <View style={{ flex: 1, backgroundColor: Colors.greyPrimary, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>

        <View style={styles.viewTwo} >
          <Text>{((item?.title).length > 12) ?
            (((item.title).substring(0, 12 - 3)) + '...') :
            item.title}
          </Text>
          <Text>{`$ ${defaultPrice}`}</Text>
        </View>

        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', }}>
          {item.addedToCart ?
            <TouchableOpacity
              disabled={true}
              style={[styles.buttonView,{backgroundColor:'lightgrey'}]}
            >
              <Text style={{ color: 'white' }}>ADDED</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
              style={styles.buttonView}
              onPress={onPressAdd}
            >
              <Text style={{ color: 'white' }}>ADD</Text>
            </TouchableOpacity>
          }
        </View>

      </View>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 10,
    height: CARD_HEIGHT,
    // backgroundColor: 'pink',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginBottom: 30,
    marginRight: CARD_WIDTH / 7.3
  },
  viewOne: {
    width: '100%',
    height: 120,
    backgroundColor: "rgba(242, 241, 239,0.1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  viewTwo: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 5
  },
  buttonView: {
    width: 60,
    height: 25,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: 'orange'
  }

})