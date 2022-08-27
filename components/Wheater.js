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
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
    alignItems: 'center',
    width: '100%',
    height: '100%'
    },
});
