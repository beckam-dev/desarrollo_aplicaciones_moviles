import { useState } from "react";
import { styles } from "../styles/styles";
import { 
  Button,
  Text,
  View
} from "react-native";

const QuickSurvey = ({ onBack }) => {
  const [answer, setAnswer] = useState("");

  return (
    <View>
      <Button title="Volver" onPress={onBack} />
      <Text style={styles.title}>Mini-Reto: Encuesta rápida </Text>
      <Text>¿Te gusta React Native?</Text>
      <View>
        <Button title="Sí" onPress={() => setAnswer("Sí")} />
        <Button title="No" onPress={() => setAnswer("No")} />
      </View>
      {answer !== "" && <Text>Elegiste: {answer}</Text>}
      <Button title="Resetear" onPress={() => setAnswer("")} />
    </View>
  );
};
export default QuickSurvey;
