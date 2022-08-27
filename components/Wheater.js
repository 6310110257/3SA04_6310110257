import React from "react";
import { Text, ImageBackground, StyleSheet } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
    const [forecastInfoo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    }) 

    return (
        <View>
            <ImageBackground source={require('../pic1.jpg')} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%'
    },
    view: {
        alignItems: 'center',
        backgroundColor: 'black',
        opacity: 0.5,
        width: '100%',
        height: '30%'
    },
    fonts: {
        marginTop: 10,
        fontSize: 20,
    }
});
