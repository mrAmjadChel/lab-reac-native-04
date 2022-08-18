import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import Weather from "./Weather";


export default function Forecast(props) {
    const image = 'http://openweathermap.org/img/w/'+props.icon+'.png'

    return (
        <View style = {styles.textView}>
            <Text style = {styles.temp}>City {props.name}</Text>
            <View style = {styles.container}>
                <Image source={{uri:image}} style = {styles.img} />
                <Text style = {styles.topic}>{props.description}</Text>
            </View>
            <Text style = {styles.temp}>temp: {props.temp} °C</Text>
            <Text style = {styles.temp}>tempmax: {props.tempmax} °C</Text>
            <Text style = {styles.temp}>tempmin: {props.tempmin} °C</Text>
            <Text style = {styles.temp}>SpeedWind: {props.speedwind} m/s</Text>
        </View>
    );
   }
 const styles = StyleSheet.create({
     textView : {
         flexDirection:'column',
         alignItems:'center',
         justifyContent:'center',
     },
     topic : {
        fontSize:20,
        color:'orange',
     },
     temp : {
        color:'white',
        fontSize:20,
     },
     container:{
        height:160,
        width:180,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
     },
     img: {
        width:100,
        height:100,
     }
 })
   