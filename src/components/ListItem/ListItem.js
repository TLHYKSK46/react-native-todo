import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./ListItem.style";
export default function ListItem(props) {
  let style = props.item.completed
    ? {
        textDecorationLine: "line-through",
      }
    : {
      textDecorationLine:"none"
      };
      
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.completeFunction()}
        style={{
          paddingVertical: 8,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={[{ fontSize: 18, color: "white" }, style]}>
          {props.item.text}
        </Text>

        <TouchableOpacity
          style={{
            padding: 8,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
          onPress={() => props.deleteFunction()}
        >
          <Text style={{ color: "#00D100" }}>X</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}
