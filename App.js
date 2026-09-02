import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import DoubleNumber from "./src/components/DoubleNumber";
import TrafficLight from "./src/components/TrafficLight";
import { styles } from "./src/styles/styles.js";
import { useState } from "react";
import Home from "./src/pages/Home.js";

export default function App() {
  const [page, setPage] = useState("home");
  switch (page) {
    case "ejercicio1":
      return (
        <SafeAreaView style={styles.container}>
          <DoubleNumber onBack={() => setPage("Home")} />
        </SafeAreaView>
      );
    case "ejercicio2":
      return (
        <SafeAreaView style={styles.container}>
          <TrafficLight onBack={() => setPage("Home")} />
        </SafeAreaView>
      );
    case "ejercicio3":
      return (
        <SafeAreaView style={styles.container}>
          <DoubleNumber onBack={() => setPage("Home")} />
        </SafeAreaView>
      );
    case "ejercicio4":
      return (
        <SafeAreaView style={styles.container}>
          <DoubleNumber onBack={() => setPage("Home")} />
        </SafeAreaView>
      );
    default:
      return (
        <SafeAreaView style={styles.container}>
          <Home
            onEjercicio1={() => setPage("ejercicio1")}
            onEjercicio2={() => setPage("ejercicio2")}
            onEjercicio3={() => setPage("ejercicio3")}
            onEjercicio4={() => setPage("ejercicio4")}
          />
        </SafeAreaView>
      );
  }
}
