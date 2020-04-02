import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const friends = [
  {
    name: "Arafat",
    age: "17"
  },
  {
    name: "Chrome",
    age: "8"
  },
  {
    name: "Windows 10",
    age: "20"
  },
  {
    name: "VS Code Editor",
    age: "10"
  },
  {
    name: "DELL 5559",
    age: "3"
  },
  {
    name: "Google",
    age: "15"
  }
];
const ListScreen = () => {
  return (
    <FlatList
      // horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - age {item.age}
        </Text>
      )}
    />
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
