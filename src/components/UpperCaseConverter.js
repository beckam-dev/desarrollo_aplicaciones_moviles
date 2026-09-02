import { useState } from "react";
import { Text } from "react-native";
import { Button } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";

const UpperCaseConverter = ({ onBack }) => {
  const [texto, setTexto] = useState("");
  const limpiar = () => {
    setTexto("");
  };
  return (
    <View>
      <Button title="Volver" onPress={() => onBack()} />
      <TextInput
        placeholder="ingrese el texto"
        value={texto}
        onChangeText={setTexto}
      />
      {texto !== "" && (
        <>
          <Text>{texto.toUpperCase()}</Text>
          <Button title="Limpiar" onPress={() => limpiar()} />
        </>
      )}
    </View>
  );
};

export default UpperCaseConverter;
