import { StatusBar, StyleSheet, Text, View, NativeModules, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import ProductItem from '../Components/Module/productItem';
import ProductController, { useAllProducts } from '../Controllers/productController';
import AbstractHeader from '../Components/Abstract/abstractHeader';
import { Colors } from '../theme';
import { navigate } from '../Navigation/mainNavigation';
import AbstractLoader from '../Components/Abstract/abstractLoader';
import { useSelector } from 'react-redux';

const { StatusBarManager } = NativeModules;

const HomeScreen = () => {

    const allProducts = useAllProducts()
    const cartItems = useSelector((state) => state.cart.cartItems)

    useEffect(() => {
        ProductController.handleLoadProducts((response) => {
            console.log(response, 'HomeScreen')
        })
    }, [])

    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor={"transparent"} barStyle={"light-content"} translucent={true} />
            <View style={{ height: StatusBarManager.HEIGHT, backgroundColor: 'orange' }} />


            <AbstractHeader label={"We Shop"}
                right={() =>allProducts.length > 0 ? (
                    <TouchableOpacity
                        onPress={()=>cartItems.length > 0 ? navigate('Cart'):false}
                        activeOpacity={0.8}
                        style={{ padding: 7, borderRadius: 10, backgroundColor: Colors.greyPrimary }}>
                        <Text style={{ color: 'black' }}>Cart <Text style={{color:'grey'}}>{cartItems.length >0 ?cartItems.length:""}</Text></Text>
                    </TouchableOpacity>
                ):false}
            />


            <View style={{ width: "90%", height: '100%', alignSelf: "center" }} >
                {allProducts.length > 0 ?
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={allProducts}
                        numColumns={2}
                        horizontal={false}
                        renderItem={({ item }) => {
                            return (
                                <ProductItem item={item} />
                            )
                        }}
                        ListFooterComponent={() => (
                            <View style={{ width: "100%", height: 100 }} />
                        )}
                        ListHeaderComponent={() => (
                            <View style={{ width: '100%', height: 20 }} />
                        )}
                    />
                    :
                    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <View style={{ marginBottom: 200 }}>
                           <AbstractLoader />
                        </View>
                    </View>
                }

            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },

})