import React , {useEffect, useState} from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Forecast from "./Forecast";


export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=cb3c34b919bca3f446d93b22ae127494
            `)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    return (
        <ImageBackground source={require('../bg1.jpg')} style={styles.backdrop}>
            <View style={styles.container}>
                <Text style={styles.zipcode}>Zip Code</Text>
                <Text style={styles.zipcode}>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </View>
        </ImageBackground>
    );   
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        height: '100%'
    },
    container:{
        height:300,
        width:200,
        padding:50,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(10,10,10,0.5)',
    },
    zipcode : {
        fontSize:20,
        color:'white',
    },
});
   