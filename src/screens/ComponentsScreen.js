import React from "react";
import { Text, StyleSheet, View } from "react-native";
const ComponentsScreen = () => {
  const myDsc = "I am Prottay Rudra";
  return (
    <View>
      <Text style={styles.textStyles}>This is the components screen</Text>
      <Text style={styles.myDsc}>{myDsc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 30
  },
  myDsc: {
    fontSize: 20
  }
});

export default ComponentsScreen;
