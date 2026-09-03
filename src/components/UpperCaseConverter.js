import { useState } from "react";
import { styles } from "../styles/styles";
import { 
  Text,
  Button,
  TextInput,
  View 
} from "react-native";

const UpperCaseConverter = ({ onBack }) => {
  const [texto, setTexto] = useState("");
  const limpiar = () => {
    setTexto("");
  };
  return (
    <View>
      <Button title="Volver" onPress={() => onBack()} />
      <Text style={styles.title}>Conversor de mayúsculas</Text>
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
