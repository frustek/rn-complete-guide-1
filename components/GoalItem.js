import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.09} onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "grey",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
