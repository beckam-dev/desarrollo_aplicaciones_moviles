import { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";

const DoubleNumber = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const calculateDoubleNumber = () => {
    if (number.trim() === "") {
      Alert.alert("Error", "Por favor ingrese un número");
      return;
    }

    const value = Number(number);

    if (isNaN(value)) {
      Alert.alert("Error", "Por favor ingrese un número válido");
      return;
    }

    setResult({
      number: value,
      double: value * 2,
    });
  };

  return (
    <View>
      <TextInput
        placeholder="Escriba un número"
        value={number}
        onChangeText={setNumber}
        keyboardType="numeric"
      />

      <Button
        title="Calcular"
        onPress={calculateDoubleNumber}
      />

      {result !== null && (
        <Text>
          El doble de {result.number} es: {result.double}
        </Text>
      )}
    </View>
  );
};

export default DoubleNumber;