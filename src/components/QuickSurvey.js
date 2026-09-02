import { useState } from "react";
import { Button } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const QuickSurvey = ({onBack}) => {
  const [answer, setAnswer] = useState("");

  return (
    <View>
      <Text>¿Te gusta React Native?</Text>
      <View>
        <Button title="Sí" onPress={() => setAnswer("Sí")} />
        <Button title="No" onPress={() => setAnswer("No")} />
      </View>
      {answer !== "" && (<Text>Elegiste: {answer}</Text>)}
      <Button title="Resetear" onPress={() => setAnswer("")} />
    </View>
  );
};
export default QuickSurvey;
