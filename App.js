import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <Text style={styles.header}>App</Text>
      <Text style={styles.text}>HomeScreen</Text>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 25,
    borderBottomWidth: 1,
    marginTop: 28,
    borderBottomColor: "#bec4c3",
    paddingBottom: 10
  },
  text: {
    fontSize: 30
  }
});
