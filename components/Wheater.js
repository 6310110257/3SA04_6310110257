import React, { useEffect, useState } from "react";
import { Text, ImageBackground, StyleSheet, View } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    });
    
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=a188eeb0d82b2fa28abaef697ea77d07`)
        .then((response) => response.json())
        .then((json) => {
        setForecastInfo({
                main: json.weather[0].main,
                description: json.weather[0].description,
                temp: json.main.temp});
        })
        .catch((error) => {console.warn(error);}); } }, [props.zipCode])
       

    return (
        <View>
            <ImageBackground source={require('../pic2.jpg')} style={styles.backdrop}>
            <View style={styles.view}>
                <Text style={styles.fonts}>Zip Code : {props.zipCode}</Text>
                <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
    flexDirection: 'column',
    justifyContent:'center',
    width: '100%',
    height: '100%'
    },
    view: {
        alignItems: 'center',
        opacity: 1.0,
        width: '100%',
        height: '30%'
    },
    fonts: {
        marginTop: 10,
        fontSize: 30,
    }
});
