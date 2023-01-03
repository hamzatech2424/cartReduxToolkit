import { StyleSheet, Text, View, NativeModules, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'
import AbstractHeader from '../Components/Abstract/abstractHeader';
import BackArrowSvg from '../Assets/Icons/backArrowSvg';
import { goBack } from '../Navigation/mainNavigation';
import CartItem from '../Components/Module/cartItem';
import { useSelector } from 'react-redux';

const { StatusBarManager } = NativeModules;

const CartScreen = () => {

  const cartItems = useSelector((state) => state.cart.cartItems)
  const [totalAmount,setTotalAmount] = useState(0)

  const calculatingAmount = () => {
    let totalAmount = 0
    cartItems.forEach((cartItem) => {
      totalAmount += cartItem.price * cartItem.quantity
    })
    setTotalAmount(totalAmount) 
  }

  useEffect(()=>{
    calculatingAmount()
  },[cartItems])


  return (
    <View style={styles.mainContainer} >
      <StatusBar backgroundColor={"transparent"} barStyle={"light-content"} translucent={true} />
      <View style={{ height: StatusBarManager.HEIGHT, backgroundColor: 'orange' }} />
      <AbstractHeader label={"Cart"}
        left={() => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => goBack()}
          >
            <BackArrowSvg />
          </TouchableOpacity>
        )}
      />

      <View style={{ flex: 1 }} >
        <View style={{ width: '90%', alignSelf: 'center' }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            {cartItems.map((item,index) => {
              return (
                <CartItem key={index} item={item} />
              )
            })}
            <View style={{width:'100%',height:10}} />
          </ScrollView>
        </View>
      </View>

      <View style={{ height: 80, width: '100%', backgroundColor: 'orange' }}>
        <View style={{ width: '90%', alignSelf: 'center' }}>

          <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: "row", marginTop: 10 }}>
            <Text style={{ color: 'white' }}>Total Items:</Text>
            <Text style={{ color: 'white' }}>{cartItems.length}</Text>
          </View>

          <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: "row" }}>
            <Text style={{ fontSize: 17, color: 'white' }}>Total Amount:</Text>
            <Text style={{ fontSize: 17, color: 'red' }}>${totalAmount}</Text>
          </View>

        </View>
      </View>


    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
})