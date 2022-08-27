import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Forecast(props) {
    return (
        <View  style={styles.div}>
            <Text style={styles.main}>{props.main}</Text>
            <Text >{props.description}</Text>
            <Text>{props.temp}</Text>
            <Text style={styles.temp}>°C</Text>
        </View>
    );
   }

   const styles = StyleSheet.create({
    div: {
    flexDirexction: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%'
    },

    main: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 26,
    },

    temp: {
        fontSize : 26,
        fontWeight : 'bold',
    }

});
   