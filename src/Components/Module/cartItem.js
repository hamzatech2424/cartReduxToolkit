import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseProductQuantity, decreaseProductQuantity, productRemoveFromCart } from '../../Store/Slices/cartSlice'
import { setStatusOfProductToAdded } from '../../Store/Slices/productsSlice'

const CartItem = ({ item }) => {

    const dispatch = useDispatch()

    const onPressIncrement = () => {
        dispatch(increaseProductQuantity(item))
    }

    const onPressDecrement = () => {
        if (item.quantity == 1) {
            dispatch(setStatusOfProductToAdded({ item, status: false }))
            dispatch(productRemoveFromCart(item))
        }
        else {
            if (item.quantity > 1) {
                dispatch(decreaseProductQuantity(item))
            }
        }
    }


    return (
        <View style={styles.mainContainer}>
            <View style={styles.viewOne}>
                <Image source={{ uri: item.thumbnail }} style={{ width: '100%', height: '100%', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ width: '90%', height: '90%', flexDirection: 'row' }} >
                    <View style={{ flex: 1, justifyContent: 'center' }} >
                        <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                        <Text>{`$${item.price}`}</Text>
                    </View>

                    <View style={{ width: 80, flexDirection: 'row', justifyContent: "center", alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={onPressIncrement}
                            style={styles.buttonView}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>+</Text>
                        </TouchableOpacity>

                        <View style={{ width: 30, justifyContent: "center", alignItems: 'center' }}>
                            <Text>{item.quantity}</Text>
                        </View>

                        <TouchableOpacity
                            onPress={onPressDecrement}
                            style={styles.buttonView}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>-</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 80,
        // backgroundColor:"rgba(242, 241, 239,0.5)",
        backgroundColor: "lightgrey",
        borderRadius: 10,
        marginTop: 10,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: 'lightgrey'

    },
    viewOne: {
        width: 100,
        height: "100%",
        // backgroundColor: 'yellow',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    buttonView: {
        width: 25,
        height: 25,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    }
})