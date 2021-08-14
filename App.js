import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ListItem from "./src/components/ListItem/ListItem";
import TodoAddCard from "./src/components/TodoAddCard/TodoAddCard";
export default function App() {
  const [todoItems, setTodoItems] = useState("");

      function addTodoItem(_text) {
        setTodoItems([...todoItems, {text:_text, completed: false}]);
    }
  function deleteTodoItem(_index) {
    let tempArr = [...todoItems];
    tempArr.splice(_index, 1);
    setTodoItems(tempArr);
  }
  function completeTodoItem(_index) {
    let tempArr = [...todoItems];
    tempArr[_index].completed = true;
    setTodoItems(tempArr);
  }

  return (
    <SafeAreaView style={styles.container}>
   <TodoAddCard onPress={addTodoItem} />
        <FlatList
          data={todoItems}
          renderItem={({ item, index }) => {
            return (
              <ListItem
              keyExtractor={(item, index) => index.toString()}
              item={item}
              deleteFunction={() => deleteTodoItem(index)}
              completeFunction={() => completeTodoItem(index)}
          
              />
            );
          }}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16, 
    justifyContent: 'space-between',
     flex: 1
  },
  container_todoAddCard: {
    height: 150,
    width: "100%",
    backgroundColor: "#eceff1",
    borderRadius: 10,
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 30,
  },
  textInput: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  button: {
    margin: 10,
    backgroundColor: "gray",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    padding: 10,
  },
});
