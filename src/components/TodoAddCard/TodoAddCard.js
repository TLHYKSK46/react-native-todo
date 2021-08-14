import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./TodoAddCard.style";
import ListItem from "../ListItem";
export default function TodoAddCard(props) {
  const [text, setText] = useState(null);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Yapılacak"
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.onPress(text)}
      >
        <Text style={styles.buttonText}>Ekle</Text>
      </TouchableOpacity>
    </View>
  );
}
