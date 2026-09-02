import { Button } from "react-native";
import { View } from "react-native";

const Home = ({
    onEjercicio1,
    onEjercicio2,
    onEjercicio3,
    onEjercicio4,
}) => {
  return (
    <View>
        <Button title="Ejercicio 1" onPress={onEjercicio1} />
        <Button title="Ejercicio 2" onPress={onEjercicio2} />
        <Button title="Ejercicio 3" onPress={onEjercicio3} />
        <Button title="Ejercicio 4" onPress={onEjercicio4} />
    </View>
  );
};

export default Home;