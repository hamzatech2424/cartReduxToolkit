import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AbstractHeader = ({label,right,left}) => {

    const defaultLabel = label ? label : "text"

    return (
        <View style={styles.mainContainer}>
            <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              {left?left():false}
            </View>
            <View style={{ width: '60%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
             <Text style={styles.textOne}>{defaultLabel}</Text>
            </View>
            <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center',}}>
            {right?right():false}
            </View>
        </View>
    )
}

export default AbstractHeader

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: 55,
        backgroundColor: 'orange',
        flexDirection: "row"
    },
    textOne:{
        fontWeight:'bold',
        fontSize:18,
        color:'white'
    }
})