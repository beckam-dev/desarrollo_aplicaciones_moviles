import { useState } from "react";
import { styles } from "../styles/trafficLightCSS";
import { View } from "react-native";
import { Button } from "react-native";
import { Text } from "react-native";

const TrafficLight = ({ onBack }) => {
  const [color, setColor] = useState("red");
  const [msj, setMsj] = useState("¡Detente!");
  const changeColor = (value) => {
    switch (value) {
      case "rojo":
        setColor("red");
        setMsj("¡Detente!");
        break;
  
      case "amarillo":
        setColor("yellow");
        setMsj("");
        break;
  
      case "verde":
        setColor("green");
        setMsj("¡Avanza!");
        break;
    }
  };
  
  return (
    <View>
      <Button title="Volver" onPress={onBack} />
      <View style={[styles.light, { backgroundColor: color }]}></View>
      <View>
        <Button title="Rojo" onPress={() => changeColor("rojo")}/>
        <Button title="Amarillo" onPress={() => changeColor("amarillo")}/>
        <Button title="Verde" onPress={() => changeColor("verde")}/>
      </View>
      <Text>{msj}</Text>
    </View>
  );
};

export default TrafficLight;
