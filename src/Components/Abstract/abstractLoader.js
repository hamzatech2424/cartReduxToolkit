import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'

const AbstractLoader = () => {
    return (
        <View>
            <ActivityIndicator
                color={"orange"}
                size={'large'}
            />
            <View style={{ marginTop: 5 }}>
                <Text style={{ fontStyle: "italic" }}>Loading....</Text>
            </View>
        </View>
    )
}

export default AbstractLoader

const styles = StyleSheet.create({})