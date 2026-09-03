import { useState } from "react";
import { styles } from "../styles/styles";
import { trafficCss } from "../styles/trafficLightCSS";
import { 
  Button,
  Text,
  View
} from "react-native";

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
        setMsj("¡Precaución!");
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
      <Text style={styles.title}>Semáforo interactivo</Text>
      <View style={[trafficCss.light, { backgroundColor: color }]}></View>
      <View>
        <Button title="Rojo" onPress={() => changeColor("rojo")} />
        <Button title="Amarillo" onPress={() => changeColor("amarillo")} />
        <Button title="Verde" onPress={() => changeColor("verde")} />
      </View>
      <Text>{msj}</Text>
    </View>
  );
};

export default TrafficLight;
